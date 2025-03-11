(function () {
  window.bcap_tplString = "<div id=\"popupLoadingContentTpl\"><div id=\"popupLoadingContent\" style=\"width:112px; height:102px;background-color: white;border-radius: 8px;padding: 18px 0px\"><div class=\"waveSpinner\" style=\"margin: 2px auto 0px auto\"><div class=\"waveSpinnerItem waveSpinnerItem1\"></div><div class=\"waveSpinnerItem waveSpinnerItem2\"></div><div class=\"waveSpinnerItem waveSpinnerItem3\"></div><div class=\"waveSpinnerItem waveSpinnerItem4\"></div></div><div style=\"text-align: center;height:30px;line-height: 30px; width:100%;font-weight: 400; color:rgb(30, 35, 41);font-size: 14px\">{loading}</div></div></div><div id=\"selectedIconTpl\"><div class=\"bcap-image-cell-selected-icon\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16\" cy=\"16\" r=\"16\" fill=\"#FCD535\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.0354 20.8122L11.0339 20.8137L13.1552 22.935L13.1567 22.9335L13.1569 22.9337L15.2782 20.8124L15.278 20.8122L24.4689 11.6213L22.3476 9.5L13.1567 18.6909L9.62132 15.1555L7.5 17.2768L11.0354 20.8122Z\" fill=\"#1E2329\"/></svg></div></div><div id=\"imageTableTpl\"><div class=\"bcap-image-table bcap-left-transition page${page}\"><div class=\"bcap-image-row bcap-row1\"><div class=\"bcap-image-cell-container bcap-image11\" _id=\"${page}0\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image12\" _id=\"${page}1\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image13\" _id=\"${page}2\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div></div><div class=\"bcap-image-row bcap-row2\"><div class=\"bcap-image-cell-container bcap-image21\" _id=\"${page}3\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image22\" _id=\"${page}4\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image23\" _id=\"${page}5\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div></div><div class=\"bcap-image-row bcap-row3\"><div class=\"bcap-image-cell-container bcap-image31\" _id=\"${page}6\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image32\" _id=\"${page}7\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div><div class=\"bcap-image-cell-container bcap-image33\" _id=\"${page}8\" _action=\"imageSelect\"><div class=\"bcap-image-cell-image\"><div class=\"bcap-image-cell-image-mask\"></div></div></div></div></div></div><div id=\"captchaTpl\"><div class=\"bcap-modal\"><div class=\"bcap-top-part\"><div class=\"bcap-text-message-container\" style=\"\"><div class=\"bcap-text-message-title\">{selectAllMatchImages}</div><div class=\"bcap-text-message-title2\" id=\"tagLabel\"></div></div><div class=\"bcap-image-area-container\"><div class=\"bcap-image-table-container bcap-full-size\"></div><div class=\"bcap-image-area-loading\" style=\"top:0px; left:0px;position:relative;width:100%;height:100%;background-color:#f9f9f9;display:none;z-index: 4\"><div class=\"waveSpinnerContainer\" style=\"position:absolute;width:100px;left: 50%;top: 50%;margin-left: -50px;margin-top:-30px;\"><div class=\"waveSpinner\" style=\"margin: 0 auto\"><div class=\"waveSpinnerItem1\"></div><div class=\"waveSpinnerItem2\"></div><div class=\"waveSpinnerItem3\"></div><div class=\"waveSpinnerItem4\"></div></div><div style=\"text-align: center;height:30px;line-height: 30px; width:100%;font-weight: 400; color:rgb(30, 35, 41);font-size:14px\">Loading</div></div></div><div class=\"bcap-tipmessage-container bcap-full-size\"></div><div class=\"bcap-image-area-tipmessage\" style=\"position:absolute;width:100%;height:100%;display: none;justify-content: center;align-items: center;text-align: center;padding:20px;color:gray;font-size: 14px;color: gray;background-color:#f9f9f9;z-index: 3\">Network issue, please refresh</div><div class=\"bcap-success-message bcap-bottom-transition\" style=\"z-index:4;overflow:hidden;bottom:-48px;position: absolute; height:48px; padding:12px;width: 100%; background-color: #E6FFF1;\"><svg width=\"24\" height=\"24\" style=\"float:left;margin-right:8px;\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16.0662 7.5166L10.2001 13.3827L7.48398 10.6666L5.71622 12.4344L10.2001 16.9183L17.834 9.28437L16.0662 7.5166Z\" fill=\"#0ECB81\"/></svg><div class=\"bcap-success-message-text\" style=\"font-style: normal;font-weight: 500;font-size: 14px;line-height: 24px;height:24px;\">{verifySuccess}!</div></div><div class=\"bcap-error-message bcap-bottom-transition\" style=\"z-index:4;overflow:hidden;bottom:-48px;position: absolute; height:48px; padding:12px;width: 100%; background-color: #FEF1F2;\"><svg width=\"24\" height=\"24\" style=\"float:left;margin-right:8px;\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13.7674 11.9991L16.773 15.0047L15.0053 16.7725L11.9996 13.7669L8.99482 16.7717L7.22705 15.0039L10.2319 11.9991L7.22711 8.99433L8.99487 7.22656L11.9996 10.2313L15.0052 7.22573L16.773 8.9935L13.7674 11.9991Z\" fill=\"#F6465D\"/></svg><div class=\"bcap-error-message-text\" style=\"font-style: normal;color:#F6465D;font-weight: 500;font-size: 14px;line-height: 24px;height:24px;\">{tryAgain}!</div></div></div></div><div class=\"bcap-footer\"><div class=\"bcap-action-bar\"><div class=\"bcap-icon-container\" style=\"height: 100%;position: relative\"><svg class=\"bcap-icon bcap-icon-tip\" _action=\"close\" width=\"24\" height=\"24\" viewBox=\"0 0 28 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.81282 5.33794L5.33794 7.81282L11.5251 14L5.33794 20.1872L7.81282 22.6621L14 16.4749L20.1872 22.6621L22.6621 20.1872L16.4749 14L22.6621 7.81281L20.1872 5.33794L14 11.5251L7.81282 5.33794Z\" fill=\"#76808F\"/></svg> <svg class=\"bcap-icon bcap-icon-refresh bcap-icon-margin\" _action=\"refresh\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.9968 12.2101C19.9986 12.1403 19.9995 12.0703 19.9995 12C19.9995 11.9297 19.9986 11.8597 19.9968 11.7899V12.2101ZM15.5339 15.5371L12.9257 12.9289H19.9968V20L17.655 17.6582C16.2074 19.1051 14.208 20 11.9995 20C8.27179 20 5.13956 17.4504 4.25151 13.9999H7.41599C8.18752 15.7658 9.94963 17 12 17C13.3799 17 14.6292 16.441 15.5339 15.5371ZM19.7475 10C18.8594 6.54955 15.7272 4 11.9995 4C9.79069 4 7.79095 4.89517 6.34329 6.34252L4.00077 4V11.0711H11.0718L8.46485 8.46408C9.36964 7.55949 10.6195 7 12 7C14.0503 7 15.8124 8.2341 16.584 10H19.7475ZM3.99951 12C3.99951 11.9483 4 11.8968 4.00098 11.8454V12.1546C4 12.1032 3.99951 12.0517 3.99951 12Z\" fill=\"#707A8A\"/></svg> <svg class=\"bcap-icon bcap-icon-audio bcap-icon-margin\" display=\"none\" _action=\"toAudio\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M21.002 17V12C21.002 11.6893 20.9862 11.3824 20.9555 11.0798C20.9528 11.0532 20.95 11.0266 20.947 11C20.4496 6.50005 16.6345 3 12.002 3C7.03139 3 3.00195 7.02944 3.00195 12V17H8.00195V11H5.5784C6.05941 7.88491 8.75217 5.5 12.002 5.5C15.2517 5.5 17.9445 7.88491 18.4255 11H16.002V17H16.9009C16.0053 17.8777 14.8748 18.5166 13.6124 18.8139C13.2482 18.3202 12.6625 18 12.002 18C10.8974 18 10.002 18.8954 10.002 20C10.002 21.1046 10.8974 22 12.002 22C12.8165 22 13.5173 21.5131 13.8292 20.8144C16.18 20.3296 18.1958 18.9281 19.4864 17H21.002Z\" fill=\"#707A8A\"/></svg></div><div class=\"bcap-verify-button\" _id=\"vb\" _action=\"verify\" style=\"float:right\">{verify}</div></div></div></div></div><div id=\"waveSpinnerLoadingTpl\"><div class=\"waveSpinnerContainer\"><div class=\"waveSpinner\"><div class=\"waveSpinnerItem waveSpinnerItem1\"></div><div class=\"waveSpinnerItem waveSpinnerItem2\"></div><div class=\"waveSpinnerItem waveSpinnerItem3\"></div><div class=\"waveSpinnerItem waveSpinnerItem4\"></div></div><div data-bn-type=\"text\" class=\"waveSpinnerText\">{loading}</div></div></div><div id=\"bsTipMessageContent\"><div class=\"bs-tipmessage-content\"><div data-bn-type=\"text\" class=\"bs-tipmessage-text\">{errorMessage}</div></div></div><div id=\"bsTipMessageContent2\"><div class=\"bs-tipmessage-content\"><div data-bn-type=\"text\" class=\"bs-tipmessage-text\">{errorMessage}</div><a data-bn-type=\"link\" class=\"bs-tipmessage-text2\" _action=\"refresh\">{tryAgain}</a></div></div><div id=\"slideCaptchaTpl\"><div class=\"bs-modal\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" cursor=\"pointer\" class=\"bs-close-icon\" _action=\"close\"><path d=\"M19.003 6.42l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z\" fill=\"currentColor\"></path></svg><div data-bn-type=\"text\" class=\"bs-title\">{securityVerification}</div><div class=\"bs-content\" style=\"position: relative\"><div class=\"bs-main-image\" _id=\"im\"><div class=\"bs-slide-image\" _id=\"shim\" style=\"cursor: grab; left: 0px;\"></div></div><div class=\"bs-tipmessage-container\"></div><div class=\"verify-slider bs-slide-container\" _id=\"sl\"><div data-bn-type=\"text\" class=\"bs-slide-text\" _id=\"trtx\">{completePuzzle}</div><div class=\"bs-slide-thumb\" _id=\"slth\" style=\"cursor: grab; left: 0px;\"><div class=\"bs-slide-thumb-arrow\" _id=\"ar\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"bs-slide-thumb-icon thumb-arrow\"><path d=\"M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z\" fill=\"currentColor\"></path></svg> <svg style=\"display: none\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"bs-slide-thumb-icon thumb-success\"><path d=\"M20.5 7.42L9.41 18.5L8 17.09L3 12.09L4.41 10.67L9.41 15.67L19.08 6L20.5 7.42Z\" fill=\"white\"/></svg> <svg style=\"display: none\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" class=\"bs-slide-thumb-icon thumb-fail\"><path d=\"M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z\" fill=\"currentColor\"></path></svg></div></div></div><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" cursor=\"pointer\" _action=\"refresh\" class=\"bs-refresh-icon\"><path d=\"M20.7 11.925c0 2.1-.8 4.1-2.3 5.6-1.6 1.5-3.6 2.3-5.6 2.3-2 0-4-.8-5.6-2.3l-1.3-1.3 1.4-1.4 1.3 1.3c2.3 2.3 6 2.3 8.3 0 1.1-1.1 1.7-2.6 1.7-4.2s-.6-3.1-1.7-4.2c-2.3-2.3-6-2.3-8.3 0l-1.1 1.2h3.3v2H4v-6.8h2v3.4l1.2-1.2c3.1-3.1 8.1-3.1 11.2 0 1.5 1.5 2.3 3.5 2.3 5.6z\" fill=\"currentColor\"></path></svg></div></div></div>";
  window.bcap_cssString = ".bcapc-popup{box-sizing:border-box;margin:0;min-width:0;display:flex;position:fixed;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;z-index:1200;inset:0;background-color:rgba(0,0,0,.5);width:100%;height:100%;top:0;left:0;font-family:BinancePlex,Arial,sans-serif}.bcapc-app-embed,.bcapc-app-embed .bcapc-popup{background-color:transparent}.bcapc-popup-lang-ar{direction:rtl}.bcapc-popup div{box-sizing:border-box}@keyframes SpinnerAnimation1{0%{transform:scaleY(.4)}20%{transform:scaleY(1)}40%{transform:scaleY(.4)}100%{transform:scaleY(.4)}}@keyframes SlideShowAnimation{0%{transform:translate(-60px,0);opacity:0}100%{transform:translate(0,0);opacity:1}}.waveSpinnerContainer{box-sizing:border-box;margin:0;min-width:0;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:start;flex-direction:column}.waveSpinner{box-sizing:border-box;margin:0;min-width:0;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;width:36px;height:36px}.waveSpinnerItem{box-sizing:border-box;margin:0;min-width:0;background-color:#f0b90b;height:100%;width:3px}.waveSpinnerItem1{animation:1.2s ease-in-out -.3s infinite normal none running SpinnerAnimation1}.waveSpinnerItem2{animation:1.2s ease-in-out -.2s infinite normal none running SpinnerAnimation1}.waveSpinnerItem3{animation:1.2s ease-in-out -.1s infinite normal none running SpinnerAnimation1}.waveSpinnerItem4{animation:1.2s ease-in-out 0s infinite normal none running SpinnerAnimation1}.shakeAnimation{animation:shake .3s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(-2px,0,0)}20%,80%{transform:translate3d(6px,0,0)}30%,70%{transform:translate3d(-12px,0,0)}40%,60%{transform:translate3d(12px,0,0)}}.bcap-modal{padding:0;width:386px;height:530px;touch-action:none;position:relative;border-radius:8px 8px 8px 8px;padding:24px;background:#fff;font-size:14px;filter:drop-shadow(0 0 1px rgba(24, 26, 32, .1)) drop-shadow(0 16px 32px rgba(71, 77, 87, .16)) drop-shadow(0 8px 16px rgba(24, 26, 32, .16))}.bcapc-app-embed .bcap-modal{width:100%!important;height:100%!important}@media (max-width:600px){.bcap-modal{width:343px;height:479px;padding:16px}}@media (max-width:342px){.bcap-modal{width:320px;height:456px;padding:16px}}.bcap-full-size{width:100%;height:100%}.bcap-top-part{width:100%}.bcap-action-bar{width:100%;height:40px}.bcap-text-message-container{width:100%;height:64px}.bcap-text-message-title{font-style:normal;font-weight:400;font-size:14px;line-height:24px;height:24px;color:#474d57}.bcap-text-message-title2{font-style:normal;font-weight:600;font-size:24px;line-height:32px;color:#1e2329;margin-top:4px}.bcap-image-area-container{margin:16px 0 24px 0;position:relative;overflow:hidden;width:338px;height:338px}.bcap-tipmessage-container{box-sizing:border-box;margin:0 auto 16px;min-width:0;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.bcap-image-row{padding:0;position:static;width:338px;height:110px;margin:4px 0}.bcap-image-cell-container{width:110px;height:110px;left:0;top:0;float:left;margin:0 0;position:relative}@media (max-width:600px){.bcap-image-area-container{width:311px;height:311px;margin:16px 0}.bcap-image-row{width:311px;height:101px}.bcap-image-cell-container{width:101px;height:101px}}@media (max-width:342px){.bcap-image-area-container{width:288px;height:288px;margin:16px 0}.bcap-image-row{width:288px;height:92px}.bcap-image-cell-container{width:92px;height:92px}}.bcap-image-cell-selected-icon{position:absolute;z-index:2;left:50%;top:50%;margin-left:-16px;margin-top:-15px;display:none}.bcap-image-cell-container.bcap-image11 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 0}.bcap-image-cell-container.bcap-image12 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-110px 0}.bcap-image-cell-container.bcap-image13 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-220px 0}.bcap-image-cell-container.bcap-image21 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -110px}.bcap-image-cell-container.bcap-image22 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-110px -110px}.bcap-image-cell-container.bcap-image23 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-220px -110px}.bcap-image-cell-container.bcap-image31 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -220px}.bcap-image-cell-container.bcap-image32 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-110px -220px}.bcap-image-cell-container.bcap-image33 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-220px -220px}@media (max-width:600px){.bcap-image-cell-container.bcap-image11 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 0;background-size:303px 303px}.bcap-image-cell-container.bcap-image12 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-101px 0;background-size:303px 303px}.bcap-image-cell-container.bcap-image13 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-202px 0;background-size:303px 303px}.bcap-image-cell-container.bcap-mage21 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -101px;background-size:303px 303px}.bcap-image-cell-container.bcap-image22 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-101px -101px;background-size:303px 303px}.bcap-image-cell-container.bcap-image23 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-202px -102px;background-size:303px 303px}.bcap-image-cell-container.bcap-image31 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -202px;background-size:303px 303px}.bcap-image-cell-container.bcap-image32 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-101px -202px;background-size:303px 303px}.bcap-image-cell-container.bcap-image33 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-202px -202px;background-size:303px 303px}}@media (max-width:342px){.bcap-image-cell-container.bcap-image11 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 0;background-size:276px 276px}.bcap-image-cell-container.bcap-image12 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-92px 0;background-size:276px 276px}.bcap-image-cell-container.bcap-image13 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-184px 0;background-size:276px 276px}.bcap-image-cell-container.bcap-image21 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -92px;background-size:276px 276px}.bcap-image-cell-container.bcap-image22 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-92px -92px;background-size:276px 276px}.bcap-image-cell-container.bcap-image23 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-184px -92px;background-size:276px 276px}.bcap-image-cell-container.bcap-image31 .bcap-image-cell-image{background-repeat:no-repeat;background-position:0 -184px;background-size:276px 276px}.bcap-image-cell-container.bcap-image32 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-92px -184px;background-size:276px 276px}.bcap-image-cell-container.bcap-image33 .bcap-image-cell-image{background-repeat:no-repeat;background-position:-184px -184px;background-size:276px 276px}}.bcap-image-cell-container.selected .bcap-image-cell-image{transform:scale(.9);border-radius:8px}.bcap-image-cell-container.selected .bcap-image-cell-image .bcap-image-cell-image-mask{width:100%;height:100%;border-radius:8px;background:#000;opacity:.2}.bcap-image-cell-container.selected .bcap-image-cell-selected-icon{display:block}.bcap-image-cell-image{width:100%;height:100%;transition:all .2s ease-in-out}.bcap-icon-container{float:left}.bcap-verify-button{width:128px;height:40px;appearance:none;user-select:none;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;box-sizing:border-box;font-family:inherit;font-weight:500;text-align:center;text-decoration:none;outline:0;padding:12px 24px;line-height:24px;min-width:80px;word-break:keep-all;color:#181a20;border-radius:4px;min-height:24px;border:none;background:#fcd535;border-radius:4px;font-style:normal;font-weight:500;font-size:14px}.bcap-icon{cursor:pointer}.bcap-image12,.bcap-image13,.bcap-image22,.bcap-image23,.bcap-image32,.bcap-image33{margin-left:4px}@media (max-width:342px){.bcap-image12,.bcap-image13,.bcap-image22,.bcap-image23,.bcap-image32,.bcap-image33{margin-left:6px}}.bcap-icon-container .bcap-icon{position:relative;top:50%;margin-top:-12px}.bcap-icon-margin{margin-left:16px}.bcap-bottom-transition{-moz-transition:bottom .2s ease-out;-o-transition:bottom .2s ease-out;-webkit-transition:bottom .2s ease-out;transition:bottom .2s ease-out}.bcap-left-transition{-moz-transition:left .2s ease-out;-o-transition:left .2s ease-out;-webkit-transition:left .2s ease-out;transition:left .2s ease-out}.bcap-image-table.page1{position:absolute;left:0;top:0}.bcap-image-table.page2{position:absolute;left:100%;top:0}.bcap-image-table.page1.rotated{position:absolute;left:-100%;top:0}.bcap-image-table.page2.rotated{position:absolute;left:0;top:0}.bcap-row1{margin:0!important}.bcap-row2,.bcap-row3{margin:4px 0 0 0!important}@media (max-width:342px){.bcap-row2,.bcap-row3{margin:6px 0 0 0!important}}.bs-modal{box-sizing:border-box;margin:0;min-width:0;touch-action:none;position:relative;box-shadow:rgb(20 21 26 / 16%) 0 8px 16px,rgb(71 77 87 / 16%) 0 16px 32px,rgb(20 21 26 / 10%) 0 0 1px;border-radius:4px;background-color:#fff;width:342px;height:355px;padding:16px}.bcapc-app-embed .bs-modal{width:100%!important;height:100%!important}.bs-close-icon{box-sizing:border-box;margin:-6px -6px 0 0;min-width:0;color:#707a8a;font-size:20px;fill:#707a8a;float:right;width:1em;height:1em}.bs-title{box-sizing:border-box;margin:0 0 16px;min-width:0;color:#1e2329;font-size:18px;font-weight:400;line-height:23px}.bs-content{box-sizing:border-box;margin:0;min-width:0}.bs-main-image{box-sizing:border-box;margin:0 auto 16px;min-width:0;position:relative;background-color:#eaecef;height:192px;background-position-x:-60px;width:310px;overflow:hidden}.bs-slide-image{box-sizing:border-box;margin:0 0 16px;min-width:0;position:absolute;height:192px;width:60px;animation:.3s ease-out 0s 1 normal both running SlideShowAnimation}.bs-slide-container{box-sizing:border-box;margin:0 auto 16px;min-width:0;display:flex;position:relative;border-width:1px;border-style:solid;border-color:#eaecef;background-color:#f5f5f5;height:44px;width:310px;-webkit-box-align:center;align-items:center;user-select:none}.bs-slide-text{box-sizing:border-box;margin:0 0 0 52px;min-width:0;font-weight:400;font-size:12px;line-height:16px;transition:opacity .3s ease 0s;color:#1e2329;opacity:1}.bs-slide-thumb{box-sizing:border-box;margin:0 0 0 -1px;min-width:0;display:flex;position:absolute;height:44px;width:44px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:linear-gradient(#f8d12f 0,#f0b90b 100%)}.bs-slide-thumb .fail{background-color:green}.bs-slide-thumb .success{background-color:#cf304a}.bs-slide-thumb-arrow{box-sizing:border-box;margin:0;min-width:0;width:24px;height:24px}.bs-slide-thumb-icon{box-sizing:border-box;margin:0;min-width:0;color:#fff;font-size:24px;fill:#fff;width:1em;height:1em}.bs-refresh-icon{box-sizing:border-box;margin:-4px 0 0;min-width:0;color:#707a8a;font-size:24px;fill:#707a8a;float:right;width:1em;height:1em}.bs-tipmessage-container{box-sizing:border-box;margin:0 auto 16px;min-width:0;display:flex;background-color:#eaecef;width:310px;height:192px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.bs-tipmessage-content{box-sizing:border-box;margin:0;min-width:0;display:flex}.bs-tipmessage-text{box-sizing:border-box;margin:0 4px 0 0;min-width:0;font-weight:400;font-size:14px;color:#1e2329;line-height:normal}.bs-tipmessage-text2{box-sizing:border-box;margin:0;min-width:0;font-size:14px;color:#c99400;text-decoration:underline;cursor:pointer}.css-1poj8xc{box-sizing:border-box;margin:0;min-width:0;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;width:36px;height:36px}.waveSpinnerText{box-sizing:border-box;margin:12px 0 0;min-width:0;font-weight:400;font-size:14px;line-height:20px;color:#1e2329}@media (max-width:341px){.bs-modal{width:298px;height:319px}.bs-main-image{width:266px;height:164px;margin-bottom:12px;background-position-x:-50px;background-size:316px 164px}.bs-tipmessage-container{width:266px;height:164px;margin-bottom:12px}.bs-slide-image{width:50px;height:164px;margin-bottom:12px;background-size:316px 164px}.bs-slide-container{height:40px;width:266px}.bs-slide-text{margin-left:48px}.bs-slide-thumb{height:40px;width:40px}}.bs-left-transition{-moz-transition:left .3s ease-out;-o-transition:left .3s ease-out;-webkit-transition:left .3s ease-out;transition:left .3s ease-out}.bs-slide-thumb.bs-validate-fail{background:#d9304e}.bs-slide-thumb.bs-validate-success{background:#02c076}.bs-validate-fail .thumb-arrow,.bs-validate-success .thumb-arrow{display:none!important}.bs-validate-fail .thumb-fail{display:block!important}.bs-validate-success .thumb-success{display:block!important}";
  var a;
  (function () {
    function d(f, g, h) {
      function k(p, q) {
        if (!g[p]) {
          if (!f[p]) {
            var x = 0;
            var z = typeof require == "function" && require;
            if (!q && z) return function (p, q, u) {
              return function (f, g, h) {
                return f(g, h);
              }(p, q, u);
            }(z, p, !0);
            if (l) return function (p, q, u) {
              return function (f, g, h) {
                return f(g, h);
              }(p, q, u);
            }(l, p, !0);
            var y = new Error("Cannot find module '" + p + "'");
            throw y["code"] = "MODULE_NOT_FOUND", y;
          }
          var A = g[p] = {
            "exports": {}
          };
          f[p][0]["call"](A["exports"], function (B) {
            var C = f[p][1][B];
            return function (B, C) {
              return function (p, q) {
                return function (f, g) {
                  return f(g);
                }(p, q);
              }(B, C);
            }(k, C ? C : B);
          }, A, A["exports"], d, f, g, h);
        }
        return g[p]["exports"];
      }
      var l = typeof require == "function" && require;
      for (var m = 0; m < h["length"]; m++) k(h[m]);
      return k;
    }
    return d;
  })()({
    1: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = window["BCaptcha"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        "use strict";
        var w = function (g, h) {
          return g(h);
        }(c, 3);
        var x = w[1];
        var y = w[2];
        var z = w[3];
        var A = w[4];
        var B = y["ivw"];
        var C = c(2);
        var D = "20220812";
        g["BNCBridge"] = {
          "receive": function (aA) {
            console["log"]("receive:" + aA);
          }
        };
        g["BardApp"] = {
          "callbackFromNative": function (aA) {
            console["log"]("callbackFromNative:" + aA);
          },
          "eventFromNative": function (aA) {
            console["log"]("eventFromNative:" + aA);
          }
        };
        g["ArbelBridge"] = {};
        var E = g["ArbelBridge"];
        E["receive"] = function (aA) {};
        E["messageSend"] = function (aA) {
          if (typeof BardMagicalJourney != "undefined") {
            BardMagicalJourney["messageSend"]("captchaResult", "xxx", aA);
          } else {
            var aB = typeof g !== "undefined" && g["webkit"] && g["webkit"]["messageHandlers"];
            if (aB && aB["captchaResult"]) {
              var aC = "cb_" + function (aA, aB) {
                return function (g, h) {
                  return g(h);
                }(aA, aB);
              }(u, s["random"]() * 100000);
              aB["captchaResult"]["postMessage"]({
                "data": aA,
                "callbackId": aC
              });
            } else {}
          }
        };
        E["isSecNative"] = function () {
          var aA = typeof BardMagicalJourney != "undefined" && (BardMagicalJourney["getDev"] ? !![] : ![]);
          return aA || i["userAgent"]["indexOf"]("SecVersion") != -1;
        };
        E["getNativeConfig"] = function () {
          if (E["isSecNative"]() && typeof BardMagicalJourney != "undefined") {
            var aA = BardMagicalJourney["getDev"]("config");
            return JSON["parse"](aA);
          }
          return {};
        };
        function F(aA) {
          E && E["messageSend"](aA);
        }
        var G = {
          "onValidateSuccess": function (aA, aB) {
            var aD = 0;
            var aE = {};
            aE["type"] = "SUCCESS";
            aE["challenge"] = aA;
            aE["token"] = aB;
            (function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            })(F, JSON["stringify"](aE));
          },
          "onValidateFail": function (aA) {
            var aB = {};
            aB["type"] = "FAIL";
            aB["reason"] = aA;
            (function (g, h) {
              return g(h);
            })(F, JSON["stringify"](aB));
          },
          "onError": function (aA) {
            var aB = {};
            aB["type"] = "ERROR";
            aB["reason"] = aA;
            F(JSON["stringify"](aB));
          },
          "onLoadSuccess": function () {},
          "onLoadFail": function () {},
          "onReady": function () {
            var aA = {};
            aA["type"] = "INIT";
            (function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            })(F, JSON["stringify"](aA));
          },
          "onClose": function () {
            var aA = {};
            aA["type"] = "CLOSE";
            (function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            })(F, JSON["stringify"](aA));
          },
          "onCancel": function () {
            var aA = {};
            aA["type"] = "CANCEL";
            (function (g, h) {
              return g(h);
            })(F, JSON["stringify"](aA));
          }
        };
        function H(aA) {
          return aA || function () {};
        }
        function I() {
          var aA = new r("Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile", "i");
          var aB = aA["test"](i["userAgent"]) || "ontouchstart" in g || "orientation" in g;
          return aB;
        }
        ;
        function J() {
          function aB() {
            return function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(u, s["random"]() * 50) * 2;
          }
          function aC() {
            return function (aG, aH) {
              return function (g, h) {
                return g(h);
              }(aG, aH);
            }(u, s["random"]() * 50) * 2 + 1;
          }
          function aD() {
            var aG = [];
            var aH = "plugins|mimeTypes|webdriver|languages"["split"]("|");
            for (var aI = 0; aI < aH["length"]; aI++) {
              var aJ = m["getOwnPropertyDescriptor"] && m["getOwnPropertyDescriptor"](i, aH[aI]) ? function (aG) {
                return function (g) {
                  return g();
                }(aG);
              }(aB) : aC();
              aG["push"](aJ);
            }
            return aG["join"](",");
          }
          var aE = aD();
          function aF() {
            var aG = "";
            if (typeof captcha_native != "undefined") {
              try {
                aG = captcha_native["geDe"]();
              } catch (aH) {}
            } else {}
            return aG;
          }
          return {
            "wd": function (g) {
              return g();
            }(B) ? function (g) {
              return g();
            }(aB) : function (g) {
              return g();
            }(aC),
            "im": function (g) {
              return g();
            }(I) ? function (g) {
              return g();
            }(aB) : function (g) {
              return g();
            }(aC),
            "de": aF(),
            "prde": aE,
            "brla": i["browserLanguage"] ? function (g) {
              return g();
            }(aB) : function (g) {
              return g();
            }(aC),
            "pl": i["platform"],
            "wiinhe": g["innerHeight"],
            "wiouhe": g["outerHeight"] + ""
          };
        }
        function K(aA, aB) {
          var aC = aA["split"]("|");
          var aD = aB["split"]("|");
          var aE = {};
          for (var aF = 0; aF < aC["length"]; aF++) {
            aE[aC[aF]] = aD[aF];
          }
          return aE;
        }
        var L = 0;
        var M = 1;
        var N = 2;
        var O = 3;
        var P = 4;
        var Q = 5;
        var R = "en";
        var S = "mousemove|mousedown|click|mouseup|touchstart|touchmove|touchend|touchcancel|mouseenter";
        var T = "mm|md|cl|mu|ts|tm|te|tc|me";
        var U = K(S, T);
        var V = "cap_timeout";
        var W = "cap_network_error";
        var X = "cap_system_error";
        var Y = "cap_loading";
        var Z = "cap_try_again";
        var a0 = "cap_too_many_attempts";
        var a1 = "cap_complete_puzzle";
        var a2 = "cap_security_verification";
        var a3 = "cap_select_all_match_images";
        var a4 = "cap_verify";
        var a5 = "cap_verify_success";
        var a6 = "cap_verify_fail";
        var a7 = "cap_next";
        var a8 = {};
        a8["en"] = {
          "cap_timeout": "Timeout",
          "cap_network_error": "Network error",
          "cap_system_error": "System error",
          "cap_loading": "Loading",
          "cap_try_again": "Please try again",
          "cap_too_many_attempts": "Too many attempts",
          "cap_complete_puzzle": "Slide to complete the puzzle",
          "cap_security_verification": "Security Verification",
          "cap_select_all_match_images": "Please select all images with",
          "cap_verify": "Verify",
          "cap_next": "Next",
          "cap_verify_success": "Success",
          "cap_verify_fail": "Please try again"
        };
        var a9 = {};
        function aa(aA) {
          var aB = a9[aA] || a8["en"][aA] || "";
          return aB;
        }
        function ab(aA) {
          if (aA && aA["i18n"]) {
            a9 = JSON["parse"](aA["i18n"]);
          }
        }
        function ac(aA) {
          var aB = 0;
          for (var aC = 0; aC < aA["length"]; aC++) {
            aB += aA["charCodeAt"](aC);
          }
          return aB;
        }
        ;
        function ad(aA) {
          var aB = aA["type"];
          var aC = "";
          if (aB["indexOf"]("touch") != -1 && aA["touches"] && aA["touches"]["length"] > 0) {
            aC = u(aA["touches"][0]["clientX"]) + "," + function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(u, aA["touches"][0]["clientY"]);
          } else {
            aC = aA["clientY"] != undefined ? function (aA, aB) {
              return aA(aB);
            }(u, aA["clientX"]) + "," + function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(u, aA["clientY"]) : "";
          }
          return aC;
        }
        ;
        function ae(aA, aB) {
          try {
            var aC = aA["getBoundingClientRect"]();
            var aD = s["round"](aB["clientX"] - aC["left"]);
            var aE = s["round"](aB["clientY"] - aC["top"]);
            return {
              "x": function (g, h) {
                return g(h);
              }(u, aD),
              "y": function (g, h) {
                return g(h);
              }(u, aE)
            };
          } catch (aF) {
            return {
              "x": "",
              "y": ""
            };
          }
        }
        ;
        function af(aA, aB, aC, aD) {
          var aE = [];
          if (aB instanceof o) {
            aE = aB;
          } else {
            aE["push"](aB);
          }
          for (var aF in aE) {
            var aG = aE[aF];
            if (aA["addEventListener"]) {
              aA["addEventListener"](aG, aC, aD != undefined ? aD : ![]);
            } else if (aA["attachEvent"]) {
              aA["attachEvent"]("on" + aG, aC);
            } else {
              aA["on" + aG] = aC;
            }
          }
        }
        function ag(aA, aB, aC) {
          var aD = [];
          if (aB instanceof o) {
            aD = aB;
          } else {
            aD["push"](aB);
          }
          for (var aE in aD) {
            var aF = aD[aE];
            if (aA["removeEventListener"]) {
              aA["removeEventListener"](aF, aC, ![]);
            } else if (aA["attachEvent"]) {
              aA["detachEvent"]("on" + aF, aC);
            }
          }
        }
        function ah(aA, aB) {
          var aC = aA["className"] || "";
          if (!aC) {
            aA["className"] = aB;
            return;
          }
          var aD = aC["split"](/\s+/);
          if (aD["indexOf"](aB) == -1) {
            aD["push"](aB);
            aA["className"] = aD["join"](" ");
          }
        }
        function ai(aA, aB) {
          var aD = 0;
          var aF = aA["className"] || "";
          var aE = aF["split"](/\s+/);
          var aG = [];
          for (var aH = 0; aH < aE["length"]; aH++) {
            if (aB != aE[aH]) {
              aG["push"](aE[aH]);
            }
          }
          aA["className"] = aG["join"](" ");
        }
        function aj(aA, aB) {
          var aC = aA["className"];
          var aD = aA["className"]["split"](" ");
          if (aD["indexOf"](aB) != -1) {
            (function (aA, aB, aC) {
              return function (g, h, i) {
                return g(h, i);
              }(aA, aB, aC);
            })(ai, aA, aB);
          } else {
            aA["className"] = aA["className"] + " " + aB;
          }
        }
        function ak(aA) {
          var aB = h["createElement"]("style");
          aB["innerText"] = aA;
          h["head"]["appendChild"](aB);
        }
        function al(aA) {
          this["config"] = aA;
          this["popContainer"] = null;
          this["show"] = function (aC, aD) {
            aD = function (aA, aB) {
              return function (g, h) {
                return g || h;
              }(aA, aB);
            }(aD, {});
            var aF = h["createElement"]("div");
            aF["className"] = "bcapc-popup";
            aF["className"] = aF["className"] + " " + (this["config"]["className"] || "");
            h["body"]["appendChild"](aF);
            if (typeof aC == "string") {
              aF["innerHTML"] = aC;
            } else {
              aF["appendChild"](aC);
            }
            this["popContainer"] = aF;
            var aG = this;
            (function (aA, aB, aC, aD) {
              return function (g, h, i, j) {
                return g(h, i, j);
              }(aA, aB, aC, aD);
            })(af, aF, "click", function (aH) {
              var aI = aH["target"] || aH["srcElement"];
              if (aI == aF) {
                aG["config"]["validateRequired"] || aG["destroy"](!![]);
              }
            });
            (function (aA, aB, aC, aD) {
              return function (g, h, i, j) {
                return g(h, i, j);
              }(aA, aB, aC, aD);
            })(af, h, ["keydown"], function (aH) {
              if (aH["key"] == "Escape" || aH["keyCode"] == 27) {
                aG["config"]["validateRequired"] || aG["destroy"](!![]);
              }
            });
          };
          this["isDestroyed"] = function () {
            if (this["destroyed"] != undefined) {
              return this["destroyed"];
            } else {
              return ![];
            }
          };
          this["getPopContainer"] = function () {
            return this["popContainer"];
          };
          this["destroy"] = function (aC, aD) {
            if (this["isDestroyed"]()) {
              return;
            }
            this["popContainer"]["style"]["opacity"] = "0";
            var aF = this["maskLayer"];
            var aG = this["popContainer"];
            function aH() {
              h["body"]["removeChild"](aG);
            }
            aD ? function (aC) {
              return aC();
            }(aH) : function (aC, aD, aE) {
              return aC(aD, aE);
            }(j, function () {
              (function (aI) {
                return aI();
              })(aH);
            }, 300);
            if (aC && this["config"]["onDestroy"]) {
              this["config"]["onDestroy"]();
            }
            this["destroyed"] = !![];
          };
        }
        function am(aA, aB, aC) {
          var aD = ![];
          function aE() {
            (function (aA, aB) {
              return function (g, h) {
                return g && h;
              }(aA, aB);
            })(!aD, aB) && function (aA) {
              return aA();
            }(aB);
            aD = !![];
          }
          var aF = ![];
          function aG() {
            (function (aA, aB) {
              return function (g, h) {
                return g && h;
              }(aA, aB);
            })(!aD, !aF) && aC && aC();
            aF = !![];
          }
          var aH = new q();
          aH["addEventListener"]("load", function () {
            (function (aA) {
              return aA();
            })(aE);
          });
          aH["addEventListener"]("error", function () {
            (function (aA) {
              return function (g) {
                return g();
              }(aA);
            })(aG);
          });
          (function (g, h, i) {
            return g(h, i);
          })(j, aG, 15000);
          aH["src"] = aA;
        }
        function an() {
          var aA = {};
          try {
            var aC = 0;
            aA["device-info"] = C["deviceInfo"];
            aA["clienttype"] = C["clienttype"];
            aA["bnc-uuid"] = "xxx";
            aA["fvideo-id"] = "xxx";
            aA["x-captcha-se"] = "true";
            aA["captcha-sdk-version"] = "1.0.0";
          } catch (aD) {}
          return aA;
        }
        var ao = 0;
        var ap = 1;
        var aq = 2;
        var ar = 3;
        var as = 4;
        var at = 5;
        var au = 6;
        function av(aA, aB, aC) {
          var aE = 0;
          this["nativeConfig"] = E ? E["getNativeConfig"]() : {};
          aA["apiHost"] = aA["apiHost"];
          aA["staticHost"] = aA["staticHost"];
          aA["cdnServer"] = aA["cdnServer"] || aA["staticHost"];
          aA["lang"] = aA["lang"] || "en";
          aA["bizId"] = aA["bizId"] || "";
          aA["mainColor"] = aA["mainColor"] || this["nativeConfig"]["mainColor"];
          aA["buttonBackground"] = aA["buttonBackground"] || aA["mainColor"];
          aA["nativeScreenSize"] = aA["size"] ? JSON["parse"](aA["size"]) : this["nativeConfig"]["size"];
          R = aA["lang"];
          this["config"] = aA;
          this["showOption"] = aC;
          var aF = aA["apiBasePath"] || "/v1/public/antibot";
          this["getCaptchaApi"] = aA["apiHost"] + aF + "/getCaptcha";
          this["validateCaptchaApi"] = aA["apiHost"] + aF + "/validateCaptcha";
          this["refreshCaptchaApi"] = aA["apiHost"] + aF + "/refreshCaptcha";
          this["feMonitorApi"] = aA["apiHost"] + aF + "/fe_monitor";
          this["rootElement"] = null;
          this["popupManager"] = null;
          this["states"] = {};
          var aN = this;
          this["getApiCommonData"] = function () {
            var aP = {};
            aP["bizId"] = aN["config"]["bizId"];
            aP["sv"] = D;
            if (aN["config"]["snv"]) {
              aP["snv"] = aN["config"]["snv"];
            }
            aP["lang"] = aN["config"]["lang"];
            var aQ = aN["showOption"]["securityCheckResponseValidateId"] || this["config"]["securityCheckResponseValidateId"] || this["nativeConfig"]["securityCheckResponseValidateId"];
            if (aQ) {
              aP["securityCheckResponseValidateId"] = aQ;
            }
            aP["clientType"] = C["clienttype"] || "";
            return aP;
          };
          this["decideNativeSize"] = function () {
            if (E && E["isSecNative"]()) {
              var aQ = 0;
              var aU = [298, 319];
              var aT = [342, 355];
              var aR = [320, 456];
              var aX = [343, 479];
              var aY = this["config"]["nativeScreenSize"];
              var aV = aY[0];
              var aW = aT;
              if (aV > 359) {
                if (this["captchaType"] == "grid") {
                  aW = aX;
                } else {
                  aW = aT;
                }
              } else {
                if (this["captchaType"] == "grid") {
                  aW = aR;
                } else {
                  aW = aU;
                }
              }
              var aS = {};
              aS["type"] = "SET_SIZE";
              aS["width"] = aW[0] + "";
              aS["height"] = aW[1] + "";
              E["messageSend"](JSON["stringify"](aS));
            }
          };
          this["feMonitor"] = function (aP) {
            aP["bizId"] = this["config"]["bizId"];
            aP["lang"] = this["config"]["lang"];
            if (this["captchaInfo"] && this["captchaInfo"]["sig"]) {
              aP["sig"] = this["captchaInfo"]["sig"];
            }
            (function (aA, aB, aC, aD) {
              return function (g, h, i, j) {
                return g(h, i, j);
              }(aA, aB, aC, aD);
            })(z, this["feMonitorApi"], aP, {
              "contentType": "application/x-www-form-urlencoded; charset=UTF-8"
            });
          };
          try {
            if (g["bcap_cssString"] && !av["cssLoaded"]) {
              var aI = 0;
              var aM = g["bcap_cssString"];
              var aJ = ".bs-slide-thumb {background:buttonBackground;}.bcap-verify-button{background:buttonBackground;}";
              var aK = ".waveSpinnerItem{background: mainColor !important;}";
              if (this["config"]["mainColor"]) {
                var aL = aK["replace"]("mainColor", this["config"]["mainColor"]);
                aL += aJ["replace"](/buttonBackground/g, this["config"]["buttonBackground"]);
                aM += aL;
              }
              (function (g, h) {
                return g(h);
              })(ak, aM);
              av["cssLoaded"] = !![];
            }
            if (g["bcap_tplString"]) {
              this["tplElement"] = h["createElement"]("div");
              this["tplElement"]["innerHTML"] = g["bcap_tplString"];
            } else {
              this["tplElement"] = h;
            }
          } catch (aO) {
            this["feMonitor"]({
              "type": "csInit",
              "e": aO["toString"]()
            });
          }
        }
        function aw(aA, aB, aC) {
          this["captchaType"] = "grid";
          av["call"](this, aA, aB, aC);
        }
        aw["prototype"]["setState"] = function (aA, aB) {
          this["states"][aA] = aB;
          if (aA == "verifyState") {
            if (aB == "firstStep") {
              this["rootElement"]["querySelector"](".bcap-verify-button")["innerText"] = function (g, h) {
                return g(h);
              }(aa, a7);
            } else {
              this["rootElement"]["querySelector"](".bcap-verify-button")["innerText"] = function (g, h) {
                return g(h);
              }(aa, a4);
            }
          } else {}
        };
        aw["prototype"]["getState"] = function (aA, aB) {
          return this["states"][aA];
        };
        aw["prototype"]["showResult"] = function (aA, aB, aC) {
          if (aA == "success") {
            var aE = this["rootElement"]["getElementsByClassName"]("bcap-success-message")[0];
            aE["style"]["bottom"] = 0 + "px";
            this["rootElement"]["getElementsByClassName"]("bcap-success-message-text")[0]["innerText"] = function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(aa, a5) || "Success";
            (function (aA, aB, aC) {
              return function (g, h, i) {
                return g(h, i);
              }(aA, aB, aC);
            })(j, function () {
              aE["style"]["bottom"] = -48 + "px";
              aC && function (aG) {
                return function (aA) {
                  return function (g) {
                    return g();
                  }(aA);
                }(aG);
              }(aC);
            }, 500);
          }
          if (aA == "error") {
            var aF = this["rootElement"]["getElementsByClassName"]("bcap-error-message")[0];
            aF["style"]["bottom"] = 0 + "px";
            this["rootElement"]["getElementsByClassName"]("bcap-error-message-text")[0]["innerText"] = function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(aa, a6);
            (function (aA, aB, aC) {
              return function (g, h, i) {
                return g(h, i);
              }(aA, aB, aC);
            })(j, function () {
              aF["style"]["bottom"] = -48 + "px";
              aC && function (aA) {
                return function (g) {
                  return g();
                }(aA);
              }(aC);
            }, 500);
          }
        };
        aw["prototype"]["closeCaptcha"] = function () {
          this["showOption"]["onClose"]();
          if (!this["config"]["appEmbed"]) {
            this["popupManager"]["destroy"]();
          }
        };
        aw["prototype"]["showLoading"] = function () {
          var aB = 0;
          var aD = this["rootElement"]["querySelector"](".bcap-tipmessage-container");
          var aC = this["tplElement"]["querySelector"]("#waveSpinnerLoadingTpl")["innerHTML"];
          aC = aC["replace"]("{loading}", function (g, h) {
            return g(h);
          }(aa, Y));
          aD["innerHTML"] = aC;
          aD["style"]["display"] = "flex";
          this["rootElement"]["querySelector"](".bcap-image-table-container")["style"]["display"] = "none";
        };
        aw["prototype"]["hideLoading"] = function () {
          var aA = this["rootElement"]["querySelector"](".bcap-tipmessage-container");
          aA["style"]["display"] = "none";
          this["rootElement"]["querySelector"](".bcap-image-table-container")["style"]["display"] = "block";
        };
        aw["prototype"]["showTipMessage"] = function (aA) {
          var aC = 0;
          var aD = this["rootElement"]["querySelector"](".bcap-tipmessage-container");
          var aE = this["tplElement"]["querySelector"]("#bsTipMessageContent")["innerHTML"];
          aE = aE["replace"]("{errorMessage}", aa(aA));
          if (aA == W) {
            aE = this["tplElement"]["querySelector"]("#bsTipMessageContent2")["innerHTML"];
            aE = aE["replace"]("{errorMessage}", aa(aA));
            aE = aE["replace"]("{tryAgain}", function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(aa, Z));
          }
          aD["innerHTML"] = aE;
          aD["style"]["display"] = "flex";
          this["rootElement"]["querySelector"](".bcap-image-table-container")["style"]["display"] = "none";
        };
        aw["prototype"]["hideTipMessage"] = function () {
          this["hideLoading"]();
        };
        aw["prototype"]["popupAndInitRender"] = function (aA) {
          var aB = this;
          if (this["config"]["appEmbed"]) {
            (function (aA, aB, aC) {
              return aA(aB, aC);
            })(ah, h["body"], "bcapc-app-embed");
          }
          this["popupManager"] = new al({
            "validateRequired": ![],
            "className": "bcap-popup bcapc-popup-lang-" + (this["config"]["lang"] || "en"),
            "onDestroy": function () {
              aB["showOption"]["onCancel"]();
              aB["showOption"]["onClose"]();
            }
          });
          this["popupManager"]["show"]("");
          this["init"](aA, this["popupManager"]["getPopContainer"]());
        };
        aw["prototype"]["init"] = function (aA, aB) {
          var aD = 0;
          this["setState"]("cap", ao);
          this["captchaInfo"] = aA;
          this["rootElement"] = aB;
          this["currentSig"] = aA["sig"];
          var aE = this["tplElement"]["querySelector"]("#captchaTpl")["innerHTML"];
          aE = aE["replace"]("{selectAllMatchImages}", function (g, h) {
            return g(h);
          }(aa, a3))["replace"]("{verify}", function (g, h) {
            return g(h);
          }(aa, a4))["replace"]("{verifySuccess}", function (g, h) {
            return g(h);
          }(aa, a5))["replace"]("{tryAgain}", function (g, h) {
            return g(h);
          }(aa, Z));
          this["rootElement"]["innerHTML"] = aE;
          this["showTipMessage"](Y);
          this["decideNativeSize"]();
          this["showOption"]["onReady"]();
          this["refreshCaptcha"]();
          this["bindEvent"]();
          this["setState"]("cap", ap);
        };
        aw["prototype"]["bindEvent"] = function () {
          var aB = 0;
          var aC = this;
          this["eventList"] = [];
          this["lastEventTime"] = "";
          this["eventCount"] = {};
          this["collectEvent"] = function (aE) {
            var aF = [];
            var aG = aE["target"]["getAttribute"]("_id") || "";
            var aH = aE["type"];
            var aI = function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            }(ad, aE);
            var aJ = U[aH];
            this["eventCount"][aJ] = (this["eventCount"][aJ] || 0) + 1;
            var aK = new n()["getTime"]();
            var aL = this["lastEventTime"] ? aK - this["lastEventTime"] : aK;
            this["lastEventTime"] = aK;
            aF["push"](aG);
            aF["push"](U[aH]);
            aF["push"](aI);
            aF["push"](aL);
            var aM = aH == "click" || aH == "mousedown" || aH == "touchstart";
            if (aM) {
              var aN = function (aA, aB, aC) {
                return aA(aB, aC);
              }(ae, aE["target"], aE);
              aF["push"](aN["x"] + "," + aN["y"]);
            }
            if (!aM && this["eventList"]["length"] > 150) {
              return;
            }
            this["eventList"]["push"](aF["join"]("|"));
          };
          this["resetBehaviorData"] = function () {
            this["eventCount"] = {};
            this["eventList"] = [];
            this["lastEventTime"] = "";
          };
          this["getBehaviorData"] = function () {
            return aE;
          };
          af(aC["rootElement"], ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend", "touchcancel"], function (aE) {
            var aF = aE["target"] || aE["srcElement"];
            while (aF["parentElement"] != null && aF["getAttribute"]("_action") == null) {
              aF = aF["parentElement"];
            }
            if (aE["type"] == "click" && aF["getAttribute"]("_action")) {
              aC["onAction"](aF, aF["getAttribute"]("_action"));
            }
            aC["collectEvent"](aE);
          });
        };
        aw["prototype"]["onAction"] = function (aA, aB) {
          var aD = 0;
          var aI = this;
          if (aB == "verify") {
            if (aI["states"]["verifyState"] == "firstStep") {
              aI["setState"]("verifyState", "commit");
              var aJ = aI["rootElement"]["querySelectorAll"](".bcap-image-table");
              for (var aK = 0; aK < aJ["length"]; aK++) {
                aJ[aK]["className"] += " rotated";
              }
            } else {
              aI["onCommit"]();
            }
          }
          if (aB == "refresh") {
            aI["onRefresh"]();
          }
          if (aB == "close") {
            aI["showOption"]["onCancel"]();
            aI["closeCaptcha"]();
          }
          if (aB == "imageSelect") {
            var aF = 0;
            var aG = aA["querySelector"](".bcap-image-cell-selected-icon");
            if (!aG) {
              aA["innerHTML"] += this["tplElement"]["querySelector"]("#selectedIconTpl")["innerHTML"];
            }
            var aH = aA["getAttribute"]("selected");
            if (aH) {
              aA["removeAttribute"]("selected");
            } else {
              aA["setAttribute"]("selected", !![]);
            }
            aj(aA, "selected");
          }
        };
        aw["prototype"]["onCommit"] = function () {
          var aB = this;
          if (this["getState"]("cap") == as || this["getState"]("cap") == aq) {
            return;
          }
          this["setState"]("cap", as);
          var aC = [];
          var aD = [];
          var aE = this["rootElement"]["querySelectorAll"](".bcap-image-cell-container");
          for (var aF = 0; aF < aE["length"]; aF++) {
            var aG = aE[aF];
            if (aG["getAttribute"]("selected")) {
              var aH = aG["getAttribute"]("_id");
              if (aH["startsWith"]("1")) {
                aC["push"](aH["substring"](1));
              }
              if (aH["startsWith"]("2")) {
                aD["push"](aH["substring"](1));
              }
            }
          }
          var aI = ![];
          if (this["captchaInfo"]["path2"]["split"](",")["length"] == 2) {
            aI = !![];
          }
          function aJ() {
            var aQ = aC["join"]("-");
            if (aI) {
              aQ += "," + aD["join"]("-");
            }
            return aQ;
          }
          var aK = function (aQ) {
            aB["setState"]("cap", at);
            if (!aQ || !aQ["data"] || aQ["data"]["result"] == N || aQ["data"]["result"] == O || aQ["data"]["result"] == Q) {
              var aT = 0;
              var aU = 2000;
              var aV = "";
              if (aQ["data"]["result"] == N) {
                aV = V;
              }
              if (aQ["data"]["result"] == O) {
                aV = X;
              }
              if (aQ["data"]["result"] == Q) {
                aV = a0;
              }
              aB["showTipMessage"](aV);
              (function (aA, aB, aC) {
                return aA(aB, aC);
              })(j, function () {
                aB["closeCaptcha"]();
                aB["showOption"]["onError"](aV);
              }, aU);
            } else if (aQ["data"]["result"] == L) {
              aB["showResult"]("success", "", function () {
                aB["showOption"]["onValidateSuccess"](aB["captchaInfo"]["sig"], aQ["data"]["token"]);
                (function (aW, aX, aY) {
                  return function (aA, aB, aC) {
                    return aA(aB, aC);
                  }(aW, aX, aY);
                })(j, function () {
                  aB["closeCaptcha"]();
                }, 1);
              });
            } else if (aQ["data"]["result"] == M || aQ["data"]["result"] == P) {
              aB["showResult"]("error", "", function () {
                aB["showOption"]["onValidateFail"]();
                aB["onRefresh"]();
              });
            }
          };
          var aL = function (aQ) {
            aB["setState"]("cap", au);
            aB["resetBehaviorData"]();
            aB["showTipMessage"](W);
          };
          var aN = A(JSON["stringify"](aM), aB["captchaInfo"]["ek"]);
          var aO = ac(aB["config"]["bizId"] + aB["captchaInfo"]["sig"] + aN + (aB["captchaInfo"]["salt"] || ""));
          var aP = aB["getApiCommonData"]();
          aP["data"] = aN;
          aP["s"] = aO;
          aP["sig"] = this["captchaInfo"]["sig"];
          aB["doValidate"](aP, aK, aL);
        };
        aw["prototype"]["onRefresh"] = function () {
          var aB = 0;
          if (this["getState"]("cap") == as || this["getState"]("cap") == aq) {
            return;
          }
          var aC = this;
          this["setState"]("cap", aq);
          aC["showLoading"]();
          aC["resetBehaviorData"]();
          aC["doRefresh"](function (aD) {
            var aF = 0;
            aC["setState"]("cap", ar);
            aC["captchaInfo"] = aD["data"];
            (function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            })(ab, aC["captchaInfo"]);
            var aG = ![];
            if (aD["data"] && aD["data"]["captchaType"] != "BOX") {
              aG = !![];
            }
            if (aD["success"] == ![] || aG) {
              aC["showTipMessage"](V);
              aC["setState"]("cap", au);
              (function (aA, aB, aC) {
                return aA(aB, aC);
              })(j, function () {
                aC["closeCaptcha"]();
                aC["showOption"]["onError"](V);
              }, 1500);
              return;
            }
            aC["refreshCaptcha"]();
          }, function (aD) {
            aC["showTipMessage"](W);
            aC["setState"]("cap", au);
          });
        };
        aw["prototype"]["doValidate"] = function (aA, aB, aC) {
          (function (g, h, i, j) {
            return g(h, i, j);
          })(z, this["validateCaptchaApi"], aA, {
            "onSuccess": aB,
            "onError": aC,
            "headers": function (g) {
              return g();
            }(an)
          });
        };
        aw["prototype"]["doRefresh"] = function (aA, aB) {
          var aC = this["getApiCommonData"]();
          aC["sig"] = this["captchaInfo"]["sig"];
          z(this["refreshCaptchaApi"], aC, {
            "onSuccess": aA,
            "onError": aB,
            "headers": function (g) {
              return g();
            }(an)
          });
        };
        aw["prototype"]["refreshCaptcha"] = function (aA) {
          var aC = 0;
          var aL = this["tplElement"]["querySelector"]("#imageTableTpl")["innerHTML"];
          var aH = function () {
            var aM = aL["replace"](/\$\{page\}/g, "1");
            var aN = aL["replace"](/\$\{page\}/g, "2");
            var aO = aM + "\n" + aN;
            return aO;
          };
          var aD = function (aM, aN) {
            var aO = aM["querySelectorAll"](".page1 .bcap-image-cell-image");
            for (var aP = 0; aP < aO["length"]; aP++) {
              aO[aP]["style"]["backgroundImage"] = "url(" + aN[0] + ")";
            }
            if (aN["length"] == 2) {
              var aO = aM["querySelectorAll"](".page2 .bcap-image-cell-image");
              for (var aP = 0; aP < aO["length"]; aP++) {
                aO[aP]["style"]["backgroundImage"] = "url(" + aN[1] + ")";
              }
            }
          };
          var aG = this["captchaInfo"]["path2"]["split"](",");
          var aI = [];
          for (var aJ = 0; aJ < aG["length"]; aJ++) {
            var aK = aG[aJ];
            aI["push"](this["config"]["cdnServer"] + (aK["startsWith"]("/") ? "" : "/") + aK);
          }
          var aE = this;
          (function (g, h, i, j) {
            return g(h, i, j);
          })(am, aI[0], function () {
            var aN = 0;
            var aQ = aE["captchaInfo"]["tag"];
            var aO = function (aM, aN) {
              return function (g, h) {
                return g(h);
              }(aM, aN);
            }(aa, aQ) || aQ;
            aE["setTagLabel"](aO);
            aE["rootElement"]["querySelector"](".bcap-image-table-container")["innerHTML"] = function (aM) {
              return function (g) {
                return g();
              }(aM);
            }(aH);
            var aP = aI["length"] == 2 ? "firstStep" : "commit";
            aE["setState"]("verifyState", aP);
            (function (aM, aN, aO) {
              return function (g, h, i) {
                return g(h, i);
              }(aM, aN, aO);
            })(aD, aE["rootElement"], aI);
            aE["hideLoading"]();
            aA && function (aM) {
              return function (g) {
                return g();
              }(aM);
            }(aA);
          }, function () {
            aE["feMonitor"]({
              "type": "loadImageError",
              "path": aI[0]
            });
            aE["showTipMessage"](W);
          });
        };
        aw["prototype"]["setTagLabel"] = function (aA) {
          this["rootElement"]["querySelector"]("#tagLabel")["innerHTML"] = aA;
        };
        aw["prototype"]["showCaptcha"] = function (aA, aB) {
          this["showOption"] = aA;
          this["popupAndInitRender"](aB);
        };
        function ax(aA, aB, aC, aD) {
          var aF = 0;
          this["options"] = aC;
          this["slideElement"] = aA;
          this["slideImage"] = aB;
          this["options"] = aC;
          this["captcha"] = aD;
          this["init"] = function () {
            var aI = 0;
            var aN = this;
            this["slideThumbnail"] = this["slideElement"]["querySelector"](".bs-slide-thumb");
            this["slideTrackText"] = this["slideElement"]["querySelector"](".bs-slide-text");
            this["xDistance"] = 0;
            this["minLeft"] = 0;
            this["slideStart"] = ![];
            var aL = function (aO) {
              if (aD["getState"](aM["aXqUk"]) == aq || function (aO, aP) {
                return aO == aP;
              }(aD["getState"](aM["aXqUk"]), as) || function (aO, aP) {
                return aO == aP;
              }(aD["getState"](aM["aXqUk"]), au)) {
                return;
              }
              aN["handleStart"](aO);
            };
            var aK = function (aO) {
              aO["preventDefault"] ? aO["preventDefault"]() : aO["returnValue"] = ![];
              aN["handleMove"](aO);
            };
            var aJ = function (aO) {
              aN["handleOut"](aO);
            };
            (function (aH, aI, aJ, aK, aL) {
              return function (g, h, i, j, k) {
                return g(h, i, j, k);
              }(aH, aI, aJ, aK, aL);
            })(af, this["slideThumbnail"], ["mousedown", "touchstart"], aL, {
              "passive": ![]
            });
            (function (aH, aI, aJ, aK, aL) {
              return aH(aI, aJ, aK, aL);
            })(af, this["slideImage"], ["mousedown", "touchstart"], aL, {
              "passive": ![]
            });
            (function (aH, aI, aJ, aK, aL) {
              return function (g, h, i, j, k) {
                return g(h, i, j, k);
              }(aH, aI, aJ, aK, aL);
            })(af, h, ["mousemove", "touchmove"], aK, {
              "passive": ![]
            });
            (function (aH, aI, aJ, aK) {
              return function (g, h, i, j) {
                return g(h, i, j);
              }(aH, aI, aJ, aK);
            })(af, h, ["mouseup", "touchend", "touchcancel"], aJ);
            this["destroy"] = function () {
              (function (aH, aI, aJ, aK) {
                return function (g, h, i, j) {
                  return g(h, i, j);
                }(aH, aI, aJ, aK);
              })(ag, this["slideThumbnail"], ["mousedown", "touchstart"], aL);
              (function (aH, aI, aJ, aK) {
                return function (g, h, i, j) {
                  return g(h, i, j);
                }(aH, aI, aJ, aK);
              })(ag, h, ["mousemove", "touchmove"], aK);
              (function (aH, aI, aJ, aK) {
                return function (g, h, i, j) {
                  return g(h, i, j);
                }(aH, aI, aJ, aK);
              })(ag, h, ["mouseup", "touchend", "touchcancel"], aJ);
            };
          };
          this["handleStart"] = function (aH) {
            var aJ = 0;
            this["slideStart"] = !![];
            if (aH["type"]["indexOf"]("touch") != -1) {
              this["slideStartClientX"] = aH["touches"][0]["clientX"];
            } else {
              this["slideStartClientX"] = aH["clientX"];
            }
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["slideThumbnail"], "bs-left-transition");
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["slideImage"], "bs-left-transition");
            this["options"]["onStart"] && this["options"]["onStart"]();
          };
          this["handleMove"] = function (aH) {
            if (this["slideStart"] == !![]) {
              var aJ = 0;
              this["slideTrackText"]["style"]["display"] = "none";
              var aK = aH["type"]["indexOf"]("touch") != -1 ? aH["touches"][0]["clientX"] : aH["clientX"];
              this["xDistance"] = aK - this["slideStartClientX"];
              this["maxLeft"] = this["slideElement"]["offsetWidth"] - this["slideImage"]["offsetWidth"];
              this["xDistance"] = s["min"](s["max"](0, this["xDistance"]), this["maxLeft"]);
              this["slideThumbnail"]["style"]["left"] = this["xDistance"] + "px";
              this["options"]["onMove"] && this["options"]["onMove"](this["xDistance"]);
              this["slideImage"]["style"]["left"] = this["xDistance"] + "px";
            }
          };
          this["handleOut"] = function (aH) {
            if (this["slideStart"] == !![]) {
              if (this["xDistance"] <= 1) {
                this["reset"]();
              } else {
                this["options"]["onRelease"] && this["options"]["onRelease"](this["xDistance"]);
              }
              this["slideStart"] = ![];
            }
          };
          this["reset"] = function () {
            var aI = 0;
            this["slideStart"] = ![];
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["slideThumbnail"], "bs-validate-fail");
            ai(this["slideThumbnail"], "bs-validate-success");
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ah, this["slideThumbnail"], "bs-left-transition");
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ah, this["slideImage"], "bs-left-transition");
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["captcha"]["rootElement"]["querySelector"](".bs-modal"), "shakeAnimation");
            this["slideThumbnail"]["style"]["left"] = this["minLeft"] + "px";
            this["slideTrackText"]["style"]["display"] = "inline-block";
            this["slideStartClientX"] = 0;
            this["slideImage"]["style"]["left"] = 0 + "px";
          };
          this["getSlideDistance"] = function () {
            return this["xDistance"];
          };
          this["getSlideThumbnail"] = function () {
            return this["slideThumbnail"];
          };
          this["showResult"] = function (aH, aI, aJ) {
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["slideThumbnail"], "bs-validate-fail");
            (function (aH, aI, aJ) {
              return function (g, h, i) {
                return g(h, i);
              }(aH, aI, aJ);
            })(ai, this["slideThumbnail"], "bs-validate-success");
            if (aH == "success") {
              (function (aH, aI, aJ) {
                return function (g, h, i) {
                  return g(h, i);
                }(aH, aI, aJ);
              })(ah, this["slideThumbnail"], "bs-validate-success");
              aJ && function (aH) {
                return aH();
              }(aJ);
            } else {
              ah(this["slideThumbnail"], "bs-validate-fail");
              (function (aH, aI, aJ) {
                return function (g, h, i) {
                  return g(h, i);
                }(aH, aI, aJ);
              })(ah, this["captcha"]["rootElement"]["querySelector"](".bs-modal"), "shakeAnimation");
              aJ && function (aH) {
                return function (g) {
                  return g();
                }(aH);
              }(aJ);
            }
          };
        }
        function ay(aA, aB, aC) {
          this["captchaType"] = "slide";
          av["call"](this, aA, aB, aC);
        }
        ay["prototype"]["showCaptcha"] = function (aA, aB) {
          this["showOption"] = aA;
          this["popupAndInitRender"](aB);
        };
        ay["prototype"]["popupAndInitRender"] = function (aA) {
          var aC = 0;
          var aD = this;
          if (this["config"]["appEmbed"]) {
            (function (g, h, i) {
              return g(h, i);
            })(ah, h["body"], "bcapc-app-embed");
          }
          this["popupManager"] = new al({
            "validateRequired": ![],
            "className": "bs-popup bcapc-popup-lang-" + (this["config"]["lang"] || "en"),
            "onDestroy": function () {
              aD["slider"]["destroy"]();
              aD["showOption"]["onCancel"]();
              aD["showOption"]["onClose"]();
            }
          });
          this["popupManager"]["show"]("");
          this["init"](aA, this["popupManager"]["getPopContainer"]());
        };
        ay["prototype"]["init"] = function (aA, aB) {
          var aD = 0;
          this["setState"]("cap", ao);
          this["captchaInfo"] = aA;
          this["rootElement"] = aB;
          this["currentSig"] = aA["sig"];
          var aE = this["tplElement"]["querySelector"]("#slideCaptchaTpl")["innerHTML"];
          aE = aE["replace"]("{securityVerification}", function (aA, aB) {
            return function (g, h) {
              return g(h);
            }(aA, aB);
          }(aa, a2))["replace"]("{completePuzzle}", function (aA, aB) {
            return function (g, h) {
              return g(h);
            }(aA, aB);
          }(aa, a1));
          this["rootElement"]["innerHTML"] = aE;
          this["showTipMessage"](Y);
          var aF = this;
          aF["decideNativeSize"]();
          aF["showOption"]["onReady"]();
          this["refreshCaptcha"]();
          this["bindEvent"]();
          this["setState"]("cap", ap);
        };
        ay["prototype"]["setState"] = function (aA, aB) {
          this["states"][aA] = aB;
        };
        ay["prototype"]["getState"] = function (aA, aB) {
          return this["states"][aA];
        };
        ay["prototype"]["bindEvent"] = function () {
          var aB = this;
          var aC = this["rootElement"]["querySelector"](".bs-slide-container");
          var aD = this["rootElement"]["querySelector"](".bs-slide-image");
          var aE = {
            "onRelease": function () {
              aB["onCommit"]();
            }
          };
          var aF = new ax(aC, aD, aE, this);
          aF["init"]();
          this["slider"] = aF;
          this["eventList"] = [];
          this["lastEventTime"] = "";
          this["eventCount"] = {};
          this["thumbnailEventList"] = [];
          this["collectSlideThumbnailEvent"] = function (aG, aH) {
            var aJ = 0;
            var aK = function (aG, aH, aI) {
              return function (aA, aB, aC) {
                return aA(aB, aC);
              }(aG, aH, aI);
            }(ae, aG, aH);
            var aM = aH["type"];
            var aL = [];
            aL["push"](U[aM]);
            aL["push"](aK["x"] + "," + aK["y"]);
            if (this["thumbnailEventList"]["length"] > 30) {
              return;
            }
            this["thumbnailEventList"]["push"](aL["join"]("|"));
          };
          this["collectEvent"] = function (aG) {
            var aI = 0;
            var aO = [];
            var aM = aG["target"]["getAttribute"]("_id") || "";
            var aL = aG["type"];
            var aK = function (aG, aH) {
              return function (aA, aB) {
                return function (g, h) {
                  return g(h);
                }(aA, aB);
              }(aG, aH);
            }(ad, aG);
            var aQ = U[aL];
            this["eventCount"][aQ] = (this["eventCount"][aQ] || 0) + 1;
            var aP = new n()["getTime"]();
            var aJ = this["lastEventTime"] ? aP - this["lastEventTime"] : aP;
            this["lastEventTime"] = aP;
            aO["push"](aM);
            aO["push"](U[aL]);
            aO["push"](aK);
            aO["push"](aJ);
            var aN = 1;
            if (aG["isTrusted"] == ![]) {
              aN = 0;
            } else if (aG["isTrusted"] == undefined) {
              aN = 2;
            }
            aO["push"](aN);
            if (this["eventList"]["length"] > 150) {
              return;
            }
            this["eventList"]["push"](aO["join"]("|"));
          };
          this["resetBehaviorData"] = function () {
            this["eventCount"] = {};
            this["eventList"] = [];
            this["lastEventTime"] = "";
            this["thumbnailEventList"] = [];
          };
          this["getBehaviorData"] = function () {
            function aH(aJ) {
              try {
                var aK = aJ["getBoundingClientRect"]();
                return {
                  "w": function (aJ, aK) {
                    return function (aG, aH) {
                      return function (aA, aB) {
                        return function (g, h) {
                          return g(h);
                        }(aA, aB);
                      }(aG, aH);
                    }(aJ, aK);
                  }(u, aK["width"]),
                  "h": function (aJ, aK) {
                    return aJ(aK);
                  }(u, aK["height"])
                };
              } catch (aL) {
                return {
                  "w": "",
                  "h": ""
                };
              }
            }
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
          (function (aA, aB, aC, aD) {
            return function (g, h, i, j) {
              return g(h, i, j);
            }(aA, aB, aC, aD);
          })(af, aB["rootElement"], ["click", "mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend", "touchcancel"], function (aG) {
            var aH = aG["target"] || aG["srcElement"];
            while (aH["parentElement"] != null && aH["getAttribute"]("_action") == null) {
              aH = aH["parentElement"];
            }
            if (aG["type"] == "click" && aH["getAttribute"]("_action")) {
              aB["onAction"](aH, aH["getAttribute"]("_action"));
            }
            aB["collectEvent"](aG);
          });
          (function (aA, aB, aC, aD) {
            return function (g, h, i, j) {
              return g(h, i, j);
            }(aA, aB, aC, aD);
          })(af, this["slider"]["slideThumbnail"], ["mouseenter", "mousemove", "mousedown"], function (aG) {
            aB["collectSlideThumbnailEvent"](aB["slider"]["slideThumbnail"], aG);
          });
        };
        ay["prototype"]["onAction"] = function (aA, aB) {
          var aC = this;
          if (aB == "refresh") {
            aC["onRefresh"]();
          } else if (aB == "close") {
            aC["showOption"]["onCancel"]();
            aC["closeCaptcha"]();
          }
        };
        ay["prototype"]["onCommit"] = function () {
          var aB = this;
          if (this["getState"]("cap") == as) {
            return;
          }
          this["setState"]("cap", as);
          var aC = function (aM) {
            aB["setState"]("cap", at);
            if (!aM || !aM["data"] || aM["data"]["result"] == N || aM["data"]["result"] == O || aM["data"]["result"] == Q) {
              var aP = 0;
              var aQ = "";
              if (aM["data"]["result"] == N) {
                aQ = V;
              }
              if (aM["data"]["result"] == O) {
                aQ = X;
              }
              if (aM["data"]["result"] == Q) {
                aQ = a0;
              }
              aB["showTipMessage"](aQ);
              (function (aM, aN, aO) {
                return function (g, h, i) {
                  return g(h, i);
                }(aM, aN, aO);
              })(j, function () {
                aB["closeCaptcha"]();
                aB["showOption"]["onError"](aQ);
              }, 1500);
            } else if (aM["data"]["result"] == L) {
              aB["slider"]["showResult"]("success", "Success", function () {
                (function (aR, aS, aT) {
                  return function (aM, aN, aO) {
                    return aM(aN, aO);
                  }(aR, aS, aT);
                })(j, function () {
                  aB["showOption"]["onValidateSuccess"](aB["captchaInfo"]["sig"], aM["data"]["token"]);
                  (function (aR, aS, aT) {
                    return function (aM, aN, aO) {
                      return aM(aN, aO);
                    }(aR, aS, aT);
                  })(j, function () {
                    aB["closeCaptcha"]();
                  }, 1);
                }, 400);
              });
            } else if (aM["data"]["result"] == M || aM["data"]["result"] == P) {
              aB["slider"]["showResult"]("error", "", function () {});
              (function (aM, aN, aO) {
                return function (g, h, i) {
                  return g(h, i);
                }(aM, aN, aO);
              })(j, function () {
                if (aM["data"]["result"] == P) {
                  aB["showOption"]["onValidateFail"]("fail");
                  aB["onRefresh"]();
                } else {
                  aB["showOption"]["onValidateFail"]("fail");
                  aB["reset"]();
                }
              }, 400);
            }
          };
          var aD = function (aM) {
            aB["setState"]("cap", au);
            aB["resetBehaviorData"]();
            aB["showTipMessage"](W);
          };
          var aE = aB["slider"]["getSlideDistance"]();
          var aF = aB["rootElement"]["querySelector"]("[_id='im']")["getBoundingClientRect"]()["width"];
          var aG = 310 / aF;
          var aH = function (g, h) {
            return g(h);
          }(u, aG * aE);
          if (aF == 0 || aF == undefined) {
            aH = aE;
            if (g["innerWidth"] && g["innerWidth"] <= 341) {
              aH = function (g, h) {
                return g(h);
              }(u, 310 / 266 * aE);
            }
          }
          var aJ = function (g, h, i) {
            return g(h, i);
          }(A, JSON["stringify"](aI), aB["captchaInfo"]["ek"]);
          var aK = ac(aB["config"]["bizId"] + aB["captchaInfo"]["sig"] + aJ + (aB["captchaInfo"]["salt"] || ""));
          var aL = aB["getApiCommonData"]();
          aL["sig"] = aB["captchaInfo"]["sig"];
          aL["data"] = aJ;
          aL["s"] = aK;
          aB["doValidate"](aL, aC, aD);
        };
        ay["prototype"]["onRefresh"] = function () {
          var aB = 0;
          if (this["getState"]("cap") == as || this["getState"]("cap") == aq) {
            return;
          }
          var aC = this;
          this["setState"]("cap", aq);
          aC["showLoading"]();
          aC["reset"]();
          aC["doRefresh"](function (aD) {
            var aF = 0;
            aC["setState"]("cap", ar);
            aC["captchaInfo"] = aD["data"];
            (function (aA, aB) {
              return function (g, h) {
                return g(h);
              }(aA, aB);
            })(ab, aC["captchaInfo"]);
            if (aD["success"] == ![]) {
              aC["showTipMessage"](V);
              aC["setState"]("cap", au);
              (function (aA, aB, aC) {
                return function (g, h, i) {
                  return g(h, i);
                }(aA, aB, aC);
              })(j, function () {
                aC["closeCaptcha"]();
              }, 1000);
              return;
            }
            aC["refreshCaptcha"]();
          }, function (aD) {
            aC["showTipMessage"](W);
            aC["resetBehaviorData"]();
            aC["setState"]("cap", au);
          });
        };
        ay["prototype"]["reset"] = function () {
          this["resetBehaviorData"]();
          this["slider"]["reset"]();
        };
        ay["prototype"]["doValidate"] = function (aA, aB, aC) {
          (function (aA, aB, aC, aD) {
            return function (g, h, i, j) {
              return g(h, i, j);
            }(aA, aB, aC, aD);
          })(z, this["validateCaptchaApi"], aA, {
            "onSuccess": aB,
            "onError": aC,
            "headers": function (aA) {
              return function (g) {
                return g();
              }(aA);
            }(an)
          });
        };
        ay["prototype"]["doRefresh"] = function (aA, aB) {
          var aC = this["getApiCommonData"]();
          aC["sig"] = this["captchaInfo"]["sig"];
          (function (aA, aB, aC, aD) {
            return aA(aB, aC, aD);
          })(z, this["refreshCaptchaApi"], aC, {
            "onSuccess": aA,
            "onError": aB,
            "headers": function (aA) {
              return function (g) {
                return g();
              }(aA);
            }(an)
          });
        };
        ay["prototype"]["refreshCaptcha"] = function () {
          var aA = this;
          var aB = this["config"]["cdnServer"] + "" + this["captchaInfo"]["path2"];
          (function (aA, aB, aC, aD) {
            return function (g, h, i, j) {
              return g(h, i, j);
            }(aA, aB, aC, aD);
          })(am, aB, function () {
            var aD = 0;
            var aF = function (aG, aH) {
              aG["style"]["backgroundImage"] = "url(" + aH + ")";
            };
            (function (aA, aB, aC) {
              return function (g, h, i) {
                return g(h, i);
              }(aA, aB, aC);
            })(aF, aA["rootElement"]["querySelector"](".bs-main-image"), aB);
            (function (aA, aB, aC) {
              return function (g, h, i) {
                return g(h, i);
              }(aA, aB, aC);
            })(aF, aA["rootElement"]["querySelector"](".bs-slide-image"), aB);
            aA["hideLoading"]();
          }, function () {
            aA["feMonitor"]({
              "type": "loadImageError",
              "path": aB
            });
            aA["showTipMessage"](W);
          });
        };
        ay["prototype"]["showLoading"] = function () {
          var aB = 0;
          var aD = this["rootElement"]["querySelector"](".bs-tipmessage-container");
          var aC = this["tplElement"]["querySelector"]("#waveSpinnerLoadingTpl")["innerHTML"];
          aC = aC["replace"]("{loading}", aa(Y));
          aD["innerHTML"] = aC;
          aD["style"]["display"] = "flex";
          this["rootElement"]["querySelector"](".bs-main-image")["style"]["display"] = "none";
        };
        ay["prototype"]["hideLoading"] = function () {
          var aA = this["rootElement"]["querySelector"](".bs-tipmessage-container");
          aA["style"]["display"] = "none";
          this["rootElement"]["querySelector"](".bs-main-image")["style"]["display"] = "block";
        };
        ay["prototype"]["showTipMessage"] = function (aA) {
          var aC = 0;
          var aD = this["rootElement"]["querySelector"](".bs-tipmessage-container");
          var aE = this["tplElement"]["querySelector"]("#bsTipMessageContent")["innerHTML"];
          aE = aE["replace"]("{errorMessage}", aa(aA));
          if (aA == W) {
            aE = this["tplElement"]["querySelector"]("#bsTipMessageContent2")["innerHTML"];
            aE = aE["replace"]("{errorMessage}", function (g, h) {
              return g(h);
            }(aa, aA));
            aE = aE["replace"]("{tryAgain}", function (g, h) {
              return g(h);
            }(aa, Z));
          }
          aD["innerHTML"] = aE;
          aD["style"]["display"] = "flex";
          this["rootElement"]["querySelector"](".bs-main-image")["style"]["display"] = "none";
        };
        ay["prototype"]["hideTipMessage"] = function () {
          this["hideLoading"]();
        };
        ay["prototype"]["closeCaptcha"] = function () {
          this["showOption"]["onClose"]();
          if (!this["config"]["appEmbed"]) {
            this["popupManager"]["destroy"]();
            this["slider"]["destroy"]();
          }
        };
        function az(aA) {
          av["call"](this, aA, {});
        }
        az["prototype"]["fetchCaptcha"] = function (aA, aB, aC) {
          z(this["getCaptchaApi"], aA, {
            "onSuccess": aB,
            "onError": aC,
            "headers": function (aA) {
              return function (g) {
                return g();
              }(aA);
            }(an)
          });
        };
        az["prototype"]["show"] = function (aA) {
          this["showOption"] = aA;
          if (this["config"]["appEmbed"]) {
            for (var aC in G) {
              this["showOption"][aC] = G[aC];
            }
          }
          var aD = ["onClose", "onCancel", "onValidateSuccess", "onValidateFail", "onError", "onLoadFail", "onLoadSuccess", "onReady"];
          for (var aE = 0; aE < aD["length"]; aE++) {
            aA[aD[aE]] = function (g, h) {
              return g(h);
            }(H, aA[aD[aE]]);
          }
          if (this["config"]["ignoreOnValidateFail"]) {
            aA["onValidateFail"] = function () {};
          }
          var aF = new al({
            "validateRequired": !![],
            "className": "bcap-popup-loading-container"
          });
          var aG = this["tplElement"]["querySelector"]("#popupLoadingContentTpl")["innerHTML"];
          var aH = loading_all_i18n[R] || "Loading";
          aG = aG["replace"]("{loading}", aH);
          !this["config"]["appEmbed"] && aF["show"](aG, {});
          var aI = this["getApiCommonData"]();
          var aJ = this;
          var aK = function (aL) {
            var aN = 0;
            !aJ["config"]["appEmbed"] && aF["destroy"]();
            aA["onLoadFail"](![]);
            aA["onError"](aL);
            aA["onClose"]();
            aJ["feMonitor"]({
              "type": "fetch",
              "e": aL
            });
          };
          this["fetchCaptcha"](aI, function (aL) {
            try {
              var aN = 0;
              var aO = aL["data"];
              (function (aA, aB) {
                return aA(aB);
              })(ab, aO);
              if (aL && !aL["success"]) {
                aK("load");
                return;
              }
              !aJ["config"]["appEmbed"] && aF["destroy"]("", !![]);
              if (aO && aO["captchaType"] == "BOX") {
                aJ["captcha"] = new aw(aJ["config"], aJ, aA);
              } else {
                aJ["captcha"] = new ay(aJ["config"], aJ, aA);
              }
              aA["onLoadSuccess"](aO);
              aJ["captcha"]["showCaptcha"](aA, aO);
            } catch (aQ) {
              var aP = aQ["toString"]() + "," + aQ["stack"] || aQ["stacktrace"] || "";
              aJ["feMonitor"]({
                "type": "show",
                "e": aP
              });
            }
          }, function (aL) {
            (function (aL, aM) {
              return function (g, h) {
                return g(h);
              }(aL, aM);
            })(aK, "response error");
          });
        };
        return az;
      });
    }, {
      "2": 2,
      "3": 3
    }],
    2: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = g(window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        "use strict";
        var w = "";
        try {
          w = Intl["DateTimeFormat"]()["resolvedOptions"]()["timeZone"];
        } catch (B) {}
        function x() {
          var C = [];
          if (i["plugins"]) {
            for (var D = 0; D < i["plugins"]["length"]; D++) {
              C["push"](i["plugins"][D]["name"]);
            }
          }
          return C;
        }
        function y() {
          var C = {};
          try {
            var E = 0;
            C["screen_resolution"] = g["screen"]["width"] + "," + g["screen"]["height"];
            C["available_screen_resolution"] = g["screen"]["availWidth"] + "," + g["screen"]["availHeight"];
            C["system_version"] = "unknown";
            C["brand_model"] = "unknown";
            C["timezone"] = w;
            C["timezoneOffset"] = new n()["getTimezoneOffset"]();
            C["user_agent"] = g["navigator"]["userAgent"];
            C["list_plugin"] = function (g) {
              return g();
            }(x)["join"](",");
            C["platform"] = g["navigator"]["platform"];
            C["webgl_vendor"] = "unknown";
            C["webgl_renderer"] = "unknown";
            var F = JSON["stringify"](C);
          } catch (G) {
            C["error"] = G["toString"]() + "," + (G["stack"] || G["stacktrace"] || "");
          }
          return g["btoa"](F);
        }
        function z() {
          var C = (i["userAgent"] || "")["toLowerCase"]();
          if (C["indexOf"]("captcha")) {
            if (C["indexOf"]("android") != -1) {
              return "android";
            }
            if (C["indexOf"]("ios") != -1) {
              return "ios";
            }
          }
          return "web";
        }
        var A = {};
        try {
          A["deviceInfo"] = function (g) {
            return g();
          }(y);
          A["clienttype"] = function (g) {
            return g();
          }(z);
        } catch (C) {}
        return A;
      });
    }, {}],
    3: [function (c, d, e) {
      (function (g) {
        'use strict';

        d["exports"] = function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
          return g(h, i, j, k, l, m, n, o, p, q, r, s, t, u, v);
        }(g, window, document, navigator, setTimeout, clearTimeout, encodeURIComponent, Object, Date, Array, String, Image, RegExp, Math, XMLHttpRequest, parseInt);
      })(function (g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
        var w = {
          "dbg": !![],
          "log": function (G) {
            if (g["console"] && w["dbg"]) {
              g["console"]["log"](G);
            }
          }
        };
        var x = p["fromCharCode"];
        function y(G) {
          var I = 0;
          var N = "";
          N += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          N += "abcdefghijklmnopqrstuvwxyz";
          N += "0123456789";
          N += "+/";
          var M = G["length"];
          var K = [];
          for (var J = 0; J < M; J++) {
            K[J >>> 2] |= (G["charCodeAt"](J) & 255) << 24 - J % 4 * 8;
          }
          var L = [];
          for (var J = 0; J < M; J += 3) {
            var O = K[J >>> 2] >>> 24 - J % 4 * 8 & 255;
            var P = K[J + 1 >>> 2] >>> 24 - (J + 1) % 4 * 8 & 255;
            var Q = K[J + 2 >>> 2] >>> 24 - (J + 2) % 4 * 8 & 255;
            var R = O << 16 | P << 8 | Q;
            for (var S = 0; S < 4 && J + S * 0.75 < M; S++) {
              L["push"](N["charAt"](R >>> 6 * (3 - S) & 63));
            }
          }
          for (var J = 0; J < L["length"] % 4; J++) {
            L["push"]("=");
          }
          return L["join"]("");
        }
        function z(G) {
          function I(Q, R) {
            return x(Q >> R & 63 | 128);
          }
          function J(Q) {
            if (Q >= 55296 && Q <= 57343) {
              throw Error("not a scalar value");
            }
          }
          function K(Q) {
            var S = 0;
            var V = [];
            var T = 0;
            var W = Q["length"];
            var U;
            var X;
            while (T < W) {
              U = Q["charCodeAt"](T++);
              if (U >= 55296 && U <= 56319 && T < W) {
                X = Q["charCodeAt"](T++);
                T = T + 1;
                if ((X & 64512) == 56320) {
                  V["push"](((U & 1023) << 10) + (X & 1023) + 65536);
                } else {
                  V["push"](U);
                  T--;
                }
              } else {
                V["push"](U);
              }
            }
            return V;
          }
          function L(Q) {
            var S = 0;
            if ((Q & 65408) == 0 & (Q >>> 16 & 65535) == 0) {
              return x(Q)
            }
            var T = "";
            if ((Q & 63488) == 0 && (Q >>> 16 & 65535) == 0) {
              T = x(Q >> 6 & 31 | 192)
            } else if ((Q & 0) == 0 && (Q >>> 16 & 65535) == 0) {
              J(Q);
              T = x(Q >> 12 & 15 | 224);
              T += x(Q >> 6 & 63 | 128);
              T += I(Q, 6);
            } else if ((Q & 0) == 0 && (Q >>> 16 & 65504) == 0) {
              T = x(Q >> 18 & 7 | 240);
              T += I(Q, 12);
              T += I(Q, 6);
            }
            T += x(Q & 63 | 128);
            return T;
          }
          var M = K(G);
          var N = -1;
          var O = "";
          while (++N < M["length"]) {
            var P = M[N];
            O += L(P);
          }
          return O;
        }
        function A(G, H) {
          H = H || "cdababcddcba";
          function J(M, N, O) {
            var Q = 0;
            if (M === "") return "";
            var Z = ["a", "b", "c", "d", "h", "i", "j", "k", "x", "y"]["join"]("");
            var a1 = u(M["length"] / N);
            var a0 = [];
            for (var R = 0; R < N; R++) {
              var T = 0;
              var U = 0;
              var Y = R * a1;
              var X = R == N - 1 ? a1 + M["length"] % N : a1;
              for (var V = 0; V < X; V++) {
                var W = Y + V;
                if (W < M["length"]) {
                  U = U + M["charCodeAt"](W);
                }
              }
              U = U * (O || 31);
              a0["push"](Z["charAt"](U % Z["length"]));
            }
            return a0["join"]("");
          }
          var K = H["split"]("")["reverse"]()["join"]("");
          var L = K + J(K, 4);
          return D(G, L);
        }
        function B(G, H) {
          var J = 0;
          var L = [];
          for (var M = 0; M < u(G["length"] / H); M++) {
            var N = M * H;
            var O = (M + 1) * H;
            var P = G["substring"](N, O);
            L["push"](P["split"]("")["reverse"]()["join"](""));
          }
          var K = G["length"] % H;
          if (K > 0) {
            L["push"](G["substring"](G["length"] - K, G["length"])["split"]("")["reverse"]()["join"](""));
          }
          return L["join"]("");
        }
        function C(G, H) {
          function J() {
            function O() {
              return "c" + "da";
            }
            function P() {
              return "ba" + "bc";
            }
            function Q() {
              return "dd" + "c";
            }
            function R() {
              return "ba";
            }
            return function (G) {
              return function (g) {
                return g();
              }(G);
            }(O) + function (G) {
              return function (g) {
                return g();
              }(G);
            }(P) + function (G) {
              return function (g) {
                return g();
              }(G);
            }(Q) + function (G) {
              return function (g) {
                return g();
              }(G);
            }(R);
          }
          H = H || function (g) {
            return g();
          }(J);
          var K = H["split"]("")["reverse"]()["join"]("");
          var L = K + E["sph"](K, 4);
          var M = function (g, h, i) {
            return g(h, i);
          }(D, G, L);
          M = function (g, h, i) {
            return g(h, i);
          }(B, M, function (g, h) {
            return g(h);
          }(u, s["max"](M["length"] / 2, 2)));
          M = function (g, h, i) {
            return g(h, i);
          }(B, M, function (g, h) {
            return g(h);
          }(u, s["max"](M["length"] / 10, 2)));
          return M;
        }
        function D(payloadString, key) {
          if (!payloadString) {
            return "";
          }
          var output = "";
          for (var i = 0; i < payloadString["length"]; i++) {
            output += String.fromCharCode(payloadString["charCodeAt"](i) ^ key["charCodeAt"](i % key["length"]))
          }
          return btoa(M);
        }
        var E = {};
        E["sr"] = B;
        E["p_c"] = function (G, H, I, J) {
          function L() {
            var N = g["location"]["hostname"]["split"](".");
            var O = (N["length"] > 1 ? N[N["length"] - 2] + "." : "") + N[N["length"] - 1];
            return O;
          }
          var M = G + "=" + H;
          I = I == undefined ? -1 : I;
          if (I > 0) {
            M += ";expires=" + new n(new n()["getTime"]() + I)["toUTCString"]();
          } else if (I == 0) {
            M += ";expires=0";
          }
          M += ";path=" + function (g, h) {
            return g || h;
          }(J, "/");
          M += ";domain=" + function (g) {
            return g();
          }(L);
          h["cookie"] = M;
        };
        E["g_c"] = function (G) {
          var H = new r("(?:(?:^|.*;\\s*)" + G + "\\s*\\=\\s*([^;]*).*$)|^.*$");
          var I = h["cookie"]["replace"](H, "$1");
          return I;
        };
        E["sph"] = function (G, H, I) {
          var K = 0;
          if (G === "") return "";
          var V = "1234567890abcdefghijklmnopqrstuvwxyz";
          var U = function (g, h) {
            return g(h);
          }(u, G["length"] / H);
          var T = [];
          for (var L = 0; L < H; L++) {
            var N = 0;
            var O = 0;
            var S = L * U;
            var R = L == H - 1 ? U + G["length"] % H : U;
            for (var P = 0; P < R; P++) {
              var Q = S + P;
              if (Q < G["length"]) {
                O = O + G["charCodeAt"](Q);
              }
            }
            O = O * (I || 31);
            T["push"](V["charAt"](O % V["length"]));
          }
          return T["join"]("");
        };
        E["grs"] = function (G) {
          var H = "1234567890abcdefghijklmnopqrstuvwxyz"["split"]("");
          var I = [];
          for (var J = 0; J < G; J++) {
            var K = u(H["length"] * s["random"]());
            I["push"](H[K]);
          }
          return I["join"]("");
        };
        E["ivw"] = function () {
          return "$" + "cd" + "c_a" + "sdjflasut" + "opfhvc" + "ZLmcfl_" in h || !!i["we" + "bdr" + "iver"] || ![];
        };
        E["p_e"] = function (G) {
          var H = G;
          var I = [];
          if (H instanceof Error) {
            var K = 0;
            if (H["number"] !== undefined) {
              I["push"]("Number: " + H["number"]);
            }
            if (H["description"] !== undefined) {
              I["push"]("description: " + H["description"]);
            }
            if (H["name"] !== undefined) {
              I["push"](H["name"] + ": " + (H["message"] === undefined ? "" : H["message"]));
            }
            if (H["lineNumber"] !== undefined) {
              I["push"]("lineNumber: " + H["lineNumber"]);
            }
            if (H["stack"] !== undefined) {
              I["push"]("stack: " + H["stack"]["replace"](/\n/g, "")["replace"](/\r/g, ""));
            }
          } else {
            I["push"](H["toString"]());
          }
          return I["join"]("\n");
        };
        function F(G, H, I) {
          function K(a1) {
            return a1 || function () {};
          }
          var I = function (G, H) {
            return function (g, h) {
              return g || h;
            }(G, H);
          }(I, {});
          var L = I["method"] || "post";
          var M = I["timeout"] || 10000;
          var N = I["headers"] || {};
          var O = function (G, H) {
            return function (g, h) {
              return g(h);
            }(G, H);
          }(K, I["onSuccess"]);
          var P = function (G, H) {
            return function (g, h) {
              return g(h);
            }(G, H);
          }(K, I["onError"]);
          var Q = I["withCredentials"] || ![];
          var R = ![];
          var S = g["XMLHttpRequest"] ? new t() : null;
          if (S && "withCredentials" in S) {
            if (Q) {
              S["withCredentials"] = Q;
            }
            S["open"](L, G, !![]);
          } else if (typeof XDomainRequest != "undefined") {
            R = !![];
            S = new XDomainRequest();
            S["open"](L, G);
          } else {}
          if (S && S["setRequestHeader"]) {
            for (var T in N) {
              S["setRequestHeader"](T, N[T]);
            }
          }
          S["timeout"] = M;
          var U = ![];
          var V = function (a1) {
            (function (G, H) {
              return function (g, h) {
                return g && h;
              }(G, H);
            })(!U, P) && P(a1);
            U = !![];
          };
          S["onerror"] = S["ontimeout"] = function () {
            V("timeout");
          };
          G = G + "?random=" + new n()["getTime"]();
          var W = function (a1) {
            return JSON["parse"](a1);
          };
          if (R) {
            S["onload"] = function () {
              var a1 = S["responseText"] ? function (G, H) {
                return function (g, h) {
                  return g(h);
                }(G, H);
              }(W, S["responseText"]) : {};
              O && O(a1);
            };
          } else {
            if (S["setRequestHeader"]) {
              var X = I["contentType"] || "text/plain; charset=utf-8";
              S["setRequestHeader"]("Content-Type", X);
            }
            S["onreadystatechange"] = function () {
              if (S["readyState"] == 4) {
                if (S["status"] == 200) {
                  var a1 = S["responseText"] ? function (a1, a2) {
                    return function (G, H) {
                      return function (g, h) {
                        return g(h);
                      }(G, H);
                    }(a1, a2);
                  }(W, S["responseText"]) : {};
                  O && function (a1, a2) {
                    return function (G, H) {
                      return function (g, h) {
                        return g(h);
                      }(G, H);
                    }(a1, a2);
                  }(O, a1);
                } else {
                  (function (a1, a2) {
                    return function (G, H) {
                      return function (g, h) {
                        return g(h);
                      }(G, H);
                    }(a1, a2);
                  })(V, "response fail with status: " + S["status"]);
                }
              }
            };
          }
          var Y = [];
          for (var Z in H) {
            Y["push"](Z + "=" + function (G, H) {
              return function (g, h) {
                return g(h);
              }(G, H);
            }(l, H[Z]));
          }
          var a0 = Y["join"]("&");
          S["send"](a0);
        }
        ;
        return [C, w, E, F, A];
      });
    }, {}]
  }, {}, [1]);
})();