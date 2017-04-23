/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin, 
            this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(), 
                range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin), 
                range.select());
            })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(), 
            begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length), 
            {
                begin: begin,
                end: end
            });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length, 
            firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])), 
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (curVal.length < oldVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(), 
                        begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1), 
                        end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1), 
                        e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText), 
                        input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)), 
                            p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1), 
                        tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""), 
                    clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))), 
                    partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos);
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent), 
                checkVal();
            });
        }
    });
});



(function(a,b){

	// EASINGS
	jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})		
	// WAIT FOR IMAGES
	a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};a.expr[":"].uncached=function(b){var c=document.createElement("img");c.src=b.src;return a(b).is('img[src!=""]')&&!c.complete};a.fn.waitForImages=function(b,c,d){if(a.isPlainObject(arguments[0])){c=b.each;d=b.waitForAll;b=b.finished}b=b||a.noop;c=c||a.noop;d=!!d;if(!a.isFunction(b)||!a.isFunction(c)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var e=a(this),f=[];if(d){var g=a.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g;e.find("*").each(function(){var b=a(this);if(b.is("img:uncached")){f.push({src:b.attr("src"),element:b[0]})}a.each(g,function(a,c){var d=b.css(c);if(!d){return true}var e;while(e=h.exec(d)){f.push({src:e[2],element:b[0]})}})})}else{e.find("img:uncached").each(function(){f.push({src:this.src,element:this})})}var i=f.length,j=0;if(i==0){b.call(e[0])}a.each(f,function(d,f){var g=new Image;a(g).bind("load error",function(a){j++;c.call(f.element,j,i,a.type=="load");if(j==i){b.call(e[0]);return false}});g.src=f.src})})}
	// CSS ANIMATE
	var b=["Webkit","Moz","O","Ms","Khtml",""];var c=["borderRadius","boxShadow","userSelect","transformOrigin","transformStyle","transition","transitionDuration","transitionProperty","transitionTimingFunction","backgroundOrigin","backgroundSize","animation","filter","zoom","columns","perspective","perspectiveOrigin","appearance"];a.fn.cssSetQueue=function(b,c){v=this;var d=v.data("cssQueue")?v.data("cssQueue"):[];var e=v.data("cssCall")?v.data("cssCall"):[];var f=0;var g={};a.each(c,function(a,b){g[a]=b});while(1){if(!e[f]){e[f]=g.complete;break}f++}g.complete=f;d.push([b,g]);v.data({cssQueue:d,cssRunning:true,cssCall:e})};a.fn.cssRunQueue=function(){v=this;var a=v.data("cssQueue")?v.data("cssQueue"):[];if(a[0])v.cssEngine(a[0][0],a[0][1]);else v.data("cssRunning",false);a.shift();v.data("cssQueue",a)};a.cssMerge=function(b,c,d){a.each(c,function(c,e){a.each(d,function(a,d){b[d+c]=e})});return b};a.fn.cssAnimationData=function(a,b){var c=this;var d=c.data("cssAnimations");if(!d)d={};if(!d[a])d[a]=[];d[a].push(b);c.data("cssAnimations",d);return d[a]};a.fn.cssAnimationRemove=function(){var b=this;if(b.data("cssAnimations")!=undefined){var c=b.data("cssAnimations");var d=b.data("identity");a.each(c,function(a,b){c[a]=b.splice(d+1,1)});b.data("cssAnimations",c)}};a.css3D=function(c){a("body").data("cssPerspective",isFinite(c)?c:c?1e3:0).cssOriginal(a.cssMerge({},{TransformStyle:c?"preserve-3d":"flat"},b))};a.cssPropertySupporter=function(d){a.each(c,function(c,e){if(d[e])a.each(b,function(a,b){var c=e.substr(0,1);d[b+c[b?"toUpperCase":"toLowerCase"]()+e.substr(1)]=d[e]})});return d};a.cssAnimateSupport=function(){var c=false;a.each(b,function(a,b){c=document.body.style[b+"AnimationName"]!==undefined?true:c});return c};a.fn.cssEngine=function(c,d){function e(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()}var f=this;var f=this;if(typeof d.complete=="number")f.data("cssCallIndex",d.complete);var g={linear:"linear",swing:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};var h={};var i=a("body").data("cssPerspective");if(c.transform)a.each(b,function(a,b){var d=b+(b?"T":"t")+"ransform";var g=f.cssOriginal(e(d));var j=c.transform;if(!g||g=="none")h[d]="scale(1)";c[d]=(i&&!/perspective/gi.test(j)?"perspective("+i+") ":"")+j});c=a.cssPropertySupporter(c);var j=[];a.each(c,function(a,b){j.push(e(a))});var k=false;var l=[];var m=[];if(j!=undefined){for(var n=0;n<j.length;n++){l.push(String(d.duration/1e3)+"s");var o=g[d.easing];m.push(o?o:d.easing)}l=f.cssAnimationData("dur",l.join(", ")).join(", ");m=f.cssAnimationData("eas",m.join(", ")).join(", ");var p=f.cssAnimationData("prop",j.join(", "));f.data("identity",p.length-1);p=p.join(", ");var q={TransitionDuration:l,TransitionProperty:p,TransitionTimingFunction:m};var r={};r=a.cssMerge(r,q,b);var s=c;a.extend(r,c);if(r.display=="callbackHide")k=true;else if(r.display)h["display"]=r.display;f.cssOriginal(h)}setTimeout(function(){f.cssOriginal(r);var b=f.data("runningCSS");b=!b?s:a.extend(b,s);f.data("runningCSS",b);setTimeout(function(){f.data("cssCallIndex","a");if(k)f.cssOriginal("display","none");f.cssAnimationRemove();if(d.queue)f.cssRunQueue();if(typeof d.complete=="number"){f.data("cssCall")[d.complete].call(f);f.data("cssCall")[d.complete]=0}else d.complete.call(f)},d.duration)},0)};a.str2Speed=function(a){return isNaN(a)?a=="slow"?1e3:a=="fast"?200:600:a};a.fn.cssAnimate=function(b,c,d,e){var f=this;var g={duration:0,easing:"swing",complete:function(){},queue:true};var h={};h=typeof c=="object"?c:{duration:c};h[d?typeof d=="function"?"complete":"easing":0]=d;h[e?"complete":0]=e;h.duration=a.str2Speed(h.duration);a.extend(g,h);if(a.cssAnimateSupport()){f.each(function(c,d){d=a(d);if(g.queue){var e=!d.data("cssRunning");d.cssSetQueue(b,g);if(e)d.cssRunQueue()}else d.cssEngine(b,g)})}else f.animate(b,g);return f};a.cssPresetOptGen=function(a,b){var c={};c[a?typeof a=="function"?"complete":"easing":0]=a;c[b?"complete":0]=b;return c};a.fn.cssFadeTo=function(b,c,d,e){var f=this;opt=a.cssPresetOptGen(d,e);var g={opacity:c};opt.duration=b;if(a.cssAnimateSupport()){f.each(function(b,d){d=a(d);if(d.data("displayOriginal")!=d.cssOriginal("display")&&d.cssOriginal("display")!="none")d.data("displayOriginal",d.cssOriginal("display")?d.cssOriginal("display"):"block");else d.data("displayOriginal","block");g.display=c?d.data("displayOriginal"):"callbackHide";d.cssAnimate(g,opt)})}else f.fadeTo(b,opt);return f};a.fn.cssFadeOut=function(b,c,d){if(a.cssAnimateSupport()){if(!this.cssOriginal("opacity"))this.cssOriginal("opacity",1);this.cssFadeTo(b,0,c,d)}else this.fadeOut(b,c,d);return this};a.fn.cssFadeIn=function(b,c,d){if(a.cssAnimateSupport()){if(this.cssOriginal("opacity"))this.cssOriginal("opacity",0);this.cssFadeTo(b,1,c,d)}else this.fadeIn(b,c,d);return this};a.cssPx2Int=function(a){return a.split("p")[0]*1};a.fn.cssStop=function(){var c=this,d=0;c.data("cssAnimations",false).each(function(e,f){f=a(f);var g={TransitionDuration:"0s"};var h=f.data("runningCSS");var i={};if(h)a.each(h,function(b,c){c=isFinite(a.cssPx2Int(c))?a.cssPx2Int(c):c;var d=[0,1];var e={color:["#000","#fff"],background:["#000","#fff"],"float":["none","left"],clear:["none","left"],border:["none","0px solid #fff"],position:["absolute","relative"],family:["Arial","Helvetica"],display:["none","block"],visibility:["hidden","visible"],transform:["translate(0,0)","scale(1)"]};a.each(e,function(a,c){if((new RegExp(a,"gi")).test(b))d=c});i[b]=d[0]!=c?d[0]:d[1]});else h={};g=a.cssMerge(i,g,b);f.cssOriginal(g);setTimeout(function(){var b=a(c[d]);b.cssOriginal(h).data({runningCSS:{},cssAnimations:{},cssQueue:[],cssRunning:false});if(typeof b.data("cssCallIndex")=="number")b.data("cssCall")[b.data("cssCallIndex")].call(b);b.data("cssCall",[]);d++},0)});return c};a.fn.cssDelay=function(a){return this.cssAnimate({},a)};a.fn.cssOriginal=a.fn.css;a.fn.css=function(c,d){var e=this,f={};if(typeof c=="string")if(d)f[a.camelCase(c)]=d;else return e.cssOriginal(c);else f=c;f=a.cssPropertySupporter(f);var g=a("body").data("cssPerspective");if(f.transform)a.each(b,function(a,b){var c=b+(b?"T":"t")+"ransform";var d=f.transform;f[c]=(g&&!/perspective/gi.test(d)?"perspective("+g+") ":"")+d});e.cssOriginal(f);return e}	
	// SWIPE FUNCTION
	a.fn.swipe=function(b){if(!this)return false;var c={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var d="left";var e="right";var f="up";var g="down";var h="none";var i="horizontal";var j="vertical";var k="auto";var l="start";var m="move";var n="end";var o="cancel";var p="ontouchstart"in window,q=p?"touchstart":"mousedown",r=p?"touchmove":"mousemove",s=p?"touchend":"mouseup",t="touchcancel";var u="start";if(b.allowPageScroll==undefined&&(b.swipe!=undefined||b.swipeStatus!=undefined))b.allowPageScroll=h;if(b)a.extend(c,b);return this.each(function(){function J(){var a=I();if(a<=45&&a>=0)return d;else if(a<=360&&a>=315)return d;else if(a>=135&&a<=225)return e;else if(a>45&&a<135)return g;else return f}function I(){var a=y.x-z.x;var b=z.y-y.y;var c=Math.atan2(b,a);var d=Math.round(c*180/Math.PI);if(d<0)d=360-Math.abs(d);return d}function H(){return Math.round(Math.sqrt(Math.pow(z.x-y.x,2)+Math.pow(z.y-y.y,2)))}function G(a,b){if(c.allowPageScroll==h){a.preventDefault()}else{var l=c.allowPageScroll==k;switch(b){case d:if(c.swipeLeft&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case e:if(c.swipeRight&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case f:if(c.swipeUp&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break;case g:if(c.swipeDown&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break}}}function F(a,b){if(c.swipeStatus)c.swipeStatus.call(v,a,b,direction||null,distance||0);if(b==o){if(c.click&&(x==1||!p)&&(isNaN(distance)||distance==0))c.click.call(v,a,a.target)}if(b==n){if(c.swipe){c.swipe.call(v,a,direction,distance)}switch(direction){case d:if(c.swipeLeft)c.swipeLeft.call(v,a,direction,distance);break;case e:if(c.swipeRight)c.swipeRight.call(v,a,direction,distance);break;case f:if(c.swipeUp)c.swipeUp.call(v,a,direction,distance);break;case g:if(c.swipeDown)c.swipeDown.call(v,a,direction,distance);break}}}function E(a){x=0;y.x=0;y.y=0;z.x=0;z.y=0;A.x=0;A.y=0}function D(a){a.preventDefault();distance=H();direction=J();if(c.triggerOnTouchEnd){u=n;if((x==c.fingers||!p)&&z.x!=0){if(distance>=c.threshold){F(a,u);E(a)}else{u=o;F(a,u);E(a)}}else{u=o;F(a,u);E(a)}}else if(u==m){u=o;F(a,u);E(a)}b.removeEventListener(r,C,false);b.removeEventListener(s,D,false)}function C(a){if(u==n||u==o)return;var b=p?a.touches[0]:a;z.x=b.pageX;z.y=b.pageY;direction=J();if(p){x=a.touches.length}u=m;G(a,direction);if(x==c.fingers||!p){distance=H();if(c.swipeStatus)F(a,u,direction,distance);if(!c.triggerOnTouchEnd){if(distance>=c.threshold){u=n;F(a,u);E(a)}}}else{u=o;F(a,u);E(a)}}function B(a){var d=p?a.touches[0]:a;u=l;if(p){x=a.touches.length}distance=0;direction=null;if(x==c.fingers||!p){y.x=z.x=d.pageX;y.y=z.y=d.pageY;if(c.swipeStatus)F(a,u)}else{E(a)}b.addEventListener(r,C,false);b.addEventListener(s,D,false)}var b=this;var v=a(this);var w=null;var x=0;var y={x:0,y:0};var z={x:0,y:0};var A={x:0,y:0};try{this.addEventListener(q,B,false);this.addEventListener(t,E)}catch(K){}})}	

})(jQuery)

;
(function($,undefined){$.fn.extend({revolution:function(options){var defaults={delay:9000,startheight:490,startwidth:890,hideThumbs:200,thumbWidth:100,thumbHeight:50,thumbAmount:5,navigationType:"both",navigationArrows:"nexttobullets",navigationStyle:"round",touchenabled:"on",onHoverStop:"on",navOffsetHorizontal:0,navOffsetVertical:20,shadow:1,stopLoop:"off"};options=$.extend({},$.fn.revolution.defaults,options);return this.each(function(){var opt=options;opt.slots=4;opt.act=-1;opt.next=0;opt.origcd=opt.delay;opt.firefox13=($.browser.mozilla)&&(parseInt($.browser.version,0)==13||parseInt($.browser.version,0)==14);opt.ie=$.browser.msie&&parseInt($.browser.version,0)<9;if(opt.navOffsetHorizontal==undefined)opt.navOffsetHorizontal=0;if(opt.navOffsetVertical==undefined)opt.navOffsetVertical=0;opt.navOH=opt.navOffsetHorizontal;opt.navOV=opt.navOffsetVertical;var container=$(this);container.append('<div class="tp-loader"></div>');var bt=container.find('.tp-bannertimer');if(bt.length>0){bt.css({'width':'0%'});};container.addClass("tp-simpleresponsive");opt.container=container;opt.slideamount=container.find('ul:first li').length;if(opt.startwidth==undefined||opt.startwidth==0)opt.startwidth=container.width();if(opt.startheight==undefined||opt.startheight==0)opt.startheight=container.height();opt.width=container.width();opt.height=container.height();opt.bw=opt.startwidth/container.width();opt.bh=opt.startheight/container.height();if(opt.width!=opt.startwidth){opt.height=Math.round(opt.startheight*(opt.width/opt.startwidth));container.height(opt.height);}
if(opt.shadow!=0){container.parent().append('<div class="tp-bannershadow tp-shadow'+opt.shadow+'"></div>');container.parent().find('.tp-bannershadow').css({'width':opt.width});}
container.waitForImages(function(){prepareSlides(container,opt);createBullets(container,opt);createThumbs(container,opt);createArrows(container,opt);swipeAction(container,opt);if(opt.hideThumbs>0)hideThumbs(container,opt);container.waitForImages(function(){container.find('.tp-loader').fadeOut(400);setTimeout(function(){swapSlide(container,opt);countDown(container,opt);},1000);});});$(window).resize(function(){if(container.outerWidth(true)!=opt.width){containerResized(container,opt);}});})}})
function containerResized(container,opt){container.find('.defaultimg').each(function(i){setSize($(this),opt);opt.height=Math.round(opt.startheight*(opt.width/opt.startwidth));container.height(opt.height);setSize($(this),opt);try{container.parent().find('.tp-bannershadow').css({'width':opt.width});}catch(e){}
var actsh=container.find('li:eq('+opt.act+') .slotholder');var nextsh=container.find('li:eq('+opt.next+') .slotholder');removeSlots(container);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.defaultimg').css({'opacity':1});setCaptionPositions(container,opt);var nextli=container.find('li:eq('+opt.next+')');container.find('.caption').each(function(){$(this).stop(true,true);});animateTheCaptions(nextli,opt);restartBannerTimer(opt,container);});}
function restartBannerTimer(opt,container){opt.cd=0;var bt=container.find('.tp-bannertimer');if(bt.length>0){bt.stop();bt.css({'width':'0%'});bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false,easing:"linear"});}
clearTimeout(opt.thumbtimer);opt.thumbtimer=setTimeout(function(){moveSelectedThumb(container);setBulPos(container,opt);},200);}
function callingNewSlide(opt,container){opt.cd=0;swapSlide(container,opt);var bt=container.find('.tp-bannertimer');if(bt.length>0){bt.stop();bt.css({'width':'0%'});bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false,easing:"linear"});}}
function createThumbs(container,opt){var cap=container.parent();if(opt.navigationType=="thumb"||opt.navsecond=="both"){cap.append('<div class="tp-bullets tp-thumbs '+opt.navigationStyle+'"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');}
var bullets=cap.find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');var bup=bullets.parent();bup.width(opt.thumbWidth*opt.thumbAmount);bup.height(opt.thumbHeight);bup.parent().width(opt.thumbWidth*opt.thumbAmount);bup.parent().height(opt.thumbHeight);container.find('ul:first li').each(function(i){var li=container.find("ul:first li:eq("+i+")");if(li.data('thumb')!=undefined)
var src=li.data('thumb')
else
var src=li.find("img:first").attr('src');bullets.append('<div class="bullet thumb"><img src="'+src+'"></div>');var bullet=bullets.find('.bullet:first');});bullets.append('<div style="clear:both"></div>');var minwidth=1000;bullets.find('.bullet').each(function(i){var bul=$(this);if(i==opt.slideamount-1)bul.addClass('last');if(i==0)bul.addClass('first');bul.width(opt.thumbWidth);bul.height(opt.thumbHeight);if(minwidth>bul.outerWidth(true))minwidth=bul.outerWidth(true);bul.click(function(){if(opt.transition==0&&bul.index()!=opt.act){opt.next=bul.index();callingNewSlide(opt,container);}});});var max=minwidth*container.find('ul:first li').length;var thumbconwidth=bullets.parent().width();opt.thumbWidth=minwidth;if(thumbconwidth<max){$(document).mousemove(function(e){$('body').data('mousex',e.pageX);});bullets.parent().mouseenter(function(){var $this=$(this);$this.addClass("over");var offset=$this.offset();var x=$('body').data('mousex')-offset.left;var thumbconwidth=$this.width();var minwidth=$this.find('.bullet:first').outerWidth(true);var max=minwidth*container.find('ul:first li').length;var diff=(max-thumbconwidth)+15;var steps=diff/thumbconwidth;x=x-30;var pos=(0-((x)*steps));if(pos>0)pos=0;if(pos<0-max+thumbconwidth)pos=0-max+thumbconwidth;moveThumbSliderToPosition($this,pos,200);});bullets.parent().mousemove(function(){var $this=$(this);var offset=$this.offset();var x=$('body').data('mousex')-offset.left;var thumbconwidth=$this.width();var minwidth=$this.find('.bullet:first').outerWidth(true);var max=minwidth*container.find('ul:first li').length;var diff=(max-thumbconwidth)+15;var steps=diff/thumbconwidth;x=x-30;var pos=(0-((x)*steps));if(pos>0)pos=0;if(pos<0-max+thumbconwidth)pos=0-max+thumbconwidth;moveThumbSliderToPosition($this,pos,0);});bullets.parent().mouseleave(function(){var $this=$(this);$this.removeClass("over");moveSelectedThumb(container);});}}
function moveSelectedThumb(container){var bullets=container.parent().find('.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer');var $this=bullets.parent();var offset=$this.offset();var minwidth=$this.find('.bullet:first').outerWidth(true);var x=$this.find('.bullet.selected').index()*minwidth;var thumbconwidth=$this.width();var minwidth=$this.find('.bullet:first').outerWidth(true);var max=minwidth*container.find('ul:first li').length;var diff=(max-thumbconwidth);var steps=diff/thumbconwidth;var pos=0-x;if(pos>0)pos=0;if(pos<0-max+thumbconwidth)pos=0-max+thumbconwidth;if(!$this.hasClass("over")){moveThumbSliderToPosition($this,pos,200);}}
function moveThumbSliderToPosition($this,pos,speed){$this.stop();$this.find('.tp-thumbcontainer').animate({'left':pos+'px'},{duration:speed,queue:false});}
function createBullets(container,opt){if(opt.navigationType=="bullet"||opt.navigationType=="both"){container.parent().append('<div class="tp-bullets simplebullets '+opt.navigationStyle+'"></div>');}
var bullets=container.parent().find('.tp-bullets');container.find('ul:first li').each(function(i){var src=container.find("ul:first li:eq("+i+") img:first").attr('src');bullets.append('<div class="bullet"></div>');var bullet=bullets.find('.bullet:first');});bullets.find('.bullet').each(function(i){var bul=$(this);if(i==opt.slideamount-1)bul.addClass('last');if(i==0)bul.addClass('first');bul.click(function(){if(opt.transition==0&&bul.index()!=opt.act){opt.next=bul.index();callingNewSlide(opt,container);}});});bullets.append('<div style="clear:both"></div>');setBulPos(container,opt);$('#unvisible_button').click(function(){opt.navigationArrows=$('.select_navarrows .selected').data('value');opt.navigationType=$('.select_navigationtype .selected').data('value');opt.hideThumbs=$('.select_navshow .selected').data('value');container.data('hidethumbs',opt.hideThumbs);var bhd=$('.select_bhposition .dragger');opt.navOffsetHorizontal=Math.round(((bhd.data('max')-bhd.data('min'))*(bhd.position().left/410))+bhd.data('min'));var bvd=$('.select_bvposition .dragger');opt.navOffsetVertical=Math.round(((bvd.data('max')-bvd.data('min'))*(bvd.position().left/410))+bvd.data('min'));var btr=$('.select_slidetime .dragger');opt.delay2=Math.round((((btr.data('max')-btr.data('min'))*(btr.position().left/410))+btr.data('min'))*1000);if(opt.delay2!=opt.delay){opt.delay=opt.delay2;opt.origcd=opt.delay;opt.cd=0;var bt=container.find('.tp-bannertimer');if(bt.length>0){bt.stop();bt.css({'width':'0%'});bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false,easing:"linear"});}}
opt.onHoverStop=$('.select_hovers .selected').data('value');setBulPos(container,opt);setTimeout(function(){setBulPos(container,opt);},100);});}
function createArrows(container,opt){var bullets=container.find('.tp-bullets');if(opt.navigationArrow!="none")container.parent().append('<div class="tp-leftarrow tparrows '+opt.navigationStyle+'"></div>');if(opt.navigationArrow!="none")container.parent().append('<div class="tp-rightarrow tparrows '+opt.navigationStyle+'"></div>');container.parent().find('.tp-rightarrow').click(function(){if(opt.transition==0){opt.next=opt.next+1;if(opt.next==opt.slideamount)opt.next=0;callingNewSlide(opt,container);}});container.parent().find('.tp-leftarrow').click(function(){if(opt.transition==0){opt.next=opt.next-1;if(opt.next<0)opt.next=opt.slideamount-1;callingNewSlide(opt,container);}});setBulPos(container,opt);}
function swipeAction(container,opt){if(opt.touchenabled=="on")
container.swipe({data:container,swipeRight:function()
{if(opt.transition==0){opt.next=opt.next-1;if(opt.next<0)opt.next=opt.slideamount-1;callingNewSlide(opt,container);}},swipeLeft:function()
{if(opt.transition==0){opt.next=opt.next+1;if(opt.next==opt.slideamount)opt.next=0;callingNewSlide(opt,container);}},allowPageScroll:"auto"});}
function hideThumbs(container,opt){var bullets=container.parent().find('.tp-bullets');var ca=container.parent().find('.tparrows');if(bullets==null){container.append('<div class=".tp-bullets"></div>');var bullets=container.parent().find('.tp-bullets');}
if(ca==null){container.append('<div class=".tparrows"></div>');var ca=container.parent().find('.tparrows');}
container.data('hidethumbs',opt.hideThumbs);try{bullets.css({'opacity':0});}catch(e){}
try{ca.css({'opacity':0});}catch(e){}
bullets.hover(function(){bullets.addClass("hovered");clearTimeout(container.data('hidethumbs'));bullets.cssAnimate({'opacity':1},{duration:200,queue:false});ca.animate({'opacity':1},{duration:200,queue:false});},function(){bullets.removeClass("hovered");if(!container.hasClass("hovered")&&!bullets.hasClass("hovered"))
container.data('hidethumbs',setTimeout(function(){bullets.cssAnimate({'opacity':0},{duration:200,queue:false});ca.animate({'opacity':0},{duration:200,queue:false});},opt.hideThumbs));});ca.hover(function(){bullets.addClass("hovered");clearTimeout(container.data('hidethumbs'));bullets.cssAnimate({'opacity':1},{duration:200,queue:false});ca.animate({'opacity':1},{duration:200,queue:false});},function(){bullets.removeClass("hovered");if(!container.hasClass("hovered")&&!bullets.hasClass("hovered"))
container.data('hidethumbs',setTimeout(function(){bullets.cssAnimate({'opacity':0},{duration:200,queue:false});ca.animate({'opacity':0},{duration:200,queue:false});},opt.hideThumbs));});container.live('mouseenter',function(){container.addClass("hovered");clearTimeout(container.data('hidethumbs'));bullets.cssAnimate({'opacity':1},{duration:200,queue:false});ca.animate({'opacity':1},{duration:200,queue:false});});container.live('mouseleave',function(){container.removeClass("hovered");if(!container.hasClass("hovered")&&!bullets.hasClass("hovered"))
container.data('hidethumbs',setTimeout(function(){bullets.cssAnimate({'opacity':0},{duration:200,queue:false});ca.animate({'opacity':0},{duration:200,queue:false});},opt.hideThumbs));});}
function setBulPos(container,opt){if(opt.navigationType=="both"){opt.navigationType="bullet";opt.navsecond="both";}
if(opt.navigationType=="none"&&opt.navigationArrows!="none")opt.navigationArrows="verticalcentered";opt.navOH=opt.navOffsetHorizontal*opt.bw;opt.navOV=opt.navOffsetVertical*opt.bh;if(opt.bw!=1)opt.navOH=0;var cap=container.parent();var la=cap.find('.tp-leftarrow');var ra=cap.find('.tp-rightarrow');if(opt.navigationType=="bullet"){var bullets=cap.find('.tp-bullets.simplebullets');bullets.css({'visibility':'visible'});try{cap.find('.tp-thumbs').css({'visibility':'hidden'});}catch(e){}
var fulllong=bullets.width();if(!bullets.hasClass("tp-thumbs")){fulllong=0;bullets.find('.bullet').each(function(){fulllong=fulllong+$(this).outerWidth(true);});bullets.css({'width':(fulllong)+"px"});}
var ldiff=cap.outerWidth()-opt.width;bullets.css({'left':(opt.navOH)+(ldiff/2)+(opt.width/2-fulllong/2)+"px",'bottom':opt.navOV+"px"});if(opt.navigationArrows=="nexttobullets"){la.removeClass("large");ra.removeClass("large");la.removeClass("thumbswitharrow");ra.removeClass("thumbswitharrow");la.css({'visibility':'visible'});ra.css({'visibility':'visible'});var diff=0;la.css({'position':'absolute','left':(bullets.position().left-la.outerWidth(true))+"px",'top':bullets.position().top+"px"});ra.css({'position':'absolute','left':(bullets.outerWidth(true)+bullets.position().left)+"px",'top':bullets.position().top+"px"});}else{if(opt.navigationArrows=="verticalcentered"){la.addClass("large");ra.addClass("large");la.css({'visibility':'visible'});ra.css({'visibility':'visible'});var decorh=cap.outerHeight();la.css({'position':'absolute','left':(ldiff/2)+"px",'top':(decorh/2)+"px"});ra.css({'position':'absolute','left':(opt.width-ra.outerWidth()+ldiff/2)+"px",'top':(decorh/2)+"px"});}else{la.css({'visibility':'hidden'});ra.css({'visibility':'hidden'});}}}else{if(opt.navigationType=="thumb"){var thumbs=cap.find('.tp-thumbs');try{cap.find('.tp-bullets').css({'visibility':'hidden'});}catch(e){}
thumbs.css({'visibility':'visible'});var decorh=thumbs.parent().outerHeight();var ldiff=cap.outerWidth()-opt.width;thumbs.css({'left':(opt.navOH)+(opt.width/2-thumbs.width()/2)+"px"});thumbs.css({'bottom':(0-thumbs.outerHeight(true)+(opt.navOV))+"px"});if(opt.navigationArrows=="verticalcentered"){la.css({'visibility':'visible'});ra.css({'visibility':'visible'});la.addClass("large");ra.addClass("large");la.css({'position':'absolute','left':(ldiff/2)+"px",'top':(cap.outerHeight()/2)+"px"});ra.css({'position':'absolute','left':(opt.width-ra.outerWidth()+ldiff/2)+"px",'top':(cap.outerHeight()/2)+"px"});}else{la.css({'visibility':'hidden'});ra.css({'visibility':'hidden'});}}else{if(opt.navigationType=="none"){try{cap.find('.tp-bullets').css({'visibility':'hidden'});}catch(e){}
try{cap.find('.tp-thumbs').css({'visibility':'hidden'});}catch(e){}
if(opt.navigationArrows!="none"){var ldiff=cap.outerWidth()-opt.width;la.css({'visibility':'visible'});ra.css({'visibility':'visible'});la.addClass("large");ra.addClass("large");la.css({'position':'absolute','left':(ldiff/2)+"px",'top':(cap.outerHeight()/2)+"px"});ra.css({'position':'absolute','left':(opt.width-ra.outerWidth()+ldiff/2)+"px",'top':(cap.outerHeight()/2)+"px"});}else{la.css({'visibility':'hidden'});ra.css({'visibility':'hidden'});}}}}}
function setSize(img,opt){opt.width=parseInt(opt.container.width(),0);opt.height=parseInt(opt.container.height(),0);opt.bw=opt.width/opt.startwidth;opt.bh=opt.height/opt.startheight;if(opt.bh>1){opt.bw=1;opt.bh=1;}
if(img.data('orgw')!=undefined){img.width(img.data('orgw'));img.height(img.data('orgh'));}
var fw=opt.width/img.width();var fh=opt.height/img.height();opt.fw=fw;opt.fh=fh;if(img.data('orgw')==undefined){img.data('orgw',img.width());img.data('orgh',img.height());}
if(opt.fullWidth=="on"){var cow=opt.container.parent().width();var coh=opt.container.parent().height();var ffh=coh/img.data('orgh');var ffw=cow/img.data('orgw');img.width(img.width()*ffh);img.height(coh);if(img.width()<cow){img.width(cow+50);var ffw=img.width()/img.data('orgw');img.height(img.data('orgh')*ffw);}
if(img.width()>cow){img.data("fxof",(cow/2-img.width()/2));img.css({'position':'absolute','left':img.data('fxof')+"px"});}}else{img.width(opt.width);img.height(img.height()*fw);if(img.height()<opt.height&&img.height()!=0&&img.height()!=null){img.height(opt.height);img.width(img.data('orgw')*fh);}}
img.data('neww',img.width());img.data('newh',img.height());if(opt.fullWidth=="on"){opt.slotw=Math.ceil(img.width()/opt.slots);}else{opt.slotw=Math.ceil(opt.width/opt.slots);}
opt.sloth=Math.ceil(opt.height/opt.slots);}
function prepareSlides(container,opt){container.find('.caption').each(function(){$(this).addClass($(this).data('transition'));$(this).addClass('start')});container.find('ul:first >li').each(function(j){var li=$(this);if(li.data('link')!=undefined){var link=li.data('link');li.append('<div class="caption sft slidelink" data-x="0" data-y="0" data-start="0"><a href="'+link+'"><div></div></a></div>');}});container.find('ul:first li >img').each(function(j){var img=$(this);img.addClass('defaultimg');setSize(img,opt);img.wrap('<div class="slotholder"></div>');img.css({'opacity':0});img.data('li-id',j);});}
function prepareOneSlide(slotholder,opt,visible){var sh=slotholder;var img=sh.find('img')
setSize(img,opt)
var src=img.attr('src');var w=img.data('neww');var h=img.data('newh');var fulloff=img.data("fxof");if(fulloff==undefined)fulloff=0;var off=0;if(!visible)
var off=0-opt.slotw;for(var i=0;i<opt.slots;i++)
sh.append('<div class="slot" style="position:absolute;top:0px;left:'+(fulloff+i*opt.slotw)+'px;overflow:hidden;width:'+opt.slotw+'px;height:'+h+'px"><div class="slotslide" style="position:absolute;top:0px;left:'+off+'px;width:'+opt.slotw+'px;height:'+h+'px;overflow:hidden;"><img style="position:absolute;top:0px;left:'+(0-(i*opt.slotw))+'px;width:'+w+'px;height:'+h+'px" src="'+src+'"></div></div>');}
function prepareOneSlideV(slotholder,opt,visible){var sh=slotholder;var img=sh.find('img')
setSize(img,opt)
var src=img.attr('src');var w=img.data('neww');var h=img.data('newh');var fulloff=img.data("fxof");if(fulloff==undefined)fulloff=0;var off=0;if(!visible)
var off=0-opt.sloth;for(var i=0;i<opt.slots;i++)
sh.append('<div class="slot" style="position:absolute;top:'+(i*opt.sloth)+'px;left:'+(fulloff)+'px;overflow:hidden;width:'+w+'px;height:'+(opt.sloth)+'px"><div class="slotslide" style="position:absolute;top:'+off+'px;left:0px;width:'+w+'px;height:'+opt.sloth+'px;overflow:hidden;"><img style="position:absolute;top:'+(0-(i*opt.sloth))+'px;left:0px;width:'+w+'px;height:'+h+'px" src="'+src+'"></div></div>');}
function prepareOneSlideBox(slotholder,opt,visible){var sh=slotholder;var img=sh.find('img')
setSize(img,opt)
var src=img.attr('src');var w=img.data('neww');var h=img.data('newh');var fulloff=img.data("fxof");if(fulloff==undefined)fulloff=0;var off=0;var basicsize=0;if(opt.sloth>opt.slotw)
basicsize=opt.sloth
else
basicsize=opt.slotw;if(!visible){var off=0-basicsize;}
opt.slotw=basicsize;opt.sloth=basicsize;var x=0;var y=0;for(var j=0;j<opt.slots;j++){y=0;for(var i=0;i<opt.slots;i++){sh.append('<div class="slot" '+'style="position:absolute;'+'top:'+y+'px;'+'left:'+(fulloff+x)+'px;'+'width:'+basicsize+'px;'+'height:'+basicsize+'px;'+'overflow:hidden;">'+'<div class="slotslide" data-x="'+x+'" data-y="'+y+'" '+'style="position:absolute;'+'top:'+(0)+'px;'+'left:'+(0)+'px;'+'width:'+basicsize+'px;'+'height:'+basicsize+'px;'+'overflow:hidden;">'+'<img style="position:absolute;'+'top:'+(0-y)+'px;'+'left:'+(0-x)+'px;'+'width:'+w+'px;'+'height:'+h+'px"'+'src="'+src+'"></div></div>');y=y+basicsize;}
x=x+basicsize;}}
function removeSlots(container){container.find('.slotholder .slot').each(function(){clearTimeout($(this).data('tout'));$(this).remove();});}
function setCaptionPositions(container,opt){var actli=container.find('li:eq('+opt.act+')');var nextli=container.find('li:eq('+opt.next+')');var nextcaption=nextli.find('.caption');if(nextcaption.find('iframe')==0){if(nextcaption.hasClass('hcenter'))
nextcaption.css({'height':opt.height+"px",'top':'0px','left':(opt.width/2-nextcaption.outerWidth()/2)+'px'});else
if(nextcaption.hasClass('vcenter'))
nextcaption.css({'width':opt.width+"px",'left':'0px','top':(opt.height/2-nextcaption.outerHeight()/2)+'px'});}}
function swapSlide(container,opt){opt.transition=1;try{var actli=container.find('li:eq('+opt.act+')');}catch(e){var actli=container.find('li:eq(1)');}
var nextli=container.find('li:eq('+opt.next+')');var actsh=actli.find('.slotholder');var nextsh=nextli.find('.slotholder');actli.css({'visibility':'visible'});nextli.css({'visibility':'visible'});if($.browser.msie&&$.browser.version<9){if(nextli.data('transition')=="boxfade")nextli.data('transition',"boxslide");if(nextli.data('transition')=="slotfade-vertical")nextli.data('transition',"slotzoom-vertical");if(nextli.data('transition')=="slotfade-horizontal")nextli.data('transition',"slotzoom-horizontal");}
if(nextli.data('delay')!=undefined){opt.cd=0;opt.delay=nextli.data('delay');}else{opt.delay=opt.origcd;}
actli.css({'left':'0px','top':'0px'});nextli.css({'left':'0px','top':'0px'});var nexttrans=0;if(nextli.data('transition')=="boxslide")nexttrans=0
else
if(nextli.data('transition')=="boxfade")nexttrans=1
else
if(nextli.data('transition')=="slotslide-horizontal")nexttrans=2
else
if(nextli.data('transition')=="slotslide-vertical")nexttrans=3
else
if(nextli.data('transition')=="curtain-1")nexttrans=4
else
if(nextli.data('transition')=="curtain-2")nexttrans=5
else
if(nextli.data('transition')=="curtain-3")nexttrans=6
else
if(nextli.data('transition')=="slotzoom-horizontal")nexttrans=7
else
if(nextli.data('transition')=="slotzoom-vertical")nexttrans=8
else
if(nextli.data('transition')=="slotfade-horizontal")nexttrans=9
else
if(nextli.data('transition')=="slotfade-vertical")nexttrans=10
else
if(nextli.data('transition')=="fade")nexttrans=11
else
if(nextli.data('transition')=="slideleft")nexttrans=12
else
if(nextli.data('transition')=="slideup")nexttrans=13
else
if(nextli.data('transition')=="slidedown")nexttrans=14
else
if(nextli.data('transition')=="slideright")nexttrans=15;else{nexttrans=Math.round(Math.random()*16);nextli.data('slotamount',Math.round(Math.random()*12+4));}
if(nextli.data('transition')=="slidehorizontal"){if(opt.act<opt.next)
nexttrans=12
else
nexttrans=15}
if(nextli.data('transition')=="slidevertical"){if(opt.act<opt.next)
nexttrans=13
else
nexttrans=14}
if(nexttrans>16)nexttrans=15;if(nexttrans<0)nexttrans=0;container.parent().find(".bullet").each(function(){var bul=$(this);bul.removeClass("selected");if(bul.index()==opt.next)bul.addClass('selected');});container.find('li').each(function(){var li=$(this);if(li.index!=opt.act&&li.index!=opt.next)li.css({'z-index':16});});actli.css({'z-index':18});nextli.css({'z-index':20});nextli.css({'opacity':0});removeTheCaptions(actli,opt);animateTheCaptions(nextli,opt);if(nextli.data('slotamount')==undefined||nextli.data('slotamount')<1){opt.slots=Math.round(Math.random()*12+4);if(nextli.data('transition')=="boxslide")
opt.slots=Math.round(Math.random()*6+3);}else{opt.slots=nextli.data('slotamount');}
if(nexttrans==0){if(opt.slots>15)opt.slots=15;nextli.css({'opacity':1});prepareOneSlideBox(actsh,opt,true);prepareOneSlideBox(nextsh,opt,false);nextsh.find('.defaultimg').css({'opacity':0});nextsh.find('.slotslide').each(function(j){var ss=$(this);ss.css({'top':(0-opt.sloth)+"px",'left':(0-opt.slotw)+"px"});setTimeout(function(){if(opt.firefox13)
ss.animate({'top':"0px",'left':'0px'},{duration:(400),queue:false,complete:function(){if(j==(opt.slots*opt.slots)-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});else
ss.cssAnimate({'top':"0px",'left':'0px'},{duration:(400),queue:false,complete:function(){if(j==(opt.slots*opt.slots)-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});},j*15);});}
if(nexttrans==1){if(opt.slots>15)opt.slots=15;nextli.css({'opacity':1});prepareOneSlideBox(nextsh,opt,false);nextsh.find('.defaultimg').css({'opacity':0});nextsh.find('.slotslide').each(function(j){var ss=$(this);ss.css({'opacity':0});ss.find('img').css({'opacity':0});ss.find('img').css({'top':(Math.random()*opt.slotw-opt.slotw)+"px",'left':(Math.random()*opt.slotw-opt.slotw)+"px"});var rand=Math.random()*1000+500;if(j==(opt.slots*opt.slots)-1)rand=1500;if(opt.firefox13){ss.find('img').animate({'opacity':1,'top':(0-ss.data('y'))+"px",'left':(0-ss.data('x'))+'px'},{duration:rand,queue:false});ss.animate({'opacity':1},{duration:rand,queue:false,complete:function(){if(j==(opt.slots*opt.slots)-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}else{ss.find('img').cssAnimate({'opacity':1,'top':(0-ss.data('y'))+"px",'left':(0-ss.data('x'))+'px'},{duration:rand,queue:false});ss.cssAnimate({'opacity':1},{duration:rand,queue:false,complete:function(){if(j==(opt.slots*opt.slots)-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}});}
if(nexttrans==2){nextli.css({'opacity':1});prepareOneSlide(actsh,opt,true);prepareOneSlide(nextsh,opt,false);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(){var ss=$(this);if(opt.firefox13){ss.animate({'left':opt.slotw+'px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}else{ss.cssAnimate({'left':opt.slotw+'px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}});nextsh.find('.slotslide').each(function(){var ss=$(this);ss.css({'left':(0-opt.slotw)+"px"});if(opt.firefox13){ss.animate({'left':'0px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}else{ss.cssAnimate({'left':'0px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}});}
if(nexttrans==3){nextli.css({'opacity':1});prepareOneSlideV(actsh,opt,true);prepareOneSlideV(nextsh,opt,false);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(){var ss=$(this);if(opt.firefox13){ss.animate({'top':opt.sloth+'px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}else{ss.cssAnimate({'top':opt.sloth+'px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}});nextsh.find('.slotslide').each(function(){var ss=$(this);ss.css({'top':(0-opt.sloth)+"px"});if(opt.firefox13){ss.animate({'top':'0px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}else{ss.cssAnimate({'top':'0px'},{duration:500,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}});}});}
if(nexttrans==4){nextli.css({'opacity':1});prepareOneSlide(actsh,opt,true);prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(i){var ss=$(this);ss.cssAnimate({'top':(0+(opt.height))+"px",'opacity':1},{duration:300+(i*(70-opt.slots)),queue:false,complete:function(){}});});nextsh.find('.slotslide').each(function(i){var ss=$(this);ss.css({'top':(0-(opt.height))+"px",'opacity':0});if(opt.firefox13){ss.animate({'top':'0px','opacity':1},{duration:300+(i*(70-opt.slots)),queue:false,complete:function(){if(i==opt.slots-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}else{ss.cssAnimate({'top':'0px','opacity':1},{duration:300+(i*(70-opt.slots)),queue:false,complete:function(){if(i==opt.slots-1){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}});}
if(nexttrans==5){nextli.css({'opacity':1});prepareOneSlide(actsh,opt,true);prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(i){var ss=$(this);if(opt.firefox13){ss.animate({'top':(0+(opt.height))+"px",'opacity':1},{duration:300+((opt.slots-i)*(70-opt.slots)),queue:false,complete:function(){}});}else{ss.cssAnimate({'top':(0+(opt.height))+"px",'opacity':1},{duration:300+((opt.slots-i)*(70-opt.slots)),queue:false,complete:function(){}});}});nextsh.find('.slotslide').each(function(i){var ss=$(this);ss.css({'top':(0-(opt.height))+"px",'opacity':0});if(opt.firefox13){ss.animate({'top':'0px','opacity':1},{duration:300+((opt.slots-i)*(70-opt.slots)),queue:false,complete:function(){if(i==0){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}else{ss.cssAnimate({'top':'0px','opacity':1},{duration:300+((opt.slots-i)*(70-opt.slots)),queue:false,complete:function(){if(i==0){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}});}
if(nexttrans==6){nextli.css({'opacity':1});if(opt.slots<2)opt.slots=2;prepareOneSlide(actsh,opt,true);prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(i){var ss=$(this);if(i<opt.slots/2)
var tempo=(i+2)*60;else
var tempo=(2+opt.slots-i)*60;if(opt.firefox13){ss.animate({'top':(0+(opt.height))+"px",'opacity':1},{duration:300+tempo,queue:false,complete:function(){}});}else{ss.cssAnimate({'top':(0+(opt.height))+"px",'opacity':1},{duration:300+tempo,queue:false,complete:function(){}});}});nextsh.find('.slotslide').each(function(i){var ss=$(this);ss.css({'top':(0-(opt.height))+"px",'opacity':0});if(i<opt.slots/2)
var tempo=(i+2)*60;else
var tempo=(2+opt.slots-i)*60;if(opt.firefox13){ss.animate({'top':'0px','opacity':1},{duration:300+tempo,queue:false,complete:function(){if(i==Math.round(opt.slots/2)){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}else{ss.cssAnimate({'top':'0px','opacity':1},{duration:300+tempo,queue:false,complete:function(){if(i==Math.round(opt.slots/2)){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.act=opt.next;opt.transition=0;moveSelectedThumb(container);}}});}});}
if(nexttrans==7){nextli.css({'opacity':1});prepareOneSlide(actsh,opt,true);prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(){var ss=$(this).find('img');if(opt.firefox13){ss.animate({'left':(0-opt.slotw/2)+'px','top':(0-opt.height/2)+'px','width':(opt.slotw*2)+"px",'height':(opt.height*2)+"px",opacity:0},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}else{ss.cssAnimate({'left':(0-opt.slotw/2)+'px','top':(0-opt.height/2)+'px','width':(opt.slotw*2)+"px",'height':(opt.height*2)+"px",opacity:0},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}});nextsh.find('.slotslide').each(function(i){var ss=$(this).find('img');ss.css({'left':(0)+'px','top':(0)+'px',opacity:0});if(opt.firefox13){ss.animate({'left':(0-i*opt.slotw)+'px','top':(0)+'px','width':(nextsh.find('.defaultimg').data('neww'))+"px",'height':(nextsh.find('.defaultimg').data('newh'))+"px",opacity:1},{duration:1000,queue:false});}else{ss.cssAnimate({'left':(0-i*opt.slotw)+'px','top':(0)+'px','width':(nextsh.find('.defaultimg').data('neww'))+"px",'height':(nextsh.find('.defaultimg').data('newh'))+"px",opacity:1},{duration:1000,queue:false});}});}
if(nexttrans==8){nextli.css({'opacity':1});prepareOneSlideV(actsh,opt,true);prepareOneSlideV(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});actsh.find('.slotslide').each(function(){var ss=$(this).find('img');if(opt.firefox13){ss.animate({'left':(0-opt.width/2)+'px','top':(0-opt.sloth/2)+'px','width':(opt.width*2)+"px",'height':(opt.sloth*2)+"px",opacity:0},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}else{ss.cssAnimate({'left':(0-opt.width/2)+'px','top':(0-opt.sloth/2)+'px','width':(opt.width*2)+"px",'height':(opt.sloth*2)+"px",opacity:0},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}});nextsh.find('.slotslide').each(function(i){var ss=$(this).find('img');ss.css({'left':(0)+'px','top':(0)+'px',opacity:0});if(opt.firefox13){ss.animate({'left':(0)+'px','top':(0-i*opt.sloth)+'px','width':(nextsh.find('.defaultimg').data('neww'))+"px",'height':(nextsh.find('.defaultimg').data('newh'))+"px",opacity:1},{duration:1000,queue:false});}else{ss.cssAnimate({'left':(0)+'px','top':(0-i*opt.sloth)+'px','width':(nextsh.find('.defaultimg').data('neww'))+"px",'height':(nextsh.find('.defaultimg').data('newh'))+"px",opacity:1},{duration:1000,queue:false});}});}
if(nexttrans==9){nextli.css({'opacity':1});opt.slots=opt.width/20;prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});var ssamount=0;nextsh.find('.slotslide').each(function(i){var ss=$(this);ssamount++;ss.css({'opacity':0});ss.data('tout',setTimeout(function(){ss.animate({'opacity':1},{duration:300,queue:false});},i*4));});setTimeout(function(){opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);},(300+(ssamount*4)));}
if(nexttrans==10){nextli.css({'opacity':1});opt.slots=opt.height/20;prepareOneSlideV(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});var ssamount=0;nextsh.find('.slotslide').each(function(i){var ss=$(this);ssamount++;ss.css({'opacity':0});ss.data('tout',setTimeout(function(){ss.animate({'opacity':1},{duration:300,queue:false});},i*4));});setTimeout(function(){opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);},(300+(ssamount*4)));}
if(nexttrans==11){nextli.css({'opacity':1});opt.slots=1;prepareOneSlide(nextsh,opt,true);nextsh.find('.defaultimg').css({'opacity':0});var ssamount=0;nextsh.find('.slotslide').each(function(i){var ss=$(this);ssamount++;ss.css({'opacity':0});ss.animate({'opacity':1},{duration:300,queue:false});});setTimeout(function(){opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);},300);}
if(nexttrans==12||nexttrans==13||nexttrans==14||nexttrans==15){nextli.css({'opacity':1});opt.slots=1;prepareOneSlide(nextsh,opt,true);prepareOneSlide(actsh,opt,true);actsh.find('.defaultimg').css({'opacity':0});nextsh.find('.defaultimg').css({'opacity':0});var oow=opt.width;var ooh=opt.height;if(opt.fullWidth=="on"){oow=opt.container.parent().width();ooh=opt.container.parent().height();}
var ssn=nextsh.find('.slotslide')
if(nexttrans==12)
ssn.css({'left':oow+"px"});else
if(nexttrans==15)
ssn.css({'left':(0-opt.width)+"px"});else
if(nexttrans==13)
ssn.css({'top':(ooh)+"px"});else
if(nexttrans==14)
ssn.css({'top':(0-opt.height)+"px"});if(opt.firefox13){ssn.animate({'left':'0px','top':'0px',opacity:1},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}else{ssn.cssAnimate({'left':'0px','top':'0px',opacity:1},{duration:1000,queue:false,complete:function(){removeSlots(container);nextsh.find('.defaultimg').css({'opacity':1});actsh.find('.defaultimg').css({'opacity':0});if($.browser.msie&&$.browser.version<9)actsh.find('.defaultimg').css({'opacity':1});opt.transition=0;opt.act=opt.next;moveSelectedThumb(container);}});}
var ssa=actsh.find('.slotslide');if(opt.firefox13){if(nexttrans==12)
ssa.animate({'left':(0-oow)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==15)
ssa.animate({'left':(oow)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==13)
ssa.animate({'top':(0-ooh)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==14)
ssa.animate({'top':(ooh)+'px',opacity:1},{duration:1000,queue:false});}else{if(nexttrans==12)
ssa.cssAnimate({'left':(0-oow)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==15)
ssa.cssAnimate({'left':(oow)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==13)
ssa.cssAnimate({'top':(0-ooh)+'px',opacity:1},{duration:1000,queue:false});else
if(nexttrans==14)
ssa.cssAnimate({'top':(ooh)+'px',opacity:1},{duration:1000,queue:false});}}}
function removeTheCaptions(actli,opt){actli.find('.caption').each(function(i){var nextcaption=actli.find('.caption:eq('+i+')');nextcaption.stop(true,true);clearTimeout(nextcaption.data('timer'));var easetype=nextcaption.data('easing');easetype="easeInOutSine";var ll=nextcaption.data('repx');var tt=nextcaption.data('repy');var oo=nextcaption.data('repo');if(nextcaption.find('iframe').length>0){var par=nextcaption.find('iframe').parent();var iframe=par.html();setTimeout(function(){nextcaption.find('iframe').remove();par.append(iframe);},nextcaption.data('speed'));}
try{nextcaption.animate({'opacity':oo,'left':ll+'px','top':tt+"px"},{duration:nextcaption.data('speed'),easing:easetype});}catch(e){}});}
function animateTheCaptions(nextli,opt){nextli.find('.caption').each(function(i){offsetx=opt.width/2-opt.startwidth/2;if(opt.bh>1){opt.bw=1;opt.bh=1;}
var xbw=opt.bw;var nextcaption=nextli.find('.caption:eq('+i+')');nextcaption.stop(true,true);if(nextcaption.hasClass("coloredbg"))offsetx=0;if(offsetx<0)offsetx=0;clearTimeout(nextcaption.data('timer'));var imw=0;var imh=0;if(nextcaption.find('img').length>0){var im=nextcaption.find('img');if(im.data('ww')==undefined)im.data('ww',im.width());if(im.data('hh')==undefined)im.data('hh',im.height());var ww=im.data('ww');var hh=im.data('hh');im.width(ww*opt.bw);im.height(hh*opt.bh);imw=im.width();imh=im.height();}else{if(nextcaption.find('iframe').length>0){var im=nextcaption.find('iframe');if(nextcaption.data('ww')==undefined){nextcaption.data('ww',im.width());}
if(nextcaption.data('hh')==undefined)nextcaption.data('hh',im.height());var ww=nextcaption.data('ww');var hh=nextcaption.data('hh');var nc=nextcaption;if(nc.data('fsize')==undefined)nc.data('fsize',parseInt(nc.css('font-size'),0)||0);if(nc.data('pt')==undefined)nc.data('pt',parseInt(nc.css('paddingTop'),0)||0);if(nc.data('pb')==undefined)nc.data('pb',parseInt(nc.css('paddingBottom'),0)||0);if(nc.data('pl')==undefined)nc.data('pl',parseInt(nc.css('paddingLeft'),0)||0);if(nc.data('pr')==undefined)nc.data('pr',parseInt(nc.css('paddingRight'),0)||0);if(nc.data('mt')==undefined)nc.data('mt',parseInt(nc.css('marginTop'),0)||0);if(nc.data('mb')==undefined)nc.data('mb',parseInt(nc.css('marginBottom'),0)||0);if(nc.data('ml')==undefined)nc.data('ml',parseInt(nc.css('marginLeft'),0)||0);if(nc.data('mr')==undefined)nc.data('mr',parseInt(nc.css('marginRight'),0)||0);if(nc.data('bt')==undefined)nc.data('bt',parseInt(nc.css('borderTop'),0)||0);if(nc.data('bb')==undefined)nc.data('bb',parseInt(nc.css('borderBottom'),0)||0);if(nc.data('bl')==undefined)nc.data('bl',parseInt(nc.css('borderLeft'),0)||0);if(nc.data('br')==undefined)nc.data('br',parseInt(nc.css('borderRight'),0)||0);if(nc.data('lh')==undefined)nc.data('lh',parseInt(nc.css('lineHeight'),0)||0);nextcaption.css({'font-size':(nc.data('fsize')*opt.bw)+"px",'padding-top':(nc.data('pt')*opt.bh)+"px",'padding-bottom':(nc.data('pb')*opt.bh)+"px",'padding-left':(nc.data('pl')*opt.bw)+"px",'padding-right':(nc.data('pr')*opt.bw)+"px",'margin-top':(nc.data('mt')*opt.bh)+"px",'margin-bottom':(nc.data('mb')*opt.bh)+"px",'margin-left':(nc.data('ml')*opt.bw)+"px",'margin-right':(nc.data('mr')*opt.bw)+"px",'border-top':(nc.data('bt')*opt.bh)+"px",'border-bottom':(nc.data('bb')*opt.bh)+"px",'border-left':(nc.data('bl')*opt.bw)+"px",'border-right':(nc.data('br')*opt.bw)+"px",'line-height':(nc.data('lh')*opt.bh)+"px",'height':(hh*opt.bh)+'px','white-space':"nowrap"});im.width(ww*opt.bw);im.height(hh*opt.bh);imw=im.width();imh=im.height();}else{var nc=nextcaption;if(nc.data('fsize')==undefined)nc.data('fsize',parseInt(nc.css('font-size'),0)||0);if(nc.data('pt')==undefined)nc.data('pt',parseInt(nc.css('paddingTop'),0)||0);if(nc.data('pb')==undefined)nc.data('pb',parseInt(nc.css('paddingBottom'),0)||0);if(nc.data('pl')==undefined)nc.data('pl',parseInt(nc.css('paddingLeft'),0)||0);if(nc.data('pr')==undefined)nc.data('pr',parseInt(nc.css('paddingRight'),0)||0);if(nc.data('mt')==undefined)nc.data('mt',parseInt(nc.css('marginTop'),0)||0);if(nc.data('mb')==undefined)nc.data('mb',parseInt(nc.css('marginBottom'),0)||0);if(nc.data('ml')==undefined)nc.data('ml',parseInt(nc.css('marginLeft'),0)||0);if(nc.data('mr')==undefined)nc.data('mr',parseInt(nc.css('marginRight'),0)||0);if(nc.data('bt')==undefined)nc.data('bt',parseInt(nc.css('borderTop'),0)||0);if(nc.data('bb')==undefined)nc.data('bb',parseInt(nc.css('borderBottom'),0)||0);if(nc.data('bl')==undefined)nc.data('bl',parseInt(nc.css('borderLeft'),0)||0);if(nc.data('br')==undefined)nc.data('br',parseInt(nc.css('borderRight'),0)||0);if(nc.data('lh')==undefined)nc.data('lh',parseInt(nc.css('lineHeight'),0)||0);nextcaption.css({'font-size':(nc.data('fsize')*opt.bw)+"px",'padding-top':(nc.data('pt')*opt.bh)+"px",'padding-bottom':(nc.data('pb')*opt.bh)+"px",'padding-left':(nc.data('pl')*opt.bw)+"px",'padding-right':(nc.data('pr')*opt.bw)+"px",'margin-top':(nc.data('mt')*opt.bh)+"px",'margin-bottom':(nc.data('mb')*opt.bh)+"px",'margin-left':(nc.data('ml')*opt.bw)+"px",'margin-right':(nc.data('mr')*opt.bw)+"px",'border-top':(nc.data('bt')*opt.bh)+"px",'border-bottom':(nc.data('bb')*opt.bh)+"px",'border-left':(nc.data('bl')*opt.bw)+"px",'border-right':(nc.data('br')*opt.bw)+"px",'line-height':(nc.data('lh')*opt.bh)+"px",'white-space':"nowrap"});imh=nextcaption.outerHeight(true);imw=nextcaption.outerWidth(true);}}
if(nextcaption.hasClass('fade')){nextcaption.css({'opacity':0,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':(opt.bh*nextcaption.data('y'))+"px"});}
if(nextcaption.hasClass('lfr')){nextcaption.css({'opacity':1,'left':(5+opt.width)+'px','top':(opt.bh*nextcaption.data('y'))+"px"});}
if(nextcaption.hasClass('lfl')){nextcaption.css({'opacity':1,'left':(-5-imw)+'px','top':(opt.bh*nextcaption.data('y'))+"px"});}
if(nextcaption.hasClass('sfl')){nextcaption.css({'opacity':0,'left':((xbw*nextcaption.data('x'))-50+offsetx)+'px','top':(opt.bh*nextcaption.data('y'))+"px"});}
if(nextcaption.hasClass('sfr')){nextcaption.css({'opacity':0,'left':((xbw*nextcaption.data('x'))+50+offsetx)+'px','top':(opt.bh*nextcaption.data('y'))+"px"});}
if(nextcaption.hasClass('lft')){nextcaption.css({'opacity':1,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':(-5-imh)+"px"});}
if(nextcaption.hasClass('lfb')){nextcaption.css({'opacity':1,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':(5+opt.height)+"px"});}
if(nextcaption.hasClass('sft')){nextcaption.css({'opacity':0,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':((opt.bh*nextcaption.data('y'))-50)+"px"});}
if(nextcaption.hasClass('sfb')){nextcaption.css({'opacity':0,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':((opt.bh*nextcaption.data('y'))+50)+"px"});}
nextcaption.data('timer',setTimeout(function(){if(nextcaption.hasClass('fade')){nextcaption.data('repo',nextcaption.css('opacity'));nextcaption.animate({'opacity':1});}
if(nextcaption.hasClass('lfr')||nextcaption.hasClass('lfl')||nextcaption.hasClass('sfr')||nextcaption.hasClass('sfl')||nextcaption.hasClass('lft')||nextcaption.hasClass('lfb')||nextcaption.hasClass('sft')||nextcaption.hasClass('sfb'))
{var easetype=nextcaption.data('easing');if(easetype==undefined)easetype="linear";nextcaption.data('repx',nextcaption.position().left);nextcaption.data('repy',nextcaption.position().top);nextcaption.data('repo',nextcaption.css('opacity'));nextcaption.animate({'opacity':1,'left':(xbw*nextcaption.data('x')+offsetx)+'px','top':opt.bh*(nextcaption.data('y'))+"px"},{duration:nextcaption.data('speed'),easing:easetype});}},nextcaption.data('start')));})}
function countDown(container,opt){opt.cd=0;var bt=container.find('.tp-bannertimer');if(bt.length>0){bt.css({'width':'0%'});bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false,easing:"linear"});}
opt.cdint=setInterval(function(){if(opt.conthover!=1)opt.cd=opt.cd+100;if(opt.stopLoop=="on"&&opt.act==container.find('>ul >li').length-1){clearInterval(opt.cdint);container.find('.tp-bannertimer').css({'visibility':'hidden'});}
if(opt.cd>=opt.delay){opt.cd=0;opt.act=opt.next;opt.next=opt.next+1;if(opt.next>container.find('>ul >li').length-1)opt.next=0;swapSlide(container,opt);if(bt.length>0){bt.css({'width':'0%'});bt.animate({'width':"100%"},{duration:(opt.delay-100),queue:false,easing:"linear"});}}},100);container.hover(function(){if(opt.onHoverStop=="on"){opt.conthover=1;bt.stop();}},function(){if(opt.onHoverStop=="on"){opt.conthover=0;bt.animate({'width':"100%"},{duration:((opt.delay-opt.cd)-100),queue:false,easing:"linear"});}});}})(jQuery);
/* Validation Plugin - v1.11.1 - makes simple clientside form validation easy
 * https://github.com/jzaefferer/jquery-validation
 */

(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
	Version: 1.3
*/

(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery)
;
/*!
	jQuery Colorbox v1.4.14 - 2013-04-16
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/

(function ($, document, window) {
	var
	// Default settings object.
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		fadeOut: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,
		className: false,
		
		// alternate image paths for high-res displays
		retinaImage: false,
		retinaUrl: false,
		retinaSuffix: '@2x.$1',

		// internationalization
		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,

		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	$events = $('<a/>'),
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	className,
	requests = 0,
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}
	
	// Get the window height using innerHeight when available to avoid an issue with iOS
	// http://bugs.jquery.com/ticket/6724
	function winheight() {
		return window.innerHeight ? window.innerHeight : $(window).height();
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var
		max = $related.length,
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
	function isImage(settings, url) {
		return settings.photo || settings.photoRegex.test(url);
	}

	function retinaUrl(settings, url) {
		return settings.retinaUrl && window.devicePixelRatio > 1 ? url.replace(settings.photoRegex, settings.retinaSuffix) : url;
	}

	function trapFocus(e) {
		if ('contains' in $box[0] && !$box[0].contains(e.target)) {
			e.stopPropagation();
			$box.focus();
		}
	}

	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object');
			}
		} else {
			settings = $.extend({}, data);
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || $(element).data('rel') || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		// for external use
		$(document).trigger(event);

		// for internal use
		$events.trigger(event);

		if ($.isFunction(callback)) {
			callback.call(element);
		}
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		clear,
		set,
		start,
		stop;
		
		if (settings.slideshow && $related[1]) {
			clear = function () {
				clearTimeout(timeOut);
			};

			set = function () {
				if (settings.loop || $related[index + 1]) {
					timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
				}
			};

			start = function () {
				$slideshow
					.html(settings.slideshowStop)
					.unbind(click)
					.one(click, stop);

				$events
					.bind(event_complete, set)
					.bind(event_load, clear)
					.bind(event_cleanup, stop);

				$box.removeClass(className + "off").addClass(className + "on");
			};
			
			stop = function () {
				clear();
				
				$events
					.unbind(event_complete, set)
					.unbind(event_load, clear)
					.unbind(event_cleanup, stop);
				
				$slideshow
					.html(settings.slideshowStart)
					.unbind(click)
					.one(click, function () {
						publicMethod.next();
						start();
					});

				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
			$box.removeClass(className + "off " + className + "on");
		}
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox),
						relRelated;

					if (data) {
						relRelated =  $(this).data('rel') || data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to Colorbox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			$overlay.css({
				opacity: parseFloat(settings.opacity),
				cursor: settings.overlayClose ? "pointer" : "auto",
				visibility: 'visible'
			}).show();
			

			if (className) {
				$box.add($overlay).removeClass(className);
			}
			if (settings.className) {
				$box.add($overlay).addClass(settings.className);
			}
			className = settings.className;

			$close.html(settings.close).show();

			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				// Show colorbox so the sizes can be calculated in older versions of jQuery
				$box.css({visibility:'hidden', display:'block'});
				
				$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden').appendTo($content);

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);
				
				
				// Opens inital empty Colorbox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();

				slideshow();

				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();

				$box.focus();
				
				// Confine focus to the modal
				// Uses event capturing that is not supported in IE8-
				if (document.addEventListener) {

					document.addEventListener('focus', trapFocus, true);
					
					$events.one(event_closed, function () {
						document.removeEventListener('focus', trapFocus, true);
					});
				}

				// Return focus on closing
				if (settings.returnFocus) {
					$events.one(event_closed, function () {
						$(element).focus();
					});
				}
			}
			
			load();
		}
	}

	// Colorbox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;
			$window = $(window);
			$box = $tag(div).attr({
				id: colorbox,
				'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
				role: 'dialog',
				tabindex: '-1'
			}).hide();
			$overlay = $tag(div, "Overlay").hide();
			$loadingOverlay = $tag(div, "LoadingOverlay").add($tag(div, "LoadingGraphic"));
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
				$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
				$slideshow = $tag('button', "Slideshow"),
				$loadingOverlay,
				$close = $('<button type="button"/>').attr({id:prefix+'Close'})
			);
			
			$wrap.append( // The 3x3 Grid that makes up Colorbox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add Colorbox's event bindings
	function addBindings() {
		function clickHandler(e) {
			// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
			// See: http://jacklmoore.com/notes/click-events/
			if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.control)) {
				e.preventDefault();
				launch(this);
			}
		}

		if ($box) {
			if (!init) {
				init = true;

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1] && !e.altKey) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				if ($.isFunction($.fn.on)) {
					// For jQuery 1.7+
					$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
				} else {
					// For jQuery 1.3.x -> 1.6.x
					// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
					// This is not here for jQuery 1.9, it's here for legacy users.
					$('.'+boxElement).live('click.'+prefix, clickHandler);
				}
			}
			return true;
		}
		return false;
	}

	// Don't do anything if Colorbox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.colorbox.close();
	// Usage from within an iframe: parent.jQuery.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if ($.isFunction($this)) { // assume a call to $.colorbox
				$this = $('<a/>');
				options.open = true;
			} else if (!$this[0]) { // colorbox being applied to empty collection
				return $this;
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var
		css,
		top = 0,
		left = 0,
		offset = $box.offset(),
		scrollTop,
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left, visibility:'visible'});

		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt(that.style.width,10) - interfaceWidth)+'px';
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt(that.style.height,10) - interfaceHeight)+'px';
		}

		css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

		if(speed===0){ // temporary workaround to side-step jQuery-UI 1.8 bug (http://bugs.jquery.com/ticket/12273)
			$box.css(css);
		}
		$box.dequeue().animate(css, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;

		$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.

		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		
		$(photo).css({'float': 'none'});

		callback = function () {
			var total = $related.length,
				iframe,
				frameBorder = 'frameBorder',
				allowTransparency = 'allowTransparency',
				complete;
			
			if (!open) {
				return;
			}
			
			function removeFilter() { // Needed for IE7 & IE8 in versions of jQuery prior to 1.7.2
				if ($.support.opacity === false) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete, settings.onComplete);
			};

			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				if (settings.slideshow) {
					$slideshow.show();
				}
				
				// Preloads images within a rel group
				if (settings.preloading) {
					$.each([getIndex(-1), getIndex(1)], function(){
						var src,
							img,
							i = $related[this],
							data = $.data(i, colorbox);

						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = $(i).attr('href');
						}

						if (src && isImage(data, src)) {
							src = retinaUrl(data, src);
							img = new Image();
							img.src = src;
						}
					});
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}

				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				
				$(iframe)
					.attr({
						src: settings.href,
						name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
						'class': prefix + 'Iframe',
						allowFullScreen : true, // allow HTML5 video to go fullscreen
						webkitAllowFullScreen : true,
						mozallowfullscreen : true
					})
					.one('load', complete)
					.appendTo($loaded);
				
				$events.one(event_purge, function () {
					iframe.src = "//about:blank";
				});

				if (settings.fastIframe) {
					$(iframe).trigger('load');
				}
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	function load () {
		var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		makeSettings();
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when Colorbox closes or loads new content.
			$inline = $tag(div).hide().insertBefore($(href)[0]);

			$events.one(event_purge, function () {
				$inline.replaceWith($loaded.children());
			});

			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(settings, href)) {

			href = retinaUrl(settings, href);

			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.bind('error',function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.one('load', function () {
				var percent;

				if (request !== requests) {
					return;
				}

				photo.alt = $(element).attr('alt') || $(element).attr('data-alt') || '';

				if (settings.retinaImage && window.devicePixelRatio > 1) {
					photo.height = photo.height / window.devicePixelRatio;
					photo.width = photo.width / window.devicePixelRatio;
				}

				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}

				photo.style.width = photo.width + 'px';
				photo.style.height = photo.height + 'px';

				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status) {
				if (request === requests) {
					prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
				}
			});
		}
	}
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			launch($related[index]);
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			launch($related[index]);
		}
	};

	// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix);
			
			$overlay.fadeTo(settings.fadeOut || 0, 0);
			
			$box.stop().fadeTo(settings.fadeOut || 0, 0, function () {
			
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.empty().remove(); // Using empty first may prevent some IE7 issues.
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes Colorbox made to the document, but does not remove the plugin.
	publicMethod.remove = function () {
		if (!$box) { return; }

		$box.stop();
		$.colorbox.close();
		$box.stop().remove();
		$overlay.remove();
		closing = false;
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement);

		$(document).unbind('click.'+prefix);
	};

	// A method for fetching the current element Colorbox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, window));
/*
* MultiSelect v0.9.12
* Copyright (c) 2012 Louis Cuny
*
* This program is free software. It comes without any warranty, to
* the extent permitted by applicable law. You can redistribute it
* and/or modify it under the terms of the Do What The Fuck You Want
* To Public License, Version 2, as published by Sam Hocevar. See
* http://sam.zoy.org/wtfpl/COPYING for more details.
*/


!function ($) {

  "use strict";


 /* MULTISELECT CLASS DEFINITION
  * ====================== */

  var MultiSelect = function (element, options) {
    this.options = options;
    this.$element = $(element);
    this.$container = $('<div/>', { 'class': "ms-container" });
    this.$selectableContainer = $('<div/>', { 'class': 'ms-selectable' });
    this.$selectionContainer = $('<div/>', { 'class': 'ms-selection' });
    this.$selectableUl = $('<ul/>', { 'class': "ms-list", 'tabindex' : '-1' });
    this.$selectionUl = $('<ul/>', { 'class': "ms-list", 'tabindex' : '-1' });
    this.scrollTo = 0;
    this.elemsSelector = 'li:visible:not(.ms-optgroup-label,.ms-optgroup-container,.'+options.disabledClass+')';
  };

  MultiSelect.prototype = {
    constructor: MultiSelect,

    init: function(){
      var that = this,
          ms = this.$element;

      if (ms.next('.ms-container').length === 0){
        ms.css({ position: 'absolute', left: '-9999px' });
        ms.attr('id', ms.attr('id') ? ms.attr('id') : Math.ceil(Math.random()*1000)+'multiselect');
        this.$container.attr('id', 'ms-'+ms.attr('id'));
        this.$container.addClass(that.options.cssClass);
        ms.find('option').each(function(){
          that.generateLisFromOption(this);
        });

        this.$selectionUl.find('.ms-optgroup-label').hide();

        if (that.options.selectableHeader){
          that.$selectableContainer.append(that.options.selectableHeader);
        }
        that.$selectableContainer.append(that.$selectableUl);
        if (that.options.selectableFooter){
          that.$selectableContainer.append(that.options.selectableFooter);
        }

        if (that.options.selectionHeader){
          that.$selectionContainer.append(that.options.selectionHeader);
        }
        that.$selectionContainer.append(that.$selectionUl);
        if (that.options.selectionFooter){
          that.$selectionContainer.append(that.options.selectionFooter);
        }

        that.$container.append(that.$selectableContainer);
        that.$container.append(that.$selectionContainer);
        ms.after(that.$container);

        that.activeMouse(that.$selectableUl);
        that.activeKeyboard(that.$selectableUl);

        var action = that.options.dblClick ? 'dblclick' : 'click';

        that.$selectableUl.on(action, '.ms-elem-selectable', function(){
          that.select($(this).data('ms-value'));
        });
        that.$selectionUl.on(action, '.ms-elem-selection', function(){
          that.deselect($(this).data('ms-value'));
        });

        that.activeMouse(that.$selectionUl);
        that.activeKeyboard(that.$selectionUl);

        ms.on('focus', function(){
          that.$selectableUl.focus();
        });
      }

      var selectedValues = ms.find('option:selected').map(function(){ return $(this).val(); }).get();
      that.select(selectedValues, 'init');

      if (typeof that.options.afterInit === 'function') {
        that.options.afterInit.call(this, this.$container);
      }
    },

    'generateLisFromOption' : function(option, index, $container){
      var that = this,
          ms = that.$element,
          attributes = "",
          $option = $(option);

      for (var cpt = 0; cpt < option.attributes.length; cpt++){
        var attr = option.attributes[cpt];

        if(attr.name !== 'value' && attr.name !== 'disabled'){
          attributes += attr.name+'="'+attr.value+'" ';
        }
      }
      var selectableLi = $('<li '+attributes+'><span>'+that.escapeHTML($option.text())+'</span></li>'),
          selectedLi = selectableLi.clone(),
          value = $option.val(),
          elementId = that.sanitize(value);

      selectableLi
        .data('ms-value', value)
        .addClass('ms-elem-selectable')
        .attr('id', elementId+'-selectable');

      selectedLi
        .data('ms-value', value)
        .addClass('ms-elem-selection')
        .attr('id', elementId+'-selection')
        .hide();

      if ($option.prop('disabled') || ms.prop('disabled')){
        selectedLi.addClass(that.options.disabledClass);
        selectableLi.addClass(that.options.disabledClass);
      }

      var $optgroup = $option.parent('optgroup');

      if ($optgroup.length > 0){
        var optgroupLabel = $optgroup.attr('label'),
            optgroupId = that.sanitize(optgroupLabel),
            $selectableOptgroup = that.$selectableUl.find('#optgroup-selectable-'+optgroupId),
            $selectionOptgroup = that.$selectionUl.find('#optgroup-selection-'+optgroupId);

        if ($selectableOptgroup.length === 0){
          var optgroupContainerTpl = '<li class="ms-optgroup-container"></li>',
              optgroupTpl = '<ul class="ms-optgroup"><li class="ms-optgroup-label"><span>'+optgroupLabel+'</span></li></ul>';

          $selectableOptgroup = $(optgroupContainerTpl);
          $selectionOptgroup = $(optgroupContainerTpl);
          $selectableOptgroup.attr('id', 'optgroup-selectable-'+optgroupId);
          $selectionOptgroup.attr('id', 'optgroup-selection-'+optgroupId);
          $selectableOptgroup.append($(optgroupTpl));
          $selectionOptgroup.append($(optgroupTpl));
          if (that.options.selectableOptgroup){
            $selectableOptgroup.find('.ms-optgroup-label').on('click', function(){
              var values = $optgroup.children(':not(:selected, :disabled)').map(function(){ return $(this).val();}).get();
              that.select(values);
            });
            $selectionOptgroup.find('.ms-optgroup-label').on('click', function(){
              var values = $optgroup.children(':selected:not(:disabled)').map(function(){ return $(this).val();}).get();
              that.deselect(values);
            });
          }
          that.$selectableUl.append($selectableOptgroup);
          that.$selectionUl.append($selectionOptgroup);
        }
        index = index === undefined ? $selectableOptgroup.find('ul').children().length : index + 1;
        selectableLi.insertAt(index, $selectableOptgroup.children());
        selectedLi.insertAt(index, $selectionOptgroup.children());
      } else {
        index = index === undefined ? that.$selectableUl.children().length : index;

        selectableLi.insertAt(index, that.$selectableUl);
        selectedLi.insertAt(index, that.$selectionUl);
      }
    },

    'addOption' : function(options){
      var that = this;

      if (options.value !== undefined && options.value !== null){
        options = [options];
      } 
      $.each(options, function(index, option){
        if (option.value !== undefined && option.value !== null &&
            that.$element.find("option[value='"+option.value+"']").length === 0){
          var $option = $('<option value="'+option.value+'">'+option.text+'</option>'),
              $container = option.nested === undefined ? that.$element : $("optgroup[label='"+option.nested+"']"),
              index = parseInt((typeof option.index === 'undefined' ? $container.children().length : option.index));

          if (option.optionClass) {
            $option.addClass(option.optionClass);
          }

          if (option.disabled) {
            $option.prop('disabled', true);
          }

          $option.insertAt(index, $container);
          that.generateLisFromOption($option.get(0), index, option.nested);
        }
      });
    },

    'escapeHTML' : function(text){
      return $("<div>").text(text).html();
    },

    'activeKeyboard' : function($list){
      var that = this;

      $list.on('focus', function(){
        $(this).addClass('ms-focus');
      })
      .on('blur', function(){
        $(this).removeClass('ms-focus');
      })
      .on('keydown', function(e){
        switch (e.which) {
          case 40:
          case 38:
            e.preventDefault();
            e.stopPropagation();
            that.moveHighlight($(this), (e.which === 38) ? -1 : 1);
            return;
          case 37:
          case 39:
            e.preventDefault();
            e.stopPropagation();
            that.switchList($list);
            return;
          case 9:
            if(that.$element.is('[tabindex]')){
              e.preventDefault();
              var tabindex = parseInt(that.$element.attr('tabindex'), 10);
              tabindex = (e.shiftKey) ? tabindex-1 : tabindex+1;
              $('[tabindex="'+(tabindex)+'"]').focus();
              return;
            }else{
              if(e.shiftKey){
                that.$element.trigger('focus');
              }
            }
        }
        if($.inArray(e.which, that.options.keySelect) > -1){
          e.preventDefault();
          e.stopPropagation();
          that.selectHighlighted($list);
          return;
        }
      });
    },

    'moveHighlight': function($list, direction){
      var $elems = $list.find(this.elemsSelector),
          $currElem = $elems.filter('.ms-hover'),
          $nextElem = null,
          elemHeight = $elems.first().outerHeight(),
          containerHeight = $list.height(),
          containerSelector = '#'+this.$container.prop('id');

      $elems.removeClass('ms-hover');
      if (direction === 1){ // DOWN

        $nextElem = $currElem.nextAll(this.elemsSelector).first();
        if ($nextElem.length === 0){
          var $optgroupUl = $currElem.parent();

          if ($optgroupUl.hasClass('ms-optgroup')){
            var $optgroupLi = $optgroupUl.parent(),
                $nextOptgroupLi = $optgroupLi.next(':visible');

            if ($nextOptgroupLi.length > 0){
              $nextElem = $nextOptgroupLi.find(this.elemsSelector).first();
            } else {
              $nextElem = $elems.first();
            }
          } else {
            $nextElem = $elems.first();
          }
        }
      } else if (direction === -1){ // UP

        $nextElem = $currElem.prevAll(this.elemsSelector).first();
        if ($nextElem.length === 0){
          var $optgroupUl = $currElem.parent();

          if ($optgroupUl.hasClass('ms-optgroup')){
            var $optgroupLi = $optgroupUl.parent(),
                $prevOptgroupLi = $optgroupLi.prev(':visible');

            if ($prevOptgroupLi.length > 0){
              $nextElem = $prevOptgroupLi.find(this.elemsSelector).last();
            } else {
              $nextElem = $elems.last();
            }
          } else {
            $nextElem = $elems.last();
          }
        }
      }
      if ($nextElem.length > 0){
        $nextElem.addClass('ms-hover');
        var scrollTo = $list.scrollTop() + $nextElem.position().top - 
                       containerHeight / 2 + elemHeight / 2;

        $list.scrollTop(scrollTo);
      }
    },

    'selectHighlighted' : function($list){
      var $elems = $list.find(this.elemsSelector),
          $highlightedElem = $elems.filter('.ms-hover').first();

      if ($highlightedElem.length > 0){
        if ($list.parent().hasClass('ms-selectable')){
          this.select($highlightedElem.data('ms-value'));
        } else {
          this.deselect($highlightedElem.data('ms-value'));
        }
        $elems.removeClass('ms-hover');
      }
    },

    'switchList' : function($list){
      $list.blur();
      this.$container.find(this.elemsSelector).removeClass('ms-hover');
      if ($list.parent().hasClass('ms-selectable')){
        this.$selectionUl.focus();
      } else {
        this.$selectableUl.focus();
      }
    },

    'activeMouse' : function($list){
      var that = this;

      this.$container.on('mouseenter', that.elemsSelector, function(){
        $(this).parents('.ms-container').find(that.elemsSelector).removeClass('ms-hover');
        $(this).addClass('ms-hover');
      });

      this.$container.on('mouseleave', that.elemsSelector, function () {
        $(this).parents('.ms-container').find(that.elemsSelector).removeClass('ms-hover');
      });
    },

    'refresh' : function() {
      this.destroy();
      this.$element.multiSelect(this.options);
    },

    'destroy' : function(){
      $("#ms-"+this.$element.attr("id")).remove();
      this.$element.off('focus');
      this.$element.css('position', '').css('left', '');
      this.$element.removeData('multiselect');
    },

    'select' : function(value, method){
      if (typeof value === 'string'){ value = [value]; }

      var that = this,
          ms = this.$element,
          msIds = $.map(value, function(val){ return(that.sanitize(val)); }),
          selectables = this.$selectableUl.find('#' + msIds.join('-selectable, #')+'-selectable').filter(':not(.'+that.options.disabledClass+')'),
          selections = this.$selectionUl.find('#' + msIds.join('-selection, #') + '-selection').filter(':not(.'+that.options.disabledClass+')'),
          options = ms.find('option:not(:disabled)').filter(function(){ return($.inArray(this.value, value) > -1); });

      if (method === 'init'){
        selectables = this.$selectableUl.find('#' + msIds.join('-selectable, #')+'-selectable'),
        selections = this.$selectionUl.find('#' + msIds.join('-selection, #') + '-selection');
      }

      if (selectables.length > 0){
        selectables.addClass('ms-selected').hide();
        selections.addClass('ms-selected').show();

        options.prop('selected', true);

        that.$container.find(that.elemsSelector).removeClass('ms-hover');

        var selectableOptgroups = that.$selectableUl.children('.ms-optgroup-container');
        if (selectableOptgroups.length > 0){
          selectableOptgroups.each(function(){
            var selectablesLi = $(this).find('.ms-elem-selectable');
            if (selectablesLi.length === selectablesLi.filter('.ms-selected').length){
              $(this).find('.ms-optgroup-label').hide();
            }
          });

          var selectionOptgroups = that.$selectionUl.children('.ms-optgroup-container');
          selectionOptgroups.each(function(){
            var selectionsLi = $(this).find('.ms-elem-selection');
            if (selectionsLi.filter('.ms-selected').length > 0){
              $(this).find('.ms-optgroup-label').show();
            }
          });
        } else {
          if (that.options.keepOrder && method !== 'init'){
            var selectionLiLast = that.$selectionUl.find('.ms-selected');
            if((selectionLiLast.length > 1) && (selectionLiLast.last().get(0) != selections.get(0))) {
              selections.insertAfter(selectionLiLast.last());
            }
          }
        }
        if (method !== 'init'){
          ms.trigger('change');
          if (typeof that.options.afterSelect === 'function') {
            that.options.afterSelect.call(this, value);
          }
        }
      }
    },

    'deselect' : function(value){
      if (typeof value === 'string'){ value = [value]; }

      var that = this,
          ms = this.$element,
          msIds = $.map(value, function(val){ return(that.sanitize(val)); }),
          selectables = this.$selectableUl.find('#' + msIds.join('-selectable, #')+'-selectable'),
          selections = this.$selectionUl.find('#' + msIds.join('-selection, #')+'-selection').filter('.ms-selected').filter(':not(.'+that.options.disabledClass+')'),
          options = ms.find('option').filter(function(){ return($.inArray(this.value, value) > -1); });

      if (selections.length > 0){
        selectables.removeClass('ms-selected').show();
        selections.removeClass('ms-selected').hide();
        options.prop('selected', false);

        that.$container.find(that.elemsSelector).removeClass('ms-hover');

        var selectableOptgroups = that.$selectableUl.children('.ms-optgroup-container');
        if (selectableOptgroups.length > 0){
          selectableOptgroups.each(function(){
            var selectablesLi = $(this).find('.ms-elem-selectable');
            if (selectablesLi.filter(':not(.ms-selected)').length > 0){
              $(this).find('.ms-optgroup-label').show();
            }
          });

          var selectionOptgroups = that.$selectionUl.children('.ms-optgroup-container');
          selectionOptgroups.each(function(){
            var selectionsLi = $(this).find('.ms-elem-selection');
            if (selectionsLi.filter('.ms-selected').length === 0){
              $(this).find('.ms-optgroup-label').hide();
            }
          });
        }
        ms.trigger('change');
        if (typeof that.options.afterDeselect === 'function') {
          that.options.afterDeselect.call(this, value);
        }
      }
    },

    'select_all' : function(){
      var ms = this.$element,
          values = ms.val();

      ms.find('option:not(":disabled")').prop('selected', true);
      this.$selectableUl.find('.ms-elem-selectable').filter(':not(.'+this.options.disabledClass+')').addClass('ms-selected').hide();
      this.$selectionUl.find('.ms-optgroup-label').show();
      this.$selectableUl.find('.ms-optgroup-label').hide();
      this.$selectionUl.find('.ms-elem-selection').filter(':not(.'+this.options.disabledClass+')').addClass('ms-selected').show();
      this.$selectionUl.focus();
      ms.trigger('change');
      if (typeof this.options.afterSelect === 'function') {
        var selectedValues = $.grep(ms.val(), function(item){
          return $.inArray(item, values) < 0;
        });
        this.options.afterSelect.call(this, selectedValues);
      }
    },

    'deselect_all' : function(){
      var ms = this.$element,
          values = ms.val();

      ms.find('option').prop('selected', false);
      this.$selectableUl.find('.ms-elem-selectable').removeClass('ms-selected').show();
      this.$selectionUl.find('.ms-optgroup-label').hide();
      this.$selectableUl.find('.ms-optgroup-label').show();
      this.$selectionUl.find('.ms-elem-selection').removeClass('ms-selected').hide();
      this.$selectableUl.focus();
      ms.trigger('change');
      if (typeof this.options.afterDeselect === 'function') {
        this.options.afterDeselect.call(this, values);
      }
    },

    sanitize: function(value){
      var hash = 0, i, character;
      if (value.length == 0) return hash;
      var ls = 0;
      for (i = 0, ls = value.length; i < ls; i++) {
        character  = value.charCodeAt(i);
        hash  = ((hash<<5)-hash)+character;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  };

  /* MULTISELECT PLUGIN DEFINITION
   * ======================= */

  $.fn.multiSelect = function () {
    var option = arguments[0],
        args = arguments;

    return this.each(function () {
      var $this = $(this),
          data = $this.data('multiselect'),
          options = $.extend({}, $.fn.multiSelect.defaults, $this.data(), typeof option === 'object' && option);

      if (!data){ $this.data('multiselect', (data = new MultiSelect(this, options))); }

      if (typeof option === 'string'){
        data[option](args[1]);
      } else {
        data.init();
      }
    });
  };

  $.fn.multiSelect.defaults = {
    keySelect: [32],
    selectableOptgroup: false,
    disabledClass : 'disabled',
    dblClick : false,
    keepOrder: false,
    cssClass: ''
  };

  $.fn.multiSelect.Constructor = MultiSelect;

  $.fn.insertAt = function(index, $parent) {
    return this.each(function() {
      if (index === 0) {
        $parent.prepend(this);
      } else {
        $parent.children().eq(index - 1).after(this);
      }
    });
};

}(window.jQuery);











jQuery(function($){
   $("#cpf").mask("999.999.999-99");
   $("#cep").mask("99999-999");
   $(".phone").mask("(99) 99999-9999)");
});


jQuery(document).ready(function() {

    if (jQuery.fn.cssOriginal != undefined)
        jQuery.fn.css = jQuery.fn.cssOriginal;

    jQuery('.fullwidthbanner').revolution({
        delay: 10000,
        startwidth: 890,
        startheight: 450,

        onHoverStop: "off", // Stop Banner Timet at Hover on Slide on/off

        thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
        thumbHeight: 50,
        thumbAmount: 3,

        hideThumbs: 200,
        navigationType: "none", //bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
        navigationArrows: "verticalcentered", //nexttobullets, verticalcentered, none
        navigationStyle: "square", //round,square,navbar

        touchenabled: "on", // Enable Swipe Function : on/off

        navOffsetHorizontal: 0,
        navOffsetVertical: 20,

        fullWidth: "on",

        shadow: 0, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

        stopLoop: "off" // on == Stop loop at the last Slie,  off== Loop all the time.

    });
});


$(document).ready(function() {
    
    // validate signup form on keyup and submit
    $("#formu").validate({
        rules: {
            "user[name]": "required",
            "user[general_register]": "required",
            "user[cpf]": "required",
            "user[birthday]": "required",
            celular: "required",
            "user[gender]": "required",
            instituicao: "required",
            link_facebook: "required",
            
            
            
            "user[email]": {
                required: true,
                email: true
            },
            confemail: {
                required: true,
                email: true,
                equalTo: "#email"
            },
            "user[password]": {
                required: true,
                minlength: 6
            },
            confsenha: {
                required: true,
                minlength: 6,
                equalTo: "#senha"
            },
            
            agree: "required"
        },
        messages: {
            "user[name]": "Campo Obrigatório",
            "user[general_register]": "Campo Obrigatório",
            "user[cpf]": "Campo Obrigatório",
            "user[birthday]": "Campo Obrigatório",
            celular: "Campo Obrigatório",
            "user[gender]": "Campo Obrigatório",
            instituicao: "Campo Obrigatório",
            link_facebook: "Campo Obrigatório",

            "user[email]": {
                required: "Campo Obrigatório",
                
            },
            confemail: {
                required: "Campo Obrigatório",
                equalTo: "Confirmação de email não confere."
            },
            
            
            "user[password]": {
                required: "Campo Obrigatório",
                minlength: "A senha deve conter no mínimo 6 dígitos"
            },
            confsenha: {
                required: "Campo Obrigatório",
                minlength: "A confirmação de senha deve conter no mínimo 6 dígitos",
                equalTo: "Confirmação de senha não confere."
            },
            agree: "Obrigatório aceitar o termo de uso do site!"
        }
    });

    // propose username by combining first- and lastname
    $("#username").focus(function() {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        if(firstname && lastname && !this.value) {
            this.value = firstname + "." + lastname;
        }
    });

    //code to hide topic selection, disable for demo
    var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
        topics[this.checked ? "removeClass" : "addClass"]("gray");
        topicInputs.attr("disabled", !this.checked);
    });
});


jQuery(function($){
   $("#cpf_dupla").mask("999.999.999-99");
   $("#cpf").mask("999.999.999-99");
   $("#cep").mask("99.999-999");
   $("#birthday").mask("99/99/9999");
   $("#phone").mask("(99) 99999-9999");
   $("#cel").mask("(99) 99999-9999");
});

 $(document).ready(function(){
        $(".ajax").colorbox();
        $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});


$('#cpf_dupla').blur(function(){
        
        $.ajax({
            url: "/comitee/cpf/cpf_find",
            type: "GET",
            data: { cpf:$('#cpf_dupla').val(), id:$('#id_evento').val() },
            dataType: "json",
            success: function(sucesso){
                if (sucesso.success===true){
                    var check = '<span style="color:#3c9332">'+ sucesso.name +'! </span>';
                    $('#result-nome').html(check);
                } else {
                    $('#result-nome').html(sucesso.msg);
                }
            },
            error: function(){
                $('#result-nome').html('Desculpe pelo transtorno, houve um erro, tente novamente.');
            },
            complete: function(){
                $('#result-nome').css({"display":"block"});
                $('#loading').css({"display":"none"});
                
            }
            
        });  
        
    });


});


  $('#categories_event').multiSelect({
  afterSelect: function(values){
    var count = $("#categories_event :selected").length;
    if (count > 5) {
        $("#categories_event").multiSelect('deselect', values);
        alert("Você só pode selecionar 5!")
    }
  }});
