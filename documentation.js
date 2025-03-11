var out = {
    // wd = webdriver (aC if false)
    // im = is mobile (aB if true)
    // de = unknown, blank for now
    // prde = plugins, mimeTypes, webdriver, languages, if exists in navigator, aB(), if not, aC()
    // brla = if navigator["browserLanguage"], aB(), if not, aC()
    // pl = navigator["platform"]
    // wiinhe = window.innerHeight
    // wiouhe = window.outerHeight + "" (to make it a string)
    ev: J(),
    // th can be hard coded
    // ec = event counter
    // mm = mousemove
    // md = mousedown
    // cl = click
    // mu = mouseup
    // ts = touchstart
    // tm = touchmove
    // te = touchend
    // tc = touchcancel
    // me = mouseenter

    // should be 1 touchstart, 1 touchend, and ~1 touchmove per 6px moved

    // el = event list
    // format = _id (blank always) + "|" + eventName (see eventCounter above) + "|" + x,y of SLIDER at bottom + "|" + new Date.getTime() or time between last event and now + "|" isTrusted (hard code to 1)
    // x variable in x,y should have a slight 20-60 consistent offset from 0. So it shouldn't start at 0.
    be: getBehaviorData(),
    // x value of where the puzzle piece landed
    dist: 124,
    // hard code at 310 I think
    imageWidth: "310"
}


// =========================================
// ==            behavior data            ==
// =========================================

function aH(aJ) {
    try {
        var aK = aJ["getBoundingClientRect"]();
        return {
            "w": parseInt(aK["width"]),
            "h": parseInt(aK["height"])
        };
    } catch (aL) {
        return {
            "w": "",
            "h": ""
        };
    }
}

function getBehaviorData() {

    var aI = aH(this["slider"]["slideThumbnail"]);
    return {
        "ec": this["eventCount"],
        "el": this["eventList"],
        "th": {
            "el": this["thumbnailEventList"],
            "si": aI
        }
    };
};







// =========================================
// ==           general fp                ==
// =========================================

function aB() {
    return parseInt(Math["random"]() * 50) * 2;
}

function aC() {
    return parseInt(Math["random"]() * 50) * 2 + 1;
}

function aD() {
    var aG = [];
    var aH = "plugins|mimeTypes|webdriver|languages" ["split"]("|");
    for (var aI = 0; aI < aH["length"]; aI++) {
        var aJ = Object["getOwnPropertyDescriptor"] && Object["getOwnPropertyDescriptor"](navigator, aH[aI]) ? aB() : aC();
        aG["push"](aJ);
    }
    return aG["join"](",");
}

function driver() {
    return "$cdc_asdjflasutopfhvcZLmcfl_" in document || !!navigator["webdriver"] || ![];
};

function J() {


    var aE = aD();
    return {
        "wd": driver() ? aB() : aC(),
        "im": I() ? aB() : aC(),
        "de": "",
        "prde": aE,
        "brla": i["browserLanguage"] ? aB() : aC(),
        "pl": i["platform"],
        "wiinhe": g["innerHeight"],
        "wiouhe": g["outerHeight"] + ""
    };
}