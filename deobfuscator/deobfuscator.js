const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const vm = require('vm');
const {
    readFileSync,
    writeFileSync,
} = require("fs");
var output = ""

let beautify_opts = {
    comments: true,
    minified: false,
    concise: false,
}
const script = readFileSync('./original/a.js', 'utf-8');

const AST = parser.parse(script, {})

var code = ``
var decryptFuncCtx = vm.createContext();
var decryptFuncName = ``

const hexToAsciiVisitor = {
  NumericLiteral(path) {
    delete path.node.extra.raw;
  },
  StringLiteral(path) {
    delete path.node.extra.raw;
  }
}

const getArrayVisitor = {
    ArrayExpression(path) {
        code += `${generate(path.parentPath.parentPath.node).code}\n`
        path.remove()
        path.stop()
    }
}

const getShiftPushVisitor = {
    ExpressionStatement(path) {
        let c = generate(path.node).code;
        if(c.length > 1000) return;
        code += `${generate(path.node).code}\n`
        path.remove()
        path.stop()
    }
}

const getDecodeVisitor = {
    VariableDeclaration(path) {
        let {node} = path;
        if(!node.declarations || node.declarations.length !== 1 || !node.declarations[0].init || node.declarations[0].init.type !== 'FunctionExpression') return;
        code += `${generate(node).code}\n`
        decryptFuncName = node.declarations[0].id.name;
        path.remove()
        path.stop()
    }
}

const decodeStringsVisitor = {
    CallExpression(path) {
        let {node} = path;
        if(!node.callee || node.callee.name !== decryptFuncName) return;
        if(!node.arguments || node.arguments.length !== 2 || node.arguments[0].type !== 'StringLiteral' || node.arguments[1].type !== 'StringLiteral') return;
        let c = generate(node).code;
        const value = vm.runInContext(c, decryptFuncCtx)
        path.replaceWith(t.valueToNode(value))
    }
}

const replaceObjectExpressionVisitor = {
    VariableDeclarator(path) {
        let {node} = path;
        if(!node.init || node.init.type !== 'ObjectExpression') return;
        let {properties} = node.init;
        if(properties.length === 0) return;
        // validation
        let valid = true;
        let invalidSpot = 0;
        for(var i in properties) {
            let prop = properties[i]
            if(!prop || !prop.key || prop.key.type !== 'StringLiteral') {
                valid = false;
                invalidSpot = 1;
                break;
            }
            if(prop.value.type == "StringLiteral") continue;
            if(prop.value.type == "FunctionExpression") {
                if(prop.value.body.type !== "BlockStatement") {
                    valid = false;
                    invalidSpot = 3;
                    break;
                }
                if(prop.value.body.body.length !== 1) {
                    valid = false;
                    invalidSpot = 4;
                    break;
                }
                if(prop.value.body.body[0].type !== "ReturnStatement") {
                    valid = false;
                    invalidSpot = 5;
                    break;
                }
            }
        }
        if(!valid) {
            output += `INVALID ${invalidSpot}: ${generate(node).code}\n`
            return;
        }
        // log all the objects to output.txt
        output += `VALID: ${generate(node).code}\n`
        // replace
        let props = []
        for(var i in properties) {
            let prop = properties[i]
            props.push({
                key: prop.key.value,
                value: prop.value
            })
        }
        // get references to the object
        let bindings = path.scope.getBinding(node.id.name)
        if(!bindings) {
            output += `INVALID 6: ${generate(node).code}\n`
            return;
        }
        for(var i in bindings.referencePaths) {
            let ref = bindings.referencePaths[i]
            ref.scope.crawl()
            let path = ref.parentPath
            if(path.node.type != "MemberExpression" || path.node.property.type != "StringLiteral") continue;
            let key = path.node.property.value
            let value = getProperty(props, key)
            if(!value) continue;
            if(value.type == "StringLiteral") {
                path.replaceWith(value)
                continue;
            } else {
                // function expression here
                // lets handle function (f, g) {return f + g;} first
                path = path.parentPath
                if(!value.body || !value.body.body) continue;
                if(value.body.body[0].argument.type == "BinaryExpression") {
                    let toReplace = t.binaryExpression(value.body.body[0].argument.operator, path.node.arguments[0], path.node.arguments[1])
                    path.replaceWith(toReplace)
                    continue;
                }
                // now handle function (f, g) {return f(g);}
                let toReplace = t.callExpression(value, path.node.arguments)
                path.replaceWith(toReplace)
                continue;
            }
        }
        path.remove()
    }
}

function getProperty(props, key) {
    for(var i in props) {
        let prop = props[i]
        if(prop.key === key) return prop.value
    }
    return null
}

const controlFlowFlattening = {
    SwitchStatement(path){
      if(t.isMemberExpression(path.node.discriminant) &&
          t.isIdentifier(path.node.discriminant.object) &&
          t.isUpdateExpression(path.node.discriminant.property) &&
          path.node.discriminant.property.operator === "++" &&
          path.node.discriminant.property.prefix === false){
            let nodesInsideCasesInOrder = [];
            let mainBlockStatement = path.parentPath.parentPath.parentPath;
            let whileStatementKey = path.parentPath.parentPath.key;
            let arrayDeclaration = mainBlockStatement.node.body[0].declarations[0];
            let casesOrderArray = eval(generate(arrayDeclaration.init).code);
            let casesInTheirOrderInSwitch = new Map();
            for(let i = 0; i < path.node.cases.length; i++){
              casesInTheirOrderInSwitch.set(path.node.cases[i].test.value, i);
            }
            for(let i = 0; i < casesOrderArray.length; i++){
              let currentCase = path.node.cases[casesInTheirOrderInSwitch.get(casesOrderArray[i])];
              for(let j = 0; j < currentCase.consequent.length; j++){
                if(!t.isContinueStatement(currentCase.consequent[j]))
                nodesInsideCasesInOrder.push(currentCase.consequent[j]);
              }
            }
            mainBlockStatement.get('body')[0].remove();
            path.parentPath.parentPath.replaceWithMultiple(nodesInsideCasesInOrder);
          }
    }
}

const simplifyNestedFunctionsVisitor = {
    ReturnStatement(path) {
        let {node} = path;
        // Check if returning a function that immediately calls another function
        if (t.isFunctionExpression(node.argument) &&
            t.isCallExpression(node.argument.body.body[0].argument) &&
            t.isFunctionExpression(node.argument.body.body[0].argument.callee)) {
            
            // Get the inner function call
            let innerCall = node.argument.body.body[0].argument;
            
            // Create a simpler function that directly calls with the arguments
            let simplifiedFunc = t.functionExpression(
                null,
                node.argument.params,
                t.blockStatement([
                    t.returnStatement(
                        t.callExpression(
                            innerCall.arguments[0],
                            [innerCall.arguments[1]]
                        )
                    )
                ])
            );
            
            path.get('argument').replaceWith(simplifiedFunc);
        }
    }
};

traverse(AST, hexToAsciiVisitor)
traverse(AST, getArrayVisitor)
traverse(AST, getShiftPushVisitor)
traverse(AST, getDecodeVisitor)
vm.runInContext(code, decryptFuncCtx);
traverse(AST, decodeStringsVisitor)
traverse(AST, replaceObjectExpressionVisitor)
traverse(AST, controlFlowFlattening)
traverse(AST, simplifyNestedFunctionsVisitor)

writeFileSync("output.txt", output, 'utf-8')
writeFileSync("code.js", code, 'utf-8')

const final_code = generate(AST, beautify_opts).code;

fs.writeFileSync('./output/a.js', final_code);