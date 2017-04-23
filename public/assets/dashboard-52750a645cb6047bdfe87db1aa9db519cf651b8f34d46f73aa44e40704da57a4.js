window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */


if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */

(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.closest('.' + o.barClass);
            rail = me.closest('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */


;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.70; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock.bind(lyr3)();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				data.el.style.cursor = 'default'; // #59
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();


;(function(window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = {top: 0, left: 0},
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function(e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos         = offset(el);
            var relativeY   = (e.pageY - pos.top);
            var relativeX   = (e.pageX - pos.left);
            var scale       = 'scale('+((el.clientWidth / 100) * 10)+')';

            // Support for touch devices
            if ('touches' in e) {
              relativeY   = (e.touches[0].pageY - pos.top);
              relativeX   = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY+'px',
                'left': relativeX+'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity   = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration']    = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration']      = Effect.duration + 'ms';
            rippleStyle['transition-duration']         = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function']    = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function']      = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function']         = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function(e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX   = ripple.getAttribute('data-x');
            var relativeY   = ripple.getAttribute('data-y');
            var scale       = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function() {
                var style = {
                    'top': relativeY+'px',
                    'left': relativeX+'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function() {
                    try {
                        el.removeChild(ripple);
                    } catch(e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /* uses an integer rather than bool so there's no issues with
         * needing to clear timeouts if another touch event occurred
         * within the 500ms. Cannot mouseup between touchstart and
         * touchend, nor in the 500ms after touchend. */
        touches: 0,
        allowEvent: function(e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; //push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function() {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; //pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function(e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element.
     * returns null when .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function(options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        //Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't
     * bubble mouseup/mousedown events).
     *   Intended to be used with dynamically loaded forms/inputs, or
     * where the user doesn't want a delegated click handler.
     */
    Waves.attach = function(element) {
        //FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.displayEffect();
    }, false);

})(window);

/*
Tabs
*/
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));

  var methods = {
    init : function() {
      return this.each(function() {

      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $this = $(this),
          window_width = $(window).width();

      $this.width('100%');
      // Set Tab Width for each tab
      var $num_tabs = $(this).children('li').length;
      $this.children('li').each(function() {
        $(this).width((100/$num_tabs)+'%');
      });
      var $active, $content, $links = $this.find('li.tab a'),
          $tabs_width = $this.width(),
          $tab_width = $this.find('li').first().outerWidth(),
          $index = 0;

      // If the location.hash matches one of the links, use that as the active tab.
      $active = $($links.filter('[href="'+location.hash+'"]'));

      // If no match is found, use the first link or any with class 'active' as the initial active tab.
      if ($active.length === 0) {
          $active = $(this).find('li.tab a.active').first();
      }
      if ($active.length === 0) {
        $active = $(this).find('li.tab a').first();
      }

      $active.addClass('active');
      $index = $links.index($active);
      if ($index < 0) {
        $index = 0;
      }

      $content = $($active[0].hash);

      // append indicator then set indicator width to tab width
      $this.append('<div class="indicator"></div>');
      var $indicator = $this.find('.indicator');
      if ($this.is(":visible")) {
        $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
        $indicator.css({"left": $index * $tab_width});
      }
      $(window).resize(function () {
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();
        if ($index < 0) {
          $index = 0;
        }
        if ($tab_width !== 0 && $tabs_width !== 0) {
          $indicator.css({"right": $tabs_width - (($index + 1) * $tab_width)});
          $indicator.css({"left": $index * $tab_width});
        }
      });

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });


      // Bind the click event handler
      $this.on('click', 'a', function(e){
        $tabs_width = $this.width();
        $tab_width = $this.find('li').first().outerWidth();

        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);
        $links = $this.find('li.tab a');

        // Make the tab active.
        $active.addClass('active');
        var $prev_index = $index;
        $index = $links.index($(this));
        if ($index < 0) {
          $index = 0;
        }
        // Change url to current tab
        // window.location.hash = $active.attr('href');

        $content.show();

        // Update indicator
        if (($index - $prev_index) >= 0) {
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"left": $index * $tab_width}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});

        }
        else {
          $indicator.velocity({"left": $index * $tab_width}, { duration: 300, queue: false, easing: 'easeOutQuad'});
          $indicator.velocity({"right": $tabs_width - (($index + 1) * $tab_width)}, {duration: 300, queue: false, easing: 'easeOutQuad', delay: 90});
        }

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    },
    select_tab : function( id ) {
      this.find('a[href="#' + id + '"]').trigger('click');
    }
  };

  $.fn.tabs = function(methodOrOptions) {
    if ( methods[methodOrOptions] ) {
      return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      // Default to "init"
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
    }
  };

  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
/* jquery.nicescroll 3.5.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */
(function(e){var z=!1,E=!1,L=5E3,M=2E3,y=0,N=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}(),H=["ms","moz","webkit","o"],v=window.requestAnimationFrame||!1,w=window.cancelAnimationFrame||!1;if(!v)for(var O in H){var F=H[O];v||(v=window[F+"RequestAnimationFrame"]);w||(w=window[F+"CancelAnimationFrame"]||window[F+"CancelRequestAnimationFrame"])}var A=window.MutationObserver||window.WebKitMutationObserver||
    !1,I={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,
    horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1,oneaxismousemode:"auto"},G=!1,P=function(){if(G)return G;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||
    "mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in document)||7==document.documentMode);c.isie8=c.isie&&"documentMode"in document&&8==document.documentMode;c.isie9=
    c.isie&&"performance"in window&&9<=document.documentMode;c.isie10=c.isie&&"performance"in window&&10<=document.documentMode;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);c.isie9mobile&&(c.isie9=!1);c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;c.ischrome22=c.ischrome&&c.haspointerlock;c.ischrome26=c.ischrome&&"transition"in e.style;c.cantouch="ontouchstart"in
    document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||!1;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=!1;c.hastransform=!1;c.hastranslate3d=!1;c.transitionstyle=!1;c.hastransition=!1;c.transitionend=!1;for(var k=["transform","msTransform","webkitTransform","MozTransform","OTransform"],l=0;l<k.length;l++)if("undefined"!=
    typeof e.style[k[l]]){c.trstyle=k[l];break}c.hastransform=!1!=c.trstyle;c.hastransform&&(e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]));c.transitionstyle=!1;c.prefixstyle="";c.transitionend=!1;for(var k="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),q=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),t="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
                                                                                                                                                                                                                                                                     l=0;l<k.length;l++)if(k[l]in e.style){c.transitionstyle=k[l];c.prefixstyle=q[l];c.transitionend=t[l];break}c.ischrome26&&(c.prefixstyle=q[1]);c.hastransition=c.transitionstyle;a:{k=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)k=[];for(l=0;l<k.length;l++)if(q=k[l],e.style.cursor=q,e.style.cursor==q){k=q;break a}k="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=k;c.hasmousecapture="setCapture"in e;c.hasMutationObserver=!1!==A;return G=
    c},Q=function(h,c){function k(){var d=b.win;if("zIndex"in d)return d.zIndex();for(;0<d.length&&9!=d[0].nodeType;){var c=d.css("zIndex");if(!isNaN(c)&&0!=c)return parseInt(c);d=d.parent()}return!1}function l(d,c,f){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=u[c]||0,f=3==d?f?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),f?d:0):d}function q(d,c,f,g){b._bind(d,c,function(b){b=b?b:window.event;var g={original:b,target:b.target||b.srcElement,type:"wheel",
    deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==c?(g.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(g.deltaX=-0.025*b.wheelDeltaX)):g.deltaY=b.detail;return f.call(d,g)},g)}function t(d,c,f){var g,e;0==d.deltaMode?(g=-Math.floor(d.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(d.deltaY*
    (b.opt.mousescrollstep/54))):1==d.deltaMode&&(g=-Math.floor(d.deltaX*b.opt.mousescrollstep),e=-Math.floor(d.deltaY*b.opt.mousescrollstep));c&&(b.opt.oneaxismousemode&&0==g&&e)&&(g=e,e=0);g&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=g,b.debounced("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)},120));if(e){if(b.opt.nativeparentscrolling&&f&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;
    b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=e;b.debounced("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)},120)}d.stopImmediatePropagation();return d.preventDefault()}var b=this;this.version="3.5.0";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,I);this.opt.snapbackspeed=80;if(h)for(var p in b.opt)"undefined"!=typeof h[p]&&(b.opt[p]=h[p]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?
    b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=
    this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+M++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=
    this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=P();var g=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=g.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=!1;g.cantouch&&(g.ischrome&&!g.isios&&!g.isandroid)&&
(this.istouchcapable=!0,g.cantouch=!1);g.cantouch&&(g.ismozilla&&!g.isios&&!g.isandroid)&&(this.istouchcapable=!0,g.cantouch=!1);b.opt.enablemouselockapi||(g.hasmousecapture=!1,g.haspointerlock=!1);this.delayed=function(d,c,f,g){var e=b.delaylist[d],k=(new Date).getTime();if(!g&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+f>k&&!e.tt)b.delaylist[d]={last:k+f,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},f)};else if(!e||!e.tt)b.delaylist[d]={last:k,tt:0},setTimeout(function(){c.call()},
    0)};this.debounced=function(d,c,f){var g=b.delaylist[d];(new Date).getTime();b.delaylist[d]=c;g||setTimeout(function(){var c=b.delaylist[d];b.delaylist[d]=!1;c.call()},f)};this.synched=function(d,c){b.synclist[d]=c;(function(){b.onsync||(v(function(){b.onsync=!1;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=!1}}),b.onsync=!0)})();return d};this.unsynched=function(d){b.synclist[d]&&(b.synclist[d]=!1)};this.css=function(d,c){for(var f in c)b.saved.css.push([d,f,d.css(f)]),d.css(f,
    c[f])};this.scrollTop=function(d){return"undefined"==typeof d?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return"undefined"==typeof d?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,f,g,e,k,l){this.st=b;this.ed=c;this.spd=f;this.p1=g||0;this.p2=e||1;this.p3=k||0;this.p4=l||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},
    getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};g.hastranslate3d&&g.isios&&this.doc.css("-webkit-backface-visibility","hidden");var s=function(){var d=b.doc.css(g.trstyle);return d&&"matrix"==d.substr(0,
    6)?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(d){if(!d){if(d=s())return 16==d.length?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=s())return 16==d.length?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");
    c.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(c)}:document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=!0}:function(b,c){};g.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(g.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*
    d+"px";b.doc.css(g.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(g.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(g.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
    function(){return b.docscroll.scrollTop()},this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,c){if(!b)return!1;for(var f=b.target||b.srcElement||b||!1;f&&f.id!=c;)f=f.parentNode||!1;return!1!==f};var u={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
    left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),f=c.top,g=c.left,f=f+l(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var g=g+(b.rail.align?b.win.outerWidth()-
    l(b.win,"border-right-width")-b.rail.width:l(b.win,"border-left-width")),e=b.opt.railoffset;e&&(e.top&&(f+=e.top),b.rail.align&&e.left&&(g+=e.left));b.locked||b.rail.css({top:f,left:g,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:f+1,left:1==b.rail.align?g-20:g+b.rail.width+4});b.railh&&!b.locked&&(f=c.top,g=c.left,d=b.railh.align?f+l(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:f+l(b.win,"border-top-width",!0),g+=l(b.win,"border-left-width"),b.railh.css({top:d,left:g,
    width:b.railh.width}))}};this.doRailClick=function(d,c,f){var g;b.locked||(b.cancelEvent(d),c?(c=f?b.doScrollLeft:b.doScrollTop,g=f?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(g)):(c=f?b.doScrollLeftBy:b.doScrollBy,g=f?b.scroll.x:b.scroll.y,d=f?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,f=f?b.view.w:b.view.h,g>=d?c(f):c(-f)))};b.hasanimationframe=v;b.hascancelanimationframe=w;b.hasanimationframe?b.hascancelanimationframe||
    (w=function(){b.cancelAnimationFrame=!0}):(v=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},w=clearInterval);this.init=function(){b.saved.css=[];if(g.isie7mobile||g.isoperamini)return!0;g.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?k()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>y&&(y=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!g.cantouch&&
    !g.isieold&&!g.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);g.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&g.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));g.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px",
    "background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var f=e(document.createElement("div"));f.attr("id",b.id);f.addClass("nicescroll-rails");var l,h,x=["left","right"],q;for(q in x)h=x[q],(l=b.opt.railpadding[h])?f.css("padding-"+h,l+"px"):b.opt.railpadding[h]=
    0;f.append(c);f.width=Math.max(parseFloat(b.opt.cursorwidth),c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;f.css({width:f.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});f.visibility=!0;f.scrollable=!0;f.align="left"==b.opt.railalign?0:1;b.rail=f;c=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!g.isieold)&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+N+"zoomico.png)",
    height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),g.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(d){1.5<d.scale&&b.doZoomIn(d);0.8>d.scale&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,
    border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var m=e(document.createElement("div"));m.attr("id",b.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());m.css({height:m.height+"px",zIndex:b.zindex,background:b.opt.background});m.append(c);
    m.visibility=!0;m.scrollable=!0;m.align="top"==b.opt.railvalign?0:1;b.railh=m;b.railh.drag=!1}b.ispage?(f.css({position:"fixed",top:"0px",height:"100%"}),f.align?f.css({right:"0px"}):f.css({left:"0px"}),b.body.append(f),b.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),b.body.append(m))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),d="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",
    top:1,right:0,"margin-right":f.width+4}),d.append(b.zoom)),f.css({position:"absolute",top:0}),f.align?f.css({right:0}):f.css({left:0}),d.append(f),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),d.append(m))):(b.isfixed="fixed"==b.win.css("position"),d=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/fixed|relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),
    f.css({position:d}),b.zoom&&b.zoom.css({position:d}),b.updateScrollBar(),b.body.append(f),b.zoom&&b.body.append(b.zoom),b.railh&&(m.css({position:d}),b.body.append(m))),g.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),g.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),g.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):
    !0===b.opt.autohidemode||"leave"===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),g.isie8&&(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&g.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&
        (b.autohidedom=!1,b.hide(),b.locked=!1);if(g.isie9mobile)b.scrollmom=new J(b),b.onmangotouch=function(d){d=b.getScrollTop();var c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&c==b.scrollmom.lastscrollx)return!0;var f=d-b.mangotouch.sy,g=c-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(g,2)+Math.pow(f,2)))){var n=0>f?-1:1,e=0>g?-1:1,k=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<k-b.mangotouch.tm||b.mangotouch.dry!=n||b.mangotouch.drx!=e?(b.scrollmom.stop(),b.scrollmom.reset(c,
    d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=n,b.mangotouch.drx=e,b.mangotouch.tm=k):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-g,b.mangotouch.sy-f),b.mangotouch.tm=k,f=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,2<f&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},f=b.getScrollTop(),
    m=b.getScrollLeft(),b.mangotouch={sy:f,ly:f,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,"scroll",b.onmangotouch);else{if(g.cantouch||b.istouchcapable||b.opt.touchbehavior||g.hasmstouch){b.scrollmom=new J(b);b.ontouchstart=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(!b.locked){if(g.hasmstouch)for(var c=d.target?d.target:!1;c;){var f=e(c).getNiceScroll();if(0<f.length&&f[0].me==b.me)break;if(0<f.length)return!1;if("DIV"==c.nodeName&&c.id==b.id)break;c=c.parentNode?c.parentNode:
    !1}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);!("clientX"in d)&&"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);b.forcescreen&&(f=d,d={original:d.original?d.original:d},d.clientX=f.screenX,d.clientY=f.screenY);b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl=
    "f";else{var f=e(window).width(),n=e(window).height(),k=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),n=Math.max(0,l-n),f=Math.max(0,k-f);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<n?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<f?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&g.isie)&&(f=b.win.position(),b.rail.drag.x+=f.left,b.rail.drag.y+=f.top);
    b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(d.clientX,d.clientY);if(!g.cantouch&&!this.istouchcapable&&!g.hasmstouch){if(!c||!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&g.hasmousecapture&&c.setCapture(),b.opt.touchbehavior?b.cancelEvent(d):b.stopPropagation(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},b.preventclick=pc)}}};b.ontouchend=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),
    b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),g.hasmousecapture&&document.releaseCapture(),!g.cantouch)))return b.cancelEvent(d)};var t=b.opt.touchbehavior&&b.isiframe&&!g.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(g.cantouch&&"undefined"==typeof d.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=
    b.onpreventclick);d=e.extend({original:d},d);"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);if(b.forcescreen){var f=d;d={original:d.original?d.original:d};d.clientX=f.screenX;d.clientY=f.screenY}f=ofy=0;if(t&&!c){var n=b.win.position(),f=-n.left;ofy=-n.top}var k=d.clientY+ofy,n=k-b.rail.drag.y,l=d.clientX+f,h=l-b.rail.drag.x,r=b.rail.drag.st-n;b.ishwscroll&&b.opt.bouncescroll?0>r?r=Math.round(r/2):r>b.page.maxh&&(r=b.page.maxh+Math.round((r-b.page.maxh)/
    2)):(0>r&&(k=r=0),r>b.page.maxh&&(r=b.page.maxh,k=0));if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-h;b.ishwscroll&&b.opt.bouncescroll?0>m?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+Math.round((m-b.page.maxw)/2)):(0>m&&(l=m=0),m>b.page.maxw&&(m=b.page.maxw,l=0))}f=!1;if(b.rail.drag.dl)f=!0,"v"==b.rail.drag.dl?m=b.rail.drag.sl:"h"==b.rail.drag.dl&&(r=b.rail.drag.st);else{var n=Math.abs(n),h=Math.abs(h),x=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(n>x&&h<=0.3*n)return b.rail.drag=
    !1,!0;h>x&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(h>x&&n<=0.3*h)return b.rail.drag=!1,!0;n>x&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(r),b.scrollmom.update(l,k),b.railh&&b.railh.scrollable?(b.setScrollLeft(m),b.showCursor(r,m)):b.showCursor(r),g.isie10&&document.selection.clear())});
    g.ischrome&&b.istouchcapable&&(f=!1);if(f)return b.cancelEvent(d)}}}b.onmousedown=function(d,c){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,pt:1,hr:!!c};var f=b.getTarget(d);!b.ispage&&g.hasmousecapture&&f.setCapture();b.isiframe&&!g.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(d)}};b.onmouseup=function(d){if(b.rail.drag&&
    (g.hasmousecapture&&document.releaseCapture(),b.isiframe&&!g.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(d)};b.onmousemove=function(d){if(b.rail.drag&&1==b.rail.drag.pt){if(g.ischrome&&0==d.which)return b.onmouseup(d);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var c=b.scrollvaluemaxw;b.scroll.x>c&&(b.scroll.x=c)}else b.scroll.y=b.rail.drag.sy+
    (d.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),c=b.scrollvaluemax,b.scroll.y>c&&(b.scroll.y=c);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(d)}};if(g.cantouch||b.opt.touchbehavior)b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,
    b.preventclick=!1,b.cancelEvent(d)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=g.isios?!1:function(d){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(d)):!0},b.opt.grabcursorenabled&&g.cursorgrabvalue&&(b.css(b.ispage?b.doc:b.win,{cursor:g.cursorgrabvalue}),b.css(b.rail,{cursor:g.cursorgrabvalue}));else{var p=function(d){if(b.selectiondrag){if(d){var c=b.win.outerHeight();d=d.pageY-b.selectiondrag.top;0<d&&d<c&&(d=0);d>=c&&(d-=c);b.selectiondrag.df=d}0!=b.selectiondrag.df&&(b.doScrollBy(2*
    -Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){p()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};b.onselectionstart=function(d){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(d){b.selectiondrag=!1};b.onselectiondrag=function(d){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",
    function(){p(d)},250)}}g.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,
    "touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.bind(b.cursorh,"mouseup",function(d){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),g.hasmousecapture&&document.releaseCapture(),b.cancelEvent(d)}));if(b.opt.cursordragontouch||!g.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),
    b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.rail,"click",function(d){b.doRailClick(d,!1,!1)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,!0,!1)}),b.bind(b.cursor,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,
    "mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,!1,!0)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,!0,!0)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,"dblclick",function(d){b.cancelEvent(d)})));!g.cantouch&&!b.opt.touchbehavior?(b.bind(g.hasmousecapture?b.win:document,
    "mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),
    b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(g.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&
(b.isiframe||b.bind(g.isie&&b.ispage?document:b.win,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!g.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:L++}),b.jqbind(b.win,"focus",function(d){z=b.getTarget(d).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(d){z=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(d){E=
    b.getTarget(d).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){E=!1;b.hasmousefocus=!1;b.rail.drag||b.hideCursor()}))}b.onkeypress=function(d){if(b.locked&&0==b.page.maxh)return!0;d=d?d:window.e;var c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!z||b.ispage&&!z&&!E){c=d.keyCode;if(b.locked&&27!=c)return b.cancelEvent(d);
    var f=d.ctrlKey||!1,n=d.shiftKey||!1,g=!1;switch(c){case 38:case 63233:b.doScrollBy(72);g=!0;break;case 40:case 63235:b.doScrollBy(-72);g=!0;break;case 37:case 63232:b.railh&&(f?b.doScrollLeft(0):b.doScrollLeftBy(72),g=!0);break;case 39:case 63234:b.railh&&(f?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),g=!0);break;case 33:case 63276:b.doScrollBy(b.view.h);g=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);g=!0;break;case 36:case 63273:b.railh&&f?b.doScrollPos(0,0):b.doScrollTo(0);g=!0;break;
        case 35:case 63275:b.railh&&f?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);g=!0;break;case 32:b.opt.spacebarenabled&&(n?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),g=!0);break;case 27:b.zoomactive&&(b.doZoom(),g=!0)}if(g)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,g.isopera&&!g.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(g.ischrome&&
    !b.ispage&&!b.haswrapper){var s=b.win.attr("style"),f=parseFloat(b.win.css("width"))+1;b.win.css("width",f);b.synched("chromefix",function(){b.win.attr("style",s)})}b.onAttributeChange=function(d){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==A?(b.observer=new A(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new A(function(d){d.forEach(function(d){if(0<d.removedNodes.length)for(var c in d.removedNodes)if(d.removedNodes[c]==
    b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,g.isie&&!g.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),g.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",function(d){d.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;
    b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var K=function(d){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(f){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),
    h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));!g.isios&&(b.opt.iframeautoresize&&!b.isiframe)&&(b.win.scrollTop(0),b.doc.height(""),d=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight),b.doc.height(d));b.lazyResize(30);g.isie7&&b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});g.isios&&b.haswrapper&&b.css(e(c.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in
    this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,g.isopera?"keypress":"keydown",b.onkeypress);if(g.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.ontouchstart),b.bind(c,"mousemove",function(d){b.ontouchmove(d,!0)}),b.opt.grabcursorenabled&&g.cursorgrabvalue&&b.css(e(c.body),{cursor:g.cursorgrabvalue});b.bind(c,"mouseup",b.ontouchend);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,
    "dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){K.call(b.doc[0],!1)},500);b.bind(this.doc,"load",K)}};this.showCursor=function(d,c){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof d&&!1!==d&&(b.scroll.y=Math.round(1*
    d/b.scrollratio.y)),"undefined"!=typeof c&&(b.scroll.x=Math.round(1*c/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(d){!b.cursortimeout&&(b.rail&&b.autohidedom&&!(b.hasmousefocus&&"leave"==b.opt.autohidemode))&&
(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},d||b.opt.hidecursordelay))};this.noticeCursor=function(d,c,f){b.showCursor(c,f);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,
    document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&b.hideRail().hideRailHr(),!1;!b.hidden&&
    !b.visibility&&b.showRail().showRailHr()}var f=b.page.maxh,g=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==f&&b.page.maxw==g&&b.view.w==e){if(b.ispage)return b;f=b.win.offset();if(b.lastposition&&(g=b.lastposition,g.top==f.top&&g.left==f.left))return b;b.lastposition=f}0==
    b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():!b.hidden&&!b.railh.visibility&&b.showRailHr();
    b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;
    b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),b.scroll.x=Math.round(b.getScrollLeft()*
        (1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(d){d=isNaN(d)?30:d;b.delayed("resize",b.resize,d);return b};this._bind=function(d,c,f,g){b.events.push({e:d,n:c,f:f,b:g,q:!1});d.addEventListener?d.addEventListener(c,f,g||!1):d.attachEvent?d.attachEvent("on"+c,f):d["on"+c]=f};this.jqbind=function(d,c,f){b.events.push({e:d,n:c,f:f,q:!0});e(d).bind(c,f)};
    this.bind=function(d,c,f,e){var k="jquery"in d?d[0]:d;"mousewheel"==c?"onwheel"in b.win?b._bind(k,"wheel",f,e||!1):(d="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",q(k,d,f,e||!1),"DOMMouseScroll"==d&&q(k,"MozMousePixelScroll",f,e||!1)):k.addEventListener?(g.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(k,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var d=b.touches.length?b.touches[0]:b;d.original=
        b;f.call(this,d)}}else b.changedTouches&&(d=b.changedTouches[0],d.original=b,f.call(this,d))},e||!1),b._bind(k,c,f,e||!1),g.cantouch&&"mouseup"==c&&b._bind(k,"touchcancel",f,e||!1)):b._bind(k,c,function(d){if((d=d||window.event||!1)&&d.srcElement)d.target=d.srcElement;"pageY"in d||(d.pageX=d.clientX+document.documentElement.scrollLeft,d.pageY=d.clientY+document.documentElement.scrollTop);return!1===f.call(k,d)||!1===e?b.cancelEvent(d):!0})};this._unbind=function(b,c,f,g){b.removeEventListener?b.removeEventListener(c,
        f,g):b.detachEvent?b.detachEvent("on"+c,f):b["on"+c]=!1};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=function(b){b=b.original?
        b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=function(){b.visibility=
        !1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();b.unbindAll();g.isie9&&
    b.win[0].detachEvent("onpropertychange",b.onAttributeChange);!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=null;b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}b.saved=!1;b.me.data("__nicescroll","");var f=e.nicescroll;f.each(function(d){if(this&&this.id===
        b.id){delete f[d];for(var c=++d;c<f.length;c++,d++)f[d]=f[c];f.length--;f.length&&delete f[f.length]}});for(var k in b)b[k]=null,delete b[k];b=null};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;
        for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(c))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b);if(/fixed|absolute/.test(c.css("position")))return c;var f=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(f)&&
        b.clientHeight!=b.scrollHeight||0<c.getNiceScroll().length)return c;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(d){if(b.locked)return b.debounced("checkunlock",b.resize,250),!0;if(b.rail.drag)return b.cancelEvent(d);"auto"==b.opt.oneaxismousemode&&0!=d.deltaX&&(b.opt.oneaxismousemode=!1);if(b.opt.oneaxismousemode&&0==d.deltaX&&!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):!0;var c=+new Date,f=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&
    (b.nativescrollingarea=b.isScrollable(d),f=!0);b.checkarea=c;if(b.nativescrollingarea)return!0;if(d=t(d,!1,f))b.checkarea=0;return d};this.onmousewheelhr=function(d){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(d);var c=+new Date,f=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),f=!0);b.checkarea=c;return b.nativescrollingarea?!0:b.locked?b.cancelEvent(d):t(d,!0,f)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();
        b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(d){var c=Math.round(10*b.opt.scrollspeed);d=Math.min(c,Math.round(d/20*b.opt.scrollspeed));return 20<d?d:0};b.opt.smoothscroll?b.ishwscroll&&g.hastransition&&b.opt.usetransition?(this.prepareTransition=function(d,c){var f=c?20<d?d:0:b.getTransitionSpeed(d),e=f?g.prefixstyle+"transform "+f+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=e)b.lasttransitionstyle=
        e,b.doc.css(g.transitionstyle,e);return f},this.doScrollLeft=function(c,g){var f=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,g){var f=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(f,c,g)},this.doScrollPos=function(c,e,f){var k=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-k)*(e-k)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>e?e=0:e>b.page.maxh&&(e=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));
        if(b.scrollrunning&&c==b.newscrollx&&e==b.newscrolly)return!1;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=f||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var f=b.getScrollTop(),k=b.getScrollLeft(),l,h;l=c-k;h=e-f;l=Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(h,2)));l=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(l);b.newscrollspeed&&1>=b.newscrollspeed&&(l*=b.newscrollspeed);b.prepareTransition(l,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);
            0<l&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:k,y:f},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:l}),g.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,g.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,l)),b.timerscroll={bz:new BezierClass(f,b.newscrolly,l,0,0,0.58,1),bh:new BezierClass(k,b.newscrollx,l,0,0,0.58,1)},b.cursorfreezed||
                (b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=!1;g.transitionend||clearTimeout(g.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,g.transitionend,
        b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,g.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),e=b.getScrollLeft();b.setScrollTop(c);b.railh&&
    b.setScrollLeft(e);b.noticeCursor(!1,c,e);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>e?e=0:e>b.page.maxw&&(e=b.page.maxw);if(c!=b.newscrolly||e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=!1}):(this.doScrollLeft=function(c,g){var f=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          g){var f=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(f,c,g)},this.doScrollPos=function(c,g,f){function e(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(p=1-p)return b.timer=v(e)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,f=d-sy;if(0>f&&d<b.newscrolly||0<f&&d>b.newscrolly)d=b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var g=sx=b.getScrollLeft();if(b.dst.ax){g=b.bzscroll?b.dst.px+b.bzscroll.getNow()*
        b.dst.ax:b.newscrollx;f=g-sx;if(0>f&&g<b.newscrollx||0<f&&g>b.newscrollx)g=b.newscrollx;b.setScrollLeft(g);g==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>g?g=0:g>b.page.maxw&&(g=b.page.maxw),g!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(g,d):b.onscrollend&&b.onscrollend.call(b,{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=v(e)||1}g="undefined"==typeof g||!1===g?b.getScrollTop(!0):
        g;if(b.timer&&b.newscrolly==g&&b.newscrollx==c)return!0;b.timer&&w(b.timer);b.timer=0;var k=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-k)*(g-k)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();b.newscrolly=g;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-l;b.dst.y=
        g-k;b.dst.px=l;b.dst.py=k;var h=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/h;b.dst.ay=b.dst.y/h;var m=0,q=h;0==b.dst.x?(m=k,q=g,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(m=l,q=c,b.dst.ax=1,b.dst.px=0);h=b.getTransitionSpeed(h);f&&1>=f&&(h*=f);b.bzscroll=0<h?b.bzscroll?b.bzscroll.update(q,h):new BezierClass(m,q,h,0,1,0,1):!1;if(!b.timer){(k==b.page.maxh&&g>=b.page.maxh||l==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var p=1;b.cancelAnimationFrame=!1;b.timer=1;
        b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:l,y:k},request:{x:c,y:g},end:{x:b.newscrollx,y:b.newscrolly},speed:h});e();(k==b.page.maxh&&g>=k||l==b.page.maxw&&c>=l)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&w(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,g){var f=b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,g){var f=b.getScrollLeft();b.doScrollPos(f,
        c,g)},this.doScrollPos=function(c,g,f){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var k=g>b.page.maxh?b.page.maxh:g;0>k&&(k=0);b.synched("scroll",function(){b.setScrollTop(k);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,g){var f=0,f=g?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.h/2);f<-e?f=-e:f>b.page.maxh+e&&(f=b.page.maxh+e)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>f&&
        0>=py)return b.noticeCursor();if(f>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(f)};this.doScrollLeftBy=function(c,g){var f=0,f=g?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.w/2);f<-e?f=-e:f>b.page.maxw+e&&(f=b.page.maxw+e)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);if(0>f&&0>=px||f>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(f)};this.doScrollTo=
        function(c,g){g&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(c){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=
        !0;b.zoomrestore={style:{}};var k="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),f=b.win[0].style,l;for(l in k){var h=k[l];b.zoomrestore.style[h]="undefined"!=typeof f[h]?f[h]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};g.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));
        b.win.css({position:g.isios4?"absolute":"fixed",top:0,left:0,"z-index":y+100,margin:"0px"});k=b.win.css("backgroundColor");(""==k||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(k))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":y+101});b.zoom.css({"z-index":y+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),
        g.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});
        b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},J=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,l){c.stop();var h=c.time();c.steptime=0;c.lasttime=h;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=l;c.lastscrollx=-1;c.lastscrolly=
    -1};this.update=function(e,l){var h=c.time();c.steptime=h-c.lasttime;c.lasttime=h;var h=l-c.lasty,t=e-c.lastx,b=c.nc.getScrollTop(),p=c.nc.getScrollLeft(),b=b+h,p=p+t;c.snapx=0>p||p>c.nc.page.maxw;c.snapy=0>b||b>c.nc.page.maxh;c.speedx=t;c.speedy=h;c.lastx=e;c.lasty=l};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,l){var h=!1;0>l?(l=0,h=!0):l>c.nc.page.maxh&&(l=c.nc.page.maxh,h=!0);0>e?(e=0,h=
    !0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,h=!0);h&&c.nc.doScrollPos(e,l,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var l=c.time(),h=e?l+e:c.lasttime;e=c.nc.getScrollLeft();var t=c.nc.getScrollTop(),b=c.nc.page.maxh,p=c.nc.page.maxw;c.speedx=0<p?Math.min(60,c.speedx):0;c.speedy=0<b?Math.min(60,c.speedy):0;h=h&&60>=l-h;if(0>t||t>b||0>e||e>p)h=!1;e=c.speedx&&h?c.speedx:!1;if(c.speedy&&h&&c.speedy||e){var g=Math.max(16,c.steptime);50<g&&(e=g/50,c.speedx*=e,c.speedy*=e,g=50);c.demulxy=0;c.lastscrollx=
    c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var s=c.lastscrollx,u=c.lastscrolly,d=function(){var e=600<c.time()-l?0.04:0.02;if(c.speedx&&(s=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=s,0>s||s>p))e=0.1;if(c.speedy&&(u=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=u,0>u||u>b))e=0.1;c.demulxy=Math.min(1,c.demulxy+e);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=
    s,c.nc.setScrollLeft(s));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=u,c.nc.setScrollTop(u));c.timer||(c.nc.hideCursor(),c.doSnapy(s,u))});1>c.demulxy?c.timer=setTimeout(d,g):(c.stop(),c.nc.hideCursor(),c.doSnapy(s,u))};d()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},B=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(h,c,k){return(c=e.data(h,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():B.call(h)},set:function(h,c){var k=e.data(h,"__nicescroll")||!1;k&&k.ishwscroll?
    k.setScrollTop(parseInt(c)):B.call(h,c);return this}};e.fn.scrollTop=function(h){if("undefined"==typeof h){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():B.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(h)):B.call(e(this),h)})};var C=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(h,c,k){return(c=e.data(h,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():C.call(h)},set:function(h,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c){var k=e.data(h,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollLeft(parseInt(c)):C.call(h,c);return this}};e.fn.scrollLeft=function(h){if("undefined"==typeof h){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():C.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(h)):C.call(e(this),h)})};var D=function(h){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var h=
    0,k=0;h<c.length;h++)e.call(c[h],k++);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(h)for(a=0;a<h.length;a++){var k=e.data(h[a],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this};(function(e,c,k){for(var l=0;l<c.length;l++)k(e,c[l])})(D.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,e)})}});e.fn.getNiceScroll=
    function(h){return"undefined"==typeof h?new D(this):this[h]&&e.data(this[h],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(h){return e.data(h,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(h,c){"undefined"==typeof c&&("object"==typeof h&&!("jquery"in h))&&(c=h,h=!1);var k=new D;"undefined"==typeof c&&(c={});h&&(c.doc=e(h),c.win=e(this));var l=!("doc"in c);!l&&!("win"in c)&&(c.win=e(this));this.each(function(){var h=e(this).data("__nicescroll")||!1;h||(c.doc=l?e(this):c.doc,h=new Q(c,
    e(this)),e(this).data("__nicescroll",h));k.push(h)});return 1==k.length?k[0]:k};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new D,e.nicescroll.options=I)})(jQuery);
/**
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */

;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,targ,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Module/App: Core js
*/


//portlets
!function($) {
    "use strict";

    /**
    Portlet Widget
    */
    var Portlet = function() {
        this.$body = $("body"),
        this.$portletIdentifier = ".portlet",
        this.$portletCloser = '.portlet a[data-toggle="remove"]',
        this.$portletRefresher = '.portlet a[data-toggle="reload"]'
    };

    //on init
    Portlet.prototype.init = function() {
        // Panel closest
        var $this = this;
        $(document).on("click",this.$portletCloser, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
                var $portlet_parent = $portlet.parent();


            $portlet.slideUp("slow", function() {
                $(this).remove();
            });
            if ($portlet_parent.children().length == 0) {
                $portlet_parent.slideUp("slow", function() {
                   $(this).remove();
                });
            }
        });

        // Panel Reload
        $(document).on("click",this.$portletRefresher, function (ev) {
            ev.preventDefault();
            var $portlet = $(this).closest($this.$portletIdentifier);
            // This is just a simulation, nothing is going to be reloaded
            $portlet.append('<div class="panel-disabled"><div class="loader-1"></div></div>');
            var $pd = $portlet.find('.panel-disabled');
            setTimeout(function () {
                $pd.fadeOut('fast', function () {
                    $pd.remove();
                });
            }, 500 + 300 * (Math.random() * 5));
        });
    },
    //
    $.Portlet = new Portlet, $.Portlet.Constructor = Portlet

}(window.jQuery),



/**
 * Components
 */
function($) {
    "use strict";

    var Components = function() {};

    //initializing tooltip
    Components.prototype.initTooltipPlugin = function() {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
    },

    //initializing popover
    Components.prototype.initPopoverPlugin = function() {
        $.fn.popover && $('[data-toggle="popover"]').popover()
    },

    //initializing custom modal
    Components.prototype.initCustomModalPlugin = function() {
        $('[data-plugin="custommodal"]').on('click', function(e) {
        	Custombox.open({
                target: $(this).attr("href"),
                effect: $(this).attr("data-animation"),
                overlaySpeed: $(this).attr("data-overlaySpeed"),
                overlayColor: $(this).attr("data-overlayColor")
            });
        	e.preventDefault();
        });
    },

    //initializing nicescroll
    Components.prototype.initNiceScrollPlugin = function() {
        //You can change the color of scroll bar here
        $.fn.niceScroll &&  $(".nicescroll").niceScroll({ cursorcolor: '#98a6ad',cursorwidth:'6px', cursorborderradius: '5px'});
    },

    //range slider
    Components.prototype.initRangeSlider = function() {
        $.fn.slider && $('[data-plugin="range-slider"]').slider({});
    },

    /* -------------
     * Form related controls
     */
    //switch
    Components.prototype.initSwitchery = function() {
        $('[data-plugin="switchery"]').each(function (idx, obj) {
            new Switchery($(this)[0], $(this).data());
        });
    },
    //multiselect
    Components.prototype.initMultiSelect = function() {
        if($('[data-plugin="multiselect"]').length > 0)
            $('[data-plugin="multiselect"]').multiSelect($(this).data());
    },

     /* -------------
     * small charts related widgets
     */
     //peity charts
     Components.prototype.initPeityCharts = function() {
        $('[data-plugin="peity-pie"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("pie", {
                fill: colors,
                width: width,
                height: height
            });
        });
        //donut
         $('[data-plugin="peity-donut"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("donut", {
                fill: colors,
                width: width,
                height: height
            });
        });

         $('[data-plugin="peity-donut-alt"]').each(function(idx, obj) {
            $(this).peity("donut");
        });

         // line
         $('[data-plugin="peity-line"]').each(function(idx, obj) {
            $(this).peity("line", $(this).data());
         });

         // bar
         $('[data-plugin="peity-bar"]').each(function(idx, obj) {
            var colors = $(this).attr('data-colors')?$(this).attr('data-colors').split(","):[];
            var width = $(this).attr('data-width')?$(this).attr('data-width'):20; //default is 20
            var height = $(this).attr('data-height')?$(this).attr('data-height'):20; //default is 20
            $(this).peity("bar", {
                fill: colors,
                width: width,
                height: height
            });
         });
     },
     Components.prototype.initKnob = function() {
         $('[data-plugin="knob"]').each(function(idx, obj) {
            $(this).knob();
         });
     },

     Components.prototype.initCircliful = function() {
         $('[data-plugin="circliful"]').each(function(idx, obj) {
            $(this).circliful();
         });
     },

    Components.prototype.initCounterUp = function() {
        var delay = $(this).attr('data-delay')?$(this).attr('data-delay'):100; //default is 100
        var time = $(this).attr('data-time')?$(this).attr('data-time'):1200; //default is 1200
         $('[data-plugin="counterup"]').each(function(idx, obj) {
            $(this).counterUp({
                delay: 100,
                time: 1200
            });
         });
     },


    //initilizing
    Components.prototype.init = function() {
        var $this = this;
        this.initTooltipPlugin(),
        this.initPopoverPlugin(),
        this.initNiceScrollPlugin(),
        this.initCustomModalPlugin(),
        this.initRangeSlider(),
        this.initSwitchery(),
        this.initMultiSelect(),
        this.initPeityCharts(),
        this.initKnob(),
        this.initCircliful(),
        this.initCounterUp(),
        //creating portles
        $.Portlet.init();
    },

    $.Components = new Components, $.Components.Constructor = Components

}(window.jQuery),
    //initializing main application module
function($) {
    "use strict";
    $.Components.init();
}(window.jQuery);




/**
 * Theme: Adminto Admin Template
 * Author: Coderthemes
 * Module/App: Main Js
 */



!function ($) {
    "use strict";

    var Sidemenu = function () {
        this.$body = $("body"),
            this.$openLeftBtn = $(".open-left"),
            this.$menuItem = $("#sidebar-menu a")
    };

    Sidemenu.prototype.openLeftBar = function () {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
            $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
            $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

        if ($("#wrapper").hasClass("enlarged")) {
            $(".left ul").removeAttr("style");
        } else {
            $(".subdrop").siblings("ul:first").show();
        }

        //this.toggle_slimscroll(".slimscrollleft");
        $("body").trigger("resize");
        // for mobile screen re-intializing it
        if(jQuery.browser.mobile === true) {
            $('.slimscrollleft').getNiceScroll().resize();
        }
    },
    Sidemenu.prototype.toggle_slimscroll = function(item) {
        if($("#wrapper").hasClass("enlarged")){
          $(item).css("overflow","inherit").parent().css("overflow","inherit");
          $(item). siblings(".slimScrollBar").css("visibility","hidden");
        }else{
          $(item).css("overflow","hidden").parent().css("overflow","hidden");
          $(item). siblings(".slimScrollBar").css("visibility","visible");
        }
    },
        //menu item click
        Sidemenu.prototype.menuItemClick = function (e) {
            if (!$("#wrapper").hasClass("enlarged")) {
                if ($(this).parent().hasClass("has_sub")) {

                }
                if (!$(this).hasClass("subdrop")) {
                    // hide any open menus and remove all other classes
                    $("ul", $(this).parents("ul:first")).slideUp(350);
                    $("a", $(this).parents("ul:first")).removeClass("subdrop");
                    $("#sidebar-menu .pull-right i").removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");

                    // open our new menu and add the open class
                    $(this).next("ul").slideDown(350);
                    $(this).addClass("subdrop");
                    $(".drop-arrow i", $(this).parents(".has_sub:first")).removeClass("zmdi-chevron-right").addClass("zmdi-chevron-down");
                    $(".drop-arrow i", $(this).siblings("ul")).removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");
                } else if ($(this).hasClass("subdrop")) {
                    $(this).removeClass("subdrop");
                    $(this).next("ul").slideUp(350);
                    $(".drop-arrow i", $(this).parent()).removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");
                }
            }
            $('.slimscrollleft').getNiceScroll().resize();
        },

        //init sidemenu
        Sidemenu.prototype.init = function () {
            var $this = this;

            var ua = navigator.userAgent,
                event = (ua.match(/iP/i)) ? "touchstart" : "click";


            //bind on click
            this.$openLeftBtn.on(event, function (e) {
                e.stopPropagation();
                $this.openLeftBar();
            });

            // LEFT SIDE MAIN NAVIGATION
            $this.$menuItem.on(event, $this.menuItemClick);

            // NAVIGATION HIGHLIGHT & OPEN PARENT
            $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
        },

        //init Sidemenu
        $.Sidemenu = new Sidemenu, $.Sidemenu.Constructor = Sidemenu

}(window.jQuery),


    function ($) {
        "use strict";

        var FullScreen = function () {
            this.$body = $("body"),
                this.$fullscreenBtn = $("#btn-fullscreen")
        };

        //turn on full screen
        // Thanks to http://davidwalsh.name/fullscreen
        FullScreen.prototype.launchFullscreen = function (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        },
            FullScreen.prototype.exitFullscreen = function () {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            },
            //toggle screen
            FullScreen.prototype.toggle_fullscreen = function () {
                var $this = this;
                var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
                if (fullscreenEnabled) {
                    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                        $this.launchFullscreen(document.documentElement);
                    } else {
                        $this.exitFullscreen();
                    }
                }
            },
            //init sidemenu
            FullScreen.prototype.init = function () {
                var $this = this;
                //bind
                $this.$fullscreenBtn.on('click', function () {
                    $this.toggle_fullscreen();
                });
            },
            //init FullScreen
            $.FullScreen = new FullScreen, $.FullScreen.Constructor = FullScreen

    }(window.jQuery),


//main app module
    function ($) {
        "use strict";

        var App = function () {
            this.VERSION = "1.2.0",
                this.AUTHOR = "Coderthemes",
                this.SUPPORT = "coderthemes@gmail.com",
                this.pageScrollElement = "html, body",
                this.$body = $("body")
        };

        //on doc load
        App.prototype.onDocReady = function (e) {
            var $this = this;


            $('.animate-number').each(function () {
                $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
            });

            //RUN RESIZE ITEMS
            $("body").trigger("resize");

            // right side-bar toggle
            $('.right-bar-toggle').on('click', function (e) {

                $('#wrapper').toggleClass('right-bar-enabled');
            });

            var w = $(window).width();

            if (jQuery.browser.mobile === true) {
                $("body").addClass("mobile").removeClass("fixed-left");
            }

            if (!$("#wrapper").hasClass("forced")) {
                if (w > 990) {
                    $("#wrapper").removeClass("enlarged");
                } else {
                    $("#wrapper").addClass("enlarged");
                    $(".left ul").removeAttr("style");
                }
            }
            $('.slimscroller').niceScroll({ cursorcolor: '#ebeff2',cursorwidth:'8px', cursorborderradius: '5px'});
            $('.slimscrollleft').niceScroll({smoothscroll:false, cursorcolor: '#ebeff2',cursorwidth:'8px', cursorborderradius: '5px'});
        },
            //initilizing
            App.prototype.init = function () {
                var $this = this;
                //document load initialization
                $(document).ready($this.onDocReady);

                //init side bar - left
                $.Sidemenu.init();
                //init fullscreen
                $.FullScreen.init();
            },

            $.App = new App, $.App.Constructor = App

    }(window.jQuery),

//initializing main application module
    function ($) {
        "use strict";
        $.App.init();
    }(window.jQuery);



/*!
 DataTables 1.10.9-dev
 ©2008-2014 SpryMedia Ltd - datatables.net/license
*/

(function(Fa,T,k){var S=function(g){function X(a){var b,c,e={};g.each(a,function(d){if((b=d.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=d.replace(b[0],b[2].toLowerCase()),e[c]=d,"o"===b[1]&&X(a[d])});a._hungarianMap=e}function I(a,b,c){a._hungarianMap||X(a);var e;g.each(b,function(d){e=a._hungarianMap[d];if(e!==k&&(c||b[e]===k))"o"===e.charAt(0)?(b[e]||(b[e]={}),g.extend(!0,b[e],b[d]),I(a[e],b[e],c)):b[e]=b[d]})}function S(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){B(a,"ordering","bSort");B(a,"orderMulti","bSortMulti");B(a,"orderClasses","bSortClasses");B(a,"orderCellsTop","bSortCellsTop");B(a,"order","aaSorting");B(a,"orderFixed","aaSortingFixed");B(a,"paging","bPaginate");
B(a,"pagingType","sPaginationType");B(a,"pageLength","iDisplayLength");B(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&I(m.models.oSearch,a[b])}function fb(a){B(a,"orderable","bSortable");B(a,"orderData","aDataSort");B(a,"orderSequence","asSorting");B(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!g.isArray(b)&&(a.aDataSort=[b])}function gb(a){var a=a.oBrowser,b=g("<div/>").css({position:"fixed",
top:0,left:0,height:1,width:1,overflow:"hidden"}).append(g("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(g('<div class="test"/>').css({width:"100%",height:10}))).appendTo("body"),c=b.find(".test");a.bScrollOversize=100===c[0].offsetWidth;a.bScrollbarLeft=1!==Math.round(c.offset().left);a.bBounding=b[0].getBoundingClientRect().width?!0:!1;b.remove()}function hb(a,b,c,e,d,f){var h,i=!1;c!==k&&(h=c,i=!0);for(;e!==d;)a.hasOwnProperty(e)&&(h=i?b(h,a[e],e,a):a[e],
i=!0,e+=f);return h}function Ga(a,b){var c=m.defaults.column,e=a.aoColumns.length,c=g.extend({},m.models.oColumn,c,{nTh:b?b:T.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[e],mData:c.mData?c.mData:e,idx:e});a.aoColumns.push(c);c=a.aoPreSearchCols;c[e]=g.extend({},m.models.oSearch,c[e]);ka(a,e,g(b).data())}function ka(a,b,c){var b=a.aoColumns[b],e=a.oClasses,d=g(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=d.attr("width")||null;var f=(d.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);
f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),I(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),g.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var h=b.mData,i=P(h),j=b.mRender?P(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=g.isPlainObject(h)&&(c(h.sort)||c(h.type)||c(h.filter));b.fnGetData=
function(a,b,c){var e=i(a,b,k,c);return j&&b?j(e,b,a,c):e};b.fnSetData=function(a,b,c){return Q(h)(a,b,c)};"number"!==typeof h&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,d.addClass(e.sSortableNone));a=-1!==g.inArray("asc",b.asSorting);c=-1!==g.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=e.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=e.sSortableAsc,b.sSortingClassJUI=e.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=e.sSortableDesc,b.sSortingClassJUI=
e.sSortJUIDescAllowed):(b.sSortingClass=e.sSortable,b.sSortingClassJUI=e.sSortJUI)}function Y(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,e=b.length;c<e;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Z(a);w(a,null,"column-sizing",[a])}function la(a,b){var c=$(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=$(a,"bVisible"),c=g.inArray(b,c);return-1!==c?c:null}function ba(a){return $(a,"bVisible").length}function $(a,b){var c=
[];g.map(a.aoColumns,function(a,d){a[b]&&c.push(d)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,e=m.ext.type.detect,d,f,h,i,j,g,l,r,q;d=0;for(f=b.length;d<f;d++)if(l=b[d],q=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){h=0;for(i=e.length;h<i;h++){j=0;for(g=c.length;j<g;j++){q[j]===k&&(q[j]=y(a,j,d,"type"));r=e[h](q[j],a);if(!r&&h!==e.length-1)break;if("html"===r)break}if(r){l.sType=r;break}}l.sType||(l.sType="string")}}function ib(a,b,c,e){var d,f,h,i,j,n,l=a.aoColumns;
if(b)for(d=b.length-1;0<=d;d--){n=b[d];var r=n.targets!==k?n.targets:n.aTargets;g.isArray(r)||(r=[r]);f=0;for(h=r.length;f<h;f++)if("number"===typeof r[f]&&0<=r[f]){for(;l.length<=r[f];)Ga(a);e(r[f],n)}else if("number"===typeof r[f]&&0>r[f])e(l.length+r[f],n);else if("string"===typeof r[f]){i=0;for(j=l.length;i<j;i++)("_all"==r[f]||g(l[i].nTh).hasClass(r[f]))&&e(i,n)}}if(c){d=0;for(a=c.length;d<a;d++)e(d,c[d])}}function L(a,b,c,e){var d=a.aoData.length,f=g.extend(!0,{},m.models.oRow,{src:c?"dom":
"data",idx:d});f._aData=b;a.aoData.push(f);for(var h=a.aoColumns,i=0,j=h.length;i<j;i++)c&&Ja(a,d,i,y(a,d,i)),h[i].sType=null;a.aiDisplayMaster.push(d);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ka(a,d,c,e);return d}function ma(a,b){var c;b instanceof g||(b=g(b));return b.map(function(b,d){c=na(a,d);return L(a,c.data,d,c.cells)})}function y(a,b,c,e){var d=a.iDraw,f=a.aoColumns[c],h=a.aoData[b]._aData,i=f.sDefaultContent,c=f.fnGetData(h,e,{settings:a,row:b,col:c});if(c===k)return a.iDrawError!=
d&&null===i&&(J(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=d),i;if((c===h||null===c)&&null!==i)c=i;else if("function"===typeof c)return c.call(h);return null===c&&"display"==e?"":c}function Ja(a,b,c,e){a.aoColumns[c].fnSetData(a.aoData[b]._aData,e,{settings:a,row:b,col:c})}function La(a){return g.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\./g,".")})}function P(a){if(g.isPlainObject(a)){var b={};
g.each(a,function(a,c){c&&(b[a]=P(c))});return function(a,c,f,h){var i=b[c]||b._;return i!==k?i(a,c,f,h):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,h){return a(b,c,f,h)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var h,i;if(""!==f){i=La(f);for(var j=0,g=i.length;j<g;j++){f=i[j].match(ca);h=i[j].match(U);if(f){i[j]=i[j].replace(ca,"");""!==i[j]&&(a=a[i[j]]);h=[];i.splice(0,j+1);i=i.join(".");
j=0;for(g=a.length;j<g;j++)h.push(c(a[j],b,i));a=f[0].substring(1,f[0].length-1);a=""===a?h:h.join(a);break}else if(h){i[j]=i[j].replace(U,"");a=a[i[j]]();continue}if(null===a||a[i[j]]===k)return k;a=a[i[j]]}}return a};return function(b,d){return c(b,d,a)}}return function(b){return b[a]}}function Q(a){if(g.isPlainObject(a))return Q(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,e,d){a(b,"set",e,d)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||
-1!==a.indexOf("("))){var b=function(a,e,d){var d=La(d),f;f=d[d.length-1];for(var h,i,j=0,g=d.length-1;j<g;j++){h=d[j].match(ca);i=d[j].match(U);if(h){d[j]=d[j].replace(ca,"");a[d[j]]=[];f=d.slice();f.splice(0,j+1);h=f.join(".");i=0;for(g=e.length;i<g;i++)f={},b(f,e[i],h),a[d[j]].push(f);return}i&&(d[j]=d[j].replace(U,""),a=a[d[j]](e));if(null===a[d[j]]||a[d[j]]===k)a[d[j]]={};a=a[d[j]]}if(f.match(U))a[f.replace(U,"")](e);else a[f.replace(ca,"")]=e};return function(c,e){return b(c,e,a)}}return function(b,
e){b[a]=e}}function Ma(a){return D(a.aoData,"_aData")}function oa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0}function pa(a,b,c){for(var e=-1,d=0,f=a.length;d<f;d++)a[d]==b?e=d:a[d]>b&&a[d]--; -1!=e&&c===k&&a.splice(e,1)}function da(a,b,c,e){var d=a.aoData[b],f,h=function(c,f){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=y(a,b,f,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===d.src)d._aData=na(a,d,e,e===k?k:d._aData).data;else{var i=d.anCells;if(i)if(e!==
k)h(i[e],e);else{c=0;for(f=i.length;c<f;c++)h(i[c],c)}}d._aSortData=null;d._aFilterData=null;h=a.aoColumns;if(e!==k)h[e].sType=null;else{c=0;for(f=h.length;c<f;c++)h[c].sType=null;Na(a,d)}}function na(a,b,c,e){var d=[],f=b.firstChild,h,i,j=0,n,l=a.aoColumns,r=a._rowReadObject,e=e!==k?e:r?{}:[],q=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),Q(a)(e,b.getAttribute(c)))}},jb=function(a){if(c===k||c===j)i=l[j],n=g.trim(a.innerHTML),i&&i._bAttrSrc?(Q(i.mData._)(e,
n),q(i.mData.sort,a),q(i.mData.type,a),q(i.mData.filter,a)):r?(i._setter||(i._setter=Q(i.mData)),i._setter(e,n)):e[j]=n;j++};if(f)for(;f;){h=f.nodeName.toUpperCase();if("TD"==h||"TH"==h)jb(f),d.push(f);f=f.nextSibling}else{d=b.anCells;h=0;for(var o=d.length;h<o;h++)jb(d[h])}if(b=f?b:b.nTr)(b=b.getAttribute("id"))&&Q(a.rowId)(e,b);return{data:e,cells:d}}function Ka(a,b,c,e){var d=a.aoData[b],f=d._aData,h=[],i,j,g,l,r;if(null===d.nTr){i=c||T.createElement("tr");d.nTr=i;d.anCells=h;i._DT_RowIndex=b;
Na(a,d);l=0;for(r=a.aoColumns.length;l<r;l++){g=a.aoColumns[l];j=c?e[l]:T.createElement(g.sCellType);h.push(j);if(!c||g.mRender||g.mData!==l)j.innerHTML=y(a,b,l,"display");g.sClass&&(j.className+=" "+g.sClass);g.bVisible&&!c?i.appendChild(j):!g.bVisible&&c&&j.parentNode.removeChild(j);g.fnCreatedCell&&g.fnCreatedCell.call(a.oInstance,j,y(a,b,l),f,b,l)}w(a,"aoRowCreatedCallback",null,[i,f,b])}d.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,e=b._aData;if(c){var d=a.rowIdFn(e);d&&(c.id=
d);e.DT_RowClass&&(d=e.DT_RowClass.split(" "),b.__rowc=b.__rowc?Oa(b.__rowc.concat(d)):d,g(c).removeClass(b.__rowc.join(" ")).addClass(e.DT_RowClass));e.DT_RowAttr&&g(c).attr(e.DT_RowAttr);e.DT_RowData&&g(c).data(e.DT_RowData)}}function kb(a){var b,c,e,d,f,h=a.nTHead,i=a.nTFoot,j=0===g("th, td",h).length,n=a.oClasses,l=a.aoColumns;j&&(d=g("<tr/>").appendTo(h));b=0;for(c=l.length;b<c;b++)f=l[b],e=g(f.nTh).addClass(f.sClass),j&&e.appendTo(d),a.oFeatures.bSort&&(e.addClass(f.sSortingClass),!1!==f.bSortable&&
(e.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Pa(a,f.nTh,b))),f.sTitle!=e[0].innerHTML&&e.html(f.sTitle),Qa(a,"header")(a,e,f,n);j&&ea(a.aoHeader,h);g(h).find(">tr").attr("role","row");g(h).find(">tr>th, >tr>td").addClass(n.sHeaderTH);g(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);if(null!==i){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&g(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var e,d,f,h=[],i=[],j=a.aoColumns.length,n;if(b){c===k&&(c=!1);
e=0;for(d=b.length;e<d;e++){h[e]=b[e].slice();h[e].nTr=b[e].nTr;for(f=j-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&h[e].splice(f,1);i.push([])}e=0;for(d=h.length;e<d;e++){if(a=h[e].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=h[e].length;f<b;f++)if(n=j=1,i[e][f]===k){a.appendChild(h[e][f].cell);for(i[e][f]=1;h[e+j]!==k&&h[e][f].cell==h[e+j][f].cell;)i[e+j][f]=1,j++;for(;h[e][f+n]!==k&&h[e][f].cell==h[e][f+n].cell;){for(c=0;c<j;c++)i[e+c][f+n]=1;n++}g(h[e][f].cell).attr("rowspan",j).attr("colspan",
n)}}}}function M(a){var b=w(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==g.inArray(!1,b))C(a,!1);else{var b=[],c=0,e=a.asStripeClasses,d=e.length,f=a.oLanguage,h=a.iInitDisplayStart,i="ssp"==z(a),j=a.aiDisplay;a.bDrawing=!0;h!==k&&-1!==h&&(a._iDisplayStart=i?h:h>=a.fnRecordsDisplay()?0:h,a.iInitDisplayStart=-1);var h=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(i){if(!a.bDestroying&&!lb(a))return}else a.iDraw++;if(0!==j.length){f=i?a.aoData.length:
n;for(i=i?0:h;i<f;i++){var l=j[i],r=a.aoData[l];null===r.nTr&&Ka(a,l);l=r.nTr;if(0!==d){var q=e[c%d];r._sRowStripe!=q&&(g(l).removeClass(r._sRowStripe).addClass(q),r._sRowStripe=q)}w(a,"aoRowCallback",null,[l,r._aData,c,i]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==z(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=g("<tr/>",{"class":d?e[0]:""}).append(g("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];w(a,"aoHeaderCallback",
"header",[g(a.nTHead).children("tr")[0],Ma(a),h,n,j]);w(a,"aoFooterCallback","footer",[g(a.nTFoot).children("tr")[0],Ma(a),h,n,j]);e=g(a.nTBody);e.children().detach();e.append(g(b));w(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function R(a,b){var c=a.oFeatures,e=c.bFilter;c.bSort&&mb(a);e?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;M(a);a._drawHold=!1}function nb(a){var b=a.oClasses,c=g(a.nTable),c=g("<div/>").insertBefore(c),
e=a.oFeatures,d=g("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=d[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),h,i,j,n,l,r,q=0;q<f.length;q++){h=null;i=f[q];if("<"==i){j=g("<div/>")[0];n=f[q+1];if("'"==n||'"'==n){l="";for(r=2;f[q+r]!=n;)l+=f[q+r],r++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),j.id=n[0].substr(1,n[0].length-1),j.className=n[1]):"#"==l.charAt(0)?
j.id=l.substr(1,l.length-1):j.className=l;q+=r}d.append(j);d=g(j)}else if(">"==i)d=d.parent();else if("l"==i&&e.bPaginate&&e.bLengthChange)h=ob(a);else if("f"==i&&e.bFilter)h=pb(a);else if("r"==i&&e.bProcessing)h=qb(a);else if("t"==i)h=rb(a);else if("i"==i&&e.bInfo)h=sb(a);else if("p"==i&&e.bPaginate)h=tb(a);else if(0!==m.ext.feature.length){j=m.ext.feature;r=0;for(n=j.length;r<n;r++)if(i==j[r].cFeature){h=j[r].fnInit(a);break}}h&&(j=a.aanFeatures,j[i]||(j[i]=[]),j[i].push(h),d.append(h))}c.replaceWith(d);
a.nHolding=null}function ea(a,b){var c=g(b).children("tr"),e,d,f,h,i,j,n,l,r,q;a.splice(0,a.length);f=0;for(j=c.length;f<j;f++)a.push([]);f=0;for(j=c.length;f<j;f++){e=c[f];for(d=e.firstChild;d;){if("TD"==d.nodeName.toUpperCase()||"TH"==d.nodeName.toUpperCase()){l=1*d.getAttribute("colspan");r=1*d.getAttribute("rowspan");l=!l||0===l||1===l?1:l;r=!r||0===r||1===r?1:r;h=0;for(i=a[f];i[h];)h++;n=h;q=1===l?!0:!1;for(i=0;i<l;i++)for(h=0;h<r;h++)a[f+h][n+i]={cell:d,unique:q},a[f+h].nTr=e}d=d.nextSibling}}}
function qa(a,b,c){var e=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,d=c.length;b<d;b++)for(var f=0,h=c[b].length;f<h;f++)if(c[b][f].unique&&(!e[f]||!a.bSortCellsTop))e[f]=c[b][f].cell;return e}function ra(a,b,c){w(a,"aoServerParams","serverParams",[b]);if(b&&g.isArray(b)){var e={},d=/(.*?)\[\]$/;g.each(b,function(a,b){var c=b.name.match(d);c?(c=c[0],e[c]||(e[c]=[]),e[c].push(b.value)):e[b.name]=b.value});b=e}var f,h=a.ajax,i=a.oInstance,j=function(b){w(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(g.isPlainObject(h)&&
h.data){f=h.data;var n=g.isFunction(f)?f(b,a):f,b=g.isFunction(f)&&n?n:g.extend(!0,b,n);delete h.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&J(a,0,c);a.json=b;j(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var f=w(a,null,"xhr",[a,null,a.jqXHR]);-1===g.inArray(!0,f)&&("parsererror"==c?J(a,0,"Invalid JSON response",1):4===b.readyState&&J(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;w(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(i,a.sAjaxSource,
g.map(b,function(a,b){return{name:b,value:a}}),j,a):a.sAjaxSource||"string"===typeof h?a.jqXHR=g.ajax(g.extend(n,{url:h||a.sAjaxSource})):g.isFunction(h)?a.jqXHR=h.call(i,b,j,a):(a.jqXHR=g.ajax(g.extend(n,h)),h.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,e=a.oFeatures,d=a.oPreviousSearch,f=a.aoPreSearchCols,h,i=[],j,n,l,r=V(a);h=a._iDisplayStart;j=!1!==e.bPaginate?a._iDisplayLength:-1;var q=function(a,
b){i.push({name:a,value:b})};q("sEcho",a.iDraw);q("iColumns",c);q("sColumns",D(b,"sName").join(","));q("iDisplayStart",h);q("iDisplayLength",j);var k={draw:a.iDraw,columns:[],order:[],start:h,length:j,search:{value:d.sSearch,regex:d.bRegex}};for(h=0;h<c;h++)n=b[h],l=f[h],j="function"==typeof n.mData?"function":n.mData,k.columns.push({data:j,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),q("mDataProp_"+h,j),e.bFilter&&(q("sSearch_"+h,l.sSearch),
q("bRegex_"+h,l.bRegex),q("bSearchable_"+h,n.bSearchable)),e.bSort&&q("bSortable_"+h,n.bSortable);e.bFilter&&(q("sSearch",d.sSearch),q("bRegex",d.bRegex));e.bSort&&(g.each(r,function(a,b){k.order.push({column:b.col,dir:b.dir});q("iSortCol_"+a,b.col);q("sSortDir_"+a,b.dir)}),q("iSortingCols",r.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?i:k:b?i:k}function vb(a,b){var c=sa(a,b),e=b.sEcho!==k?b.sEcho:b.draw,d=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==
k?b.iTotalDisplayRecords:b.recordsFiltered;if(e){if(1*e<a.iDraw)return;a.iDraw=1*e}oa(a);a._iRecordsTotal=parseInt(d,10);a._iRecordsDisplay=parseInt(f,10);e=0;for(d=c.length;e<d;e++)L(a,c[e]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;M(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=g.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?P(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,e=a.oLanguage,
d=a.oPreviousSearch,f=a.aanFeatures,h='<input type="search" class="'+b.sFilterInput+'"/>',i=e.sSearch,i=i.match(/_INPUT_/)?i.replace("_INPUT_",h):i+h,b=g("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(g("<label/>").append(i)),f=function(){var b=!this.value?"":this.value;b!=d.sSearch&&(ga(a,{sSearch:b,bRegex:d.bRegex,bSmart:d.bSmart,bCaseInsensitive:d.bCaseInsensitive}),a._iDisplayStart=0,M(a))},h=null!==a.searchDelay?a.searchDelay:"ssp"===z(a)?400:0,j=g("input",b).val(d.sSearch).attr("placeholder",
e.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",h?ua(f,h):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);g(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{j[0]!==T.activeElement&&j.val(d.sSearch)}catch(f){}});return b[0]}function ga(a,b,c){var e=a.oPreviousSearch,d=a.aoPreSearchCols,f=function(a){e.sSearch=a.sSearch;e.bRegex=a.bRegex;e.bSmart=a.bSmart;e.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=z(a)){wb(a,b.sSearch,
c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<d.length;b++)xb(a,d[b].sSearch,b,d[b].bEscapeRegex!==k?!d[b].bEscapeRegex:d[b].bRegex,d[b].bSmart,d[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;w(a,null,"search",[a])}function yb(a){for(var b=m.ext.search,c=a.aiDisplay,e,d,f=0,h=b.length;f<h;f++){for(var i=[],j=0,g=c.length;j<g;j++)d=c[j],e=a.aoData[d],b[f](a,e._aFilterData,d,e._aData,j)&&i.push(d);c.length=0;c.push.apply(c,i)}}function xb(a,b,c,e,d,
f){if(""!==b)for(var h=a.aiDisplay,e=Ra(b,e,d,f),d=h.length-1;0<=d;d--)b=a.aoData[h[d]]._aFilterData[c],e.test(b)||h.splice(d,1)}function wb(a,b,c,e,d,f){var e=Ra(b,e,d,f),d=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,h;0!==m.ext.search.length&&(c=!0);h=zb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(h||c||d.length>b.length||0!==b.indexOf(d)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)e.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Ra(a,b,c,e){a=b?a:va(a);
c&&(a="^(?=.*?"+g.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,e?"i":"")}function va(a){return a.replace(Zb,"\\$1")}function zb(a){var b=a.aoColumns,c,e,d,f,h,i,j,g,l=m.ext.type.search;c=!1;e=0;for(f=a.aoData.length;e<f;e++)if(g=a.aoData[e],!g._aFilterData){i=[];d=0;for(h=b.length;d<h;d++)c=b[d],c.bSearchable?(j=y(a,e,d,"filter"),l[c.sType]&&(j=l[c.sType](j)),null===j&&(j=
""),"string"!==typeof j&&j.toString&&(j=j.toString())):j="",j.indexOf&&-1!==j.indexOf("&")&&(wa.innerHTML=j,j=$b?wa.textContent:wa.innerText),j.replace&&(j=j.replace(/[\r\n]/g,"")),i.push(j);g._aFilterData=i;g._sFilterRow=i.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,
e=g("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),e.attr("role","status").attr("aria-live","polite"),g(a.nTable).attr("aria-describedby",b+"_info"));return e[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,e=a._iDisplayStart+1,d=a.fnDisplayEnd(),f=a.fnRecordsTotal(),h=a.fnRecordsDisplay(),i=h?c.sInfo:c.sInfoEmpty;h!==f&&(i+=" "+c.sInfoFiltered);i+=c.sInfoPostFix;i=Db(a,i);c=c.fnInfoCallback;null!==c&&(i=
c.call(a.oInstance,a,e,d,f,h,i));g(b).html(i)}}function Db(a,b){var c=a.fnFormatNumber,e=a._iDisplayStart+1,d=a._iDisplayLength,f=a.fnRecordsDisplay(),h=-1===d;return b.replace(/_START_/g,c.call(a,e)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,h?1:Math.ceil(e/d))).replace(/_PAGES_/g,c.call(a,h?1:Math.ceil(f/d)))}function ha(a){var b,c,e=a.iInitDisplayStart,d=a.aoColumns,f;c=a.oFeatures;var h=
a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=d.length;b<c;b++)f=d[b],f.sWidth&&(f.nTh.style.width=u(f.sWidth));w(a,null,"preInit",[a]);R(a);d=z(a);if("ssp"!=d||h)"ajax"==d?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)L(a,f[b]);a.iInitDisplayStart=e;R(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a))}else setTimeout(function(){ha(a)},200)}function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Y(a);w(a,"aoInitComplete","init",
[a,b])}function Sa(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ta(a);w(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,e=a.aLengthMenu,d=g.isArray(e[0]),f=d?e[0]:e,e=d?e[1]:e,d=g("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),h=0,i=f.length;h<i;h++)d[0][h]=new Option(e[h],f[h]);var j=g("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(j[0].id=c+"_length");j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",d[0].outerHTML));g("select",
j).val(a._iDisplayLength).bind("change.DT",function(){Sa(a,g(this).val());M(a)});g(a.nTable).bind("length.dt.DT",function(b,c,f){a===c&&g("select",j).val(f)});return j[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],e="function"===typeof c,d=function(a){M(a)},b=g("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;e||c.fnInit(a,b,d);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(e){var b=a._iDisplayStart,g=a._iDisplayLength,n=a.fnRecordsDisplay(),l=-1===
g,b=l?0:Math.ceil(b/g),g=l?1:Math.ceil(n/g),n=c(b,g),k,l=0;for(k=f.p.length;l<k;l++)Qa(a,"pageButton")(a,f.p[l],l,n,b,g)}else c.fnUpdate(a,d)},sName:"pagination"}));return b}function Ua(a,b,c){var e=a._iDisplayStart,d=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===d?e=0:"number"===typeof b?(e=b*d,e>f&&(e=0)):"first"==b?e=0:"previous"==b?(e=0<=d?e-d:0,0>e&&(e=0)):"next"==b?e+d<f&&(e+=d):"last"==b?e=Math.floor((f-1)/d)*d:J(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==e;a._iDisplayStart=
e;b&&(w(a,null,"page",[a]),c&&M(a));return b}function qb(a){return g("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&g(a.aanFeatures.r).css("display",b?"block":"none");w(a,null,"processing",[a,b])}function rb(a){var b=g(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var e=c.sX,d=c.sY,f=a.oClasses,h=b.children("caption"),
i=h.length?h[0]._captionSide:null,j=g(b[0].cloneNode(!1)),n=g(b[0].cloneNode(!1)),l=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");l.length||(l=null);j=g("<div/>",{"class":f.sScrollWrapper}).append(g("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:e?!e?null:u(e):"100%"}).append(g("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(j.removeAttr("id").css("margin-left",0).append("top"===
i?h:null).append(b.children("thead"))))).append(g("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!e?null:u(e)}).append(b));l&&j.append(g("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:e?!e?null:u(e):"100%"}).append(g("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",0).append("bottom"===i?h:null).append(b.children("tfoot")))));var b=j.children(),k=b[0],f=b[1],q=l?b[2]:null;if(e)g(f).on("scroll.DT",function(){var a=
this.scrollLeft;k.scrollLeft=a;l&&(q.scrollLeft=a)});g(f).css(d&&c.bCollapse?"max-height":"height",d);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=q;a.aoDrawCallback.push({fn:Z,sName:"scrolling"});return j[0]}function Z(a){var b=a.oScroll,c=b.sX,e=b.sXInner,d=b.sY,b=b.iBarWidth,f=g(a.nScrollHead),h=f[0].style,i=f.children("div"),j=i[0].style,n=i.children("table"),i=a.nScrollBody,l=g(i),k=i.style,q=g(a.nScrollFoot).children("div"),m=q.children("table"),o=g(a.nTHead),E=g(a.nTable),p=E[0],t=p.style,
N=a.nTFoot?g(a.nTFoot):null,Eb=a.oBrowser,w=Eb.bScrollOversize,s,v,O,x,y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};E.children("thead, tfoot").remove();x=o.clone().prependTo(E);o=o.find("tr");v=x.find("tr");x.find("th, td").removeAttr("tabindex");N&&(O=N.clone().prependTo(E),s=N.find("tr"),O=O.find("tr"));c||(k.width="100%",f[0].style.width="100%");g.each(qa(a,x),function(b,c){B=la(a,b);c.style.width=a.aoColumns[B].sWidth});
N&&H(function(a){a.style.width=""},O);f=E.outerWidth();if(""===c){t.width="100%";if(w&&(E.find("tbody").height()>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(E.outerWidth()-b);f=E.outerWidth()}else""!==e&&(t.width=u(e),f=E.outerWidth());H(C,v);H(function(a){A.push(a.innerHTML);y.push(u(g(a).css("width")))},v);H(function(a,b){a.style.width=y[b]},o);g(v).height(0);N&&(H(C,O),H(function(a){z.push(u(g(a).css("width")))},O),H(function(a,b){a.style.width=z[b]},s),g(O).height(0));H(function(a,
b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";a.style.width=y[b]},v);N&&H(function(a,b){a.innerHTML="";a.style.width=z[b]},O);if(E.outerWidth()<f){s=i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(w&&(i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(s-b);(""===c||""!==e)&&J(a,1,"Possible column misalignment",6)}else s="100%";k.width=u(s);h.width=u(s);N&&(a.nScrollFoot.style.width=u(s));!d&&w&&(k.height=
u(p.offsetHeight+b));c=E.outerWidth();n[0].style.width=u(c);j.width=u(c);e=E.height()>i.clientHeight||"scroll"==l.css("overflow-y");d="padding"+(Eb.bScrollbarLeft?"Left":"Right");j[d]=e?b+"px":"0px";N&&(m[0].style.width=u(c),q[0].style.width=u(c),q[0].style[d]=e?b+"px":"0px");l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)i.scrollTop=0}function H(a,b,c){for(var e=0,d=0,f=b.length,h,i;d<f;){h=b[d].firstChild;for(i=c?c[d].firstChild:null;h;)1===h.nodeType&&(c?a(h,i,e):a(h,e),e++),h=h.nextSibling,
i=c?i.nextSibling:null;d++}}function Ha(a){var b=a.nTable,c=a.aoColumns,e=a.oScroll,d=e.sY,f=e.sX,h=e.sXInner,i=c.length,j=$(a,"bVisible"),n=g("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,q=!1,m,o,p;p=a.oBrowser;e=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<j.length;m++)o=c[j[m]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),q=!0);if(e||!q&&!f&&!d&&i==ba(a)&&i==n.length)for(m=0;m<i;m++)c[m].sWidth=u(n.eq(m).width());else{i=g(b).clone().css("visibility","hidden").removeAttr("id");
i.find("tbody tr").remove();var t=g("<tr/>").appendTo(i.find("tbody"));i.find("thead, tfoot").remove();i.append(g(a.nTHead).clone()).append(g(a.nTFoot).clone());i.find("tfoot th, tfoot td").css("width","");n=qa(a,i.find("thead")[0]);for(m=0;m<j.length;m++)o=c[j[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?u(o.sWidthOrig):"";if(a.aoData.length)for(m=0;m<j.length;m++)q=j[m],o=c[q],g(Gb(a,q)).clone(!1).append(o.sContentPadding).appendTo(t);q=g("<div/>").css(f||d?{position:"absolute",top:0,
left:0,height:1,right:0,overflow:"hidden"}:{}).append(i).appendTo(k);f&&h?i.width(h):f?(i.css("width","auto"),i.width()<k.clientWidth&&i.width(k.clientWidth)):d?i.width(k.clientWidth):l&&i.width(l);if(f){for(m=h=0;m<j.length;m++)o=c[j[m]],d=p.bBounding?n[m].getBoundingClientRect().width:g(n[m]).outerWidth(),h+=null===o.sWidthOrig?d:parseInt(o.sWidth,10)+d-g(n[m]).width();i.width(u(h));b.style.width=u(h)}for(m=0;m<j.length;m++)if(o=c[j[m]],p=g(n[m]).width())o.sWidth=u(p);b.style.width=u(i.css("width"));
q.remove()}l&&(b.style.width=u(l));if((l||f)&&!a._reszEvt)b=function(){g(Fa).bind("resize.DT-"+a.sInstance,ua(function(){Y(a)}))},e?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,e,d;return function(){var b=this,h=+new Date,i=arguments;e&&h<e+c?(clearTimeout(d),d=setTimeout(function(){e=k;a.apply(b,i)},c)):(e=h,a.apply(b,i))}}function Fb(a,b){if(!a)return 0;var c=g("<div/>").css("width",u(a)).appendTo(b||T.body),e=c[0].offsetWidth;c.remove();return e}function Gb(a,b){var c=
Hb(a,b);if(0>c)return null;var e=a.aoData[c];return!e.nTr?g("<td/>").html(y(a,c,b,"display"))[0]:e.anCells[b]}function Hb(a,b){for(var c,e=-1,d=-1,f=0,h=a.aoData.length;f<h;f++)c=y(a,f,b,"display")+"",c=c.replace(ac,""),c.length>e&&(e=c.length,d=f);return d}function u(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function Ib(){var a=m.__scrollbarWidth;if(a===k){var b=g("<p/>").css({position:"absolute",top:0,left:0,width:"100%",height:150,padding:0,overflow:"scroll",
visibility:"hidden"}).appendTo("body"),a=b[0].offsetWidth-b[0].clientWidth;m.__scrollbarWidth=a;b.remove()}return a}function V(a){var b,c,e=[],d=a.aoColumns,f,h,i,j;b=a.aaSortingFixed;c=g.isPlainObject(b);var n=[];f=function(a){a.length&&!g.isArray(a[0])?n.push(a):n.push.apply(n,a)};g.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){j=n[a][0];f=d[j].aDataSort;b=0;for(c=f.length;b<c;b++)h=f[b],i=d[h].sType||"string",n[a]._idx===k&&(n[a]._idx=g.inArray(n[a][1],
d[h].asSorting)),e.push({src:j,col:h,dir:n[a][1],index:n[a]._idx,type:i,formatter:m.ext.type.order[i+"-pre"]})}return e}function mb(a){var b,c,e=[],d=m.ext.type.order,f=a.aoData,h=0,i,g=a.aiDisplayMaster,n;Ia(a);n=V(a);b=0;for(c=n.length;b<c;b++)i=n[b],i.formatter&&h++,Jb(a,i.col);if("ssp"!=z(a)&&0!==n.length){b=0;for(c=g.length;b<c;b++)e[g[b]]=b;h===n.length?g.sort(function(a,b){var c,d,h,i,g=n.length,j=f[a]._aSortData,k=f[b]._aSortData;for(h=0;h<g;h++)if(i=n[h],c=j[i.col],d=k[i.col],c=c<d?-1:c>
d?1:0,0!==c)return"asc"===i.dir?c:-c;c=e[a];d=e[b];return c<d?-1:c>d?1:0}):g.sort(function(a,b){var c,h,i,g,j=n.length,k=f[a]._aSortData,m=f[b]._aSortData;for(i=0;i<j;i++)if(g=n[i],c=k[g.col],h=m[g.col],g=d[g.type+"-"+g.dir]||d["string-"+g.dir],c=g(c,h),0!==c)return c;c=e[a];h=e[b];return c<h?-1:c>h?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,e=a.aoColumns,d=V(a),a=a.oLanguage.oAria,f=0,h=e.length;f<h;f++){c=e[f];var i=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var g=c.nTh;g.removeAttribute("aria-sort");
c.bSortable&&(0<d.length&&d[0].col==f?(g.setAttribute("aria-sort","asc"==d[0].dir?"ascending":"descending"),c=i[d[0].index+1]||i[0]):c=i[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);g.setAttribute("aria-label",b)}}function Va(a,b,c,e){var d=a.aaSorting,f=a.aoColumns[b].asSorting,h=function(a,b){var c=a._idx;c===k&&(c=g.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof d[0]&&(d=a.aaSorting=[d]);c&&a.oFeatures.bSortMulti?(c=g.inArray(b,D(d,"0")),-1!==c?(b=h(d[c],!0),null===
b&&1===d.length&&(b=0),null===b?d.splice(c,1):(d[c][1]=f[b],d[c]._idx=b)):(d.push([b,f[0],0]),d[d.length-1]._idx=0)):d.length&&d[0][0]==b?(b=h(d[0]),d.length=1,d[0][1]=f[b],d[0]._idx=b):(d.length=0,d.push([b,f[0]]),d[0]._idx=0);R(a);"function"==typeof e&&e(a)}function Pa(a,b,c,e){var d=a.aoColumns[c];Wa(b,{},function(b){!1!==d.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,e);"ssp"!==z(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,e))})}function xa(a){var b=a.aLastSort,
c=a.oClasses.sSortColumn,e=V(a),d=a.oFeatures,f,h;if(d.bSort&&d.bSortClasses){d=0;for(f=b.length;d<f;d++)h=b[d].src,g(D(a.aoData,"anCells",h)).removeClass(c+(2>d?d+1:3));d=0;for(f=e.length;d<f;d++)h=e[d].src,g(D(a.aoData,"anCells",h)).addClass(c+(2>d?d+1:3))}a.aLastSort=e}function Jb(a,b){var c=a.aoColumns[b],e=m.ext.order[c.sSortDataType],d;e&&(d=e.call(a.oInstance,a,b,aa(a,b)));for(var f,h=m.ext.type.order[c.sType+"-pre"],i=0,g=a.aoData.length;i<g;i++)if(c=a.aoData[i],c._aSortData||(c._aSortData=
[]),!c._aSortData[b]||e)f=e?d[i]:y(a,i,b,"sort"),c._aSortData[b]=h?h(f):f}function ya(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:g.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:g.map(a.aoColumns,function(b,e){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[e])}})};w(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Lb(a){var b,c,e=
a.aoColumns;if(a.oFeatures.bStateSave){var d=a.fnStateLoadCallback.call(a.oInstance,a);if(d&&d.time&&(b=w(a,"aoStateLoadParams","stateLoadParams",[a,d]),-1===g.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&d.time<+new Date-1E3*b)&&e.length===d.columns.length))){a.oLoadedState=g.extend(!0,{},d);d.start!==k&&(a._iDisplayStart=d.start,a.iInitDisplayStart=d.start);d.length!==k&&(a._iDisplayLength=d.length);d.order!==k&&(a.aaSorting=[],g.each(d.order,function(b,c){a.aaSorting.push(c[0]>=e.length?[0,c[1]]:
c)}));d.search!==k&&g.extend(a.oPreviousSearch,Bb(d.search));b=0;for(c=d.columns.length;b<c;b++){var f=d.columns[b];f.visible!==k&&(e[b].bVisible=f.visible);f.search!==k&&g.extend(a.aoPreSearchCols[b],Bb(f.search))}w(a,"aoStateLoaded","stateLoaded",[a,d])}}}function za(a){var b=m.settings,a=g.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function J(a,b,c,e){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;e&&(c+=". For more information about this error, please see http://datatables.net/tn/"+
e);if(b)Fa.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&w(a,null,"error",[a,e,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,e,c)}}function F(a,b,c,e){g.isArray(c)?g.each(c,function(c,f){g.isArray(f)?F(a,b,f[0],f[1]):F(a,b,f)}):(e===k&&(e=c),b[c]!==k&&(a[e]=b[c]))}function Mb(a,b,c){var e,d;for(d in b)b.hasOwnProperty(d)&&(e=b[d],g.isPlainObject(e)?(g.isPlainObject(a[d])||(a[d]={}),g.extend(!0,a[d],e)):a[d]=c&&"data"!==d&&"aaData"!==
d&&g.isArray(e)?e.slice():e);return a}function Wa(a,b,c){g(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function A(a,b,c,e){c&&a[b].push({fn:c,sName:e})}function w(a,b,c,e){var d=[];b&&(d=g.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,e)}));null!==c&&(b=g.Event(c+".dt"),g(a.nTable).trigger(b,e),d.push(b.result));return d}function Ta(a){var b=a._iDisplayStart,
c=a.fnDisplayEnd(),e=a._iDisplayLength;b>=c&&(b=c-e);b-=b%e;if(-1===e||0>b)b=0;a._iDisplayStart=b}function Qa(a,b){var c=a.renderer,e=m.ext.renderer[b];return g.isPlainObject(c)&&c[b]?e[c[b]]||e._:"string"===typeof c?e[c]||e._:e._}function z(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Nb.numbers_length,e=Math.floor(c/2);b<=c?c=W(0,b):a<=e?(c=W(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-e?c=W(b-(c-2),b):(c=W(a-e+2,a+e-1),c.push("ellipsis"),
c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){g.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Xa)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Xa)}},function(b,c){v.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(v.type.search[b+a]=v.type.search.html)})}function Ob(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,
b)}}var m,v,t,p,s,Ya={},Pb=/[\r\n]/g,Ca=/<.*?>/g,bc=/^[\w\+\-]/,cc=/[\w\+\-]$/,Zb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Xa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,K=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Rb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var e="string"===typeof a;
if(K(a))return!0;b&&e&&(a=Rb(a,b));c&&e&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return K(a)?!0:!(K(a)||"string"===typeof a)?null:Za(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var e=[],d=0,f=a.length;if(c!==k)for(;d<f;d++)a[d]&&a[d][b]&&e.push(a[d][b][c]);else for(;d<f;d++)a[d]&&e.push(a[d][b]);return e},ia=function(a,b,c,e){var d=[],f=0,h=b.length;if(e!==k)for(;f<h;f++)a[b[f]][c]&&d.push(a[b[f]][c][e]);else for(;f<h;f++)d.push(a[b[f]][c]);return d},
W=function(a,b){var c=[],e;b===k?(b=0,e=a):(e=b,b=a);for(var d=b;d<e;d++)c.push(d);return c},Tb=function(a){for(var b=[],c=0,e=a.length;c<e;c++)a[c]&&b.push(a[c]);return b},Oa=function(a){var b=[],c,e,d=a.length,f,h=0;e=0;a:for(;e<d;e++){c=a[e];for(f=0;f<h;f++)if(b[f]===c)continue a;b.push(c);h++}return b},B=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,U=/\(\)$/,wa=g("<div>")[0],$b=wa.textContent!==k,ac=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,
b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[v.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),e=g.isArray(a)&&(g.isArray(a[0])||g.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return e.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],e=c.oScroll;a===k||a?b.draw(!1):(""!==e.sX||""!==e.sY)&&Z(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();
(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var e=this.api(!0),a=e.rows(a),d=a.settings()[0],g=d.aoData[a[0][0]];a.remove();b&&b.call(this,d,g);(c===k||c)&&e.draw();return g};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,e,d,g){d=this.api(!0);null===b||b===k?d.search(a,c,e,g):d.column(b).search(a,c,e,g);d.draw()};this.fnGetData=function(a,b){var c=
this.api(!0);if(a!==k){var e=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==e||"th"==e?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};
this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[v.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,e,d){var g=
this.api(!0);c===k||null===c?g.row(b).data(a):g.cell(b,c).data(a);(d===k||d)&&g.columns.adjust();(e===k||e)&&g.draw();return 0};this.fnVersionCheck=v.fnVersionCheck;var b=this,c=a===k,e=this.length;c&&(a={});this.oApi=this.internal=v.internal;for(var d in m.ext.internal)d&&(this[d]=Ob(d));this.each(function(){var d={},d=1<e?Mb(d,a,!0):a,h=0,i,j=this.getAttribute("id"),n=!1,l=m.defaults,r=g(this);if("table"!=this.nodeName.toLowerCase())J(null,0,"Non-table node initialisation ("+this.nodeName+")",2);
else{eb(l);fb(l.column);I(l,l,!0);I(l.column,l.column,!0);I(l,g.extend(d,r.data()));var q=m.settings,h=0;for(i=q.length;h<i;h++){var p=q[h];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){h=d.bRetrieve!==k?d.bRetrieve:l.bRetrieve;if(c||h)return p.oInstance;if(d.bDestroy!==k?d.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{J(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){q.splice(h,1);break}}if(null===j||""===j)this.id=j="DataTables_Table_"+
m.ext._unique++;var o=g.extend(!0,{},m.models.oSettings,{sDestroyWidth:r[0].style.width,sInstance:j,sTableId:j});o.nTable=this;o.oApi=b.internal;o.oInit=d;q.push(o);o.oInstance=1===b.length?b:r.dataTable();eb(d);d.oLanguage&&S(d.oLanguage);d.aLengthMenu&&!d.iDisplayLength&&(d.iDisplayLength=g.isArray(d.aLengthMenu[0])?d.aLengthMenu[0][0]:d.aLengthMenu[0]);d=Mb(g.extend(!0,{},l),d);F(o.oFeatures,d,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
F(o,d,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,d,[["sScrollX","sX"],["sScrollXInner",
"sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,d,"fnInfoCallback");A(o,"aoDrawCallback",d.fnDrawCallback,"user");A(o,"aoServerParams",d.fnServerParams,"user");A(o,"aoStateSaveParams",d.fnStateSaveParams,"user");A(o,"aoStateLoadParams",d.fnStateLoadParams,"user");A(o,"aoStateLoaded",d.fnStateLoaded,"user");A(o,"aoRowCallback",d.fnRowCallback,"user");A(o,"aoRowCreatedCallback",d.fnCreatedRow,"user");A(o,"aoHeaderCallback",d.fnHeaderCallback,"user");A(o,"aoFooterCallback",
d.fnFooterCallback,"user");A(o,"aoInitComplete",d.fnInitComplete,"user");A(o,"aoPreDrawCallback",d.fnPreDrawCallback,"user");o.rowIdFn=P(d.rowId);j=o.oClasses;d.bJQueryUI?(g.extend(j,m.ext.oJUIClasses,d.oClasses),d.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?g.isPlainObject(o.renderer)&&!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":g.extend(j,m.ext.classes,d.oClasses);r.addClass(j.sTable);if(""!==o.oScroll.sX||""!==o.oScroll.sY)o.oScroll.iBarWidth=
Ib();o.iInitDisplayStart===k&&(o.iInitDisplayStart=d.iDisplayStart,o._iDisplayStart=d.iDisplayStart);null!==d.iDeferLoading&&(o.bDeferLoading=!0,h=g.isArray(d.iDeferLoading),o._iRecordsDisplay=h?d.iDeferLoading[0]:d.iDeferLoading,o._iRecordsTotal=h?d.iDeferLoading[1]:d.iDeferLoading);var t=o.oLanguage;g.extend(!0,t,d.oLanguage);""!==t.sUrl&&(g.ajax({dataType:"json",url:t.sUrl,success:function(a){S(a);I(l.oLanguage,a);g.extend(true,t,a);ha(o)},error:function(){ha(o)}}),n=!0);null===d.asStripeClasses&&
(o.asStripeClasses=[j.sStripeOdd,j.sStripeEven]);var h=o.asStripeClasses,s=r.children("tbody").find("tr").eq(0);-1!==g.inArray(!0,g.map(h,function(a){return s.hasClass(a)}))&&(g("tbody tr",this).removeClass(h.join(" ")),o.asDestroyStripes=h.slice());q=[];h=this.getElementsByTagName("thead");0!==h.length&&(ea(o.aoHeader,h[0]),q=qa(o));if(null===d.aoColumns){p=[];h=0;for(i=q.length;h<i;h++)p.push(null)}else p=d.aoColumns;h=0;for(i=p.length;h<i;h++)Ga(o,q?q[h]:null);ib(o,d.aoColumnDefs,p,function(a,
b){ka(o,a,b)});if(s.length){var u=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};g.each(na(o,s[0]).cells,function(a,b){var c=o.aoColumns[a];if(c.mData===a){var e=u(b,"sort")||u(b,"order"),d=u(b,"filter")||u(b,"search");if(e!==null||d!==null){c.mData={_:a+".display",sort:e!==null?a+".@data-"+e:k,type:e!==null?a+".@data-"+e:k,filter:d!==null?a+".@data-"+d:k};ka(o,a)}}})}var v=o.oFeatures;d.bStateSave&&(v.bStateSave=!0,Lb(o,d),A(o,"aoDrawCallback",ya,"state_save"));if(d.aaSorting===k){q=
o.aaSorting;h=0;for(i=q.length;h<i;h++)q[h][1]=o.aoColumns[h].asSorting[0]}xa(o);v.bSort&&A(o,"aoDrawCallback",function(){if(o.bSorted){var a=V(o),b={};g.each(a,function(a,c){b[c.src]=c.dir});w(o,null,"order",[o,a,b]);Kb(o)}});A(o,"aoDrawCallback",function(){(o.bSorted||z(o)==="ssp"||v.bDeferRender)&&xa(o)},"sc");gb(o);h=r.children("caption").each(function(){this._captionSide=r.css("caption-side")});i=r.children("thead");0===i.length&&(i=g("<thead/>").appendTo(this));o.nTHead=i[0];i=r.children("tbody");
0===i.length&&(i=g("<tbody/>").appendTo(this));o.nTBody=i[0];i=r.children("tfoot");if(0===i.length&&0<h.length&&(""!==o.oScroll.sX||""!==o.oScroll.sY))i=g("<tfoot/>").appendTo(this);0===i.length||0===i.children().length?r.addClass(j.sNoFooter):0<i.length&&(o.nTFoot=i[0],ea(o.aoFooter,o.nTFoot));if(d.aaData)for(h=0;h<d.aaData.length;h++)L(o,d.aaData[h]);else(o.bDeferLoading||"dom"==z(o))&&ma(o,g(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();o.bInitialised=!0;!1===n&&ha(o)}});b=null;
return this};var Ub=[],x=Array.prototype,dc=function(a){var b,c,e=m.settings,d=g.map(e,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=g.inArray(a,d),-1!==b?[e[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=g(a):a instanceof g&&(c=a)}else return[];if(c)return c.map(function(){b=g.inArray(this,d);return-1!==b?e[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,
b);var c=[],e=function(a){(a=dc(a))&&c.push.apply(c,a)};if(g.isArray(a))for(var d=0,f=a.length;d<f;d++)e(a[d]);else e(a);this.context=Oa(c);b&&this.push.apply(this,b.toArray?b.toArray():b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;g.extend(t.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,e=this.length;c<e;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,e=this.length;c<e;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,e){var d=[],f,h,g,j,n,l=this.context,
m,q,p=this.selector;"string"===typeof a&&(e=c,c=b,b=a,a=!1);h=0;for(g=l.length;h<g;h++){var o=new t(l[h]);if("table"===b)f=c.call(o,l[h],h),f!==k&&d.push(f);else if("columns"===b||"rows"===b)f=c.call(o,l[h],this[h],h),f!==k&&d.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){q=this[h];"column-rows"===b&&(m=Da(l[h],p.opts));j=0;for(n=q.length;j<n;j++)f=q[j],f="cell"===b?c.call(o,l[h],f.row,f.column,h,j):c.call(o,l[h],f,h,j,m),f!==k&&d.push(f)}}return d.length||e?(a=new t(l,a?
d.concat.apply([],d):d),b=a.selector,b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=x.map.call(this,a,this);else for(var c=0,e=this.length;c<e;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return hb(this,a,b,0,this.length,
1)},reduceRight:x.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return g(this)},toJQuery:function(){return g(this)},unique:function(){return new t(this.context,Oa(this))},unshift:x.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var e,d,f,h=function(a,b,c){return function(){var e=b.apply(a,arguments);t.extend(e,
e,c.methodExt);return e}};e=0;for(d=c.length;e<d;e++)f=c[e],b[f.name]="function"===typeof f.val?h(a,f.val,f):g.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(g.isArray(a))for(var c=0,e=a.length;c<e;c++)t.register(a[c],b);else for(var d=a.split("."),f=Ub,h,i,c=0,e=d.length;c<e;c++){h=(i=-1!==d[c].indexOf("()"))?d[c].replace("()",""):d[c];var j;a:{j=0;for(var n=f.length;j<n;j++)if(f[j].name===h){j=f[j];break a}j=null}j||(j={name:h,
val:{},methodExt:[],propExt:[]},f.push(j));c===e-1?j.val=b:f=i?j.methodExt:j.propExt}};t.registerPlural=s=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?g.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var e=g.map(c,function(a){return a.nTable}),a=g(e).filter(a).map(function(){var a=g.inArray(this,e);return c[a]}).toArray();
b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});s("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});s("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});s("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});s("tables().footer()","table().footer()",
function(){return this.iterator("table",function(a){return a.nTFoot},1)});s("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?M(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),R(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ua(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;
var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,e=a.fnRecordsDisplay(),d=-1===c;return{page:d?0:Math.floor(b/c),pages:d?1:Math.ceil(e/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:e,serverSide:"ssp"===z(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Sa(b,a)})});var Vb=function(a,b,c){if(c){var e=new t(a);e.one("draw",function(){c(e.ajax.json())})}if("ssp"==
z(a))R(a,b);else{C(a,!0);var d=a.jqXHR;d&&4!==d.readyState&&d.abort();ra(a,[],function(c){oa(a);for(var c=sa(a,c),e=0,d=c.length;e<d;e++)L(a,c[e]);R(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;
b=b[0];return b.ajax?g.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){g.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var $a=function(a,b,c,e,d){var f=[],h,i,j,n,l,m;j=typeof b;if(!b||"string"===j||"function"===j||b.length===k)b=[b];j=0;for(n=b.length;j<n;j++){i=b[j]&&b[j].split?b[j].split(","):[b[j]];l=0;for(m=i.length;l<m;l++)(h=c("string"===typeof i[l]?
g.trim(i[l]):i[l]))&&h.length&&f.push.apply(f,h)}a=v.selector[a];if(a.length){j=0;for(n=a.length;j<n;j++)f=a[j](e,d,f)}return f},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return g.extend({search:"none",order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,e,d,f=[],h=a.aiDisplay;c=a.aiDisplayMaster;var i=b.search;e=b.order;
d=b.page;if("ssp"==z(a))return"removed"===i?[]:W(0,c.length);if("current"==d){c=a._iDisplayStart;for(e=a.fnDisplayEnd();c<e;c++)f.push(h[c])}else if("current"==e||"applied"==e)f="none"==i?c.slice():"applied"==i?h.slice():g.map(c,function(a){return-1===g.inArray(a,h)?a:null});else if("index"==e||"original"==e){c=0;for(e=a.aoData.length;c<e;c++)"none"==i?f.push(c):(d=g.inArray(c,h),(-1===d&&"removed"==i||0<=d&&"applied"==i)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":g.isPlainObject(a)&&
(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=b;return $a("row",a,function(a){var b=Qb(a);if(b!==null&&!d)return[b];var i=Da(c,d);if(b!==null&&g.inArray(b,i)!==-1)return[b];if(!a)return i;if(typeof a==="function")return g.map(i,function(b){var d=c.aoData[b];return a(b,d._aData,d.nTr)?b:null});b=Tb(ia(c.aoData,i,"nTr"));if(a.nodeName&&g.inArray(a,b)!==-1)return[a._DT_RowIndex];if(typeof a==="string"&&a.charAt(0)==="#"){i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return g(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},
c,d)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ia(a.aoData,b,"_aData")},1)});s("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var e=b.aoData[c];return"search"===a?e._aFilterData:e._aSortData},1)});s("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",
function(b,c){da(b,c,a)})});s("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});s("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,e=0,d=c.length;e<d;e++)for(var f=0,h=this[e].length;f<h;f++){var g=c[e].rowIdFn(c[e].aoData[this[e][f]]._aData);b.push((!0===a?"#":"")+g)}return new t(c,b)});s("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,e){var d=b.aoData;d.splice(c,1);for(var f=0,h=d.length;f<
h;f++)null!==d[f].nTr&&(d[f].nTr._DT_RowIndex=f);pa(b.aiDisplayMaster,c);pa(b.aiDisplay,c);pa(a[e],c,!1);Ta(b)});this.iterator("table",function(a){for(var c=0,e=a.aoData.length;c<e;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,h,g=[];f=0;for(h=a.length;f<h;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?g.push(ma(b,c)[0]):g.push(L(b,c));return g},1),c=this.rows(-1);c.pop();c.push.apply(c,b.toArray());return c});p("row()",function(a,
b){return bb(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof g&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:L(b,a)});
return this.row(b[0])});var cb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var e=c[0].aoData[a[0]];if(e._details){(e._detailsShow=b)?e._details.insertAfter(e.nTr):e._details.detach();var d=c[0],f=new t(d),h=d.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(h,"_details").length&&(f.on("draw.dt.DT_details",function(a,
b){d===b&&f.rows({page:"current"}).eq(0).each(function(a){a=h[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(d===b)for(var c,e=ba(b),f=0,g=h.length;f<g;f++)c=h[f],c._details&&c._details.children("td[colspan]").attr("colspan",e)}),f.on("destroy.dt.DT_details",function(a,b){if(d===b)for(var c=0,e=h.length;c<e;c++)h[c]._details&&cb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:
k;if(!0===a)this.child.show();else if(!1===a)cb(this);else if(c.length&&this.length){var e=c[0],c=c[0].aoData[this[0]],d=[],f=function(a,b){if(g.isArray(a)||a instanceof g)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?d.push(a):(c=g("<tr><td/></tr>").addClass(b),g("td",c).addClass(b).html(a)[0].colSpan=ba(e),d.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=g(d);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()",
"row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var ec=/^(.+):(name|visIdx|visible)$/,Xb=function(a,b,c,e,d){for(var c=[],e=0,f=d.length;e<f;e++)c.push(y(a,d[e],b));return c};p("columns()",
function(a,b){a===k?a="":g.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var d=a,f=b,h=c.aoColumns,i=D(h,"sName"),j=D(h,"nTh");return $a("column",d,function(a){var b=Qb(a);if(a==="")return W(h.length);if(b!==null)return[b>=0?b:h.length+b];if(typeof a==="function"){var d=Da(c,f);return g.map(h,function(b,f){return a(f,Xb(c,f,0,0,d),j[f])?f:null})}var k=typeof a==="string"?a.match(ec):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=
g.map(h,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[la(c,b)];case "name":return g.map(i,function(a,b){return a===k[1]?b:null})}else return g(j).filter(a).map(function(){return g.inArray(this,j)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});s("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});s("columns().footer()","column().footer()",function(){return this.iterator("column",
function(a,b){return a.aoColumns[b].nTf},1)});s("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});s("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});s("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,e,d,f){return ia(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});s("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",
function(a,b,c,e,d){return ia(a.aoData,d,"anCells",b)},1)});s("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,e){if(a===k)return c.aoColumns[e].bVisible;var d=c.aoColumns,f=d[e],h=c.aoData,i,j,n;if(a!==k&&f.bVisible!==a){if(a){var l=g.inArray(!0,D(d,"bVisible"),e+1);i=0;for(j=h.length;i<j;i++)n=h[i].nTr,d=h[i].anCells,n&&n.insertBefore(d[e],d[l]||null)}else g(D(c.aoData,"anCells",e)).detach();f.bVisible=a;fa(c,c.aoHeader);fa(c,c.aoFooter);if(b===k||
b)Y(c),(c.oScroll.sX||c.oScroll.sY)&&Z(c);w(c,null,"column-visibility",[c,e,a]);ya(c)}})});s("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Y(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return la(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",
function(a,b){return bb(this.columns(a,b))});p("cells()",function(a,b,c){g.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));g.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var e=a,d=ab(c),f=b.aoData,h=Da(b,d),i=Tb(ia(f,h,"anCells")),j=g([].concat.apply([],i)),l,n=b.aoColumns.length,m,p,t,s,u,v;return $a("cell",e,function(a){var c=typeof a==="function";if(a===null||a===k||c){m=[];p=0;for(t=h.length;p<t;p++){l=h[p];for(s=0;s<n;s++){u={row:l,column:s};
if(c){v=b.aoData[l];a(u,y(b,l,s),v.anCells?v.anCells[s]:null)&&m.push(u)}else m.push(u)}}return m}return g.isPlainObject(a)?[a]:j.filter(a).map(function(a,b){l=b.parentNode._DT_RowIndex;return{row:l,column:g.inArray(b,f[l].anCells)}}).toArray()},b,d)});var e=this.columns(b,c),d=this.rows(a,c),f,h,i,j,n,l=this.iterator("table",function(a,b){f=[];h=0;for(i=d[b].length;h<i;h++){j=0;for(n=e[b].length;j<n;j++)f.push({row:d[b][h],column:e[b][j]})}return f},1);g.extend(l.selector,{cols:b,rows:a,opts:c});
return l});s("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return y(a,b,c)},1)});s("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,e){return b.aoData[c][a][e]},1)});s("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,e){return y(b,
c,e,a)},1)});s("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});s("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,e){da(b,c,a,e)})});p("cell()",function(a,b,c){return bb(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?y(b[0],c[0].row,c[0].column):k;Ja(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,
"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:g.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(e){Pa(e,a,b,c)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,e){var d=[];g.each(b[e],
function(b,c){d.push([c,a])});c.aaSorting=d})});p("search()",function(a,b,c,e){var d=this.context;return a===k?0!==d.length?d[0].oPreviousSearch.sSearch:k:this.iterator("table",function(d){d.oFeatures.bFilter&&ga(d,g.extend({},d.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),1)})});s("columns().search()","column().search()",function(a,b,c,e){return this.iterator("column",function(d,f){var h=d.aoPreSearchCols;if(a===k)return h[f].sSearch;d.oFeatures.bFilter&&
(g.extend(h[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===e?!0:e}),ga(d,d.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});
m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,e,d=0,f=a.length;d<f;d++)if(c=parseInt(b[d],10)||0,e=parseInt(a[d],10)||0,c!==e)return c>e;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=g(a).get(0),c=!1;g.each(m.settings,function(a,d){var f=d.nScrollHead?g("table",d.nScrollHead)[0]:null,h=d.nScrollFoot?g("table",d.nScrollFoot)[0]:null;if(d.nTable===b||f===b||h===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;g.isPlainObject(a)&&(b=
a.api,a=a.visible);var c=g.map(m.settings,function(b){if(!a||a&&g(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=I;p("$()",function(a,b){var c=this.rows(b).nodes(),c=g(c);return g([].concat(c.filter(a).toArray(),c.find(a).toArray()))});g.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0].match(/\.dt\b/)||(a[0]+=".dt");var e=g(this.tables().nodes());e[b].apply(e,a);return this})});
p("clear()",function(){return this.iterator("table",function(a){oa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,e=b.oClasses,d=b.nTable,f=b.nTBody,h=b.nTHead,i=b.nTFoot,j=g(d),f=g(f),
k=g(b.nTableWrapper),l=g.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;w(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");g(Fa).unbind(".DT-"+b.sInstance);d!=h.parentNode&&(j.children("thead").detach(),j.append(h));i&&d!=i.parentNode&&(j.children("tfoot").detach(),j.append(i));b.aaSorting=[];b.aaSortingFixed=[];xa(b);g(l).removeClass(b.asStripeClasses.join(" "));g("th, td",h).removeClass(e.sSortable+" "+e.sSortableAsc+
" "+e.sSortableDesc+" "+e.sSortableNone);b.bJUI&&(g("th span."+e.sSortIcon+", td span."+e.sSortIcon,h).detach(),g("th, td",h).each(function(){var a=g("div."+e.sSortJUIWrapper,this);g(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);h=a?"remove":"detach";j[h]();k[h]();!a&&c&&(c.insertBefore(d,b.nTableReinsertBefore),j.css("width",b.sDestroyWidth).removeClass(e.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){g(this).addClass(b.asDestroyStripes[a%p])}));
c=g.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});g.each(["column","row","cell"],function(a,b){p(b+"s().every()",function(a){return this.iterator(b,function(e,d,f,h,g){a.call((new t(e))[b](d,"cell"===b?f:k),d,f,h,g)})})});p("i18n()",function(a,b,c){var e=this.context[0],a=P(a)(e.oLanguage);a===k&&(a=b);c!==k&&g.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.9-dev";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};
m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,
sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:g.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
X(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};X(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],
aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],
sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==z(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==z(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,
b=this._iDisplayStart,c=b+a,e=this.aiDisplay.length,d=this.oFeatures,f=d.bPaginate;return d.bServerSide?!1===f||-1===a?b+e:Math.min(b+a,this._iRecordsDisplay):!f||c>e||-1===a?e:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=v={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],
search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};g.extend(v,{afnFiltering:v.search,aTypes:v.type.detect,ofnSearch:v.type.search,oSort:v.type.order,afnSortData:v.order,aoFeatures:v.feature,oApi:v.internal,oStdClasses:v.classes,oPagination:v.pager});g.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",
sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",
sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ja=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";g.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+
G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ja+"triangle-1-n",sSortJUIDesc:ja+"triangle-1-s",sSortJUI:ja+"carat-2-n-s",sSortJUIAscAllowed:ja+"carat-1-n",sSortJUIDescAllowed:ja+
"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;g.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,b)]},simple_numbers:function(a,b){return["previous",Aa(a,
b),"next"]},full_numbers:function(a,b){return["first","previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});g.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,e,d,f){var h=a.oClasses,i=a.oLanguage.oPaginate,j,k,l=0,m=function(b,e){var p,q,t,s,u=function(b){Ua(a,b.data.action,true)};p=0;for(q=e.length;p<q;p++){s=e[p];if(g.isArray(s)){t=g("<"+(s.DT_el||"div")+"/>").appendTo(b);m(t,s)}else{j=null;k="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;
case "first":j=i.sFirst;k=s+(d>0?"":" "+h.sPageButtonDisabled);break;case "previous":j=i.sPrevious;k=s+(d>0?"":" "+h.sPageButtonDisabled);break;case "next":j=i.sNext;k=s+(d<f-1?"":" "+h.sPageButtonDisabled);break;case "last":j=i.sLast;k=s+(d<f-1?"":" "+h.sPageButtonDisabled);break;default:j=s+1;k=d===s?h.sPageButtonActive:""}if(j!==null){t=g("<a>",{"class":h.sPageButton+" "+k,"aria-controls":a.sTableId,"data-dt-idx":l,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(j).appendTo(b);
Wa(t,{action:s},u);l++}}}},p;try{p=g(b).find(T.activeElement).data("dt-idx")}catch(t){}m(g(b).empty(),e);p&&g(b).find("[data-dt-idx="+p+"]").focus()}}});g.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!bc.test(a)||!cc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||K(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;
return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return K(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);g.extend(m.ext.type.search,{html:function(a){return K(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return K(a)?a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,e){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),
e&&(a=a.replace(e,"")));return 1*a};g.extend(v.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return K(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return K(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");g.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,e){g(a.nTable).on("order.dt.DT",function(d,
f,h,g){if(a===f){d=c.idx;b.removeClass(c.sSortingClass+" "+e.sSortAsc+" "+e.sSortDesc).addClass(g[d]=="asc"?e.sSortAsc:g[d]=="desc"?e.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,e){g("<div/>").addClass(e.sSortJUIWrapper).append(b.contents()).append(g("<span/>").addClass(e.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);g(a.nTable).on("order.dt.DT",function(d,f,h,g){if(a===f){d=c.idx;b.removeClass(e.sSortAsc+" "+e.sSortDesc).addClass(g[d]=="asc"?e.sSortAsc:g[d]=="desc"?e.sSortDesc:c.sSortingClass);
b.find("span."+e.sSortIcon).removeClass(e.sSortJUIAsc+" "+e.sSortJUIDesc+" "+e.sSortJUI+" "+e.sSortJUIAscAllowed+" "+e.sSortJUIDescAllowed).addClass(g[d]=="asc"?e.sSortJUIAsc:g[d]=="desc"?e.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,e,d){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",f=Math.abs(parseFloat(f)),i=parseInt(f,10),f=c?b+(f-i).toFixed(c).substring(2):"";return g+(e||"")+i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
a)+f+(d||"")}}}};g.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ra,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:ka,_fnAdjustColumnSizing:Y,_fnVisibleToColumnIndex:la,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:$,_fnColumnTypes:Ia,_fnApplyColumnDefs:ib,_fnHungarianMap:X,_fnCamelToHungarian:I,_fnLanguageCompat:S,_fnBrowserDetect:gb,_fnAddData:L,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==
k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return g.inArray(c,a.aoData[b].anCells)},_fnGetCellData:y,_fnSetCellData:Ja,_fnSplitObjNotation:La,_fnGetObjectDataFn:P,_fnSetObjectDataFn:Q,_fnGetDataMaster:Ma,_fnClearTable:oa,_fnDeleteIndex:pa,_fnInvalidate:da,_fnGetRowElements:na,_fnCreateTr:Ka,_fnBuildHead:kb,_fnDrawHead:fa,_fnDraw:M,_fnReDraw:R,_fnAddOptionsHtml:nb,_fnDetectHeader:ea,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ga,_fnFilterCustom:yb,_fnFilterColumn:xb,
_fnFilter:wb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ha,_fnInitComplete:ta,_fnLengthChange:Sa,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ua,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:Z,_fnApplyToChildren:H,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:u,_fnScrollBarWidth:Ib,
_fnSortFlatten:V,_fnSort:mb,_fnSortAria:Kb,_fnSortListener:Va,_fnSortAttachListener:Pa,_fnSortingClasses:xa,_fnSortData:Jb,_fnSaveState:ya,_fnLoadState:Lb,_fnSettingsFromNode:za,_fnLog:J,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:A,_fnCallbackFire:w,_fnLengthOverflow:Ta,_fnRenderer:Qa,_fnDataSource:z,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});g.fn.dataTable=m;g.fn.dataTableSettings=m.settings;g.fn.dataTableExt=m.ext;g.fn.DataTable=function(a){return g(this).dataTable(a).api()};g.each(m,function(a,
b){g.fn.DataTable[a]=b});return g.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],S):"object"===typeof exports?module.exports=S(require("jquery")):jQuery&&!jQuery.fn.dataTable&&S(jQuery)})(window,document);
/*! DataTables Bootstrap 3 integration
 * ©2011-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */

(function(window, document, undefined){

var factory = function( $, DataTable ) {
"use strict";


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'col-sm-6'l><'col-sm-6'f>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-6'i><'col-sm-6'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper form-inline dt-bootstrap",
	sFilterInput:  "form-control input-sm",
	sLengthSelect: "form-control input-sm"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var btnDisplay, btnClass;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') ) {
				api.page( e.data.action ).draw( false );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( $.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&hellip;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'aria-controls': settings.sTableId,
							'tabindex': settings.iTabIndex,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': '#'
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	attach(
		$(host).empty().html('<ul class="pagination"/>').children('ul'),
		buttons
	);
};


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn btn-default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible drop down
	$.extend( true, DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}

}; // /factory


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


})(window, document);

/*!
 Buttons for DataTables 1.1.0
 ©2015 SpryMedia Ltd - datatables.net/license
*/

(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(n){return e(n,window,document)}):"object"===typeof exports?module.exports=function(n,o){n||(n=window);if(!o||!o.fn.dataTable)o=require("datatables.net")(n,o).$;return e(o,n,n.document)}:e(jQuery,window,document)})(function(e,n,o,m){var j=e.fn.dataTable,s=0,t=0,k=j.ext.buttons,l=function(a,b){!0===b&&(b={});e.isArray(b)&&(b={buttons:b});this.c=e.extend(!0,{},l.defaults,b);b.buttons&&(this.c.buttons=b.buttons);
this.s={dt:new j.Api(a),buttons:[],subButtons:[],listenKeys:"",namespace:"dtb"+s++};this.dom={container:e("<"+this.c.dom.container.tag+"/>").addClass(this.c.dom.container.className)};this._constructor()};e.extend(l.prototype,{action:function(a,b){var c=this._indexToButton(a).conf;if(b===m)return c.action;c.action=b;return this},active:function(a,b){this._indexToButton(a).node.toggleClass(this.c.dom.button.active,b===m?!0:b);return this},add:function(a,b){if("string"===typeof a&&-1!==a.indexOf("-")){var c=
a.split("-");this.c.buttons[1*c[0]].buttons.splice(1*c[1],0,b)}else this.c.buttons.splice(1*a,0,b);this.dom.container.empty();this._buildButtons(this.c.buttons);return this},container:function(){return this.dom.container},disable:function(a){this._indexToButton(a).node.addClass(this.c.dom.button.disabled);return this},destroy:function(){e("body").off("keyup."+this.s.namespace);var a=this.s.buttons,b=this.s.subButtons,c,d,f;c=0;for(a=a.length;c<a;c++){this.removePrep(c);d=0;for(f=b[c].length;d<f;d++)this.removePrep(c+
"-"+d)}this.removeCommit();this.dom.container.remove();b=this.s.dt.settings()[0];c=0;for(a=b.length;c<a;c++)if(b.inst===this){b.splice(c,1);break}return this},enable:function(a,b){if(!1===b)return this.disable(a);this._indexToButton(a).node.removeClass(this.c.dom.button.disabled);return this},name:function(){return this.c.name},node:function(a){return this._indexToButton(a).node},removeCommit:function(){var a=this.s.buttons,b=this.s.subButtons,c,d;for(c=a.length-1;0<=c;c--)null===a[c]&&(a.splice(c,
1),b.splice(c,1),this.c.buttons.splice(c,1));c=0;for(a=b.length;c<a;c++)for(d=b[c].length-1;0<=d;d--)null===b[c][d]&&(b[c].splice(d,1),this.c.buttons[c].buttons.splice(d,1));return this},removePrep:function(a){var b,c=this.s.dt;if("number"===typeof a||-1===a.indexOf("-"))b=this.s.buttons[1*a],b.conf.destroy&&b.conf.destroy.call(c.button(a),c,b,b.conf),b.node.remove(),this._removeKey(b.conf),this.s.buttons[1*a]=null;else{var d=a.split("-");b=this.s.subButtons[1*d[0]][1*d[1]];b.conf.destroy&&b.conf.destroy.call(c.button(a),
c,b,b.conf);b.node.remove();this._removeKey(b.conf);this.s.subButtons[1*d[0]][1*d[1]]=null}return this},text:function(a,b){var c=this._indexToButton(a),d=this.c.dom.collection.buttonLiner,d="string"===typeof a&&-1!==a.indexOf("-")&&d&&d.tag?d.tag:this.c.dom.buttonLiner.tag,e=this.s.dt,g=function(a){return"function"===typeof a?a(e,c.node,c.conf):a};if(b===m)return g(c.conf.text);c.conf.text=b;d?c.node.children(d).html(g(b)):c.node.html(g(b));return this},toIndex:function(a){var b,c,d,e;d=this.s.buttons;
var g=this.s.subButtons;b=0;for(c=d.length;b<c;b++)if(d[b].node[0]===a)return b+"";b=0;for(c=g.length;b<c;b++){d=0;for(e=g[b].length;d<e;d++)if(g[b][d].node[0]===a)return b+"-"+d}},_constructor:function(){var a=this,b=this.s.dt,c=b.settings()[0];c._buttons||(c._buttons=[]);c._buttons.push({inst:this,name:this.c.name});this._buildButtons(this.c.buttons);b.on("destroy",function(){a.destroy()});e("body").on("keyup."+this.s.namespace,function(b){if(!o.activeElement||o.activeElement===o.body){var c=String.fromCharCode(b.keyCode).toLowerCase();
a.s.listenKeys.toLowerCase().indexOf(c)!==-1&&a._keypress(c,b)}})},_addKey:function(a){a.key&&(this.s.listenKeys+=e.isPlainObject(a.key)?a.key.key:a.key)},_buildButtons:function(a,b,c){var d=this.s.dt;b||(b=this.dom.container,this.s.buttons=[],this.s.subButtons=[]);for(var f=0,g=a.length;f<g;f++){var h=this._resolveExtends(a[f]);if(h)if(e.isArray(h))this._buildButtons(h,b,c);else{var i=this._buildButton(h,c!==m?!0:!1);if(i){var q=i.node;b.append(i.inserter);c===m?(this.s.buttons.push({node:q,conf:h,
inserter:i.inserter}),this.s.subButtons.push([])):this.s.subButtons[c].push({node:q,conf:h,inserter:i.inserter});h.buttons&&(i=this.c.dom.collection,h._collection=e("<"+i.tag+"/>").addClass(i.className),this._buildButtons(h.buttons,h._collection,f));h.init&&h.init.call(d.button(q),d,q,h)}}}},_buildButton:function(a,b){var c=this.c.dom.button,d=this.c.dom.buttonLiner,f=this.c.dom.collection,g=this.s.dt,h=function(b){return"function"===typeof b?b(g,i,a):b};b&&f.button&&(c=f.button);b&&f.buttonLiner&&
(d=f.buttonLiner);if(a.available&&!a.available(g,a))return!1;var i=e("<"+c.tag+"/>").addClass(c.className).attr("tabindex",this.s.dt.settings()[0].iTabIndex).attr("aria-controls",this.s.dt.table().node().id).on("click.dtb",function(b){b.preventDefault();!i.hasClass(c.disabled)&&a.action&&a.action.call(g.button(i),b,g,i,a);i.blur()}).on("keyup.dtb",function(b){b.keyCode===13&&!i.hasClass(c.disabled)&&a.action&&a.action.call(g.button(i),b,g,i,a)});d.tag?i.append(e("<"+d.tag+"/>").html(h(a.text)).addClass(d.className)):
i.html(h(a.text));!1===a.enabled&&i.addClass(c.disabled);a.className&&i.addClass(a.className);a.titleAttr&&i.attr("title",a.titleAttr);a.namespace||(a.namespace=".dt-button-"+t++);d=(d=this.c.dom.buttonContainer)?e("<"+d.tag+"/>").addClass(d.className).append(i):i;this._addKey(a);return{node:i,inserter:d}},_indexToButton:function(a){if("number"===typeof a||-1===a.indexOf("-"))return this.s.buttons[1*a];a=a.split("-");return this.s.subButtons[1*a[0]][1*a[1]]},_keypress:function(a,b){var c,d,f,g;f=
this.s.buttons;var h=this.s.subButtons,i=function(c,d){if(c.key)if(c.key===a)d.click();else if(e.isPlainObject(c.key)&&c.key.key===a&&(!c.key.shiftKey||b.shiftKey))if(!c.key.altKey||b.altKey)if(!c.key.ctrlKey||b.ctrlKey)(!c.key.metaKey||b.metaKey)&&d.click()};c=0;for(d=f.length;c<d;c++)i(f[c].conf,f[c].node);c=0;for(d=h.length;c<d;c++){f=0;for(g=h[c].length;f<g;f++)i(h[c][f].conf,h[c][f].node)}},_removeKey:function(a){if(a.key){var b=e.isPlainObject(a.key)?a.key.key:a.key,a=this.s.listenKeys.split(""),
b=e.inArray(b,a);a.splice(b,1);this.s.listenKeys=a.join("")}},_resolveExtends:function(a){for(var b=this.s.dt,c,d,f=function(c){for(var d=0;!e.isPlainObject(c)&&!e.isArray(c);){if(c===m)return;if("function"===typeof c){if(c=c(b,a),!c)return!1}else if("string"===typeof c){if(!k[c])throw"Unknown button type: "+c;c=k[c]}d++;if(30<d)throw"Buttons: Too many iterations";}return e.isArray(c)?c:e.extend({},c)},a=f(a);a&&a.extend;){if(!k[a.extend])throw"Cannot extend unknown button type: "+a.extend;var g=
f(k[a.extend]);if(e.isArray(g))return g;if(!g)return!1;c=g.className;a=e.extend({},g,a);c&&a.className!==c&&(a.className=c+" "+a.className);var h=a.postfixButtons;if(h){a.buttons||(a.buttons=[]);c=0;for(d=h.length;c<d;c++)a.buttons.push(h[c]);a.postfixButtons=null}if(h=a.prefixButtons){a.buttons||(a.buttons=[]);c=0;for(d=h.length;c<d;c++)a.buttons.splice(c,0,h[c]);a.prefixButtons=null}a.extend=g.extend}return a}});l.background=function(a,b,c){c===m&&(c=400);a?e("<div/>").addClass(b).css("display",
"none").appendTo("body").fadeIn(c):e("body > div."+b).fadeOut(c,function(){e(this).remove()})};l.instanceSelector=function(a,b){if(!a)return e.map(b,function(a){return a.inst});var c=[],d=e.map(b,function(a){return a.name}),f=function(a){if(e.isArray(a))for(var h=0,i=a.length;h<i;h++)f(a[h]);else"string"===typeof a?-1!==a.indexOf(",")?f(a.split(",")):(a=e.inArray(e.trim(a),d),-1!==a&&c.push(b[a].inst)):"number"===typeof a&&c.push(b[a].inst)};f(a);return c};l.buttonSelector=function(a,b){for(var c=
[],d=function(a,b){var f,g,j=[];e.each(b.s.buttons,function(a,b){null!==b&&j.push({node:b.node[0],name:b.name})});e.each(b.s.subButtons,function(a,b){e.each(b,function(a,b){null!==b&&j.push({node:b.node[0],name:b.name})})});f=e.map(j,function(a){return a.node});if(e.isArray(a)||a instanceof e){f=0;for(g=a.length;f<g;f++)d(a[f],b)}else if(null===a||a===m||"*"===a){f=0;for(g=j.length;f<g;f++)c.push({inst:b,idx:b.toIndex(j[f].node)})}else if("number"===typeof a)c.push({inst:b,idx:a});else if("string"===
typeof a)if(-1!==a.indexOf(",")){var k=a.split(",");f=0;for(g=k.length;f<g;f++)d(e.trim(k[f]),b)}else if(a.match(/^\d+(\-\d+)?$/))c.push({inst:b,idx:a});else if(-1!==a.indexOf(":name")){k=a.replace(":name","");f=0;for(g=j.length;f<g;f++)j[f].name===k&&c.push({inst:b,idx:b.toIndex(j[f].node)})}else e(f).filter(a).each(function(){c.push({inst:b,idx:b.toIndex(this)})});else"object"===typeof a&&a.nodeName&&(g=e.inArray(a,f),-1!==g&&c.push({inst:b,idx:b.toIndex(f[g])}))},f=0,g=a.length;f<g;f++)d(b,a[f]);
return c};l.defaults={buttons:["copy","excel","csv","pdf","print"],name:"main",tabIndex:0,dom:{container:{tag:"div",className:"dt-buttons"},collection:{tag:"div",className:"dt-button-collection"},button:{tag:"a",className:"dt-button",active:"active",disabled:"disabled"},buttonLiner:{tag:"span",className:""}}};l.version="1.1.0";e.extend(k,{collection:{text:function(a){return a.i18n("buttons.collection","Collection")},className:"buttons-collection",action:function(a,b,c,d){var a=c.offset(),b=e(b.table().container()),
f=!1;e("div.dt-button-background").length&&(f=e("div.dt-button-collection").offset(),e(o).trigger("click.dtb-collection"));d._collection.addClass(d.collectionLayout).css("display","none").appendTo("body").fadeIn(d.fade);var g=d._collection.css("position");f&&"absolute"===g?d._collection.css({top:f.top+5,left:f.left+5}):"absolute"===g?(d._collection.css({top:a.top+c.outerHeight(),left:a.left}),c=a.left+d._collection.outerWidth(),b=b.offset().left+b.width(),c>b&&d._collection.css("left",a.left-(c-b))):
(a=d._collection.height()/2,a>e(n).height()/2&&(a=e(n).height()/2),d._collection.css("marginTop",-1*a));d.background&&l.background(!0,d.backgroundClassName,d.fade);setTimeout(function(){e("div.dt-button-background").on("click.dtb-collection",function(){});e("body").on("click.dtb-collection",function(a){if(!e(a.target).parents().andSelf().filter(d._collection).length){d._collection.fadeOut(d.fade,function(){d._collection.detach()});e("div.dt-button-background").off("click.dtb-collection");l.background(false,
d.backgroundClassName,d.fade);e("body").off("click.dtb-collection")}})},10)},background:!0,collectionLayout:"",backgroundClassName:"dt-button-background",fade:400},copy:function(a,b){if(k.copyHtml5)return"copyHtml5";if(k.copyFlash&&k.copyFlash.available(a,b))return"copyFlash"},csv:function(a,b){if(k.csvHtml5&&k.csvHtml5.available(a,b))return"csvHtml5";if(k.csvFlash&&k.csvFlash.available(a,b))return"csvFlash"},excel:function(a,b){if(k.excelHtml5&&k.excelHtml5.available(a,b))return"excelHtml5";if(k.excelFlash&&
k.excelFlash.available(a,b))return"excelFlash"},pdf:function(a,b){if(k.pdfHtml5&&k.pdfHtml5.available(a,b))return"pdfHtml5";if(k.pdfFlash&&k.pdfFlash.available(a,b))return"pdfFlash"},pageLength:function(a){var a=a.settings()[0].aLengthMenu,b=e.isArray(a[0])?a[0]:a,c=e.isArray(a[0])?a[1]:a,d=function(a){return a.i18n("buttons.pageLength",{"-1":"Show all rows",_:"Show %d rows"},a.page.len())};return{extend:"collection",text:d,className:"buttons-page-length",buttons:e.map(b,function(a,b){return{text:c[b],
action:function(b,c){c.page.len(a).draw()},init:function(b,c,d){var e=this,c=function(){e.active(b.page.len()===a)};b.on("length.dt"+d.namespace,c);c()},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}),init:function(a,b,c){var e=this;a.on("length.dt"+c.namespace,function(){e.text(d(a))})},destroy:function(a,b,c){a.off("length.dt"+c.namespace)}}}});j.Api.register("buttons()",function(a,b){b===m&&(b=a,a=m);return this.iterator(!0,"table",function(c){if(c._buttons)return l.buttonSelector(l.instanceSelector(a,
c._buttons),b)},!0)});j.Api.register("button()",function(a,b){var c=this.buttons(a,b);1<c.length&&c.splice(1,c.length);return c});j.Api.register(["buttons().active()","button().active()"],function(a){return this.each(function(b){b.inst.active(b.idx,a)})});j.Api.registerPlural("buttons().action()","button().action()",function(a){return a===m?this.map(function(a){return a.inst.action(a.idx)}):this.each(function(b){b.inst.action(b.idx,a)})});j.Api.register(["buttons().enable()","button().enable()"],
function(a){return this.each(function(b){b.inst.enable(b.idx,a)})});j.Api.register(["buttons().disable()","button().disable()"],function(){return this.each(function(a){a.inst.disable(a.idx)})});j.Api.registerPlural("buttons().nodes()","button().node()",function(){var a=e();e(this.each(function(b){a=a.add(b.inst.node(b.idx))}));return a});j.Api.registerPlural("buttons().text()","button().text()",function(a){return a===m?this.map(function(a){return a.inst.text(a.idx)}):this.each(function(b){b.inst.text(b.idx,
a)})});j.Api.registerPlural("buttons().trigger()","button().trigger()",function(){return this.each(function(a){a.inst.node(a.idx).trigger("click")})});j.Api.registerPlural("buttons().containers()","buttons().container()",function(){var a=e();e(this.each(function(b){a=a.add(b.inst.container())}));return a});j.Api.register("button().add()",function(a,b){1===this.length&&this[0].inst.add(a,b);return this.button(a)});j.Api.register("buttons().destroy()",function(){this.pluck("inst").unique().each(function(a){a.destroy()});
return this});j.Api.registerPlural("buttons().remove()","buttons().remove()",function(){this.each(function(a){a.inst.removePrep(a.idx)});this.pluck("inst").unique().each(function(a){a.removeCommit()});return this});var p;j.Api.register("buttons.info()",function(a,b,c){var d=this;if(!1===a)return e("#datatables_buttons_info").fadeOut(function(){e(this).remove()}),clearTimeout(p),p=null,this;p&&clearTimeout(p);e("#datatables_buttons_info").length&&e("#datatables_buttons_info").remove();e('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a?
"<h2>"+a+"</h2>":"").append(e("<div/>")["string"===typeof b?"html":"append"](b)).css("display","none").appendTo("body").fadeIn();c!==m&&0!==c&&(p=setTimeout(function(){d.buttons.info(!1)},c));return this});j.Api.register("buttons.exportData()",function(a){if(this.context.length){for(var b=new j.Api(this.context[0]),c=e.extend(!0,{},{rows:null,columns:"",modifier:{search:"applied",order:"applied"},orthogonal:"display",stripHtml:!0,stripNewlines:!0,decodeEntities:!0,trim:!0,format:{header:function(a){return d(a)},
footer:function(a){return d(a)},body:function(a){return d(a)}}},a),d=function(a){if("string"!==typeof a)return a;c.stripHtml&&(a=a.replace(/<.*?>/g,""));c.trim&&(a=a.replace(/^\s+|\s+$/g,""));c.stripNewlines&&(a=a.replace(/\n/g," "));c.decodeEntities&&(r.innerHTML=a,a=r.value);return a},a=b.columns(c.columns).indexes().map(function(a){return c.format.header(b.column(a).header().innerHTML,a)}).toArray(),f=b.table().footer()?b.columns(c.columns).indexes().map(function(a){var d=b.column(a).footer();
return c.format.footer(d?d.innerHTML:"",a)}).toArray():null,g=b.rows(c.rows,c.modifier).indexes().toArray(),g=b.cells(g,c.columns).render(c.orthogonal).toArray(),h=a.length,i=0<h?g.length/h:0,k=Array(i),l=0,m=0;m<i;m++){for(var o=Array(h),n=0;n<h;n++)o[n]=c.format.body(g[l],n,m),l++;k[m]=o}return{header:a,footer:f,body:k}}});var r=e("<textarea/>")[0];e.fn.dataTable.Buttons=l;e.fn.DataTable.Buttons=l;e(o).on("init.dt plugin-init.dt",function(a,b){if("dt"===a.namespace){var c=b.oInit.buttons||j.defaults.buttons;
c&&!b._buttons&&(new l(b,c)).container()}});j.ext.feature.push({fnInit:function(a){var a=new j.Api(a),b=a.init().buttons||j.defaults.buttons;return(new l(a,b)).container()},cFeature:"B"});return l});
/*!
 Bootstrap integration for DataTables' Buttons
 ©2015 SpryMedia Ltd - datatables.net/license
*/

(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-buttons"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net-bs")(a,b).$;b.fn.dataTable.Buttons||require("datatables.net-buttons")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c){var a=c.fn.dataTable;c.extend(!0,a.Buttons.defaults,{dom:{container:{className:"dt-buttons btn-group"},
button:{className:"btn btn-default"},collection:{tag:"ul",className:"dt-button-collection dropdown-menu",button:{tag:"li",className:"dt-button"},buttonLiner:{tag:"a",className:""}}}});a.ext.buttons.collection.text=function(a){return a.i18n("buttons.collection",'Collection <span class="caret"/>')};return a.Buttons});
/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,f,g,h,i,j="",k=0;k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b>>2,g=(3&b)<<4|c>>4,h=(15&c)<<2|e>>6,i=63&e,isNaN(c)?h=i=64:isNaN(e)&&(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j},c.decode=function(a){var b,c,e,f,g,h,i,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(b),64!=h&&(j+=String.fromCharCode(c)),64!=i&&(j+=String.fromCharCode(e));return j}},{}],2:[function(a,b){"use strict";function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}c.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=c},{}],3:[function(a,b,c){"use strict";c.STORE={magic:"\x00\x00",compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate")},{"./flate":8}],4:[function(a,b){"use strict";var c=a("./utils"),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var e="string"!==c.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j>i;i++)h=e?a[i]:a.charCodeAt(i),g=255&(b^h),f=d[g],b=b>>>8^f;return-1^b}},{"./utils":21}],5:[function(a,b){"use strict";function c(){this.data=null,this.length=0,this.index=0}var d=a("./utils");c.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<a||0>a)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return d.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1)}},b.exports=c},{"./utils":21}],6:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],7:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a)},c.uint8Array2String=function(a){return d.transformTo("string",a)},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{"./utils":21}],8:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\x00",c.compress=function(a,b){return e.deflateRaw(a,{level:b.level||-1})},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:24}],9:[function(a,b){"use strict";function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new c;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a})):new c(a,b)}var d=a("./base64");c.prototype=a("./object"),c.prototype.load=a("./load"),c.support=a("./support"),c.defaults=a("./defaults"),c.utils=a("./deprecatedPublicUtils"),c.base64={encode:function(a){return d.encode(a)},decode:function(a){return d.decode(a)}},c.compressions=a("./compressions"),b.exports=c},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(a,b){"use strict";var c=a("./base64"),d=a("./zipEntries");b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&&(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g<e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions,createFolders:b.createFolders});return f.zipComment.length&&(this.comment=f.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(a,b){(function(a){"use strict";b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(a,b){"use strict";function c(a){this.data=a,this.length=this.data.length,this.index=0}var d=a("./uint8ArrayReader");c.prototype=new d,c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./uint8ArrayReader":18}],13:[function(a,b){"use strict";var c=a("./support"),d=a("./utils"),e=a("./crc32"),f=a("./signature"),g=a("./defaults"),h=a("./base64"),i=a("./compressions"),j=a("./compressedObject"),k=a("./nodeBuffer"),l=a("./utf8"),m=a("./stringWriter"),n=a("./uint8ArrayWriter"),o=function(a){if(a._data instanceof j&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},p=function(a){var b=o(a),e=d.getTypeOf(b);return"string"===e?!a.options.binary&&c.nodebuffer?k(b,"utf-8"):a.asBinary():b},q=function(a){var b=o(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=h.decode(b)),b=a&&this.options.binary?D.utf8decode(b):d.transformTo("string",b),a||this.options.binary||(b=d.transformTo("string",D.utf8encode(b))),b)},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};r.prototype={asText:function(){return q.call(this,!0)},asBinary:function(){return q.call(this,!1)},asNodeBuffer:function(){var a=p(this);return d.transformTo("nodebuffer",a)},asUint8Array:function(){var a=p(this);return d.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var s=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},t=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),"string"==typeof c.unixPermissions&&(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&&16384&c.unixPermissions&&(c.dir=!0),c.dosPermissions&&16&c.dosPermissions&&(c.dir=!0),c.dir&&(a=x(a)),c.createFolders&&(e=w(a))&&y.call(this,e,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null,f=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=d.transformTo("uint8array",b))}var g=new r(a,b,c);return this.files[a]=g,g},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},x=function(a){return"/"!=a.slice(-1)&&(a+="/"),a},y=function(a,b){return b="undefined"!=typeof b?b:!1,a=x(a),this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},z=function(a,b,c){var f,g=new j;return a._data instanceof j?(g.uncompressedSize=a._data.uncompressedSize,g.crc32=a._data.crc32,0===g.uncompressedSize||a.dir?(b=i.STORE,g.compressedContent="",g.crc32=0):a._data.compressionMethod===b.magic?g.compressedContent=a._data.getCompressedContent():(f=a._data.getContent(),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c))):(f=p(a),(!f||0===f.length||a.dir)&&(b=i.STORE,f=""),g.uncompressedSize=f.length,g.crc32=e(f),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c)),g.compressedSize=g.compressedContent.length,g.compressionMethod=b.magic,g},A=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},B=function(a){return 63&(a||0)},C=function(a,b,c,g,h){var i,j,k,m,n=(c.compressedContent,d.transformTo("string",l.utf8encode(b.name))),o=b.comment||"",p=d.transformTo("string",l.utf8encode(o)),q=n.length!==b.name.length,r=p.length!==o.length,t=b.options,u="",v="",w="";k=b._initialMetadata.dir!==b.dir?b.dir:t.dir,m=b._initialMetadata.date!==b.date?b.date:t.date;var x=0,y=0;k&&(x|=16),"UNIX"===h?(y=798,x|=A(b.unixPermissions,k)):(y=20,x|=B(b.dosPermissions,k)),i=m.getHours(),i<<=6,i|=m.getMinutes(),i<<=5,i|=m.getSeconds()/2,j=m.getFullYear()-1980,j<<=4,j|=m.getMonth()+1,j<<=5,j|=m.getDate(),q&&(v=s(1,1)+s(e(n),4)+n,u+="up"+s(v.length,2)+v),r&&(w=s(1,1)+s(this.crc32(p),4)+p,u+="uc"+s(w.length,2)+w);var z="";z+="\n\x00",z+=q||r?"\x00\b":"\x00\x00",z+=c.compressionMethod,z+=s(i,2),z+=s(j,2),z+=s(c.crc32,4),z+=s(c.compressedSize,4),z+=s(c.uncompressedSize,4),z+=s(n.length,2),z+=s(u.length,2);var C=f.LOCAL_FILE_HEADER+z+n+u,D=f.CENTRAL_FILE_HEADER+s(y,2)+z+s(p.length,2)+"\x00\x00\x00\x00"+s(x,4)+s(g,4)+n+u+p;return{fileRecord:C,dirRecord:D,compressedObject:c}},D={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&f.push(e));return f},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}return this.filter(function(b,c){return!c.dir&&b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=y.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=t(a||{},{base64:!0,compression:"STORE",compressionOptions:null,type:"base64",platform:"DOS",comment:null,mimeType:"application/zip"}),d.checkSupport(a.type),("darwin"===a.platform||"freebsd"===a.platform||"linux"===a.platform||"sunos"===a.platform)&&(a.platform="UNIX"),"win32"===a.platform&&(a.platform="DOS");var b,c,e=[],g=0,j=0,k=d.transformTo("string",this.utf8encode(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+" is not a valid compression method !");var r=o.options.compressionOptions||a.compressionOptions||{},u=z.call(this,o,q,r),v=C.call(this,l,o,u,g,a.platform);g+=v.fileRecord.length+u.compressedSize,j+=v.dirRecord.length,e.push(v)}var w="";w=f.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var x=a.type.toLowerCase();for(b="uint8array"===x||"arraybuffer"===x||"blob"===x||"nodebuffer"===x?new n(g+j+w.length):new m(g+j+w.length),c=0;c<e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c<e.length;c++)b.append(e[c].dirRecord);b.append(w);var y=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return d.transformTo(a.type.toLowerCase(),y);case"blob":return d.arrayBuffer2Blob(d.transformTo("arraybuffer",y),a.mimeType);case"base64":return a.base64?h.encode(y):y;default:return y}},crc32:function(a,b){return e(a,b)},utf8encode:function(a){return d.transformTo("string",l.utf8encode(a))},utf8decode:function(a){return l.utf8decode(a)}};b.exports=D},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],15:[function(a,b){"use strict";function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0}var d=a("./dataReader"),e=a("./utils");c.prototype=new d,c.prototype.byteAt=function(a){return this.data.charCodeAt(a)},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5,"./utils":21}],16:[function(a,b){"use strict";var c=a("./utils"),d=function(){this.data=[]};d.prototype={append:function(a){a=c.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}},b.exports=d},{"./utils":21}],17:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob("application/zip").size}catch(d){c.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(a,b){"use strict";function c(a){a&&(this.data=a,this.length=this.data.length,this.index=0)}var d=a("./dataReader");c.prototype=new d,c.prototype.byteAt=function(a){return this.data[a]},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f;return-1},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5}],19:[function(a,b){"use strict";var c=a("./utils"),d=function(a){this.data=new Uint8Array(a),this.index=0};d.prototype={append:function(a){0!==a.length&&(a=c.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=d},{"./utils":21}],20:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;256>h;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+g[a[c]]>b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h>b;)if(e=a[b++],128>e)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&h>b;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:65536>e?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e)}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;f>c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h}return b.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(a,b,c){"use strict";function d(a){return a}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;e>g&&b>1;)try{d.push("array"===f||"nodebuffer"===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join("")}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a,b){c.checkSupport("blob"),b=b||"application/zip";try{return new Blob([a],{type:b})}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(16>b?"0":"")+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(a,b){"use strict";function c(a,b){this.files=[],this.loadOptions=b,a&&this.load(a)}var d=a("./stringReader"),e=a("./nodeBufferReader"),f=a("./uint8ArrayReader"),g=a("./utils"),h=a("./signature"),i=a("./zipEntry"),j=a("./support"),k=a("./object");c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+g.pretty(b)+", expected "+g.pretty(a)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d>e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a){var b=!0;try{this.reader.setIndex(0),this.checkSignature(h.LOCAL_FILE_HEADER),b=!1}catch(c){}throw new Error(b?"Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html":"Corrupted zip : can't find end of central directory")}if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader="string"!==b||j.uint8array?"nodebuffer"===b?new e(a):new f(g.transformTo("uint8array",a)):new d(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=c},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(a,b){"use strict";function c(a,b){this.options=a,this.loadOptions=b}var d=a("./stringReader"),e=a("./utils"),f=a("./compressedObject"),g=a("./object"),h=0,i=3;c.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error("Bug : uncompressed data size mismatch");return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=e.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+e.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")");if(this.decompressed=new f,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=e.transformTo("string",this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(a){if(this.versionMadeBy=a.readInt(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=16&this.externalFileAttributes?!0:!1,a===h&&(this.dosPermissions=63&this.externalFileAttributes),a===i&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileName.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&&(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&&(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&&(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&&(this.diskNumberStart=a.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&&(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&&(this.fileComment=b)}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))
}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null}},b.exports=c},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(a,b){"use strict";var c=a("./lib/utils/common").assign,d=a("./lib/deflate"),e=a("./lib/inflate"),f=a("./lib/zlib/constants"),g={};c(g,d,e,f),b.exports=g},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(a,b,c){"use strict";function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}function f(a,b){return b=b||{},b.gzip=!0,d(a,b)}var g=a("./zlib/deflate.js"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&&g.deflateSetHeader(this.strm,b.header)};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input="string"==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&&c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&&d===m)&&this.onData("string"===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out))}while((e.avail_in>0||0===e.avail_out)&&c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0},s.prototype.onData=function(a){this.chunks.push(a)},s.prototype.onEnd=function(a){a===n&&(this.result="string"===this.options.to?this.chunks.join(""):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(a,b,c){"use strict";function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}var f=a("./zlib/inflate.js"),g=a("./utils/common"),h=a("./utils/strings"),i=a("./zlib/constants"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=a("./zlib/gzheader"),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l,f.inflateGetHeader(this.strm,this.header)};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input="string"==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&&c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&&(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&&d===i.Z_FINISH)&&("string"===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&&g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)))}while(l.avail_in>0&&c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&&(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0},m.prototype.onData=function(a){this.chunks.push(a)},m.prototype.onEnd=function(a){a===i.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c>b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c>b;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],28:[function(a,b,c){"use strict";function d(a,b){if(65537>b&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;256>j;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=new e.Buf8(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d>c;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h>c;)if(f=a[c++],128>f)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&h>c;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:65536>f?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":27}],29:[function(a,b){"use strict";function c(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=c},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(a,b){"use strict";function c(){for(var a,b=[],c=0;256>c;c++){a=c;for(var d=0;8>d;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g>h;h++)a=a>>>8^f[255&(a^b[h])];return-1^a}var e=c();b.exports=d},{}],32:[function(a,b,c){"use strict";function d(a,b){return a.msg=G[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){D._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&&(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&m>f);if(d=ib-(m-f),f=m-ib,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+hb-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<hb)););}while(a.lookahead<jb&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===H)return sb;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start>=a.w_size-jb&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?sb:sb}function o(a,b){for(var c,d;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c)),a.match_length>=hb)if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function p(a,b){for(var c,d,e;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===S||a.match_length===hb&&a.strstart-a.match_start>4096)&&(a.match_length=hb-1)),a.prev_length>=hb&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return sb}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ib){if(m(a),a.lookahead<=ib&&b===H)return sb;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=hb&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&f>e);a.match_length=ib-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===H)return sb;break}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function u(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O)}function v(a){var b=u(a);return b===M&&s(a.state),b}function w(a,b){return a&&a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&&(b=6),0>e?(h=0,e=-e):e>15&&(h=2,e-=16),1>f||f>Z||c!==Y||8>e||e>15||0>b||b>9||0>g||g>V)return d(a,O);8===e&&(e=9);var i=new t;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize>>1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a)}function y(a,b){return x(a,b,Y,$,_,W)}function z(a,b){var c,h,k,l;if(!a||!a.state||b>L||0>b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===rb&&b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=T||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=nb)}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=ob)}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=pb)}else h.status=pb;if(h.status===pb&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M}else if(0===a.avail_in&&e(b)<=e(c)&&b!==K)return d(a,Q);if(h.status===rb&&0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&&h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&&(h.status=rb),o===sb||o===ub)return 0===a.avail_out&&(h.last_flush=-1),M;if(o===tb&&(b===I?D._tr_align(h):b!==L&&(D._tr_stored_block(h,0,0,!1),b===J&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M}return b!==K?M:h.wrap<=0?N:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?M:N)}function A(a){var b;return a&&a.state?(b=a.state.status,b!==lb&&b!==mb&&b!==nb&&b!==ob&&b!==pb&&b!==qb&&b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O}var B,C=a("../utils/common"),D=a("./trees"),E=a("./adler32"),F=a("./crc32"),G=a("./messages"),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(a,b){"use strict";function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=c},{}],34:[function(a,b){"use strict";var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1<<e.lenbits)-1,u=(1<<e.distbits)-1;a:do{15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){e.mode=d;break a}a.msg="invalid literal/length code",e.mode=c;break a}x=65535&v,w&=15,w&&(w>q&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",e.mode=c;break a}if(y=65535&v,w&=15,w>q&&(p+=B[f++]<<q,q+=8,w>q&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",e.mode=c;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&e.sane){a.msg="invalid distance too far back",e.mode=c;break a}if(z=0,A=o,0===n){if(z+=l-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(w>n){if(z+=l+n-w,w-=n,x>w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x>n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(g>f&&j>h);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=g>f?5+(g-f):5-(f-g),a.avail_out=j>h?257+(j-h):257-(h-j),e.hold=p,e.bits=q}},{}],35:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F}function h(a,b){var c,d;return a&&a.state?(d=a.state,0>b?(c=0,b=-b):(c=(b>>4)+1,48>b&&(b&=15)),b&&(8>b||b>15)?F:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):F}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==C&&(a.state=null),c):F}function j(a){return i(a,rb)}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d>=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return F;c=a.state,c.mode===V&&(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break}for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=lb;break}if((15&m)!==J){a.msg="unknown compression method",c.mode=lb;break}if(m>>>=4,n-=4,wb=(15&m)+8,0===c.wbits)c.wbits=wb;else if(wb>c.wbits){a.msg="invalid window size",c.mode=lb;break}c.dmax=1<<wb,a.adler=c.check=1,c.mode=512&m?T:V,m=0,n=0;break;case L:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==J){a.msg="unknown compression method",c.mode=lb;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=lb;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,Bb[2]=m>>>16&255,Bb[3]=m>>>24&255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=P;case P:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.name+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.comment+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.comment=null);c.mode=S;case S:if(512&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=lb;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m>>>=7&n,n-=7&n,c.mode=ib;break}for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m>>>=2,n-=2;break a}break;case 2:c.mode=$;break;case 3:a.msg="invalid block type",c.mode=lb}m>>>=2,n-=2;break;case X:for(m>>>=7&n,n-=7&n;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=lb;break}if(c.length=65535&m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=V;break;case $:for(;14>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=lb;break}c.have=0,c.mode=_;case _:for(;c.have<c.ncode;){for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Cb[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid code lengths set",c.mode=lb;break}c.have=0,c.mode=ab;case ab:for(;c.have<c.nlen+c.ndist;){for(;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(16>sb)m>>>=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qb,n-=qb,0===c.have){a.msg="invalid bit length repeat",c.mode=lb;break}wb=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sb){for(zb=qb+3;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=3+(7&m),m>>>=3,n-=3}else{for(zb=qb+7;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=lb;break}for(;q--;)c.lens[c.have++]=wb}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=lb;break}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid literal/lengths set",c.mode=lb;break}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg="invalid distances set",c.mode=lb;break}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&&(c.back=-1);
break}for(c.back=0;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(rb&&0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break}if(32&rb){c.back=-1,c.mode=V;break}if(64&rb){a.msg="invalid literal/length code",c.mode=lb;break}c.extra=15&rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&(1<<c.distbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,64&rb){a.msg="invalid distance code",c.mode=lb;break}c.offset=sb,c.extra=15&rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=lb;break}c.mode=gb;case gb:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=lb;break}q>c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q>c.length&&(q=c.length),pb=c.window}else pb=f,ob=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&&(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32>n;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=lb;break}m=0,n=0}c.mode=jb;case jb:if(c.wrap&&c.flags){for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=lb;break}m=0,n=0}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<lb&&(c.mode<ib||b!==z))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&&0===p||b===z)&&xb===C&&(xb=I),xb)}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&&(b.window=null),a.state=null,C}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?F:(c.head=b,b.done=!1,C)):F}var p,q,r=a("../utils/common"),s=a("./adler32"),t=a("./crc32"),u=a("./inffast"),v=a("./inftrees"),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(a,b){"use strict";var c=a("../utils/common"),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d>=D;D++)P[D]=0;for(E=0;o>E;E++)P[b[n+E]]++;for(H=C,G=d;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G>F&&0===P[F];F++);for(F>H&&(H=F),K=1,D=1;d>=D;D++)if(K<<=1,K-=P[D],0>K)return-1;if(K>0&&(a===g||1!==G))return-1;for(Q[1]=0,D=1;d>D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o>E;E++)0!==b[n+E]&&(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===h&&L>e||a===i&&L>f)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;G>I+J&&(K-=P[I+J],!(0>=K));)I++,K<<=1;if(L+=1<<I,a===h&&L>e||a===i&&L>f)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":27}],37:[function(a,b){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a){return 256>a?gb[a]:gb[256+(a>>>7)]}function f(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function g(a,b,c){a.bi_valid>V-c?(a.bi_buf|=b<<a.bi_valid&65535,f(a,a.bi_buf),a.bi_buf=b>>V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function h(a,b,c){g(a,c[2*b],c[2*b+1])}function i(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U>=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T>c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U>=d;d++)f[d]=g=g+c[d-1]<<1;for(e=0;b>=e;e++){var h=a[2*e+1];0!==h&&(a[2*e]=i(f[h]++,h))}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1>d;d++)for(ib[d]=c,a=0;a<1<<_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16>d;d++)for(jb[d]=e,a=0;a<1<<ab[d];a++)gb[e++]=d;for(e>>=7;R>d;d++)for(jb[d]=e<<7,a=0;a<1<<ab[d]-7;a++)gb[256+e++]=d;for(b=0;U>=b;b++)f[b]=0;for(a=0;143>=a;)eb[2*a+1]=8,a++,f[8]++;for(;255>=a;)eb[2*a+1]=9,a++,f[9]++;for(;279>=a;)eb[2*a+1]=7,a++,f[7]++;for(;287>=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R>a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W)}function n(a){var b;for(b=0;Q>b;b++)a.dyn_ltree[2*b]=0;for(b=0;R>b;b++)a.dyn_dtree[2*b]=0;for(b=0;S>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function o(a){a.bi_valid>8?f(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function p(a,b,c,d){o(a),d&&(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function r(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&q(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&&(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&&(d-=jb[i],g(a,d,j)));while(k<a.last_lit);h(a,X,b)}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i>c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=2>j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count)}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c>=d;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(j>h?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10>=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&&(k=138,l=3),d=0;c>=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j<k&&e===i)){if(l>j){do h(a,e,a.bl_tree);while(0!==--j)}else 0!==e?(e!==f&&(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10>=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4)}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b>=3&&0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d>e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1)}function y(a){var b,c=4093624447;for(b=0;31>=b;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P>b;b++)if(0!==a.dyn_ltree[2*b])return H;return G}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a)}function A(a,b,c,d){g(a,(J<<1)+(d?1:0),3),p(a,b,c,!0)}function B(a){g(a,K<<1,3),h(a,X,eb),j(a)}function C(a,b,c,d){var e,f,h=0;a.level>0?(a.strm.data_type===I&&(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,e>=f&&(e=f)):e=f=c+5,e>=c+4&&-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K<<1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L<<1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&&o(a)}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1}var E=a("../utils/common"),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B},{"../utils/common":27}],39:[function(a,b){"use strict";function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=c},{}]},{},[9])(9)});
!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){(function(e){t.exports=e.pdfMake=n(1)}).call(e,function(){return this}())},function(t,e,n){(function(e){"use strict";function r(t,e,n){this.docDefinition=t,this.fonts=e||a,this.vfs=n}var i=n(2),o=n(3),a={Roboto:{normal:"Roboto-Regular.ttf",bold:"Roboto-Medium.ttf",italics:"Roboto-Italic.ttf",bolditalics:"Roboto-Italic.ttf"}};r.prototype._createDoc=function(t,n){var r=new i(this.fonts);r.fs.bindFS(this.vfs);var o,a=r.createPdfKitDocument(this.docDefinition,t),s=[];a.on("data",function(t){s.push(t)}),a.on("end",function(){o=e.concat(s),n(o,a._pdfMakePages)}),a.end()},r.prototype._getPages=function(t,e){if(!e)throw"getBuffer is an async method and needs a callback argument";this._createDoc(t,function(t,n){e(n)})},r.prototype.open=function(t){var e=window.open("","_blank");try{this.getDataUrl(function(t){e.location.href=t})}catch(n){throw e.close(),n}},r.prototype.print=function(){this.getDataUrl(function(t){var e=document.createElement("iframe");e.style.position="absolute",e.style.left="-99999px",e.src=t,e.onload=function(){function t(){document.body.removeChild(e),document.removeEventListener("click",t)}document.addEventListener("click",t,!1)},document.body.appendChild(e)},{autoPrint:!0})},r.prototype.download=function(t,e){"function"==typeof t&&(e=t,t=null),t=t||"file.pdf",this.getBuffer(function(n){o(new Blob([n],{type:"application/pdf"}),t),"function"==typeof e&&e()})},r.prototype.getBase64=function(t,e){if(!t)throw"getBase64 is an async method and needs a callback argument";this._createDoc(e,function(e){t(e.toString("base64"))})},r.prototype.getDataUrl=function(t,e){if(!t)throw"getDataUrl is an async method and needs a callback argument";this._createDoc(e,function(e){t("data:application/pdf;base64,"+e.toString("base64"))})},r.prototype.getBuffer=function(t,e){if(!t)throw"getBuffer is an async method and needs a callback argument";this._createDoc(e,function(e){t(e)})},t.exports={createPdf:function(t){return new r(t,window.pdfMake.fonts,window.pdfMake.vfs)}}}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(t){this.fontDescriptors=t}function i(t){if(!t)return null;if("number"==typeof t||t instanceof Number)t={left:t,right:t,top:t,bottom:t};else if(t instanceof Array)if(2===t.length)t={left:t[0],top:t[1],right:t[0],bottom:t[1]};else{if(4!==t.length)throw"Invalid pageMargins definition";t={left:t[0],top:t[1],right:t[2],bottom:t[3]}}return t}function o(t){t.registerTableLayouts({noBorders:{hLineWidth:function(t){return 0},vLineWidth:function(t){return 0},paddingLeft:function(t){return t&&4||0},paddingRight:function(t,e){return t<e.table.widths.length-1?4:0}},headerLineOnly:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:0},vLineWidth:function(t){return 0},paddingLeft:function(t){return 0===t?0:8},paddingRight:function(t,e){return t===e.table.widths.length-1?0:8}},lightHorizontalLines:{hLineWidth:function(t,e){return 0===t||t===e.table.body.length?0:t===e.table.headerRows?2:1},vLineWidth:function(t){return 0},hLineColor:function(t){return 1===t?"black":"#aaa"},paddingLeft:function(t){return 0===t?0:8},paddingRight:function(t,e){return t===e.table.widths.length-1?0:8}}})}function a(t){if("string"==typeof t||t instanceof String){var e=y[t.toUpperCase()];if(!e)throw"Page size "+t+" not recognized";return{width:e[0],height:e[1]}}return t}function s(t){this.isString=!0,this.toString=function(){return t}}function h(t,e){var n=e.options.size[0]>e.options.size[1]?"landscape":"portrait";if(t.pageSize.orientation!==n){var r=e.options.size[0],i=e.options.size[1];e.options.size=[i,r]}}function u(t,e,n){n._pdfMakePages=t;for(var r=0;r<t.length;r++){r>0&&(h(t[r],n),n.addPage(n.options));for(var i=t[r],o=0,a=i.items.length;a>o;o++){var s=i.items[o];switch(s.type){case"vector":f(s.item,n);break;case"line":l(s.item,s.item.x,s.item.y,n);break;case"image":d(s.item,s.item.x,s.item.y,n)}}i.watermark&&c(i,n),e.setFontRefsToPdfDoc()}}function l(t,e,n,r){e=e||0,n=n||0;var i=t.getAscenderHeight();_.drawBackground(t,e,n,r);for(var o=0,a=t.inlines.length;a>o;o++){var s=t.inlines[o];r.fill(s.color||"black"),r.save(),r.transform(1,0,0,-1,0,r.page.height);var h=s.font.encode(s.text);r.addContent("BT"),r.addContent(""+(e+s.x)+" "+(r.page.height-n-i)+" Td"),r.addContent("/"+h.fontId+" "+s.fontSize+" Tf"),r.addContent("<"+h.encodedText+"> Tj"),r.addContent("ET"),r.restore()}_.drawDecorations(t,e,n,r)}function c(t,e){var n=t.watermark;e.fill("black"),e.opacity(.6),e.save(),e.transform(1,0,0,-1,0,e.page.height);var r=180*Math.atan2(e.page.height,e.page.width)/Math.PI;e.rotate(r,{origin:[e.page.width/2,e.page.height/2]});var i=n.font.encode(n.text);e.addContent("BT"),e.addContent(""+(e.page.width/2-n.size.size.width/2)+" "+(e.page.height/2-n.size.size.height/4)+" Td"),e.addContent("/"+i.fontId+" "+n.size.fontSize+" Tf"),e.addContent("<"+i.encodedText+"> Tj"),e.addContent("ET"),e.restore()}function f(t,e){switch(e.lineWidth(t.lineWidth||1),t.dash?e.dash(t.dash.length,{space:t.dash.space||t.dash.length}):e.undash(),e.fillOpacity(t.fillOpacity||1),e.strokeOpacity(t.strokeOpacity||1),e.lineJoin(t.lineJoin||"miter"),t.type){case"ellipse":e.ellipse(t.x,t.y,t.r1,t.r2);break;case"rect":t.r?e.roundedRect(t.x,t.y,t.w,t.h,t.r):e.rect(t.x,t.y,t.w,t.h);break;case"line":e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2);break;case"polyline":if(0===t.points.length)break;e.moveTo(t.points[0].x,t.points[0].y);for(var n=1,r=t.points.length;r>n;n++)e.lineTo(t.points[n].x,t.points[n].y);if(t.points.length>1){var i=t.points[0],o=t.points[t.points.length-1];(t.closePath||i.x===o.x&&i.y===o.y)&&e.closePath()}}t.color&&t.lineColor?e.fillAndStroke(t.color,t.lineColor):t.color?e.fill(t.color):e.stroke(t.lineColor||"black")}function d(t,e,n,r){r.image(t.image,t.x,t.y,{width:t._width,height:t._height})}var p=(n(11),n(5)),g=n(6),v=n(28),m=n(12),y=n(7),w=n(8),_=n(9),p=n(5);r.prototype.createPdfKitDocument=function(t,e){e=e||{};var n=a(t.pageSize||"a4");"landscape"===t.pageOrientation&&(n={width:n.height,height:n.width}),n.orientation="landscape"===t.pageOrientation?t.pageOrientation:"portrait",this.pdfKitDoc=new v({size:[n.width,n.height],compress:!1}),this.pdfKitDoc.info.Producer="pdfmake",this.pdfKitDoc.info.Creator="pdfmake",this.fontProvider=new p(this.fontDescriptors,this.pdfKitDoc),t.images=t.images||{};var r=new g(n,i(t.pageMargins||40),new w(this.pdfKitDoc,t.images));o(r),e.tableLayouts&&r.registerTableLayouts(e.tableLayouts);var h=r.layoutDocument(t.content,this.fontProvider,t.styles||{},t.defaultStyle||{fontSize:12,font:"Roboto"},t.background,t.header,t.footer,t.images,t.watermark,t.pageBreakBefore);if(u(h,this.fontProvider,this.pdfKitDoc),e.autoPrint){var l=this.pdfKitDoc.ref({S:"JavaScript",JS:new s("this.print\\(true\\);")}),c=this.pdfKitDoc.ref({Names:[new s("EmbeddedJS"),new m(this.pdfKitDoc,l.id)]});l.end(),c.end(),this.pdfKitDoc._root.data.Names={JavaScript:new m(this.pdfKitDoc,c.id)}}return this.pdfKitDoc};t.exports=r,r.prototype.fs=n(10)},function(t,e,n){var r,i;(function(t){/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var o=o||"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(t){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=t.document,n=function(){return t.URL||t.webkitURL||t},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in r,o=function(n){var r=e.createEvent("MouseEvents");r.initMouseEvent("click",!0,!1,t,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(r)},a=t.webkitRequestFileSystem,s=t.requestFileSystem||a||t.mozRequestFileSystem,h=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},u="application/octet-stream",l=0,c=10,f=function(e){var r=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};t.chrome?r():setTimeout(r,c)},d=function(t,e,n){e=[].concat(e);for(var r=e.length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(o){h(o)}}},p=function(e,h){var c,p,g,v=this,m=e.type,y=!1,w=function(){d(v,"writestart progress write writeend".split(" "))},_=function(){if((y||!c)&&(c=n().createObjectURL(e)),p)p.location.href=c;else{var r=t.open(c,"_blank");void 0==r&&"undefined"!=typeof safari&&(t.location.href=c)}v.readyState=v.DONE,w(),f(c)},b=function(t){return function(){return v.readyState!==v.DONE?t.apply(this,arguments):void 0}},x={create:!0,exclusive:!1};return v.readyState=v.INIT,h||(h="download"),i?(c=n().createObjectURL(e),r.href=c,r.download=h,o(r),v.readyState=v.DONE,w(),void f(c)):(t.chrome&&m&&m!==u&&(g=e.slice||e.webkitSlice,e=g.call(e,0,e.size,u),y=!0),a&&"download"!==h&&(h+=".download"),(m===u||a)&&(p=t),s?(l+=e.size,void s(t.TEMPORARY,l,b(function(t){t.root.getDirectory("saved",x,b(function(t){var n=function(){t.getFile(h,x,b(function(t){t.createWriter(b(function(n){n.onwriteend=function(e){p.location.href=t.toURL(),v.readyState=v.DONE,d(v,"writeend",e),f(t)},n.onerror=function(){var t=n.error;t.code!==t.ABORT_ERR&&_()},"writestart progress write abort".split(" ").forEach(function(t){n["on"+t]=v["on"+t]}),n.write(e),v.abort=function(){n.abort(),v.readyState=v.DONE},v.readyState=v.WRITING}),_)}),_)};t.getFile(h,{create:!1},b(function(t){t.remove(),n()}),b(function(t){t.code===t.NOT_FOUND_ERR?n():_()}))}),_)}),_)):void _())},g=p.prototype,v=function(t,e){return new p(t,e)};return g.abort=function(){var t=this;t.readyState=t.DONE,d(t,"abort")},g.readyState=g.INIT=0,g.WRITING=1,g.DONE=2,g.error=g.onwritestart=g.onprogress=g.onwrite=g.onabort=g.onerror=g.onwriteend=null,v}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof t&&null!==t?t.exports=o:null!==n(13)&&null!=n(14)&&(r=[],i=function(){return o}.apply(e,r),!(void 0!==i&&(t.exports=i)))}).call(e,n(15)(t))},function(t,e,n){(function(t){function t(e){return this instanceof t?(this.length=0,this.parent=void 0,"number"==typeof e?r(this,e):"string"==typeof e?i(this,e,arguments.length>1?arguments[1]:"utf8"):o(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function r(e,n){if(e=c(e,0>n?0:0|f(n)),!t.TYPED_ARRAY_SUPPORT)for(var r=0;n>r;r++)e[r]=0;return e}function i(t,e,n){("string"!=typeof n||""===n)&&(n="utf8");var r=0|p(e,n);return t=c(t,r),t.write(e,n),t}function o(e,n){if(t.isBuffer(n))return a(e,n);if(G(n))return s(e,n);if(null==n)throw new TypeError("must start with number, buffer, array or string");return"undefined"!=typeof ArrayBuffer&&n.buffer instanceof ArrayBuffer?h(e,n):n.length?u(e,n):l(e,n)}function a(t,e){var n=0|f(e.length);return t=c(t,n),e.copy(t,0,0,n),t}function s(t,e){var n=0|f(e.length);t=c(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function h(t,e){var n=0|f(e.length);t=c(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function u(t,e){var n=0|f(e.length);t=c(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function l(t,e){var n,r=0;"Buffer"===e.type&&G(e.data)&&(n=e.data,r=0|f(n.length)),t=c(t,r);for(var i=0;r>i;i+=1)t[i]=255&n[i];return t}function c(e,n){t.TYPED_ARRAY_SUPPORT?e=t._augment(new Uint8Array(n)):(e.length=n,e._isBuffer=!0);var r=0!==n&&n<=t.poolSize>>>1;return r&&(e.parent=Y),e}function f(t){if(t>=q)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+q.toString(16)+" bytes");return 0|t}function d(e,n){if(!(this instanceof d))return new d(e,n);var r=new t(e,n);return delete r.parent,r}function p(t,e){if("string"!=typeof t&&(t=String(t)),0===t.length)return 0;switch(e||"utf8"){case"ascii":case"binary":case"raw":return t.length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*t.length;case"hex":return t.length>>>1;case"utf8":case"utf-8":return P(t).length;case"base64":return W(t).length;default:return t.length}}function g(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;r>a;a++){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))throw new Error("Invalid hex string");t[n+a]=s}return a}function v(t,e,n,r){return N(P(e,t.length-n),t,n,r)}function m(t,e,n,r){return N(F(e),t,n,r)}function y(t,e,n,r){return m(t,e,n,r)}function w(t,e,n,r){return N(W(e),t,n,r)}function _(t,e,n,r){return N(z(e,t.length-n),t,n,r)}function b(t,e,n){return H.fromByteArray(0===e&&n===t.length?t:t.slice(e,n))}function x(t,e,n){var r="",i="";n=Math.min(t.length,n);for(var o=e;n>o;o++)t[o]<=127?(r+=j(i)+String.fromCharCode(t[o]),i=""):i+="%"+t[o].toString(16);return r+j(i)}function S(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(127&t[i]);return r}function k(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(t[i]);return r}function E(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=e;n>o;o++)i+=U(t[o]);return i}function C(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function I(t,e,n){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function A(e,n,r,i,o,a){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(n>o||a>n)throw new RangeError("value is out of bounds");if(r+i>e.length)throw new RangeError("index out of range")}function L(t,e,n,r){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);o>i;i++)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function R(t,e,n,r){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);o>i;i++)t[n+i]=e>>>8*(r?i:3-i)&255}function B(t,e,n,r,i,o){if(e>i||o>e)throw new RangeError("value is out of bounds");if(n+r>t.length)throw new RangeError("index out of range");if(0>n)throw new RangeError("index out of range")}function T(t,e,n,r,i){return i||B(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),Z.write(t,e,n,r,23,4),n+4}function M(t,e,n,r,i){return i||B(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),Z.write(t,e,n,r,52,8),n+8}function O(t){if(t=D(t).replace(X,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function D(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function U(t){return 16>t?"0"+t.toString(16):t.toString(16)}function P(t,e){e=e||1/0;for(var n,r=t.length,i=null,o=[],a=0;r>a;a++){if(n=t.charCodeAt(a),n>55295&&57344>n){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(56320>n){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=i-55296<<10|n-56320|65536,i=null}else i&&((e-=3)>-1&&o.push(239,191,189),i=null);if(128>n){if((e-=1)<0)break;o.push(n)}else if(2048>n){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(65536>n){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(2097152>n))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function F(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function z(t,e){for(var n,r,i,o=[],a=0;a<t.length&&!((e-=2)<0);a++)n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r);return o}function W(t){return H.toByteArray(O(t))}function N(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i];return i}function j(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
var H=n(31),Z=n(29),G=n(30);e.Buffer=t,e.SlowBuffer=d,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var q=1073741823,Y={};t.TYPED_ARRAY_SUPPORT=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t);return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===new Uint8Array(1).subarray(1,1).byteLength}catch(n){return!1}}(),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,n){if(!t.isBuffer(e)||!t.isBuffer(n))throw new TypeError("Arguments must be Buffers");if(e===n)return 0;for(var r=e.length,i=n.length,o=0,a=Math.min(r,i);a>o&&e[o]===n[o];)++o;return o!==a&&(r=e[o],i=n[o]),i>r?-1:r>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,n){if(!G(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);if(1===e.length)return e[0];var r;if(void 0===n)for(n=0,r=0;r<e.length;r++)n+=e[r].length;var i=new t(n),o=0;for(r=0;r<e.length;r++){var a=e[r];a.copy(i,o),o+=a.length}return i},t.byteLength=p,t.prototype.length=void 0,t.prototype.parent=void 0,t.prototype.toString=function(t,e,n){var r=!1;if(e=0|e,n=void 0===n||n===1/0?this.length:0|n,t||(t="utf8"),0>e&&(e=0),n>this.length&&(n=this.length),e>=n)return"";for(;;)switch(t){case"hex":return E(this,e,n);case"utf8":case"utf-8":return x(this,e,n);case"ascii":return S(this,e,n);case"binary":return k(this,e,n);case"base64":return b(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,n){function r(t,e,n){for(var r=-1,i=0;n+i<t.length;i++)if(t[n+i]===e[-1===r?0:i-r]){if(-1===r&&(r=i),i-r+1===e.length)return n+r}else r=-1;return-1}if(n>2147483647?n=2147483647:-2147483648>n&&(n=-2147483648),n>>=0,0===this.length)return-1;if(n>=this.length)return-1;if(0>n&&(n=Math.max(this.length+n,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,n);if(t.isBuffer(e))return r(this,e,n);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,n):r(this,[e],n);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return this.readUInt8(t)},t.prototype.set=function(t,e){return this.writeUInt8(t,e)},t.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(n)?(n=0|n,void 0===r&&(r="utf8")):(r=n,n=void 0);else{var i=r;r=e,e=0|n,n=i}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(0>n||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");r||(r="utf8");for(var a=!1;;)switch(r){case"hex":return g(this,t,e,n);case"utf8":case"utf-8":return v(this,t,e,n);case"ascii":return m(this,t,e,n);case"binary":return y(this,t,e,n);case"base64":return w(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,t,e,n);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),a=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},t.prototype.slice=function(e,n){var r=this.length;e=~~e,n=void 0===n?r:~~n,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>n?(n+=r,0>n&&(n=0)):n>r&&(n=r),e>n&&(n=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,n));else{var o=n-e;i=new t(o,void 0);for(var a=0;o>a;a++)i[a]=this[a+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,n){t=0|t,e=0|e,n||I(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},t.prototype.readUIntBE=function(t,e,n){t=0|t,e=0|e,n||I(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},t.prototype.readUInt8=function(t,e){return e||I(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||I(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||I(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||I(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||I(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,n){t=0|t,e=0|e,n||I(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},t.prototype.readIntBE=function(t,e,n){t=0|t,e=0|e,n||I(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},t.prototype.readInt8=function(t,e){return e||I(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||I(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt16BE=function(t,e){e||I(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt32LE=function(t,e){return e||I(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||I(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||I(t,4,this.length),Z.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||I(t,4,this.length),Z.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||I(t,8,this.length),Z.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||I(t,8,this.length),Z.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||A(this,t,e,n,Math.pow(2,8*n),0);var i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},t.prototype.writeUIntBE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||A(this,t,e,n,Math.pow(2,8*n),0);var i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},t.prototype.writeUInt8=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[n]=e,n+1},t.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e,this[n+1]=e>>>8):L(this,e,n,!0),n+2},t.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=e):L(this,e,n,!1),n+2},t.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=e):R(this,e,n,!0),n+4},t.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e):R(this,e,n,!1),n+4},t.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);A(this,t,e,n,i-1,-i)}var o=0,a=1,s=0>t?1:0;for(this[e]=255&t;++o<n&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+n},t.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);A(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0>t?1:0;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+n},t.prototype.writeInt8=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[n]=e,n+1},t.prototype.writeInt16LE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=e,this[n+1]=e>>>8):L(this,e,n,!0),n+2},t.prototype.writeInt16BE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=e):L(this,e,n,!1),n+2},t.prototype.writeInt32LE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[n]=e,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24):R(this,e,n,!0),n+4},t.prototype.writeInt32BE=function(e,n,r){return e=+e,n=0|n,r||A(this,e,n,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=e):R(this,e,n,!1),n+4},t.prototype.writeFloatLE=function(t,e,n){return T(this,t,e,!0,n)},t.prototype.writeFloatBE=function(t,e,n){return T(this,t,e,!1,n)},t.prototype.writeDoubleLE=function(t,e,n){return M(this,t,e,!0,n)},t.prototype.writeDoubleBE=function(t,e,n){return M(this,t,e,!1,n)},t.prototype.copy=function(e,n,r,i){if(r||(r=0),i||0===i||(i=this.length),n>=e.length&&(n=e.length),n||(n=0),i>0&&r>i&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(0>n)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-n<i-r&&(i=e.length-n+r);var o=i-r;if(1e3>o||!t.TYPED_ARRAY_SUPPORT)for(var a=0;o>a;a++)e[a+n]=this[a+r];else e._set(this.subarray(r,r+o),n);return o},t.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),e>n)throw new RangeError("end < start");if(n!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>n||n>this.length)throw new RangeError("end out of bounds");var r;if("number"==typeof t)for(r=e;n>r;r++)this[r]=t;else{var i=P(t.toString()),o=i.length;for(r=e;n>r;r++)this[r]=i[r%o]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),n=0,r=e.length;r>n;n+=1)e[n]=this[n];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var K=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=K.get,e.set=K.set,e.write=K.write,e.toString=K.toString,e.toLocaleString=K.toString,e.toJSON=K.toJSON,e.equals=K.equals,e.compare=K.compare,e.indexOf=K.indexOf,e.copy=K.copy,e.slice=K.slice,e.readUIntLE=K.readUIntLE,e.readUIntBE=K.readUIntBE,e.readUInt8=K.readUInt8,e.readUInt16LE=K.readUInt16LE,e.readUInt16BE=K.readUInt16BE,e.readUInt32LE=K.readUInt32LE,e.readUInt32BE=K.readUInt32BE,e.readIntLE=K.readIntLE,e.readIntBE=K.readIntBE,e.readInt8=K.readInt8,e.readInt16LE=K.readInt16LE,e.readInt16BE=K.readInt16BE,e.readInt32LE=K.readInt32LE,e.readInt32BE=K.readInt32BE,e.readFloatLE=K.readFloatLE,e.readFloatBE=K.readFloatBE,e.readDoubleLE=K.readDoubleLE,e.readDoubleBE=K.readDoubleBE,e.writeUInt8=K.writeUInt8,e.writeUIntLE=K.writeUIntLE,e.writeUIntBE=K.writeUIntBE,e.writeUInt16LE=K.writeUInt16LE,e.writeUInt16BE=K.writeUInt16BE,e.writeUInt32LE=K.writeUInt32LE,e.writeUInt32BE=K.writeUInt32BE,e.writeIntLE=K.writeIntLE,e.writeIntBE=K.writeIntBE,e.writeInt8=K.writeInt8,e.writeInt16LE=K.writeInt16LE,e.writeInt16BE=K.writeInt16BE,e.writeInt32LE=K.writeInt32LE,e.writeInt32BE=K.writeInt32BE,e.writeFloatLE=K.writeFloatLE,e.writeFloatBE=K.writeFloatBE,e.writeDoubleLE=K.writeDoubleLE,e.writeDoubleBE=K.writeDoubleBE,e.fill=K.fill,e.inspect=K.inspect,e.toArrayBuffer=K.toArrayBuffer,e};var X=/[^+\/0-9A-z\-]/g}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(t,e){var n="normal";return t&&e?n="bolditalics":t?n="bold":e&&(n="italics"),n}function i(t,e){this.fonts={},this.pdfDoc=e,this.fontWrappers={};for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];this.fonts[n]={normal:r.normal,bold:r.bold,italics:r.italics,bolditalics:r.bolditalics}}}var o=n(11),a=n(16);i.prototype.provideFont=function(t,e,n){if(!this.fonts[t])return this.pdfDoc._font;var i=r(e,n);return this.fontWrappers[t]=this.fontWrappers[t]||{},this.fontWrappers[t][i]||(this.fontWrappers[t][i]=new a(this.pdfDoc,this.fonts[t][i],t+"("+i+")")),this.fontWrappers[t][i]},i.prototype.setFontRefsToPdfDoc=function(){var t=this;o.each(t.fontWrappers,function(e){o.each(e,function(e){o.each(e.pdfFonts,function(e){t.pdfDoc.page.fonts[e.id]||(t.pdfDoc.page.fonts[e.id]=e.ref())})})})},t.exports=i},function(t,e,n){"use strict";function r(t,e){a.each(e,function(e){t.push(e)})}function i(t,e,n){this.pageSize=t,this.pageMargins=e,this.tracker=new s,this.imageMeasure=n,this.tableLayouts={}}function o(t){var e=t.x,n=t.y;t.positions=[],a.each(t.canvas,function(t){var e=t.x,n=t.y;t.resetXY=function(){t.x=e,t.y=n}}),t.resetXY=function(){t.x=e,t.y=n,a.each(t.canvas,function(t){t.resetXY()})}}var a=n(11),s=n(18),h=n(19),u=n(20),l=n(21),c=n(22),f=n(23),d=n(24),p=n(25).pack,g=n(25).offsetVector,v=n(25).fontStringify,m=n(25).isFunction,y=n(26),w=n(27);i.prototype.registerTableLayouts=function(t){this.tableLayouts=p(this.tableLayouts,t)},i.prototype.layoutDocument=function(t,e,n,r,i,o,s,u,l,c){function f(t,e){return t=a.reject(t,function(t){return a.isEmpty(t.positions)}),a.each(t,function(t){var n=a.pick(t,["id","text","ul","ol","table","image","qr","canvas","columns","headlineLevel","style","pageBreak","pageOrientation","width","height"]);n.startPosition=a.first(t.positions),n.pageNumbers=a.chain(t.positions).map("pageNumber").uniq().value(),n.pages=e.length,n.stack=a.isArray(t.stack),t.nodeInfo=n}),a.any(t,function(t,e,n){if("before"!==t.pageBreak&&!t.pageBreakCalculated){t.pageBreakCalculated=!0;var r=a.first(t.nodeInfo.pageNumbers),i=a.chain(n).drop(e+1).filter(function(t){return a.contains(t.nodeInfo.pageNumbers,r)}).value(),o=a.chain(n).drop(e+1).filter(function(t){return a.contains(t.nodeInfo.pageNumbers,r+1)}).value(),s=a.chain(n).take(e).filter(function(t){return a.contains(t.nodeInfo.pageNumbers,r)}).value();if(c(t.nodeInfo,a.map(i,"nodeInfo"),a.map(o,"nodeInfo"),a.map(s,"nodeInfo")))return t.pageBreak="before",!0}})}function d(t){a.each(t.linearNodeList,function(t){t.resetXY()})}m(c)||(c=function(){return!1}),this.docMeasure=new h(e,n,r,this.imageMeasure,this.tableLayouts,u);for(var p=this.tryLayoutDocument(t,e,n,r,i,o,s,u,l);f(p.linearNodeList,p.pages);)d(p),p=this.tryLayoutDocument(t,e,n,r,i,o,s,u,l);return p.pages},i.prototype.tryLayoutDocument=function(t,e,n,r,i,o,a,s,h,c){this.linearNodeList=[],t=this.docMeasure.measureDocument(t),this.writer=new l(new u(this.pageSize,this.pageMargins),this.tracker);var f=this;return this.writer.context().tracker.startTracking("pageAdded",function(){f.addBackground(i)}),this.addBackground(i),this.processNode(t),this.addHeadersAndFooters(o,a),null!=h&&this.addWatermark(h,e),{pages:this.writer.context().pages,linearNodeList:this.linearNodeList}},i.prototype.addBackground=function(t){var e=m(t)?t:function(){return t},n=e(this.writer.context().page+1);if(n){var r=this.writer.context().getCurrentPage().pageSize;this.writer.beginUnbreakableBlock(r.width,r.height),this.processNode(this.docMeasure.measureDocument(n)),this.writer.commitUnbreakableBlock(0,0)}},i.prototype.addStaticRepeatable=function(t,e){this.addDynamicRepeatable(function(){return t},e)},i.prototype.addDynamicRepeatable=function(t,e){for(var n=this.writer.context().pages,r=0,i=n.length;i>r;r++){this.writer.context().page=r;var o=t(r+1,i);if(o){var a=e(this.writer.context().getCurrentPage().pageSize,this.pageMargins);this.writer.beginUnbreakableBlock(a.width,a.height),this.processNode(this.docMeasure.measureDocument(o)),this.writer.commitUnbreakableBlock(a.x,a.y)}}},i.prototype.addHeadersAndFooters=function(t,e){var n=function(t,e){return{x:0,y:0,width:t.width,height:e.top}},r=function(t,e){return{x:0,y:t.height-e.bottom,width:t.width,height:e.bottom}};m(t)?this.addDynamicRepeatable(t,n):t&&this.addStaticRepeatable(t,n),m(e)?this.addDynamicRepeatable(e,r):e&&this.addStaticRepeatable(e,r)},i.prototype.addWatermark=function(t,e){function n(t,e,n){for(var r,i=t.width,o=t.height,a=.8*Math.sqrt(i*i+o*o),s=new y(n),h=new w,u=0,l=1e3,c=(u+l)/2;Math.abs(u-l)>1;)h.push({fontSize:c}),r=s.sizeOfString(e,h),r.width>a?(l=c,c=(u+l)/2):r.width<a&&(u=c,c=(u+l)/2),h.pop();return{size:r,fontSize:c}}for(var r=Object.getOwnPropertyNames(e.fonts)[0],i={text:t,font:e.provideFont(e[r],!1,!1),size:n(this.pageSize,t,e)},o=this.writer.context().pages,a=0,s=o.length;s>a;a++)o[a].watermark=i},i.prototype.processNode=function(t){function e(e){var r=t._margin;"before"===t.pageBreak&&n.writer.moveToNextPage(t.pageOrientation),r&&(n.writer.context().moveDown(r[1]),n.writer.context().addMargin(r[0],r[2])),e(),r&&(n.writer.context().addMargin(-r[0],-r[2]),n.writer.context().moveDown(r[3])),"after"===t.pageBreak&&n.writer.moveToNextPage(t.pageOrientation)}var n=this;this.linearNodeList.push(t),o(t),e(function(){var e=t.absolutePosition;if(e&&(n.writer.context().beginDetachedBlock(),n.writer.context().moveTo(e.x||0,e.y||0)),t.stack)n.processVerticalContainer(t);else if(t.columns)n.processColumns(t);else if(t.ul)n.processList(!1,t);else if(t.ol)n.processList(!0,t);else if(t.table)n.processTable(t);else if(void 0!==t.text)n.processLeaf(t);else if(t.image)n.processImage(t);else if(t.canvas)n.processCanvas(t);else if(t.qr)n.processQr(t);else if(!t._span)throw"Unrecognized document structure: "+JSON.stringify(t,v);e&&n.writer.context().endDetachedBlock()})},i.prototype.processVerticalContainer=function(t){var e=this;t.stack.forEach(function(n){e.processNode(n),r(t.positions,n.positions)})},i.prototype.processColumns=function(t){function e(t){if(!t)return null;var e=[];e.push(0);for(var r=n.length-1;r>0;r--)e.push(t);return e}var n=t.columns,i=this.writer.context().availableWidth,o=e(t._gap);o&&(i-=(o.length-1)*t._gap),c.buildColumnWidths(n,i);var a=this.processRow(n,n,o);r(t.positions,a.positions)},i.prototype.processRow=function(t,e,n,i,o){function a(t){for(var e,n=0,r=l.length;r>n;n++){var i=l[n];if(i.prevPage===t.prevPage){e=i;break}}e||(e=t,l.push(e)),e.prevY=Math.max(e.prevY,t.prevY),e.y=Math.min(e.y,t.y)}function s(t){return n&&n.length>t?n[t]:0}function h(t,e){if(t.rowSpan&&t.rowSpan>1){var n=o+t.rowSpan-1;if(n>=i.length)throw"Row span for column "+e+" (with indexes starting from 0) exceeded row count";return i[n][e]}return null}var u=this,l=[],c=[];return this.tracker.auto("pageChanged",a,function(){e=e||t,u.writer.context().beginColumnGroup();for(var i=0,o=t.length;o>i;i++){var a=t[i],l=e[i]._calcWidth,f=s(i);if(a.colSpan&&a.colSpan>1)for(var d=1;d<a.colSpan;d++)l+=e[++i]._calcWidth+n[i];u.writer.context().beginColumn(l,f,h(a,i)),a._span?a._columnEndingContext&&u.writer.context().markEnding(a):(u.processNode(a),r(c,a.positions))}u.writer.context().completeColumnGroup()}),{pageBreaks:l,positions:c}},i.prototype.processList=function(t,e){function n(t){if(s){var e=s;if(s=null,e.canvas){var n=e.canvas[0];g(n,-e._minWidth,0),i.writer.addVector(n)}else{var r=new d(i.pageSize.width);r.addInline(e._inlines[0]),r.x=-e._minWidth,r.y=t.getAscenderHeight()-r.getAscenderHeight(),i.writer.addLine(r,!0)}}}var i=this,o=t?e.ol:e.ul,a=e._gapSize;this.writer.context().addMargin(a.width);var s;this.tracker.auto("lineAdded",n,function(){o.forEach(function(t){s=t.listMarker,i.processNode(t),r(e.positions,t.positions)})}),this.writer.context().addMargin(-a.width)},i.prototype.processTable=function(t){var e=new f(t);e.beginTable(this.writer);for(var n=0,i=t.table.body.length;i>n;n++){e.beginRow(n,this.writer);var o=this.processRow(t.table.body[n],t.table.widths,t._offsets.offsets,t.table.body,n);r(t.positions,o.positions),e.endRow(n,this.writer,o.pageBreaks)}e.endTable(this.writer)},i.prototype.processLeaf=function(t){for(var e=this.buildNextLine(t);e;){var n=this.writer.addLine(e);t.positions.push(n),e=this.buildNextLine(t)}},i.prototype.buildNextLine=function(t){if(!t._inlines||0===t._inlines.length)return null;for(var e=new d(this.writer.context().availableWidth);t._inlines&&t._inlines.length>0&&e.hasEnoughSpaceForInline(t._inlines[0]);)e.addInline(t._inlines.shift());return e.lastLineInParagraph=0===t._inlines.length,e},i.prototype.processImage=function(t){var e=this.writer.addImage(t);t.positions.push(e)},i.prototype.processCanvas=function(t){var e=t._minHeight;this.writer.context().availableHeight<e&&this.writer.moveToNextPage(),t.canvas.forEach(function(e){var n=this.writer.addVector(e);t.positions.push(n)},this),this.writer.context().moveDown(e)},i.prototype.processQr=function(t){var e=this.writer.addQr(t);t.positions.push(e)},t.exports=i},function(t,e,n){t.exports={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]}},function(t,e,n){(function(e){"use strict";function r(t,e){this.pdfDoc=t,this.imageDictionary=e||{}}var i=(n(28),n(17));r.prototype.measureImage=function(t){function n(t){var n=a.imageDictionary[t];if(!n)return t;var r=n.indexOf("base64,");if(0>r)throw"invalid image format, images dictionary should contain dataURL entries";return new e(n.substring(r+7),"base64")}var r,o,a=this;return this.pdfDoc._imageRegistry[t]?r=this.pdfDoc._imageRegistry[t]:(o="I"+ ++this.pdfDoc._imageCount,r=i.open(n(t),o),r.embed(this.pdfDoc),this.pdfDoc._imageRegistry[t]=r),{width:r.width,height:r.height}},t.exports=r}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(t){for(var e=[],n=null,r=0,i=t.inlines.length;i>r;r++){var o=t.inlines[r],a=o.decoration;if(a){var s=o.decorationColor||o.color||"black",h=o.decorationStyle||"solid";a=Array.isArray(a)?a:[a];for(var u=0,l=a.length;l>u;u++){var c=a[u];n&&c===n.decoration&&h===n.decorationStyle&&s===n.decorationColor&&"lineThrough"!==c?n.inlines.push(o):(n={line:t,decoration:c,decorationColor:s,decorationStyle:h,inlines:[o]},e.push(n))}}else n=null}return e}function i(t,e,n,r){function i(){for(var e=0,n=0,r=t.inlines.length;r>n;n++){var i=t.inlines[n];e=i.fontSize>e?n:e}return t.inlines[e]}function o(){for(var e=0,n=0,r=t.inlines.length;r>n;n++)e+=t.inlines[n].width;return e}var a=t.inlines[0],s=i(),h=o(),u=t.line.getAscenderHeight(),l=s.font.ascender/1e3*s.fontSize,c=s.height,f=c-l,d=.5+.12*Math.floor(Math.max(s.fontSize-8,0)/2);switch(t.decoration){case"underline":n+=u+.45*f;break;case"overline":n+=u-.85*l;break;case"lineThrough":n+=u-.25*l;break;default:throw"Unkown decoration : "+t.decoration}if(r.save(),"double"===t.decorationStyle){var p=Math.max(.5,2*d);r.fillColor(t.decorationColor).rect(e+a.x,n-d/2,h,d/2).fill().rect(e+a.x,n+p-d/2,h,d/2).fill()}else if("dashed"===t.decorationStyle){var g=Math.ceil(h/6.8),v=e+a.x;r.rect(v,n,h,d).clip(),r.fillColor(t.decorationColor);for(var m=0;g>m;m++)r.rect(v,n-d/2,3.96,d).fill(),v+=6.8}else if("dotted"===t.decorationStyle){var y=Math.ceil(h/(3*d)),w=e+a.x;r.rect(w,n,h,d).clip(),r.fillColor(t.decorationColor);for(var _=0;y>_;_++)r.rect(w,n-d/2,d,d).fill(),w+=3*d}else if("wavy"===t.decorationStyle){var b=.7,x=1,S=Math.ceil(h/(2*b))+1,k=e+a.x-1;r.rect(e+a.x,n-x,h,n+x).clip(),r.lineWidth(.24),r.moveTo(k,n);for(var E=0;S>E;E++)r.bezierCurveTo(k+b,n-x,k+2*b,n-x,k+3*b,n).bezierCurveTo(k+4*b,n+x,k+5*b,n+x,k+6*b,n),k+=6*b;r.stroke(t.decorationColor)}else r.fillColor(t.decorationColor).rect(e+a.x,n-d/2,h,d).fill();r.restore()}function o(t,e,n,o){for(var a=r(t),s=0,h=a.length;h>s;s++)i(a[s],e,n,o)}function a(t,e,n,r){for(var i=t.getHeight(),o=0,a=t.inlines.length;a>o;o++){var s=t.inlines[o];s.background&&r.fillColor(s.background).rect(e+s.x,n,s.width,i).fill()}}t.exports={drawBackground:a,drawDecorations:o}},function(t,e,n){(function(e,n){"use strict";function r(){this.fileSystem={},this.baseSystem={}}function i(t){return 0===t.indexOf(n)&&(t=t.substring(n.length)),0===t.indexOf("/")&&(t=t.substring(1)),t}r.prototype.readFileSync=function(t){t=i(t);var n=this.baseSystem[t];return n?new e(n,"base64"):this.fileSystem[t]},r.prototype.writeFileSync=function(t,e){this.fileSystem[i(t)]=e},r.prototype.bindFS=function(t){this.baseSystem=t},t.exports=new r}).call(e,n(4).Buffer,"/")},function(t,e,n){var r;(function(t,i){(function(){function o(t,e){if(t!==e){var n=t===t,r=e===e;if(t>e||!n||"undefined"==typeof t&&r)return 1;if(e>t||!r||"undefined"==typeof e&&n)return-1}return 0}function a(t,e,n){if(e!==e)return m(t,n);for(var r=(n||0)-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function s(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function h(t){return"string"==typeof t?t:null==t?"":t+""}function u(t){return t.charCodeAt(0)}function l(t,e){for(var n=-1,r=t.length;++n<r&&e.indexOf(t.charAt(n))>-1;);return n}function c(t,e){for(var n=t.length;n--&&e.indexOf(t.charAt(n))>-1;);return n}function f(t,e){return o(t.criteria,e.criteria)||t.index-e.index}function d(t,e){for(var n=-1,r=t.criteria,i=e.criteria,a=r.length;++n<a;){var s=o(r[n],i[n]);if(s)return s}return t.index-e.index}function p(t){return Ht[t]}function g(t){return Zt[t]}function v(t){return"\\"+Yt[t]}function m(t,e,n){for(var r=t.length,i=n?e||r:(e||0)-1;n?i--:++i<r;){var o=t[i];if(o!==o)return i}return-1}function y(t){return t&&"object"==typeof t||!1}function w(t){return 160>=t&&t>=9&&13>=t||32==t||160==t||5760==t||6158==t||t>=8192&&(8202>=t||8232==t||8233==t||8239==t||8287==t||12288==t||65279==t)}function _(t,e){for(var n=-1,r=t.length,i=-1,o=[];++n<r;)t[n]===e&&(t[n]=G,o[++i]=n);return o}function b(t,e){for(var n,r=-1,i=t.length,o=-1,a=[];++r<i;){var s=t[r],h=e?e(s,r,t):s;r&&n===h||(n=h,a[++o]=s)}return a}function x(t){for(var e=-1,n=t.length;++e<n&&w(t.charCodeAt(e)););return e}function S(t){for(var e=t.length;e--&&w(t.charCodeAt(e)););return e}function k(t){return Gt[t]}function E(t){function e(t){if(y(t)&&!ja(t)){if(t instanceof n)return t;if(qo.call(t,"__wrapped__"))return new n(t.__wrapped__,t.__chain__,Vt(t.__actions__))}return new n(t)}function n(t,e,n){this.__actions__=n||[],this.__chain__=!!e,this.__wrapped__=t}function r(t){this.actions=null,this.dir=1,this.dropCount=0,this.filtered=!1,this.iteratees=null,this.takeCount=xa,this.views=null,this.wrapped=t}function i(){var t=this.actions,e=this.iteratees,n=this.views,i=new r(this.wrapped);return i.actions=t?Vt(t):null,i.dir=this.dir,i.dropCount=this.dropCount,i.filtered=this.filtered,i.iteratees=e?Vt(e):null,i.takeCount=this.takeCount,i.views=n?Vt(n):null,i}function w(){if(this.filtered){var t=new r(this);t.dir=-1,t.filtered=!0}else t=this.clone(),t.dir*=-1;return t}function J(){var t=this.wrapped.value();if(!ja(t))return qe(t,this.actions);var e=this.dir,n=0>e,r=vn(0,t.length,this.views),i=r.start,o=r.end,a=o-i,s=this.dropCount,h=va(a,this.takeCount-s),u=n?o:i-1,l=this.iteratees,c=l?l.length:0,f=0,d=[];t:for(;a--&&h>f;){u+=e;for(var p=-1,g=t[u];++p<c;){var v=l[p],m=v.iteratee,y=m(g,u,t),w=v.type;if(w==j)g=y;else if(!y){if(w==N)continue t;break t}}s?s--:d[f++]=g}return d}function nt(){this.__data__={}}function it(t){return this.has(t)&&delete this.__data__[t]}function Ht(t){return"__proto__"==t?C:this.__data__[t]}function Zt(t){return"__proto__"!=t&&qo.call(this.__data__,t)}function Gt(t,e){return"__proto__"!=t&&(this.__data__[t]=e),this}function qt(t){var e=t?t.length:0;for(this.data={hash:fa(null),set:new oa};e--;)this.push(t[e])}function Yt(t,e){var n=t.data,r="string"==typeof e||_i(e)?n.set.has(e):n.hash[e];return r?0:-1}function Xt(t){var e=this.data;"string"==typeof t||_i(t)?e.set.add(t):e.hash[t]=!0}function Vt(t,e){var n=-1,r=t.length;for(e||(e=Bo(r));++n<r;)e[n]=t[n];return e}function $t(t,e){for(var n=-1,r=t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Qt(t,e){for(var n=t.length;n--&&e(t[n],n,t)!==!1;);return t}function te(t,e){for(var n=-1,r=t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function ee(t,e){for(var n=-1,r=t.length,i=-1,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[++i]=a)}return o}function ne(t,e){for(var n=-1,r=t.length,i=Bo(r);++n<r;)i[n]=e(t[n],n,t);return i}function re(t){for(var e=-1,n=t.length,r=ba;++e<n;){var i=t[e];i>r&&(r=i)}return r}function ie(t){for(var e=-1,n=t.length,r=xa;++e<n;){var i=t[e];r>i&&(r=i)}return r}function oe(t,e,n,r){var i=-1,o=t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function ae(t,e,n,r){var i=t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function se(t,e){for(var n=-1,r=t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function he(t,e){return"undefined"==typeof t?e:t}function ue(t,e,n,r){return"undefined"!=typeof t&&qo.call(r,n)?t:e}function le(t,e,n){var r=qa(e);if(!n)return fe(e,t,r);for(var i=-1,o=r.length;++i<o;){var a=r[i],s=t[a],h=n(s,e[a],a,t,e);(h===h?h===s:s!==s)&&("undefined"!=typeof s||a in t)||(t[a]=h)}return t}function ce(t,e){for(var n=-1,r=t.length,i=Sn(r),o=e.length,a=Bo(o);++n<o;){var s=e[n];i?(s=parseFloat(s),a[n]=bn(s,r)?t[s]:C):a[n]=t[s]}return a}function fe(t,e,n){n||(n=e,e={});for(var r=-1,i=n.length;++r<i;){var o=n[r];e[o]=t[o]}return e}function de(t,e){for(var n=-1,r=e.length;++n<r;){var i=e[n];t[i]=un(t[i],A,t)}return t}function pe(t,e,n){var r=typeof t;return"function"==r?"undefined"!=typeof e&&_n(t)?Xe(t,e,n):t:null==t?bo:"object"==r?De(t):Fe(t+"")}function ge(t,e,n,r,i,o,a){var s;if(n&&(s=i?n(t,r,i):n(t)),"undefined"!=typeof s)return s;if(!_i(t))return t;var h=ja(t);if(h){if(s=mn(t),!e)return Vt(t,s)}else{var u=Ko.call(t),l=u==$;if(u!=tt&&u!=q&&(!l||i))return Nt[u]?wn(t,u,e):i?t:{};if(s=yn(l?{}:t),!e)return fe(t,s,qa(t))}o||(o=[]),a||(a=[]);for(var c=o.length;c--;)if(o[c]==t)return a[c];return o.push(t),a.push(s),(h?$t:Ie)(t,function(r,i){s[i]=ge(r,e,n,i,t,o,a)}),s}function ve(t,e,n,r){if(!wi(t))throw new Wo(Z);return aa(function(){t.apply(C,je(n,r))},e)}function me(t,e){var n=t?t.length:0,r=[];if(!n)return r;var i=-1,o=gn(),s=o==a,h=s&&e.length>=200&&Ta(e),u=e.length;h&&(o=Yt,s=!1,e=h);t:for(;++i<n;){var l=t[i];if(s&&l===l){for(var c=u;c--;)if(e[c]===l)continue t;r.push(l)}else o(e,l)<0&&r.push(l)}return r}function ye(t,e){var n=t?t.length:0;if(!Sn(n))return Ie(t,e);for(var r=-1,i=Tn(t);++r<n&&e(i[r],r,i)!==!1;);return t}function we(t,e){var n=t?t.length:0;if(!Sn(n))return Ae(t,e);for(var r=Tn(t);n--&&e(r[n],n,r)!==!1;);return t}function _e(t,e){var n=!0;return ye(t,function(t,r,i){return n=!!e(t,r,i)}),n}function be(t,e){var n=[];return ye(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function xe(t,e,n,r){var i;return n(t,function(t,n,o){return e(t,n,o)?(i=r?n:t,!1):void 0}),i}function Se(t,e,n,r){for(var i=(r||0)-1,o=t.length,a=-1,s=[];++i<o;){var h=t[i];if(y(h)&&Sn(h.length)&&(ja(h)||fi(h))){e&&(h=Se(h,e,n));var u=-1,l=h.length;for(s.length+=l;++u<l;)s[++a]=h[u]}else n||(s[++a]=h)}return s}function ke(t,e,n){for(var r=-1,i=Tn(t),o=n(t),a=o.length;++r<a;){var s=o[r];if(e(i[s],s,i)===!1)break}return t}function Ee(t,e,n){for(var r=Tn(t),i=n(t),o=i.length;o--;){var a=i[o];if(e(r[a],a,r)===!1)break}return t}function Ce(t,e){return ke(t,e,Hi)}function Ie(t,e){return ke(t,e,qa)}function Ae(t,e){return Ee(t,e,qa)}function Le(t,e){for(var n=-1,r=e.length,i=-1,o=[];++n<r;){var a=e[n];wi(t[a])&&(o[++i]=a)}return o}function Re(t,e,n){var r=-1,i="function"==typeof e,o=t?t.length:0,a=Sn(o)?Bo(o):[];return ye(t,function(t){
var o=i?e:null!=t&&t[e];a[++r]=o?o.apply(t,n):C}),a}function Be(t,e,n,r,i,o){if(t===e)return 0!==t||1/t==1/e;var a=typeof t,s=typeof e;return"function"!=a&&"object"!=a&&"function"!=s&&"object"!=s||null==t||null==e?t!==t&&e!==e:Te(t,e,Be,n,r,i,o)}function Te(t,e,n,r,i,o,a){var s=ja(t),h=ja(e),u=Y,l=Y;s||(u=Ko.call(t),u==q?u=tt:u!=tt&&(s=Ai(t))),h||(l=Ko.call(e),l==q?l=tt:l!=tt&&(h=Ai(e)));var c=u==tt,f=l==tt,d=u==l;if(d&&!s&&!c)return cn(t,e,u);var p=c&&qo.call(t,"__wrapped__"),g=f&&qo.call(e,"__wrapped__");if(p||g)return n(p?t.value():t,g?e.value():e,r,i,o,a);if(!d)return!1;o||(o=[]),a||(a=[]);for(var v=o.length;v--;)if(o[v]==t)return a[v]==e;o.push(t),a.push(e);var m=(s?ln:fn)(t,e,n,r,i,o,a);return o.pop(),a.pop(),m}function Me(t,e,n,r,i){var o=e.length;if(null==t)return!o;for(var a=-1,s=!i;++a<o;)if(s&&r[a]?n[a]!==t[e[a]]:!qo.call(t,e[a]))return!1;for(a=-1;++a<o;){var h=e[a];if(s&&r[a])var u=qo.call(t,h);else{var l=t[h],c=n[a];u=i?i(l,c,h):C,"undefined"==typeof u&&(u=Be(c,l,i,!0))}if(!u)return!1}return!0}function Oe(t,e){var n=[];return ye(t,function(t,r,i){n.push(e(t,r,i))}),n}function De(t){var e=qa(t),n=e.length;if(1==n){var r=e[0],i=t[r];if(kn(i))return function(t){return null!=t&&i===t[r]&&qo.call(t,r)}}for(var o=Bo(n),a=Bo(n);n--;)i=t[e[n]],o[n]=i,a[n]=kn(i);return function(t){return Me(t,e,o,a)}}function Ue(t,e,n,r,i){var o=Sn(e.length)&&(ja(e)||Ai(e));return(o?$t:Ie)(e,function(e,a,s){if(y(e))return r||(r=[]),i||(i=[]),Pe(t,s,a,Ue,n,r,i);var h=t[a],u=n?n(h,e,a,t,s):C,l="undefined"==typeof u;l&&(u=e),!o&&"undefined"==typeof u||!l&&(u===u?u===h:h!==h)||(t[a]=u)}),t}function Pe(t,e,n,r,i,o,a){for(var s=o.length,h=e[n];s--;)if(o[s]==h)return void(t[n]=a[s]);var u=t[n],l=i?i(u,h,n,t,e):C,c="undefined"==typeof l;c&&(l=h,Sn(h.length)&&(ja(h)||Ai(h))?l=ja(u)?u:u?Vt(u):[]:Za(h)||fi(h)?l=fi(u)?Bi(u):Za(u)?u:{}:c=!1),o.push(h),a.push(l),c?t[n]=r(l,h,i,o,a):(l===l?l!==u:u===u)&&(t[n]=l)}function Fe(t){return function(e){return null==e?C:e[t]}}function ze(t,e){var n=e.length,r=ce(t,e);for(e.sort(o);n--;){var i=parseFloat(e[n]);if(i!=a&&bn(i)){var a=i;sa.call(t,i,1)}}return r}function We(t,e){return t+ea(_a()*(e-t+1))}function Ne(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}function je(t,e,n){var r=-1,i=t.length;e=null==e?0:+e||0,0>e&&(e=-e>i?0:i+e),n="undefined"==typeof n||n>i?i:+n||0,0>n&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Bo(i);++r<i;)o[r]=t[r+e];return o}function He(t,e){var n;return ye(t,function(t,r,i){return n=e(t,r,i),!n}),!!n}function Ze(t,e){var n=-1,r=gn(),i=t.length,o=r==a,s=o&&i>=200,h=s&&Ta(),u=[];h?(r=Yt,o=!1):(s=!1,h=e?[]:u);t:for(;++n<i;){var l=t[n],c=e?e(l,n,t):l;if(o&&l===l){for(var f=h.length;f--;)if(h[f]===c)continue t;e&&h.push(c),u.push(l)}else r(h,c)<0&&((e||s)&&h.push(c),u.push(l))}return u}function Ge(t,e){for(var n=-1,r=e.length,i=Bo(r);++n<r;)i[n]=t[e[n]];return i}function qe(t,e){var n=t;n instanceof r&&(n=n.value());for(var i=-1,o=e.length;++i<o;){var a=[n],s=e[i];ra.apply(a,s.args),n=s.func.apply(s.thisArg,a)}return n}function Ye(t,e,n){var r=0,i=t?t.length:r;if("number"==typeof e&&e===e&&Ea>=i){for(;i>r;){var o=r+i>>>1,a=t[o];(n?e>=a:e>a)?r=o+1:i=o}return i}return Ke(t,e,bo,n)}function Ke(t,e,n,r){e=n(e);for(var i=0,o=t?t.length:0,a=e!==e,s="undefined"==typeof e;o>i;){var h=ea((i+o)/2),u=n(t[h]),l=u===u;if(a)var c=l||r;else c=s?l&&(r||"undefined"!=typeof u):r?e>=u:e>u;c?i=h+1:o=h}return va(o,ka)}function Xe(t,e,n){if("function"!=typeof t)return bo;if("undefined"==typeof e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)};case 5:return function(n,r,i,o,a){return t.call(e,n,r,i,o,a)}}return function(){return t.apply(e,arguments)}}function Ve(t){return Jo.call(t,0)}function $e(t,e,n){for(var r=n.length,i=-1,o=ga(t.length-r,0),a=-1,s=e.length,h=Bo(o+s);++a<s;)h[a]=e[a];for(;++i<r;)h[n[i]]=t[i];for(;o--;)h[a++]=t[i++];return h}function Je(t,e,n){for(var r=-1,i=n.length,o=-1,a=ga(t.length-i,0),s=-1,h=e.length,u=Bo(a+h);++o<a;)u[o]=t[o];for(var l=o;++s<h;)u[l+s]=e[s];for(;++r<i;)u[l+n[r]]=t[o++];return u}function Qe(t,e){return function(n,r,i){var o=e?e():{};if(r=pn(r,i,3),ja(n))for(var a=-1,s=n.length;++a<s;){var h=n[a];t(o,h,r(h,a,n),n)}else ye(n,function(e,n,i){t(o,e,r(e,n,i),i)});return o}}function tn(t){return function(){var e=arguments.length,n=arguments[0];if(2>e||null==n)return n;if(e>3&&xn(arguments[1],arguments[2],arguments[3])&&(e=2),e>3&&"function"==typeof arguments[e-2])var r=Xe(arguments[--e-1],arguments[e--],5);else e>2&&"function"==typeof arguments[e-1]&&(r=arguments[--e]);for(var i=0;++i<e;){var o=arguments[i];o&&t(n,o,r)}return n}}function en(t,e){function n(){return(this instanceof n?r:t).apply(e,arguments)}var r=rn(t);return n}function nn(t){return function(e){for(var n=-1,r=mo(to(e)),i=r.length,o="";++n<i;)o=t(o,r[n],n);return o}}function rn(t){return function(){var e=Ra(t.prototype),n=t.apply(e,arguments);return _i(n)?n:e}}function on(t,e){return function(n,r,i){i&&xn(n,r,i)&&(r=null);var o=pn(),a=null==r;if(o===pe&&a||(a=!1,r=o(r,i,3)),a){var s=ja(n);if(s||!Ii(n))return t(s?n:Bn(n));r=u}return dn(n,r,e)}}function an(t,e,n,r,i,o,a,s,h,u){function l(){for(var w=arguments.length,b=w,x=Bo(w);b--;)x[b]=arguments[b];if(r&&(x=$e(x,r,i)),o&&(x=Je(x,o,a)),p||v){var S=l.placeholder,k=_(x,S);if(w-=k.length,u>w){var E=s?Vt(s):null,C=ga(u-w,0),I=p?k:null,R=p?null:k,B=p?x:null,T=p?null:x;e|=p?M:O,e&=~(p?O:M),g||(e&=~(A|L));var D=an(t,e,n,B,I,T,R,E,h,C);return D.placeholder=S,D}}var U=f?n:this;return d&&(t=U[y]),s&&(x=An(x,s)),c&&h<x.length&&(x.length=h),(this instanceof l?m||rn(t):t).apply(U,x)}var c=e&U,f=e&A,d=e&L,p=e&B,g=e&R,v=e&T,m=!d&&rn(t),y=t;return l}function sn(t,e,n){var r=t.length;if(e=+e,r>=e||!da(e))return"";var i=e-r;return n=null==n?" ":n+"",ho(n,Qo(i/n.length)).slice(0,i)}function hn(t,e,n,r){function i(){for(var e=-1,s=arguments.length,h=-1,u=r.length,l=Bo(s+u);++h<u;)l[h]=r[h];for(;s--;)l[h++]=arguments[++e];return(this instanceof i?a:t).apply(o?n:this,l)}var o=e&A,a=rn(t);return i}function un(t,e,n,r,i,o,a,s){var h=e&L;if(!h&&!wi(t))throw new Wo(Z);var u=r?r.length:0;if(u||(e&=~(M|O),r=i=null),u-=i?i.length:0,e&O){var l=r,c=i;r=i=null}var f=!h&&Ma(t),d=[t,e,n,r,i,l,c,o,a,s];if(f&&f!==!0&&(En(d,f),e=d[1],s=d[9]),d[9]=null==s?h?0:t.length:ga(s-u,0)||0,e==A)var p=en(d[0],d[2]);else p=e!=M&&e!=(A|M)||d[4].length?an.apply(null,d):hn.apply(null,d);var g=f?Ba:Oa;return g(p,d)}function ln(t,e,n,r,i,o,a){var s=-1,h=t.length,u=e.length,l=!0;if(h!=u&&!(i&&u>h))return!1;for(;l&&++s<h;){var c=t[s],f=e[s];if(l=C,r&&(l=i?r(f,c,s):r(c,f,s)),"undefined"==typeof l)if(i)for(var d=u;d--&&(f=e[d],!(l=c&&c===f||n(c,f,r,i,o,a))););else l=c&&c===f||n(c,f,r,i,o,a)}return!!l}function cn(t,e,n){switch(n){case K:case X:return+t==+e;case V:return t.name==e.name&&t.message==e.message;case Q:return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case et:case rt:return t==e+""}return!1}function fn(t,e,n,r,i,o,a){var s=qa(t),h=s.length,u=qa(e),l=u.length;if(h!=l&&!i)return!1;for(var c,f=-1;++f<h;){var d=s[f],p=qo.call(e,d);if(p){var g=t[d],v=e[d];p=C,r&&(p=i?r(v,g,d):r(g,v,d)),"undefined"==typeof p&&(p=g&&g===v||n(g,v,r,i,o,a))}if(!p)return!1;c||(c="constructor"==d)}if(!c){var m=t.constructor,y=e.constructor;if(m!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof m&&m instanceof m&&"function"==typeof y&&y instanceof y))return!1}return!0}function dn(t,e,n){var r=n?xa:ba,i=r,o=i;return ye(t,function(t,a,s){var h=e(t,a,s);((n?i>h:h>i)||h===r&&h===o)&&(i=h,o=t)}),o}function pn(t,n,r){var i=e.callback||wo;return i=i===wo?pe:i,r?i(t,n,r):i}function gn(t,n,r){var i=e.indexOf||Gn;return i=i===Gn?a:i,t?i(t,n,r):i}function vn(t,e,n){for(var r=-1,i=n?n.length:0;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=va(e,t+a);break;case"takeRight":t=ga(t,e-a)}}return{start:t,end:e}}function mn(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&qo.call(t,"index")&&(n.index=t.index,n.input=t.input),n}function yn(t){var e=t.constructor;return"function"==typeof e&&e instanceof e||(e=Po),new e}function wn(t,e,n){var r=t.constructor;switch(e){case ot:return Ve(t);case K:case X:return new r(+t);case at:case st:case ht:case ut:case lt:case ct:case ft:case dt:case pt:var i=t.buffer;return new r(n?Ve(i):i,t.byteOffset,t.length);case Q:case rt:return new r(t);case et:var o=new r(t.source,Ct.exec(t));o.lastIndex=t.lastIndex}return o}function _n(t){var n=e.support,r=!(n.funcNames?t.name:n.funcDecomp);if(!r){var i=Zo.call(t);n.funcNames||(r=!It.test(i)),r||(r=Ot.test(i)||Si(t),Ba(t,r))}return r}function bn(t,e){return t=+t,e=null==e?Ia:e,t>-1&&t%1==0&&e>t}function xn(t,e,n){if(!_i(n))return!1;var r=typeof e;if("number"==r)var i=n.length,o=Sn(i)&&bn(e,i);else o="string"==r&&e in n;return o&&n[e]===t}function Sn(t){return"number"==typeof t&&t>-1&&t%1==0&&Ia>=t}function kn(t){return t===t&&(0===t?1/t>0:!_i(t))}function En(t,e){var n=t[1],r=e[1],i=n|r,o=U|D,a=A|L,s=o|a|R|T,h=n&U&&!(r&U),u=n&D&&!(r&D),l=(u?t:e)[7],c=(h?t:e)[8],f=!(n>=D&&r>a||n>a&&r>=D),d=i>=o&&s>=i&&(D>n||(u||h)&&l.length<=c);if(!f&&!d)return t;r&A&&(t[2]=e[2],i|=n&A?0:R);var p=e[3];if(p){var g=t[3];t[3]=g?$e(g,p,e[4]):Vt(p),t[4]=g?_(t[3],G):Vt(e[4])}return p=e[5],p&&(g=t[5],t[5]=g?Je(g,p,e[6]):Vt(p),t[6]=g?_(t[5],G):Vt(e[6])),p=e[7],p&&(t[7]=Vt(p)),r&U&&(t[8]=null==t[8]?e[8]:va(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i,t}function Cn(t,e){t=Tn(t);for(var n=-1,r=e.length,i={};++n<r;){var o=e[n];o in t&&(i[o]=t[o])}return i}function In(t,e){var n={};return Ce(t,function(t,r,i){e(t,r,i)&&(n[r]=t)}),n}function An(t,e){for(var n=t.length,r=va(e.length,n),i=Vt(t);r--;){var o=e[r];t[r]=bn(o,n)?i[o]:C}return t}function Ln(t){{var n;e.support}if(!y(t)||Ko.call(t)!=tt||!qo.call(t,"constructor")&&(n=t.constructor,"function"==typeof n&&!(n instanceof n)))return!1;var r;return Ce(t,function(t,e){r=e}),"undefined"==typeof r||qo.call(t,r)}function Rn(t){for(var n=Hi(t),r=n.length,i=r&&t.length,o=e.support,a=i&&Sn(i)&&(ja(t)||o.nonEnumArgs&&fi(t)),s=-1,h=[];++s<r;){var u=n[s];(a&&bn(u,i)||qo.call(t,u))&&h.push(u)}return h}function Bn(t){return null==t?[]:Sn(t.length)?_i(t)?t:Po(t):Vi(t)}function Tn(t){return _i(t)?t:Po(t)}function Mn(t,e,n){e=(n?xn(t,e,n):null==e)?1:ga(+e||1,1);for(var r=0,i=t?t.length:0,o=-1,a=Bo(Qo(i/e));i>r;)a[++o]=je(t,r,r+=e);return a}function On(t){for(var e=-1,n=t?t.length:0,r=-1,i=[];++e<n;){var o=t[e];o&&(i[++r]=o)}return i}function Dn(){for(var t=-1,e=arguments.length;++t<e;){var n=arguments[t];if(ja(n)||fi(n))break}return me(n,Se(arguments,!1,!0,++t))}function Un(t,e,n){var r=t?t.length:0;return r?((n?xn(t,e,n):null==e)&&(e=1),je(t,0>e?0:e)):[]}function Pn(t,e,n){var r=t?t.length:0;return r?((n?xn(t,e,n):null==e)&&(e=1),e=r-(+e||0),je(t,0,0>e?0:e)):[]}function Fn(t,e,n){var r=t?t.length:0;if(!r)return[];for(e=pn(e,n,3);r--&&e(t[r],r,t););return je(t,0,r+1)}function zn(t,e,n){var r=t?t.length:0;if(!r)return[];var i=-1;for(e=pn(e,n,3);++i<r&&e(t[i],i,t););return je(t,i)}function Wn(t,e,n){var r=-1,i=t?t.length:0;for(e=pn(e,n,3);++r<i;)if(e(t[r],r,t))return r;return-1}function Nn(t,e,n){var r=t?t.length:0;for(e=pn(e,n,3);r--;)if(e(t[r],r,t))return r;return-1}function jn(t){return t?t[0]:C}function Hn(t,e,n){var r=t?t.length:0;return n&&xn(t,e,n)&&(e=!1),r?Se(t,e):[]}function Zn(t){var e=t?t.length:0;return e?Se(t,!0):[]}function Gn(t,e,n){var r=t?t.length:0;if(!r)return-1;if("number"==typeof n)n=0>n?ga(r+n,0):n||0;else if(n){var i=Ye(t,e),o=t[i];return(e===e?e===o:o!==o)?i:-1}return a(t,e,n)}function qn(t){return Pn(t,1)}function Yn(){for(var t=[],e=-1,n=arguments.length,r=[],i=gn(),o=i==a;++e<n;){var s=arguments[e];(ja(s)||fi(s))&&(t.push(s),r.push(o&&s.length>=120&&Ta(e&&s)))}n=t.length;var h=t[0],u=-1,l=h?h.length:0,c=[],f=r[0];t:for(;++u<l;)if(s=h[u],(f?Yt(f,s):i(c,s))<0){for(e=n;--e;){var d=r[e];if((d?Yt(d,s):i(t[e],s))<0)continue t}f&&f.push(s),c.push(s)}return c}function Kn(t){var e=t?t.length:0;return e?t[e-1]:C}function Xn(t,e,n){var r=t?t.length:0;if(!r)return-1;var i=r;if("number"==typeof n)i=(0>n?ga(r+n,0):va(n||0,r-1))+1;else if(n){i=Ye(t,e,!0)-1;var o=t[i];return(e===e?e===o:o!==o)?i:-1}if(e!==e)return m(t,i,!0);for(;i--;)if(t[i]===e)return i;return-1}function Vn(){var t=arguments[0];if(!t||!t.length)return t;for(var e=0,n=gn(),r=arguments.length;++e<r;)for(var i=0,o=arguments[e];(i=n(t,o,i))>-1;)sa.call(t,i,1);return t}function $n(t){return ze(t||[],Se(arguments,!1,!1,1))}function Jn(t,e,n){var r=-1,i=t?t.length:0,o=[];for(e=pn(e,n,3);++r<i;){var a=t[r];e(a,r,t)&&(o.push(a),sa.call(t,r--,1),i--)}return o}function Qn(t){return Un(t,1)}function tr(t,e,n){var r=t?t.length:0;return r?(n&&"number"!=typeof n&&xn(t,e,n)&&(e=0,n=r),je(t,e,n)):[]}function er(t,e,n,r){var i=pn(n);return i===pe&&null==n?Ye(t,e):Ke(t,e,i(n,r,1))}function nr(t,e,n,r){var i=pn(n);return i===pe&&null==n?Ye(t,e,!0):Ke(t,e,i(n,r,1),!0)}function rr(t,e,n){var r=t?t.length:0;return r?((n?xn(t,e,n):null==e)&&(e=1),je(t,0,0>e?0:e)):[]}function ir(t,e,n){var r=t?t.length:0;return r?((n?xn(t,e,n):null==e)&&(e=1),e=r-(+e||0),je(t,0>e?0:e)):[]}function or(t,e,n){var r=t?t.length:0;if(!r)return[];for(e=pn(e,n,3);r--&&e(t[r],r,t););return je(t,r+1)}function ar(t,e,n){var r=t?t.length:0;if(!r)return[];var i=-1;for(e=pn(e,n,3);++i<r&&e(t[i],i,t););return je(t,0,i)}function sr(){return Ze(Se(arguments,!1,!0))}function hr(t,e,n,r){var i=t?t.length:0;if(!i)return[];"boolean"!=typeof e&&null!=e&&(r=n,n=xn(t,e,r)?null:e,e=!1);var o=pn();return(o!==pe||null!=n)&&(n=o(n,r,3)),e&&gn()==a?b(t,n):Ze(t,n)}function ur(t){for(var e=-1,n=(t&&t.length&&re(ne(t,Go)))>>>0,r=Bo(n);++e<n;)r[e]=ne(t,Fe(e));return r}function lr(t){return me(t,je(arguments,1))}function cr(){for(var t=-1,e=arguments.length;++t<e;){var n=arguments[t];if(ja(n)||fi(n))var r=r?me(r,n).concat(me(n,r)):n}return r?Ze(r):[]}function fr(){for(var t=arguments.length,e=Bo(t);t--;)e[t]=arguments[t];return ur(e)}function dr(t,e){var n=-1,r=t?t.length:0,i={};for(!r||e||ja(t[0])||(e=[]);++n<r;){var o=t[n];e?i[o]=e[n]:o&&(i[o[0]]=o[1])}return i}function pr(t){var n=e(t);return n.__chain__=!0,n}function gr(t,e,n){return e.call(n,t),t}function vr(t,e,n){return e.call(n,t)}function mr(){return pr(this)}function yr(){var t=this.__wrapped__;return t instanceof r?(this.__actions__.length&&(t=new r(this)),new n(t.reverse())):this.thru(function(t){return t.reverse()})}function wr(){return this.value()+""}function _r(){return qe(this.__wrapped__,this.__actions__)}function br(t){var e=t?t.length:0;return Sn(e)&&(t=Bn(t)),ce(t,Se(arguments,!1,!1,1))}function xr(t,e,n){var r=t?t.length:0;return Sn(r)||(t=Vi(t),r=t.length),r?(n="number"==typeof n?0>n?ga(r+n,0):n||0:0,"string"==typeof t||!ja(t)&&Ii(t)?r>n&&t.indexOf(e,n)>-1:gn(t,e,n)>-1):!1}function Sr(t,e,n){var r=ja(t)?te:_e;return("function"!=typeof e||"undefined"!=typeof n)&&(e=pn(e,n,3)),r(t,e)}function kr(t,e,n){var r=ja(t)?ee:be;return e=pn(e,n,3),r(t,e)}function Er(t,e,n){if(ja(t)){var r=Wn(t,e,n);return r>-1?t[r]:C}return e=pn(e,n,3),xe(t,e,ye)}function Cr(t,e,n){return e=pn(e,n,3),xe(t,e,we)}function Ir(t,e){return Er(t,De(e))}function Ar(t,e,n){return"function"==typeof e&&"undefined"==typeof n&&ja(t)?$t(t,e):ye(t,Xe(e,n,3))}function Lr(t,e,n){return"function"==typeof e&&"undefined"==typeof n&&ja(t)?Qt(t,e):we(t,Xe(e,n,3))}function Rr(t,e){return Re(t,e,je(arguments,2))}function Br(t,e,n){var r=ja(t)?ne:Oe;return e=pn(e,n,3),r(t,e)}function Tr(t,e){return Br(t,Fe(e+""))}function Mr(t,e,n,r){var i=ja(t)?oe:Ne;return i(t,pn(e,r,4),n,arguments.length<3,ye)}function Or(t,e,n,r){var i=ja(t)?ae:Ne;return i(t,pn(e,r,4),n,arguments.length<3,we)}function Dr(t,e,n){var r=ja(t)?ee:be;return e=pn(e,n,3),r(t,function(t,n,r){return!e(t,n,r)})}function Ur(t,e,n){if(n?xn(t,e,n):null==e){t=Bn(t);var r=t.length;return r>0?t[We(0,r-1)]:C}var i=Pr(t);return i.length=va(0>e?0:+e||0,i.length),i}function Pr(t){t=Bn(t);for(var e=-1,n=t.length,r=Bo(n);++e<n;){var i=We(0,e);e!=i&&(r[e]=r[i]),r[i]=t[e]}return r}function Fr(t){var e=t?t.length:0;return Sn(e)?e:qa(t).length}function zr(t,e,n){var r=ja(t)?se:He;return("function"!=typeof e||"undefined"!=typeof n)&&(e=pn(e,n,3)),r(t,e)}function Wr(t,e,n){var r=-1,i=t?t.length:0,o=Sn(i)?Bo(i):[];return n&&xn(t,e,n)&&(e=null),e=pn(e,n,3),ye(t,function(t,n,i){o[++r]={criteria:e(t,n,i),index:r,value:t}}),s(o,f)}function Nr(t){var e=arguments;e.length>3&&xn(e[1],e[2],e[3])&&(e=[t,e[1]]);var n=-1,r=t?t.length:0,i=Se(e,!1,!1,1),o=Sn(r)?Bo(r):[];return ye(t,function(t,e,r){for(var a=i.length,s=Bo(a);a--;)s[a]=null==t?C:t[i[a]];o[++n]={criteria:s,index:n,value:t}}),s(o,d)}function jr(t,e){return kr(t,De(e))}function Hr(t,e){if(!wi(e)){if(!wi(t))throw new Wo(Z);var n=t;t=e,e=n}return t=da(t=+t)?t:0,function(){return--t<1?e.apply(this,arguments):void 0}}function Zr(t,e,n){return n&&xn(t,e,n)&&(e=null),e=t&&null==e?t.length:ga(+e||0,0),un(t,U,null,null,null,null,e)}function Gr(t,e){var n;if(!wi(e)){if(!wi(t))throw new Wo(Z);var r=t;t=e,e=r}return function(){return--t>0?n=e.apply(this,arguments):e=null,n}}function qr(t,e){var n=A;if(arguments.length>2){var r=je(arguments,2),i=_(r,qr.placeholder);n|=M}return un(t,n,e,r,i)}function Yr(t){return de(t,arguments.length>1?Se(arguments,!1,!1,1):Wi(t))}function Kr(t,e){var n=A|L;if(arguments.length>2){var r=je(arguments,2),i=_(r,Kr.placeholder);n|=M}return un(e,n,t,r,i)}function Xr(t,e,n){n&&xn(t,e,n)&&(e=null);var r=un(t,B,null,null,null,null,null,e);return r.placeholder=Xr.placeholder,r}function Vr(t,e,n){n&&xn(t,e,n)&&(e=null);var r=un(t,T,null,null,null,null,null,e);return r.placeholder=Vr.placeholder,r}function $r(t,e,n){function r(){f&&ta(f),h&&ta(h),h=f=d=C}function i(){var n=e-(Na()-l);if(0>=n||n>e){h&&ta(h);var r=d;h=f=d=C,r&&(p=Na(),u=t.apply(c,s),f||h||(s=c=null))}else f=aa(i,n)}function o(){f&&ta(f),h=f=d=C,(v||g!==e)&&(p=Na(),u=t.apply(c,s),f||h||(s=c=null))}function a(){if(s=arguments,l=Na(),c=this,d=v&&(f||!m),g===!1)var n=m&&!f;else{h||m||(p=l);var r=g-(l-p),a=0>=r||r>g;a?(h&&(h=ta(h)),p=l,u=t.apply(c,s)):h||(h=aa(o,r))}return a&&f?f=ta(f):f||e===g||(f=aa(i,e)),n&&(a=!0,u=t.apply(c,s)),!a||f||h||(s=c=null),u}var s,h,u,l,c,f,d,p=0,g=!1,v=!0;if(!wi(t))throw new Wo(Z);if(e=0>e?0:e,n===!0){var m=!0;v=!1}else _i(n)&&(m=n.leading,g="maxWait"in n&&ga(+n.maxWait||0,e),v="trailing"in n?n.trailing:v);return a.cancel=r,a}function Jr(t){return ve(t,1,arguments,1)}function Qr(t,e){return ve(t,e,arguments,2)}function ti(){var t=arguments,e=t.length;if(!e)return function(){};if(!te(t,wi))throw new Wo(Z);return function(){for(var n=0,r=t[n].apply(this,arguments);++n<e;)r=t[n].call(this,r);return r}}function ei(){var t=arguments,e=t.length-1;if(0>e)return function(){};if(!te(t,wi))throw new Wo(Z);return function(){for(var n=e,r=t[n].apply(this,arguments);n--;)r=t[n].call(this,r);return r}}function ni(t,e){if(!wi(t)||e&&!wi(e))throw new Wo(Z);var n=function(){var r=n.cache,i=e?e.apply(this,arguments):arguments[0];if(r.has(i))return r.get(i);var o=t.apply(this,arguments);return r.set(i,o),o};return n.cache=new ni.Cache,n}function ri(t){if(!wi(t))throw new Wo(Z);return function(){return!t.apply(this,arguments)}}function ii(t){return Gr(t,2)}function oi(t){var e=je(arguments,1),n=_(e,oi.placeholder);return un(t,M,null,e,n)}function ai(t){var e=je(arguments,1),n=_(e,ai.placeholder);return un(t,O,null,e,n)}function si(t){var e=Se(arguments,!1,!1,1);return un(t,D,null,null,null,e)}function hi(t,e,n){var r=!0,i=!0;if(!wi(t))throw new Wo(Z);return n===!1?r=!1:_i(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),jt.leading=r,jt.maxWait=+e,jt.trailing=i,$r(t,e,jt)}function ui(t,e){return e=null==e?bo:e,un(e,M,null,[t],[])}function li(t,e,n,r){return"boolean"!=typeof e&&null!=e&&(r=n,n=xn(t,e,r)?null:e,e=!1),n="function"==typeof n&&Xe(n,r,1),ge(t,e,n)}function ci(t,e,n){return e="function"==typeof e&&Xe(e,n,1),ge(t,!0,e)}function fi(t){var e=y(t)?t.length:C;return Sn(e)&&Ko.call(t)==q||!1}function di(t){return t===!0||t===!1||y(t)&&Ko.call(t)==K||!1}function pi(t){return y(t)&&Ko.call(t)==X||!1}function gi(t){return t&&1===t.nodeType&&y(t)&&Ko.call(t).indexOf("Element")>-1||!1}function vi(t){if(null==t)return!0;var e=t.length;return Sn(e)&&(ja(t)||Ii(t)||fi(t)||y(t)&&wi(t.splice))?!e:!qa(t).length}function mi(t,e,n,r){if(n="function"==typeof n&&Xe(n,r,3),!n&&kn(t)&&kn(e))return t===e;var i=n?n(t,e):C;return"undefined"==typeof i?Be(t,e,n):!!i}function yi(t){return y(t)&&"string"==typeof t.message&&Ko.call(t)==V||!1}function wi(t){return"function"==typeof t||!1}function _i(t){var e=typeof t;return"function"==e||t&&"object"==e||!1}function bi(t,e,n,r){var i=qa(e),o=i.length;if(n="function"==typeof n&&Xe(n,r,3),!n&&1==o){var a=i[0],s=e[a];if(kn(s))return null!=t&&s===t[a]&&qo.call(t,a)}for(var h=Bo(o),u=Bo(o);o--;)s=h[o]=e[i[o]],u[o]=kn(s);return Me(t,i,h,u,n)}function xi(t){return Ei(t)&&t!=+t}function Si(t){return null==t?!1:Ko.call(t)==$?Vo.test(Zo.call(t)):y(t)&&Lt.test(t)||!1}function ki(t){return null===t}function Ei(t){return"number"==typeof t||y(t)&&Ko.call(t)==Q||!1}function Ci(t){return y(t)&&Ko.call(t)==et||!1}function Ii(t){return"string"==typeof t||y(t)&&Ko.call(t)==rt||!1}function Ai(t){return y(t)&&Sn(t.length)&&Wt[Ko.call(t)]||!1}function Li(t){return"undefined"==typeof t}function Ri(t){var e=t?t.length:0;return Sn(e)?e?Vt(t):[]:Vi(t)}function Bi(t){return fe(t,Hi(t))}function Ti(t,e,n){var r=Ra(t);return n&&xn(t,e,n)&&(e=null),e?fe(e,r,qa(e)):r}function Mi(t){if(null==t)return t;var e=Vt(arguments);return e.push(he),Ga.apply(C,e)}function Oi(t,e,n){return e=pn(e,n,3),xe(t,e,Ie,!0)}function Di(t,e,n){return e=pn(e,n,3),xe(t,e,Ae,!0)}function Ui(t,e,n){return("function"!=typeof e||"undefined"!=typeof n)&&(e=Xe(e,n,3)),ke(t,e,Hi)}function Pi(t,e,n){return e=Xe(e,n,3),Ee(t,e,Hi)}function Fi(t,e,n){return("function"!=typeof e||"undefined"!=typeof n)&&(e=Xe(e,n,3)),Ie(t,e)}function zi(t,e,n){return e=Xe(e,n,3),Ee(t,e,qa)}function Wi(t){return Le(t,Hi(t))}function Ni(t,e){return t?qo.call(t,e):!1}function ji(t,e,n){n&&xn(t,e,n)&&(e=null);for(var r=-1,i=qa(t),o=i.length,a={};++r<o;){var s=i[r],h=t[s];e?qo.call(a,h)?a[h].push(s):a[h]=[s]:a[h]=s}return a}function Hi(t){if(null==t)return[];_i(t)||(t=Po(t));var e=t.length;e=e&&Sn(e)&&(ja(t)||La.nonEnumArgs&&fi(t))&&e||0;for(var n=t.constructor,r=-1,i="function"==typeof n&&n.prototype==t,o=Bo(e),a=e>0;++r<e;)o[r]=r+"";for(var s in t)a&&bn(s,e)||"constructor"==s&&(i||!qo.call(t,s))||o.push(s);return o}function Zi(t,e,n){var r={};return e=pn(e,n,3),Ie(t,function(t,n,i){r[n]=e(t,n,i)}),r}function Gi(t,e,n){if(null==t)return{};if("function"!=typeof e){var r=ne(Se(arguments,!1,!1,1),zo);return Cn(t,me(Hi(t),r))}return e=Xe(e,n,3),In(t,function(t,n,r){return!e(t,n,r)})}function qi(t){for(var e=-1,n=qa(t),r=n.length,i=Bo(r);++e<r;){var o=n[e];i[e]=[o,t[o]]}return i}function Yi(t,e,n){return null==t?{}:"function"==typeof e?In(t,Xe(e,n,3)):Cn(t,Se(arguments,!1,!1,1))}function Ki(t,e,n){var r=null==t?C:t[e];return"undefined"==typeof r&&(r=n),wi(r)?r.call(t):r}function Xi(t,e,n,r){var i=ja(t)||Ai(t);if(e=pn(e,r,4),null==n)if(i||_i(t)){var o=t.constructor;n=i?ja(t)?new o:[]:Ra("function"==typeof o&&o.prototype)}else n={};return(i?$t:Ie)(t,function(t,r,i){return e(n,t,r,i)}),n}function Vi(t){return Ge(t,qa(t))}function $i(t){return Ge(t,Hi(t))}function Ji(t,e,n){n&&xn(t,e,n)&&(e=n=null);var r=null==t,i=null==e;if(null==n&&(i&&"boolean"==typeof t?(n=t,t=1):"boolean"==typeof e&&(n=e,i=!0)),r&&i&&(e=1,i=!1),t=+t||0,i?(e=t,t=0):e=+e||0,n||t%1||e%1){var o=_a();return va(t+o*(e-t+parseFloat("1e-"+((o+"").length-1))),e)}return We(t,e)}function Qi(t){return t=h(t),t&&t.charAt(0).toUpperCase()+t.slice(1)}function to(t){return t=h(t),t&&t.replace(Rt,p)}function eo(t,e,n){t=h(t),e+="";var r=t.length;return n=("undefined"==typeof n?r:va(0>n?0:+n||0,r))-e.length,n>=0&&t.indexOf(e,n)==n}function no(t){return t=h(t),t&&bt.test(t)?t.replace(wt,g):t}function ro(t){return t=h(t),t&&Mt.test(t)?t.replace(Tt,"\\$&"):t}function io(t,e,n){t=h(t),e=+e;var r=t.length;if(r>=e||!da(e))return t;var i=(e-r)/2,o=ea(i),a=Qo(i);return n=sn("",a,n),n.slice(0,o)+t+n}function oo(t,e,n){return t=h(t),t&&sn(t,e,n)+t}function ao(t,e,n){return t=h(t),t&&t+sn(t,e,n)}function so(t,e,n){return n&&xn(t,e,n)&&(e=0),wa(t,e)}function ho(t,e){var n="";if(t=h(t),e=+e,1>e||!t||!da(e))return n;do e%2&&(n+=t),e=ea(e/2),t+=t;while(e);return n}function uo(t,e,n){return t=h(t),n=null==n?0:va(0>n?0:+n||0,t.length),t.lastIndexOf(e,n)==n}function lo(t,n,r){var i=e.templateSettings;r&&xn(t,n,r)&&(n=r=null),t=h(t),n=le(le({},r||n),i,ue);var o,a,s=le(le({},n.imports),i.imports,ue),u=qa(s),l=Ge(s,u),c=0,f=n.interpolate||Bt,d="__p += '",p=Fo((n.escape||Bt).source+"|"+f.source+"|"+(f===kt?Et:Bt).source+"|"+(n.evaluate||Bt).source+"|$","g"),g="//# sourceURL="+("sourceURL"in n?n.sourceURL:"lodash.templateSources["+ ++zt+"]")+"\n";t.replace(p,function(e,n,r,i,s,h){return r||(r=i),d+=t.slice(c,h).replace(Dt,v),n&&(o=!0,d+="' +\n__e("+n+") +\n'"),s&&(a=!0,d+="';\n"+s+";\n__p += '"),r&&(d+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=h+e.length,e}),d+="';\n";var m=n.variable;m||(d="with (obj) {\n"+d+"\n}\n"),d=(a?d.replace(gt,""):d).replace(vt,"$1").replace(mt,"$1;"),d="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+d+"return __p\n}";var y=yo(function(){return Oo(u,g+"return "+d).apply(C,l)});if(y.source=d,yi(y))throw y;return y}function co(t,e,n){var r=t;return(t=h(t))?(n?xn(r,e,n):null==e)?t.slice(x(t),S(t)+1):(e+="",t.slice(l(t,e),c(t,e)+1)):t}function fo(t,e,n){var r=t;return t=h(t),t?t.slice((n?xn(r,e,n):null==e)?x(t):l(t,e+"")):t}function po(t,e,n){var r=t;return t=h(t),t?(n?xn(r,e,n):null==e)?t.slice(0,S(t)+1):t.slice(0,c(t,e+"")+1):t}function go(t,e,n){n&&xn(t,e,n)&&(e=null);var r=P,i=F;if(null!=e)if(_i(e)){var o="separator"in e?e.separator:o;r="length"in e?+e.length||0:r,i="omission"in e?h(e.omission):i}else r=+e||0;if(t=h(t),r>=t.length)return t;var a=r-i.length;if(1>a)return i;var s=t.slice(0,a);if(null==o)return s+i;if(Ci(o)){if(t.slice(a).search(o)){var u,l,c=t.slice(0,a);for(o.global||(o=Fo(o.source,(Ct.exec(o)||"")+"g")),o.lastIndex=0;u=o.exec(c);)l=u.index;s=s.slice(0,null==l?a:l)}}else if(t.indexOf(o,a)!=a){var f=s.lastIndexOf(o);f>-1&&(s=s.slice(0,f))}return s+i}function vo(t){return t=h(t),t&&_t.test(t)?t.replace(yt,k):t}function mo(t,e,n){return n&&xn(t,e,n)&&(e=null),t=h(t),t.match(e||Ut)||[]}function yo(t){try{return t()}catch(e){return yi(e)?e:Mo(e)}}function wo(t,e,n){return n&&xn(t,e,n)&&(e=null),y(t)?xo(t):pe(t,e)}function _o(t){return function(){return t}}function bo(t){return t}function xo(t){return De(ge(t,!0))}function So(t,e,n){if(null==n){var r=_i(e),i=r&&qa(e),o=i&&i.length&&Le(e,i);(o?o.length:r)||(o=!1,n=e,e=t,t=this)}o||(o=Le(e,qa(e)));var a=!0,s=-1,h=wi(t),u=o.length;n===!1?a=!1:_i(n)&&"chain"in n&&(a=n.chain);for(;++s<u;){var l=o[s],c=e[l];t[l]=c,h&&(t.prototype[l]=function(e){return function(){var n=this.__chain__;if(a||n){var r=t(this.__wrapped__);return(r.__actions__=Vt(this.__actions__)).push({func:e,args:arguments,thisArg:t}),r.__chain__=n,r}var i=[this.value()];return ra.apply(i,arguments),e.apply(t,i)}}(c))}return t}function ko(){return t._=Xo,this}function Eo(){}function Co(t){return Fe(t+"")}function Io(t){return function(e){return null==t?C:t[e]}}function Ao(t,e,n){n&&xn(t,e,n)&&(e=n=null),t=+t||0,n=null==n?1:+n||0,null==e?(e=t,t=0):e=+e||0;for(var r=-1,i=ga(Qo((e-t)/(n||1)),0),o=Bo(i);++r<i;)o[r]=t,t+=n;return o}function Lo(t,e,n){if(t=+t,1>t||!da(t))return[];var r=-1,i=Bo(va(t,Sa));for(e=Xe(e,n,1);++r<t;)Sa>r?i[r]=e(r):e(r);return i}function Ro(t){var e=++Yo;return h(t)+e}t=t?Jt.defaults(Kt.Object(),t,Jt.pick(Kt,Ft)):Kt;var Bo=t.Array,To=t.Date,Mo=t.Error,Oo=t.Function,Do=t.Math,Uo=t.Number,Po=t.Object,Fo=t.RegExp,zo=t.String,Wo=t.TypeError,No=Bo.prototype,jo=Po.prototype,Ho=(Ho=t.window)&&Ho.document,Zo=Oo.prototype.toString,Go=Fe("length"),qo=jo.hasOwnProperty,Yo=0,Ko=jo.toString,Xo=t._,Vo=Fo("^"+ro(Ko).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$o=Si($o=t.ArrayBuffer)&&$o,Jo=Si(Jo=$o&&new $o(0).slice)&&Jo,Qo=Do.ceil,ta=t.clearTimeout,ea=Do.floor,na=Si(na=Po.getPrototypeOf)&&na,ra=No.push,ia=jo.propertyIsEnumerable,oa=Si(oa=t.Set)&&oa,aa=t.setTimeout,sa=No.splice,ha=Si(ha=t.Uint8Array)&&ha,ua=(No.unshift,Si(ua=t.WeakMap)&&ua),la=function(){try{var e=Si(e=t.Float64Array)&&e,n=new e(new $o(10),0,1)&&e}catch(r){}return n}(),ca=Si(ca=Bo.isArray)&&ca,fa=Si(fa=Po.create)&&fa,da=t.isFinite,pa=Si(pa=Po.keys)&&pa,ga=Do.max,va=Do.min,ma=Si(ma=To.now)&&ma,ya=Si(ya=Uo.isFinite)&&ya,wa=t.parseInt,_a=Do.random,ba=Uo.NEGATIVE_INFINITY,xa=Uo.POSITIVE_INFINITY,Sa=Do.pow(2,32)-1,ka=Sa-1,Ea=Sa>>>1,Ca=la?la.BYTES_PER_ELEMENT:0,Ia=Do.pow(2,53)-1,Aa=ua&&new ua,La=e.support={};!function(e){La.funcDecomp=!Si(t.WinRTError)&&Ot.test(E),La.funcNames="string"==typeof Oo.name;try{La.dom=11===Ho.createDocumentFragment().nodeType}catch(n){La.dom=!1}try{La.nonEnumArgs=!ia.call(arguments,1)}catch(n){La.nonEnumArgs=!0}}(0,0),e.templateSettings={escape:xt,evaluate:St,interpolate:kt,variable:"",imports:{_:e}};var Ra=function(){function e(){}return function(n){if(_i(n)){e.prototype=n;var r=new e;e.prototype=null}return r||t.Object()}}(),Ba=Aa?function(t,e){return Aa.set(t,e),t}:bo;Jo||(Ve=$o&&ha?function(t){var e=t.byteLength,n=la?ea(e/Ca):0,r=n*Ca,i=new $o(e);if(n){var o=new la(i,0,n);o.set(new la(t,0,n))}return e!=r&&(o=new ha(i,r),o.set(new ha(t,r))),i}:_o(null));var Ta=fa&&oa?function(t){return new qt(t)}:_o(null),Ma=Aa?function(t){return Aa.get(t)}:Eo,Oa=function(){var t=0,e=0;return function(n,r){var i=Na(),o=W-(i-e);if(e=i,o>0){if(++t>=z)return n}else t=0;return Ba(n,r)}}(),Da=Qe(function(t,e,n){qo.call(t,n)?++t[n]:t[n]=1}),Ua=Qe(function(t,e,n){qo.call(t,n)?t[n].push(e):t[n]=[e]}),Pa=Qe(function(t,e,n){t[n]=e}),Fa=on(re),za=on(ie,!0),Wa=Qe(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),Na=ma||function(){return(new To).getTime()},ja=ca||function(t){return y(t)&&Sn(t.length)&&Ko.call(t)==Y||!1};La.dom||(gi=function(t){return t&&1===t.nodeType&&y(t)&&!Za(t)||!1});var Ha=ya||function(t){return"number"==typeof t&&da(t)};(wi(/x/)||ha&&!wi(ha))&&(wi=function(t){return Ko.call(t)==$});var Za=na?function(t){if(!t||Ko.call(t)!=tt)return!1;var e=t.valueOf,n=Si(e)&&(n=na(e))&&na(n);return n?t==n||na(t)==n:Ln(t)}:Ln,Ga=tn(le),qa=pa?function(t){if(t)var e=t.constructor,n=t.length;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&n&&Sn(n)?Rn(t):_i(t)?pa(t):[]}:Rn,Ya=tn(Ue),Ka=nn(function(t,e,n){return e=e.toLowerCase(),t+(n?e.charAt(0).toUpperCase()+e.slice(1):e)}),Xa=nn(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});8!=wa(Pt+"08")&&(so=function(t,e,n){return(n?xn(t,e,n):null==e)?e=0:e&&(e=+e),t=co(t),wa(t,e||(At.test(t)?16:10))});var Va=nn(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),$a=nn(function(t,e,n){return t+(n?" ":"")+(e.charAt(0).toUpperCase()+e.slice(1))});return n.prototype=e.prototype,nt.prototype["delete"]=it,nt.prototype.get=Ht,nt.prototype.has=Zt,nt.prototype.set=Gt,qt.prototype.push=Xt,ni.Cache=nt,e.after=Hr,e.ary=Zr,e.assign=Ga,e.at=br,e.before=Gr,e.bind=qr,e.bindAll=Yr,e.bindKey=Kr,e.callback=wo,e.chain=pr,e.chunk=Mn,e.compact=On,e.constant=_o,e.countBy=Da,e.create=Ti,e.curry=Xr,e.curryRight=Vr,e.debounce=$r,e.defaults=Mi,e.defer=Jr,e.delay=Qr,e.difference=Dn,e.drop=Un,e.dropRight=Pn,e.dropRightWhile=Fn,e.dropWhile=zn,e.filter=kr,e.flatten=Hn,e.flattenDeep=Zn,e.flow=ti,e.flowRight=ei,e.forEach=Ar,e.forEachRight=Lr,e.forIn=Ui,e.forInRight=Pi,e.forOwn=Fi,e.forOwnRight=zi,e.functions=Wi,e.groupBy=Ua,e.indexBy=Pa,e.initial=qn,e.intersection=Yn,e.invert=ji,e.invoke=Rr,e.keys=qa,e.keysIn=Hi,e.map=Br,e.mapValues=Zi,e.matches=xo,e.memoize=ni,e.merge=Ya,e.mixin=So,e.negate=ri,e.omit=Gi,e.once=ii,e.pairs=qi,e.partial=oi,e.partialRight=ai,e.partition=Wa,e.pick=Yi,
e.pluck=Tr,e.property=Co,e.propertyOf=Io,e.pull=Vn,e.pullAt=$n,e.range=Ao,e.rearg=si,e.reject=Dr,e.remove=Jn,e.rest=Qn,e.shuffle=Pr,e.slice=tr,e.sortBy=Wr,e.sortByAll=Nr,e.take=rr,e.takeRight=ir,e.takeRightWhile=or,e.takeWhile=ar,e.tap=gr,e.throttle=hi,e.thru=vr,e.times=Lo,e.toArray=Ri,e.toPlainObject=Bi,e.transform=Xi,e.union=sr,e.uniq=hr,e.unzip=ur,e.values=Vi,e.valuesIn=$i,e.where=jr,e.without=lr,e.wrap=ui,e.xor=cr,e.zip=fr,e.zipObject=dr,e.backflow=ei,e.collect=Br,e.compose=ei,e.each=Ar,e.eachRight=Lr,e.extend=Ga,e.iteratee=wo,e.methods=Wi,e.object=dr,e.select=kr,e.tail=Qn,e.unique=hr,So(e,e),e.attempt=yo,e.camelCase=Ka,e.capitalize=Qi,e.clone=li,e.cloneDeep=ci,e.deburr=to,e.endsWith=eo,e.escape=no,e.escapeRegExp=ro,e.every=Sr,e.find=Er,e.findIndex=Wn,e.findKey=Oi,e.findLast=Cr,e.findLastIndex=Nn,e.findLastKey=Di,e.findWhere=Ir,e.first=jn,e.has=Ni,e.identity=bo,e.includes=xr,e.indexOf=Gn,e.isArguments=fi,e.isArray=ja,e.isBoolean=di,e.isDate=pi,e.isElement=gi,e.isEmpty=vi,e.isEqual=mi,e.isError=yi,e.isFinite=Ha,e.isFunction=wi,e.isMatch=bi,e.isNaN=xi,e.isNative=Si,e.isNull=ki,e.isNumber=Ei,e.isObject=_i,e.isPlainObject=Za,e.isRegExp=Ci,e.isString=Ii,e.isTypedArray=Ai,e.isUndefined=Li,e.kebabCase=Xa,e.last=Kn,e.lastIndexOf=Xn,e.max=Fa,e.min=za,e.noConflict=ko,e.noop=Eo,e.now=Na,e.pad=io,e.padLeft=oo,e.padRight=ao,e.parseInt=so,e.random=Ji,e.reduce=Mr,e.reduceRight=Or,e.repeat=ho,e.result=Ki,e.runInContext=E,e.size=Fr,e.snakeCase=Va,e.some=zr,e.sortedIndex=er,e.sortedLastIndex=nr,e.startCase=$a,e.startsWith=uo,e.template=lo,e.trim=co,e.trimLeft=fo,e.trimRight=po,e.trunc=go,e.unescape=vo,e.uniqueId=Ro,e.words=mo,e.all=Sr,e.any=zr,e.contains=xr,e.detect=Er,e.foldl=Mr,e.foldr=Or,e.head=jn,e.include=xr,e.inject=Mr,So(e,function(){var t={};return Ie(e,function(n,r){e.prototype[r]||(t[r]=n)}),t}(),!1),e.sample=Ur,e.prototype.sample=function(t){return this.__chain__||null!=t?this.thru(function(e){return Ur(e,t)}):Ur(this.value())},e.VERSION=I,$t(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){e[t].placeholder=e}),$t(["filter","map","takeWhile"],function(t,e){var n=e==N;r.prototype[t]=function(t,r){var i=this.clone(),o=i.filtered,a=i.iteratees||(i.iteratees=[]);return i.filtered=o||n||e==H&&i.dir<0,a.push({iteratee:pn(t,r,3),type:e}),i}}),$t(["drop","take"],function(t,e){var n=t+"Count",i=t+"While";r.prototype[t]=function(r){r=null==r?1:ga(+r||0,0);var i=this.clone();if(i.filtered){var o=i[n];i[n]=e?va(o,r):o+r}else{var a=i.views||(i.views=[]);a.push({size:r,type:t+(i.dir<0?"Right":"")})}return i},r.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()},r.prototype[t+"RightWhile"]=function(t,e){return this.reverse()[i](t,e).reverse()}}),$t(["first","last"],function(t,e){var n="take"+(e?"Right":"");r.prototype[t]=function(){return this[n](1).value()[0]}}),$t(["initial","rest"],function(t,e){var n="drop"+(e?"":"Right");r.prototype[t]=function(){return this[n](1)}}),$t(["pluck","where"],function(t,e){var n=e?"filter":"map",i=e?De:Fe;r.prototype[t]=function(t){return this[n](i(e?t:t+""))}}),r.prototype.dropWhile=function(t,e){var n,r,i=this.dir<0;return t=pn(t,e,3),this.filter(function(e,o,a){return n=n&&(i?r>o:o>r),r=o,n||(n=!t(e,o,a))})},r.prototype.reject=function(t,e){return t=pn(t,e,3),this.filter(function(e,n,r){return!t(e,n,r)})},r.prototype.slice=function(t,e){t=null==t?0:+t||0;var n=0>t?this.takeRight(-t):this.drop(t);return"undefined"!=typeof e&&(e=+e||0,n=0>e?n.dropRight(-e):n.take(e-t)),n},Ie(r.prototype,function(t,i){var o=e[i],a=/^(?:first|last)$/.test(i);e.prototype[i]=function(){var i=this.__wrapped__,s=arguments,h=this.__chain__,u=!!this.__actions__.length,l=i instanceof r,c=l&&!u;if(a&&!h)return c?t.call(i):o.call(e,this.value());var f=function(t){var n=[t];return ra.apply(n,s),o.apply(e,n)};if(l||ja(i)){var d=c?i:new r(this),p=t.apply(d,s);if(!a&&(u||p.actions)){var g=p.actions||(p.actions=[]);g.push({func:vr,args:[f],thisArg:e})}return new n(p,h)}return this.thru(f)}}),$t(["concat","join","pop","push","shift","sort","splice","unshift"],function(t){var n=No[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",i=/^(?:join|pop|shift)$/.test(t);e.prototype[t]=function(){var t=arguments;return i&&!this.__chain__?n.apply(this.value(),t):this[r](function(e){return n.apply(e,t)})}}),r.prototype.clone=i,r.prototype.reverse=w,r.prototype.value=J,e.prototype.chain=mr,e.prototype.reverse=yr,e.prototype.toString=wr,e.prototype.toJSON=e.prototype.valueOf=e.prototype.value=_r,e.prototype.collect=e.prototype.map,e.prototype.head=e.prototype.first,e.prototype.select=e.prototype.filter,e.prototype.tail=e.prototype.rest,e}var C,I="3.1.0",A=1,L=2,R=4,B=8,T=16,M=32,O=64,D=128,U=256,P=30,F="...",z=150,W=16,N=0,j=1,H=2,Z="Expected a function",G="__lodash_placeholder__",q="[object Arguments]",Y="[object Array]",K="[object Boolean]",X="[object Date]",V="[object Error]",$="[object Function]",J="[object Map]",Q="[object Number]",tt="[object Object]",et="[object RegExp]",nt="[object Set]",rt="[object String]",it="[object WeakMap]",ot="[object ArrayBuffer]",at="[object Float32Array]",st="[object Float64Array]",ht="[object Int8Array]",ut="[object Int16Array]",lt="[object Int32Array]",ct="[object Uint8Array]",ft="[object Uint8ClampedArray]",dt="[object Uint16Array]",pt="[object Uint32Array]",gt=/\b__p \+= '';/g,vt=/\b(__p \+=) '' \+/g,mt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,yt=/&(?:amp|lt|gt|quot|#39|#96);/g,wt=/[&<>"'`]/g,_t=RegExp(yt.source),bt=RegExp(wt.source),xt=/<%-([\s\S]+?)%>/g,St=/<%([\s\S]+?)%>/g,kt=/<%=([\s\S]+?)%>/g,Et=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ct=/\w*$/,It=/^\s*function[ \n\r\t]+\w/,At=/^0[xX]/,Lt=/^\[object .+?Constructor\]$/,Rt=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Bt=/($^)/,Tt=/[.*+?^${}()|[\]\/\\]/g,Mt=RegExp(Tt.source),Ot=/\bthis\b/,Dt=/['\n\r\u2028\u2029\\]/g,Ut=function(){var t="[A-Z\\xc0-\\xd6\\xd8-\\xde]",e="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(t+"{2,}(?="+t+e+")|"+t+"?"+e+"|"+t+"+|[0-9]+","g")}(),Pt=" 	\f \ufeff\n\r\u2028\u2029 ᠎             　",Ft=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","document","isFinite","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","window","WinRTError"],zt=-1,Wt={};Wt[at]=Wt[st]=Wt[ht]=Wt[ut]=Wt[lt]=Wt[ct]=Wt[ft]=Wt[dt]=Wt[pt]=!0,Wt[q]=Wt[Y]=Wt[ot]=Wt[K]=Wt[X]=Wt[V]=Wt[$]=Wt[J]=Wt[Q]=Wt[tt]=Wt[et]=Wt[nt]=Wt[rt]=Wt[it]=!1;var Nt={};Nt[q]=Nt[Y]=Nt[ot]=Nt[K]=Nt[X]=Nt[at]=Nt[st]=Nt[ht]=Nt[ut]=Nt[lt]=Nt[Q]=Nt[tt]=Nt[et]=Nt[rt]=Nt[ct]=Nt[ft]=Nt[dt]=Nt[pt]=!0,Nt[V]=Nt[$]=Nt[J]=Nt[nt]=Nt[it]=!1;var jt={leading:!1,maxWait:0,trailing:!1},Ht={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},Zt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Gt={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},qt={"function":!0,object:!0},Yt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Kt=qt[typeof window]&&window!==(this&&this.window)?window:this,Xt=qt[typeof e]&&e&&!e.nodeType&&e,Vt=qt[typeof t]&&t&&!t.nodeType&&t,$t=Xt&&Vt&&"object"==typeof i&&i;!$t||$t.global!==$t&&$t.window!==$t&&$t.self!==$t||(Kt=$t);var Jt=(Vt&&Vt.exports===Xt&&Xt,E());Kt._=Jt,r=function(){return Jt}.call(e,n,e,t),!(r!==C&&(t.exports=r))}).call(this)}).call(e,n(15)(t),function(){return this}())},function(t,e,n){(function(e){(function(){var r,i,o,a=function(t,e){return function(){return t.apply(e,arguments)}};o=n(45),i=function(){function t(t,e,n){this.document=t,this.id=e,this.data=null!=n?n:{},this.finalize=a(this.finalize,this),this.gen=0,this.deflate=null,this.compress=this.document.compress&&!this.data.Filter,this.uncompressedLength=0,this.chunks=[]}return t.prototype.initDeflate=function(){return this.data.Filter="FlateDecode",this.deflate=o.createDeflate(),this.deflate.on("data",function(t){return function(e){return t.chunks.push(e),t.data.Length+=e.length}}(this)),this.deflate.on("end",this.finalize)},t.prototype.write=function(t){var n;return e.isBuffer(t)||(t=new e(t+"\n","binary")),this.uncompressedLength+=t.length,null==(n=this.data).Length&&(n.Length=0),this.compress?(this.deflate||this.initDeflate(),this.deflate.write(t)):(this.chunks.push(t),this.data.Length+=t.length)},t.prototype.end=function(t){return("string"==typeof t||e.isBuffer(t))&&this.write(t),this.deflate?this.deflate.end():this.finalize()},t.prototype.finalize=function(){var t,e,n,i;if(this.offset=this.document._offset,this.document._write(""+this.id+" "+this.gen+" obj"),this.document._write(r.convert(this.data)),this.chunks.length){for(this.document._write("stream"),i=this.chunks,e=0,n=i.length;n>e;e++)t=i[e],this.document._write(t);this.chunks.length=0,this.document._write("\nendstream")}return this.document._write("endobj"),this.document._refEnd(this)},t.prototype.toString=function(){return""+this.id+" "+this.gen+" R"},t}(),t.exports=i,r=n(32)}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e,n){(function(e){t.exports=e}).call(e,{})},function(t,e,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t,e,n){this.MAX_CHAR_TYPES=92,this.pdfkitDoc=t,this.path=e,this.pdfFonts=[],this.charCatalogue=[],this.name=n,this.__defineGetter__("ascender",function(){var t=this.getFont(0);return t.ascender}),this.__defineGetter__("decender",function(){var t=this.getFont(0);return t.decender})}var i=n(11);r.prototype.getFont=function(t){if(!this.pdfFonts[t]){var e=this.name+t;this.postscriptName&&delete this.pdfkitDoc._fontFamilies[this.postscriptName],this.pdfFonts[t]=this.pdfkitDoc.font(this.path,e)._font,this.postscriptName||(this.postscriptName=this.pdfFonts[t].name)}return this.pdfFonts[t]},r.prototype.widthOfString=function(){var t=this.getFont(0);return t.widthOfString.apply(t,arguments)},r.prototype.lineHeight=function(){var t=this.getFont(0);return t.lineHeight.apply(t,arguments)},r.prototype.ref=function(){var t=this.getFont(0);return t.ref.apply(t,arguments)};var o=function(t){return t.charCodeAt(0)};r.prototype.encode=function(t){var e=this,n=i.chain(t.split("")).map(o).uniq().value();if(n.length>e.MAX_CHAR_TYPES)throw new Error("Inline has more than "+e.MAX_CHAR_TYPES+": "+t+" different character types and therefore cannot be properly embedded into pdf.");var r=function(t){return i.uniq(t.concat(n)).length<=e.MAX_CHAR_TYPES},a=i.findIndex(e.charCatalogue,r);0>a&&(a=e.charCatalogue.length,e.charCatalogue[a]=[]);var s=this.getFont(a);s.use(t),i.each(n,function(t){i.includes(e.charCatalogue[a],t)||e.charCatalogue[a].push(t)});var h=i.map(s.encode(t),function(t){return t.charCodeAt(0).toString(16)}).join("");return{encodedText:h,fontId:s.id}},t.exports=r},function(t,e,n){(function(e){(function(){var r,i,o,a,s;s=n(10),r=n(34),i=n(35),a=n(36),o=function(){function t(){}return t.open=function(t,n){var r,o;if(e.isBuffer(t))r=t;else if(o=/^data:.+;base64,(.*)$/.exec(t))r=new e(o[1],"base64");else if(r=s.readFileSync(t),!r)return;if(255===r[0]&&216===r[1])return new i(r,n);if(137===r[0]&&"PNG"===r.toString("ascii",1,4))return new a(r,n);throw new Error("Unknown image format.")},t}(),t.exports=o}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(){this.events={}}r.prototype.startTracking=function(t,e){var n=this.events[t]||(this.events[t]=[]);n.indexOf(e)<0&&n.push(e)},r.prototype.stopTracking=function(t,e){var n=this.events[t];if(n){var r=n.indexOf(e);r>=0&&n.splice(r,1)}},r.prototype.emit=function(t){var e=Array.prototype.slice.call(arguments,1),n=this.events[t];n&&n.forEach(function(t){t.apply(this,e)})},r.prototype.auto=function(t,e,n){this.startTracking(t,e),n(),this.stopTracking(t,e)},t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,a,s){this.textTools=new i(t),this.styleStack=new o(e,n),this.imageMeasure=r,this.tableLayouts=a,this.images=s,this.autoImageIndex=1}var i=n(26),o=n(27),a=n(22),s=n(25).fontStringify,h=n(25).pack,u=n(33);r.prototype.measureDocument=function(t){return this.measureNode(t)},r.prototype.measureNode=function(t){function e(t){var e=t._margin;return e&&(t._minWidth+=e[0]+e[2],t._maxWidth+=e[0]+e[2]),t}function n(){function e(t,e){return t.marginLeft||t.marginTop||t.marginRight||t.marginBottom?[t.marginLeft||e[0]||0,t.marginTop||e[1]||0,t.marginRight||e[2]||0,t.marginBottom||e[3]||0]:e}function n(t){for(var e={},n=t.length-1;n>=0;n--){var i=t[n],o=r.styleStack.styleDictionary[i];for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}function i(t){return"number"==typeof t||t instanceof Number?t=[t,t,t,t]:t instanceof Array&&2===t.length&&(t=[t[0],t[1],t[0],t[1]]),t}var o=[void 0,void 0,void 0,void 0];if(t.style){var a=t.style instanceof Array?t.style:[t.style],s=n(a);s&&(o=e(s,o)),s.margin&&(o=i(s.margin))}return o=e(t,o),t.margin&&(o=i(t.margin)),void 0===o[0]&&void 0===o[1]&&void 0===o[2]&&void 0===o[3]?null:o}t instanceof Array?t={stack:t}:("string"==typeof t||t instanceof String)&&(t={text:t});var r=this;return this.styleStack.auto(t,function(){if(t._margin=n(t),t.columns)return e(r.measureColumns(t));if(t.stack)return e(r.measureVerticalContainer(t));if(t.ul)return e(r.measureList(!1,t));if(t.ol)return e(r.measureList(!0,t));if(t.table)return e(r.measureTable(t));if(void 0!==t.text)return e(r.measureLeaf(t));if(t.image)return e(r.measureImage(t));if(t.canvas)return e(r.measureCanvas(t));if(t.qr)return e(r.measureQr(t));throw"Unrecognized document structure: "+JSON.stringify(t,s)})},r.prototype.convertIfBase64Image=function(t){if(/^data:image\/(jpeg|jpg|png);base64,/.test(t.image)){var e="$$pdfmake$$"+this.autoImageIndex++;this.images[e]=t.image,t.image=e}},r.prototype.measureImage=function(t){this.images&&this.convertIfBase64Image(t);var e=this.imageMeasure.measureImage(t.image);if(t.fit){var n=e.width/e.height>t.fit[0]/t.fit[1]?t.fit[0]/e.width:t.fit[1]/e.height;t._width=t._minWidth=t._maxWidth=e.width*n,t._height=e.height*n}else t._width=t._minWidth=t._maxWidth=t.width||e.width,t._height=t.height||e.height*t._width/e.width;return t._alignment=this.styleStack.getProperty("alignment"),t},r.prototype.measureLeaf=function(t){var e=this.textTools.buildInlines(t.text,this.styleStack);return t._inlines=e.items,t._minWidth=e.minWidth,t._maxWidth=e.maxWidth,t},r.prototype.measureVerticalContainer=function(t){var e=t.stack;t._minWidth=0,t._maxWidth=0;for(var n=0,r=e.length;r>n;n++)e[n]=this.measureNode(e[n]),t._minWidth=Math.max(t._minWidth,e[n]._minWidth),t._maxWidth=Math.max(t._maxWidth,e[n]._maxWidth);return t},r.prototype.gapSizeForList=function(t,e){if(t){var n=e.length.toString().replace(/./g,"9");return this.textTools.sizeOfString(n+". ",this.styleStack)}return this.textTools.sizeOfString("9. ",this.styleStack)},r.prototype.buildMarker=function(t,e,n,r){var i;if(t)i={_inlines:this.textTools.buildInlines(e,n).items};else{var o=r.fontSize/6;i={canvas:[{x:o,y:r.height/r.lineHeight+r.decender-r.fontSize/3,r1:o,r2:o,type:"ellipse",color:"black"}]}}return i._minWidth=i._maxWidth=r.width,i._minHeight=i._maxHeight=r.height,i},r.prototype.measureList=function(t,e){var n=this.styleStack.clone(),r=t?e.ol:e.ul;e._gapSize=this.gapSizeForList(t,r),e._minWidth=0,e._maxWidth=0;for(var i=1,o=0,a=r.length;a>o;o++){var s=r[o]=this.measureNode(r[o]),h=i++ +". ";s.ol||s.ul||(s.listMarker=this.buildMarker(t,s.counter||h,n,e._gapSize)),e._minWidth=Math.max(e._minWidth,r[o]._minWidth+e._gapSize.width),e._maxWidth=Math.max(e._maxWidth,r[o]._maxWidth+e._gapSize.width)}return e},r.prototype.measureColumns=function(t){var e=t.columns;t._gap=this.styleStack.getProperty("columnGap")||0;for(var n=0,r=e.length;r>n;n++)e[n]=this.measureNode(e[n]);var i=a.measureMinMax(e);return t._minWidth=i.min+t._gap*(e.length-1),t._maxWidth=i.max+t._gap*(e.length-1),t},r.prototype.measureTable=function(t){function e(t,e){return function(){return null!==e&&"object"==typeof e&&(e.fillColor=t.styleStack.getProperty("fillColor")),t.measureNode(e)}}function n(e){var n=t.layout;("string"==typeof t.layout||t instanceof String)&&(n=e[n]);var r={hLineWidth:function(t,e){return 1},vLineWidth:function(t,e){return 1},hLineColor:function(t,e){return"black"},vLineColor:function(t,e){return"black"},paddingLeft:function(t,e){return 4},paddingRight:function(t,e){return 4},paddingTop:function(t,e){return 2},paddingBottom:function(t,e){return 2}};return h(r,n)}function r(e){for(var n=[],r=0,i=0,o=0,a=t.table.widths.length;a>o;o++){var s=i+e.vLineWidth(o,t)+e.paddingLeft(o,t);n.push(s),r+=s,i=e.paddingRight(o,t)}return r+=i+e.vLineWidth(t.table.widths.length,t),{total:r,offsets:n}}function i(){for(var e,n,r=0,i=g.length;i>r;r++){var a=g[r],s=o(a.col,a.span,t._offsets),h=a.minWidth-s.minWidth,u=a.maxWidth-s.maxWidth;if(h>0)for(e=h/a.span,n=0;n<a.span;n++)t.table.widths[a.col+n]._minWidth+=e;if(u>0)for(e=u/a.span,n=0;n<a.span;n++)t.table.widths[a.col+n]._maxWidth+=e}}function o(e,n,r){for(var i={minWidth:0,maxWidth:0},o=0;n>o;o++)i.minWidth+=t.table.widths[e+o]._minWidth+(o?r.offsets[e+o]:0),i.maxWidth+=t.table.widths[e+o]._maxWidth+(o?r.offsets[e+o]:0);return i}function s(t,e,n){for(var r=1;n>r;r++)t[e+r]={_span:!0,_minWidth:0,_maxWidth:0,rowSpan:t[e].rowSpan}}function u(t,e,n,r){for(var i=1;r>i;i++)t.body[e+i][n]={_span:!0,_minWidth:0,_maxWidth:0,fillColor:t.body[e][n].fillColor}}function l(t){if(t.table.widths||(t.table.widths="auto"),"string"==typeof t.table.widths||t.table.widths instanceof String)for(t.table.widths=[t.table.widths];t.table.widths.length<t.table.body[0].length;)t.table.widths.push(t.table.widths[t.table.widths.length-1]);for(var e=0,n=t.table.widths.length;n>e;e++){var r=t.table.widths[e];("number"==typeof r||r instanceof Number||"string"==typeof r||r instanceof String)&&(t.table.widths[e]={width:r})}}l(t),t._layout=n(this.tableLayouts),t._offsets=r(t._layout);var c,f,d,p,g=[];for(c=0,d=t.table.body[0].length;d>c;c++){var v=t.table.widths[c];for(v._minWidth=0,v._maxWidth=0,f=0,p=t.table.body.length;p>f;f++){var m=t.table.body[f],y=m[c];if(!y._span){y=m[c]=this.styleStack.auto(y,e(this,y)),y.colSpan&&y.colSpan>1?(s(m,c,y.colSpan),g.push({col:c,span:y.colSpan,minWidth:y._minWidth,maxWidth:y._maxWidth})):(v._minWidth=Math.max(v._minWidth,y._minWidth),v._maxWidth=Math.max(v._maxWidth,y._maxWidth))}y.rowSpan&&y.rowSpan>1&&u(t.table,f,c,y.rowSpan)}}i();var w=a.measureMinMax(t.table.widths);return t._minWidth=w.min+t._offsets.total,t._maxWidth=w.max+t._offsets.total,t},r.prototype.measureCanvas=function(t){for(var e=0,n=0,r=0,i=t.canvas.length;i>r;r++){var o=t.canvas[r];switch(o.type){case"ellipse":e=Math.max(e,o.x+o.r1),n=Math.max(n,o.y+o.r2);break;case"rect":e=Math.max(e,o.x+o.w),n=Math.max(n,o.y+o.h);break;case"line":e=Math.max(e,o.x1,o.x2),n=Math.max(n,o.y1,o.y2);break;case"polyline":for(var a=0,s=o.points.length;s>a;a++)e=Math.max(e,o.points[a].x),n=Math.max(n,o.points[a].y)}}return t._minWidth=t._maxWidth=e,t._minHeight=t._maxHeight=n,t},r.prototype.measureQr=function(t){return t=u.measure(t),t._alignment=this.styleStack.getProperty("alignment"),t},t.exports=r},function(t,e,n){"use strict";function r(t,e){this.pages=[],this.pageMargins=e,this.x=e.left,this.availableWidth=t.width-e.left-e.right,this.availableHeight=0,this.page=-1,this.snapshots=[],this.endingCell=null,this.tracker=new a,this.addPage(t)}function i(t,e){return void 0===t?e:"landscape"===t?"landscape":"portrait"}function o(t,e){var n;return n=t.page>e.page?t:e.page>t.page?e:t.y>e.y?t:e,{page:n.page,x:n.x,y:n.y,availableHeight:n.availableHeight,availableWidth:n.availableWidth}}var a=n(18);r.prototype.beginColumnGroup=function(){this.snapshots.push({x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,page:this.page,bottomMost:{y:this.y,page:this.page},endingCell:this.endingCell,lastColumnWidth:this.lastColumnWidth}),this.lastColumnWidth=0},r.prototype.beginColumn=function(t,e,n){var r=this.snapshots[this.snapshots.length-1];this.calculateBottomMost(r),this.endingCell=n,this.page=r.page,this.x=this.x+this.lastColumnWidth+(e||0),this.y=r.y,this.availableWidth=t,this.availableHeight=r.availableHeight,this.lastColumnWidth=t},r.prototype.calculateBottomMost=function(t){this.endingCell?(this.saveContextInEndingCell(this.endingCell),this.endingCell=null):t.bottomMost=o(this,t.bottomMost)},r.prototype.markEnding=function(t){this.page=t._columnEndingContext.page,this.x=t._columnEndingContext.x,this.y=t._columnEndingContext.y,this.availableWidth=t._columnEndingContext.availableWidth,this.availableHeight=t._columnEndingContext.availableHeight,this.lastColumnWidth=t._columnEndingContext.lastColumnWidth},r.prototype.saveContextInEndingCell=function(t){t._columnEndingContext={page:this.page,x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,lastColumnWidth:this.lastColumnWidth}},r.prototype.completeColumnGroup=function(){var t=this.snapshots.pop();this.calculateBottomMost(t),this.endingCell=null,this.x=t.x,this.y=t.bottomMost.y,this.page=t.bottomMost.page,this.availableWidth=t.availableWidth,this.availableHeight=t.bottomMost.availableHeight,this.lastColumnWidth=t.lastColumnWidth},r.prototype.addMargin=function(t,e){this.x+=t,this.availableWidth-=t+(e||0)},r.prototype.moveDown=function(t){return this.y+=t,this.availableHeight-=t,this.availableHeight>0},r.prototype.initializePage=function(){this.y=this.pageMargins.top,this.availableHeight=this.getCurrentPage().pageSize.height-this.pageMargins.top-this.pageMargins.bottom,this.pageSnapshot().availableWidth=this.getCurrentPage().pageSize.width-this.pageMargins.left-this.pageMargins.right},r.prototype.pageSnapshot=function(){return this.snapshots[0]?this.snapshots[0]:this},r.prototype.moveTo=function(t,e){void 0!==t&&null!==t&&(this.x=t,this.availableWidth=this.getCurrentPage().pageSize.width-this.x-this.pageMargins.right),void 0!==e&&null!==e&&(this.y=e,this.availableHeight=this.getCurrentPage().pageSize.height-this.y-this.pageMargins.bottom)},r.prototype.beginDetachedBlock=function(){this.snapshots.push({x:this.x,y:this.y,availableHeight:this.availableHeight,availableWidth:this.availableWidth,page:this.page,endingCell:this.endingCell,lastColumnWidth:this.lastColumnWidth})},r.prototype.endDetachedBlock=function(){var t=this.snapshots.pop();this.x=t.x,this.y=t.y,this.availableWidth=t.availableWidth,this.availableHeight=t.availableHeight,this.page=t.page,this.endingCell=t.endingCell,this.lastColumnWidth=t.lastColumnWidth};var s=function(t,e){return e=i(e,t.pageSize.orientation),e!==t.pageSize.orientation?{orientation:e,width:t.pageSize.height,height:t.pageSize.width}:{orientation:t.pageSize.orientation,width:t.pageSize.width,height:t.pageSize.height}};r.prototype.moveToNextPage=function(t){var e=this.page+1,n=this.page,r=this.y,i=e>=this.pages.length;return i?this.addPage(s(this.getCurrentPage(),t)):(this.page=e,this.initializePage()),{newPageCreated:i,prevPage:n,prevY:r,y:this.y}},r.prototype.addPage=function(t){var e={items:[],pageSize:t};return this.pages.push(e),this.page=this.pages.length-1,this.initializePage(),this.tracker.emit("pageAdded"),e},r.prototype.getCurrentPage=function(){return this.page<0||this.page>=this.pages.length?null:this.pages[this.page]},r.prototype.getCurrentPosition=function(){var t=this.getCurrentPage().pageSize,e=t.height-this.pageMargins.top-this.pageMargins.bottom,n=t.width-this.pageMargins.left-this.pageMargins.right;return{pageNumber:this.page+1,pageOrientation:t.orientation,pageInnerHeight:e,pageInnerWidth:n,left:this.x,top:this.y,verticalRatio:(this.y-this.pageMargins.top)/e,horizontalRatio:(this.x-this.pageMargins.left)/n}},t.exports=r},function(t,e,n){"use strict";function r(t,e){this.transactionLevel=0,this.repeatables=[],this.tracker=e,this.writer=new o(t,e)}function i(t,e){var n=e(t);return n||(t.moveToNextPage(),n=e(t)),n}var o=n(37);r.prototype.addLine=function(t,e,n){return i(this,function(r){return r.writer.addLine(t,e,n)})},r.prototype.addImage=function(t,e){return i(this,function(n){return n.writer.addImage(t,e)})},r.prototype.addQr=function(t,e){return i(this,function(n){return n.writer.addQr(t,e)})},r.prototype.addVector=function(t,e,n,r){return this.writer.addVector(t,e,n,r)},r.prototype.addFragment=function(t,e,n,r){this.writer.addFragment(t,e,n,r)||(this.moveToNextPage(),this.writer.addFragment(t,e,n,r))},r.prototype.moveToNextPage=function(t){var e=this.writer.context.moveToNextPage(t);e.newPageCreated?this.repeatables.forEach(function(t){this.writer.addFragment(t,!0)},this):this.repeatables.forEach(function(t){this.writer.context.moveDown(t.height)},this),this.writer.tracker.emit("pageChanged",{prevPage:e.prevPage,prevY:e.prevY,y:e.y})},r.prototype.beginUnbreakableBlock=function(t,e){0===this.transactionLevel++&&(this.originalX=this.writer.context.x,this.writer.pushContext(t,e))},r.prototype.commitUnbreakableBlock=function(t,e){if(0===--this.transactionLevel){var n=this.writer.context;this.writer.popContext();var r=n.pages.length;if(r>0){var i=n.pages[0];if(i.xOffset=t,i.yOffset=e,r>1)if(void 0!==t||void 0!==e)i.height=n.getCurrentPage().pageSize.height-n.pageMargins.top-n.pageMargins.bottom;else{i.height=this.writer.context.getCurrentPage().pageSize.height-this.writer.context.pageMargins.top-this.writer.context.pageMargins.bottom;for(var o=0,a=this.repeatables.length;a>o;o++)i.height-=this.repeatables[o].height}else i.height=n.y;void 0!==t||void 0!==e?this.writer.addFragment(i,!0,!0,!0):this.addFragment(i)}}},r.prototype.currentBlockToRepeatable=function(){var t=this.writer.context,e={items:[]};return t.pages[0].items.forEach(function(t){e.items.push(t)}),e.xOffset=this.originalX,e.height=t.y,e},r.prototype.pushToRepeatables=function(t){this.repeatables.push(t)},r.prototype.popFromRepeatables=function(){this.repeatables.pop()},r.prototype.context=function(){return this.writer.context},t.exports=r},function(t,e,n){"use strict";function r(t,e){var n=[],r=0,a=0,s=[],h=0,u=0,l=[],c=e;t.forEach(function(t){i(t)?(n.push(t),r+=t._minWidth,a+=t._maxWidth):o(t)?(s.push(t),h=Math.max(h,t._minWidth),u=Math.max(u,t._maxWidth)):l.push(t)}),l.forEach(function(t){"string"==typeof t.width&&/\d+%/.test(t.width)&&(t.width=parseFloat(t.width)*c/100),t._calcWidth=t.width<t._minWidth&&t.elasticWidth?t._minWidth:t.width,e-=t._calcWidth});var f=r+h*s.length,d=a+u*s.length;if(f>=e)n.forEach(function(t){t._calcWidth=t._minWidth}),s.forEach(function(t){t._calcWidth=h});else{if(e>d)n.forEach(function(t){t._calcWidth=t._maxWidth,e-=t._calcWidth});else{var p=e-f,g=d-f;n.forEach(function(t){var n=t._maxWidth-t._minWidth;t._calcWidth=t._minWidth+n*p/g,e-=t._calcWidth})}if(s.length>0){var v=e/s.length;s.forEach(function(t){t._calcWidth=v})}}}function i(t){return"auto"===t.width}function o(t){return null===t.width||void 0===t.width||"*"===t.width||"star"===t.width}function a(t){for(var e={min:0,max:0},n={min:0,max:0},r=0,a=0,s=t.length;s>a;a++){var h=t[a];o(h)?(n.min=Math.max(n.min,h._minWidth),n.max=Math.max(n.max,h._maxWidth),r++):i(h)?(e.min+=h._minWidth,e.max+=h._maxWidth):(e.min+=void 0!==h.width&&h.width||h._minWidth,e.max+=void 0!==h.width&&h.width||h._maxWidth)}return r&&(e.min+=r*n.min,e.max+=r*n.max),e}t.exports={buildColumnWidths:r,measureMinMax:a,isAutoColumn:i,isStarColumn:o}},function(t,e,n){"use strict";function r(t){this.tableNode=t}var i=n(22);r.prototype.beginTable=function(t){function e(){var t=0;return r.table.widths.forEach(function(e){t+=e._calcWidth}),t}function n(){var t=[],e=0,n=0;t.push({left:0,rowSpan:0});for(var r=0,i=a.tableNode.table.body[0].length;i>r;r++){var o=a.layout.paddingLeft(r,a.tableNode)+a.layout.paddingRight(r,a.tableNode),s=a.layout.vLineWidth(r,a.tableNode);n=o+s+a.tableNode.table.widths[r]._calcWidth,t[t.length-1].width=n,e+=n,t.push({left:e,rowSpan:0,width:0})}return t}var r,o,a=this;r=this.tableNode,this.offsets=r._offsets,this.layout=r._layout,o=t.context().availableWidth-this.offsets.total,i.buildColumnWidths(r.table.widths,o),this.tableWidth=r._offsets.total+e(),this.rowSpanData=n(),this.cleanUpRepeatables=!1,this.headerRows=r.table.headerRows||0,this.rowsWithoutPageBreak=this.headerRows+(r.table.keepWithHeaderRows||0),this.dontBreakRows=r.table.dontBreakRows||!1,this.rowsWithoutPageBreak&&t.beginUnbreakableBlock(),this.drawHorizontalLine(0,t)},r.prototype.onRowBreak=function(t,e){var n=this;return function(){var t=n.rowPaddingTop+(n.headerRows?0:n.topLineWidth);e.context().moveDown(t)}},r.prototype.beginRow=function(t,e){this.topLineWidth=this.layout.hLineWidth(t,this.tableNode),this.rowPaddingTop=this.layout.paddingTop(t,this.tableNode),this.bottomLineWidth=this.layout.hLineWidth(t+1,this.tableNode),this.rowPaddingBottom=this.layout.paddingBottom(t,this.tableNode),this.rowCallback=this.onRowBreak(t,e),e.tracker.startTracking("pageChanged",this.rowCallback),this.dontBreakRows&&e.beginUnbreakableBlock(),this.rowTopY=e.context().y,this.reservedAtBottom=this.bottomLineWidth+this.rowPaddingBottom,e.context().availableHeight-=this.reservedAtBottom,e.context().moveDown(this.rowPaddingTop)},r.prototype.drawHorizontalLine=function(t,e,n){var r=this.layout.hLineWidth(t,this.tableNode);if(r){for(var i=r/2,o=null,a=0,s=this.rowSpanData.length;s>a;a++){var h=this.rowSpanData[a],u=!h.rowSpan;!o&&u&&(o={left:h.left,width:0}),u&&(o.width+=h.width||0);var l=(n||0)+i;u&&a!==s-1||o&&(e.addVector({type:"line",x1:o.left,x2:o.left+o.width,y1:l,y2:l,lineWidth:r,lineColor:"function"==typeof this.layout.hLineColor?this.layout.hLineColor(t,this.tableNode):this.layout.hLineColor},!1,n),o=null)}e.context().moveDown(r)}},r.prototype.drawVerticalLine=function(t,e,n,r,i){var o=this.layout.vLineWidth(r,this.tableNode);0!==o&&i.addVector({type:"line",x1:t+o/2,x2:t+o/2,y1:e,y2:n,lineWidth:o,lineColor:"function"==typeof this.layout.vLineColor?this.layout.vLineColor(r,this.tableNode):this.layout.vLineColor},!1,!0)},r.prototype.endTable=function(t){this.cleanUpRepeatables&&t.popFromRepeatables()},r.prototype.endRow=function(t,e,n){function r(){for(var e=[],n=0,r=0,i=a.tableNode.table.body[t].length;i>r;r++){if(!n){e.push({x:a.rowSpanData[r].left,index:r});var o=a.tableNode.table.body[t][r];n=o._colSpan||o.colSpan||0}n>0&&n--}return e.push({x:a.rowSpanData[a.rowSpanData.length-1].left,index:a.rowSpanData.length-1}),e}var i,o,a=this;e.tracker.stopTracking("pageChanged",this.rowCallback),e.context().moveDown(this.layout.paddingBottom(t,this.tableNode)),e.context().availableHeight+=this.reservedAtBottom;var s=e.context().page,h=e.context().y,u=r(),l=[],c=n&&n.length>0;if(l.push({y0:this.rowTopY,page:c?n[0].prevPage:s}),c)for(o=0,i=n.length;i>o;o++){var f=n[o];l[l.length-1].y1=f.prevY,l.push({y0:f.y,page:f.prevPage+1})}l[l.length-1].y1=h;for(var d=l[0].y1-l[0].y0===this.rowPaddingTop,p=d?1:0,g=l.length;g>p;p++){var v=p<l.length-1,m=p>0&&!this.headerRows,y=m?0:this.topLineWidth,w=l[p].y0,_=l[p].y1;for(v&&(_+=this.rowPaddingBottom),e.context().page!=l[p].page&&(e.context().page=l[p].page,this.reservedAtBottom=0),o=0,i=u.length;i>o;o++)if(this.drawVerticalLine(u[o].x,w-y,_+this.bottomLineWidth,u[o].index,e),i-1>o){var b=u[o].index,x=this.tableNode.table.body[t][b].fillColor;if(x){var S=this.layout.vLineWidth(b,this.tableNode),k=u[o].x+S,E=w-y;e.addVector({type:"rect",x:k,y:E,w:u[o+1].x-k,h:_+this.bottomLineWidth-E,lineWidth:0,color:x},!1,!0,0)}}v&&this.layout.hLineWhenBroken!==!1&&this.drawHorizontalLine(t+1,e,_),m&&this.layout.hLineWhenBroken!==!1&&this.drawHorizontalLine(t,e,w);

}e.context().page=s,e.context().y=h;var C=this.tableNode.table.body[t];for(o=0,i=C.length;i>o;o++){if(C[o].rowSpan&&(this.rowSpanData[o].rowSpan=C[o].rowSpan,C[o].colSpan&&C[o].colSpan>1))for(var I=1;I<C[o].rowSpan;I++)this.tableNode.table.body[t+I][o]._colSpan=C[o].colSpan;this.rowSpanData[o].rowSpan>0&&this.rowSpanData[o].rowSpan--}this.drawHorizontalLine(t+1,e),this.headerRows&&t===this.headerRows-1&&(this.headerRepeatable=e.currentBlockToRepeatable()),this.dontBreakRows&&e.tracker.auto("pageChanged",function(){a.drawHorizontalLine(t,e)},function(){e.commitUnbreakableBlock(),a.drawHorizontalLine(t,e)}),!this.headerRepeatable||t!==this.rowsWithoutPageBreak-1&&t!==this.tableNode.table.body.length-1||(e.commitUnbreakableBlock(),e.pushToRepeatables(this.headerRepeatable),this.cleanUpRepeatables=!0,this.headerRepeatable=null)},t.exports=r},function(t,e,n){"use strict";function r(t){this.maxWidth=t,this.leadingCut=0,this.trailingCut=0,this.inlineWidths=0,this.inlines=[]}r.prototype.getAscenderHeight=function(){var t=0;return this.inlines.forEach(function(e){t=Math.max(t,e.font.ascender/1e3*e.fontSize)}),t},r.prototype.hasEnoughSpaceForInline=function(t){return 0===this.inlines.length?!0:this.newLineForced?!1:this.inlineWidths+t.width-this.leadingCut-(t.trailingCut||0)<=this.maxWidth},r.prototype.addInline=function(t){0===this.inlines.length&&(this.leadingCut=t.leadingCut||0),this.trailingCut=t.trailingCut||0,t.x=this.inlineWidths-this.leadingCut,this.inlines.push(t),this.inlineWidths+=t.width,t.lineEnd&&(this.newLineForced=!0)},r.prototype.getWidth=function(){return this.inlineWidths-this.leadingCut-this.trailingCut},r.prototype.getHeight=function(){var t=0;return this.inlines.forEach(function(e){t=Math.max(t,e.height||0)}),t},t.exports=r},function(t,e,n){"use strict";function r(){for(var t={},e=0,n=arguments.length;n>e;e++){var r=arguments[e];if(r)for(var i in r)r.hasOwnProperty(i)&&(t[i]=r[i])}return t}function i(t,e,n){switch(t.type){case"ellipse":case"rect":t.x+=e,t.y+=n;break;case"line":t.x1+=e,t.x2+=e,t.y1+=n,t.y2+=n;break;case"polyline":for(var r=0,i=t.points.length;i>r;r++)t.points[r].x+=e,t.points[r].y+=n}}function o(t,e){return"font"===t?"font":e}function a(t){var e={};return t&&"[object Function]"===e.toString.call(t)}t.exports={pack:r,fontStringify:o,offsetVector:i,isFunction:a}},function(t,e,n){"use strict";function r(t){this.fontProvider=t}function i(t){var e=[];t=t.replace("	","    ");for(var n=t.match(l),r=0,i=n.length;i-1>r;r++){var o=n[r],a=0===o.length;if(a){var s=0===e.length||e[e.length-1].lineEnd;s?e.push({text:"",lineEnd:!0}):e[e.length-1].lineEnd=!0}else e.push({text:o})}return e}function o(t,e){e=e||{},t=t||{};for(var n in t)"text"!=n&&t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function a(t){var e=[];("string"==typeof t||t instanceof String)&&(t=[t]);for(var n=0,r=t.length;r>n;n++){var a,s=t[n],h=null;"string"==typeof s||s instanceof String?a=i(s):(a=i(s.text),h=o(s));for(var u=0,l=a.length;l>u;u++){var c={text:a[u].text};a[u].lineEnd&&(c.lineEnd=!0),o(h,c),e.push(c)}}return e}function s(t){return t.replace(/[^A-Za-z0-9\[\] ]/g,function(t){return d[t]||t})}function h(t,e,n,r){var i;return void 0!==t[n]&&null!==t[n]?t[n]:e?(e.auto(t,function(){i=e.getProperty(n)}),null!==i&&void 0!==i?i:r):r}function u(t,e,n){var r=a(e);return r.forEach(function(e){var r=h(e,n,"font","Roboto"),i=h(e,n,"fontSize",12),o=h(e,n,"bold",!1),a=h(e,n,"italics",!1),u=h(e,n,"color","black"),l=h(e,n,"decoration",null),d=h(e,n,"decorationColor",null),p=h(e,n,"decorationStyle",null),g=h(e,n,"background",null),v=h(e,n,"lineHeight",1),m=t.provideFont(r,o,a);e.width=m.widthOfString(s(e.text),i),e.height=m.lineHeight(i)*v;var y=e.text.match(c),w=e.text.match(f);e.leadingCut=y?m.widthOfString(y[0],i):0,e.trailingCut=w?m.widthOfString(w[0],i):0,e.alignment=h(e,n,"alignment","left"),e.font=m,e.fontSize=i,e.color=u,e.decoration=l,e.decorationColor=d,e.decorationStyle=p,e.background=g}),r}var l=/([^ ,\/!.?:;\-\n]*[ ,\/!.?:;\-]*)|\n/g,c=/^(\s)+/g,f=/(\s)+$/g;r.prototype.buildInlines=function(t,e){function n(t){return Math.max(0,t.width-t.leadingCut-t.trailingCut)}var r,i=u(this.fontProvider,t,e),o=0,a=0;return i.forEach(function(t){o=Math.max(o,t.width-t.leadingCut-t.trailingCut),r||(r={width:0,leadingCut:t.leadingCut,trailingCut:0}),r.width+=t.width,r.trailingCut=t.trailingCut,a=Math.max(a,n(r)),t.lineEnd&&(r=null)}),{items:i,minWidth:o,maxWidth:a}},r.prototype.sizeOfString=function(t,e){t=t.replace("	","    ");var n=h({},e,"font","Roboto"),r=h({},e,"fontSize",12),i=h({},e,"bold",!1),o=h({},e,"italics",!1),a=h({},e,"lineHeight",1),u=this.fontProvider.provideFont(n,i,o);return{width:u.widthOfString(s(t),r),height:u.lineHeight(r)*a,fontSize:r,lineHeight:a,ascender:u.ascender/1e3*r,decender:u.decender/1e3*r}};var d={"Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z"};t.exports=r},function(t,e,n){"use strict";function r(t,e){this.defaultStyle=e||{},this.styleDictionary=t,this.styleOverrides=[]}r.prototype.clone=function(){var t=new r(this.styleDictionary,this.defaultStyle);return this.styleOverrides.forEach(function(e){t.styleOverrides.push(e)}),t},r.prototype.push=function(t){this.styleOverrides.push(t)},r.prototype.pop=function(t){for(t=t||1;t-->0;)this.styleOverrides.pop()},r.prototype.autopush=function(t){if("string"==typeof t||t instanceof String)return 0;var e=[];t.style&&(e=t.style instanceof Array?t.style:[t.style]);for(var n=0,r=e.length;r>n;n++)this.push(e[n]);var i={},o=!1;return["font","fontSize","bold","italics","alignment","color","columnGap","fillColor","decoration","decorationStyle","decorationColor","background","lineHeight"].forEach(function(e){void 0!==t[e]&&null!==t[e]&&(i[e]=t[e],o=!0)}),o&&this.push(i),e.length+(o?1:0)},r.prototype.auto=function(t,e){var n=this.autopush(t),r=e();return n>0&&this.pop(n),r},r.prototype.getProperty=function(t){if(this.styleOverrides)for(var e=this.styleOverrides.length-1;e>=0;e--){var n=this.styleOverrides[e];if("string"==typeof n||n instanceof String){var r=this.styleDictionary[n];if(r&&null!==r[t]&&void 0!==r[t])return r[t]}else if(void 0!==n[t]&&null!==n[t])return n[t]}return this.defaultStyle&&this.defaultStyle[t]},t.exports=r},function(t,e,n){(function(e){(function(){var r,i,o,a,s,h,u={}.hasOwnProperty,l=function(t,e){function n(){this.constructor=t}for(var r in e)u.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};h=n(46),s=n(10),i=n(32),a=n(12),o=n(38),r=function(t){function r(t){var e,n,i,o;if(this.options=null!=t?t:{},r.__super__.constructor.apply(this,arguments),this.version=1.3,this.compress=null!=(i=this.options.compress)?i:!0,this._pageBuffer=[],this._pageBufferStart=0,this._offsets=[],this._waiting=0,this._ended=!1,this._offset=0,this._root=this.ref({Type:"Catalog",Pages:this.ref({Type:"Pages",Count:0,Kids:[]})}),this.page=null,this.initColor(),this.initVector(),this.initFonts(),this.initText(),this.initImages(),this.info={Producer:"PDFKit",Creator:"PDFKit",CreationDate:new Date},this.options.info){o=this.options.info;for(e in o)n=o[e],this.info[e]=n}this._write("%PDF-"+this.version),this._write("%ÿÿÿÿ"),this.addPage()}var h;return l(r,t),h=function(t){var e,n,i;i=[];for(n in t)e=t[n],i.push(r.prototype[n]=e);return i},h(n(41)),h(n(39)),h(n(44)),h(n(40)),h(n(42)),h(n(43)),r.prototype.addPage=function(t){var e;return null==t&&(t=this.options),this.options.bufferPages||this.flushPages(),this.page=new o(this,t),this._pageBuffer.push(this.page),e=this._root.data.Pages.data,e.Kids.push(this.page.dictionary),e.Count++,this.x=this.page.margins.left,this.y=this.page.margins.top,this._ctm=[1,0,0,1,0,0],this.transform(1,0,0,-1,0,this.page.height),this},r.prototype.bufferedPageRange=function(){return{start:this._pageBufferStart,count:this._pageBuffer.length}},r.prototype.switchToPage=function(t){var e;if(!(e=this._pageBuffer[t-this._pageBufferStart]))throw new Error("switchToPage("+t+") out of bounds, current buffer covers pages "+this._pageBufferStart+" to "+(this._pageBufferStart+this._pageBuffer.length-1));return this.page=e},r.prototype.flushPages=function(){var t,e,n,r;for(e=this._pageBuffer,this._pageBuffer=[],this._pageBufferStart+=e.length,n=0,r=e.length;r>n;n++)t=e[n],t.end()},r.prototype.ref=function(t){var e;return e=new a(this,this._offsets.length+1,t),this._offsets.push(null),this._waiting++,e},r.prototype._read=function(){},r.prototype._write=function(t){return e.isBuffer(t)||(t=new e(t+"\n","binary")),this.push(t),this._offset+=t.length},r.prototype.addContent=function(t){return this.page.write(t),this},r.prototype._refEnd=function(t){return this._offsets[t.id-1]=t.offset,0===--this._waiting&&this._ended?(this._finalize(),this._ended=!1):void 0},r.prototype.write=function(t,e){var n;return n=new Error("PDFDocument#write is deprecated, and will be removed in a future version of PDFKit. Please pipe the document into a Node stream."),this.pipe(s.createWriteStream(t)),this.end(),this.once("end",e)},r.prototype.output=function(t){throw new Error("PDFDocument#output is deprecated, and has been removed from PDFKit. Please pipe the document into a Node stream.")},r.prototype.end=function(){var t,e,n,r,i,o;this.flushPages(),this._info=this.ref(),i=this.info;for(e in i)r=i[e],"string"==typeof r&&(r=new String(r)),this._info.data[e]=r;this._info.end(),o=this._fontFamilies;for(n in o)t=o[n],t.embed();return this._root.end(),this._root.data.Pages.end(),0===this._waiting?this._finalize():this._ended=!0},r.prototype._finalize=function(t){var e,n,r,o,a;for(n=this._offset,this._write("xref"),this._write("0 "+(this._offsets.length+1)),this._write("0000000000 65535 f "),a=this._offsets,r=0,o=a.length;o>r;r++)e=a[r],e=("0000000000"+e).slice(-10),this._write(e+" 00000 n ");return this._write("trailer"),this._write(i.convert({Size:this._offsets.length+1,Root:this._root,Info:this._info})),this._write("startxref"),this._write(""+n),this._write("%%EOF"),this.push(null)},r.prototype.toString=function(){return"[object PDFDocument]"},r}(h.Readable),t.exports=r}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,h=(1<<s)-1,u=h>>1,l=-7,c=n?i-1:0,f=n?-1:1,d=t[e+c];for(c+=f,o=d&(1<<-l)-1,d>>=-l,l+=s;l>0;o=256*o+t[e+c],c+=f,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=r;l>0;a=256*a+t[e+c],c+=f,l-=8);if(0===o)o=1-u;else{if(o===h)return a?0/0:(d?-1:1)*(1/0);a+=Math.pow(2,r),o-=u}return(d?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,h,u=8*o-i-1,l=(1<<u)-1,c=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=l):(a=Math.floor(Math.log(e)/Math.LN2),e*(h=Math.pow(2,-a))<1&&(a--,h*=2),e+=a+c>=1?f/h:f*Math.pow(2,1-c),e*h>=2&&(a++,h/=2),a+c>=l?(s=0,a=l):a+c>=1?(s=(e*h-1)*Math.pow(2,i),a+=c):(s=e*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[n+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,u+=i;u>0;t[n+d]=255&a,d+=p,a/=256,u-=8);t[n+d-p]|=128*g}},function(t,e,n){var r=Array.isArray,i=Object.prototype.toString;t.exports=r||function(t){return!!t&&"[object Array]"==i.call(t)}},function(t,e,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===a||e===c?62:e===s||e===f?63:h>e?-1:h+10>e?e-h+26+26:l+26>e?e-l:u+26>e?e-u+26:void 0}function n(t){function n(t){u[c++]=t}var r,i,a,s,h,u;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=t.length;h="="===t.charAt(l-2)?2:"="===t.charAt(l-1)?1:0,u=new o(3*t.length/4-h),a=h>0?t.length-4:t.length;var c=0;for(r=0,i=0;a>r;r+=4,i+=3)s=e(t.charAt(r))<<18|e(t.charAt(r+1))<<12|e(t.charAt(r+2))<<6|e(t.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s);return 2===h?(s=e(t.charAt(r))<<2|e(t.charAt(r+1))>>4,n(255&s)):1===h&&(s=e(t.charAt(r))<<10|e(t.charAt(r+1))<<4|e(t.charAt(r+2))>>2,n(s>>8&255),n(255&s)),u}function i(t){function e(t){return r.charAt(t)}function n(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,a,s=t.length%3,h="";for(i=0,a=t.length-s;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],h+=n(o);switch(s){case 1:o=t[t.length-1],h+=e(o>>2),h+=e(o<<4&63),h+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],h+=e(o>>10),h+=e(o>>4&63),h+=e(o<<2&63),h+="="}return h}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),s="/".charCodeAt(0),h="0".charCodeAt(0),u="a".charCodeAt(0),l="A".charCodeAt(0),c="-".charCodeAt(0),f="_".charCodeAt(0);t.toByteArray=n,t.fromByteArray=i}(e)},function(t,e,n){(function(e){(function(){var r,i;r=function(){function t(){}var n,r,o,a;return o=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},r=/[\n\r\t\b\f\(\)\\]/g,n={"\n":"\\n","\r":"\\r","	":"\\t","\b":"\\b","\f":"\\f","\\":"\\\\","(":"\\(",")":"\\)"},a=function(t){var e,n,r,i,o;if(r=t.length,1&r)throw new Error("Buffer length must be even");for(n=i=0,o=r-1;o>i;n=i+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;return t},t.convert=function(s){var h,u,l,c,f,d,p,g,v,m;if("string"==typeof s)return"/"+s;if(s instanceof String){for(p=s.replace(r,function(t){return n[t]}),l=!1,u=v=0,m=p.length;m>v;u=v+=1)if(p.charCodeAt(u)>127){l=!0;break}return l&&(p=a(new e("\ufeff"+p,"utf16le")).toString("binary")),"("+p+")"}if(e.isBuffer(s))return"<"+s.toString("hex")+">";if(s instanceof i)return s.toString();if(s instanceof Date)return"(D:"+o(s.getUTCFullYear(),4)+o(s.getUTCMonth(),2)+o(s.getUTCDate(),2)+o(s.getUTCHours(),2)+o(s.getUTCMinutes(),2)+o(s.getUTCSeconds(),2)+"Z)";if(Array.isArray(s))return c=function(){var e,n,r;for(r=[],e=0,n=s.length;n>e;e++)h=s[e],r.push(t.convert(h));return r}().join(" "),"["+c+"]";if("[object Object]"==={}.toString.call(s)){d=["<<"];for(f in s)g=s[f],d.push("/"+f+" "+t.convert(g));return d.push(">>"),d.join("\n")}return""+s},t}(),t.exports=r,i=n(12)}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(t,e){var n={numeric:h,alphanumeric:u,octet:l},r={L:g,M:v,Q:m,H:y};e=e||{};var i=e.version||-1,o=r[(e.eccLevel||"L").toUpperCase()],a=e.mode?n[e.mode.toLowerCase()]:-1,s="mask"in e?e.mask:-1;if(0>a)a="string"==typeof t?t.match(f)?h:t.match(p)?u:l:l;else if(a!=h&&a!=u&&a!=l)throw"invalid or unsupported mode";if(t=P(a,t),null===t)throw"invalid data format";if(0>o||o>3)throw"invalid ECC level";if(0>i){for(i=1;40>=i&&!(t.length<=U(i,a,o));++i);if(i>40)throw"too large data for the Qr format"}else if(1>i||i>40)throw"invalid Qr version! should be between 1 and 40";if(-1!=s&&(0>s||s>8))throw"invalid mask";return Y(t,i,a,o,s)}function i(t,e){var n=[],i=t.background||"#fff",o=t.foreground||"#000",a=r(t,e),s=a.length,h=Math.floor(e.fit?e.fit/s:5),u=s*h;n.push({type:"rect",x:0,y:0,w:u,h:u,lineWidth:0,color:i});for(var l=0;s>l;++l)for(var c=0;s>c;++c)a[l][c]&&n.push({type:"rect",x:h*l,y:h*c,w:h,h:h,lineWidth:0,color:o});return{canvas:n,size:u}}function o(t){var e=i(t.qr,t);return t._canvas=e.canvas,t._width=t._height=t._minWidth=t._maxWidth=t._minHeight=t._maxHeight=e.size,t}for(var a=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],s=0,h=1,u=2,l=4,c=8,f=/^\d*$/,d=/^[A-Za-z0-9 $%*+\-./:]*$/,p=/^[A-Z0-9 $%*+\-./:]*$/,g=1,v=0,m=3,y=2,w=[],_=[-1],b=0,x=1;255>b;++b)w.push(x),_[x]=b,x=2*x^(x>=128?285:0);for(var S=[[]],b=0;30>b;++b){for(var k=S[b],E=[],C=0;b>=C;++C){var I=b>C?w[k[C]]:0,A=w[(b+(k[C-1]||0))%255];E.push(_[I^A])}S.push(E)}for(var L={},b=0;45>b;++b)L["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(b)]=b;var R=[function(t,e){return(t+e)%2===0},function(t,e){return t%2===0},function(t,e){return e%3===0},function(t,e){return(t+e)%3===0},function(t,e){return((t/2|0)+(e/3|0))%2===0},function(t,e){return t*e%2+t*e%3===0},function(t,e){return(t*e%2+t*e%3)%2===0},function(t,e){return((t+e)%2+t*e%3)%2===0}],B=function(t){return t>6},T=function(t){return 4*t+17},M=function(t){var e=a[t],n=16*t*t+128*t+64;return B(t)&&(n-=36),e[2].length&&(n-=25*e[2].length*e[2].length-10*e[2].length-55),n},O=function(t,e){var n=-8&M(t),r=a[t];return n-=8*r[0][e]*r[1][e]},D=function(t,e){switch(e){case h:return 10>t?10:27>t?12:14;case u:return 10>t?9:27>t?11:13;case l:return 10>t?8:16;case c:return 10>t?8:27>t?10:12}},U=function(t,e,n){var r=O(t,n)-4-D(t,e);switch(e){case h:return 3*(r/10|0)+(4>r%10?0:7>r%10?1:2);case u:return 2*(r/11|0)+(6>r%11?0:1);case l:return r/8|0;case c:return r/13|0}},P=function(t,e){switch(t){case h:return e.match(f)?e:null;case u:return e.match(d)?e.toUpperCase():null;case l:if("string"==typeof e){for(var n=[],r=0;r<e.length;++r){var i=e.charCodeAt(r);128>i?n.push(i):2048>i?n.push(192|i>>6,128|63&i):65536>i?n.push(224|i>>12,128|i>>6&63,128|63&i):n.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}return n}return e}},F=function(t,e,n,r){var i=[],o=0,a=8,c=n.length,f=function(t,e){if(e>=a){for(i.push(o|t>>(e-=a));e>=8;)i.push(t>>(e-=8)&255);o=0,a=8}e>0&&(o|=(t&(1<<e)-1)<<(a-=e))},d=D(t,e);switch(f(e,4),f(c,d),e){case h:for(var p=2;c>p;p+=3)f(parseInt(n.substring(p-2,p+1),10),10);f(parseInt(n.substring(p-2),10),[0,4,7][c%3]);break;case u:for(var p=1;c>p;p+=2)f(45*L[n.charAt(p-1)]+L[n.charAt(p)],11);c%2==1&&f(L[n.charAt(p-1)],6);break;case l:for(var p=0;c>p;++p)f(n[p],8)}for(f(s,4),8>a&&i.push(o);i.length+1<r;)i.push(236,17);return i.length<r&&i.push(236),i},z=function(t,e){for(var n=t.slice(0),r=t.length,i=e.length,o=0;i>o;++o)n.push(0);for(var o=0;r>o;){var a=_[n[o++]];if(a>=0)for(var s=0;i>s;++s)n[o+s]^=w[(a+e[s])%255]}return n.slice(r)},W=function(t,e,n){for(var r=[],i=t.length/e|0,o=0,a=e-t.length%e,s=0;a>s;++s)r.push(o),o+=i;for(var s=a;e>s;++s)r.push(o),o+=i+1;r.push(o);for(var h=[],s=0;e>s;++s)h.push(z(t.slice(r[s],r[s+1]),n));for(var u=[],l=t.length/e|0,s=0;l>s;++s)for(var c=0;e>c;++c)u.push(t[r[c]+s]);for(var c=a;e>c;++c)u.push(t[r[c+1]-1]);for(var s=0;s<n.length;++s)for(var c=0;e>c;++c)u.push(h[c][s]);return u},N=function(t,e,n,r){for(var i=t<<r,o=e-1;o>=0;--o)i>>r+o&1&&(i^=n<<o);return t<<r|i},j=function(t){for(var e=a[t],n=T(t),r=[],i=[],o=0;n>o;++o)r.push([]),i.push([]);var s=function(t,e,n,o,a){for(var s=0;n>s;++s)for(var h=0;o>h;++h)r[t+s][e+h]=a[s]>>h&1,i[t+s][e+h]=1};s(0,0,9,9,[127,65,93,93,93,65,383,0,64]),s(n-8,0,8,9,[256,127,65,93,93,93,65,127]),s(0,n-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var o=9;n-8>o;++o)r[6][o]=r[o][6]=1&~o,i[6][o]=i[o][6]=1;for(var h=e[2],u=h.length,o=0;u>o;++o)for(var l=0===o||o===u-1?1:0,c=0===o?u-1:u,f=l;c>f;++f)s(h[o],h[f],5,5,[31,17,21,17,31]);if(B(t))for(var d=N(t,6,7973,12),p=0,o=0;6>o;++o)for(var f=0;3>f;++f)r[o][n-11+f]=r[n-11+f][o]=d>>p++&1,i[o][n-11+f]=i[n-11+f][o]=1;return{matrix:r,reserved:i}},H=function(t,e,n){for(var r=t.length,i=0,o=-1,a=r-1;a>=0;a-=2){6==a&&--a;for(var s=0>o?r-1:0,h=0;r>h;++h){for(var u=a;u>a-2;--u)e[s][u]||(t[s][u]=n[i>>3]>>(7&~i)&1,++i);s+=o}o=-o}return t},Z=function(t,e,n){for(var r=R[n],i=t.length,o=0;i>o;++o)for(var a=0;i>a;++a)e[o][a]||(t[o][a]^=r(o,a));return t},G=function(t,e,n,r){for(var i=t.length,o=21522^N(n<<3|r,5,1335,10),a=0;15>a;++a){var s=[0,1,2,3,4,5,7,8,i-7,i-6,i-5,i-4,i-3,i-2,i-1][a],h=[i-1,i-2,i-3,i-4,i-5,i-6,i-7,i-8,7,5,4,3,2,1,0][a];t[s][8]=t[8][h]=o>>a&1}return t},q=function(t){for(var e=3,n=3,r=40,i=10,o=function(t){for(var n=0,i=0;i<t.length;++i)t[i]>=5&&(n+=e+(t[i]-5));for(var i=5;i<t.length;i+=2){var o=t[i];t[i-1]==o&&t[i-2]==3*o&&t[i-3]==o&&t[i-4]==o&&(t[i-5]>=4*o||t[i+1]>=4*o)&&(n+=r)}return n},a=t.length,s=0,h=0,u=0;a>u;++u){var l,c=t[u];l=[0];for(var f=0;a>f;){var d;for(d=0;a>f&&c[f];++d)++f;for(l.push(d),d=0;a>f&&!c[f];++d)++f;l.push(d)}s+=o(l),l=[0];for(var f=0;a>f;){var d;for(d=0;a>f&&t[f][u];++d)++f;for(l.push(d),d=0;a>f&&!t[f][u];++d)++f;l.push(d)}s+=o(l);var p=t[u+1]||[];h+=c[0];for(var f=1;a>f;++f){var g=c[f];h+=g,c[f-1]==g&&p[f]===g&&p[f-1]===g&&(s+=n)}}return s+=i*(Math.abs(h/a/a-.5)/.05|0)},Y=function(t,e,n,r,i){var o=a[e],s=F(e,n,t,O(e,r)>>3);s=W(s,o[1][r],S[o[0][r]]);var h=j(e),u=h.matrix,l=h.reserved;if(H(u,l,s),0>i){Z(u,l,0),G(u,l,r,0);var c=0,f=q(u);for(Z(u,l,0),i=1;8>i;++i){Z(u,l,i),G(u,l,r,i);var d=q(u);f>d&&(f=d,c=i),Z(u,l,i)}i=c}return Z(u,l,i),G(u,l,r,i),u};t.exports={measure:o}},function(t,e,n){(function(){var e;e=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.byteAt=function(t){return this.data[t]},t.prototype.readBool=function(){return!!this.readByte()},t.prototype.writeBool=function(t){return this.writeByte(t?1:0)},t.prototype.readUInt32=function(){var t,e,n,r;return t=16777216*this.readByte(),e=this.readByte()<<16,n=this.readByte()<<8,r=this.readByte(),t+e+n+r},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return t=this.readUInt32(),t>=2147483648?t-4294967296:t},t.prototype.writeInt32=function(t){return 0>t&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){var t,e;return t=this.readByte()<<8,e=this.readByte(),t|e},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return t=this.readUInt16(),t>=32768?t-65536:t},t.prototype.writeInt16=function(t){return 0>t&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n,r;for(n=[],e=r=0;t>=0?t>r:r>t;e=t>=0?++r:--r)n[e]=String.fromCharCode(this.readByte());return n.join("")},t.prototype.writeString=function(t){var e,n,r,i;for(i=[],e=n=0,r=t.length;r>=0?r>n:n>r;e=r>=0?++n:--n)i.push(this.writeByte(t.charCodeAt(e)));return i},t.prototype.stringAt=function(t,e){return this.pos=t,this.readString(e)},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,o,a,s;return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),o=this.readByte(),a=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^o)+256*(255^a)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*o+256*a+s},t.prototype.writeLongLong=function(t){var e,n;return e=Math.floor(t/4294967296),n=4294967295&t,this.writeByte(e>>24&255),this.writeByte(e>>16&255),this.writeByte(e>>8&255),this.writeByte(255&e),this.writeByte(n>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.slice=function(t,e){return this.data.slice(t,e)},t.prototype.read=function(t){var e,n,r;for(e=[],n=r=0;t>=0?t>r:r>t;n=t>=0?++r:--r)e.push(this.readByte());return e},t.prototype.write=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;r>n;n++)e=t[n],i.push(this.writeByte(e));return i},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};r=n(10),e=function(){function t(t,n){var r,o,a;if(this.data=t,this.label=n,65496!==this.data.readUInt16BE(0))throw"SOI not found in JPEG";for(a=2;a<this.data.length&&(o=this.data.readUInt16BE(a),a+=2,!(i.call(e,o)>=0));)a+=this.data.readUInt16BE(a);if(i.call(e,o)<0)throw"Invalid JPEG.";a+=2,this.bits=this.data[a++],this.height=this.data.readUInt16BE(a),a+=2,this.width=this.data.readUInt16BE(a),a+=2,r=this.data[a++],this.colorSpace=function(){switch(r){case 1:return"DeviceGray";case 3:return"DeviceRGB";case 4:return"DeviceCMYK"}}(),this.obj=null}var e;return e=[65472,65473,65474,65475,65477,65478,65479,65480,65481,65482,65483,65484,65485,65486,65487],t.prototype.embed=function(t){return this.obj?void 0:(this.obj=t.ref({Type:"XObject",Subtype:"Image",BitsPerComponent:this.bits,Width:this.width,Height:this.height,ColorSpace:this.colorSpace,Filter:"DCTDecode"}),"DeviceCMYK"===this.colorSpace&&(this.obj.data.Decode=[1,0,1,0,1,0,1,0]),this.obj.end(this.data),this.data=null)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o;o=n(45),r=n(51),i=function(){function t(t,e){this.label=e,this.image=new r(t),this.width=this.image.width,this.height=this.image.height,this.imgData=this.image.imgData,this.obj=null}return t.prototype.embed=function(t){var n,r,i,o,a,s,h,u;if(this.document=t,!this.obj){if(this.obj=t.ref({Type:"XObject",Subtype:"Image",BitsPerComponent:this.image.bits,Width:this.width,Height:this.height,Filter:"FlateDecode"}),this.image.hasAlphaChannel||(i=t.ref({Predictor:15,Colors:this.image.colors,BitsPerComponent:this.image.bits,Columns:this.width}),this.obj.data.DecodeParms=i,i.end()),0===this.image.palette.length?this.obj.data.ColorSpace=this.image.colorSpace:(r=t.ref(),r.end(new e(this.image.palette)),this.obj.data.ColorSpace=["Indexed","DeviceRGB",this.image.palette.length/3-1,r]),this.image.transparency.grayscale)return a=this.image.transparency.greyscale,this.obj.data.Mask=[a,a];if(this.image.transparency.rgb){for(o=this.image.transparency.rgb,n=[],h=0,u=o.length;u>h;h++)s=o[h],n.push(s,s);return this.obj.data.Mask=n}return this.image.transparency.indexed?this.loadIndexedAlphaChannel():this.image.hasAlphaChannel?this.splitAlphaChannel():this.finalize()}},t.prototype.finalize=function(){var t;return this.alphaChannel&&(t=this.document.ref({Type:"XObject",Subtype:"Image",Height:this.height,Width:this.width,BitsPerComponent:8,Filter:"FlateDecode",ColorSpace:"DeviceGray",Decode:[0,1]}),t.end(this.alphaChannel),this.obj.data.SMask=t),this.obj.end(this.imgData),this.image=null,this.imgData=null},t.prototype.splitAlphaChannel=function(){return this.image.decodePixels(function(t){return function(n){var r,i,a,s,h,u,l,c,f;for(a=t.image.colors*t.image.bits/8,f=t.width*t.height,u=new e(f*a),i=new e(f),h=c=r=0,l=n.length;l>h;)u[c++]=n[h++],u[c++]=n[h++],u[c++]=n[h++],i[r++]=n[h++];return s=0,o.deflate(u,function(e,n){if(t.imgData=n,e)throw e;return 2===++s?t.finalize():void 0}),o.deflate(i,function(e,n){if(t.alphaChannel=n,e)throw e;return 2===++s?t.finalize():void 0})}}(this))},t.prototype.loadIndexedAlphaChannel=function(t){var n;return n=this.image.transparency.indexed,this.image.decodePixels(function(t){return function(r){var i,a,s,h,u;for(i=new e(t.width*t.height),a=0,s=h=0,u=r.length;u>h;s=h+=1)i[a++]=n[r[s]];return o.deflate(i,function(e,n){if(t.alphaChannel=n,e)throw e;return t.finalize()})}}(this))},t}(),t.exports=i}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){"use strict";function r(t,e){this.context=t,this.contextStack=[],this.tracker=e}function i(t,e,n){null===n||void 0===n||0>n||n>t.items.length?t.items.push(e):t.items.splice(n,0,e)}function o(t){var e=new a(t.maxWidth);for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var a=n(24),s=n(25).pack,h=n(25).offsetVector,u=n(20);r.prototype.addLine=function(t,e,n){var r=t.getHeight(),o=this.context,a=o.getCurrentPage(),s=this.getCurrentPositionOnPage();return o.availableHeight<r||!a?!1:(t.x=o.x+(t.x||0),t.y=o.y+(t.y||0),this.alignLine(t),i(a,{type:"line",item:t},n),this.tracker.emit("lineAdded",t),e||o.moveDown(r),s)},r.prototype.alignLine=function(t){var e=this.context.availableWidth,n=t.getWidth(),r=t.inlines&&t.inlines.length>0&&t.inlines[0].alignment,i=0;switch(r){case"right":i=e-n;break;case"center":i=(e-n)/2}if(i&&(t.x=(t.x||0)+i),"justify"===r&&!t.newLineForced&&!t.lastLineInParagraph&&t.inlines.length>1)for(var o=(e-n)/(t.inlines.length-1),a=1,s=t.inlines.length;s>a;a++)i=a*o,t.inlines[a].x+=i},r.prototype.addImage=function(t,e){var n=this.context,r=n.getCurrentPage(),o=this.getCurrentPositionOnPage();return n.availableHeight<t._height||!r?!1:(t.x=n.x+(t.x||0),t.y=n.y,this.alignImage(t),i(r,{type:"image",item:t},e),n.moveDown(t._height),o)},r.prototype.addQr=function(t,e){var n=this.context,r=n.getCurrentPage(),i=this.getCurrentPositionOnPage();if(n.availableHeight<t._height||!r)return!1;t.x=n.x+(t.x||0),t.y=n.y,this.alignImage(t);for(var o=0,a=t._canvas.length;a>o;o++){var s=t._canvas[o];s.x+=t.x,s.y+=t.y,this.addVector(s,!0,!0,e)}return n.moveDown(t._height),i},r.prototype.alignImage=function(t){var e=this.context.availableWidth,n=t._minWidth,r=0;switch(t._alignment){case"right":r=e-n;break;case"center":r=(e-n)/2}r&&(t.x=(t.x||0)+r)},r.prototype.addVector=function(t,e,n,r){var o=this.context,a=o.getCurrentPage(),s=this.getCurrentPositionOnPage();return a?(h(t,e?0:o.x,n?0:o.y),i(a,{type:"vector",item:t},r),s):void 0},r.prototype.addFragment=function(t,e,n,r){var i=this.context,a=i.getCurrentPage();return!e&&t.height>i.availableHeight?!1:(t.items.forEach(function(r){switch(r.type){case"line":var u=o(r.item);u.x=(u.x||0)+(e?t.xOffset||0:i.x),u.y=(u.y||0)+(n?t.yOffset||0:i.y),a.items.push({type:"line",item:u});break;case"vector":var l=s(r.item);h(l,e?t.xOffset||0:i.x,n?t.yOffset||0:i.y),a.items.push({type:"vector",item:l});break;case"image":var c=s(r.item);c.x=(c.x||0)+(e?t.xOffset||0:i.x),c.y=(c.y||0)+(n?t.yOffset||0:i.y),a.items.push({type:"image",item:c})}}),r||i.moveDown(t.height),!0)},r.prototype.pushContext=function(t,e){void 0===t&&(e=this.context.getCurrentPage().height-this.context.pageMargins.top-this.context.pageMargins.bottom,t=this.context.availableWidth),("number"==typeof t||t instanceof Number)&&(t=new u({width:t,height:e},{left:0,right:0,top:0,bottom:0})),this.contextStack.push(this.context),this.context=t},r.prototype.popContext=function(){this.context=this.contextStack.pop()},r.prototype.getCurrentPositionOnPage=function(){return(this.contextStack[0]||this.context).getCurrentPosition()},t.exports=r},function(t,e,n){(function(){var e;e=function(){function t(t,r){var i;this.document=t,null==r&&(r={}),this.size=r.size||"letter",this.layout=r.layout||"portrait",this.margins="number"==typeof r.margin?{top:r.margin,left:r.margin,bottom:r.margin,right:r.margin}:r.margins||e,i=Array.isArray(this.size)?this.size:n[this.size.toUpperCase()],this.width=i["portrait"===this.layout?0:1],this.height=i["portrait"===this.layout?1:0],this.content=this.document.ref(),this.resources=this.document.ref({ProcSet:["PDF","Text","ImageB","ImageC","ImageI"]}),Object.defineProperties(this,{fonts:{get:function(t){return function(){
var e;return null!=(e=t.resources.data).Font?e.Font:e.Font={}}}(this)},xobjects:{get:function(t){return function(){var e;return null!=(e=t.resources.data).XObject?e.XObject:e.XObject={}}}(this)},ext_gstates:{get:function(t){return function(){var e;return null!=(e=t.resources.data).ExtGState?e.ExtGState:e.ExtGState={}}}(this)},patterns:{get:function(t){return function(){var e;return null!=(e=t.resources.data).Pattern?e.Pattern:e.Pattern={}}}(this)},annotations:{get:function(t){return function(){var e;return null!=(e=t.dictionary.data).Annots?e.Annots:e.Annots=[]}}(this)}}),this.dictionary=this.document.ref({Type:"Page",Parent:this.document._root.data.Pages,MediaBox:[0,0,this.width,this.height],Contents:this.content,Resources:this.resources})}var e,n;return t.prototype.maxY=function(){return this.height-this.margins.bottom},t.prototype.write=function(t){return this.content.write(t)},t.prototype.end=function(){return this.dictionary.end(),this.resources.end(),this.content.end()},e={top:72,left:72,bottom:72,right:72},n={"4A0":[4767.87,6740.79],"2A0":[3370.39,4767.87],A0:[2383.94,3370.39],A1:[1683.78,2383.94],A2:[1190.55,1683.78],A3:[841.89,1190.55],A4:[595.28,841.89],A5:[419.53,595.28],A6:[297.64,419.53],A7:[209.76,297.64],A8:[147.4,209.76],A9:[104.88,147.4],A10:[73.7,104.88],B0:[2834.65,4008.19],B1:[2004.09,2834.65],B2:[1417.32,2004.09],B3:[1000.63,1417.32],B4:[708.66,1000.63],B5:[498.9,708.66],B6:[354.33,498.9],B7:[249.45,354.33],B8:[175.75,249.45],B9:[124.72,175.75],B10:[87.87,124.72],C0:[2599.37,3676.54],C1:[1836.85,2599.37],C2:[1298.27,1836.85],C3:[918.43,1298.27],C4:[649.13,918.43],C5:[459.21,649.13],C6:[323.15,459.21],C7:[229.61,323.15],C8:[161.57,229.61],C9:[113.39,161.57],C10:[79.37,113.39],RA0:[2437.8,3458.27],RA1:[1729.13,2437.8],RA2:[1218.9,1729.13],RA3:[864.57,1218.9],RA4:[609.45,864.57],SRA0:[2551.18,3628.35],SRA1:[1814.17,2551.18],SRA2:[1275.59,1814.17],SRA3:[907.09,1275.59],SRA4:[637.8,907.09],EXECUTIVE:[521.86,756],FOLIO:[612,936],LEGAL:[612,1008],LETTER:[612,792],TABLOID:[792,1224]},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i=[].slice;r=n(47),e=4*((Math.sqrt(2)-1)/3),t.exports={initVector:function(){return this._ctm=[1,0,0,1,0,0],this._ctmStack=[]},save:function(){return this._ctmStack.push(this._ctm.slice()),this.addContent("q")},restore:function(){return this._ctm=this._ctmStack.pop()||[1,0,0,1,0,0],this.addContent("Q")},closePath:function(){return this.addContent("h")},lineWidth:function(t){return this.addContent(""+t+" w")},_CAP_STYLES:{BUTT:0,ROUND:1,SQUARE:2},lineCap:function(t){return"string"==typeof t&&(t=this._CAP_STYLES[t.toUpperCase()]),this.addContent(""+t+" J")},_JOIN_STYLES:{MITER:0,ROUND:1,BEVEL:2},lineJoin:function(t){return"string"==typeof t&&(t=this._JOIN_STYLES[t.toUpperCase()]),this.addContent(""+t+" j")},miterLimit:function(t){return this.addContent(""+t+" M")},dash:function(t,e){var n,r,i;return null==e&&(e={}),null==t?this:(r=null!=(i=e.space)?i:t,n=e.phase||0,this.addContent("["+t+" "+r+"] "+n+" d"))},undash:function(){return this.addContent("[] 0 d")},moveTo:function(t,e){return this.addContent(""+t+" "+e+" m")},lineTo:function(t,e){return this.addContent(""+t+" "+e+" l")},bezierCurveTo:function(t,e,n,r,i,o){return this.addContent(""+t+" "+e+" "+n+" "+r+" "+i+" "+o+" c")},quadraticCurveTo:function(t,e,n,r){return this.addContent(""+t+" "+e+" "+n+" "+r+" v")},rect:function(t,e,n,r){return this.addContent(""+t+" "+e+" "+n+" "+r+" re")},roundedRect:function(t,e,n,r,i){return null==i&&(i=0),this.moveTo(t+i,e),this.lineTo(t+n-i,e),this.quadraticCurveTo(t+n,e,t+n,e+i),this.lineTo(t+n,e+r-i),this.quadraticCurveTo(t+n,e+r,t+n-i,e+r),this.lineTo(t+i,e+r),this.quadraticCurveTo(t,e+r,t,e+r-i),this.lineTo(t,e+i),this.quadraticCurveTo(t,e,t+i,e)},ellipse:function(t,n,r,i){var o,a,s,h,u,l;return null==i&&(i=r),t-=r,n-=i,o=r*e,a=i*e,s=t+2*r,u=n+2*i,h=t+r,l=n+i,this.moveTo(t,l),this.bezierCurveTo(t,l-a,h-o,n,h,n),this.bezierCurveTo(h+o,n,s,l-a,s,l),this.bezierCurveTo(s,l+a,h+o,u,h,u),this.bezierCurveTo(h-o,u,t,l+a,t,l),this.closePath()},circle:function(t,e,n){return this.ellipse(t,e,n)},polygon:function(){var t,e,n,r;for(e=1<=arguments.length?i.call(arguments,0):[],this.moveTo.apply(this,e.shift()),n=0,r=e.length;r>n;n++)t=e[n],this.lineTo.apply(this,t);return this.closePath()},path:function(t){return r.apply(this,t),this},_windingRule:function(t){return/even-?odd/.test(t)?"*":""},fill:function(t,e){return/(even-?odd)|(non-?zero)/.test(t)&&(e=t,t=null),t&&this.fillColor(t),this.addContent("f"+this._windingRule(e))},stroke:function(t){return t&&this.strokeColor(t),this.addContent("S")},fillAndStroke:function(t,e,n){var r;return null==e&&(e=t),r=/(even-?odd)|(non-?zero)/,r.test(t)&&(n=t,t=null),r.test(e)&&(n=e,e=t),t&&(this.fillColor(t),this.strokeColor(e)),this.addContent("B"+this._windingRule(n))},clip:function(t){return this.addContent("W"+this._windingRule(t)+" n")},transform:function(t,e,n,r,i,o){var a,s,h,u,l,c,f,d,p;return a=this._ctm,s=a[0],h=a[1],u=a[2],l=a[3],c=a[4],f=a[5],a[0]=s*t+u*e,a[1]=h*t+l*e,a[2]=s*n+u*r,a[3]=h*n+l*r,a[4]=s*i+u*o+c,a[5]=h*i+l*o+f,p=function(){var a,s,h,u;for(h=[t,e,n,r,i,o],u=[],a=0,s=h.length;s>a;a++)d=h[a],u.push(+d.toFixed(5));return u}().join(" "),this.addContent(""+p+" cm")},translate:function(t,e){return this.transform(1,0,0,1,t,e)},rotate:function(t,e){var n,r,i,o,a,s,h,u;return null==e&&(e={}),r=t*Math.PI/180,n=Math.cos(r),i=Math.sin(r),o=s=0,null!=e.origin&&(u=e.origin,o=u[0],s=u[1],a=o*n-s*i,h=o*i+s*n,o-=a,s-=h),this.transform(n,i,-i,n,o,s)},scale:function(t,e,n){var r,i,o;return null==e&&(e=t),null==n&&(n={}),2===arguments.length&&(e=t,n=e),r=i=0,null!=n.origin&&(o=n.origin,r=o[0],i=o[1],r-=t*r,i-=e*i),this.transform(t,0,0,e,r,i)}}}).call(this)},function(t,e,n){(function(){var e;e=n(48),t.exports={initText:function(){return this.x=0,this.y=0,this._lineGap=0},lineGap:function(t){return this._lineGap=t,this},moveDown:function(t){return null==t&&(t=1),this.y+=this.currentLineHeight(!0)*t+this._lineGap,this},moveUp:function(t){return null==t&&(t=1),this.y-=this.currentLineHeight(!0)*t+this._lineGap,this},_text:function(t,n,r,i,o){var a,s,h,u,l;if(i=this._initOptions(n,r,i),t=""+t,i.wordSpacing&&(t=t.replace(/\s{2,}/g," ")),i.width)s=this._wrapper,s||(s=new e(this,i),s.on("line",o)),this._wrapper=i.continued?s:null,this._textOptions=i.continued?i:null,s.wrap(t,i);else for(l=t.split("\n"),h=0,u=l.length;u>h;h++)a=l[h],o(a,i);return this},text:function(t,e,n,r){return this._text(t,e,n,r,this._line.bind(this))},widthOfString:function(t,e){return null==e&&(e={}),this._font.widthOfString(t,this._fontSize)+(e.characterSpacing||0)*(t.length-1)},heightOfString:function(t,e){var n,r,i,o;return null==e&&(e={}),i=this.x,o=this.y,e=this._initOptions(e),e.height=1/0,r=e.lineGap||this._lineGap||0,this._text(t,this.x,this.y,e,function(t){return function(e,n){return t.y+=t.currentLineHeight(!0)+r}}(this)),n=this.y-o,this.x=i,this.y=o,n},list:function(t,n,r,i,o){var a,s,h,u,l,c,f,d;return i=this._initOptions(n,r,i),d=Math.round(this._font.ascender/1e3*this._fontSize/3),h=i.textIndent||5*d,u=i.bulletIndent||8*d,c=1,l=[],f=[],a=function(t){var e,n,r,i,o;for(o=[],e=r=0,i=t.length;i>r;e=++r)n=t[e],Array.isArray(n)?(c++,a(n),o.push(c--)):(l.push(n),o.push(f.push(c)));return o},a(t),o=new e(this,i),o.on("line",this._line.bind(this)),c=1,s=0,o.on("firstLine",function(t){return function(){var e,n;return(n=f[s++])!==c&&(e=u*(n-c),t.x+=e,o.lineWidth-=e,c=n),t.circle(t.x-h+d,t.y+d+d/2,d),t.fill()}}(this)),o.on("sectionStart",function(t){return function(){var e;return e=h+u*(c-1),t.x+=e,o.lineWidth-=e}}(this)),o.on("sectionEnd",function(t){return function(){var e;return e=h+u*(c-1),t.x-=e,o.lineWidth+=e}}(this)),o.wrap(l.join("\n"),i),this},_initOptions:function(t,e,n){var r,i,o,a;if(null==t&&(t={}),null==n&&(n={}),"object"==typeof t&&(n=t,t=null),n=function(){var t,e,r;e={};for(t in n)r=n[t],e[t]=r;return e}(),this._textOptions){a=this._textOptions;for(r in a)o=a[r],"continued"!==r&&null==n[r]&&(n[r]=o)}return null!=t&&(this.x=t),null!=e&&(this.y=e),n.lineBreak!==!1&&(i=this.page.margins,null==n.width&&(n.width=this.page.width-this.x-i.right)),n.columns||(n.columns=0),null==n.columnGap&&(n.columnGap=18),n},_line:function(t,e,n){var r;return null==e&&(e={}),this._fragment(t,this.x,this.y,e),r=e.lineGap||this._lineGap||0,n?this.y+=this.currentLineHeight(!0)+r:this.x+=this.widthOfString(t)},_fragment:function(t,e,n,r){var i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x;if(t=""+t,0!==t.length){if(i=r.align||"left",m=r.wordSpacing||0,o=r.characterSpacing||0,r.width)switch(i){case"right":g=this.widthOfString(t.replace(/\s+$/,""),r),e+=r.lineWidth-g;break;case"center":e+=r.lineWidth/2-r.textWidth/2;break;case"justify":y=t.trim().split(/\s+/),g=this.widthOfString(t.replace(/\s+/g,""),r),p=this.widthOfString(" ")+o,m=Math.max(0,(r.lineWidth-g)/Math.max(1,y.length-1)-p)}if(d=r.textWidth+m*(r.wordCount-1)+o*(t.length-1),r.link&&this.link(e,n,d,this.currentLineHeight(),r.link),(r.underline||r.strike)&&(this.save(),r.stroke||this.strokeColor.apply(this,this._fillColor),l=this._fontSize<10?.5:Math.floor(this._fontSize/10),this.lineWidth(l),s=r.underline?1:2,c=n+this.currentLineHeight()/s,r.underline&&(c-=l),this.moveTo(e,c),this.lineTo(e+d,c),this.stroke(),this.restore()),this.save(),this.transform(1,0,0,-1,0,this.page.height),n=this.page.height-n-this._font.ascender/1e3*this._fontSize,null==(w=this.page.fonts)[x=this._font.id]&&(w[x]=this._font.ref()),this._font.use(t),this.addContent("BT"),this.addContent(""+e+" "+n+" Td"),this.addContent("/"+this._font.id+" "+this._fontSize+" Tf"),f=r.fill&&r.stroke?2:r.stroke?1:0,f&&this.addContent(""+f+" Tr"),o&&this.addContent(""+o+" Tc"),m){for(y=t.trim().split(/\s+/),m+=this.widthOfString(" ")+o,m*=1e3/this._fontSize,a=[],_=0,b=y.length;b>_;_++)v=y[_],h=this._font.encode(v),h=function(){var t,e,n;for(n=[],u=t=0,e=h.length;e>t;u=t+=1)n.push(h.charCodeAt(u).toString(16));return n}().join(""),a.push("<"+h+"> "+-m);this.addContent("["+a.join(" ")+"] TJ")}else h=this._font.encode(t),h=function(){var t,e,n;for(n=[],u=t=0,e=h.length;e>t;u=t+=1)n.push(h.charCodeAt(u).toString(16));return n}().join(""),this.addContent("<"+h+"> Tj");return this.addContent("ET"),this.restore()}}}}).call(this)},function(t,e,n){(function(){var e,r,i,o,a;a=n(49),e=a.PDFGradient,r=a.PDFLinearGradient,i=a.PDFRadialGradient,t.exports={initColor:function(){return this._opacityRegistry={},this._opacityCount=0,this._gradCount=0},_normalizeColor:function(t){var n,r;return t instanceof e?t:("string"==typeof t&&("#"===t.charAt(0)?(4===t.length&&(t=t.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i,"#$1$1$2$2$3$3")),n=parseInt(t.slice(1),16),t=[n>>16,n>>8&255,255&n]):o[t]&&(t=o[t])),Array.isArray(t)?(3===t.length?t=function(){var e,n,i;for(i=[],e=0,n=t.length;n>e;e++)r=t[e],i.push(r/255);return i}():4===t.length&&(t=function(){var e,n,i;for(i=[],e=0,n=t.length;n>e;e++)r=t[e],i.push(r/100);return i}()),t):null)},_setColor:function(t,n){var r,i,o,a;return(t=this._normalizeColor(t))?(this._sMasked&&(r=this.ref({Type:"ExtGState",SMask:"None"}),r.end(),i="Gs"+ ++this._opacityCount,this.page.ext_gstates[i]=r,this.addContent("/"+i+" gs"),this._sMasked=!1),o=n?"SCN":"scn",t instanceof e?(this._setColorSpace("Pattern",n),t.apply(o)):(a=4===t.length?"DeviceCMYK":"DeviceRGB",this._setColorSpace(a,n),t=t.join(" "),this.addContent(""+t+" "+o)),!0):!1},_setColorSpace:function(t,e){var n;return n=e?"CS":"cs",this.addContent("/"+t+" "+n)},fillColor:function(t,e){var n;return null==e&&(e=1),n=this._setColor(t,!1),n&&this.fillOpacity(e),this._fillColor=[t,e],this},strokeColor:function(t,e){var n;return null==e&&(e=1),n=this._setColor(t,!0),n&&this.strokeOpacity(e),this},opacity:function(t){return this._doOpacity(t,t),this},fillOpacity:function(t){return this._doOpacity(t,null),this},strokeOpacity:function(t){return this._doOpacity(null,t),this},_doOpacity:function(t,e){var n,r,i,o,a;if(null!=t||null!=e)return null!=t&&(t=Math.max(0,Math.min(1,t))),null!=e&&(e=Math.max(0,Math.min(1,e))),i=""+t+"_"+e,this._opacityRegistry[i]?(a=this._opacityRegistry[i],n=a[0],o=a[1]):(n={Type:"ExtGState"},null!=t&&(n.ca=t),null!=e&&(n.CA=e),n=this.ref(n),n.end(),r=++this._opacityCount,o="Gs"+r,this._opacityRegistry[i]=[n,o]),this.page.ext_gstates[o]=n,this.addContent("/"+o+" gs")},linearGradient:function(t,e,n,i){return new r(this,t,e,n,i)},radialGradient:function(t,e,n,r,o,a){return new i(this,t,e,n,r,o,a)}},o={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}).call(this)},function(t,e,n){(function(e){(function(){var r;r=n(17),t.exports={initImages:function(){return this._imageRegistry={},this._imageCount=0},image:function(t,n,i,o){var a,s,h,u,l,c,f,d,p,g,v,m,y,w;return null==o&&(o={}),"object"==typeof n&&(o=n,n=null),n=null!=(m=null!=n?n:o.x)?m:this.x,i=null!=(y=null!=i?i:o.y)?y:this.y,e.isBuffer(t)||(c=this._imageRegistry[t]),c||(c=r.open(t,"I"+ ++this._imageCount),c.embed(this),e.isBuffer(t)||(this._imageRegistry[t]=c)),null==(g=this.page.xobjects)[v=c.label]&&(g[v]=c.obj),d=o.width||c.width,u=o.height||c.height,o.width&&!o.height?(p=d/c.width,d=c.width*p,u=c.height*p):o.height&&!o.width?(l=u/c.height,d=c.width*l,u=c.height*l):o.scale?(d=c.width*o.scale,u=c.height*o.scale):o.fit&&(w=o.fit,h=w[0],a=w[1],s=h/a,f=c.width/c.height,f>s?(d=h,u=h/f):(u=a,d=a*f),"center"===o.align?n=n+h/2-d/2:"right"===o.align&&(n=n+h-d),"center"===o.valign?i=i+a/2-u/2:"bottom"===o.valign&&(i=i+a-u)),this.y===i&&(this.y+=u),this.save(),this.transform(d,0,0,-u,n,i+u),this.addContent("/"+c.label+" Do"),this.restore(),this}}}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){(function(){t.exports={annotate:function(t,e,n,r,i){var o,a,s;i.Type="Annot",i.Rect=this._convertRect(t,e,n,r),i.Border=[0,0,0],"Link"!==i.Subtype&&null==i.C&&(i.C=this._normalizeColor(i.color||[0,0,0])),delete i.color,"string"==typeof i.Dest&&(i.Dest=new String(i.Dest));for(o in i)s=i[o],i[o[0].toUpperCase()+o.slice(1)]=s;return a=this.ref(i),this.page.annotations.push(a),a.end(),this},note:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="Text",o.Contents=new String(i),o.Name="Comment",null==o.color&&(o.color=[243,223,92]),this.annotate(t,e,n,r,o)},link:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="Link",o.A=this.ref({S:"URI",URI:new String(i)}),o.A.end(),this.annotate(t,e,n,r,o)},_markup:function(t,e,n,r,i){var o,a,s,h,u;return null==i&&(i={}),u=this._convertRect(t,e,n,r),o=u[0],s=u[1],a=u[2],h=u[3],i.QuadPoints=[o,h,a,h,o,s,a,s],i.Contents=new String,this.annotate(t,e,n,r,i)},highlight:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Highlight",null==i.color&&(i.color=[241,238,148]),this._markup(t,e,n,r,i)},underline:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Underline",this._markup(t,e,n,r,i)},strike:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="StrikeOut",this._markup(t,e,n,r,i)},lineAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Line",i.Contents=new String,i.L=[t,this.page.height-e,n,this.page.height-r],this.annotate(t,e,n,r,i)},rectAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Square",i.Contents=new String,this.annotate(t,e,n,r,i)},ellipseAnnotation:function(t,e,n,r,i){return null==i&&(i={}),i.Subtype="Circle",i.Contents=new String,this.annotate(t,e,n,r,i)},textAnnotation:function(t,e,n,r,i,o){return null==o&&(o={}),o.Subtype="FreeText",o.Contents=new String(i),o.DA=new String,this.annotate(t,e,n,r,o)},_convertRect:function(t,e,n,r){var i,o,a,s,h,u,l,c,f;return c=e,e+=r,l=t+n,f=this._ctm,i=f[0],o=f[1],a=f[2],s=f[3],h=f[4],u=f[5],t=i*t+a*e+h,e=o*t+s*e+u,l=i*l+a*c+h,c=o*l+s*c+u,[t,e,l,c]}}}).call(this)},function(t,e,n){(function(){var e;e=n(52),t.exports={initFonts:function(){this._fontFamilies={},this._fontCount=0,this._fontSize=12,this._font=null,this._registeredFonts={}},font:function(t,n,r){var i,o,a,s;return"number"==typeof n&&(r=n,n=null),"string"==typeof t&&this._registeredFonts[t]?(i=t,s=this._registeredFonts[t],t=s.src,n=s.family):(i=n||t,"string"!=typeof i&&(i=null)),null!=r&&this.fontSize(r),(o=this._fontFamilies[i])?(this._font=o,this):(a="F"+ ++this._fontCount,this._font=new e(this,t,n,a),(o=this._fontFamilies[this._font.name])?(this._font=o,this):(i&&(this._fontFamilies[i]=this._font),this._fontFamilies[this._font.name]=this._font,this))},fontSize:function(t){return this._fontSize=t,this},currentLineHeight:function(t){return null==t&&(t=!1),this._font.lineHeight(this._fontSize,t)},registerFont:function(t,e,n){return this._registeredFonts[t]={src:e,family:n},this}}}).call(this)},function(t,e,n){(function(t,r){function i(e,n,r){function i(){for(var t;null!==(t=e.read());)s.push(t),h+=t.length;e.once("readable",i)}function o(t){e.removeListener("end",a),e.removeListener("readable",i),r(t)}function a(){var n=t.concat(s,h);s=[],r(null,n),e.close()}var s=[],h=0;e.on("error",o),e.on("end",a),e.end(n),i()}function o(e,n){if("string"==typeof n&&(n=new t(n)),!t.isBuffer(n))throw new TypeError("Not a string or buffer");var r=g.Z_FINISH;return e._processChunk(n,r)}function a(t){return this instanceof a?void d.call(this,t,g.DEFLATE):new a(t)}function s(t){return this instanceof s?void d.call(this,t,g.INFLATE):new s(t)}function h(t){return this instanceof h?void d.call(this,t,g.GZIP):new h(t)}function u(t){return this instanceof u?void d.call(this,t,g.GUNZIP):new u(t)}function l(t){return this instanceof l?void d.call(this,t,g.DEFLATERAW):new l(t)}function c(t){return this instanceof c?void d.call(this,t,g.INFLATERAW):new c(t)}function f(t){return this instanceof f?void d.call(this,t,g.UNZIP):new f(t)}function d(n,r){if(this._opts=n=n||{},this._chunkSize=n.chunkSize||e.Z_DEFAULT_CHUNK,p.call(this,n),n.flush&&n.flush!==g.Z_NO_FLUSH&&n.flush!==g.Z_PARTIAL_FLUSH&&n.flush!==g.Z_SYNC_FLUSH&&n.flush!==g.Z_FULL_FLUSH&&n.flush!==g.Z_FINISH&&n.flush!==g.Z_BLOCK)throw new Error("Invalid flush flag: "+n.flush);if(this._flushFlag=n.flush||g.Z_NO_FLUSH,n.chunkSize&&(n.chunkSize<e.Z_MIN_CHUNK||n.chunkSize>e.Z_MAX_CHUNK))throw new Error("Invalid chunk size: "+n.chunkSize);if(n.windowBits&&(n.windowBits<e.Z_MIN_WINDOWBITS||n.windowBits>e.Z_MAX_WINDOWBITS))throw new Error("Invalid windowBits: "+n.windowBits);if(n.level&&(n.level<e.Z_MIN_LEVEL||n.level>e.Z_MAX_LEVEL))throw new Error("Invalid compression level: "+n.level);if(n.memLevel&&(n.memLevel<e.Z_MIN_MEMLEVEL||n.memLevel>e.Z_MAX_MEMLEVEL))throw new Error("Invalid memLevel: "+n.memLevel);if(n.strategy&&n.strategy!=e.Z_FILTERED&&n.strategy!=e.Z_HUFFMAN_ONLY&&n.strategy!=e.Z_RLE&&n.strategy!=e.Z_FIXED&&n.strategy!=e.Z_DEFAULT_STRATEGY)throw new Error("Invalid strategy: "+n.strategy);if(n.dictionary&&!t.isBuffer(n.dictionary))throw new Error("Invalid dictionary: it should be a Buffer instance");this._binding=new g.Zlib(r);var i=this;this._hadError=!1,this._binding.onerror=function(t,n){i._binding=null,i._hadError=!0;var r=new Error(t);r.errno=n,r.code=e.codes[n],i.emit("error",r)};var o=e.Z_DEFAULT_COMPRESSION;"number"==typeof n.level&&(o=n.level);var a=e.Z_DEFAULT_STRATEGY;"number"==typeof n.strategy&&(a=n.strategy),this._binding.init(n.windowBits||e.Z_DEFAULT_WINDOWBITS,o,n.memLevel||e.Z_DEFAULT_MEMLEVEL,a,n.dictionary),this._buffer=new t(this._chunkSize),this._offset=0,this._closed=!1,this._level=o,this._strategy=a,this.once("end",this.close)}var p=n(55),g=n(50),v=n(60),m=n(53).ok;g.Z_MIN_WINDOWBITS=8,g.Z_MAX_WINDOWBITS=15,g.Z_DEFAULT_WINDOWBITS=15,g.Z_MIN_CHUNK=64,g.Z_MAX_CHUNK=1/0,g.Z_DEFAULT_CHUNK=16384,g.Z_MIN_MEMLEVEL=1,g.Z_MAX_MEMLEVEL=9,g.Z_DEFAULT_MEMLEVEL=8,g.Z_MIN_LEVEL=-1,g.Z_MAX_LEVEL=9,g.Z_DEFAULT_LEVEL=g.Z_DEFAULT_COMPRESSION,Object.keys(g).forEach(function(t){t.match(/^Z/)&&(e[t]=g[t])}),e.codes={Z_OK:g.Z_OK,Z_STREAM_END:g.Z_STREAM_END,Z_NEED_DICT:g.Z_NEED_DICT,Z_ERRNO:g.Z_ERRNO,Z_STREAM_ERROR:g.Z_STREAM_ERROR,Z_DATA_ERROR:g.Z_DATA_ERROR,Z_MEM_ERROR:g.Z_MEM_ERROR,Z_BUF_ERROR:g.Z_BUF_ERROR,Z_VERSION_ERROR:g.Z_VERSION_ERROR},Object.keys(e.codes).forEach(function(t){e.codes[e.codes[t]]=t}),e.Deflate=a,e.Inflate=s,e.Gzip=h,e.Gunzip=u,e.DeflateRaw=l,e.InflateRaw=c,e.Unzip=f,e.createDeflate=function(t){return new a(t)},e.createInflate=function(t){return new s(t)},e.createDeflateRaw=function(t){return new l(t)},e.createInflateRaw=function(t){return new c(t)},e.createGzip=function(t){return new h(t)},e.createGunzip=function(t){return new u(t)},e.createUnzip=function(t){return new f(t)},e.deflate=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new a(e),t,n)},e.deflateSync=function(t,e){return o(new a(e),t)},e.gzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new h(e),t,n)},e.gzipSync=function(t,e){return o(new h(e),t)},e.deflateRaw=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new l(e),t,n)},e.deflateRawSync=function(t,e){return o(new l(e),t)},e.unzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new f(e),t,n)},e.unzipSync=function(t,e){return o(new f(e),t)},e.inflate=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new s(e),t,n)},e.inflateSync=function(t,e){return o(new s(e),t)},e.gunzip=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new u(e),t,n)},e.gunzipSync=function(t,e){return o(new u(e),t)},e.inflateRaw=function(t,e,n){return"function"==typeof e&&(n=e,e={}),i(new c(e),t,n)},e.inflateRawSync=function(t,e){return o(new c(e),t)},v.inherits(d,p),d.prototype.params=function(t,n,i){if(t<e.Z_MIN_LEVEL||t>e.Z_MAX_LEVEL)throw new RangeError("Invalid compression level: "+t);if(n!=e.Z_FILTERED&&n!=e.Z_HUFFMAN_ONLY&&n!=e.Z_RLE&&n!=e.Z_FIXED&&n!=e.Z_DEFAULT_STRATEGY)throw new TypeError("Invalid strategy: "+n);if(this._level!==t||this._strategy!==n){var o=this;this.flush(g.Z_SYNC_FLUSH,function(){o._binding.params(t,n),o._hadError||(o._level=t,o._strategy=n,i&&i())})}else r.nextTick(i)},d.prototype.reset=function(){return this._binding.reset()},d.prototype._flush=function(e){this._transform(new t(0),"",e)},d.prototype.flush=function(e,n){var i=this._writableState;if(("function"==typeof e||void 0===e&&!n)&&(n=e,e=g.Z_FULL_FLUSH),i.ended)n&&r.nextTick(n);else if(i.ending)n&&this.once("end",n);else if(i.needDrain){var o=this;this.once("drain",function(){o.flush(n)})}else this._flushFlag=e,this.write(new t(0),"",n)},d.prototype.close=function(t){if(t&&r.nextTick(t),!this._closed){this._closed=!0,this._binding.close();var e=this;r.nextTick(function(){e.emit("close")})}},d.prototype._transform=function(e,n,r){var i,o=this._writableState,a=o.ending||o.ended,s=a&&(!e||o.length===e.length);if(null===!e&&!t.isBuffer(e))return r(new Error("invalid input"));s?i=g.Z_FINISH:(i=this._flushFlag,e.length>=o.length&&(this._flushFlag=this._opts.flush||g.Z_NO_FLUSH));this._processChunk(e,i,r)},d.prototype._processChunk=function(e,n,r){function i(l,d){if(!h._hadError){var p=a-d;if(m(p>=0,"have should not go down"),p>0){var g=h._buffer.slice(h._offset,h._offset+p);h._offset+=p,u?h.push(g):(c.push(g),f+=g.length)}if((0===d||h._offset>=h._chunkSize)&&(a=h._chunkSize,h._offset=0,h._buffer=new t(h._chunkSize)),0===d){if(s+=o-l,o=l,!u)return!0;var v=h._binding.write(n,e,s,o,h._buffer,h._offset,h._chunkSize);return v.callback=i,void(v.buffer=e)}return u?void r():!1}}var o=e&&e.length,a=this._chunkSize-this._offset,s=0,h=this,u="function"==typeof r;if(!u){var l,c=[],f=0;this.on("error",function(t){l=t});do var d=this._binding.writeSync(n,e,s,o,this._buffer,this._offset,a);while(!this._hadError&&i(d[0],d[1]));if(this._hadError)throw l;var p=t.concat(c,f);return this.close(),p}var g=this._binding.write(n,e,s,o,this._buffer,this._offset,a);g.buffer=e,g.callback=i},v.inherits(a,d),v.inherits(s,d),v.inherits(h,d),v.inherits(u,d),v.inherits(l,d),v.inherits(c,d),v.inherits(f,d)}).call(e,n(4).Buffer,n(61))},function(t,e,n){function r(){i.call(this)}t.exports=r;var i=n(54).EventEmitter,o=n(62);o(r,i),r.Readable=n(56),r.Writable=n(57),r.Duplex=n(58),r.Transform=n(55),r.PassThrough=n(59),r.Stream=r,r.prototype.pipe=function(t,e){function n(e){t.writable&&!1===t.write(e)&&u.pause&&u.pause()}function r(){u.readable&&u.resume&&u.resume()}function o(){l||(l=!0,t.end())}function a(){l||(l=!0,"function"==typeof t.destroy&&t.destroy())}function s(t){if(h(),0===i.listenerCount(this,"error"))throw t}function h(){u.removeListener("data",n),t.removeListener("drain",r),u.removeListener("end",o),u.removeListener("close",a),u.removeListener("error",s),t.removeListener("error",s),u.removeListener("end",h),u.removeListener("close",h),t.removeListener("close",h)}var u=this;u.on("data",n),t.on("drain",r),t._isStdio||e&&e.end===!1||(u.on("end",o),u.on("close",a));var l=!1;return u.on("error",s),t.on("error",s),u.on("end",h),u.on("close",h),t.on("close",h),t.emit("pipe",u),t}},function(t,e,n){(function(){var e;e=function(){function t(){}var e,n,r,i,o,a,s,h,u,l,c,f,d;return t.apply=function(t,n){var r;return r=a(n),e(r,t)},o={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0},a=function(t){var e,n,r,i,a,s,h,u,l;for(h=[],e=[],i="",a=!1,s=0,u=0,l=t.length;l>u;u++)if(n=t[u],null!=o[n])s=o[n],r&&(i.length>0&&(e[e.length]=+i),h[h.length]={cmd:r,args:e},e=[],i="",a=!1),r=n;else if(" "===n||","===n||"-"===n&&i.length>0&&"e"!==i[i.length-1]||"."===n&&a){if(0===i.length)continue;e.length===s?(h[h.length]={cmd:r,args:e},e=[+i],"M"===r&&(r="L"),"m"===r&&(r="l")):e[e.length]=+i,a="."===n,i="-"===n||"."===n?n:""}else i+=n,"."===n&&(a=!0);return i.length>0&&(e.length===s?(h[h.length]={cmd:r,args:e},e=[+i],"M"===r&&(r="L"),"m"===r&&(r="l")):e[e.length]=+i),h[h.length]={cmd:r,args:e},h},r=i=s=h=f=d=0,e=function(t,e){var n,o,a,l,c;for(r=i=s=h=f=d=0,o=a=0,l=t.length;l>a;o=++a)n=t[o],"function"==typeof u[c=n.cmd]&&u[c](e,n.args);return r=i=s=h=0},u={M:function(t,e){return r=e[0],i=e[1],s=h=null,f=r,d=i,t.moveTo(r,i)},m:function(t,e){return r+=e[0],i+=e[1],s=h=null,f=r,d=i,t.moveTo(r,i)},C:function(t,e){return r=e[4],i=e[5],s=e[2],h=e[3],t.bezierCurveTo.apply(t,e)},c:function(t,e){return t.bezierCurveTo(e[0]+r,e[1]+i,e[2]+r,e[3]+i,e[4]+r,e[5]+i),s=r+e[2],h=i+e[3],r+=e[4],i+=e[5]},S:function(t,e){return null===s&&(s=r,h=i),t.bezierCurveTo(r-(s-r),i-(h-i),e[0],e[1],e[2],e[3]),s=e[0],h=e[1],r=e[2],i=e[3]},s:function(t,e){return null===s&&(s=r,h=i),t.bezierCurveTo(r-(s-r),i-(h-i),r+e[0],i+e[1],r+e[2],i+e[3]),s=r+e[0],h=i+e[1],r+=e[2],i+=e[3]},Q:function(t,e){return s=e[0],h=e[1],r=e[2],i=e[3],t.quadraticCurveTo(e[0],e[1],r,i)},q:function(t,e){return t.quadraticCurveTo(e[0]+r,e[1]+i,e[2]+r,e[3]+i),s=r+e[0],h=i+e[1],r+=e[2],i+=e[3]},T:function(t,e){return null===s?(s=r,h=i):(s=r-(s-r),h=i-(h-i)),t.quadraticCurveTo(s,h,e[0],e[1]),s=r-(s-r),h=i-(h-i),r=e[0],i=e[1]},t:function(t,e){return null===s?(s=r,h=i):(s=r-(s-r),h=i-(h-i)),t.quadraticCurveTo(s,h,r+e[0],i+e[1]),r+=e[0],i+=e[1]},A:function(t,e){return c(t,r,i,e),r=e[5],i=e[6]},a:function(t,e){return e[5]+=r,e[6]+=i,c(t,r,i,e),r=e[5],i=e[6]},L:function(t,e){return r=e[0],i=e[1],s=h=null,t.lineTo(r,i)},l:function(t,e){return r+=e[0],i+=e[1],s=h=null,t.lineTo(r,i)},H:function(t,e){return r=e[0],s=h=null,t.lineTo(r,i)},h:function(t,e){return r+=e[0],s=h=null,t.lineTo(r,i)},V:function(t,e){return i=e[0],s=h=null,t.lineTo(r,i)},v:function(t,e){return i+=e[0],s=h=null,t.lineTo(r,i)},Z:function(t){return t.closePath(),r=f,i=d},z:function(t){return t.closePath(),r=f,i=d}},c=function(t,e,r,i){var o,a,s,h,u,c,f,d,p,g,v,m,y;for(c=i[0],f=i[1],u=i[2],h=i[3],g=i[4],a=i[5],s=i[6],p=n(a,s,c,f,h,g,u,e,r),y=[],v=0,m=p.length;m>v;v++)d=p[v],o=l.apply(null,d),y.push(t.bezierCurveTo.apply(t,o));return y},n=function(t,e,n,r,i,o,a,u,l){var c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L,R,B,T,M,O,D,U;for(k=a*(Math.PI/180),S=Math.sin(k),g=Math.cos(k),n=Math.abs(n),r=Math.abs(r),s=g*(u-t)*.5+S*(l-e)*.5,h=g*(l-e)*.5-S*(u-t)*.5,y=s*s/(n*n)+h*h/(r*r),y>1&&(y=Math.sqrt(y),n*=y,r*=y),c=g/n,f=S/n,d=-S/r,p=g/r,R=c*u+f*l,M=d*u+p*l,B=c*t+f*e,O=d*t+p*e,v=(B-R)*(B-R)+(O-M)*(O-M),x=1/v-.25,0>x&&(x=0),b=Math.sqrt(x),o===i&&(b=-b),T=.5*(R+B)-b*(O-M),D=.5*(M+O)+b*(B-R),E=Math.atan2(M-D,R-T),C=Math.atan2(O-D,B-T),L=C-E,0>L&&1===o?L+=2*Math.PI:L>0&&0===o&&(L-=2*Math.PI),_=Math.ceil(Math.abs(L/(.5*Math.PI+.001))),w=[],m=U=0;_>=0?_>U:U>_;m=_>=0?++U:--U)I=E+m*L/_,A=E+(m+1)*L/_,w[m]=[T,D,I,A,n,r,S,g];return w},l=function(t,e,n,r,i,o,a,s){var h,u,l,c,f,d,p,g,v,m,y,w;return h=s*i,u=-a*o,l=a*i,c=s*o,d=.5*(r-n),f=8/3*Math.sin(.5*d)*Math.sin(.5*d)/Math.sin(d),p=t+Math.cos(n)-f*Math.sin(n),m=e+Math.sin(n)+f*Math.cos(n),v=t+Math.cos(r),w=e+Math.sin(r),g=v+f*Math.sin(r),y=w-f*Math.cos(r),[h*p+u*m,l*p+c*m,h*g+u*y,l*g+c*y,h*v+u*w,l*v+c*w]},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i,o={}.hasOwnProperty,a=function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,
t};e=n(54).EventEmitter,r=n(66),i=function(t){function e(t,e){var n;this.document=t,this.indent=e.indent||0,this.characterSpacing=e.characterSpacing||0,this.wordSpacing=0===e.wordSpacing,this.columns=e.columns||1,this.columnGap=null!=(n=e.columnGap)?n:18,this.lineWidth=(e.width-this.columnGap*(this.columns-1))/this.columns,this.spaceLeft=this.lineWidth,this.startX=this.document.x,this.startY=this.document.y,this.column=1,this.ellipsis=e.ellipsis,this.continuedX=0,null!=e.height?(this.height=e.height,this.maxY=this.startY+e.height):this.maxY=this.document.page.maxY(),this.on("firstLine",function(t){return function(e){var n;return n=t.continuedX||t.indent,t.document.x+=n,t.lineWidth-=n,t.once("line",function(){return t.document.x-=n,t.lineWidth+=n,e.continued&&!t.continuedX&&(t.continuedX=t.indent),e.continued?void 0:t.continuedX=0})}}(this)),this.on("lastLine",function(t){return function(e){var n;return n=e.align,"justify"===n&&(e.align="left"),t.lastLine=!0,t.once("line",function(){return t.document.y+=e.paragraphGap||0,e.align=n,t.lastLine=!1})}}(this))}return a(e,t),e.prototype.wordWidth=function(t){return this.document.widthOfString(t,this)+this.characterSpacing+this.wordSpacing},e.prototype.eachWord=function(t,e){var n,i,o,a,s,h,u,l,c,f;for(i=new r(t),s=null,f={};n=i.nextBreak();){if(c=t.slice((null!=s?s.position:void 0)||0,n.position),l=null!=f[c]?f[c]:f[c]=this.wordWidth(c),l>this.lineWidth+this.continuedX)for(h=s,o={};c.length;){for(a=c.length;l>this.spaceLeft;)l=this.wordWidth(c.slice(0,--a));if(o.required=a<c.length,u=e(c.slice(0,a),l,o,h),h={required:!1},c=c.slice(a),l=this.wordWidth(c),u===!1)break}else u=e(c,l,n,s);if(u===!1)break;s=n}},e.prototype.wrap=function(t,e){var n,r,i,o,a,s,h;return null!=e.indent&&(this.indent=e.indent),null!=e.characterSpacing&&(this.characterSpacing=e.characterSpacing),null!=e.wordSpacing&&(this.wordSpacing=e.wordSpacing),null!=e.ellipsis&&(this.ellipsis=e.ellipsis),o=this.document.y+this.document.currentLineHeight(!0),(this.document.y>this.maxY||o>this.maxY)&&this.nextSection(),n="",a=0,s=0,i=0,h=this.document.y,r=function(t){return function(){return e.textWidth=a+t.wordSpacing*(s-1),e.wordCount=s,e.lineWidth=t.lineWidth,h=t.document.y,t.emit("line",n,e,t),i++}}(this),this.emit("sectionStart",e,this),this.eachWord(t,function(t){return function(i,o,h,u){var l,c;if((null==u||u.required)&&(t.emit("firstLine",e,t),t.spaceLeft=t.lineWidth),o<=t.spaceLeft&&(n+=i,a+=o,s++),h.required||o>t.spaceLeft){if(h.required&&t.emit("lastLine",e,t),l=t.document.currentLineHeight(!0),null!=t.height&&t.ellipsis&&t.document.y+2*l>t.maxY&&t.column>=t.columns){for(t.ellipsis===!0&&(t.ellipsis="…"),n=n.replace(/\s+$/,""),a=t.wordWidth(n+t.ellipsis);a>t.lineWidth;)n=n.slice(0,-1).replace(/\s+$/,""),a=t.wordWidth(n+t.ellipsis);n+=t.ellipsis}return r(),t.document.y+l>t.maxY&&(c=t.nextSection(),!c)?(s=0,n="",!1):h.required?(o>t.spaceLeft&&(n=i,a=o,s=1,r()),t.spaceLeft=t.lineWidth,n="",a=0,s=0):(t.spaceLeft=t.lineWidth-o,n=i,a=o,s=1)}return t.spaceLeft-=o}}(this)),s>0&&(this.emit("lastLine",e,this),r()),this.emit("sectionEnd",e,this),e.continued===!0?(i>1&&(this.continuedX=0),this.continuedX+=e.textWidth,this.document.y=h):this.document.x=this.startX},e.prototype.nextSection=function(t){var e;if(this.emit("sectionEnd",t,this),++this.column>this.columns){if(null!=this.height)return!1;this.document.addPage(),this.column=1,this.startY=this.document.page.margins.top,this.maxY=this.document.page.maxY(),this.document.x=this.startX,this.document._fillColor&&(e=this.document).fillColor.apply(e,this.document._fillColor),this.emit("pageBreak",t,this)}else this.document.x+=this.lineWidth+this.columnGap,this.document.y=this.startY,this.emit("columnBreak",t,this);return this.emit("sectionStart",t,this),!0},e}(e),t.exports=i}).call(this)},function(t,e,n){(function(){var e,n,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};e=function(){function t(t){this.doc=t,this.stops=[],this.embedded=!1,this.transform=[1,0,0,1,0,0],this._colorSpace="DeviceRGB"}return t.prototype.stop=function(t,e,n){return null==n&&(n=1),n=Math.max(0,Math.min(1,n)),this.stops.push([t,this.doc._normalizeColor(e),n]),this},t.prototype.embed=function(){var t,e,n,r,i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L,R,B,T,M,O,D;if(!this.embedded&&0!==this.stops.length){for(this.embedded=!0,l=this.stops[this.stops.length-1],l[0]<1&&this.stops.push([1,l[1],l[2]]),t=[],r=[],A=[],u=R=0,M=this.stops.length-1;M>=0?M>R:R>M;u=M>=0?++R:--R)r.push(0,1),u+2!==this.stops.length&&t.push(this.stops[u+1][0]),i=this.doc.ref({FunctionType:2,Domain:[0,1],C0:this.stops[u+0][1],C1:this.stops[u+1][1],N:1}),A.push(i),i.end();if(1===A.length?i=A[0]:(i=this.doc.ref({FunctionType:3,Domain:[0,1],Functions:A,Bounds:t,Encode:r}),i.end()),this.id="Sh"+ ++this.doc._gradCount,c=this.doc._ctm.slice(),f=c[0],d=c[1],v=c[2],w=c[3],_=c[4],b=c[5],O=this.transform,p=O[0],g=O[1],m=O[2],y=O[3],e=O[4],n=O[5],c[0]=f*p+v*g,c[1]=d*p+w*g,c[2]=f*m+v*y,c[3]=d*m+w*y,c[4]=f*e+v*n+_,c[5]=d*e+w*n+b,C=this.shader(i),C.end(),S=this.doc.ref({Type:"Pattern",PatternType:2,Shading:C,Matrix:function(){var t,e,n;for(n=[],t=0,e=c.length;e>t;t++)L=c[t],n.push(+L.toFixed(5));return n}()}),this.doc.page.patterns[this.id]=S,S.end(),this.stops.some(function(t){return t[2]<1})){for(a=this.opacityGradient(),a._colorSpace="DeviceGray",D=this.stops,B=0,T=D.length;T>B;B++)I=D[B],a.stop(I[0],[I[2]]);a=a.embed(),s=this.doc.ref({Type:"Group",S:"Transparency",CS:"DeviceGray"}),s.end(),k=this.doc.ref({ProcSet:["PDF","Text","ImageB","ImageC","ImageI"],Shading:{Sh1:a.data.Shading}}),k.end(),o=this.doc.ref({Type:"XObject",Subtype:"Form",FormType:1,BBox:[0,0,this.doc.page.width,this.doc.page.height],Group:s,Resources:k}),o.end("/Sh1 sh"),E=this.doc.ref({Type:"Mask",S:"Luminosity",G:o}),E.end(),h=this.doc.ref({Type:"ExtGState",SMask:E}),this.opacity_id=++this.doc._opacityCount,x="Gs"+this.opacity_id,this.doc.page.ext_gstates[x]=h,h.end()}return S}},t.prototype.apply=function(t){return this.embedded||this.embed(),this.doc.addContent("/"+this.id+" "+t),this.opacity_id?(this.doc.addContent("/Gs"+this.opacity_id+" gs"),this.doc._sMasked=!0):void 0},t}(),n=function(t){function e(t,n,r,i,o){this.doc=t,this.x1=n,this.y1=r,this.x2=i,this.y2=o,e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype.shader=function(t){return this.doc.ref({ShadingType:2,ColorSpace:this._colorSpace,Coords:[this.x1,this.y1,this.x2,this.y2],Function:t,Extend:[!0,!0]})},e.prototype.opacityGradient=function(){return new e(this.doc,this.x1,this.y1,this.x2,this.y2)},e}(e),r=function(t){function e(t,n,r,i,o,a,s){this.doc=t,this.x1=n,this.y1=r,this.r1=i,this.x2=o,this.y2=a,this.r2=s,e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype.shader=function(t){return this.doc.ref({ShadingType:3,ColorSpace:this._colorSpace,Coords:[this.x1,this.y1,this.r1,this.x2,this.y2,this.r2],Function:t,Extend:[!0,!0]})},e.prototype.opacityGradient=function(){return new e(this.doc,this.x1,this.y1,this.r1,this.x2,this.y2,this.r2)},e}(e),t.exports={PDFGradient:e,PDFLinearGradient:n,PDFRadialGradient:r}}).call(this)},function(t,e,n){(function(t,r){function i(t){if(t<e.DEFLATE||t>e.UNZIP)throw new TypeError("Bad argument");this.mode=t,this.init_done=!1,this.write_in_progress=!1,this.pending_close=!1,this.windowBits=0,this.level=0,this.memLevel=0,this.strategy=0,this.dictionary=null}function o(t,e){for(var n=0;n<t.length;n++)this[e+n]=t[n]}var a=n(73),s=n(77),h=n(74),u=n(75),l=n(76);for(var c in l)e[c]=l[c];e.NONE=0,e.DEFLATE=1,e.INFLATE=2,e.GZIP=3,e.GUNZIP=4,e.DEFLATERAW=5,e.INFLATERAW=6,e.UNZIP=7,i.prototype.init=function(t,n,r,i,o){switch(this.windowBits=t,this.level=n,this.memLevel=r,this.strategy=i,(this.mode===e.GZIP||this.mode===e.GUNZIP)&&(this.windowBits+=16),this.mode===e.UNZIP&&(this.windowBits+=32),(this.mode===e.DEFLATERAW||this.mode===e.INFLATERAW)&&(this.windowBits=-this.windowBits),this.strm=new s,this.mode){case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:var a=h.deflateInit2(this.strm,this.level,e.Z_DEFLATED,this.windowBits,this.memLevel,this.strategy);break;case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:case e.UNZIP:var a=u.inflateInit2(this.strm,this.windowBits);break;default:throw new Error("Unknown mode "+this.mode)}return a!==e.Z_OK?void this._error(a):(this.write_in_progress=!1,void(this.init_done=!0))},i.prototype.params=function(){throw new Error("deflateParams Not supported")},i.prototype._writeCheck=function(){if(!this.init_done)throw new Error("write before init");if(this.mode===e.NONE)throw new Error("already finalized");if(this.write_in_progress)throw new Error("write already in progress");if(this.pending_close)throw new Error("close is pending")},i.prototype.write=function(e,n,r,i,o,a,s){this._writeCheck(),this.write_in_progress=!0;var h=this;return t.nextTick(function(){h.write_in_progress=!1;var t=h._write(e,n,r,i,o,a,s);h.callback(t[0],t[1]),h.pending_close&&h.close()}),this},i.prototype.writeSync=function(t,e,n,r,i,o,a){return this._writeCheck(),this._write(t,e,n,r,i,o,a)},i.prototype._write=function(t,n,i,a,s,l,c){if(this.write_in_progress=!0,t!==e.Z_NO_FLUSH&&t!==e.Z_PARTIAL_FLUSH&&t!==e.Z_SYNC_FLUSH&&t!==e.Z_FULL_FLUSH&&t!==e.Z_FINISH&&t!==e.Z_BLOCK)throw new Error("Invalid flush value");null==n&&(n=new r(0),a=0,i=0),s.set=s._set?s._set:o;var f=this.strm;switch(f.avail_in=a,f.input=n,f.next_in=i,f.avail_out=c,f.output=s,f.next_out=l,this.mode){case e.DEFLATE:case e.GZIP:case e.DEFLATERAW:var d=h.deflate(f,t);break;case e.UNZIP:case e.INFLATE:case e.GUNZIP:case e.INFLATERAW:var d=u.inflate(f,t);break;default:throw new Error("Unknown mode "+this.mode)}return d!==e.Z_STREAM_END&&d!==e.Z_OK&&this._error(d),this.write_in_progress=!1,[f.avail_in,f.avail_out]},i.prototype.close=function(){return this.write_in_progress?void(this.pending_close=!0):(this.pending_close=!1,this.mode===e.DEFLATE||this.mode===e.GZIP||this.mode===e.DEFLATERAW?h.deflateEnd(this.strm):u.inflateEnd(this.strm),void(this.mode=e.NONE))},i.prototype.reset=function(){switch(this.mode){case e.DEFLATE:case e.DEFLATERAW:var t=h.deflateReset(this.strm);break;case e.INFLATE:case e.INFLATERAW:var t=u.inflateReset(this.strm)}t!==e.Z_OK&&this._error(t)},i.prototype._error=function(t){this.onerror(a[t]+": "+this.strm.msg,t),this.write_in_progress=!1,this.pending_close&&this.close()},e.Zlib=i}).call(e,n(61),n(4).Buffer)},function(t,e,n){(function(e){(function(){var r,i,o;i=n(10),o=n(45),t.exports=r=function(){function t(t){var n,r,i,o,a,s,h,u,l,c,f;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.text={};;){switch(n=this.readUInt32(),s=function(){var t,e;for(e=[],i=t=0;4>t;i=++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"PLTE":this.palette=this.read(n);break;case"IDAT":for(i=l=0;n>l;i=l+=1)this.imgData.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(this.transparency.indexed=this.read(n),h=255-this.transparency.indexed.length,h>0)for(i=c=0;h>=0?h>c:c>h;i=h>=0?++c:--c)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(n)[0];break;case 2:this.transparency.rgb=this.read(n)}break;case"tEXt":u=this.read(n),o=u.indexOf(0),a=String.fromCharCode.apply(String,u.slice(0,o)),this.text[a]=String.fromCharCode.apply(String,u.slice(o+1));break;case"IEND":return this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(f=this.colorType)||6===f,r=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*r,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new e(this.imgData));default:this.pos+=n}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}return t.decode=function(e,n){return i.readFile(e,function(e,r){var i;return i=new t(r),i.decode(function(t){return n(t)})})},t.load=function(e){var n;return n=i.readFileSync(e),new t(n)},t.prototype.read=function(t){var e,n,r;for(r=[],e=n=0;t>=0?t>n:n>t;e=t>=0?++n:--n)r.push(this.data[this.pos++]);return r},t.prototype.readUInt32=function(){var t,e,n,r;return t=this.data[this.pos++]<<24,e=this.data[this.pos++]<<16,n=this.data[this.pos++]<<8,r=this.data[this.pos++],t|e|n|r},t.prototype.readUInt16=function(){var t,e;return t=this.data[this.pos++]<<8,e=this.data[this.pos++],t|e},t.prototype.decodePixels=function(t){var n=this;return o.inflate(this.imgData,function(r,i){var o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I;if(r)throw r;for(v=n.pixelBitlength/8,_=v*n.width,m=new e(_*n.height),l=i.length,w=0,y=0,a=0;l>y;){switch(i[y++]){case 0:for(h=S=0;_>S;h=S+=1)m[a++]=i[y++];break;case 1:for(h=k=0;_>k;h=k+=1)o=i[y++],u=v>h?0:m[a-v],m[a++]=(o+u)%256;break;case 2:for(h=E=0;_>E;h=E+=1)o=i[y++],s=(h-h%v)/v,b=w&&m[(w-1)*_+s*v+h%v],m[a++]=(b+o)%256;break;case 3:for(h=C=0;_>C;h=C+=1)o=i[y++],s=(h-h%v)/v,u=v>h?0:m[a-v],b=w&&m[(w-1)*_+s*v+h%v],m[a++]=(o+Math.floor((u+b)/2))%256;break;case 4:for(h=I=0;_>I;h=I+=1)o=i[y++],s=(h-h%v)/v,u=v>h?0:m[a-v],0===w?b=x=0:(b=m[(w-1)*_+s*v+h%v],x=s&&m[(w-1)*_+(s-1)*v+h%v]),c=u+b-x,f=Math.abs(c-u),p=Math.abs(c-b),g=Math.abs(c-x),d=p>=f&&g>=f?u:g>=p?b:x,m[a++]=(o+d)%256;break;default:throw new Error("Invalid filter algorithm: "+i[y-1])}w++}return t(m)})},t.prototype.decodePalette=function(){var t,n,r,i,o,a,s,h,u,l;for(i=this.palette,s=this.transparency.indexed||[],a=new e(s.length+i.length),o=0,r=i.length,t=0,n=h=0,u=i.length;u>h;n=h+=3)a[o++]=i[n],a[o++]=i[n+1],a[o++]=i[n+2],a[o++]=null!=(l=s[t++])?l:255;return a},t.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,h,u,l,c,f;if(r=this.colors,l=null,n=this.hasAlphaChannel,this.palette.length&&(l=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),i=(null!=t?t.data:void 0)||t,u=i.length,a=l||e,o=s=0,1===r)for(;u>o;)h=l?4*e[o/4]:s,c=a[h++],i[o++]=c,i[o++]=c,i[o++]=c,i[o++]=n?a[h++]:255,s=h;else for(;u>o;)h=l?4*e[o/4]:s,i[o++]=a[h++],i[o++]=a[h++],i[o++]=a[h++],i[o++]=n?a[h++]:255,s=h},t.prototype.decode=function(t){var n,r=this;return n=new e(this.width*this.height*4),this.decodePixels(function(e){return r.copyToImageData(n,e),t(n)})},t}()}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){(function(e,r){(function(){var i,o,a,s,h;s=n(64),i=n(63),a=n(65),h=n(10),o=function(){function t(t,r,o,h){if(this.document=t,this.id=h,"string"==typeof r){if(r in n)return this.isAFM=!0,this.font=new i(n[r]()),void this.registerAFM(r);if(/\.(ttf|ttc)$/i.test(r))this.font=s.open(r,o);else{if(!/\.dfont$/i.test(r))throw new Error("Not a supported font format or standard PDF font.");this.font=s.fromDFont(r,o)}}else if(e.isBuffer(r))this.font=s.fromBuffer(r,o);else if(r instanceof Uint8Array)this.font=s.fromBuffer(new e(r),o);else{if(!(r instanceof ArrayBuffer))throw new Error("Not a supported font format or standard PDF font.");this.font=s.fromBuffer(new e(new Uint8Array(r)),o)}this.subset=new a(this.font),this.registerTTF()}var n,o;return n={Courier:function(){return h.readFileSync(r+"/font/data/Courier.afm","utf8")},"Courier-Bold":function(){return h.readFileSync(r+"/font/data/Courier-Bold.afm","utf8")},"Courier-Oblique":function(){return h.readFileSync(r+"/font/data/Courier-Oblique.afm","utf8")},"Courier-BoldOblique":function(){return h.readFileSync(r+"/font/data/Courier-BoldOblique.afm","utf8")},Helvetica:function(){return h.readFileSync(r+"/font/data/Helvetica.afm","utf8")},"Helvetica-Bold":function(){return h.readFileSync(r+"/font/data/Helvetica-Bold.afm","utf8")},"Helvetica-Oblique":function(){return h.readFileSync(r+"/font/data/Helvetica-Oblique.afm","utf8")},"Helvetica-BoldOblique":function(){return h.readFileSync(r+"/font/data/Helvetica-BoldOblique.afm","utf8")},"Times-Roman":function(){return h.readFileSync(r+"/font/data/Times-Roman.afm","utf8")},"Times-Bold":function(){return h.readFileSync(r+"/font/data/Times-Bold.afm","utf8")},"Times-Italic":function(){return h.readFileSync(r+"/font/data/Times-Italic.afm","utf8")},"Times-BoldItalic":function(){return h.readFileSync(r+"/font/data/Times-BoldItalic.afm","utf8")},Symbol:function(){return h.readFileSync(r+"/font/data/Symbol.afm","utf8")},ZapfDingbats:function(){return h.readFileSync(r+"/font/data/ZapfDingbats.afm","utf8")}},t.prototype.use=function(t){var e;return null!=(e=this.subset)?e.use(t):void 0},t.prototype.embed=function(){return this.embedded||null==this.dictionary?void 0:(this.isAFM?this.embedAFM():this.embedTTF(),this.embedded=!0)},t.prototype.encode=function(t){var e;return this.isAFM?this.font.encodeText(t):(null!=(e=this.subset)?e.encodeText(t):void 0)||t},t.prototype.ref=function(){return null!=this.dictionary?this.dictionary:this.dictionary=this.document.ref()},t.prototype.registerTTF=function(){var t,e,n,r,i;if(this.name=this.font.name.postscriptName,this.scaleFactor=1e3/this.font.head.unitsPerEm,this.bbox=function(){var e,n,r,i;for(r=this.font.bbox,i=[],e=0,n=r.length;n>e;e++)t=r[e],i.push(Math.round(t*this.scaleFactor));return i}.call(this),this.stemV=0,this.font.post.exists?(r=this.font.post.italic_angle,e=r>>16,n=255&r,e&!0&&(e=-((65535^e)+1)),this.italicAngle=+(""+e+"."+n)):this.italicAngle=0,this.ascender=Math.round(this.font.ascender*this.scaleFactor),this.decender=Math.round(this.font.decender*this.scaleFactor),this.lineGap=Math.round(this.font.lineGap*this.scaleFactor),this.capHeight=this.font.os2.exists&&this.font.os2.capHeight||this.ascender,this.xHeight=this.font.os2.exists&&this.font.os2.xHeight||0,this.familyClass=(this.font.os2.exists&&this.font.os2.familyClass||0)>>8,this.isSerif=1===(i=this.familyClass)||2===i||3===i||4===i||5===i||7===i,this.isScript=10===this.familyClass,this.flags=0,this.font.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.font.cmap.unicode)throw new Error("No unicode cmap for font")},t.prototype.embedTTF=function(){var t,e,n,r,i,a,s,h;return r=this.subset.encode(),s=this.document.ref(),s.write(r),s.data.Length1=s.uncompressedLength,s.end(),i=this.document.ref({Type:"FontDescriptor",FontName:this.subset.postscriptName,FontFile2:s,FontBBox:this.bbox,Flags:this.flags,StemV:this.stemV,ItalicAngle:this.italicAngle,Ascent:this.ascender,Descent:this.decender,CapHeight:this.capHeight,XHeight:this.xHeight}),i.end(),a=+Object.keys(this.subset.cmap)[0],t=function(){var t,e;t=this.subset.cmap,e=[];for(n in t)h=t[n],e.push(Math.round(this.font.widthOfGlyph(h)));return e}.call(this),e=this.document.ref(),e.end(o(this.subset.subset)),this.dictionary.data={Type:"Font",BaseFont:this.subset.postscriptName,Subtype:"TrueType",FontDescriptor:i,FirstChar:a,LastChar:a+t.length-1,Widths:t,Encoding:"MacRomanEncoding",ToUnicode:e},this.dictionary.end()},o=function(t){var e,n,r,i,o,a,s;for(o="/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<00><ff>\nendcodespacerange",n=Object.keys(t).sort(function(t,e){return t-e}),r=[],a=0,s=n.length;s>a;a++)e=n[a],r.length>=100&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar",r=[]),i=("0000"+t[e].toString(16)).slice(-4),e=(+e).toString(16),r.push("<"+e+"><"+i+">");return r.length&&(o+="\n"+r.length+" beginbfchar\n"+r.join("\n")+"\nendbfchar\n"),o+="endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"},t.prototype.registerAFM=function(t){var e;return this.name=t,e=this.font,this.ascender=e.ascender,this.decender=e.decender,this.bbox=e.bbox,this.lineGap=e.lineGap,e},t.prototype.embedAFM=function(){return this.dictionary.data={Type:"Font",BaseFont:this.name,Subtype:"Type1",Encoding:"WinAnsiEncoding"},this.dictionary.end()},t.prototype.widthOfString=function(t,e){var n,r,i,o,a,s;for(t=""+t,o=0,r=a=0,s=t.length;s>=0?s>a:a>s;r=s>=0?++a:--a)n=t.charCodeAt(r),o+=this.font.widthOfGlyph(this.font.characterToGlyph(n))||0;return i=e/1e3,o*i},t.prototype.lineHeight=function(t,e){var n;return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},t}(),t.exports=o}).call(this)}).call(e,n(4).Buffer,"/")},function(t,e,n){function r(t,e){return d.isUndefined(e)?""+e:d.isNumber(e)&&!isFinite(e)?e.toString():d.isFunction(e)||d.isRegExp(e)?e.toString():e}function i(t,e){return d.isString(t)?t.length<e?t:t.slice(0,e):t}function o(t){return i(JSON.stringify(t.actual,r),128)+" "+t.operator+" "+i(JSON.stringify(t.expected,r),128)}function a(t,e,n,r,i){throw new v.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}function s(t,e){t||a(t,!0,e,"==",v.ok)}function h(t,e){if(t===e)return!0;if(d.isBuffer(t)&&d.isBuffer(e)){if(t.length!=e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}return d.isDate(t)&&d.isDate(e)?t.getTime()===e.getTime():d.isRegExp(t)&&d.isRegExp(e)?t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase:d.isObject(t)||d.isObject(e)?l(t,e):t==e}function u(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function l(t,e){if(d.isNullOrUndefined(t)||d.isNullOrUndefined(e))return!1;if(t.prototype!==e.prototype)return!1;if(d.isPrimitive(t)||d.isPrimitive(e))return t===e;var n=u(t),r=u(e);if(n&&!r||!n&&r)return!1;if(n)return t=p.call(t),e=p.call(e),h(t,e);var i,o,a=m(t),s=m(e);if(a.length!=s.length)return!1;for(a.sort(),s.sort(),o=a.length-1;o>=0;o--)if(a[o]!=s[o])return!1;for(o=a.length-1;o>=0;o--)if(i=a[o],!h(t[i],e[i]))return!1;return!0}function c(t,e){return t&&e?"[object RegExp]"==Object.prototype.toString.call(e)?e.test(t):t instanceof e?!0:e.call({},t)===!0?!0:!1:!1}function f(t,e,n,r){var i;d.isString(n)&&(r=n,n=null);try{e()}catch(o){i=o}if(r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&a(i,n,"Missing expected exception"+r),!t&&c(i,n)&&a(i,n,"Got unwanted exception"+r),t&&i&&n&&!c(i,n)||!t&&i)throw i}var d=n(60),p=Array.prototype.slice,g=Object.prototype.hasOwnProperty,v=t.exports=s;v.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=o(this),this.generatedMessage=!0);var e=t.stackStartFunction||a;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,i=e.name,s=r.indexOf("\n"+i);if(s>=0){var h=r.indexOf("\n",s+1);r=r.substring(h+1)}this.stack=r}}},d.inherits(v.AssertionError,Error),v.fail=a,v.ok=s,v.equal=function(t,e,n){t!=e&&a(t,e,n,"==",v.equal)},v.notEqual=function(t,e,n){t==e&&a(t,e,n,"!=",v.notEqual)},v.deepEqual=function(t,e,n){h(t,e)||a(t,e,n,"deepEqual",v.deepEqual)},v.notDeepEqual=function(t,e,n){h(t,e)&&a(t,e,n,"notDeepEqual",v.notDeepEqual)},v.strictEqual=function(t,e,n){t!==e&&a(t,e,n,"===",v.strictEqual)},v.notStrictEqual=function(t,e,n){t===e&&a(t,e,n,"!==",v.notStrictEqual)},v["throws"]=function(t,e,n){f.apply(this,[!0].concat(p.call(arguments)))},v.doesNotThrow=function(t,e){f.apply(this,[!1].concat(p.call(arguments)))},v.ifError=function(t){if(t)throw t};var m=Object.keys||function(t){var e=[];for(var n in t)g.call(t,n)&&e.push(n);return e}},function(t,e,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function o(t){return"number"==typeof t}function a(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!o(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,n,r,o,h,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||a(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[t],s(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),h=1;r>h;h++)o[h-1]=arguments[h];n.apply(this,o)}else if(a(n)){for(r=arguments.length,o=new Array(r-1),h=1;r>h;h++)o[h-1]=arguments[h];for(u=n.slice(),r=u.length,h=0;r>h;h++)u[h].apply(this,o)}return!0},r.prototype.addListener=function(t,e){var n;if(!i(e))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?a(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,a(this._events[t])&&!this._events[t].warned){var n;n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,"function"==typeof console.trace)}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function n(){this.removeListener(t,n),r||(r=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var r=!1;return n.listener=e,this.on(t,n),this},r.prototype.removeListener=function(t,e){var n,r,o,s;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,r=-1,n===e||i(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(a(n)){for(s=o;s-->0;)if(n[s]===e||n[s].listener&&n[s].listener===e){r=s;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],i(n))this.removeListener(t,n);else for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.listenerCount=function(t,e){var n;return n=t._events&&t._events[e]?i(t._events[e])?1:t._events[e].length:0}},function(t,e,n){t.exports=n(70)},function(t,e,n){e=t.exports=n(71),e.Stream=n(46),e.Readable=e,e.Writable=n(67),e.Duplex=n(69),e.Transform=n(70),e.PassThrough=n(68)},function(t,e,n){t.exports=n(67)},function(t,e,n){t.exports=n(69)},function(t,e,n){t.exports=n(68)},function(t,e,n){(function(t,r){function i(t,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),h(r,t,r.depth)}function o(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function a(t,e){return t}function s(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function h(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return w(i)||(i=h(t,i,r)),i}var o=u(t,n);if(o)return o;var a=Object.keys(n),g=s(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return l(n);if(0===a.length){if(C(n)){var v=n.name?": "+n.name:"";return t.stylize("[Function"+v+"]","special")}if(x(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return t.stylize(Date.prototype.toString.call(n),"date");if(E(n))return l(n)}var m="",y=!1,_=["{","}"];if(p(n)&&(y=!0,_=["[","]"]),C(n)){var b=n.name?": "+n.name:"";m=" [Function"+b+"]"}if(x(n)&&(m=" "+RegExp.prototype.toString.call(n)),k(n)&&(m=" "+Date.prototype.toUTCString.call(n)),E(n)&&(m=" "+l(n)),0===a.length&&(!y||0==n.length))return _[0]+m+_[1];if(0>r)return x(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var S;return S=y?c(t,n,r,g,a):a.map(function(e){return f(t,n,r,g,e,y)}),t.seen.pop(),d(S,m,_)}function u(t,e){if(b(e))return t.stylize("undefined","undefined");if(w(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return y(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function l(t){return"["+Error.prototype.toString.call(t)+"]"}function c(t,e,n,r,i){for(var o=[],a=0,s=e.length;s>a;++a)o.push(L(e,String(a))?f(t,e,n,r,String(a),!0):"");return i.forEach(function(i){i.match(/^\d+$/)||o.push(f(t,e,n,r,i,!0))}),o}function f(t,e,n,r,i,o){var a,s,u;if(u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},u.get?s=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(s=t.stylize("[Setter]","special")),L(r,i)||(a="["+i+"]"),s||(t.seen.indexOf(u.value)<0?(s=v(n)?h(t,u.value,null):h(t,u.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),b(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function d(t,e,n){var r=0,i=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function p(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function v(t){return null===t}function m(t){return null==t}function y(t){return"number"==typeof t}function w(t){return"string"==typeof t}function _(t){return"symbol"==typeof t}function b(t){return void 0===t}function x(t){return S(t)&&"[object RegExp]"===A(t)}function S(t){return"object"==typeof t&&null!==t}function k(t){return S(t)&&"[object Date]"===A(t)}function E(t){return S(t)&&("[object Error]"===A(t)||t instanceof Error)}function C(t){return"function"==typeof t}function I(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function A(t){return Object.prototype.toString.call(t)}function L(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var R=/%[sdj%]/g;e.format=function(t){if(!w(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,a=String(t).replace(R,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),s=r[n];o>n;s=r[++n])a+=v(s)||!S(s)?" "+s:" "+i(s);return a},e.deprecate=function(n,i){function o(){if(!a){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation,a=!0}return n.apply(this,arguments)}if(b(t.process))return function(){return e.deprecate(n,i).apply(this,arguments);

};if(r.noDeprecation===!0)return n;var a=!1;return o};var B,T={};e.debuglog=function(t){if(b(B)&&(B=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!T[t])if(new RegExp("\\b"+t+"\\b","i").test(B)){{r.pid}T[t]=function(){e.format.apply(e,arguments)}}else T[t]=function(){};return T[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=p,e.isBoolean=g,e.isNull=v,e.isNullOrUndefined=m,e.isNumber=y,e.isString=w,e.isSymbol=_,e.isUndefined=b,e.isRegExp=x,e.isObject=S,e.isDate=k,e.isError=E,e.isFunction=C,e.isPrimitive=I,e.isBuffer=n(72);e.log=function(){},e.inherits=n(94),e._extend=function(t,e){if(!e||!S(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,function(){return this}(),n(61))},function(t,e,n){function r(){if(!s){s=!0;for(var t,e=a.length;e;){t=a,a=[];for(var n=-1;++n<e;)t[n]();e=a.length}s=!1}}function i(){}var o=t.exports={},a=[],s=!1;o.nextTick=function(t){a.push(t),s||setTimeout(r,0)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=i,o.addListener=i,o.once=i,o.off=i,o.removeListener=i,o.removeAllListeners=i,o.emit=i,o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){t.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){(function(){var e,r;r=n(10),e=function(){function t(t){var e,r;this.contents=t,this.attributes={},this.glyphWidths={},this.boundingBoxes={},this.parse(),this.charWidths=function(){var t,e;for(e=[],r=t=0;255>=t;r=++t)e.push(this.glyphWidths[n[r]]);return e}.call(this),this.bbox=function(){var t,n,r,i;for(r=this.attributes.FontBBox.split(/\s+/),i=[],t=0,n=r.length;n>t;t++)e=r[t],i.push(+e);return i}.call(this),this.ascender=+(this.attributes.Ascender||0),this.decender=+(this.attributes.Descender||0),this.lineGap=this.bbox[3]-this.bbox[1]-(this.ascender-this.decender)}var e,n;return t.open=function(e){return new t(r.readFileSync(e,"utf8"))},t.prototype.parse=function(){var t,e,n,r,i,o,a,s,h,u;for(o="",u=this.contents.split("\n"),s=0,h=u.length;h>s;s++)if(n=u[s],r=n.match(/^Start(\w+)/))o=r[1];else if(r=n.match(/^End(\w+)/))o="";else switch(o){case"FontMetrics":r=n.match(/(^\w+)\s+(.*)/),e=r[1],a=r[2],(t=this.attributes[e])?(Array.isArray(t)||(t=this.attributes[e]=[t]),t.push(a)):this.attributes[e]=a;break;case"CharMetrics":if(!/^CH?\s/.test(n))continue;i=n.match(/\bN\s+(\.?\w+)\s*;/)[1],this.glyphWidths[i]=+n.match(/\bWX\s+(\d+)\s*;/)[1]}},e={402:131,8211:150,8212:151,8216:145,8217:146,8218:130,8220:147,8221:148,8222:132,8224:134,8225:135,8226:149,8230:133,8364:128,8240:137,8249:139,8250:155,710:136,8482:153,338:140,339:156,732:152,352:138,353:154,376:159,381:142,382:158},t.prototype.encodeText=function(t){var n,r,i,o,a;for(i="",r=o=0,a=t.length;a>=0?a>o:o>a;r=a>=0?++o:--o)n=t.charCodeAt(r),n=e[n]||n,i+=String.fromCharCode(n);return i},t.prototype.characterToGlyph=function(t){return n[e[t]||t]},t.prototype.widthOfGlyph=function(t){return this.glyphWidths[t]},n=".notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis".split(/\s+/),t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var CmapTable,e,r,i,GlyfTable,HeadTable,HheaTable,HmtxTable,LocaTable,MaxpTable,NameTable,OS2Table,PostTable,o,a;a=n(10),r=n(34),e=n(78),i=n(79),NameTable=n(80),HeadTable=n(81),CmapTable=n(82),HmtxTable=n(83),HheaTable=n(84),MaxpTable=n(85),PostTable=n(86),OS2Table=n(87),LocaTable=n(88),GlyfTable=n(90),o=function(){function t(t,e){var n,i,o,a,s,h,u,l,c;if(this.rawData=t,n=this.contents=new r(this.rawData),"ttcf"===n.readString(4)){if(!e)throw new Error("Must specify a font name for TTC files.");for(h=n.readInt(),o=n.readInt(),s=[],i=u=0;o>=0?o>u:u>o;i=o>=0?++u:--u)s[i]=n.readInt();for(i=l=0,c=s.length;c>l;i=++l)if(a=s[i],n.pos=a,this.parse(),this.name.postscriptName===e)return;throw new Error("Font "+e+" not found in TTC file.")}n.pos=0,this.parse()}return t.open=function(e,n){var r;return r=a.readFileSync(e),new t(r,n)},t.fromDFont=function(n,r){var i;return i=e.open(n),new t(i.getNamedFont(r))},t.fromBuffer=function(n,r){var i,o,a;try{if(a=new t(n,r),!(a.head.exists&&a.name.exists&&a.cmap.exists||(i=new e(n),a=new t(i.getNamedFont(r)),a.head.exists&&a.name.exists&&a.cmap.exists)))throw new Error("Invalid TTF file in DFont");return a}catch(s){throw o=s,new Error("Unknown font format in buffer: "+o.message)}},t.prototype.parse=function(){return this.directory=new i(this.contents),this.head=new HeadTable(this),this.name=new NameTable(this),this.cmap=new CmapTable(this),this.hhea=new HheaTable(this),this.maxp=new MaxpTable(this),this.hmtx=new HmtxTable(this),this.post=new PostTable(this),this.os2=new OS2Table(this),this.loca=new LocaTable(this),this.glyf=new GlyfTable(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},t.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},t.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},t}(),t.exports=o}).call(this)},function(t,e,n){(function(){var CmapTable,e,r,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};CmapTable=n(82),r=n(89),e=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.use=function(t){var e,n,r;{if("string"!=typeof t)return this.unicodes[t]?void 0:(this.subset[this.next]=t,this.unicodes[t]=this.next++);for(e=n=0,r=t.length;r>=0?r>n:n>r;e=r>=0?++n:--n)this.use(t.charCodeAt(e))}},t.prototype.encodeText=function(t){var e,n,r,i,o;for(r="",n=i=0,o=t.length;o>=0?o>i:i>o;n=o>=0?++i:--i)e=this.unicodes[t.charCodeAt(n)],r+=String.fromCharCode(e);return r},t.prototype.generateCmap=function(){var t,e,n,r,i;r=this.font.cmap.tables[0].codeMap,t={},i=this.subset;for(e in i)n=i[e],t[e]=r[n];return t},t.prototype.glyphIDs=function(){var t,e,n,r,o,a;r=this.font.cmap.tables[0].codeMap,t=[0],a=this.subset;for(e in a)n=a[e],o=r[n],null!=o&&i.call(t,o)<0&&t.push(o);return t.sort()},t.prototype.glyphsFor=function(t){var e,n,r,i,o,a,s;for(r={},o=0,a=t.length;a>o;o++)i=t[o],r[i]=this.font.glyf.glyphFor(i);e=[];for(i in r)n=r[i],(null!=n?n.compound:void 0)&&e.push.apply(e,n.glyphIDs);if(e.length>0){s=this.glyphsFor(e);for(i in s)n=s[i],r[i]=n}return r},t.prototype.encode=function(){var t,e,n,i,o,a,s,h,u,l,c,f,d,p,g,v,m;t=CmapTable.encode(this.generateCmap(),"unicode"),i=this.glyphsFor(this.glyphIDs()),f={0:0},v=t.charMap;for(e in v)a=v[e],f[a.old]=a["new"];c=t.maxGlyphID;for(d in i)d in f||(f[d]=c++);u=r.invert(f),l=Object.keys(u).sort(function(t,e){return t-e}),p=function(){var t,e,n;for(n=[],t=0,e=l.length;e>t;t++)o=l[t],n.push(u[o]);return n}(),n=this.font.glyf.encode(i,p,f),s=this.font.loca.encode(n.offsets),h=this.font.name.encode(),this.postscriptName=h.postscriptName,this.cmap={},m=t.charMap;for(e in m)a=m[e],this.cmap[e]=a.old;return g={cmap:t.table,glyf:n.table,loca:s.table,hmtx:this.font.hmtx.encode(p),hhea:this.font.hhea.encode(p),maxp:this.font.maxp.encode(p),post:this.font.post.encode(p),name:h.table,head:this.font.head.encode(s)},this.font.os2.exists&&(g["OS/2"]=this.font.os2.raw()),this.font.directory.encode(g)},t}(),t.exports=e}).call(this)},function(t,e,n){(function(){var e,r,i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L;x=n(100),C=new x(n(106)),A=n(92),o=A.BK,l=A.CR,p=A.LF,v=A.NL,a=A.CB,i=A.BA,b=A.SP,S=A.WJ,b=A.SP,o=A.BK,p=A.LF,v=A.NL,e=A.AI,r=A.AL,w=A.SA,_=A.SG,k=A.XX,h=A.CJ,f=A.ID,m=A.NS,E=A.characterClasses,L=n(91),c=L.DI_BRK,d=L.IN_BRK,s=L.CI_BRK,u=L.CP_BRK,y=L.PR_BRK,I=L.pairTable,g=function(){function t(t){this.string=t,this.pos=0,this.lastPos=0,this.curClass=null,this.nextClass=null}var n,f,g;return t.prototype.nextCodePoint=function(){var t,e;return t=this.string.charCodeAt(this.pos++),e=this.string.charCodeAt(this.pos),t>=55296&&56319>=t&&e>=56320&&57343>=e?(this.pos++,1024*(t-55296)+(e-56320)+65536):t},f=function(t){switch(t){case e:return r;case w:case _:case k:return r;case h:return m;default:return t}},g=function(t){switch(t){case p:case v:return o;case a:return i;case b:return S;default:return t}},t.prototype.nextCharClass=function(t){return null==t&&(t=!1),f(C.get(this.nextCodePoint()))},n=function(){function t(t,e){this.position=t,this.required=null!=e?e:!1}return t}(),t.prototype.nextBreak=function(){var t,e,r;for(null==this.curClass&&(this.curClass=g(this.nextCharClass()));this.pos<this.string.length;){if(this.lastPos=this.pos,e=this.nextClass,this.nextClass=this.nextCharClass(),this.curClass===o||this.curClass===l&&this.nextClass!==p)return this.curClass=g(f(this.nextClass)),new n(this.lastPos,!0);if(t=function(){switch(this.nextClass){case b:return this.curClass;case o:case p:case v:return o;case l:return l;case a:return i}}.call(this),null==t){switch(r=!1,I[this.curClass][this.nextClass]){case c:r=!0;break;case d:r=e===b;break;case s:if(r=e===b,!r)continue;break;case u:if(e!==b)continue}if(this.curClass=this.nextClass,r)return new n(this.lastPos)}else if(this.curClass=t,this.nextClass===a)return new n(this.lastPos)}return this.pos>=this.string.length?this.lastPos<this.string.length?(this.lastPos=this.string.length,new n(this.string.length)):null:void 0},t}(),t.exports=g}).call(this)},function(t,e,n){(function(e){function r(t,e,n){this.chunk=t,this.encoding=e,this.callback=n}function i(t,e){var r=n(69);t=t||{};var i=t.highWaterMark,o=t.objectMode?16:16384;this.highWaterMark=i||0===i?i:o,this.objectMode=!!t.objectMode,e instanceof r&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=t.decodeStrings===!1;this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){d(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1}function o(t){var e=n(69);return this instanceof o||this instanceof e?(this._writableState=new i(t,this),this.writable=!0,void S.call(this)):new o(t)}function a(t,n,r){var i=new Error("write after end");t.emit("error",i),e.nextTick(function(){r(i)})}function s(t,n,r,i){var o=!0;if(!(x.isBuffer(r)||x.isString(r)||x.isNullOrUndefined(r)||n.objectMode)){var a=new TypeError("Invalid non-string/buffer chunk");t.emit("error",a),e.nextTick(function(){i(a)}),o=!1}return o}function h(t,e,n){return!t.objectMode&&t.decodeStrings!==!1&&x.isString(e)&&(e=new b(e,n)),e}function u(t,e,n,i,o){n=h(e,n,i),x.isBuffer(n)&&(i="buffer");var a=e.objectMode?1:n.length;e.length+=a;var s=e.length<e.highWaterMark;return s||(e.needDrain=!0),e.writing||e.corked?e.buffer.push(new r(n,i,o)):l(t,e,!1,a,n,i,o),s}function l(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function c(t,n,r,i,o){r?e.nextTick(function(){n.pendingcb--,o(i)}):(n.pendingcb--,o(i)),t._writableState.errorEmitted=!0,t.emit("error",i)}function f(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function d(t,n){var r=t._writableState,i=r.sync,o=r.writecb;if(f(r),n)c(t,r,i,n,o);else{var a=m(t,r);a||r.corked||r.bufferProcessing||!r.buffer.length||v(t,r),i?e.nextTick(function(){p(t,r,a,o)}):p(t,r,a,o)}}function p(t,e,n,r){n||g(t,e),e.pendingcb--,r(),w(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function v(t,e){if(e.bufferProcessing=!0,t._writev&&e.buffer.length>1){for(var n=[],r=0;r<e.buffer.length;r++)n.push(e.buffer[r].callback);e.pendingcb++,l(t,e,!0,e.length,e.buffer,"",function(t){for(var r=0;r<n.length;r++)e.pendingcb--,n[r](t)}),e.buffer=[]}else{for(var r=0;r<e.buffer.length;r++){var i=e.buffer[r],o=i.chunk,a=i.encoding,s=i.callback,h=e.objectMode?1:o.length;if(l(t,e,!1,h,o,a,s),e.writing){r++;break}}r<e.buffer.length?e.buffer=e.buffer.slice(r):e.buffer.length=0}e.bufferProcessing=!1}function m(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function y(t,e){e.prefinished||(e.prefinished=!0,t.emit("prefinish"))}function w(t,e){var n=m(t,e);return n&&(0===e.pendingcb?(y(t,e),e.finished=!0,t.emit("finish")):y(t,e)),n}function _(t,n,r){n.ending=!0,w(t,n),r&&(n.finished?e.nextTick(r):t.once("finish",r)),n.ended=!0}t.exports=o;var b=n(4).Buffer;o.WritableState=i;var x=n(105);x.inherits=n(104);var S=n(46);x.inherits(o,S),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,n){var r=this._writableState,i=!1;return x.isFunction(e)&&(n=e,e=null),x.isBuffer(t)?e="buffer":e||(e=r.defaultEncoding),x.isFunction(n)||(n=function(){}),r.ended?a(this,r,n):s(this,r,t,n)&&(r.pendingcb++,i=u(this,r,t,e,n)),i},o.prototype.cork=function(){var t=this._writableState;t.corked++},o.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.buffer.length||v(this,t))},o.prototype._write=function(t,e,n){n(new Error("not implemented"))},o.prototype._writev=null,o.prototype.end=function(t,e,n){var r=this._writableState;x.isFunction(t)?(n=t,t=null,e=null):x.isFunction(e)&&(n=e,e=null),x.isNullOrUndefined(t)||this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||_(this,r,n)}}).call(e,n(61))},function(t,e,n){function r(t){return this instanceof r?void i.call(this,t):new r(t)}t.exports=r;var i=n(70),o=n(105);o.inherits=n(104),o.inherits(r,i),r.prototype._transform=function(t,e,n){n(null,t)}},function(t,e,n){(function(e){function r(t){return this instanceof r?(h.call(this,t),u.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new r(t)}function i(){this.allowHalfOpen||this._writableState.ended||e.nextTick(this.end.bind(this))}function o(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}t.exports=r;var a=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e},s=n(105);s.inherits=n(104);var h=n(71),u=n(67);s.inherits(r,h),o(a(u.prototype),function(t){r.prototype[t]||(r.prototype[t]=u.prototype[t])})}).call(e,n(61))},function(t,e,n){function r(t,e){this.afterTransform=function(t,n){return i(e,t,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function i(t,e,n){var r=t._transformState;r.transforming=!1;var i=r.writecb;if(!i)return t.emit("error",new Error("no writecb in Transform class"));r.writechunk=null,r.writecb=null,h.isNullOrUndefined(n)||t.push(n),i&&i(e);var o=t._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function o(t){if(!(this instanceof o))return new o(t);s.call(this,t),this._transformState=new r(t,this);var e=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("prefinish",function(){h.isFunction(this._flush)?this._flush(function(t){a(e,t)}):a(e)})}function a(t,e){if(e)return t.emit("error",e);var n=t._writableState,r=t._transformState;if(n.length)throw new Error("calling transform done when ws.length != 0");if(r.transforming)throw new Error("calling transform done when still transforming");return t.push(null)}t.exports=o;var s=n(69),h=n(105);h.inherits=n(104),h.inherits(o,s),o.prototype.push=function(t,e){return this._transformState.needTransform=!1,s.prototype.push.call(this,t,e)},o.prototype._transform=function(t,e,n){throw new Error("not implemented")},o.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(t){var e=this._transformState;h.isNull(e.writechunk)||!e.writecb||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))}},function(t,e,n){(function(e){function r(t,e){var r=n(69);t=t||{};var i=t.highWaterMark,o=t.objectMode?16:16384;this.highWaterMark=i||0===i?i:o,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,e instanceof r&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(A||(A=n(101).StringDecoder),this.decoder=new A(t.encoding),this.encoding=t.encoding)}function i(t){n(69);return this instanceof i?(this._readableState=new r(t,this),this.readable=!0,void C.call(this)):new i(t)}function o(t,e,n,r,i){var o=u(e,n);if(o)t.emit("error",o);else if(I.isNullOrUndefined(n))e.reading=!1,e.ended||l(t,e);else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var s=new Error("stream.push() after EOF");t.emit("error",s)}else if(e.endEmitted&&i){var s=new Error("stream.unshift() after end event");t.emit("error",s)}else!e.decoder||i||r||(n=e.decoder.write(n)),i||(e.reading=!1),e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&c(t)),d(t,e);else i||(e.reading=!1);return a(e)}function a(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function s(t){if(t>=R)t=R;else{t--;for(var e=1;32>e;e<<=1)t|=t>>e;t++}return t}function h(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:isNaN(t)||I.isNull(t)?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=s(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function u(t,e){var n=null;return I.isBuffer(e)||I.isString(e)||I.isNullOrUndefined(e)||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function l(t,e){if(e.decoder&&!e.ended){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,c(t)}function c(t){var n=t._readableState;n.needReadable=!1,n.emittedReadable||(L("emitReadable",n.flowing),n.emittedReadable=!0,n.sync?e.nextTick(function(){f(t)}):f(t))}function f(t){L("emit readable"),t.emit("readable"),y(t)}function d(t,n){n.readingMore||(n.readingMore=!0,e.nextTick(function(){p(t,n)}))}function p(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(L("maybeReadMore read 0"),t.read(0),n!==e.length);)n=e.length;e.readingMore=!1}function g(t){return function(){var e=t._readableState;L("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&E.listenerCount(t,"data")&&(e.flowing=!0,y(t))}}function v(t,n){n.resumeScheduled||(n.resumeScheduled=!0,e.nextTick(function(){m(t,n)}))}function m(t,e){e.resumeScheduled=!1,t.emit("resume"),y(t),e.flowing&&!e.reading&&t.read(0)}function y(t){var e=t._readableState;if(L("flow",e.flowing),e.flowing)do var n=t.read();while(null!==n&&e.flowing)}function w(t,e){var n,r=e.buffer,i=e.length,o=!!e.decoder,a=!!e.objectMode;if(0===r.length)return null;if(0===i)n=null;else if(a)n=r.shift();else if(!t||t>=i)n=o?r.join(""):k.concat(r,i),r.length=0;else if(t<r[0].length){var s=r[0];n=s.slice(0,t),r[0]=s.slice(t)}else if(t===r[0].length)n=r.shift();else{n=o?"":new k(t);for(var h=0,u=0,l=r.length;l>u&&t>h;u++){var s=r[0],c=Math.min(t-h,s.length);o?n+=s.slice(0,c):s.copy(n,h,0,c),c<s.length?r[0]=s.slice(c):r.shift(),h+=c}}return n}function _(t){var n=t._readableState;if(n.length>0)throw new Error("endReadable called on non-empty stream");n.endEmitted||(n.ended=!0,e.nextTick(function(){n.endEmitted||0!==n.length||(n.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function b(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}function x(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}t.exports=i;var S=n(107),k=n(4).Buffer;i.ReadableState=r;var E=n(54).EventEmitter;E.listenerCount||(E.listenerCount=function(t,e){return t.listeners(e).length});var C=n(46),I=n(105);I.inherits=n(104);var A,L=n(93);L=L&&L.debuglog?L.debuglog("stream"):function(){},I.inherits(i,C),i.prototype.push=function(t,e){var n=this._readableState;return I.isString(t)&&!n.objectMode&&(e=e||n.defaultEncoding,e!==n.encoding&&(t=new k(t,e),e="")),o(this,n,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState;return o(this,e,t,"",!0)},i.prototype.setEncoding=function(t){return A||(A=n(101).StringDecoder),this._readableState.decoder=new A(t),this._readableState.encoding=t,this};var R=8388608;i.prototype.read=function(t){L("read",t);var e=this._readableState,n=t;if((!I.isNumber(t)||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return L("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?_(this):c(this),null;if(t=h(t,e),0===t&&e.ended)return 0===e.length&&_(this),null;var r=e.needReadable;L("need readable",r),(0===e.length||e.length-t<e.highWaterMark)&&(r=!0,L("length less than watermark",r)),(e.ended||e.reading)&&(r=!1,L("reading or ended",r)),r&&(L("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),r&&!e.reading&&(t=h(n,e));var i;return i=t>0?w(t,e):null,I.isNull(i)&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),n!==t&&e.ended&&0===e.length&&_(this),I.isNull(i)||this.emit("data",i),i},i.prototype._read=function(t){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(t,n){function r(t){L("onunpipe"),t===c&&o()}function i(){L("onend"),t.end()}function o(){L("cleanup"),t.removeListener("close",h),t.removeListener("finish",u),t.removeListener("drain",v),t.removeListener("error",s),t.removeListener("unpipe",r),c.removeListener("end",i),c.removeListener("end",o),c.removeListener("data",a),!f.awaitDrain||t._writableState&&!t._writableState.needDrain||v()}function a(e){L("ondata");var n=t.write(e);!1===n&&(L("false write response, pause",c._readableState.awaitDrain),c._readableState.awaitDrain++,c.pause())}function s(e){L("onerror",e),l(),t.removeListener("error",s),0===E.listenerCount(t,"error")&&t.emit("error",e)}function h(){t.removeListener("finish",u),l()}function u(){L("onfinish"),t.removeListener("close",h),l()}function l(){L("unpipe"),c.unpipe(t)}var c=this,f=this._readableState;switch(f.pipesCount){case 0:f.pipes=t;break;case 1:f.pipes=[f.pipes,t];break;default:f.pipes.push(t)}f.pipesCount+=1,L("pipe count=%d opts=%j",f.pipesCount,n);var d=(!n||n.end!==!1)&&t!==e.stdout&&t!==e.stderr,p=d?i:o;f.endEmitted?e.nextTick(p):c.once("end",p),t.on("unpipe",r);var v=g(c);return t.on("drain",v),c.on("data",a),t._events&&t._events.error?S(t._events.error)?t._events.error.unshift(s):t._events.error=[s,t._events.error]:t.on("error",s),t.once("close",h),t.once("finish",u),t.emit("pipe",c),f.flowing||(L("pipe resume"),c.resume()),t},i.prototype.unpipe=function(t){var e=this._readableState;if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this),this);if(!t){var n=e.pipes,r=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var i=0;r>i;i++)n[i].emit("unpipe",this);return this}var i=x(e.pipes,t);return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,n){var r=C.prototype.on.call(this,t,n);if("data"===t&&!1!==this._readableState.flowing&&this.resume(),"readable"===t&&this.readable){var i=this._readableState;if(!i.readableListening)if(i.readableListening=!0,i.emittedReadable=!1,i.needReadable=!0,i.reading)i.length&&c(this,i);else{var o=this;e.nextTick(function(){L("readable nexttick read 0"),o.read(0)})}}return r},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var t=this._readableState;return t.flowing||(L("resume"),t.flowing=!0,t.reading||(L("resume read 0"),this.read(0)),v(this,t)),this},i.prototype.pause=function(){return L("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(L("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this;t.on("end",function(){if(L("wrapped end"),e.decoder&&!e.ended){var t=e.decoder.end();t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){if(L("wrapped data"),e.decoder&&(i=e.decoder.write(i)),i&&(e.objectMode||i.length)){var o=r.push(i);o||(n=!0,t.pause())}});for(var i in t)I.isFunction(t[i])&&I.isUndefined(this[i])&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));var o=["error","close","destroy","pause","resume"];return b(o,function(e){t.on(e,r.emit.bind(r,e))}),r._read=function(e){L("wrapped _read",e),n&&(n=!1,t.resume())},r},i._fromList=w}).call(e,n(61))},function(t,e,n){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e,n){"use strict";t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},function(t,e,n){"use strict";function r(t,e){return t.msg=T[e],e}function i(t){return(t<<1)-(t>4?9:0)}function o(t){for(var e=t.length;--e>=0;)t[e]=0}function a(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(A.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function s(t,e){L._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,a(t.strm)}function h(t,e){t.pending_buf[t.pending++]=e}function u(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function l(t,e,n,r){var i=t.avail_in;return i>r&&(i=r),0===i?0:(t.avail_in-=i,A.arraySet(e,t.input,t.next_in,i,n),1===t.state.wrap?t.adler=R(t.adler,e,i,n):2===t.state.wrap&&(t.adler=B(t.adler,e,i,n)),t.next_in+=i,t.total_in+=i,i)}function c(t,e){var n,r,i=t.max_chain_length,o=t.strstart,a=t.prev_length,s=t.nice_match,h=t.strstart>t.w_size-ut?t.strstart-(t.w_size-ut):0,u=t.window,l=t.w_mask,c=t.prev,f=t.strstart+ht,d=u[o+a-1],p=u[o+a];t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);do if(n=e,u[n+a]===p&&u[n+a-1]===d&&u[n]===u[o]&&u[++n]===u[o+1]){o+=2,n++;do;while(u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&u[++o]===u[++n]&&f>o);if(r=ht-(f-o),o=f-ht,r>a){if(t.match_start=e,a=r,r>=s)break;d=u[o+a-1],p=u[o+a]}}while((e=c[e&l])>h&&0!==--i);return a<=t.lookahead?a:t.lookahead}function f(t){var e,n,r,i,o,a=t.w_size;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-ut)){A.arraySet(t.window,t.window,a,a,0),t.match_start-=a,t.strstart-=a,t.block_start-=a,n=t.hash_size,e=n;do r=t.head[--e],t.head[e]=r>=a?r-a:0;while(--n);n=a,e=n;do r=t.prev[--e],t.prev[e]=r>=a?r-a:0;while(--n);i+=a}if(0===t.strm.avail_in)break;if(n=l(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=n,t.lookahead+t.insert>=st)for(o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+st-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,!(t.lookahead+t.insert<st)););}while(t.lookahead<ut&&0!==t.strm.avail_in)}function d(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(f(t),0===t.lookahead&&e===M)return yt;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,
t.strstart=r,s(t,!1),0===t.strm.avail_out))return yt;if(t.strstart-t.block_start>=t.w_size-ut&&(s(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(s(t,!0),0===t.strm.avail_out?_t:bt):t.strstart>t.block_start&&(s(t,!1),0===t.strm.avail_out)?yt:yt}function p(t,e){for(var n,r;;){if(t.lookahead<ut){if(f(t),t.lookahead<ut&&e===M)return yt;if(0===t.lookahead)break}if(n=0,t.lookahead>=st&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-ut&&(t.match_length=c(t,n)),t.match_length>=st)if(r=L._tr_tally(t,t.strstart-t.match_start,t.match_length-st),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=st){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=L._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(s(t,!1),0===t.strm.avail_out))return yt}return t.insert=t.strstart<st-1?t.strstart:st-1,e===U?(s(t,!0),0===t.strm.avail_out?_t:bt):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?yt:wt}function g(t,e){for(var n,r,i;;){if(t.lookahead<ut){if(f(t),t.lookahead<ut&&e===M)return yt;if(0===t.lookahead)break}if(n=0,t.lookahead>=st&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=st-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-ut&&(t.match_length=c(t,n),t.match_length<=5&&(t.strategy===Z||t.match_length===st&&t.strstart-t.match_start>4096)&&(t.match_length=st-1)),t.prev_length>=st&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-st,r=L._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-st),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+st-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=st-1,t.strstart++,r&&(s(t,!1),0===t.strm.avail_out))return yt}else if(t.match_available){if(r=L._tr_tally(t,0,t.window[t.strstart-1]),r&&s(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return yt}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=L._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<st-1?t.strstart:st-1,e===U?(s(t,!0),0===t.strm.avail_out?_t:bt):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?yt:wt}function v(t,e){for(var n,r,i,o,a=t.window;;){if(t.lookahead<=ht){if(f(t),t.lookahead<=ht&&e===M)return yt;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=st&&t.strstart>0&&(i=t.strstart-1,r=a[i],r===a[++i]&&r===a[++i]&&r===a[++i])){o=t.strstart+ht;do;while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&o>i);t.match_length=ht-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=st?(n=L._tr_tally(t,1,t.match_length-st),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=L._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(s(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(s(t,!0),0===t.strm.avail_out?_t:bt):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?yt:wt}function m(t,e){for(var n;;){if(0===t.lookahead&&(f(t),0===t.lookahead)){if(e===M)return yt;break}if(t.match_length=0,n=L._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(s(t,!1),0===t.strm.avail_out))return yt}return t.insert=0,e===U?(s(t,!0),0===t.strm.avail_out?_t:bt):t.last_lit&&(s(t,!1),0===t.strm.avail_out)?yt:wt}function y(t){t.window_size=2*t.w_size,o(t.head),t.max_lazy_match=I[t.level].max_lazy,t.good_match=I[t.level].good_length,t.nice_match=I[t.level].nice_length,t.max_chain_length=I[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=st-1,t.match_available=0,t.ins_h=0}function w(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=V,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new A.Buf16(2*ot),this.dyn_dtree=new A.Buf16(2*(2*rt+1)),this.bl_tree=new A.Buf16(2*(2*it+1)),o(this.dyn_ltree),o(this.dyn_dtree),o(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new A.Buf16(at+1),this.heap=new A.Buf16(2*nt+1),o(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new A.Buf16(2*nt+1),o(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=X,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ct:vt,t.adler=2===e.wrap?0:1,e.last_flush=M,L._tr_init(e),F):r(t,W)}function b(t){var e=_(t);return e===F&&y(t.state),e}function x(t,e){return t&&t.state?2!==t.state.wrap?W:(t.state.gzhead=e,F):W}function S(t,e,n,i,o,a){if(!t)return W;var s=1;if(e===H&&(e=6),0>i?(s=0,i=-i):i>15&&(s=2,i-=16),1>o||o>$||n!==V||8>i||i>15||0>e||e>9||0>a||a>Y)return r(t,W);8===i&&(i=9);var h=new w;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=i,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=o+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+st-1)/st),h.window=new A.Buf8(2*h.w_size),h.head=new A.Buf16(h.hash_size),h.prev=new A.Buf16(h.w_size),h.lit_bufsize=1<<o+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new A.Buf8(h.pending_buf_size),h.d_buf=h.lit_bufsize>>1,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=a,h.method=n,b(t)}function k(t,e){return S(t,e,V,J,Q,K)}function E(t,e){var n,s,l,c;if(!t||!t.state||e>P||0>e)return t?r(t,W):W;if(s=t.state,!t.output||!t.input&&0!==t.avail_in||s.status===mt&&e!==U)return r(t,0===t.avail_out?j:W);if(s.strm=t,n=s.last_flush,s.last_flush=e,s.status===ct)if(2===s.wrap)t.adler=0,h(s,31),h(s,139),h(s,8),s.gzhead?(h(s,(s.gzhead.text?1:0)+(s.gzhead.hcrc?2:0)+(s.gzhead.extra?4:0)+(s.gzhead.name?8:0)+(s.gzhead.comment?16:0)),h(s,255&s.gzhead.time),h(s,s.gzhead.time>>8&255),h(s,s.gzhead.time>>16&255),h(s,s.gzhead.time>>24&255),h(s,9===s.level?2:s.strategy>=G||s.level<2?4:0),h(s,255&s.gzhead.os),s.gzhead.extra&&s.gzhead.extra.length&&(h(s,255&s.gzhead.extra.length),h(s,s.gzhead.extra.length>>8&255)),s.gzhead.hcrc&&(t.adler=B(t.adler,s.pending_buf,s.pending,0)),s.gzindex=0,s.status=ft):(h(s,0),h(s,0),h(s,0),h(s,0),h(s,0),h(s,9===s.level?2:s.strategy>=G||s.level<2?4:0),h(s,xt),s.status=vt);else{var f=V+(s.w_bits-8<<4)<<8,d=-1;d=s.strategy>=G||s.level<2?0:s.level<6?1:6===s.level?2:3,f|=d<<6,0!==s.strstart&&(f|=lt),f+=31-f%31,s.status=vt,u(s,f),0!==s.strstart&&(u(s,t.adler>>>16),u(s,65535&t.adler)),t.adler=1}if(s.status===ft)if(s.gzhead.extra){for(l=s.pending;s.gzindex<(65535&s.gzhead.extra.length)&&(s.pending!==s.pending_buf_size||(s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),a(t),l=s.pending,s.pending!==s.pending_buf_size));)h(s,255&s.gzhead.extra[s.gzindex]),s.gzindex++;s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),s.gzindex===s.gzhead.extra.length&&(s.gzindex=0,s.status=dt)}else s.status=dt;if(s.status===dt)if(s.gzhead.name){l=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),a(t),l=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.name.length?255&s.gzhead.name.charCodeAt(s.gzindex++):0,h(s,c)}while(0!==c);s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),0===c&&(s.gzindex=0,s.status=pt)}else s.status=pt;if(s.status===pt)if(s.gzhead.comment){l=s.pending;do{if(s.pending===s.pending_buf_size&&(s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),a(t),l=s.pending,s.pending===s.pending_buf_size)){c=1;break}c=s.gzindex<s.gzhead.comment.length?255&s.gzhead.comment.charCodeAt(s.gzindex++):0,h(s,c)}while(0!==c);s.gzhead.hcrc&&s.pending>l&&(t.adler=B(t.adler,s.pending_buf,s.pending-l,l)),0===c&&(s.status=gt)}else s.status=gt;if(s.status===gt&&(s.gzhead.hcrc?(s.pending+2>s.pending_buf_size&&a(t),s.pending+2<=s.pending_buf_size&&(h(s,255&t.adler),h(s,t.adler>>8&255),t.adler=0,s.status=vt)):s.status=vt),0!==s.pending){if(a(t),0===t.avail_out)return s.last_flush=-1,F}else if(0===t.avail_in&&i(e)<=i(n)&&e!==U)return r(t,j);if(s.status===mt&&0!==t.avail_in)return r(t,j);if(0!==t.avail_in||0!==s.lookahead||e!==M&&s.status!==mt){var p=s.strategy===G?m(s,e):s.strategy===q?v(s,e):I[s.level].func(s,e);if((p===_t||p===bt)&&(s.status=mt),p===yt||p===_t)return 0===t.avail_out&&(s.last_flush=-1),F;if(p===wt&&(e===O?L._tr_align(s):e!==P&&(L._tr_stored_block(s,0,0,!1),e===D&&(o(s.head),0===s.lookahead&&(s.strstart=0,s.block_start=0,s.insert=0))),a(t),0===t.avail_out))return s.last_flush=-1,F}return e!==U?F:s.wrap<=0?z:(2===s.wrap?(h(s,255&t.adler),h(s,t.adler>>8&255),h(s,t.adler>>16&255),h(s,t.adler>>24&255),h(s,255&t.total_in),h(s,t.total_in>>8&255),h(s,t.total_in>>16&255),h(s,t.total_in>>24&255)):(u(s,t.adler>>>16),u(s,65535&t.adler)),a(t),s.wrap>0&&(s.wrap=-s.wrap),0!==s.pending?F:z)}function C(t){var e;return t&&t.state?(e=t.state.status,e!==ct&&e!==ft&&e!==dt&&e!==pt&&e!==gt&&e!==vt&&e!==mt?r(t,W):(t.state=null,e===vt?r(t,N):F)):W}var I,A=n(98),L=n(95),R=n(96),B=n(97),T=n(73),M=0,O=1,D=3,U=4,P=5,F=0,z=1,W=-2,N=-3,j=-5,H=-1,Z=1,G=2,q=3,Y=4,K=0,X=2,V=8,$=9,J=15,Q=8,tt=29,et=256,nt=et+1+tt,rt=30,it=19,ot=2*nt+1,at=15,st=3,ht=258,ut=ht+st+1,lt=32,ct=42,ft=69,dt=73,pt=91,gt=103,vt=113,mt=666,yt=1,wt=2,_t=3,bt=4,xt=3,St=function(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i};I=[new St(0,0,0,0,d),new St(4,4,8,4,p),new St(4,5,16,8,p),new St(4,6,32,32,p),new St(4,4,16,16,g),new St(8,16,32,32,g),new St(8,16,128,128,g),new St(8,32,128,256,g),new St(32,128,258,1024,g),new St(32,258,258,4096,g)],e.deflateInit=k,e.deflateInit2=S,e.deflateReset=b,e.deflateResetKeep=_,e.deflateSetHeader=x,e.deflate=E,e.deflateEnd=C,e.deflateInfo="pako deflate (from Nodeca project)"},function(t,e,n){"use strict";function r(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function i(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new m.Buf16(320),this.work=new m.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function o(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=U,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new m.Buf32(pt),e.distcode=e.distdyn=new m.Buf32(gt),e.sane=1,e.back=-1,A):B}function a(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,o(t)):B}function s(t,e){var n,r;return t&&t.state?(r=t.state,0>e?(n=0,e=-e):(n=(e>>4)+1,48>e&&(e&=15)),e&&(8>e||e>15)?B:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,a(t))):B}function h(t,e){var n,r;return t?(r=new i,t.state=r,r.window=null,n=s(t,e),n!==A&&(t.state=null),n):B}function u(t){return h(t,mt)}function l(t){if(yt){var e;for(g=new m.Buf32(512),v=new m.Buf32(32),e=0;144>e;)t.lens[e++]=8;for(;256>e;)t.lens[e++]=9;for(;280>e;)t.lens[e++]=7;for(;288>e;)t.lens[e++]=8;for(b(S,t.lens,0,288,g,0,t.work,{bits:9}),e=0;32>e;)t.lens[e++]=5;b(k,t.lens,0,32,v,0,t.work,{bits:5}),yt=!1}t.lencode=g,t.lenbits=9,t.distcode=v,t.distbits=5}function c(t,e,n,r){var i,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new m.Buf8(o.wsize)),r>=o.wsize?(m.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i=o.wsize-o.wnext,i>r&&(i=r),m.arraySet(o.window,e,n-r,i,o.wnext),r-=i,r?(m.arraySet(o.window,e,n-r,r,0),o.wnext=r,o.whave=o.wsize):(o.wnext+=i,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=i))),0}function f(t,e){var n,i,o,a,s,h,u,f,d,p,g,v,pt,gt,vt,mt,yt,wt,_t,bt,xt,St,kt,Et,Ct=0,It=new m.Buf8(4),At=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return B;n=t.state,n.mode===Y&&(n.mode=K),s=t.next_out,o=t.output,u=t.avail_out,a=t.next_in,i=t.input,h=t.avail_in,f=n.hold,d=n.bits,p=h,g=u,St=A;t:for(;;)switch(n.mode){case U:if(0===n.wrap){n.mode=K;break}for(;16>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(2&n.wrap&&35615===f){n.check=0,It[0]=255&f,It[1]=f>>>8&255,n.check=w(n.check,It,2,0),f=0,d=0,n.mode=P;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&f)<<8)+(f>>8))%31){t.msg="incorrect header check",n.mode=ct;break}if((15&f)!==D){t.msg="unknown compression method",n.mode=ct;break}if(f>>>=4,d-=4,xt=(15&f)+8,0===n.wbits)n.wbits=xt;else if(xt>n.wbits){t.msg="invalid window size",n.mode=ct;break}n.dmax=1<<xt,t.adler=n.check=1,n.mode=512&f?G:Y,f=0,d=0;break;case P:for(;16>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(n.flags=f,(255&n.flags)!==D){t.msg="unknown compression method",n.mode=ct;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=ct;break}n.head&&(n.head.text=f>>8&1),512&n.flags&&(It[0]=255&f,It[1]=f>>>8&255,n.check=w(n.check,It,2,0)),f=0,d=0,n.mode=F;case F:for(;32>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.head&&(n.head.time=f),512&n.flags&&(It[0]=255&f,It[1]=f>>>8&255,It[2]=f>>>16&255,It[3]=f>>>24&255,n.check=w(n.check,It,4,0)),f=0,d=0,n.mode=z;case z:for(;16>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.head&&(n.head.xflags=255&f,n.head.os=f>>8),512&n.flags&&(It[0]=255&f,It[1]=f>>>8&255,n.check=w(n.check,It,2,0)),f=0,d=0,n.mode=W;case W:if(1024&n.flags){for(;16>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.length=f,n.head&&(n.head.extra_len=f),512&n.flags&&(It[0]=255&f,It[1]=f>>>8&255,n.check=w(n.check,It,2,0)),f=0,d=0}else n.head&&(n.head.extra=null);n.mode=N;case N:if(1024&n.flags&&(v=n.length,v>h&&(v=h),v&&(n.head&&(xt=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),m.arraySet(n.head.extra,i,a,v,xt)),512&n.flags&&(n.check=w(n.check,i,v,a)),h-=v,a+=v,n.length-=v),n.length))break t;n.length=0,n.mode=j;case j:if(2048&n.flags){if(0===h)break t;v=0;do xt=i[a+v++],n.head&&xt&&n.length<65536&&(n.head.name+=String.fromCharCode(xt));while(xt&&h>v);if(512&n.flags&&(n.check=w(n.check,i,v,a)),h-=v,a+=v,xt)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=H;case H:if(4096&n.flags){if(0===h)break t;v=0;do xt=i[a+v++],n.head&&xt&&n.length<65536&&(n.head.comment+=String.fromCharCode(xt));while(xt&&h>v);if(512&n.flags&&(n.check=w(n.check,i,v,a)),h-=v,a+=v,xt)break t}else n.head&&(n.head.comment=null);n.mode=Z;case Z:if(512&n.flags){for(;16>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(f!==(65535&n.check)){t.msg="header crc mismatch",n.mode=ct;break}f=0,d=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=Y;break;case G:for(;32>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}t.adler=n.check=r(f),f=0,d=0,n.mode=q;case q:if(0===n.havedict)return t.next_out=s,t.avail_out=u,t.next_in=a,t.avail_in=h,n.hold=f,n.bits=d,R;t.adler=n.check=1,n.mode=Y;case Y:if(e===C||e===I)break t;case K:if(n.last){f>>>=7&d,d-=7&d,n.mode=ht;break}for(;3>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}switch(n.last=1&f,f>>>=1,d-=1,3&f){case 0:n.mode=X;break;case 1:if(l(n),n.mode=et,e===I){f>>>=2,d-=2;break t}break;case 2:n.mode=J;break;case 3:t.msg="invalid block type",n.mode=ct}f>>>=2,d-=2;break;case X:for(f>>>=7&d,d-=7&d;32>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if((65535&f)!==(f>>>16^65535)){t.msg="invalid stored block lengths",n.mode=ct;break}if(n.length=65535&f,f=0,d=0,n.mode=V,e===I)break t;case V:n.mode=$;case $:if(v=n.length){if(v>h&&(v=h),v>u&&(v=u),0===v)break t;m.arraySet(o,i,a,v,s),h-=v,a+=v,u-=v,s+=v,n.length-=v;break}n.mode=Y;break;case J:for(;14>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(n.nlen=(31&f)+257,f>>>=5,d-=5,n.ndist=(31&f)+1,f>>>=5,d-=5,n.ncode=(15&f)+4,f>>>=4,d-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=ct;break}n.have=0,n.mode=Q;case Q:for(;n.have<n.ncode;){for(;3>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.lens[At[n.have++]]=7&f,f>>>=3,d-=3}for(;n.have<19;)n.lens[At[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,kt={bits:n.lenbits},St=b(x,n.lens,0,19,n.lencode,0,n.work,kt),n.lenbits=kt.bits,St){t.msg="invalid code lengths set",n.mode=ct;break}n.have=0,n.mode=tt;case tt:for(;n.have<n.nlen+n.ndist;){for(;Ct=n.lencode[f&(1<<n.lenbits)-1],vt=Ct>>>24,mt=Ct>>>16&255,yt=65535&Ct,!(d>=vt);){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(16>yt)f>>>=vt,d-=vt,n.lens[n.have++]=yt;else{if(16===yt){for(Et=vt+2;Et>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(f>>>=vt,d-=vt,0===n.have){t.msg="invalid bit length repeat",n.mode=ct;break}xt=n.lens[n.have-1],v=3+(3&f),f>>>=2,d-=2}else if(17===yt){for(Et=vt+3;Et>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}f>>>=vt,d-=vt,xt=0,v=3+(7&f),f>>>=3,d-=3}else{for(Et=vt+7;Et>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}f>>>=vt,d-=vt,xt=0,v=11+(127&f),f>>>=7,d-=7}if(n.have+v>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=ct;break}for(;v--;)n.lens[n.have++]=xt}}if(n.mode===ct)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=ct;break}if(n.lenbits=9,kt={bits:n.lenbits},St=b(S,n.lens,0,n.nlen,n.lencode,0,n.work,kt),n.lenbits=kt.bits,St){t.msg="invalid literal/lengths set",n.mode=ct;break}if(n.distbits=6,n.distcode=n.distdyn,kt={bits:n.distbits},St=b(k,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,kt),n.distbits=kt.bits,St){t.msg="invalid distances set",n.mode=ct;break}if(n.mode=et,e===I)break t;case et:n.mode=nt;case nt:if(h>=6&&u>=258){t.next_out=s,t.avail_out=u,t.next_in=a,t.avail_in=h,n.hold=f,n.bits=d,_(t,g),s=t.next_out,o=t.output,u=t.avail_out,a=t.next_in,i=t.input,h=t.avail_in,f=n.hold,d=n.bits,n.mode===Y&&(n.back=-1);break}for(n.back=0;Ct=n.lencode[f&(1<<n.lenbits)-1],vt=Ct>>>24,mt=Ct>>>16&255,yt=65535&Ct,!(d>=vt);){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(mt&&0===(240&mt)){for(wt=vt,_t=mt,bt=yt;Ct=n.lencode[bt+((f&(1<<wt+_t)-1)>>wt)],vt=Ct>>>24,mt=Ct>>>16&255,yt=65535&Ct,!(d>=wt+vt);){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}f>>>=wt,d-=wt,n.back+=wt}if(f>>>=vt,d-=vt,n.back+=vt,n.length=yt,0===mt){n.mode=st;break}if(32&mt){n.back=-1,n.mode=Y;break}if(64&mt){t.msg="invalid literal/length code",n.mode=ct;break}n.extra=15&mt,n.mode=rt;case rt:if(n.extra){for(Et=n.extra;Et>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.length+=f&(1<<n.extra)-1,f>>>=n.extra,d-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=it;case it:for(;Ct=n.distcode[f&(1<<n.distbits)-1],vt=Ct>>>24,mt=Ct>>>16&255,yt=65535&Ct,!(d>=vt);){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(0===(240&mt)){for(wt=vt,_t=mt,bt=yt;Ct=n.distcode[bt+((f&(1<<wt+_t)-1)>>wt)],vt=Ct>>>24,mt=Ct>>>16&255,yt=65535&Ct,!(d>=wt+vt);){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}f>>>=wt,d-=wt,n.back+=wt}if(f>>>=vt,d-=vt,n.back+=vt,64&mt){t.msg="invalid distance code",n.mode=ct;break}n.offset=yt,n.extra=15&mt,n.mode=ot;case ot:if(n.extra){for(Et=n.extra;Et>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}n.offset+=f&(1<<n.extra)-1,f>>>=n.extra,d-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=ct;break}n.mode=at;case at:if(0===u)break t;if(v=g-u,n.offset>v){if(v=n.offset-v,v>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=ct;break}v>n.wnext?(v-=n.wnext,pt=n.wsize-v):pt=n.wnext-v,v>n.length&&(v=n.length),gt=n.window}else gt=o,pt=s-n.offset,v=n.length;v>u&&(v=u),u-=v,n.length-=v;do o[s++]=gt[pt++];while(--v);0===n.length&&(n.mode=nt);break;case st:if(0===u)break t;o[s++]=n.length,u--,n.mode=nt;break;case ht:if(n.wrap){for(;32>d;){if(0===h)break t;h--,f|=i[a++]<<d,d+=8}if(g-=u,t.total_out+=g,n.total+=g,g&&(t.adler=n.check=n.flags?w(n.check,o,g,s-g):y(n.check,o,g,s-g)),g=u,(n.flags?f:r(f))!==n.check){t.msg="incorrect data check",n.mode=ct;break}f=0,d=0}n.mode=ut;case ut:if(n.wrap&&n.flags){for(;32>d;){if(0===h)break t;h--,f+=i[a++]<<d,d+=8}if(f!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=ct;break}f=0,d=0}n.mode=lt;case lt:St=L;break t;case ct:St=T;break t;case ft:return M;case dt:default:return B}return t.next_out=s,t.avail_out=u,t.next_in=a,t.avail_in=h,n.hold=f,n.bits=d,(n.wsize||g!==t.avail_out&&n.mode<ct&&(n.mode<ht||e!==E))&&c(t,t.output,t.next_out,g-t.avail_out)?(n.mode=ft,M):(p-=t.avail_in,g-=t.avail_out,t.total_in+=p,t.total_out+=g,n.total+=g,n.wrap&&g&&(t.adler=n.check=n.flags?w(n.check,o,g,t.next_out-g):y(n.check,o,g,t.next_out-g)),t.data_type=n.bits+(n.last?64:0)+(n.mode===Y?128:0)+(n.mode===et||n.mode===V?256:0),(0===p&&0===g||e===E)&&St===A&&(St=O),St)}function d(t){if(!t||!t.state)return B;var e=t.state;return e.window&&(e.window=null),t.state=null,A}function p(t,e){var n;return t&&t.state?(n=t.state,0===(2&n.wrap)?B:(n.head=e,e.done=!1,A)):B}var g,v,m=n(98),y=n(96),w=n(97),_=n(102),b=n(103),x=0,S=1,k=2,E=4,C=5,I=6,A=0,L=1,R=2,B=-2,T=-3,M=-4,O=-5,D=8,U=1,P=2,F=3,z=4,W=5,N=6,j=7,H=8,Z=9,G=10,q=11,Y=12,K=13,X=14,V=15,$=16,J=17,Q=18,tt=19,et=20,nt=21,rt=22,it=23,ot=24,at=25,st=26,ht=27,ut=28,lt=29,ct=30,ft=31,dt=32,pt=852,gt=592,vt=15,mt=vt,yt=!0;e.inflateReset=a,e.inflateReset2=s,e.inflateResetKeep=o,e.inflateInit=u,e.inflateInit2=h,e.inflate=f,e.inflateEnd=d,e.inflateGetHeader=p,e.inflateInfo="pako inflate (from Nodeca project)"},function(t,e,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},function(t,e,n){"use strict";function r(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}t.exports=r},function(t,e,n){(function(){var e,r,i,NameTable,o;o=n(10),r=n(34),i=n(79),NameTable=n(80),e=function(){function t(t){this.contents=new r(t),this.parse(this.contents)}return t.open=function(e){var n;return n=o.readFileSync(e),new t(n)},t.prototype.parse=function(t){var e,n,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L,R,B;for(h=t.readInt(),w=t.readInt(),s=t.readInt(),y=t.readInt(),this.map={},t.pos=w+24,L=t.readShort()+w,S=t.readShort()+w,t.pos=L,_=t.readShort(),d=R=0;_>=R;d=R+=1){for(A=t.readString(4),b=t.readShort(),I=t.readShort(),this.map[A]={list:[],named:{}},C=t.pos,t.pos=L+I,g=B=0;b>=B;g=B+=1)p=t.readShort(),k=t.readShort(),e=t.readByte(),n=t.readByte()<<16,o=t.readByte()<<8,a=t.readByte(),u=h+(0|n|o|a),f=t.readUInt32(),l={id:p,attributes:e,offset:u,handle:f},E=t.pos,-1!==k&&w+y>S+k?(t.pos=S+k,v=t.readByte(),l.name=t.readString(v)):"sfnt"===A&&(t.pos=l.offset,m=t.readUInt32(),c={},c.contents=new r(t.slice(t.pos,t.pos+m)),c.directory=new i(c.contents),x=new NameTable(c),l.name=x.fontName[0].raw),t.pos=E,this.map[A].list.push(l),l.name&&(this.map[A].named[l.name]=l);t.pos=C}},t.prototype.getNamedFont=function(t){var e,n,r,i,o,a;if(e=this.contents,i=e.pos,n=null!=(a=this.map.sfnt)?a.named[t]:void 0,!n)throw new Error("Font "+t+" not found in DFont file.");return e.pos=n.offset,r=e.readUInt32(),o=e.slice(e.pos,e.pos+r),e.pos=i,o},t}(),t.exports=e}).call(this)},function(t,e,n){(function(e){(function(){var r,i,o=[].slice;r=n(34),i=function(){function t(t){var e,n,r,i;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},n=r=0,i=this.tableCount;i>=0?i>r:r>i;n=i>=0?++r:--r)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}var n;return t.prototype.encode=function(t){var i,o,a,s,h,u,l,c,f,d,p,g,v,m;g=Object.keys(t).length,u=Math.log(2),f=16*Math.floor(Math.log(g)/u),s=Math.floor(f/u),c=16*g-f,o=new r,o.writeInt(this.scalarType),o.writeShort(g),o.writeShort(f),o.writeShort(s),o.writeShort(c),a=16*g,l=o.pos+a,h=null,v=[];for(m in t)for(p=t[m],o.writeString(m),o.writeInt(n(p)),o.writeInt(l),o.writeInt(p.length),v=v.concat(p),"head"===m&&(h=l),l+=p.length;l%4;)v.push(0),l++;return o.write(v),d=n(o.data),i=2981146554-d,o.pos=h+8,o.writeUInt32(i),new e(o.data)},n=function(t){var e,n,i,a,s;for(t=o.call(t);t.length%4;)t.push(0);for(i=new r(t),n=0,e=a=0,s=t.length;s>a;e=a+=4)n+=i.readUInt32();return 4294967295&n},t}(),t.exports=i}).call(this)}).call(e,n(4).Buffer)},function(t,e,n){(function(){var e,r,NameTable,i,o,a={}.hasOwnProperty,s=function(t,e){function n(){this.constructor=t}for(var r in e)a.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};i=n(99),e=n(34),o=n(89),NameTable=function(t){function NameTable(){return NameTable.__super__.constructor.apply(this,arguments)}var n;return s(NameTable,t),NameTable.prototype.tag="name",NameTable.prototype.parse=function(t){var e,n,i,o,a,s,h,u,l,c,f,d,p;for(t.pos=this.offset,o=t.readShort(),e=t.readShort(),h=t.readShort(),n=[],a=c=0;e>=0?e>c:c>e;a=e>=0?++c:--c)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+h+t.readShort()});for(u={},a=f=0,d=n.length;d>f;a=++f)i=n[a],t.pos=i.offset,l=t.readString(i.length),s=new r(l,i),null==u[p=i.nameID]&&(u[p]=[]),u[i.nameID].push(s);return this.strings=u,this.copyright=u[0],this.fontFamily=u[1],this.fontSubfamily=u[2],this.uniqueSubfamily=u[3],this.fontName=u[4],this.version=u[5],this.postscriptName=u[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,""),this.trademark=u[7],this.manufacturer=u[8],this.designer=u[9],this.description=u[10],this.vendorUrl=u[11],this.designerUrl=u[12],this.license=u[13],this.licenseUrl=u[14],this.preferredFamily=u[15],this.preferredSubfamily=u[17],this.compatibleFull=u[18],this.sampleText=u[19]},n="AAAAAA",NameTable.prototype.encode=function(){var t,i,a,s,h,u,l,c,f,d,p,g,v,m;f={},m=this.strings;for(t in m)p=m[t],f[t]=p;h=new r(""+n+"+"+this.postscriptName,{platformID:1,encodingID:0,languageID:0}),f[6]=[h],n=o.successorOf(n),u=0;for(t in f)i=f[t],null!=i&&(u+=i.length);d=new e,l=new e,d.writeShort(0),d.writeShort(u),d.writeShort(6+12*u);for(a in f)if(i=f[a],null!=i)for(g=0,v=i.length;v>g;g++)c=i[g],d.writeShort(c.platformID),d.writeShort(c.encodingID),d.writeShort(c.languageID),d.writeShort(a),d.writeShort(c.length),d.writeShort(l.pos),l.writeString(c.raw);return s={postscriptName:h.raw,table:d.data.concat(l.data)}},NameTable}(i),t.exports=NameTable,r=function(){function t(t,e){this.raw=t,this.length=this.raw.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID}return t}()}).call(this)},function(t,e,n){(function(){var e,HeadTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),HeadTable=function(t){function HeadTable(){return HeadTable.__super__.constructor.apply(this,arguments)}return o(HeadTable,t),HeadTable.prototype.tag="head",HeadTable.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},HeadTable.prototype.encode=function(t){var n;return n=new e,n.writeInt(this.version),n.writeInt(this.revision),n.writeInt(this.checkSumAdjustment),n.writeInt(this.magicNumber),n.writeShort(this.flags),n.writeShort(this.unitsPerEm),n.writeLongLong(this.created),n.writeLongLong(this.modified),n.writeShort(this.xMin),n.writeShort(this.yMin),n.writeShort(this.xMax),n.writeShort(this.yMax),n.writeShort(this.macStyle),n.writeShort(this.lowestRecPPEM),n.writeShort(this.fontDirectionHint),n.writeShort(t.type),n.writeShort(this.glyphDataFormat),n.data},HeadTable}(r),t.exports=HeadTable}).call(this)},function(t,e,n){(function(){var e,CmapTable,r,i,o={}.hasOwnProperty,a=function(t,e){function n(){this.constructor=t}for(var r in e)o.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};i=n(99),r=n(34),CmapTable=function(t){function CmapTable(){return CmapTable.__super__.constructor.apply(this,arguments)}return a(CmapTable,t),CmapTable.prototype.tag="cmap",CmapTable.prototype.parse=function(t){var n,r,i,o;for(t.pos=this.offset,this.version=t.readUInt16(),i=t.readUInt16(),this.tables=[],this.unicode=null,r=o=0;i>=0?i>o:o>i;r=i>=0?++o:--o)n=new e(t,this.offset),this.tables.push(n),n.isUnicode&&null==this.unicode&&(this.unicode=n);return!0},CmapTable.encode=function(t,n){var i,o;return null==n&&(n="macroman"),i=e.encode(t,n),o=new r,o.writeUInt16(0),o.writeUInt16(1),i.table=o.data.concat(i.subtable),i},CmapTable}(i),e=function(){function t(t,e){var n,r,i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_;switch(this.platformID=t.readUInt16(),this.encodingID=t.readShort(),this.offset=e+t.readInt(),c=t.pos,t.pos=this.offset,this.format=t.readUInt16(),this.length=t.readUInt16(),this.language=t.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=m=0;256>m;s=++m)this.codeMap[s]=t.readByte();break;case 4:for(d=t.readUInt16(),f=d/2,t.pos+=6,i=function(){var e,n;for(n=[],s=e=0;f>=0?f>e:e>f;s=f>=0?++e:--e)n.push(t.readUInt16());return n}(),t.pos+=2,g=function(){var e,n;for(n=[],s=e=0;f>=0?f>e:e>f;s=f>=0?++e:--e)n.push(t.readUInt16());return n}(),h=function(){var e,n;for(n=[],s=e=0;f>=0?f>e:e>f;s=f>=0?++e:--e)n.push(t.readUInt16());return n}(),u=function(){var e,n;for(n=[],s=e=0;f>=0?f>e:e>f;s=f>=0?++e:--e)n.push(t.readUInt16());return n}(),r=(this.length-t.pos+this.offset)/2,a=function(){var e,n;for(n=[],s=e=0;r>=0?r>e:e>r;s=r>=0?++e:--e)n.push(t.readUInt16());return n}(),s=y=0,_=i.length;_>y;s=++y)for(v=i[s],p=g[s],n=w=p;v>=p?v>=w:w>=v;n=v>=p?++w:--w)0===u[s]?o=n+h[s]:(l=u[s]/2+(n-p)-(f-s),o=a[l]||0,0!==o&&(o+=h[s])),this.codeMap[n]=65535&o}t.pos=c}return t.encode=function(t,e){var n,i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L,R,B,T,M,O,D,U,P,F,z,W,N,j,H,Z,G,q,Y,K,X;switch(B=new r,a=Object.keys(t).sort(function(t,e){return t-e}),e){case"macroman":for(g=0,v=function(){var t,e;for(e=[],p=t=0;256>t;p=++t)e.push(0);return e}(),y={0:0},o={},T=0,U=a.length;U>T;T++)i=a[T],null==y[q=t[i]]&&(y[q]=++g),o[i]={old:t[i],"new":y[t[i]]},v[i]=y[t[i]];return B.writeUInt16(1),B.writeUInt16(0),B.writeUInt32(12),B.writeUInt16(0),
B.writeUInt16(262),B.writeUInt16(0),B.write(v),k={charMap:o,subtable:B.data,maxGlyphID:g+1};case"unicode":for(L=[],c=[],w=0,y={},n={},m=u=null,M=0,P=a.length;P>M;M++)i=a[M],b=t[i],null==y[b]&&(y[b]=++w),n[i]={old:b,"new":y[b]},s=y[b]-i,(null==m||s!==u)&&(m&&c.push(m),L.push(i),u=s),m=i;for(m&&c.push(m),c.push(65535),L.push(65535),C=L.length,I=2*C,E=2*Math.pow(Math.log(C)/Math.LN2,2),f=Math.log(E/2)/Math.LN2,S=2*C-E,h=[],x=[],d=[],p=O=0,F=L.length;F>O;p=++O){if(A=L[p],l=c[p],65535===A){h.push(0),x.push(0);break}if(R=n[A]["new"],A-R>=32768)for(h.push(0),x.push(2*(d.length+C-p)),i=D=A;l>=A?l>=D:D>=l;i=l>=A?++D:--D)d.push(n[i]["new"]);else h.push(R-A),x.push(0)}for(B.writeUInt16(3),B.writeUInt16(1),B.writeUInt32(12),B.writeUInt16(4),B.writeUInt16(16+8*C+2*d.length),B.writeUInt16(0),B.writeUInt16(I),B.writeUInt16(E),B.writeUInt16(f),B.writeUInt16(S),Z=0,z=c.length;z>Z;Z++)i=c[Z],B.writeUInt16(i);for(B.writeUInt16(0),G=0,W=L.length;W>G;G++)i=L[G],B.writeUInt16(i);for(Y=0,N=h.length;N>Y;Y++)s=h[Y],B.writeUInt16(s);for(K=0,j=x.length;j>K;K++)_=x[K],B.writeUInt16(_);for(X=0,H=d.length;H>X;X++)g=d[X],B.writeUInt16(g);return k={charMap:n,subtable:B.data,maxGlyphID:w+1}}},t}(),t.exports=CmapTable}).call(this)},function(t,e,n){(function(){var e,HmtxTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),HmtxTable=function(t){function HmtxTable(){return HmtxTable.__super__.constructor.apply(this,arguments)}return o(HmtxTable,t),HmtxTable.prototype.tag="hmtx",HmtxTable.prototype.parse=function(t){var e,n,r,i,o,a,s,h;for(t.pos=this.offset,this.metrics=[],e=o=0,s=this.file.hhea.numberOfMetrics;s>=0?s>o:o>s;e=s>=0?++o:--o)this.metrics.push({advance:t.readUInt16(),lsb:t.readInt16()});for(r=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var n,i;for(i=[],e=n=0;r>=0?r>n:n>r;e=r>=0?++n:--n)i.push(t.readInt16());return i}(),this.widths=function(){var t,e,n,r;for(n=this.metrics,r=[],t=0,e=n.length;e>t;t++)i=n[t],r.push(i.advance);return r}.call(this),n=this.widths[this.widths.length-1],h=[],e=a=0;r>=0?r>a:a>r;e=r>=0?++a:--a)h.push(this.widths.push(n));return h},HmtxTable.prototype.forGlyph=function(t){var e;return t in this.metrics?this.metrics[t]:e={advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},HmtxTable.prototype.encode=function(t){var n,r,i,o,a;for(i=new e,o=0,a=t.length;a>o;o++)n=t[o],r=this.forGlyph(n),i.writeUInt16(r.advance),i.writeUInt16(r.lsb);return i.data},HmtxTable}(r),t.exports=HmtxTable}).call(this)},function(t,e,n){(function(){var e,HheaTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),HheaTable=function(t){function HheaTable(){return HheaTable.__super__.constructor.apply(this,arguments)}return o(HheaTable,t),HheaTable.prototype.tag="hhea",HheaTable.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},HheaTable.prototype.encode=function(t){var n,r,i,o;for(r=new e,r.writeInt(this.version),r.writeShort(this.ascender),r.writeShort(this.decender),r.writeShort(this.lineGap),r.writeShort(this.advanceWidthMax),r.writeShort(this.minLeftSideBearing),r.writeShort(this.minRightSideBearing),r.writeShort(this.xMaxExtent),r.writeShort(this.caretSlopeRise),r.writeShort(this.caretSlopeRun),r.writeShort(this.caretOffset),n=i=0,o=8;o>=0?o>i:i>o;n=o>=0?++i:--i)r.writeByte(0);return r.writeShort(this.metricDataFormat),r.writeUInt16(t.length),r.data},HheaTable}(r),t.exports=HheaTable}).call(this)},function(t,e,n){(function(){var e,MaxpTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),MaxpTable=function(t){function MaxpTable(){return MaxpTable.__super__.constructor.apply(this,arguments)}return o(MaxpTable,t),MaxpTable.prototype.tag="maxp",MaxpTable.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},MaxpTable.prototype.encode=function(t){var n;return n=new e,n.writeInt(this.version),n.writeUInt16(t.length),n.writeUInt16(this.maxPoints),n.writeUInt16(this.maxContours),n.writeUInt16(this.maxCompositePoints),n.writeUInt16(this.maxComponentContours),n.writeUInt16(this.maxZones),n.writeUInt16(this.maxTwilightPoints),n.writeUInt16(this.maxStorage),n.writeUInt16(this.maxFunctionDefs),n.writeUInt16(this.maxInstructionDefs),n.writeUInt16(this.maxStackElements),n.writeUInt16(this.maxSizeOfInstructions),n.writeUInt16(this.maxComponentElements),n.writeUInt16(this.maxComponentDepth),n.data},MaxpTable}(r),t.exports=MaxpTable}).call(this)},function(t,e,n){(function(){var e,PostTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),PostTable=function(t){function PostTable(){return PostTable.__super__.constructor.apply(this,arguments)}var n;return o(PostTable,t),PostTable.prototype.tag="post",PostTable.prototype.parse=function(t){var e,n,r,i,o;switch(t.pos=this.offset,this.format=t.readInt(),this.italicAngle=t.readInt(),this.underlinePosition=t.readShort(),this.underlineThickness=t.readShort(),this.isFixedPitch=t.readInt(),this.minMemType42=t.readInt(),this.maxMemType42=t.readInt(),this.minMemType1=t.readInt(),this.maxMemType1=t.readInt(),this.format){case 65536:break;case 131072:for(r=t.readUInt16(),this.glyphNameIndex=[],e=i=0;r>=0?r>i:i>r;e=r>=0?++i:--i)this.glyphNameIndex.push(t.readUInt16());for(this.names=[],o=[];t.pos<this.offset+this.length;)n=t.readByte(),o.push(this.names.push(t.readString(n)));return o;case 151552:return r=t.readUInt16(),this.offsets=t.read(r);case 196608:break;case 262144:return this.map=function(){var n,r,i;for(i=[],e=n=0,r=this.file.maxp.numGlyphs;r>=0?r>n:n>r;e=r>=0?++n:--n)i.push(t.readUInt32());return i}.call(this)}},PostTable.prototype.glyphFor=function(t){var e;switch(this.format){case 65536:return n[t]||".notdef";case 131072:return e=this.glyphNameIndex[t],257>=e?n[e]:this.names[e-258]||".notdef";case 151552:return n[t+this.offsets[t]]||".notdef";case 196608:return".notdef";case 262144:return this.map[t]||65535}},PostTable.prototype.encode=function(t){var r,i,o,a,s,h,u,l,c,f,d,p,g,v,m;if(!this.exists)return null;if(h=this.raw(),196608===this.format)return h;for(c=new e(h.slice(0,32)),c.writeUInt32(131072),c.pos=32,o=[],l=[],f=0,g=t.length;g>f;f++)r=t[f],s=this.glyphFor(r),a=n.indexOf(s),-1!==a?o.push(a):(o.push(257+l.length),l.push(s));for(c.writeUInt16(Object.keys(t).length),d=0,v=o.length;v>d;d++)i=o[d],c.writeUInt16(i);for(p=0,m=l.length;m>p;p++)u=l[p],c.writeByte(u.length),c.writeString(u);return c.data},n=".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent\nampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash\nzero one two three four five six seven eight nine colon semicolon less equal greater\nquestion at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\nbracketleft backslash bracketright asciicircum underscore grave\na b c d e f g h i j k l m n o p q r s t u v w x y z\nbraceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis\nUdieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave\necircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve\nocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent\nsterling section bullet paragraph germandbls registered copyright trademark acute\ndieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu\npartialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash\nquestiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft\nguillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash\nquotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis\nfraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered\nquotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis\nEgrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute\nUcircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla\nhungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth\neth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior\nonehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla\nCacute cacute Ccaron ccaron dcroat".split(/\s+/g),PostTable}(r),t.exports=PostTable}).call(this)},function(t,e,n){(function(){var OS2Table,e,r={}.hasOwnProperty,i=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};e=n(99),OS2Table=function(t){function OS2Table(){return OS2Table.__super__.constructor.apply(this,arguments)}return i(OS2Table,t),OS2Table.prototype.tag="OS/2",OS2Table.prototype.parse=function(t){var e;return t.pos=this.offset,this.version=t.readUInt16(),this.averageCharWidth=t.readShort(),this.weightClass=t.readUInt16(),this.widthClass=t.readUInt16(),this.type=t.readShort(),this.ySubscriptXSize=t.readShort(),this.ySubscriptYSize=t.readShort(),this.ySubscriptXOffset=t.readShort(),this.ySubscriptYOffset=t.readShort(),this.ySuperscriptXSize=t.readShort(),this.ySuperscriptYSize=t.readShort(),this.ySuperscriptXOffset=t.readShort(),this.ySuperscriptYOffset=t.readShort(),this.yStrikeoutSize=t.readShort(),this.yStrikeoutPosition=t.readShort(),this.familyClass=t.readShort(),this.panose=function(){var n,r;for(r=[],e=n=0;10>n;e=++n)r.push(t.readByte());return r}(),this.charRange=function(){var n,r;for(r=[],e=n=0;4>n;e=++n)r.push(t.readInt());return r}(),this.vendorID=t.readString(4),this.selection=t.readShort(),this.firstCharIndex=t.readShort(),this.lastCharIndex=t.readShort(),this.version>0&&(this.ascent=t.readShort(),this.descent=t.readShort(),this.lineGap=t.readShort(),this.winAscent=t.readShort(),this.winDescent=t.readShort(),this.codePageRange=function(){var n,r;for(r=[],e=n=0;2>n;e=++n)r.push(t.readInt());return r}(),this.version>1)?(this.xHeight=t.readShort(),this.capHeight=t.readShort(),this.defaultChar=t.readShort(),this.breakChar=t.readShort(),this.maxContext=t.readShort()):void 0},OS2Table.prototype.encode=function(){return this.raw()},OS2Table}(e),t.exports=OS2Table}).call(this)},function(t,e,n){(function(){var e,LocaTable,r,i={}.hasOwnProperty,o=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};r=n(99),e=n(34),LocaTable=function(t){function LocaTable(){return LocaTable.__super__.constructor.apply(this,arguments)}return o(LocaTable,t),LocaTable.prototype.tag="loca",LocaTable.prototype.parse=function(t){var e,n;return t.pos=this.offset,e=this.file.head.indexToLocFormat,this.offsets=0===e?function(){var e,r,i;for(i=[],n=e=0,r=this.length;r>e;n=e+=2)i.push(2*t.readUInt16());return i}.call(this):function(){var e,r,i;for(i=[],n=e=0,r=this.length;r>e;n=e+=4)i.push(t.readUInt32());return i}.call(this)},LocaTable.prototype.indexOf=function(t){return this.offsets[t]},LocaTable.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},LocaTable.prototype.encode=function(t){var n,r,i,o,a,s,h,u,l,c,f;for(o=new e,a=0,u=t.length;u>a;a++)if(r=t[a],r>65535){for(f=this.offsets,s=0,l=f.length;l>s;s++)n=f[s],o.writeUInt32(n);return i={format:1,table:o.data}}for(h=0,c=t.length;c>h;h++)n=t[h],o.writeUInt16(n/2);return i={format:0,table:o.data}},LocaTable}(r),t.exports=LocaTable}).call(this)},function(t,e,n){(function(){e.successorOf=function(t){var e,n,r,i,o,a,s,h,u,l;for(n="abcdefghijklmnopqrstuvwxyz",h=n.length,l=t,i=t.length;i>=0;){if(s=t.charAt(--i),isNaN(s)){if(o=n.indexOf(s.toLowerCase()),-1===o)u=s,r=!0;else if(u=n.charAt((o+1)%h),a=s===s.toUpperCase(),a&&(u=u.toUpperCase()),r=o+1>=h,r&&0===i){e=a?"A":"a",l=e+u+l.slice(1);break}}else if(u=+s+1,r=u>9,r&&(u=0),r&&0===i){l="1"+u+l.slice(1);break}if(l=l.slice(0,i)+u+l.slice(i+1),!r)break}return l},e.invert=function(t){var e,n,r;n={};for(e in t)r=t[e],n[r]=e;return n}}).call(this)},function(t,e,n){(function(){var e,r,GlyfTable,i,o,a={}.hasOwnProperty,s=function(t,e){function n(){this.constructor=t}for(var r in e)a.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},h=[].slice;o=n(99),r=n(34),GlyfTable=function(t){function GlyfTable(){return GlyfTable.__super__.constructor.apply(this,arguments)}return s(GlyfTable,t),GlyfTable.prototype.tag="glyf",GlyfTable.prototype.parse=function(t){return this.cache={}},GlyfTable.prototype.glyphFor=function(t){var n,o,a,s,h,u,l,c,f,d;return t in this.cache?this.cache[t]:(s=this.file.loca,n=this.file.contents,o=s.indexOf(t),a=s.lengthOf(t),0===a?this.cache[t]=null:(n.pos=this.offset+o,u=new r(n.read(a)),h=u.readShort(),c=u.readShort(),d=u.readShort(),l=u.readShort(),f=u.readShort(),this.cache[t]=-1===h?new e(u,c,d,l,f):new i(u,h,c,d,l,f),this.cache[t]))},GlyfTable.prototype.encode=function(t,e,n){var r,i,o,a,s,h;for(a=[],o=[],s=0,h=e.length;h>s;s++)i=e[s],r=t[i],o.push(a.length),r&&(a=a.concat(r.encode(n)));return o.push(a.length),{table:a,offsets:o}},GlyfTable}(o),i=function(){function t(t,e,n,r,i,o){this.raw=t,this.numberOfContours=e,this.xMin=n,this.yMin=r,this.xMax=i,this.yMax=o,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),e=function(){function t(t,r,s,h,u){var l,c;for(this.raw=t,this.xMin=r,this.yMin=s,this.xMax=h,this.yMax=u,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],l=this.raw;;){if(c=l.readShort(),this.glyphOffsets.push(l.pos),this.glyphIDs.push(l.readShort()),!(c&n))break;l.pos+=c&e?4:2,c&a?l.pos+=8:c&i?l.pos+=4:c&o&&(l.pos+=2)}}var e,n,i,o,a,s;return e=1,o=8,n=32,i=64,a=128,s=256,t.prototype.encode=function(t){var e,n,i,o,a,s;for(i=new r(h.call(this.raw.data)),s=this.glyphIDs,e=o=0,a=s.length;a>o;e=++o)n=s[e],i.pos=this.glyphOffsets[e],i.writeShort(t[n]);return i.data},t}(),t.exports=GlyfTable}).call(this)},function(t,e,n){(function(){var t,n,r,i,o;e.DI_BRK=r=0,e.IN_BRK=i=1,e.CI_BRK=t=2,e.CP_BRK=n=3,e.PR_BRK=o=4,e.pairTable=[[o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,n,o,o,o,o,o,o,o],[r,o,o,i,i,o,o,o,o,i,i,r,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,o,o,o,o,i,i,i,i,i,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[o,o,o,i,i,i,o,o,o,i,i,i,i,i,i,i,i,i,i,i,o,t,o,i,i,i,i,i,i],[i,o,o,i,i,i,o,o,o,i,i,i,i,i,i,i,i,i,i,i,o,t,o,i,i,i,i,i,i],[r,o,o,i,i,i,o,o,o,r,r,r,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,i,o,o,o,r,r,r,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,i,o,o,o,r,r,i,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,i,o,o,o,r,r,i,i,i,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,r,r,i,i,i,i,r,i,i,r,r,o,t,o,i,i,i,i,i,r],[i,o,o,i,i,i,o,o,o,r,r,i,i,i,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,i,i,i,i,i,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,r,r,i,i,i,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,r,r,i,i,i,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,i,i,o,o,o,r,r,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,r,i,o,o,o,r,r,i,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[r,o,o,i,r,i,o,o,o,r,r,r,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,i,i,i,i,i,i,i,i,i,i,i,o,t,o,i,i,i,i,i,i],[r,o,o,i,i,i,o,o,o,r,r,r,r,r,r,r,i,i,r,o,o,t,o,r,r,r,r,r,r],[r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,o,r,r,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,r,r,i,i,i,r,i,i,i,r,r,o,t,o,r,r,r,r,r,r],[i,o,o,i,i,i,o,o,o,i,i,i,i,i,i,i,i,i,i,i,o,t,o,i,i,i,i,i,i],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,i,i,r],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,r,i,r],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,i,i,i,i,r,r],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,i,i,r],[r,o,o,i,i,i,o,o,o,r,i,r,r,r,r,i,i,i,r,r,o,t,o,r,r,r,r,i,r],[r,o,o,i,i,i,o,o,o,r,r,r,r,r,r,r,i,i,r,r,o,t,o,r,r,r,r,r,i]]}).call(this)},function(t,e,n){(function(){var t,n,r,i,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A,L,R,B,T,M,O,D,U,P,F,z,W;e.OP=L=0,e.CL=u=1,e.CP=c=2,e.QU=T=3,e.GL=p=4,e.NS=I=5,e.EX=d=6,e.SY=P=7,e.IS=b=8,e.PR=B=9,e.PO=R=10,e.NU=A=11,e.AL=n=12,e.HL=m=13,e.ID=w=14,e.IN=_=15,e.HY=y=16,e.BA=i=17,e.BB=o=18,e.B2=r=19,e.ZW=W=20,e.CM=l=21,e.WJ=F=22,e.H2=g=23,e.H3=v=24,e.JL=x=25,e.JV=k=26,e.JT=S=27,e.RI=M=28,e.AI=t=29,e.BK=a=30,e.CB=s=31,e.CJ=h=32,e.CR=f=33,e.LF=E=34,e.NL=C=35,e.SA=O=36,e.SG=D=37,e.SP=U=38,e.XX=z=39}).call(this)},function(t,e,n){},function(t,e,n){t.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";function r(t){for(var e=t.length;--e>=0;)t[e]=0}function i(t){return 256>t?at[t]:at[256+(t>>>7)]}function o(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function a(t,e,n){t.bi_valid>Y-n?(t.bi_buf|=e<<t.bi_valid&65535,o(t,t.bi_buf),t.bi_buf=e>>Y-t.bi_valid,t.bi_valid+=n-Y):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function s(t,e,n){a(t,n[2*e],n[2*e+1])}function h(t,e){var n=0;do n|=1&t,t>>>=1,n<<=1;while(--e>0);return n>>>1}function u(t){16===t.bi_valid?(o(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function l(t,e){var n,r,i,o,a,s,h=e.dyn_tree,u=e.max_code,l=e.stat_desc.static_tree,c=e.stat_desc.has_stree,f=e.stat_desc.extra_bits,d=e.stat_desc.extra_base,p=e.stat_desc.max_length,g=0;for(o=0;q>=o;o++)t.bl_count[o]=0;for(h[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;G>n;n++)r=t.heap[n],o=h[2*h[2*r+1]+1]+1,o>p&&(o=p,g++),h[2*r+1]=o,r>u||(t.bl_count[o]++,a=0,r>=d&&(a=f[r-d]),s=h[2*r],t.opt_len+=s*(o+a),c&&(t.static_len+=s*(l[2*r+1]+a)));if(0!==g){do{for(o=p-1;0===t.bl_count[o];)o--;t.bl_count[o]--,t.bl_count[o+1]+=2,t.bl_count[p]--,g-=2}while(g>0);for(o=p;0!==o;o--)for(r=t.bl_count[o];0!==r;)i=t.heap[--n],i>u||(h[2*i+1]!==o&&(t.opt_len+=(o-h[2*i+1])*h[2*i],h[2*i+1]=o),r--)}}function c(t,e,n){var r,i,o=new Array(q+1),a=0;for(r=1;q>=r;r++)o[r]=a=a+n[r-1]<<1;for(i=0;e>=i;i++){var s=t[2*i+1];0!==s&&(t[2*i]=h(o[s]++,s))}}function f(){var t,e,n,r,i,o=new Array(q+1);for(n=0,r=0;W-1>r;r++)for(ht[r]=n,t=0;t<1<<Q[r];t++)st[n++]=r;for(st[n-1]=r,i=0,r=0;16>r;r++)for(ut[r]=i,t=0;t<1<<tt[r];t++)at[i++]=r;for(i>>=7;H>r;r++)for(ut[r]=i<<7,t=0;t<1<<tt[r]-7;t++)at[256+i++]=r;for(e=0;q>=e;e++)o[e]=0;for(t=0;143>=t;)it[2*t+1]=8,t++,o[8]++;for(;255>=t;)it[2*t+1]=9,t++,o[9]++;for(;279>=t;)it[2*t+1]=7,t++,o[7]++;for(;287>=t;)it[2*t+1]=8,t++,o[8]++;for(c(it,j+1,o),t=0;H>t;t++)ot[2*t+1]=5,ot[2*t]=h(t,5);lt=new dt(it,Q,N+1,j,q),ct=new dt(ot,tt,0,H,q),ft=new dt(new Array(0),et,0,Z,K)}function d(t){var e;for(e=0;j>e;e++)t.dyn_ltree[2*e]=0;for(e=0;H>e;e++)t.dyn_dtree[2*e]=0;for(e=0;Z>e;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*X]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function p(t){t.bi_valid>8?o(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function g(t,e,n,r){p(t),r&&(o(t,n),o(t,~n)),R.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}function v(t,e,n,r){var i=2*e,o=2*n;return t[i]<t[o]||t[i]===t[o]&&r[e]<=r[n]}function m(t,e,n){for(var r=t.heap[n],i=n<<1;i<=t.heap_len&&(i<t.heap_len&&v(e,t.heap[i+1],t.heap[i],t.depth)&&i++,!v(e,r,t.heap[i],t.depth));)t.heap[n]=t.heap[i],n=i,i<<=1;t.heap[n]=r}function y(t,e,n){var r,o,h,u,l=0;if(0!==t.last_lit)do r=t.pending_buf[t.d_buf+2*l]<<8|t.pending_buf[t.d_buf+2*l+1],o=t.pending_buf[t.l_buf+l],l++,0===r?s(t,o,e):(h=st[o],s(t,h+N+1,e),u=Q[h],0!==u&&(o-=ht[h],a(t,o,u)),r--,h=i(r),s(t,h,n),u=tt[h],0!==u&&(r-=ut[h],a(t,r,u)));while(l<t.last_lit);s(t,X,e)}function w(t,e){var n,r,i,o=e.dyn_tree,a=e.stat_desc.static_tree,s=e.stat_desc.has_stree,h=e.stat_desc.elems,u=-1;for(t.heap_len=0,t.heap_max=G,n=0;h>n;n++)0!==o[2*n]?(t.heap[++t.heap_len]=u=n,t.depth[n]=0):o[2*n+1]=0;for(;t.heap_len<2;)i=t.heap[++t.heap_len]=2>u?++u:0,o[2*i]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=a[2*i+1]);for(e.max_code=u,n=t.heap_len>>1;n>=1;n--)m(t,o,n);i=h;do n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],m(t,o,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,o[2*i]=o[2*n]+o[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,o[2*n+1]=o[2*r+1]=i,t.heap[1]=i++,m(t,o,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],l(t,e),c(o,u,t.bl_count)}function _(t,e,n){var r,i,o=-1,a=e[1],s=0,h=7,u=4;for(0===a&&(h=138,u=3),e[2*(n+1)+1]=65535,r=0;n>=r;r++)i=a,a=e[2*(r+1)+1],++s<h&&i===a||(u>s?t.bl_tree[2*i]+=s:0!==i?(i!==o&&t.bl_tree[2*i]++,t.bl_tree[2*V]++):10>=s?t.bl_tree[2*$]++:t.bl_tree[2*J]++,s=0,o=i,0===a?(h=138,u=3):i===a?(h=6,u=3):(h=7,u=4))}function b(t,e,n){var r,i,o=-1,h=e[1],u=0,l=7,c=4;for(0===h&&(l=138,c=3),r=0;n>=r;r++)if(i=h,h=e[2*(r+1)+1],!(++u<l&&i===h)){if(c>u){do s(t,i,t.bl_tree);while(0!==--u)}else 0!==i?(i!==o&&(s(t,i,t.bl_tree),u--),s(t,V,t.bl_tree),a(t,u-3,2)):10>=u?(s(t,$,t.bl_tree),a(t,u-3,3)):(s(t,J,t.bl_tree),a(t,u-11,7));u=0,o=i,0===h?(l=138,c=3):i===h?(l=6,c=3):(l=7,c=4)}}function x(t){var e;for(_(t,t.dyn_ltree,t.l_desc.max_code),_(t,t.dyn_dtree,t.d_desc.max_code),w(t,t.bl_desc),e=Z-1;e>=3&&0===t.bl_tree[2*nt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function S(t,e,n,r){var i;for(a(t,e-257,5),a(t,n-1,5),a(t,r-4,4),i=0;r>i;i++)a(t,t.bl_tree[2*nt[i]+1],3);b(t,t.dyn_ltree,e-1),b(t,t.dyn_dtree,n-1)}function k(t){var e,n=4093624447;for(e=0;31>=e;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return T;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return M;for(e=32;N>e;e++)if(0!==t.dyn_ltree[2*e])return M;return T}function E(t){gt||(f(),gt=!0),t.l_desc=new pt(t.dyn_ltree,lt),t.d_desc=new pt(t.dyn_dtree,ct),t.bl_desc=new pt(t.bl_tree,ft),t.bi_buf=0,t.bi_valid=0,d(t)}function C(t,e,n,r){a(t,(D<<1)+(r?1:0),3),g(t,e,n,!0)}function I(t){a(t,U<<1,3),s(t,X,it),u(t)}function A(t,e,n,r){var i,o,s=0;t.level>0?(t.strm.data_type===O&&(t.strm.data_type=k(t)),w(t,t.l_desc),w(t,t.d_desc),s=x(t),i=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,i>=o&&(i=o)):i=o=n+5,i>=n+4&&-1!==e?C(t,e,n,r):t.strategy===B||o===i?(a(t,(U<<1)+(r?1:0),3),y(t,it,ot)):(a(t,(P<<1)+(r?1:0),3),S(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),y(t,t.dyn_ltree,t.dyn_dtree)),d(t),r&&p(t)}function L(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*(st[n]+N+1)]++,t.dyn_dtree[2*i(e)]++),t.last_lit===t.lit_bufsize-1}var R=n(98),B=4,T=0,M=1,O=2,D=0,U=1,P=2,F=3,z=258,W=29,N=256,j=N+1+W,H=30,Z=19,G=2*j+1,q=15,Y=16,K=7,X=256,V=16,$=17,J=18,Q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],et=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],nt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rt=512,it=new Array(2*(j+2));r(it);var ot=new Array(2*H);r(ot);var at=new Array(rt);r(at);var st=new Array(z-F+1);r(st);var ht=new Array(W);r(ht);var ut=new Array(H);r(ut);var lt,ct,ft,dt=function(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length},pt=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e},gt=!1;e._tr_init=E,e._tr_stored_block=C,e._tr_flush_block=A,e._tr_tally=L,e._tr_align=I},function(t,e,n){"use strict";function r(t,e,n,r){for(var i=65535&t|0,o=t>>>16&65535|0,a=0;0!==n;){a=n>2e3?2e3:n,n-=a;do i=i+e[r++]|0,o=o+i|0;while(--a);i%=65521,o%=65521}return i|o<<16|0}t.exports=r},function(t,e,n){"use strict";function r(){for(var t,e=[],n=0;256>n;n++){t=n;for(var r=0;8>r;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}function i(t,e,n,r){var i=o,a=r+n;t=-1^t;for(var s=r;a>s;s++)t=t>>>8^i[255&(t^e[s])];return-1^t}var o=r();t.exports=i},function(t,e,n){"use strict";var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;e.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var n=e.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])}}return t},e.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var i={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)return void t.set(e.subarray(n,n+r),i);for(var o=0;r>o;o++)t[i+o]=e[n+o]},flattenChunks:function(t){var e,n,r,i,o,a;for(r=0,e=0,n=t.length;n>e;e++)r+=t[e].length;for(a=new Uint8Array(r),i=0,e=0,n=t.length;n>e;e++)o=t[e],a.set(o,i),i+=o.length;return a}},o={arraySet:function(t,e,n,r,i){for(var o=0;r>o;o++)t[i+o]=e[n+o]},flattenChunks:function(t){return[].concat.apply([],t)}};e.setTyped=function(t){t?(e.Buf8=Uint8Array,e.Buf16=Uint16Array,e.Buf32=Int32Array,e.assign(e,i)):(e.Buf8=Array,e.Buf16=Array,e.Buf32=Array,e.assign(e,o))},e.setTyped(r)},function(t,e,n){(function(){var e;e=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}(),t.exports=e}).call(this)},function(t,e,n){var r,i=[].slice;r=function(){function t(t){var e,n;null==t&&(t={}),this.data=t.data||[],this.highStart=null!=(e=t.highStart)?e:0,this.errorValue=null!=(n=t.errorValue)?n:-1}var e,n,r,o,a,s,h,u,l,c,f,d,p,g,v,m;return d=11,g=5,p=d-g,f=65536>>d,a=1<<p,h=a-1,u=2,e=1<<g,r=e-1,c=65536>>g,l=1024>>g,s=c+l,m=s,v=32,o=m+v,n=1<<u,t.prototype.get=function(t){var e;return 0>t||t>1114111?this.errorValue:55296>t||t>56319&&65535>=t?(e=(this.data[t>>g]<<u)+(t&r),this.data[e]):65535>=t?(e=(this.data[c+(t-55296>>g)]<<u)+(t&r),this.data[e]):t<this.highStart?(e=this.data[o-f+(t>>d)],e=this.data[e+(t>>g&h)],e=(e<<u)+(t&r),this.data[e]):this.data[this.data.length-n]},t.prototype.toJSON=function(){var t;return t={data:i.call(this.data),highStart:this.highStart,errorValue:this.errorValue}},t}(),t.exports=r},function(t,e,n){function r(t){if(t&&!h(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function a(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}var s=n(4).Buffer,h=s.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},u=e.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),r(t),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};u.prototype.write=function(t){for(var e="";this.charLength;){var n=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length;if(t.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return"";t=t.slice(n,t.length),e=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var r=e.charCodeAt(e.length-1);if(!(r>=55296&&56319>=r)){if(this.charReceived=this.charLength=0,0===t.length)return e;break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t);var i=t.length;this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),e+=t.toString(this.encoding,0,i);var i=e.length-1,r=e.charCodeAt(i);if(r>=55296&&56319>=r){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},u.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var n=t[t.length-e];if(1==e&&n>>5==6){this.charLength=2;break}if(2>=e&&n>>4==14){this.charLength=3;break}if(3>=e&&n>>3==30){this.charLength=4;break}}this.charReceived=e},u.prototype.end=function(t){var e="";if(t&&t.length&&(e=this.write(t)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding;e+=r.slice(0,n).toString(i)}return e}},function(t,e,n){"use strict";var r=30,i=12;t.exports=function(t,e){var n,o,a,s,h,u,l,c,f,d,p,g,v,m,y,w,_,b,x,S,k,E,C,I,A;n=t.state,o=t.next_in,I=t.input,a=o+(t.avail_in-5),s=t.next_out,A=t.output,h=s-(e-t.avail_out),u=s+(t.avail_out-257),l=n.dmax,c=n.wsize,f=n.whave,d=n.wnext,p=n.window,g=n.hold,v=n.bits,m=n.lencode,y=n.distcode,w=(1<<n.lenbits)-1,_=(1<<n.distbits)-1;t:do{15>v&&(g+=I[o++]<<v,v+=8,g+=I[o++]<<v,v+=8),b=m[g&w];e:for(;;){if(x=b>>>24,g>>>=x,v-=x,x=b>>>16&255,0===x)A[s++]=65535&b;else{if(!(16&x)){if(0===(64&x)){b=m[(65535&b)+(g&(1<<x)-1)];continue e}if(32&x){n.mode=i;break t}t.msg="invalid literal/length code",n.mode=r;break t}S=65535&b,x&=15,x&&(x>v&&(g+=I[o++]<<v,v+=8),S+=g&(1<<x)-1,g>>>=x,v-=x),15>v&&(g+=I[o++]<<v,v+=8,g+=I[o++]<<v,v+=8),b=y[g&_];n:for(;;){if(x=b>>>24,g>>>=x,v-=x,x=b>>>16&255,!(16&x)){if(0===(64&x)){b=y[(65535&b)+(g&(1<<x)-1)];continue n}t.msg="invalid distance code",n.mode=r;break t}if(k=65535&b,x&=15,x>v&&(g+=I[o++]<<v,v+=8,x>v&&(g+=I[o++]<<v,v+=8)),k+=g&(1<<x)-1,k>l){t.msg="invalid distance too far back",n.mode=r;break t}if(g>>>=x,v-=x,x=s-h,k>x){if(x=k-x,x>f&&n.sane){t.msg="invalid distance too far back",n.mode=r;break t}if(E=0,C=p,0===d){if(E+=c-x,S>x){S-=x;do A[s++]=p[E++];while(--x);E=s-k,C=A}}else if(x>d){if(E+=c+d-x,x-=d,S>x){S-=x;do A[s++]=p[E++];while(--x);if(E=0,S>d){x=d,S-=x;do A[s++]=p[E++];while(--x);E=s-k,C=A}}}else if(E+=d-x,S>x){S-=x;do A[s++]=p[E++];while(--x);E=s-k,C=A}for(;S>2;)A[s++]=C[E++],A[s++]=C[E++],A[s++]=C[E++],S-=3;S&&(A[s++]=C[E++],S>1&&(A[s++]=C[E++]))}else{E=s-k;do A[s++]=A[E++],A[s++]=A[E++],A[s++]=A[E++],S-=3;while(S>2);S&&(A[s++]=A[E++],S>1&&(A[s++]=A[E++]))}break}}break}}while(a>o&&u>s);S=v>>3,o-=S,v-=S<<3,g&=(1<<v)-1,t.next_in=o,t.next_out=s,t.avail_in=a>o?5+(a-o):5-(o-a),t.avail_out=u>s?257+(u-s):257-(s-u),n.hold=g,n.bits=v}},function(t,e,n){"use strict";var r=n(98),i=15,o=852,a=592,s=0,h=1,u=2,l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];

t.exports=function(t,e,n,p,g,v,m,y){var w,_,b,x,S,k,E,C,I,A=y.bits,L=0,R=0,B=0,T=0,M=0,O=0,D=0,U=0,P=0,F=0,z=null,W=0,N=new r.Buf16(i+1),j=new r.Buf16(i+1),H=null,Z=0;for(L=0;i>=L;L++)N[L]=0;for(R=0;p>R;R++)N[e[n+R]]++;for(M=A,T=i;T>=1&&0===N[T];T--);if(M>T&&(M=T),0===T)return g[v++]=20971520,g[v++]=20971520,y.bits=1,0;for(B=1;T>B&&0===N[B];B++);for(B>M&&(M=B),U=1,L=1;i>=L;L++)if(U<<=1,U-=N[L],0>U)return-1;if(U>0&&(t===s||1!==T))return-1;for(j[1]=0,L=1;i>L;L++)j[L+1]=j[L]+N[L];for(R=0;p>R;R++)0!==e[n+R]&&(m[j[e[n+R]]++]=R);if(t===s?(z=H=m,k=19):t===h?(z=l,W-=257,H=c,Z-=257,k=256):(z=f,H=d,k=-1),F=0,R=0,L=B,S=v,O=M,D=0,b=-1,P=1<<M,x=P-1,t===h&&P>o||t===u&&P>a)return 1;for(var G=0;;){G++,E=L-D,m[R]<k?(C=0,I=m[R]):m[R]>k?(C=H[Z+m[R]],I=z[W+m[R]]):(C=96,I=0),w=1<<L-D,_=1<<O,B=_;do _-=w,g[S+(F>>D)+_]=E<<24|C<<16|I|0;while(0!==_);for(w=1<<L-1;F&w;)w>>=1;if(0!==w?(F&=w-1,F+=w):F=0,R++,0===--N[L]){if(L===T)break;L=e[n+m[R]]}if(L>M&&(F&x)!==b){for(0===D&&(D=M),S+=B,O=L-D,U=1<<O;T>O+D&&(U-=N[O+D],!(0>=U));)O++,U<<=1;if(P+=1<<O,t===h&&P>o||t===u&&P>a)return 1;b=F&x,g[b]=M<<24|O<<16|S-v|0}}return 0!==F&&(g[S+F]=L-D<<24|64<<16|0),y.bits=M,0}},function(t,e,n){t.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){(function(t){function n(t){return Array.isArray(t)}function r(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"==typeof t}function s(t){return"string"==typeof t}function h(t){return"symbol"==typeof t}function u(t){return void 0===t}function l(t){return c(t)&&"[object RegExp]"===m(t)}function c(t){return"object"==typeof t&&null!==t}function f(t){return c(t)&&"[object Date]"===m(t)}function d(t){return c(t)&&("[object Error]"===m(t)||t instanceof Error)}function p(t){return"function"==typeof t}function g(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function v(e){return t.isBuffer(e)}function m(t){return Object.prototype.toString.call(t)}e.isArray=n,e.isBoolean=r,e.isNull=i,e.isNullOrUndefined=o,e.isNumber=a,e.isString=s,e.isSymbol=h,e.isUndefined=u,e.isRegExp=l,e.isObject=c,e.isDate=f,e.isError=d,e.isFunction=p,e.isPrimitive=g,e.isBuffer=v}).call(e,n(4).Buffer)},function(t,e,n){t.exports={data:[1961,1969,1977,1985,2025,2033,2041,2049,2057,2065,2073,2081,2089,2097,2105,2113,2121,2129,2137,2145,2153,2161,2169,2177,2185,2193,2201,2209,2217,2225,2233,2241,2249,2257,2265,2273,2281,2289,2297,2305,2313,2321,2329,2337,2345,2353,2361,2369,2377,2385,2393,2401,2409,2417,2425,2433,2441,2449,2457,2465,2473,2481,2489,2497,2505,2513,2521,2529,2529,2537,2009,2545,2553,2561,2569,2577,2585,2593,2601,2609,2617,2625,2633,2641,2649,2657,2665,2673,2681,2689,2697,2705,2713,2721,2729,2737,2745,2753,2761,2769,2777,2785,2793,2801,2809,2817,2825,2833,2841,2849,2857,2865,2873,2881,2889,2009,2897,2905,2913,2009,2921,2929,2937,2945,2953,2961,2969,2009,2977,2977,2985,2993,3001,3009,3009,3009,3017,3017,3017,3025,3025,3033,3041,3041,3049,3049,3049,3049,3049,3049,3049,3049,3049,3049,3057,3065,3073,3073,3073,3081,3089,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3097,3105,3113,3113,3121,3129,3137,3145,3153,3161,3161,3169,3177,3185,3193,3193,3193,3193,3201,3209,3209,3217,3225,3233,3241,3241,3241,3249,3257,3265,3273,3273,3281,3289,3297,2009,2009,3305,3313,3321,3329,3337,3345,3353,3361,3369,3377,3385,3393,2009,2009,3401,3409,3417,3417,3417,3417,3417,3417,3425,3425,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3433,3441,3449,3457,3465,3473,3481,3489,3497,3505,3513,3521,3529,3537,3545,3553,3561,3569,3577,3585,3593,3601,3609,3617,3625,3625,3633,3641,3649,3649,3649,3649,3649,3657,3665,3665,3673,3681,3681,3681,3681,3689,3697,3697,3705,3713,3721,3729,3737,3745,3753,3761,3769,3777,3785,3793,3801,3809,3817,3825,3833,3841,3849,3857,3865,3873,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3881,3889,3897,3905,3913,3921,3921,3921,3921,3921,3921,3921,3921,3921,3921,3929,2009,2009,2009,2009,2009,3937,3937,3937,3937,3937,3937,3937,3945,3953,3953,3953,3961,3969,3969,3977,3985,3993,4001,2009,2009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4009,4017,4025,4033,4041,4049,4057,4065,4073,4081,4081,4081,4081,4081,4081,4081,4089,4097,4097,4105,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4113,4121,4121,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4129,4137,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4145,4153,4161,4169,4169,4169,4169,4169,4169,4169,4169,4177,4185,4193,4201,4209,4217,4217,4225,4233,4233,4233,4233,4233,4233,4233,4233,4241,4249,4257,4265,4273,4281,4289,4297,4305,4313,4321,4329,4337,4345,4353,4361,4361,4369,4377,4385,4385,4385,4385,4393,4401,4409,4409,4409,4409,4409,4409,4417,4425,4433,4441,4449,4457,4465,4473,4481,4489,4497,4505,4513,4521,4529,4537,4545,4553,4561,4569,4577,4585,4593,4601,4609,4617,4625,4633,4641,4649,4657,4665,4673,4681,4689,4697,4705,4713,4721,4729,4737,4745,4753,4761,4769,4777,4785,4793,4801,4809,4817,4825,4833,4841,4849,4857,4865,4873,4881,4889,4897,4905,4913,4921,4929,4937,4945,4953,4961,4969,4977,4985,4993,5001,5009,5017,5025,5033,5041,5049,5057,5065,5073,5081,5089,5097,5105,5113,5121,5129,5137,5145,5153,5161,5169,5177,5185,5193,5201,5209,5217,5225,5233,5241,5249,5257,5265,5273,5281,5289,5297,5305,5313,5321,5329,5337,5345,5353,5361,5369,5377,5385,5393,5401,5409,5417,5425,5433,5441,5449,5457,5465,5473,5481,5489,5497,5505,5513,5521,5529,5537,5545,5553,5561,5569,5577,5585,5593,5601,5609,5617,5625,5633,5641,5649,5657,5665,5673,5681,5689,5697,5705,5713,5721,5729,5737,5745,5753,5761,5769,5777,5785,5793,5801,5809,5817,5825,5833,5841,5849,5857,5865,5873,5881,5889,5897,5905,5913,5921,5929,5937,5945,5953,5961,5969,5977,5985,5993,6001,6009,6017,6025,6033,6041,6049,6057,6065,6073,6081,6089,6097,6105,6113,6121,6129,6137,6145,6153,6161,6169,6177,6185,6193,6201,6209,6217,6225,6233,6241,6249,6257,6265,6273,6281,6289,6297,6305,6313,6321,6329,6337,6345,6353,6361,6369,6377,6385,6393,6401,6409,6417,6425,6433,6441,6449,6457,6465,6473,6481,6489,6497,6505,6513,6521,6529,6537,6545,6553,6561,6569,6577,6585,6593,6601,6609,6617,6625,6633,6641,6649,6657,6665,6673,6681,6689,6697,6705,6713,6721,6729,6737,6745,6753,6761,6769,6777,6785,6793,6801,6809,6817,6825,6833,6841,6849,6857,6865,6873,6881,6889,6897,6905,6913,6921,6929,6937,6945,6953,6961,6969,6977,6985,6993,7001,7009,7017,7025,7033,7041,7049,7057,7065,7073,7081,7089,7097,7105,7113,7121,7129,7137,7145,7153,7161,7169,7177,7185,7193,7201,7209,7217,7225,7233,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7249,7257,7265,7273,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7281,7289,7297,7305,7305,7305,7305,7313,7321,7329,7337,7345,7353,7353,7353,7361,7369,7377,7385,7393,7401,7409,7417,7425,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7241,7972,7972,8100,8164,8228,8292,8356,8420,8484,8548,8612,8676,8740,8804,8868,8932,8996,9060,9124,9188,9252,9316,9380,9444,9508,9572,9636,9700,9764,9828,9892,9956,2593,2657,2721,2529,2785,2529,2849,2913,2977,3041,3105,3169,3233,3297,2529,2529,2529,2529,2529,2529,2529,2529,3361,2529,2529,2529,3425,2529,2529,3489,3553,2529,3617,3681,3745,3809,3873,3937,4001,4065,4129,4193,4257,4321,4385,4449,4513,4577,4641,4705,4769,4833,4897,4961,5025,5089,5153,5217,5281,5345,5409,5473,5537,5601,5665,5729,5793,5857,5921,5985,6049,6113,6177,6241,6305,6369,6433,6497,6561,6625,6689,6753,6817,6881,6945,7009,7073,7137,7201,7265,7329,7393,7457,7521,7585,7649,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,2529,7713,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7433,7433,7433,7433,7433,7433,7433,7441,7449,7457,7457,7457,7457,7457,7457,7465,2009,2009,2009,2009,7473,7473,7473,7473,7473,7473,7473,7473,7481,7489,7497,7505,7505,7505,7505,7505,7513,7521,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7529,7529,7537,7545,7545,7545,7545,7545,7553,7561,7561,7561,7561,7561,7561,7561,7569,7577,7585,7593,7593,7593,7593,7593,7593,7601,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7609,7617,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7625,7633,7641,7649,7657,7665,7673,7681,7689,7697,7705,2009,7713,7721,7729,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7737,7745,7753,2009,2009,2009,2009,2009,2009,2009,2009,2009,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7761,7769,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7777,7785,7793,7801,7809,7809,7809,7809,7809,7809,7817,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7825,7833,7841,7849,2009,2009,2009,7857,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7865,7865,7865,7865,7865,7865,7865,7865,7865,7865,7865,7873,7881,7889,7897,7897,7897,7897,7905,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7913,7921,7929,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,7937,7937,7937,7937,7937,7937,7937,7945,2009,2009,2009,2009,2009,2009,2009,2009,7953,7953,7953,7953,7953,7953,7953,2009,7961,7969,7977,7985,7993,2009,2009,8001,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8009,8017,8025,8025,8025,8025,8025,8025,8025,8033,8041,8049,8057,8065,8073,8081,8081,8081,8081,8081,8081,8081,8081,8081,8081,8081,8089,2009,8097,8097,8097,8105,2009,2009,2009,2009,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8113,8121,8129,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8137,8145,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,2009,67496,67496,67496,21,21,21,21,21,21,21,21,21,17,34,30,30,33,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,38,6,3,12,9,10,12,3,0,2,12,9,8,16,8,7,11,11,11,11,11,11,11,11,11,11,8,8,12,12,12,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,9,2,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,17,1,12,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,35,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,4,0,10,9,9,9,12,29,29,12,29,3,12,17,12,12,10,9,29,29,18,12,29,29,29,29,29,3,29,29,29,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,18,29,29,29,18,29,12,12,29,12,12,12,12,12,12,12,29,29,29,29,12,29,12,18,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,4,21,21,21,21,21,21,21,21,21,21,21,21,4,4,4,4,4,4,4,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,8,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,8,17,39,39,39,39,9,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,21,12,21,21,12,21,21,6,21,39,39,39,39,39,39,39,39,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,10,10,8,8,12,12,21,21,21,21,21,21,21,21,21,21,21,6,6,6,6,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,11,11,11,11,11,11,11,11,11,11,10,11,11,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,6,12,21,21,21,21,21,21,21,12,12,21,21,21,21,21,21,12,12,21,21,12,21,21,21,21,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,12,12,12,12,8,6,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,21,21,21,21,21,21,21,21,21,12,21,21,21,12,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,21,21,17,17,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,21,39,39,39,39,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,10,10,12,12,12,12,12,10,12,9,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,12,12,12,12,12,12,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,21,21,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,9,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,12,39,39,39,39,39,39,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,9,12,39,39,39,39,39,39,21,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,12,12,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,21,39,39,39,39,39,39,39,39,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,39,39,39,10,12,12,12,12,12,12,39,39,21,21,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,39,39,39,39,39,39,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,9,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,12,11,11,11,11,11,11,11,11,11,11,17,17,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,11,11,11,11,11,11,11,11,11,11,39,39,36,36,36,36,12,18,18,18,18,12,18,18,4,18,18,17,4,6,6,6,6,6,4,12,6,12,12,12,21,21,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,17,21,12,21,12,21,0,1,0,1,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,21,21,21,21,21,17,21,21,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,17,17,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,18,18,17,18,12,12,12,12,12,4,4,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,11,11,11,11,11,11,11,11,11,11,17,17,12,12,12,12,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,21,21,21,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,17,17,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,39,39,39,39,39,39,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,17,17,5,36,17,12,17,9,36,36,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,6,6,17,17,18,12,6,6,12,21,21,21,4,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,12,39,39,39,6,6,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,39,39,12,12,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,21,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,36,36,36,36,36,36,36,36,36,36,36,36,36,36,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,39,39,39,39,11,11,11,11,11,11,11,11,11,11,17,17,12,17,17,17,17,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,17,17,17,17,17,11,11,11,11,11,11,11,11,11,11,39,39,39,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,21,21,21,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,21,12,12,12,12,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,18,12,39,17,17,17,17,17,17,17,4,17,17,17,20,21,21,21,21,17,4,17,17,19,29,29,12,3,3,0,3,3,3,0,3,29,29,12,12,15,15,15,17,30,30,21,21,21,21,21,4,10,10,10,10,10,10,10,10,12,3,3,29,5,5,12,12,12,12,12,12,8,0,1,5,5,5,12,12,12,12,12,12,12,12,12,12,12,12,17,12,17,17,17,17,12,17,17,17,22,12,12,12,12,39,39,39,39,39,21,21,21,21,21,21,12,12,39,39,29,12,12,12,12,12,12,12,12,0,1,29,12,29,29,29,29,12,12,12,12,12,12,12,12,0,1,39,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,9,9,9,9,9,9,9,10,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,9,9,9,9,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,10,12,29,12,12,12,10,12,12,12,12,12,12,12,12,12,29,12,12,9,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,29,12,12,29,12,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,29,29,12,12,12,29,29,12,12,29,12,12,12,29,12,29,9,9,12,29,12,12,12,12,29,12,12,29,29,29,29,12,12,29,12,29,12,29,29,29,29,29,29,12,29,12,12,12,12,12,29,29,29,29,12,12,12,12,29,29,12,12,12,12,12,12,12,12,12,12,29,12,12,12,29,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,29,29,29,29,12,12,29,29,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,12,29,29,12,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,29,29,12,12,29,29,12,12,12,12,29,29,12,12,29,29,12,12,12,12,29,29,29,12,12,29,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,12,12,12,12,12,12,12,12,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,12,29,29,12,12,29,12,12,12,12,29,29,12,12,12,12,14,14,29,29,14,12,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,12,12,12,12,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,29,29,29,12,29,14,29,29,12,29,29,12,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,14,12,14,14,14,29,14,14,29,29,29,14,14,29,29,14,29,29,14,14,14,12,29,12,12,12,12,29,29,14,29,29,29,29,29,29,14,14,14,14,14,29,14,14,14,14,29,29,14,14,14,14,14,14,14,14,12,12,12,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,12,12,12,3,3,3,3,12,12,12,6,6,12,12,12,12,0,1,0,1,0,1,0,1,0,1,0,1,0,1,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,0,1,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,29,29,29,29,29,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,12,39,39,39,39,39,6,17,17,17,12,6,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,3,3,3,3,3,3,3,3,3,3,3,3,3,3,17,17,17,17,17,17,17,17,12,17,0,17,12,12,3,3,12,12,3,3,0,1,0,1,0,1,0,1,17,17,17,17,6,12,17,17,12,17,17,12,12,12,12,12,19,19,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,1,1,14,14,5,14,14,0,1,0,1,0,1,0,1,0,1,14,14,0,1,0,1,0,1,0,1,5,0,1,1,14,14,14,14,14,14,14,14,14,14,21,21,21,21,21,21,14,14,14,14,14,14,14,14,14,14,14,5,5,14,14,14,39,32,14,32,14,32,14,32,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,32,14,32,14,14,14,14,14,14,32,14,14,14,14,14,14,32,32,39,39,21,21,5,5,5,5,14,5,32,14,32,14,32,14,32,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,32,14,32,14,32,14,14,14,14,14,14,32,14,14,14,14,14,14,32,32,14,14,14,14,5,32,5,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,29,29,29,29,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,5,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,6,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,12,17,17,17,17,17,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,12,12,12,21,12,12,12,12,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,18,18,6,6,39,39,39,39,39,39,39,39,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,17,17,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,39,39,39,39,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,12,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,39,39,39,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,17,17,17,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,12,12,12,21,12,12,12,12,12,12,12,12,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,12,17,17,17,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,17,17,12,12,12,21,21,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,17,21,21,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,39,39,39,39,39,39,39,39,39,39,39,39,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,39,39,39,39,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,39,39,39,39,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,13,21,13,13,13,13,13,13,13,13,13,13,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,10,12,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,8,1,1,8,8,6,6,0,1,15,39,39,39,39,39,39,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,14,14,14,14,14,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,14,14,0,1,14,14,14,14,14,14,14,1,14,1,39,5,5,6,6,14,0,1,0,1,0,1,14,14,14,14,14,14,14,14,14,14,9,10,14,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,22,39,6,14,14,9,10,14,14,0,1,14,14,1,14,1,14,14,14,14,14,14,14,14,14,14,14,5,5,14,14,14,6,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,1,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,0,14,1,14,0,1,1,0,1,1,5,12,32,32,32,32,32,32,32,32,32,32,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,5,5,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,10,9,14,14,14,9,9,39,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,21,21,21,31,29,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,17,17,17,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,17,17,17,17,17,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,17,17,17,17,17,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,17,17,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,12,12,12,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,11,11,11,11,11,11,11,11,11,11,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,17,17,12,17,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,11,11,11,11,11,11,11,11,11,11,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,17,17,17,17,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,0,0,1,1,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,1,12,12,12,0,1,0,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,0,1,1,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,21,12,12,12,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,12,12,21,21,21,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,21,21,21,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,12,12,39,39,39,39,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,39,39,39,39,39,39,39,39,39,39,39,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,14,14,14,14,14,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,14,12,14,12,14,14,14,14,14,14,14,14,14,14,12,14,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,14,14,14,14,14,14,14,14,14,14,14,14,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,39,39,39,39,39,39,39,39,39,39,39,39,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,39,39,39,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39,39],
highStart:919552,errorValue:0}},function(t,e,n){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}}]);
//# sourceMappingURL=pdfmake.min.js.map
;
(function(g){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(d){return g(d,window,document)}):"object"===typeof exports?module.exports=function(d,f){d||(d=window);if(!f||!f.fn.dataTable)f=require("datatables.net")(d,f).$;f.fn.dataTable.Buttons||require("datatables.net-buttons")(d,f);return g(f,d,d.document)}:g(jQuery,window,document)})(function(g,d,f,k){var l=g.fn.dataTable,j;if("undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))j=
void 0;else{var v=d.document,o=v.createElementNS("http://www.w3.org/1999/xhtml","a"),D="download"in o,p=d.webkitRequestFileSystem,w=d.requestFileSystem||p||d.mozRequestFileSystem,E=function(a){(d.setImmediate||d.setTimeout)(function(){throw a;},0)},q=0,r=function(a){var b=function(){"string"===typeof a?(d.URL||d.webkitURL||d).revokeObjectURL(a):a.remove()};d.chrome?b():setTimeout(b,500)},s=function(a,b,e){for(var b=[].concat(b),c=b.length;c--;){var d=a["on"+b[c]];if("function"===typeof d)try{d.call(a,
e||a)}catch(h){E(h)}}},y=function(a){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["﻿",a],{type:a.type}):a},A=function(a,b){var a=y(a),e=this,c=a.type,x=!1,h,g,z=function(){s(e,["writestart","progress","write","writeend"])},f=function(){if(x||!h)h=(d.URL||d.webkitURL||d).createObjectURL(a);g?g.location.href=h:d.open(h,"_blank")===k&&"undefined"!==typeof safari&&(d.location.href=h);e.readyState=e.DONE;z();r(h)},n=function(a){return function(){if(e.readyState!==
e.DONE)return a.apply(this,arguments)}},i={create:!0,exclusive:!1},j;e.readyState=e.INIT;b||(b="download");if(D)h=(d.URL||d.webkitURL||d).createObjectURL(a),o.href=h,o.download=b,c=v.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!1,d,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(c),e.readyState=e.DONE,z(),r(h);else{d.chrome&&(c&&"application/octet-stream"!==c)&&(j=a.slice||a.webkitSlice,a=j.call(a,0,a.size,"application/octet-stream"),x=!0);p&&"download"!==b&&(b+=".download");if("application/octet-stream"===
c||p)g=d;w?(q+=a.size,w(d.TEMPORARY,q,n(function(c){c.root.getDirectory("saved",i,n(function(c){var d=function(){c.getFile(b,i,n(function(b){b.createWriter(n(function(c){c.onwriteend=function(a){g.location.href=b.toURL();e.readyState=e.DONE;s(e,"writeend",a);r(b)};c.onerror=function(){var a=c.error;a.code!==a.ABORT_ERR&&f()};["writestart","progress","write","abort"].forEach(function(a){c["on"+a]=e["on"+a]});c.write(a);e.abort=function(){c.abort();e.readyState=e.DONE};e.readyState=e.WRITING}),f)}),
f)};c.getFile(b,{create:false},n(function(a){a.remove();d()}),n(function(a){a.code===a.NOT_FOUND_ERR?d():f()}))}),f)}),f)):f()}},i=A.prototype;"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?j=function(a,b){return navigator.msSaveOrOpenBlob(y(a),b)}:(i.abort=function(){this.readyState=this.DONE;s(this,"abort")},i.readyState=i.INIT=0,i.WRITING=1,i.DONE=2,i.error=i.onwritestart=i.onprogress=i.onwrite=i.onabort=i.onerror=i.onwriteend=null,j=function(a,b){return new A(a,b)})}var t=function(a,
b){var e="*"===a.filename&&"*"!==a.title&&a.title!==k?a.title:a.filename;-1!==e.indexOf("*")&&(e=e.replace("*",g("title").text()));e=e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,"");return b===k||!0===b?e+a.extension:e},F=function(a){a=a.title;return-1!==a.indexOf("*")?a.replace("*",g("title").text()):a},u=function(a){return a.newline?a.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},B=function(a,b){for(var e=u(b),c=a.buttons.exportData(b.exportOptions),d=b.fieldBoundary,h=b.fieldSeparator,
f=RegExp(d,"g"),g=b.escapeChar!==k?b.escapeChar:"\\",i=function(a){for(var b="",c=0,e=a.length;c<e;c++)0<c&&(b+=h),b+=d?d+(""+a[c]).replace(f,g+d)+d:a[c];return b},n=b.header?i(c.header)+e:"",j=b.footer?e+i(c.footer):"",l=[],m=0,o=c.body.length;m<o;m++)l.push(i(c.body[m]));return{str:n+l.join(e)+j,rows:l.length}},C=function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")},m={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\t<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\t<Default Extension="xml" ContentType="application/xml"/>\t<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\t<Default Extension="jpeg" ContentType="image/jpeg"/>\t<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\t<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>',
"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\t<fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/>\t<workbookPr showInkAnnotation="0" autoCompressPictures="0"/>\t<bookViews>\t\t<workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/>\t</bookViews>\t<sheets>\t\t<sheet name="Sheet1" sheetId="1" r:id="rId1"/>\t</sheets></workbook>',
"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">\t<sheetData>\t\t__DATA__\t</sheetData></worksheet>'};l.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",
text:function(a){return a.i18n("buttons.copy","Copy")},action:function(a,b,d,c){a=B(b,c);c=a.str;d=g("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});c=g("<textarea readonly/>").val(c).appendTo(d);if(f.queryCommandSupported("copy")){d.appendTo("body");c[0].focus();c[0].select();try{f.execCommand("copy");d.remove();b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),b.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},
a.rows),2E3);return}catch(i){}}a=g("<span>"+b.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(d);b.buttons.info(b.i18n("buttons.copyTitle","Copy to clipboard"),a,0);c[0].focus();c[0].select();var h=g(a).closest(".dt-button-info"),j=function(){h.off("click.buttons-copy");g(f).off(".buttons-copy");b.buttons.info(!1)};h.on("click.buttons-copy",j);g(f).on("keydown.buttons-copy",
function(a){27===a.keyCode&&j()}).on("copy.buttons-copy cut.buttons-copy",function(){j()})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1};l.ext.buttons.csvHtml5={className:"buttons-csv buttons-html5",available:function(){return d.FileReader!==k&&d.Blob},text:function(a){return a.i18n("buttons.csv","CSV")},action:function(a,b,d,c){u(c);a=B(b,c).str;b=c.charset;!1!==b?(b||(b=f.characterSet||f.charset),b&&(b=";charset="+b)):b="";j(new Blob([a],{type:"text/csv"+b}),t(c))},
filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1};l.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return d.FileReader!==k&&d.JSZip!==k&&!C()},text:function(a){return a.i18n("buttons.excel","Excel")},action:function(a,b,e,c){a="";b=b.buttons.exportData(c.exportOptions);e=function(a){for(var b=[],c=0,d=a.length;c<d;c++){if(null===a[c]||a[c]===k)a[c]="";b.push("number"===typeof a[c]||
a[c].match&&a[c].match(/^-?[0-9\.]+$/)&&"0"!==a[c].charAt(0)?'<c t="n"><v>'+a[c]+"</v></c>":'<c t="inlineStr"><is><t>'+(!a[c].replace?a[c]:a[c].replace(/&(?!amp;)/g,"&amp;").replace(/[\x00-\x1F\x7F-\x9F]/g,""))+"</t></is></c>")}return"<row>"+b.join("")+"</row>"};c.header&&(a+=e(b.header));for(var f=0,h=b.body.length;f<h;f++)a+=e(b.body[f]);c.footer&&(a+=e(b.footer));var b=new d.JSZip,e=b.folder("_rels"),f=b.folder("xl"),h=b.folder("xl/_rels"),g=b.folder("xl/worksheets");b.file("[Content_Types].xml",
m["[Content_Types].xml"]);e.file(".rels",m["_rels/.rels"]);f.file("workbook.xml",m["xl/workbook.xml"]);h.file("workbook.xml.rels",m["xl/_rels/workbook.xml.rels"]);g.file("sheet1.xml",m["xl/worksheets/sheet1.xml"].replace("__DATA__",a));j(b.generate({type:"blob"}),t(c))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1};l.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return d.FileReader!==k&&d.pdfMake},text:function(a){return a.i18n("buttons.pdf",
"PDF")},action:function(a,b,e,c){u(c);a=b.buttons.exportData(c.exportOptions);b=[];c.header&&b.push(g.map(a.header,function(a){return{text:"string"===typeof a?a:a+"",style:"tableHeader"}}));for(var f=0,e=a.body.length;f<e;f++)b.push(g.map(a.body[f],function(a){return{text:"string"===typeof a?a:a+"",style:f%2?"tableBodyEven":"tableBodyOdd"}}));c.footer&&b.push(g.map(a.footer,function(a){return{text:"string"===typeof a?a:a+"",style:"tableFooter"}}));a={pageSize:c.pageSize,pageOrientation:c.orientation,
content:[{table:{headerRows:1,body:b},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};c.message&&a.content.unshift({text:c.message,style:"message",margin:[0,0,0,12]});c.title&&a.content.unshift({text:F(c,!1),style:"title",margin:[0,0,
0,12]});c.customize&&c.customize(a);a=d.pdfMake.createPdf(a);"open"===c.download&&!C()?a.open():a.getBuffer(function(a){a=new Blob([a],{type:"application/pdf"});j(a,t(c))})},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,message:null,customize:null,download:"download"};return l.Buttons});
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(c){return d(c,window,document)}):"object"===typeof exports?module.exports=function(c,a){c||(c=window);if(!a||!a.fn.dataTable)a=require("datatables.net")(c,a).$;a.fn.dataTable.Buttons||require("datatables.net-buttons")(c,a);return d(a,c,c.document)}:d(jQuery,window,document)})(function(d,c,a){var h=d.fn.dataTable,f=a.createElement("a");h.ext.buttons.print={className:"buttons-print",
text:function(d){return d.i18n("buttons.print","Print")},action:function(a,b,i,e){a=b.buttons.exportData(e.exportOptions);i=function(a,b){for(var d="<tr>",c=0,e=a.length;c<e;c++)d+="<"+b+">"+a[c]+"</"+b+">";return d+"</tr>"};b='<table class="'+b.table().node().className+'">';e.header&&(b+="<thead>"+i(a.header,"th")+"</thead>");for(var b=b+"<tbody>",j=0,h=a.body.length;j<h;j++)b+=i(a.body[j],"td");b+="</tbody>";e.footer&&(b+="<thead>"+i(a.footer,"th")+"</thead>");var g=c.open("",""),a=e.title.replace("*",
d("title").text());g.document.close();var k="<title>"+a+"</title>";d("style, link").each(function(){var a=k,b=d(this).clone()[0],c;"link"===b.nodeName.toLowerCase()&&(f.href=b.href,c=f.host,-1===c.indexOf("/")&&0!==f.pathname.indexOf("/")&&(c+="/"),b.href=f.protocol+"//"+c+f.pathname+f.search);k=a+b.outerHTML});d(g.document.head).html(k);d(g.document.body).html("<h1>"+a+"</h1><div>"+e.message+"</div>"+b);e.customize&&e.customize(g);setTimeout(function(){e.autoPrint&&(g.print(),g.close())},250)},title:"*",
message:"",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null};return h.Buttons});
/*!
 FixedHeader 3.1.0
 ©2009-2015 SpryMedia Ltd - datatables.net/license
*/

(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(g){return d(g,window,document)}):"object"===typeof exports?module.exports=function(g,h){g||(g=window);if(!h||!h.fn.dataTable)h=require("datatables.net")(g,h).$;return d(h,g,g.document)}:d(jQuery,window,document)})(function(d,g,h,k){var j=d.fn.dataTable,l=0,i=function(b,a){if(!(this instanceof i))throw"FixedHeader must be initialised with the 'new' keyword.";!0===a&&(a={});b=new j.Api(b);this.c=d.extend(!0,
{},i.defaults,a);this.s={dt:b,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:d(g).height(),visible:!0},headerMode:null,footerMode:null,autoWidth:b.settings()[0].oFeatures.bAutoWidth,namespace:".dtfc"+l++,scrollLeft:{header:-1,footer:-1},enable:!0};this.dom={floatingHeader:null,thead:d(b.table().header()),tbody:d(b.table().body()),tfoot:d(b.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,
placeholder:null}};this.dom.header.host=this.dom.thead.parent();this.dom.footer.host=this.dom.tfoot.parent();var e=b.settings()[0];if(e._fixedHeader)throw"FixedHeader already initialised on table "+e.nTable.id;e._fixedHeader=this;this._constructor()};d.extend(i.prototype,{enable:function(b){this.s.enable=b;this.c.header&&this._modeChange("in-place","header",!0);this.c.footer&&this.dom.tfoot.length&&this._modeChange("in-place","footer",!0);this.update()},headerOffset:function(b){b!==k&&(this.c.headerOffset=
b,this.update());return this.c.headerOffset},footerOffset:function(b){b!==k&&(this.c.footerOffset=b,this.update());return this.c.footerOffset},update:function(){this._positions();this._scroll(!0)},_constructor:function(){var b=this,a=this.s.dt;d(g).on("scroll"+this.s.namespace,function(){b._scroll()}).on("resize"+this.s.namespace,function(){b.s.position.windowHeight=d(g).height();b.update()});a.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc",function(){b.update()});a.on("destroy.dtfc",
function(){a.off(".dtfc");d(g).off(b.s.namespace)});this._positions();this._scroll()},_clone:function(b,a){var e=this.s.dt,c=this.dom[b],f="header"===b?this.dom.thead:this.dom.tfoot;!a&&c.floating?c.floating.removeClass("fixedHeader-floating fixedHeader-locked"):(c.floating&&(c.placeholder.remove(),c.floating.children().detach(),c.floating.remove()),c.floating=d(e.table().node().cloneNode(!1)).removeAttr("id").append(f).appendTo("body"),c.placeholder=f.clone(!1),c.host.append(c.placeholder),this._matchWidths(c.placeholder,
c.floating))},_matchWidths:function(b,a){var e=function(c){var f=d(c,b).map(function(){return d(this).width()}).toArray();d(c,a).each(function(a){d(this).width(f[a]).css("min-width",f[a])})};e("th");e("td")},_unsize:function(b){var a=this.dom[b].floating;a&&("footer"===b||"header"===b&&!this.s.autoWidth)&&d("th, td",a).css("width","")},_horizontal:function(b,a){var e=this.dom[b],c=this.s.position,f=this.s.scrollLeft;e.floating&&f[b]!==a&&(e.floating.css("left",c.left-a),f[b]=a)},_modeChange:function(b,
a,e){var c=this.dom[a],f=this.s.position;if("in-place"===b){if(c.placeholder&&(c.placeholder.remove(),c.placeholder=null),this._unsize(a),c.host.append("header"===a?this.dom.thead:this.dom.tfoot),c.floating)c.floating.remove(),c.floating=null}else"in"===b?(this._clone(a,e),c.floating.addClass("fixedHeader-floating").css("header"===a?"top":"bottom",this.c[a+"Offset"]).css("left",f.left+"px").css("width",f.width+"px"),"footer"===a&&c.floating.css("top","")):"below"===b?(this._clone(a,e),c.floating.addClass("fixedHeader-locked").css("top",
f.tfootTop-f.theadHeight).css("left",f.left+"px").css("width",f.width+"px")):"above"===b&&(this._clone(a,e),c.floating.addClass("fixedHeader-locked").css("top",f.tbodyTop).css("left",f.left+"px").css("width",f.width+"px"));this.s.scrollLeft.header=-1;this.s.scrollLeft.footer=-1;this.s[a+"Mode"]=b},_positions:function(){var b=this.s.dt.table(),a=this.s.position,e=this.dom,b=d(b.node()),c=b.children("thead"),f=b.children("tfoot"),e=e.tbody;a.visible=b.is(":visible");a.width=b.outerWidth();a.left=b.offset().left;
a.theadTop=c.offset().top;a.tbodyTop=e.offset().top;a.theadHeight=a.tbodyTop-a.theadTop;f.length?(a.tfootTop=f.offset().top,a.tfootBottom=a.tfootTop+f.outerHeight(),a.tfootHeight=a.tfootBottom-a.tfootTop):(a.tfootTop=a.tbodyTop+e.outerHeight(),a.tfootBottom=a.tfootTop,a.tfootHeight=a.tfootTop)},_scroll:function(b){var a=d(h).scrollTop(),e=d(h).scrollLeft(),c=this.s.position,f;if(this.s.enable&&(this.c.header&&(f=!c.visible||a<=c.theadTop-this.c.headerOffset?"in-place":a<=c.tfootTop-c.theadHeight-
this.c.headerOffset?"in":"below",(b||f!==this.s.headerMode)&&this._modeChange(f,"header",b),this._horizontal("header",e)),this.c.footer&&this.dom.tfoot.length))a=!c.visible||a+c.windowHeight>=c.tfootBottom+this.c.footerOffset?"in-place":c.windowHeight+a>c.tbodyTop+c.tfootHeight+this.c.footerOffset?"in":"above",(b||a!==this.s.footerMode)&&this._modeChange(a,"footer",b),this._horizontal("footer",e)}});i.version="3.1.0";i.defaults={header:!0,footer:!1,headerOffset:0,footerOffset:0};d.fn.dataTable.FixedHeader=
i;d.fn.DataTable.FixedHeader=i;d(h).on("init.dt.dtb",function(b,a){if("dt"===b.namespace){var e=a.oInit.fixedHeader||j.defaults.fixedHeader;e&&!a._fixedHeader&&new i(a,e)}});j.Api.register("fixedHeader()",function(){});j.Api.register("fixedHeader.adjust()",function(){return this.iterator("table",function(b){(b=b._fixedHeader)&&b.update()})});j.Api.register("fixedHeader.enable()",function(b){return this.iterator("table",function(a){(a=a._fixedHeader)&&a.enable(b!==k?b:!0)})});j.Api.register("fixedHeader.disable()",
function(){return this.iterator("table",function(b){(b=b._fixedHeader)&&b.enable(!1)})});d.each(["header","footer"],function(b,a){j.Api.register("fixedHeader."+a+"Offset()",function(b){var c=this.context;return b===k?c.length&&c[0]._fixedHeader?c[0]._fixedHeader[a+"Offset"]():k:this.iterator("table",function(c){if(c=c._fixedHeader)c[a+"Offset"](b)})})});return i});
/*!
 KeyTable 2.1.0
 ©2009-2015 SpryMedia Ltd - datatables.net/license
*/

(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(k){return e(k,window,document)}):"object"===typeof exports?module.exports=function(k,j){k||(k=window);if(!j||!j.fn.dataTable)j=require("datatables.net")(k,j).$;return e(j,k,k.document)}:e(jQuery,window,document)})(function(e,k,j,n){var g=e.fn.dataTable,l=function(a,b){if(!g.versionCheck||!g.versionCheck("1.10.8"))throw"KeyTable requires DataTables 1.10.8 or newer";this.c=e.extend(!0,{},g.defaults.keyTable,
l.defaults,b);this.s={dt:new g.Api(a),enable:!0};this.dom={};var d=this.s.dt.settings()[0],c=d.keytable;if(c)return c;d.keytable=this;this._constructor()};e.extend(l.prototype,{blur:function(){this._blur()},enable:function(a){this.s.enable=a},focus:function(a,b){this._focus(this.s.dt.cell(a,b))},focused:function(a){if(!this.s.lastFocus)return!1;var b=this.s.lastFocus.index();return a.row===b.row&&a.column===b.column},_constructor:function(){this._tabInput();var a=this,b=this.s.dt,d=e(b.table().node());
"static"===d.css("position")&&d.css("position","relative");e(b.table().body()).on("click.keyTable","th, td",function(){if(!1!==a.s.enable){var c=b.cell(this);c.any()&&a._focus(c)}});e(j.body).on("keydown.keyTable",function(b){a._key(b)});if(this.c.blurable)e(j.body).on("click.keyTable",function(c){e(c.target).parents(".dataTables_filter").length&&a._blur();e(c.target).parents().filter(b.table().container()).length||e(c.target).parents("div.DTE").length||a._blur()});if(this.c.editor)b.on("key.kt",
function(b,d,e,h,i){a._editor(e,i)});if(b.settings()[0].oFeatures.bStateSave)b.on("stateSaveParams.keyTable",function(b,d,e){e.keyTable=a.s.lastFocus?a.s.lastFocus.index():null});b.on("destroy.keyTable",function(){b.off(".keyTable");e(b.table().body()).off("click.keyTable","th, td");e(j.body).off("keydown.keyTable").off("click.keyTable")});(d=b.state.loaded())&&d.keyTable?b.cell(d.keyTable).focus():this.c.focus&&b.cell(this.c.focus).focus()},_blur:function(){if(this.s.enable&&this.s.lastFocus){var a=
this.s.lastFocus;e(a.node()).removeClass(this.c.className);this.s.lastFocus=null;this._emitEvent("key-blur",[this.s.dt,a])}},_columns:function(){var a=this.s.dt,b=a.columns(this.c.columns).indexes(),d=[];a.columns(":visible").every(function(a){-1!==b.indexOf(a)&&d.push(a)});return d},_editor:function(a,b){var d=this.s.dt,c=this.c.editor;b.stopPropagation();c.inline(this.s.lastFocus.index());var f=e("div.DTE input");f.length&&f[0].select();d.keys.enable("navigation-only");d.one("key-blur.editor",function(){c.displayed()&&
c.submit()});c.one("close",function(){d.keys.enable(!0);d.off("key-blur.editor")})},_emitEvent:function(a,b){this.s.dt.iterator("table",function(d){e(d.nTable).triggerHandler(a,b)})},_focus:function(a,b){var d=this,c=this.s.dt,f=c.page.info(),m=this.s.lastFocus;if(this.s.enable){if("number"!==typeof a){var h=a.index(),b=h.column,a=c.rows({filter:"applied",order:"applied"}).indexes().indexOf(h.row);f.serverSide&&(a+=f.start)}if(-1!==f.length&&(a<f.start||a>=f.start+f.length))c.one("draw",function(){d._focus(a,
b)}).page(Math.floor(a/f.length)).draw(!1);else if(-1!==e.inArray(b,this._columns())){f.serverSide&&(a-=f.start);f=c.cell(":eq("+a+")",b,{search:"applied"});if(m){if(m.node()===f.node())return;this._blur()}m=e(f.node());m.addClass(this.c.className);this._scroll(e(k),e(j.body),m,"offset");h=c.table().body().parentNode;h!==c.table().header().parentNode&&(h=e(h.parentNode),this._scroll(h,h,m,"position"));this.s.lastFocus=f;this._emitEvent("key-focus",[this.s.dt,f]);c.state.save()}}},_key:function(a){if(this.s.enable&&
!(0===a.keyCode||a.ctrlKey||a.metaKey||a.altKey)){var b=this.s.lastFocus;if(b){var d=this,c=this.s.dt;if(!(this.c.keys&&-1===e.inArray(a.keyCode,this.c.keys)))switch(a.keyCode){case 9:this._shift(a,a.shiftKey?"left":"right",!0);break;case 27:this.s.blurable&&!0===this.s.enable&&this._blur();break;case 33:case 34:a.preventDefault();var f=c.cells({page:"current"}).nodes().indexOf(b.node());c.one("draw",function(){var a=c.cells({page:"current"}).nodes();d._focus(c.cell(f<a.length?a[f]:a[a.length-1]))}).page(33===
a.keyCode?"previous":"next").draw(!1);break;case 35:case 36:a.preventDefault();b=c.cells({page:"current"}).indexes();this._focus(c.cell(b[35===a.keyCode?b.length-1:0]));break;case 37:this._shift(a,"left");break;case 38:this._shift(a,"up");break;case 39:this._shift(a,"right");break;case 40:this._shift(a,"down");break;default:!0===this.s.enable&&this._emitEvent("key",[c,a.keyCode,this.s.lastFocus,a])}}}},_scroll:function(a,b,d,c){var c=d[c](),f=d.outerHeight(),d=d.outerWidth(),e=b.scrollTop(),h=b.scrollLeft(),
i=a.height(),a=a.width();c.top<e&&b.scrollTop(c.top);c.left<h&&b.scrollLeft(c.left);c.top+f>e+i&&b.scrollTop(c.top+f-i);c.left+d>h+a&&b.scrollLeft(c.left+d-a)},_shift:function(a,b,d){var c=this.s.dt,f=c.page.info(),j=f.recordsDisplay,h=this.s.lastFocus,i=this._columns();if(h){var g=c.rows({filter:"applied",order:"applied"}).indexes().indexOf(h.index().row);f.serverSide&&(g+=f.start);c=c.columns(i).indexes().indexOf(h.index().column);f=i[c];"right"===b?c>=i.length-1?(g++,f=i[0]):f=i[c+1]:"left"===
b?0===c?(g--,f=i[i.length-1]):f=i[c-1]:"up"===b?g--:"down"===b&&g++;0<=g&&g<j&&-1!==e.inArray(f,i)?(a.preventDefault(),this._focus(g,f)):!d||!this.c.blurable?a.preventDefault():this._blur()}},_tabInput:function(){var a=this,b=this.s.dt,d=null!==this.c.tabIndex?this.c.tabIndex:b.settings()[0].iTabIndex;if(-1!=d)e('<div><input type="text" tabindex="'+d+'"/></div>').css({position:"absolute",height:1,width:0,overflow:"hidden"}).insertBefore(b.table().node()).children().on("focus",function(){a._focus(b.cell(":eq(0)",
{page:"current"}))})}});l.defaults={blurable:!0,className:"focus",columns:"",editor:null,focus:null,keys:null,tabIndex:null};l.version="2.1.0";e.fn.dataTable.KeyTable=l;e.fn.DataTable.KeyTable=l;g.Api.register("cell.blur()",function(){return this.iterator("table",function(a){a.keytable&&a.keytable.blur()})});g.Api.register("cell().focus()",function(){return this.iterator("cell",function(a,b,d){a.keytable&&a.keytable.focus(b,d)})});g.Api.register("keys.disable()",function(){return this.iterator("table",
function(a){a.keytable&&a.keytable.enable(!1)})});g.Api.register("keys.enable()",function(a){return this.iterator("table",function(b){b.keytable&&b.keytable.enable(a===n?!0:a)})});g.ext.selector.cell.push(function(a,b,d){var b=b.focused,a=a.keytable,c=[];if(!a||b===n)return d;for(var f=0,e=d.length;f<e;f++)(!0===b&&a.focused(d[f])||!1===b&&!a.focused(d[f]))&&c.push(d[f]);return c});e(j).on("preInit.dt.dtk",function(a,b){if("dt"===a.namespace){var d=b.oInit.keys,c=g.defaults.keys;if(d||c)c=e.extend({},
d,c),!1!==d&&new l(b,c)}});return l});
/*!
 Responsive 2.0.0
 2014-2015 SpryMedia Ltd - datatables.net/license
*/

(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(l){return c(l,window,document)}):"object"===typeof exports?module.exports=function(l,k){l||(l=window);if(!k||!k.fn.dataTable)k=require("datatables.net")(l,k).$;return c(k,l,l.document)}:c(jQuery,window,document)})(function(c,l,k,p){var n=c.fn.dataTable,j=function(a,b){if(!n.versionCheck||!n.versionCheck("1.10.3"))throw"DataTables Responsive requires DataTables 1.10.3 or newer";this.s={dt:new n.Api(a),columns:[],
current:[]};this.s.dt.settings()[0].responsive||(b&&"string"===typeof b.details&&(b.details={type:b.details}),this.c=c.extend(!0,{},j.defaults,n.defaults.responsive,b),a.responsive=this,this._constructor())};c.extend(j.prototype,{_constructor:function(){var a=this,b=this.s.dt,d=b.settings()[0];b.settings()[0]._responsive=this;c(l).on("resize.dtr orientationchange.dtr",n.util.throttle(function(){a._resize()}));d.oApi._fnCallbackReg(d,"aoRowCreatedCallback",function(e){-1!==c.inArray(!1,a.s.current)&&
c("td, th",e).each(function(e){e=b.column.index("toData",e);!1===a.s.current[e]&&c(this).css("display","none")})});b.on("destroy.dtr",function(){b.off(".dtr");c(b.table().body()).off(".dtr");c(l).off("resize.dtr orientationchange.dtr");c.each(a.s.current,function(e,b){!1===b&&a._setColumnVis(e,!0)})});this.c.breakpoints.sort(function(a,b){return a.width<b.width?1:a.width>b.width?-1:0});this._classLogic();this._resizeAuto();d=this.c.details;!1!==d.type&&(a._detailsInit(),b.on("column-visibility.dtr",
function(){a._classLogic();a._resizeAuto();a._resize()}),b.on("draw.dtr",function(){a._redrawChildren()}),c(b.table().node()).addClass("dtr-"+d.type));b.on("column-reorder.dtr",function(b,d,c){if(c.drop){a._classLogic();a._resizeAuto();a._resize()}});this._resize()},_columnsVisiblity:function(a){var b=this.s.dt,d=this.s.columns,e,f,h=d.map(function(a,b){return{columnIdx:b,priority:a.priority}}).sort(function(a,b){return a.priority!==b.priority?a.priority-b.priority:a.columnIdx-b.columnIdx}),g=c.map(d,
function(b){return b.auto&&null===b.minWidth?!1:!0===b.auto?"-":-1!==c.inArray(a,b.includeIn)}),m=0;e=0;for(f=g.length;e<f;e++)!0===g[e]&&(m+=d[e].minWidth);e=b.settings()[0].oScroll;e=e.sY||e.sX?e.iBarWidth:0;b=b.table().container().offsetWidth-e-m;e=0;for(f=g.length;e<f;e++)d[e].control&&(b-=d[e].minWidth);m=!1;e=0;for(f=h.length;e<f;e++){var i=h[e].columnIdx;"-"===g[i]&&(!d[i].control&&d[i].minWidth)&&(m||0>b-d[i].minWidth?(m=!0,g[i]=!1):g[i]=!0,b-=d[i].minWidth)}h=!1;e=0;for(f=d.length;e<f;e++)if(!d[e].control&&
!d[e].never&&!g[e]){h=!0;break}e=0;for(f=d.length;e<f;e++)d[e].control&&(g[e]=h);-1===c.inArray(!0,g)&&(g[0]=!0);return g},_classLogic:function(){var a=this,b=this.c.breakpoints,d=this.s.dt,e=d.columns().eq(0).map(function(a){var b=this.column(a),e=b.header().className,a=d.settings()[0].aoColumns[a].responsivePriority;a===p&&(a=c(b.header).data("priority")!==p?1*c(b.header).data("priority"):1E4);return{className:e,includeIn:[],auto:!1,control:!1,never:e.match(/\bnever\b/)?!0:!1,priority:a}}),f=function(a,
b){var d=e[a].includeIn;-1===c.inArray(b,d)&&d.push(b)},h=function(d,c,i,h){if(i)if("max-"===i){h=a._find(c).width;c=0;for(i=b.length;c<i;c++)b[c].width<=h&&f(d,b[c].name)}else if("min-"===i){h=a._find(c).width;c=0;for(i=b.length;c<i;c++)b[c].width>=h&&f(d,b[c].name)}else{if("not-"===i){c=0;for(i=b.length;c<i;c++)-1===b[c].name.indexOf(h)&&f(d,b[c].name)}}else e[d].includeIn.push(c)};e.each(function(a,e){for(var d=a.className.split(" "),f=!1,j=0,l=d.length;j<l;j++){var k=c.trim(d[j]);if("all"===k){f=
!0;a.includeIn=c.map(b,function(a){return a.name});return}if("none"===k||a.never){f=!0;return}if("control"===k){f=!0;a.control=!0;return}c.each(b,function(a,b){var c=b.name.split("-"),d=k.match(RegExp("(min\\-|max\\-|not\\-)?("+c[0]+")(\\-[_a-zA-Z0-9])?"));d&&(f=!0,d[2]===c[0]&&d[3]==="-"+c[1]?h(e,b.name,d[1],d[2]+d[3]):d[2]===c[0]&&!d[3]&&h(e,b.name,d[1],d[2]))})}f||(a.auto=!0)});this.s.columns=e},_detailsDisplay:function(a,b){var d=this,e=this.s.dt,f=this.c.details.display(a,b,function(){return d.c.details.renderer(e,
a[0],d._detailsObj(a[0]))});(!0===f||!1===f)&&c(e.table().node()).triggerHandler("responsive-display.dt",[e,a,f,b])},_detailsInit:function(){var a=this,b=this.s.dt,d=this.c.details;"inline"===d.type&&(d.target="td:first-child");b.on("draw.dtr",function(){a._tabIndexes()});a._tabIndexes();c(b.table().body()).on("keyup.dtr","td",function(a){a.keyCode===13&&c(this).data("dtr-keyboard")&&c(this).click()});var e=d.target,d="string"===typeof e?e:"td";c(b.table().body()).on("mousedown.dtr",d,function(a){a.preventDefault()}).on("click.dtr",
d,function(){if(c(b.table().node()).hasClass("collapsed")&&b.row(c(this).closest("tr")).length){if(typeof e==="number"){var d=e<0?b.columns().eq(0).length+e:e;if(b.cell(this).index().column!==d)return}d=b.row(c(this).closest("tr"));a._detailsDisplay(d,false)}})},_detailsObj:function(a){var b=this,d=this.s.dt;return c.map(this.s.columns,function(c,f){if(!c.never)return{title:d.settings()[0].aoColumns[f].sTitle,data:d.cell(a,f).render(b.c.orthogonal),hidden:d.column(f).visible()&&!b.s.current[f]}})},
_find:function(a){for(var b=this.c.breakpoints,d=0,c=b.length;d<c;d++)if(b[d].name===a)return b[d]},_redrawChildren:function(){var a=this,b=this.s.dt;b.rows({page:"current"}).iterator("row",function(c,e){b.row(e);a._detailsDisplay(b.row(e),!0)})},_resize:function(){var a=this,b=this.s.dt,d=c(l).width(),e=this.c.breakpoints,f=e[0].name,h=this.s.columns,g,m=this.s.current.slice();for(g=e.length-1;0<=g;g--)if(d<=e[g].width){f=e[g].name;break}var i=this._columnsVisiblity(f);this.s.current=i;e=!1;g=0;
for(d=h.length;g<d;g++)if(!1===i[g]&&!h[g].never){e=!0;break}c(b.table().node()).toggleClass("collapsed",e);var j=!1;b.columns().eq(0).each(function(b,c){i[c]!==m[c]&&(j=!0,a._setColumnVis(b,i[c]))});j&&this._redrawChildren()},_resizeAuto:function(){var a=this.s.dt,b=this.s.columns;if(this.c.auto&&-1!==c.inArray(!0,c.map(b,function(a){return a.auto}))){a.table().node();var d=a.table().node().cloneNode(!1),e=c(a.table().header().cloneNode(!1)).appendTo(d),f=c(a.table().body().cloneNode(!1)).appendTo(d),
h=a.columns().header().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display","table-cell");c(f).append(c(a.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display","");if(f=a.table().footer()){var f=c(f.cloneNode(!1)).appendTo(d),g=a.columns().header().filter(function(b){return a.column(b).visible()}).to$().clone(!1).css("display","table-cell");c("<tr/>").append(g).appendTo(f)}c("<tr/>").append(h).appendTo(e);"inline"===this.c.details.type&&c(d).addClass("dtr-inline collapsed");
d=c("<div/>").css({width:1,height:1,overflow:"hidden"}).append(d);d.insertBefore(a.table().node());h.each(function(c){c=a.column.index("fromVisible",c);b[c].minWidth=this.offsetWidth||0});d.remove()}},_setColumnVis:function(a,b){var d=this.s.dt,e=b?"":"none";c(d.column(a).header()).css("display",e);c(d.column(a).footer()).css("display",e);d.column(a).nodes().to$().css("display",e)},_tabIndexes:function(){var a=this.s.dt,b=a.cells({page:"current"}).nodes().to$(),d=a.settings()[0],e=this.c.details.target;
b.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");c("number"===typeof e?":eq("+e+")":e,a.rows({page:"current"}).nodes()).attr("tabIndex",d.iTabIndex).data("dtr-keyboard",1)}});j.breakpoints=[{name:"desktop",width:Infinity},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}];j.display={childRow:function(a,b,d){if(b){if(c(a.node()).hasClass("parent"))return a.child(d(),"child").show(),!0}else{if(a.child.isShown())return a.child(!1),
c(a.node()).removeClass("parent"),!1;a.child(d(),"child").show();c(a.node()).addClass("parent");return!0}},childRowImmediate:function(a,b,d){if(!b&&a.child.isShown()||!a.responsive.hasHidden())return a.child(!1),c(a.node()).removeClass("parent"),!1;a.child(d(),"child").show();c(a.node()).addClass("parent");return!0},modal:function(a){return function(b,d,e){if(d)c("div.dtr-modal-content").empty().append(e());else{var f=function(){h.remove();c(k).off("keypress.dtr")},h=c('<div class="dtr-modal"/>').append(c('<div class="dtr-modal-display"/>').append(c('<div class="dtr-modal-content"/>').append(e())).append(c('<div class="dtr-modal-close">&times;</div>').click(function(){f()}))).append(c('<div class="dtr-modal-background"/>').click(function(){f()})).appendTo("body");
a&&a.header&&h.find("div.dtr-modal-content").prepend("<h2>"+a.header(b)+"</h2>");c(k).on("keyup.dtr",function(a){27===a.keyCode&&(a.stopPropagation(),f())})}}}};j.defaults={breakpoints:j.breakpoints,auto:!0,details:{display:j.display.childRow,renderer:function(a,b,d){return(a=c.map(d,function(a,b){return a.hidden?'<li data-dtr-index="'+b+'"><span class="dtr-title">'+a.title+'</span> <span class="dtr-data">'+a.data+"</span></li>":""}).join(""))?c('<ul data-dtr-index="'+b+'"/>').append(a):!1},target:0,
type:"inline"},orthogonal:"display"};var o=c.fn.dataTable.Api;o.register("responsive()",function(){return this});o.register("responsive.index()",function(a){a=c(a);return{column:a.data("dtr-index"),row:a.parent().data("dtr-index")}});o.register("responsive.rebuild()",function(){return this.iterator("table",function(a){a._responsive&&a._responsive._classLogic()})});o.register("responsive.recalc()",function(){return this.iterator("table",function(a){a._responsive&&(a._responsive._resizeAuto(),a._responsive._resize())})});
o.register("responsive.hasHidden()",function(){var a=this.context[0];return a._responsive?-1!==c.inArray(!1,a._responsive.s.current):!1});j.version="2.0.0";c.fn.dataTable.Responsive=j;c.fn.DataTable.Responsive=j;c(k).on("init.dt.dtr",function(a,b){if("dt"===a.namespace&&(c(b.nTable).hasClass("responsive")||c(b.nTable).hasClass("dt-responsive")||b.oInit.responsive||n.defaults.responsive)){var d=b.oInit.responsive;!1!==d&&new j(b,c.isPlainObject(d)?d:{})}});return j});
/*!
 Bootstrap integration for DataTables' Responsive
 ©2015 SpryMedia Ltd - datatables.net/license
*/

(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net-bs","datatables.net-responsive"],function(a){return c(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net-bs")(a,b).$;b.fn.dataTable.Responsive||require("datatables.net-responsive")(a,b);return c(b,a,a.document)}:c(jQuery,window,document)})(function(c){var a=c.fn.dataTable,b=a.Responsive.display,f=b.modal;b.modal=function(a){return function(b,
d,e){c.fn.modal?d||(d=c('<div class="modal fade" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>'),a&&a.header&&d.find("div.modal-header").append('<h4 class="modal-title">'+a.header(b)+"</h4>"),d.find("div.modal-body").append(e()),d.appendTo("body").modal()):f(b,d,e)}};
return a.Responsive});
/*!
 Scroller 1.4.0
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/

(function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(g){return e(g,window,document)}):"object"===typeof exports?module.exports=function(g,i){g||(g=window);if(!i||!i.fn.dataTable)i=require("datatables.net")(g,i).$;return e(i,g,g.document)}:e(jQuery,window,document)})(function(e,g,i,l){var m=e.fn.dataTable,h=function(a,b){this instanceof h?(b===l&&(b={}),this.s={dt:e.fn.dataTable.Api(a).settings()[0],tableTop:0,tableBottom:0,redrawTop:0,redrawBottom:0,autoHeight:!0,
viewportRows:0,stateTO:null,drawTO:null,heights:{jump:null,page:null,virtual:null,scroll:null,row:null,viewport:null},topRowFloat:0,scrollDrawDiff:null,loaderVisible:!1},this.s=e.extend(this.s,h.oDefaults,b),this.s.heights.row=this.s.rowHeight,this.dom={force:i.createElement("div"),scroller:null,table:null,loader:null},this.s.dt.oScroller||(this.s.dt.oScroller=this,this._fnConstruct())):alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")};e.extend(h.prototype,{fnRowToPixels:function(a,
b,c){a=c?this._domain("virtualToPhysical",a*this.s.heights.row):this.s.baseScrollTop+(a-this.s.baseRowTop)*this.s.heights.row;return b||b===l?parseInt(a,10):a},fnPixelsToRow:function(a,b,c){var d=a-this.s.baseScrollTop,a=c?this._domain("physicalToVirtual",a)/this.s.heights.row:d/this.s.heights.row+this.s.baseRowTop;return b||b===l?parseInt(a,10):a},fnScrollToRow:function(a,b){var c=this,d=!1,f=this.fnRowToPixels(a),j=a-(this.s.displayBuffer-1)/2*this.s.viewportRows;0>j&&(j=0);if((f>this.s.redrawBottom||
f<this.s.redrawTop)&&this.s.dt._iDisplayStart!==j)d=!0,f=this.fnRowToPixels(a,!1,!0);"undefined"==typeof b||b?(this.s.ani=d,e(this.dom.scroller).animate({scrollTop:f},function(){setTimeout(function(){c.s.ani=!1},25)})):e(this.dom.scroller).scrollTop(f)},fnMeasure:function(a){this.s.autoHeight&&this._fnCalcRowHeight();var b=this.s.heights;b.viewport=e(this.dom.scroller).height();this.s.viewportRows=parseInt(b.viewport/b.row,10)+1;this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer;(a===
l||a)&&this.s.dt.oInstance.fnDraw(!1)},_fnConstruct:function(){var a=this;if(this.s.dt.oFeatures.bPaginate){this.dom.force.style.position="relative";this.dom.force.style.top="0px";this.dom.force.style.left="0px";this.dom.force.style.width="1px";this.dom.scroller=e("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0];this.dom.scroller.appendChild(this.dom.force);this.dom.scroller.style.position="relative";this.dom.table=e(">table",this.dom.scroller)[0];this.dom.table.style.position="absolute";
this.dom.table.style.top="0px";this.dom.table.style.left="0px";e(this.s.dt.nTableWrapper).addClass("DTS");this.s.loadingIndicator&&(this.dom.loader=e('<div class="dataTables_processing DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>").css("display","none"),e(this.dom.scroller.parentNode).css("position","relative").append(this.dom.loader));this.s.heights.row&&"auto"!=this.s.heights.row&&(this.s.autoHeight=!1);this.fnMeasure(!1);this.s.ingnoreScroll=!0;this.s.stateSaveThrottle=this.s.dt.oApi._fnThrottle(function(){a.s.dt.oApi._fnSaveState(a.s.dt)},
500);e(this.dom.scroller).on("scroll.DTS",function(){a._fnScroll.call(a)});e(this.dom.scroller).on("touchstart.DTS",function(){a._fnScroll.call(a)});this.s.dt.aoDrawCallback.push({fn:function(){a.s.dt.bInitialised&&a._fnDrawCallback.call(a)},sName:"Scroller"});e(g).on("resize.DTS",function(){a.fnMeasure(false);a._fnInfo()});var b=!0;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(c,d){if(b&&a.s.dt.oLoadedState){d.iScroller=a.s.dt.oLoadedState.iScroller;d.iScrollerTopRow=a.s.dt.oLoadedState.iScrollerTopRow;
b=false}else{d.iScroller=a.dom.scroller.scrollTop;d.iScrollerTopRow=a.s.topRowFloat}},"Scroller_State");this.s.dt.oLoadedState&&(this.s.topRowFloat=this.s.dt.oLoadedState.iScrollerTopRow||0);e(this.s.dt.nTable).on("init.dt",function(){a.fnMeasure()});this.s.dt.aoDestroyCallback.push({sName:"Scroller",fn:function(){e(g).off("resize.DTS");e(a.dom.scroller).off("touchstart.DTS scroll.DTS");e(a.s.dt.nTableWrapper).removeClass("DTS");e("div.DTS_Loading",a.dom.scroller.parentNode).remove();e(a.s.dt.nTable).off("init.dt");
a.dom.table.style.position="";a.dom.table.style.top="";a.dom.table.style.left=""}})}else this.s.dt.oApi._fnLog(this.s.dt,0,"Pagination must be enabled for Scroller")},_fnScroll:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d;if(!this.s.skip&&!this.s.ingnoreScroll)if(this.s.dt.bFiltered||this.s.dt.bSorted)this.s.lastScrollTop=0;else{this._fnInfo();clearTimeout(this.s.stateTO);this.s.stateTO=setTimeout(function(){a.s.dt.oApi._fnSaveState(a.s.dt)},250);if(c<this.s.redrawTop||c>
this.s.redrawBottom){var f=Math.ceil((this.s.displayBuffer-1)/2*this.s.viewportRows);Math.abs(c-this.s.lastScrollTop)>b.viewport||this.s.ani?(d=parseInt(this._domain("physicalToVirtual",c)/b.row,10)-f,this.s.topRowFloat=this._domain("physicalToVirtual",c)/b.row):(d=this.fnPixelsToRow(c)-f,this.s.topRowFloat=this.fnPixelsToRow(c,!1));0>=d?d=0:d+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(d=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength,0>d&&(d=0)):0!==d%2&&d++;if(d!=this.s.dt._iDisplayStart&&
(this.s.tableTop=e(this.s.dt.nTable).offset().top,this.s.tableBottom=e(this.s.dt.nTable).height()+this.s.tableTop,b=function(){if(a.s.scrollDrawReq===null)a.s.scrollDrawReq=c;a.s.dt._iDisplayStart=d;a.s.dt.oApi._fnDraw(a.s.dt)},this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(b,this.s.serverWait)):b(),this.dom.loader&&!this.s.loaderVisible))this.dom.loader.css("display","block"),this.s.loaderVisible=!0}this.s.lastScrollTop=c;this.s.stateSaveThrottle()}},_domain:function(a,
b){var c=this.s.heights,d;if(c.virtual===c.scroll)return b;var e=(c.scroll-c.viewport)/2,j=(c.virtual-c.viewport)/2;d=j/(e*e);if("virtualToPhysical"===a){if(b<j)return Math.pow(b/d,0.5);b=2*j-b;return 0>b?c.scroll:2*e-Math.pow(b/d,0.5)}if("physicalToVirtual"===a){if(b<e)return b*b*d;b=2*e-b;return 0>b?c.virtual:2*j-b*b*d}},_fnDrawCallback:function(){var a=this,b=this.s.heights,c=this.dom.scroller.scrollTop,d=e(this.s.dt.nTable).height(),f=this.s.dt._iDisplayStart,j=this.s.dt._iDisplayLength,h=this.s.dt.fnRecordsDisplay();
this.s.skip=!0;this._fnScrollForce();c=0===f?this.s.topRowFloat*b.row:f+j>=h?b.scroll-(h-this.s.topRowFloat)*b.row:this._domain("virtualToPhysical",this.s.topRowFloat*b.row);this.dom.scroller.scrollTop=c;this.s.baseScrollTop=c;this.s.baseRowTop=this.s.topRowFloat;var g=c-(this.s.topRowFloat-f)*b.row;0===f?g=0:f+j>=h&&(g=b.scroll-d);this.dom.table.style.top=g+"px";this.s.tableTop=g;this.s.tableBottom=d+this.s.tableTop;d=(c-this.s.tableTop)*this.s.boundaryScale;this.s.redrawTop=c-d;this.s.redrawBottom=
c+d;this.s.skip=!1;this.s.dt.oFeatures.bStateSave&&null!==this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.iScroller?((c=(this.s.dt.sAjaxSource||a.s.dt.ajax)&&!this.s.dt.oFeatures.bServerSide?!0:!1)&&2==this.s.dt.iDraw||!c&&1==this.s.dt.iDraw)&&setTimeout(function(){e(a.dom.scroller).scrollTop(a.s.dt.oLoadedState.iScroller);a.s.redrawTop=a.s.dt.oLoadedState.iScroller-b.viewport/2;setTimeout(function(){a.s.ingnoreScroll=!1},0)},0):a.s.ingnoreScroll=!1;setTimeout(function(){a._fnInfo.call(a)},
0);this.dom.loader&&this.s.loaderVisible&&(this.dom.loader.css("display","none"),this.s.loaderVisible=!1)},_fnScrollForce:function(){var a=this.s.heights;a.virtual=a.row*this.s.dt.fnRecordsDisplay();a.scroll=a.virtual;1E6<a.scroll&&(a.scroll=1E6);this.dom.force.style.height=a.scroll>this.s.heights.row?a.scroll+"px":this.s.heights.row+"px"},_fnCalcRowHeight:function(){var a=this.s.dt,b=a.nTable,c=b.cloneNode(!1),d=e("<tbody/>").appendTo(c),f=e('<div class="'+a.oClasses.sWrapper+' DTS"><div class="'+
a.oClasses.sScrollWrapper+'"><div class="'+a.oClasses.sScrollBody+'"></div></div></div>');for(e("tbody tr:lt(4)",b).clone().appendTo(d);3>e("tr",d).length;)d.append("<tr><td>&nbsp;</td></tr>");e("div."+a.oClasses.sScrollBody,f).append(c);f.appendTo(this.s.dt.nHolding||b.parentNode);this.s.heights.row=e("tr",d).eq(1).outerHeight();f.remove()},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var a=this.s.dt,b=a.oLanguage,c=this.dom.scroller.scrollTop,d=Math.floor(this.fnPixelsToRow(c,!1,this.s.ani)+
1),f=a.fnRecordsTotal(),h=a.fnRecordsDisplay(),c=Math.ceil(this.fnPixelsToRow(c+this.s.heights.viewport,!1,this.s.ani)),c=h<c?h:c,g=a.fnFormatNumber(d),i=a.fnFormatNumber(c),k=a.fnFormatNumber(f),l=a.fnFormatNumber(h),g=0===a.fnRecordsDisplay()&&a.fnRecordsDisplay()==a.fnRecordsTotal()?b.sInfoEmpty+b.sInfoPostFix:0===a.fnRecordsDisplay()?b.sInfoEmpty+" "+b.sInfoFiltered.replace("_MAX_",k)+b.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?b.sInfo.replace("_START_",g).replace("_END_",i).replace("_MAX_",
k).replace("_TOTAL_",l)+b.sInfoPostFix:b.sInfo.replace("_START_",g).replace("_END_",i).replace("_MAX_",k).replace("_TOTAL_",l)+" "+b.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+b.sInfoPostFix;(b=b.fnInfoCallback)&&(g=b.call(a.oInstance,a,d,c,f,h,g));a=a.aanFeatures.i;if("undefined"!=typeof a){d=0;for(f=a.length;d<f;d++)e(a[d]).html(g)}}}});h.defaults={trace:!1,rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:0.5,loadingIndicator:!1};h.oDefaults=h.defaults;h.version=
"1.4.0";"function"==typeof e.fn.dataTable&&"function"==typeof e.fn.dataTableExt.fnVersionCheck&&e.fn.dataTableExt.fnVersionCheck("1.10.0")?e.fn.dataTableExt.aoFeatures.push({fnInit:function(a){var b=a.oInit;new h(a,b.scroller||b.oScroller||{})},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.10.0 or greater - www.datatables.net/download");e(i).on("preInit.dt.dtscroller",function(a,b){if("dt"===a.namespace){var c=b.oInit.scroller,d=m.defaults.scroller;if(c||d)d=e.extend({},
c,d),!1!==c&&new h(b,d)}});e.fn.dataTable.Scroller=h;e.fn.DataTable.Scroller=h;var k=e.fn.dataTable.Api;k.register("scroller()",function(){return this});k.register("scroller().rowToPixels()",function(a,b,c){var d=this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnRowToPixels(a,b,c)});k.register("scroller().pixelsToRow()",function(a,b,c){var d=this.context;if(d.length&&d[0].oScroller)return d[0].oScroller.fnPixelsToRow(a,b,c)});k.register("scroller().scrollToRow()",function(a,b){this.iterator("table",
function(c){c.oScroller&&c.oScroller.fnScrollToRow(a,b)});return this});k.register("row().scrollTo()",function(a){var b=this;this.iterator("row",function(c,d){if(c.oScroller){var e=b.rows({order:"applied",search:"applied"}).indexes().indexOf(d);c.oScroller.fnScrollToRow(e,a)}});return this});k.register("scroller.measure()",function(a){this.iterator("table",function(b){b.oScroller&&b.oScroller.fnMeasure(a)});return this});return h});
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Component: Datatable
* 
*/


var handleDataTableButtons = function () {
    "use strict";
    0 !== $("#datatable-buttons").length && $("#datatable-buttons").DataTable({
        dom: "Bfrtip",
        buttons: [{extend: "copy", className: "btn-sm"}, {extend: "csv", className: "btn-sm"}, {
            extend: "excel",
            className: "btn-sm"
        }, {extend: "pdf", className: "btn-sm"}, {extend: "print", className: "btn-sm"}],
        responsive: !0
    })
}, TableManageButtons = function () {
    "use strict";
    return {
        init: function () {
            handleDataTableButtons()
        }
    }
}();
/*!
 * =============================================================
 * dropify v0.2.0 - Override your input files with style.
 * https://github.com/JeremyFagis/dropify
 *
 * (c) 2016 - Jeremy FAGIS <jeremy@fagis.fr> (http://fagis.fr)
 * =============================================================
 */


!function(i,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):i.Dropify=e(i.jQuery)}(this,function(i){function e(e,t){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var s={defaultFile:"",maxFileSize:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,showRemove:!0,showLoader:!0,showErrors:!0,errorsPosition:"overlay",allowedFormats:["portrait","square","landscape"],messages:{"default":"Drag and drop a file here or click",replace:"Drag and drop or click to replace",remove:"Remove",error:"Ooops, something wrong appended."},error:{fileSize:"The file size is too big ({{ value }} max).",minWidth:"The image width is too small ({{ value }}}px min).",maxWidth:"The image width is too big ({{ value }}}px max).",minHeight:"The image height is too small ({{ value }}}px min).",maxHeight:"The image height is too big ({{ value }}px max).",imageFormat:"The image format is not allowed ({{ value }} only)."},tpl:{wrap:'<div class="dropify-wrapper"></div>',loader:'<div class="dropify-loader"></div>',message:'<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>',preview:'<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',filename:'<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',clearButton:'<button type="button" class="dropify-clear">{{ remove }}</button>',errorLine:'<p class="dropify-error">{{ error }}</p>',errorsContainer:'<div class="dropify-errors-container"><ul></ul></div>'}};this.element=e,this.input=i(this.element),this.wrapper=null,this.preview=null,this.filenameWrapper=null,this.settings=i.extend(!0,s,t,this.input.data()),this.imgFileExtensions=["png","jpg","jpeg","gif","bmp"],this.errorsEvent=i.Event("dropify.errors"),this.isDisabled=!1,this.isInit=!1,this.file={object:null,name:null,size:null,width:null,height:null,type:null},Array.isArray(this.settings.allowedFormats)||(this.settings.allowedFormats=this.settings.allowedFormats.split(" ")),this.onChange=this.onChange.bind(this),this.clearElement=this.clearElement.bind(this),this.onFileReady=this.onFileReady.bind(this),this.translateMessages(),this.createElements(),this.setContainerSize(),this.errorsEvent.errors=[],this.input.on("change",this.onChange)}}var t="dropify";return e.prototype.onChange=function(){this.resetPreview(),this.readFile(this.element)},e.prototype.createElements=function(){this.isInit=!0,this.input.wrap(i(this.settings.tpl.wrap)),this.wrapper=this.input.parent();var e=i(this.settings.tpl.message).insertBefore(this.input);i(this.settings.tpl.errorLine).appendTo(e),this.isTouchDevice()===!0&&this.wrapper.addClass("touch-fallback"),this.input.attr("disabled")&&(this.isDisabled=!0,this.wrapper.addClass("disabled")),this.settings.showLoader===!0&&(this.loader=i(this.settings.tpl.loader),this.loader.insertBefore(this.input)),this.preview=i(this.settings.tpl.preview),this.preview.insertAfter(this.input),this.isDisabled===!1&&this.settings.showRemove===!0&&(this.clearButton=i(this.settings.tpl.clearButton),this.clearButton.insertAfter(this.input),this.clearButton.on("click",this.clearElement)),this.filenameWrapper=i(this.settings.tpl.filename),this.filenameWrapper.prependTo(this.preview.find(".dropify-infos-inner")),this.settings.showErrors===!0&&(this.errorsContainer=i(this.settings.tpl.errorsContainer),"outside"===this.settings.errorsPosition?this.errorsContainer.insertAfter(this.wrapper):this.errorsContainer.insertBefore(this.input));var t=this.settings.defaultFile||"";""!=t.trim()&&(this.file.name=this.cleanFilename(t),this.setPreview(t))},e.prototype.readFile=function(e){if(e.files&&e.files[0]){var t=new FileReader,s=new Image,r=e.files[0],n=null,o=this,h=i.Event("dropify.fileReady");this.clearErrors(),this.showLoader(),this.setFileInformations(r),t.readAsDataURL(r),this.errorsEvent.errors=[],this.checkFileSize(),t.onload=function(i){n=i.target.result,this.isImage()?(s.src=i.target.result,s.onload=function(){o.setFileDimensions(this.width,this.height),o.validateImage(),o.input.trigger(h,[n])}):this.input.trigger(h,[n])}.bind(this),this.input.on("dropify.fileReady",this.onFileReady)}},e.prototype.onFileReady=function(i,e){if(this.input.off("dropify.fileReady",this.onFileReady),0===this.errorsEvent.errors.length)this.setPreview(e,this.file.name);else{this.input.trigger(this.errorsEvent,[this]);for(var t=this.errorsEvent.errors.length-1;t>=0;t--){var s=this.errorsEvent.errors[t].namespace,r=s.split(".").pop();this.showError(r)}if("undefined"!=typeof this.errorsContainer){this.errorsContainer.addClass("visible");var n=this.errorsContainer;setTimeout(function(){n.removeClass("visible")},1e3)}this.wrapper.addClass("has-error"),this.resetPreview(),this.clearElement()}},e.prototype.setFileInformations=function(i){this.file.object=i,this.file.name=i.name,this.file.size=i.size,this.file.type=i.type,this.file.width=null,this.file.height=null},e.prototype.setFileDimensions=function(i,e){this.file.width=i,this.file.height=e},e.prototype.setPreview=function(e){this.wrapper.removeClass("has-error").addClass("has-preview"),this.filenameWrapper.children(".dropify-filename-inner").html(this.file.name);var t=this.preview.children(".dropify-render");if(this.hideLoader(),this.isImage()===!0){var s=i("<img />").attr("src",e);this.settings.height&&s.css("max-height",this.settings.height),s.appendTo(t)}else i("<i />").attr("class","dropify-font-file").appendTo(t),i('<span class="dropify-extension" />').html(this.getFileType()).appendTo(t);this.preview.fadeIn()},e.prototype.resetPreview=function(){this.wrapper.removeClass("has-preview");var i=this.preview.children(".dropify-render");i.find(".dropify-extension").remove(),i.find("i").remove(),i.find("img").remove(),this.preview.hide(),this.hideLoader()},e.prototype.cleanFilename=function(i){var e=i.split("\\").pop();return e==i&&(e=i.split("/").pop()),""!=i?e:""},e.prototype.clearElement=function(){if(0===this.errorsEvent.errors.length){var e=i.Event("dropify.beforeClear");this.input.trigger(e,[this]),e.result!==!1&&(this.resetFile(),this.input.val(""),this.resetPreview(),this.input.trigger(i.Event("dropify.afterClear"),[this]))}else this.resetFile(),this.input.val(""),this.resetPreview()},e.prototype.resetFile=function(){this.file.object=null,this.file.name=null,this.file.size=null,this.file.type=null,this.file.width=null,this.file.height=null},e.prototype.setContainerSize=function(){this.settings.height&&this.wrapper.height(this.settings.height)},e.prototype.isTouchDevice=function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0},e.prototype.getFileType=function(){return this.file.name.split(".").pop().toLowerCase()},e.prototype.isImage=function(){return"-1"!=this.imgFileExtensions.indexOf(this.getFileType())?!0:!1},e.prototype.translateMessages=function(){for(var i in this.settings.tpl)for(var e in this.settings.messages)this.settings.tpl[i]=this.settings.tpl[i].replace("{{ "+e+" }}",this.settings.messages[e])},e.prototype.checkFileSize=function(){0!==this.maxFileSizeToByte()&&this.file.size>this.maxFileSizeToByte()&&this.pushError("fileSize")},e.prototype.maxFileSizeToByte=function(){var i=0;if(0!==this.settings.maxFileSize){var e=this.settings.maxFileSize.slice(-1).toUpperCase(),t=1024,s=1024*t,r=1024*s;"K"===e?i=parseFloat(this.settings.maxFileSize)*t:"M"===e?i=parseFloat(this.settings.maxFileSize)*s:"G"===e&&(i=parseFloat(this.settings.maxFileSize)*r)}return i},e.prototype.validateImage=function(){0!==this.settings.minWidth&&this.settings.minWidth>=this.file.width&&this.pushError("minWidth"),0!==this.settings.maxWidth&&this.settings.maxWidth<=this.file.width&&this.pushError("maxWidth"),0!==this.settings.minHeight&&this.settings.minHeight>=this.file.height&&this.pushError("minHeight"),0!==this.settings.maxHeight&&this.settings.maxHeight<=this.file.height&&this.pushError("maxHeight"),"-1"==this.settings.allowedFormats.indexOf(this.getImageFormat())&&this.pushError("imageFormat")},e.prototype.getImageFormat=function(){return this.file.width==this.file.height?"square":this.file.width<this.file.height?"portrait":this.file.width>this.file.height?"landscape":void 0},e.prototype.pushError=function(e){var t=i.Event("dropify.error."+e);this.errorsEvent.errors.push(t),this.input.trigger(t,[this])},e.prototype.clearErrors=function(){"undefined"!=typeof this.errorsContainer&&this.errorsContainer.children("ul").html("")},e.prototype.showError=function(i){"undefined"!=typeof this.errorsContainer&&this.errorsContainer.children("ul").append("<li>"+this.getError(i)+"</li>")},e.prototype.getError=function(i){var e=this.settings.error[i],t="";return"fileSize"===i?t=this.settings.maxFileSize:"minWidth"===i?t=this.settings.minWidth:"maxWidth"===i?t=this.settings.maxWidth:"minHeight"===i?t=this.settings.minHeight:"maxHeight"===i?t=this.settings.maxHeight:"imageFormat"===i&&(t=this.settings.allowedFormats.join(" ")),""!==t?e.replace("{{ value }}",t):e},e.prototype.showLoader=function(){"undefined"!=typeof this.loader&&this.loader.show()},e.prototype.hideLoader=function(){"undefined"!=typeof this.loader&&this.loader.hide()},e.prototype.destroy=function(){this.input.siblings().remove(),this.input.unwrap(),this.isInit=!1},e.prototype.init=function(){this.createElements()},e.prototype.isDropified=function(){return this.isInit},i.fn[t]=function(s){return this.each(function(){i.data(this,t)||i.data(this,t,new e(this,s))}),this},e});
/*
 * Implements a user-facing modal confirmation when link has a
 * "data-confirm" attribute using bootstrap's modals. MIT license.
 *
 *   - vjt@openssl.it  Tue Jul  2 18:45:15 CEST 2013
 */

(function ($) {

  /**
   * Builds the markup for a [Bootstrap modal](http://twitter.github.io/bootstrap/javascript.html#modals)
   * for the given `element`. Uses the following `data-` parameters to
   * customize it:
   *
   *  * `data-confirm`: Contains the modal body text. HTML is allowed.
   *                    Separate multiple paragraphs using \n\n.
   *  * `data-commit`:  The 'confirm' button text. "Confirm" by default.
   *  * `data-cancel`:  The 'cancel' button text. "Cancel" by default.
   *  * `data-verify`:  Adds a text input in which the user has to input
   *                    the text in this attribute value for the 'confirm'
   *                    button to be clickable. Optional.
   *  * `data-verify-text`:  Adds a label for the data-verify input. Optional
   *  * `data-focus`:   Define focused input. Supported values are
   *                    'cancel' or 'commit', 'cancel' is default for
   *                    data-method DELETE, 'commit' for all others.
   *
   * You can set global setting using `dataConfirmModal.setDefaults`, for example:
   *
   *    dataConfirmModal.setDefaults({
   *      title: 'Confirm your action',
   *      commit: 'Continue',
   *      cancel: 'Cancel',
   *      fade:   false,
   *      verifyClass: 'form-control',
   *    });
   *
   */

  var defaults = {
    title: 'Are you sure?',
    commit: 'Confirm',
    commitClass: 'btn-danger',
    cancel: 'Cancel',
    cancelClass: 'btn-default',
    fade: true,
    verifyClass: 'form-control',
    elements: ['a[data-confirm]', 'button[data-confirm]', 'input[type=submit][data-confirm]'],
    focus: 'commit',
    zIndex: 1050,
    modalClass: false,
    show: true
  };

  var settings;

  window.dataConfirmModal = {
    setDefaults: function (newSettings) {
      settings = $.extend(settings, newSettings);
    },

    restoreDefaults: function () {
      settings = $.extend({}, defaults);
    },

    confirm: function (options) {
      // Build an ephemeral modal
      //
      var modal = buildModal(options);

      modal.spawn();
      modal.on('hidden.bs.modal', function () {
        modal.remove();
      });

      modal.find('.commit').on('click', function () {
        if (options.onConfirm && options.onConfirm.call)
          options.onConfirm.call();

        modal.modal('hide');
      });

      modal.find('.cancel').on('click', function () {
        if (options.onCancel && options.onCancel.call)
          options.onCancel.call();

        modal.modal('hide');
      });
    }
  };

  dataConfirmModal.restoreDefaults();

  var buildElementModal = function (element) {
    var options = {
      title:        element.data('title') || element.attr('title') || element.data('original-title'),
      text:         element.data('confirm'),
      focus:        element.data('focus'),
      method:       element.data('method'),
      modalClass:   element.data('modal-class'),
      commit:       element.data('commit'),
      commitClass:  element.data('commit-class'),
      cancel:       element.data('cancel'),
      cancelClass:  element.data('cancel-class'),
      remote:       element.data('remote'),
      verify:       element.data('verify'),
      verifyRegexp: element.data('verify-regexp'),
      verifyLabel:  element.data('verify-text'),
      verifyRegexpCaseInsensitive: element.data('verify-regexp-caseinsensitive'),
      backdrop:     element.data('backdrop'),
      keyboard:     element.data('keyboard'),
      show:         element.data('show')
    };

    var modal = buildModal(options);

    modal.find('.commit').on('click', function () {
      // Call the original event handler chain
      element.get(0).click();

      modal.modal('hide');
    });

    return modal;
  }

  var buildModal = function (options) {
    var id = 'confirm-modal-' + String(Math.random()).slice(2, -1);
    var fade = settings.fade ? 'fade' : '';
    var modalClass = options.modalClass ? options.modalClass : settings.modalClass;

    var modal = $(
      '<div id="'+id+'" class="modal '+modalClass+' '+fade+'" tabindex="-1" role="dialog" aria-labelledby="'+id+'Label" aria-hidden="true">' +
        '<div class="modal-dialog">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
              '<h4 id="'+id+'Label" class="modal-title"></h4> ' +
            '</div>' +
            '<div class="modal-body"></div>' +
            '<div class="modal-footer">' +
              '<button class="btn cancel" data-dismiss="modal" aria-hidden="true"></button>' +
              '<button class="btn commit"></button>' +
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'
    );

    // Make sure it's always the top zindex
    var highest = current = settings.zIndex;
    $('.modal.in').not('#'+id).each(function() {
      current = parseInt($(this).css('z-index'), 10);
      if(current > highest) {
        highest = current
      }
    });
    modal.css('z-index', parseInt(highest) + 1);

    modal.find('.modal-title').text(options.title || settings.title);

    var body = modal.find('.modal-body');

    $.each((options.text||'').split(/\n{2}/), function (i, piece) {
      body.append($('<p/>').html(piece));
    });

    var commit = modal.find('.commit');
    commit.text(options.commit || settings.commit);
    commit.addClass(options.commitClass || settings.commitClass);

    var cancel = modal.find('.cancel');
    cancel.text(options.cancel || settings.cancel);
    cancel.addClass(options.cancelClass || settings.cancelClass);

    if (options.remote) {
      commit.attr('data-dismiss', 'modal');
    }

    if (options.verify || options.verifyRegexp) {
      commit.prop('disabled', true);

      var isMatch;
      if (options.verifyRegexp) {
        var caseInsensitive = options.verifyRegexpCaseInsensitive;
        var regexp = options.verifyRegexp;
        var re = new RegExp(regexp, caseInsensitive ? 'i' : '');

        isMatch = function (input) { return input.match(re) };
      } else {
        isMatch = function (input) { return options.verify == input };
      }

      var verification = $('<input/>', {"type": 'text', "class": settings.verifyClass}).on('keyup', function () {
        commit.prop('disabled', !isMatch($(this).val()));
      });

      modal.on('shown.bs.modal', function () {
        verification.focus();
      });

      modal.on('hidden.bs.modal', function () {
        verification.val('').trigger('keyup');
      });

      if (options.verifyLabel)
        body.append($('<p>', {text: options.verifyLabel}))

      body.append(verification);
    }

    var focus_element;
    if (options.focus) {
      focus_element = options.focus;
    } else if (options.method == 'delete') {
      focus_element = 'cancel'
    } else {
      focus_element = settings.focus;
    }
    focus_element = modal.find('.' + focus_element);

    modal.on('shown.bs.modal', function () {
      focus_element.focus();
    });

    $('body').append(modal);

    modal.spawn = function() {
      return modal.modal({
        backdrop: options.backdrop,
        keyboard: options.keyboard,
        show:     options.show
      });
    };

    return modal;
  };


  /**
   * Returns a modal already built for the given element or builds a new one,
   * caching it into the element's `confirm-modal` data attribute.
   */
  var getModal = function (element) {
    var modal = element.data('confirm-modal');

    if (!modal) {
      modal = buildElementModal(element);
      element.data('confirm-modal', modal);
    }

    return modal;
  };

  $.fn.confirmModal = function () {
    var modal = getModal($(this));

    modal.spawn();

    return modal;
  };

  if ($.rails) {
    /**
     * Attaches to Rails' UJS adapter's 'confirm' event, triggered on elements
     * having a `data-confirm` attribute set.
     *
     * If the modal is not visible, then it is spawned and the default Rails
     * confirmation dialog is canceled.
     *
     * If the modal is visible, it means the handler is being called by the
     * modal commit button click handler, as such the user has successfully
     * clicked on the confirm button. In this case Rails' confirm function
     * is briefly overriden, and afterwards reset when the modal is closed.
     *
     */
    var rails_confirm = $.rails.confirm;

    $(document).delegate(settings.elements.join(', '), 'confirm', function() {
      var element = $(this), modal = getModal(element);

      if (!modal.is(':visible')) {
        modal.spawn();

        // Cancel Rails' confirmation
        return false;

      } else {
        // Modal has been confirmed. Override Rails' handler
        $.rails.confirm = function () {
          return true;
        }

        modal.one('hidden.bs.modal', function() {
          // Reset it after modal is closed.
          $.rails.confirm = rails_confirm;
        });

        // Proceed with Rails' handlers
        return true;
      }
    });
  }

})(jQuery);








































var resizefunc = [];

TableManageButtons.init();

$('.dropify').dropify({
                messages: {
                    'default': 'Arraste e solte ou clique para substituir',
                    'replace': 'Arraste e solte ou clique para substituir',
                    'remove': 'Remover',
                    'error': 'Ooops, Algo anexado errado.'
                },
                error: {
                    'fileSize': 'The file size is too big (1M max).'
                }
            });

dataConfirmModal.setDefaults({
  title: 'Você tem certeza?',
  text: 'Deseja fazer isso?',
  commit: 'Sim, prosseguir!',
  cancel: 'Não, cancelar!',
  zIindex: 10099
});