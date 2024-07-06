

$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        autoPlaySpeed: 500,
        navSpeed: 1000,
        autoplayHoverPause: false,
        // items: 2,
        tabletLandscape: 2,
        tabletPortrait: 2,
        mobileLandscape: 2,
        mobilePortrait: 1,
        stagePadding: 20,
        center: false,
        nav: false,
        margin: 20,
        stagePadding: 0,
        dots: false,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 1 },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 2 },
            1200: { items: 2 }
        }
    });
});


/*!
 * Isotope PACKAGED v3.0.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function u(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void s(r + " is not a valid method");
                var l = d.apply(h, n);
                o = void 0 === o ? l : o
            }),
                void 0 !== o ? o : t
        }
        function h(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);
                o ? (o.option(e),
                    o._init()) : (o = new r(n, e),
                        a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery,
            a && (r.prototype.option || (r.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }
            ),
                a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = o.call(arguments, 1);
                        return u(this, t, e)
                    }
                    return h(this, t),
                        this
                }
                ,
                n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice
        , r = t.console
        , s = "undefined" == typeof r ? function () { }
            : function (t) {
                r.error(t)
            }
        ;
    return n(e || t.jQuery),
        i
}),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function () {
        function t() { }
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {}
                    , n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e),
                    this
            }
        }
            ,
            e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {}
                        , n = i[t] = i[t] || {};
                    return n[e] = !0,
                        this
                }
            }
            ,
            e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1),
                        this
                }
            }
            ,
            e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = 0
                        , o = i[n];
                    e = e || [];
                    for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                        var s = r && r[o];
                        s && (this.off(t, o),
                            delete r[o]),
                            o.apply(this, e),
                            n += s ? 0 : 1,
                            o = i[n]
                    }
                    return this
                }
            }
            ,
            t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t)
                , i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }
        function e() { }
        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; h > e; e++) {
                var i = u[e];
                t[i] = 0
            }
            return t
        }
        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                e
        }
        function o() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                r.isBoxSizeOuter = s = 200 == t(o.width),
                    i.removeChild(e)
            }
        }
        function r(e) {
            if (o(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType) {
                var r = n(e);
                if ("none" == r.display)
                    return i();
                var a = {};
                a.width = e.offsetWidth,
                    a.height = e.offsetHeight;
                for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; h > l; l++) {
                    var f = u[l]
                        , c = r[f]
                        , m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m
                }
                var p = a.paddingLeft + a.paddingRight
                    , y = a.paddingTop + a.paddingBottom
                    , g = a.marginLeft + a.marginRight
                    , v = a.marginTop + a.marginBottom
                    , _ = a.borderLeftWidth + a.borderRightWidth
                    , I = a.borderTopWidth + a.borderBottomWidth
                    , z = d && s
                    , x = t(r.width);
                x !== !1 && (a.width = x + (z ? 0 : p + _));
                var S = t(r.height);
                return S !== !1 && (a.height = S + (z ? 0 : y + I)),
                    a.innerWidth = a.width - (p + _),
                    a.innerHeight = a.height - (y + I),
                    a.outerWidth = a.width + g,
                    a.outerHeight = a.height + v,
                    a
            }
        }
        var s, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        }
            , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
        return r
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = Element.prototype;
            if (t.matches)
                return "matches";
            if (t.matchesSelector)
                return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i]
                    , o = n + "MatchesSelector";
                if (t[o])
                    return o
            }
        }();
        return function (e, i) {
            return e[t](i)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var i = {};
        i.extend = function (t, e) {
            for (var i in e)
                t[i] = e[i];
            return t
        }
            ,
            i.modulo = function (t, e) {
                return (t % e + e) % e
            }
            ,
            i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t))
                    e = t;
                else if (t && "number" == typeof t.length)
                    for (var i = 0; i < t.length; i++)
                        e.push(t[i]);
                else
                    e.push(t);
                return e
            }
            ,
            i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1)
            }
            ,
            i.getParent = function (t, i) {
                for (; t != document.body;)
                    if (t = t.parentNode,
                        e(t, i))
                        return t
            }
            ,
            i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t
            }
            ,
            i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            i.filterFindElements = function (t, n) {
                t = i.makeArray(t);
                var o = [];
                return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!n)
                            return void o.push(t);
                        e(t, n) && o.push(t);
                        for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++)
                            o.push(i[r])
                    }
                }),
                    o
            }
            ,
            i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e]
                    , o = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[o];
                    t && clearTimeout(t);
                    var e = arguments
                        , r = this;
                    this[o] = setTimeout(function () {
                        n.apply(r, e),
                            delete r[o]
                    }, i || 100)
                }
            }
            ,
            i.docReady = function (t) {
                "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
            }
            ,
            i.toDashed = function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i
                }).toLowerCase()
            }
            ;
        var n = t.console;
        return i.htmlInit = function (e, o) {
            i.docReady(function () {
                var r = i.toDashed(o)
                    , s = "data-" + r
                    , a = document.querySelectorAll("[" + s + "]")
                    , u = document.querySelectorAll(".js-" + r)
                    , h = i.makeArray(a).concat(i.makeArray(u))
                    , d = s + "-options"
                    , l = t.jQuery;
                h.forEach(function (t) {
                    var i, r = t.getAttribute(s) || t.getAttribute(d);
                    try {
                        i = r && JSON.parse(r)
                    } catch (a) {
                        return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + a))
                    }
                    var u = new e(t, i);
                    l && l.data(t, o, u)
                })
            })
        }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
            t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t)
                return !1;
            return e = null,
                !0
        }
        function n(t, e) {
            t && (this.element = t,
                this.layout = e,
                this.position = {
                    x: 0,
                    y: 0
                },
                this._create())
        }
        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var r = document.documentElement.style
            , s = "string" == typeof r.transition ? "transition" : "WebkitTransition"
            , a = "string" == typeof r.transform ? "transform" : "WebkitTransform"
            , u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s]
            , h = {
                transform: a,
                transition: s,
                transitionDuration: s + "Duration",
                transitionProperty: s + "Property",
                transitionDelay: s + "Delay"
            }
            , d = n.prototype = Object.create(t.prototype);
        d.constructor = n,
            d._create = function () {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                },
                    this.css({
                        position: "absolute"
                    })
            }
            ,
            d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }
            ,
            d.getSize = function () {
                this.size = e(this.element)
            }
            ,
            d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = h[i] || i;
                    e[n] = t[i]
                }
            }
            ,
            d.getPosition = function () {
                var t = getComputedStyle(this.element)
                    , e = this.layout._getOption("originLeft")
                    , i = this.layout._getOption("originTop")
                    , n = t[e ? "left" : "right"]
                    , o = t[i ? "top" : "bottom"]
                    , r = this.layout.size
                    , s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10)
                    , a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
                s = isNaN(s) ? 0 : s,
                    a = isNaN(a) ? 0 : a,
                    s -= e ? r.paddingLeft : r.paddingRight,
                    a -= i ? r.paddingTop : r.paddingBottom,
                    this.position.x = s,
                    this.position.y = a
            }
            ,
            d.layoutPosition = function () {
                var t = this.layout.size
                    , e = {}
                    , i = this.layout._getOption("originLeft")
                    , n = this.layout._getOption("originTop")
                    , o = i ? "paddingLeft" : "paddingRight"
                    , r = i ? "left" : "right"
                    , s = i ? "right" : "left"
                    , a = this.position.x + t[o];
                e[r] = this.getXValue(a),
                    e[s] = "";
                var u = n ? "paddingTop" : "paddingBottom"
                    , h = n ? "top" : "bottom"
                    , d = n ? "bottom" : "top"
                    , l = this.position.y + t[u];
                e[h] = this.getYValue(l),
                    e[d] = "",
                    this.css(e),
                    this.emitEvent("layout", [this])
            }
            ,
            d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
            }
            ,
            d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
            }
            ,
            d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x
                    , n = this.position.y
                    , o = parseInt(t, 10)
                    , r = parseInt(e, 10)
                    , s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e),
                    s && !this.isTransitioning)
                    return void this.layoutPosition();
                var a = t - i
                    , u = e - n
                    , h = {};
                h.transform = this.getTranslate(a, u),
                    this.transition({
                        to: h,
                        onTransitionEnd: {
                            transform: this.layoutPosition
                        },
                        isCleaning: !0
                    })
            }
            ,
            d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft")
                    , n = this.layout._getOption("originTop");
                return t = i ? t : -t,
                    e = n ? e : -e,
                    "translate3d(" + t + "px, " + e + "px, 0)"
            }
            ,
            d.goTo = function (t, e) {
                this.setPosition(t, e),
                    this.layoutPosition()
            }
            ,
            d.moveTo = d._transitionTo,
            d.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10),
                    this.position.y = parseInt(e, 10)
            }
            ,
            d._nonTransition = function (t) {
                this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this)
            }
            ,
            d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    e.ingProperties[i] = !0,
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    this.isTransitioning = !0
            }
            ;
        var l = "opacity," + o(a);
        d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t,
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }),
                    this.element.addEventListener(u, this, !1)
            }
        }
            ,
            d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t)
            }
            ,
            d.onotransitionend = function (t) {
                this.ontransitionend(t)
            }
            ;
        var f = {
            "-webkit-transform": "transform"
        };
        d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn
                    , n = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n],
                    i(e.ingProperties) && this.disableTransition(),
                    n in e.clean && (this.element.style[t.propertyName] = "",
                        delete e.clean[n]),
                    n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this),
                        delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }
            ,
            d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(u, this, !1),
                    this.isTransitioning = !1
            }
            ,
            d._removeStyles = function (t) {
                var e = {};
                for (var i in t)
                    e[i] = "";
                this.css(e)
            }
            ;
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return d.removeTransitionStyles = function () {
            this.css(c)
        }
            ,
            d.stagger = function (t) {
                t = isNaN(t) ? 0 : t,
                    this.staggerDelay = t + "ms"
            }
            ,
            d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({
                        display: ""
                    }),
                    this.emitEvent("remove", [this])
            }
            ,
            d.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                    this.removeElem()
                }),
                    void this.hide()) : void this.removeElem()
            }
            ,
            d.reveal = function () {
                delete this.isHidden,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("visibleStyle");
                e[i] = this.onRevealTransitionEnd,
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal")
            }
            ,
            d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity)
                    return "opacity";
                for (var i in e)
                    return i
            }
            ,
            d.hide = function () {
                this.isHidden = !0,
                    this.css({
                        display: ""
                    });
                var t = this.layout.options
                    , e = {}
                    , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                e[i] = this.onHideTransitionEnd,
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e
                    })
            }
            ,
            d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({
                    display: "none"
                }),
                    this.emitEvent("hide"))
            }
            ,
            d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }
            ,
            n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
            return e(t, i, n, o, r)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, n, o) {
        "use strict";
        function r(t, e) {
            var i = n.getQueryElement(t);
            if (!i)
                return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i,
                h && (this.$element = h(this.element)),
                this.options = n.extend({}, this.constructor.defaults),
                this.option(e);
            var o = ++l;
            this.element.outlayerGUID = o,
                f[o] = this,
                this._create();
            var r = this._getOption("initLayout");
            r && this.layout()
        }
        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e
        }
        function a(t) {
            if ("number" == typeof t)
                return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/)
                , i = e && e[1]
                , n = e && e[2];
            if (!i.length)
                return 0;
            i = parseFloat(i);
            var o = m[n] || 1;
            return i * o
        }
        var u = t.console
            , h = t.jQuery
            , d = function () { }
            , l = 0
            , f = {};
        r.namespace = "outlayer",
            r.Item = o,
            r.defaults = {
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
        var c = r.prototype;
        n.extend(c, e.prototype),
            c.option = function (t) {
                n.extend(this.options, t)
            }
            ,
            c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
            }
            ,
            r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            },
            c._create = function () {
                this.reloadItems(),
                    this.stamps = [],
                    this.stamp(this.options.stamp),
                    n.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize()
            }
            ,
            c.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }
            ,
            c._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o]
                        , s = new i(r, this);
                    n.push(s)
                }
                return n
            }
            ,
            c._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector)
            }
            ,
            c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element
                })
            }
            ,
            c.layout = function () {
                this._resetLayout(),
                    this._manageStamps();
                var t = this._getOption("layoutInstant")
                    , e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e),
                    this._isLayoutInited = !0
            }
            ,
            c._init = c.layout,
            c._resetLayout = function () {
                this.getSize()
            }
            ,
            c.getSize = function () {
                this.size = i(this.element)
            }
            ,
            c._getMeasurement = function (t, e) {
                var n, o = this.options[t];
                o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o),
                    this[t] = n ? i(n)[e] : o) : this[t] = 0
            }
            ,
            c.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t),
                    this._layoutItems(t, e),
                    this._postLayout()
            }
            ,
            c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored
                })
            }
            ,
            c._layoutItems = function (t, e) {
                if (this._emitCompleteOnItems("layout", t),
                    t && t.length) {
                    var i = [];
                    t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);
                        n.item = t,
                            n.isInstant = e || t.isLayoutInstant,
                            i.push(n)
                    }, this),
                        this._processLayoutQueue(i)
                }
            }
            ,
            c._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }
            ,
            c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e)
                    }, this)
            }
            ,
            c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
                    this.stagger)
            }
            ,
            c._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger),
                    t.moveTo(e, i))
            }
            ,
            c._postLayout = function () {
                this.resizeContainer()
            }
            ,
            c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1))
                }
            }
            ,
            c._getContainerSize = d,
            c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        t = Math.max(t, 0),
                        this.element.style[e ? "width" : "height"] = t + "px"
                }
            }
            ,
            c._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e])
                }
                function n() {
                    s++,
                        s == r && i()
                }
                var o = this
                    , r = e.length;
                if (!e || !r)
                    return void i();
                var s = 0;
                e.forEach(function (e) {
                    e.once(t, n)
                })
            }
            ,
            c.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;
                if (this.emitEvent(t, n),
                    h)
                    if (this.$element = this.$element || h(this.element),
                        e) {
                        var o = h.Event(e);
                        o.type = t,
                            this.$element.trigger(o, i)
                    } else
                        this.$element.trigger(t, i)
            }
            ,
            c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }
            ,
            c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }
            ,
            c.stamp = function (t) {
                t = this._find(t),
                    t && (this.stamps = this.stamps.concat(t),
                        t.forEach(this.ignore, this))
            }
            ,
            c.unstamp = function (t) {
                t = this._find(t),
                    t && t.forEach(function (t) {
                        n.removeFrom(this.stamps, t),
                            this.unignore(t)
                    }, this)
            }
            ,
            c._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
                    t = n.makeArray(t)) : void 0
            }
            ,
            c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this))
            }
            ,
            c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect()
                    , e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }
            ,
            c._manageStamp = d,
            c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect()
                    , n = this._boundingRect
                    , o = i(t)
                    , r = {
                        left: e.left - n.left - o.marginLeft,
                        top: e.top - n.top - o.marginTop,
                        right: n.right - e.right - o.marginRight,
                        bottom: n.bottom - e.bottom - o.marginBottom
                    };
                return r
            }
            ,
            c.handleEvent = n.handleEvent,
            c.bindResize = function () {
                t.addEventListener("resize", this),
                    this.isResizeBound = !0
            }
            ,
            c.unbindResize = function () {
                t.removeEventListener("resize", this),
                    this.isResizeBound = !1
            }
            ,
            c.onresize = function () {
                this.resize()
            }
            ,
            n.debounceMethod(r, "onresize", 100),
            c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }
            ,
            c.needsResizeLayout = function () {
                var t = i(this.element)
                    , e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }
            ,
            c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)),
                    e
            }
            ,
            c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0),
                    this.reveal(e))
            }
            ,
            c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i)
                }
            }
            ,
            c.reveal = function (t) {
                if (this._emitCompleteOnItems("reveal", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.reveal()
                    })
                }
            }
            ,
            c.hide = function (t) {
                if (this._emitCompleteOnItems("hide", t),
                    t && t.length) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e),
                            t.hide()
                    })
                }
            }
            ,
            c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e)
            }
            ,
            c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e)
            }
            ,
            c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t)
                        return i
                }
            }
            ,
            c.getItems = function (t) {
                t = n.makeArray(t);
                var e = [];
                return t.forEach(function (t) {
                    var i = this.getItem(t);
                    i && e.push(i)
                }, this),
                    e
            }
            ,
            c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e && e.length && e.forEach(function (t) {
                        t.remove(),
                            n.removeFrom(this.items, t)
                    }, this)
            }
            ,
            c.destroy = function () {
                var t = this.element.style;
                t.height = "",
                    t.position = "",
                    t.width = "",
                    this.items.forEach(function (t) {
                        t.destroy()
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e],
                    delete this.element.outlayerGUID,
                    h && h.removeData(this.element, this.constructor.namespace)
            }
            ,
            r.data = function (t) {
                t = n.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e]
            }
            ,
            r.create = function (t, e) {
                var i = s(r);
                return i.defaults = n.extend({}, r.defaults),
                    n.extend(i.defaults, e),
                    i.compatOptions = n.extend({}, r.compatOptions),
                    i.namespace = t,
                    i.data = r.data,
                    i.Item = s(o),
                    n.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
            }
            ;
        var m = {
            ms: 1,
            s: 1e3
        };
        return r.Item = o,
            r
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
            t.Isotope.Item = e(t.Outlayer))
    }(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype)
            , n = i._create;
        i._create = function () {
            this.id = this.layout.itemGUID++,
                n.call(this),
                this.sortData = {}
        }
            ,
            i.updateSortData = function () {
                if (!this.isIgnored) {
                    this.sortData.id = this.id,
                        this.sortData["original-order"] = this.id,
                        this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData
                        , e = this.layout._sorters;
                    for (var i in t) {
                        var n = e[i];
                        this.sortData[i] = n(this.element, this)
                    }
                }
            }
            ;
        var o = i.destroy;
        return i.destroy = function () {
            o.apply(this, arguments),
                this.css({
                    display: ""
                })
        }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
            t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function (t, e) {
        "use strict";
        function i(t) {
            this.isotope = t,
                t && (this.options = t.options[this.namespace],
                    this.element = t.element,
                    this.items = t.filteredItems,
                    this.size = t.size)
        }
        var n = i.prototype
            , o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function (t) {
            n[t] = function () {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }),
            n.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element)
                    , i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight
            }
            ,
            n._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments)
            }
            ,
            n.getColumnWidth = function () {
                this.getSegmentSize("column", "Width")
            }
            ,
            n.getRowHeight = function () {
                this.getSegmentSize("row", "Height")
            }
            ,
            n.getSegmentSize = function (t, e) {
                var i = t + e
                    , n = "outer" + e;
                if (this._getMeasurement(i, n),
                    !this[i]) {
                    var o = this.getFirstItemSize();
                    this[i] = o && o[n] || this.isotope.size["inner" + e]
                }
            }
            ,
            n.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }
            ,
            n.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments)
            }
            ,
            n.getSize = function () {
                this.isotope.getSize(),
                    this.size = this.isotope.size
            }
            ,
            i.modes = {},
            i.create = function (t, e) {
                function o() {
                    i.apply(this, arguments)
                }
                return o.prototype = Object.create(n),
                    o.prototype.constructor = o,
                    e && (o.options = e),
                    o.prototype.namespace = t,
                    i.modes[t] = o,
                    o
            }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth",
            i.prototype._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    this.colYs = [];
                for (var t = 0; t < this.cols; t++)
                    this.colYs.push(0);
                this.maxY = 0
            }
            ,
            i.prototype.measureColumns = function () {
                if (this.getContainerWidth(),
                    !this.columnWidth) {
                    var t = this.items[0]
                        , i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                var n = this.columnWidth += this.gutter
                    , o = this.containerWidth + this.gutter
                    , r = o / n
                    , s = n - o % n
                    , a = s && 1 > s ? "round" : "floor";
                r = Math[a](r),
                    this.cols = Math.max(r, 1)
            }
            ,
            i.prototype.getContainerWidth = function () {
                var t = this._getOption("fitWidth")
                    , i = t ? this.element.parentNode : this.element
                    , n = e(i);
                this.containerWidth = n && n.innerWidth
            }
            ,
            i.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth
                    , i = e && 1 > e ? "round" : "ceil"
                    , n = Math[i](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var o = this._getColGroup(n), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
                    x: this.columnWidth * s,
                    y: r
                }, u = r + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++)
                    this.colYs[s + d] = u;
                return a
            }
            ,
            i.prototype._getColGroup = function (t) {
                if (2 > t)
                    return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + t);
                    e[n] = Math.max.apply(Math, o)
                }
                return e
            }
            ,
            i.prototype._manageStamp = function (t) {
                var i = e(t)
                    , n = this._getElementOffset(t)
                    , o = this._getOption("originLeft")
                    , r = o ? n.left : n.right
                    , s = r + i.outerWidth
                    , a = Math.floor(r / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(s / this.columnWidth);
                u -= s % this.columnWidth ? 0 : 1,
                    u = Math.min(this.cols - 1, u);
                for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++)
                    this.colYs[l] = Math.max(d, this.colYs[l])
            }
            ,
            i.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
                    t
            }
            ,
            i.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }
            ,
            i.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(),
                    t != this.containerWidth
            }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function (t, e) {
        "use strict";
        var i = t.create("masonry")
            , n = i.prototype
            , o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var r in e.prototype)
            o[r] || (n[r] = e.prototype[r]);
        var s = n.measureColumns;
        n.measureColumns = function () {
            this.items = this.isotope.filteredItems,
                s.call(this)
        }
            ;
        var a = n._getOption;
        return n._getOption = function (t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }
            ,
            i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("fitRows")
            , i = e.prototype;
        return i._resetLayout = function () {
            this.x = 0,
                this.y = 0,
                this.maxY = 0,
                this._getMeasurement("gutter", "outerWidth")
        }
            ,
            i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter
                    , i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0,
                    this.y = this.maxY);
                var n = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
                    this.x += e,
                    n
            }
            ,
            i._getContainerSize = function () {
                return {
                    height: this.maxY
                }
            }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function (t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        })
            , i = e.prototype;
        return i._resetLayout = function () {
            this.y = 0
        }
            ,
            i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
                    , i = this.y;
                return this.y += t.size.outerHeight,
                {
                    x: e,
                    y: i
                }
            }
            ,
            i._getContainerSize = function () {
                return {
                    height: this.y
                }
            }
            ,
            e
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function (i, n, o, r, s, a) {
            return e(t, i, n, o, r, s, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function (t, e, i, n, o, r, s) {
        function a(t, e) {
            return function (i, n) {
                for (var o = 0; o < t.length; o++) {
                    var r = t[o]
                        , s = i.sortData[r]
                        , a = n.sortData[r];
                    if (s > a || a > s) {
                        var u = void 0 !== e[r] ? e[r] : e
                            , h = u ? 1 : -1;
                        return (s > a ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var u = t.jQuery
            , h = String.prototype.trim ? function (t) {
                return t.trim()
            }
                : function (t) {
                    return t.replace(/^\s+|\s+$/g, "")
                }
            , d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        d.Item = r,
            d.LayoutMode = s;
        var l = d.prototype;
        l._create = function () {
            this.itemGUID = 0,
                this._sorters = {},
                this._getSorters(),
                e.prototype._create.call(this),
                this.modes = {},
                this.filteredItems = this.items,
                this.sortHistory = ["original-order"];
            for (var t in s.modes)
                this._initLayoutMode(t)
        }
            ,
            l.reloadItems = function () {
                this.itemGUID = 0,
                    e.prototype.reloadItems.call(this)
            }
            ,
            l._itemize = function () {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.id = this.itemGUID++
                }
                return this._updateItemsSortData(t),
                    t
            }
            ,
            l._initLayoutMode = function (t) {
                var e = s.modes[t]
                    , i = this.options[t] || {};
                this.options[t] = e.options ? o.extend(e.options, i) : i,
                    this.modes[t] = new e(this)
            }
            ,
            l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
            }
            ,
            l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    this._isLayoutInited = !0
            }
            ,
            l.arrange = function (t) {
                this.option(t),
                    this._getIsInstant();
                var e = this._filter(this.items);
                this.filteredItems = e.matches,
                    this._bindArrangeComplete(),
                    this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
                    this._sort(),
                    this._layout()
            }
            ,
            l._init = l.arrange,
            l._hideReveal = function (t) {
                this.reveal(t.needReveal),
                    this.hide(t.needHide)
            }
            ,
            l._getIsInstant = function () {
                var t = this._getOption("layoutInstant")
                    , e = void 0 !== t ? t : !this._isLayoutInited;
                return this._isInstant = e,
                    e
            }
            ,
            l._bindArrangeComplete = function () {
                function t() {
                    e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
                }
                var e, i, n, o = this;
                this.once("layoutComplete", function () {
                    e = !0,
                        t()
                }),
                    this.once("hideComplete", function () {
                        i = !0,
                            t()
                    }),
                    this.once("revealComplete", function () {
                        n = !0,
                            t()
                    })
            }
            ,
            l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
                    var a = t[s];
                    if (!a.isIgnored) {
                        var u = r(a);
                        u && i.push(a),
                            u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
                    }
                }
                return {
                    matches: i,
                    needReveal: n,
                    needHide: o
                }
            }
            ,
            l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering ? function (e) {
                    return u(e.element).is(t)
                }
                    : "function" == typeof t ? function (e) {
                        return t(e.element)
                    }
                        : function (e) {
                            return n(e.element, t)
                        }
            }
            ,
            l.updateSortData = function (t) {
                var e;
                t ? (t = o.makeArray(t),
                    e = this.getItems(t)) : e = this.items,
                    this._getSorters(),
                    this._updateItemsSortData(e)
            }
            ,
            l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i)
                }
            }
            ,
            l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && e > i; i++) {
                    var n = t[i];
                    n.updateSortData()
                }
            }
            ;
        var f = function () {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = h(t).split(" ")
                    , n = i[0]
                    , o = n.match(/^\[(.+)\]$/)
                    , r = o && o[1]
                    , s = e(r, n)
                    , a = d.sortDataParsers[i[1]];
                return t = a ? function (t) {
                    return t && a(s(t))
                }
                    : function (t) {
                        return t && s(t)
                    }
            }
            function e(t, e) {
                return t ? function (e) {
                    return e.getAttribute(t)
                }
                    : function (t) {
                        var i = t.querySelector(e);
                        return i && i.textContent
                    }
            }
            return t
        }();
        d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10)
            },
            parseFloat: function (t) {
                return parseFloat(t)
            }
        },
            l._sort = function () {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory)
                        , i = a(e, this.options.sortAscending);
                    this.filteredItems.sort(i),
                        t != this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }
            ,
            l._mode = function () {
                var t = this.options.layoutMode
                    , e = this.modes[t];
                if (!e)
                    throw new Error("No layout mode: " + t);
                return e.options = this.options[t],
                    e
            }
            ,
            l._resetLayout = function () {
                e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout()
            }
            ,
            l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t)
            }
            ,
            l._manageStamp = function (t) {
                this._mode()._manageStamp(t)
            }
            ,
            l._getContainerSize = function () {
                return this._mode()._getContainerSize()
            }
            ,
            l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout()
            }
            ,
            l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }
            ,
            l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(),
                        this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        this.filteredItems = i.concat(this.filteredItems),
                        this.items = e.concat(this.items)
                }
            }
            ,
            l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
            }
            ,
            l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, n, o = e.length;
                    for (i = 0; o > i; i++)
                        n = e[i],
                            this.element.appendChild(n.element);
                    var r = this._filter(e).matches;
                    for (i = 0; o > i; i++)
                        e[i].isLayoutInstant = !0;
                    for (this.arrange(),
                        i = 0; o > i; i++)
                        delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            }
            ;
        var c = l.remove;
        return l.remove = function (t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            c.call(this, t);
            for (var i = e && e.length, n = 0; i && i > n; n++) {
                var r = e[n];
                o.removeFrom(this.filteredItems, r)
            }
        }
            ,
            l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random()
                }
                this.options.sortBy = "random",
                    this._sort(),
                    this._layout()
            }
            ,
            l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var n = t.apply(this, e);
                return this.options.transitionDuration = i,
                    n
            }
            ,
            l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element
                })
            }
            ,
            d
    });


/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
    function e() { }
    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t)
                return n;
        return -1
    }
    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype
        , r = this
        , o = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i)
                i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else
            t = i[e] || (i[e] = []);
        return t
    }
        ,
        i.flattenListeners = function (e) {
            var t, n = [];
            for (t = 0; e.length > t; t += 1)
                n.push(e[t].listener);
            return n
        }
        ,
        i.getListenersAsObject = function (e) {
            var t, n = this.getListeners(e);
            return n instanceof Array && (t = {},
                t[e] = n),
                t || n
        }
        ,
        i.addListener = function (e, n) {
            var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
            for (i in r)
                r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                    listener: n,
                    once: !1
                });
            return this
        }
        ,
        i.on = n("addListener"),
        i.addOnceListener = function (e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }
        ,
        i.once = n("addOnceListener"),
        i.defineEvent = function (e) {
            return this.getListeners(e),
                this
        }
        ,
        i.defineEvents = function (e) {
            for (var t = 0; e.length > t; t += 1)
                this.defineEvent(e[t]);
            return this
        }
        ,
        i.removeListener = function (e, n) {
            var i, r, o = this.getListenersAsObject(e);
            for (r in o)
                o.hasOwnProperty(r) && (i = t(o[r], n),
                    -1 !== i && o[r].splice(i, 1));
            return this
        }
        ,
        i.off = n("removeListener"),
        i.addListeners = function (e, t) {
            return this.manipulateListeners(!1, e, t)
        }
        ,
        i.removeListeners = function (e, t) {
            return this.manipulateListeners(!0, e, t)
        }
        ,
        i.manipulateListeners = function (e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;)
                    o.call(this, t, n[i]);
            else
                for (i in t)
                    t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }
        ,
        i.removeEvent = function (e) {
            var t, n = typeof e, i = this._getEvents();
            if ("string" === n)
                delete i[e];
            else if ("object" === n)
                for (t in i)
                    i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else
                delete this._events;
            return this
        }
        ,
        i.removeAllListeners = n("removeEvent"),
        i.emitEvent = function (e, t) {
            var n, i, r, o, s = this.getListenersAsObject(e);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (i = s[r].length; i--;)
                        n = s[r][i],
                            n.once === !0 && this.removeListener(e, n.listener),
                            o = n.listener.apply(this, t || []),
                            o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
            return this
        }
        ,
        i.trigger = n("emitEvent"),
        i.emit = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }
        ,
        i.setOnceReturnValue = function (e) {
            return this._onceReturnValue = e,
                this
        }
        ,
        i._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }
        ,
        i._getEvents = function () {
            return this._events || (this._events = {})
        }
        ,
        e.noConflict = function () {
            return r.EventEmitter = o,
                e
        }
        ,
        "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return e
        }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}
).call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t,
                n
        }
        var n = document.documentElement
            , i = function () { };
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        }
            : n.attachEvent && (i = function (e, n, i) {
                e[n + i] = i.handleEvent ? function () {
                    var n = t(e);
                    i.handleEvent.call(i, n)
                }
                    : function () {
                        var n = t(e);
                        i.call(e, n)
                    }
                    ,
                    e.attachEvent("on" + n, e[n + i])
            }
            );
        var r = function () { };
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        }
            : n.detachEvent && (r = function (e, t, n) {
                e.detachEvent("on" + t, e[t + n]);
                try {
                    delete e[t + n]
                } catch (i) {
                    e[t + n] = void 0
                }
            }
            );
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function (e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, n) {
        function i(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function r(e) {
            return "[object Array]" === d.call(e)
        }
        function o(e) {
            var t = [];
            if (r(e))
                t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++)
                    t.push(e[n]);
            else
                t.push(e);
            return t
        }
        function s(e, t, n) {
            if (!(this instanceof s))
                return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)),
                this.elements = o(e),
                this.options = i({}, this.options),
                "function" == typeof t ? n = t : i(this.options, t),
                n && this.on("always", n),
                this.getImages(),
                a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function () {
                r.check()
            })
        }
        function f(e) {
            this.img = e
        }
        function c(e) {
            this.src = e,
                v[e] = this
        }
        var a = e.jQuery
            , u = e.console
            , h = u !== void 0
            , d = Object.prototype.toString;
        s.prototype = new t,
            s.prototype.options = {},
            s.prototype.getImages = function () {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var n = this.elements[e];
                    "IMG" === n.nodeName && this.addImage(n);
                    var i = n.nodeType;
                    if (i && (1 === i || 9 === i || 11 === i))
                        for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                            var f = r[o];
                            this.addImage(f)
                        }
                }
            }
            ,
            s.prototype.addImage = function (e) {
                var t = new f(e);
                this.images.push(t)
            }
            ,
            s.prototype.check = function () {
                function e(e, r) {
                    return t.options.debug && h && u.log("confirm", e, r),
                        t.progress(e),
                        n++,
                        n === i && t.complete(),
                        !0
                }
                var t = this
                    , n = 0
                    , i = this.images.length;
                if (this.hasAnyBroken = !1,
                    !i)
                    return this.complete(),
                        void 0;
                for (var r = 0; i > r; r++) {
                    var o = this.images[r];
                    o.on("confirm", e),
                        o.check()
                }
            }
            ,
            s.prototype.progress = function (e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
                var t = this;
                setTimeout(function () {
                    t.emit("progress", t, e),
                        t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
                })
            }
            ,
            s.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var t = this;
                setTimeout(function () {
                    if (t.emit(e, t),
                        t.emit("always", t),
                        t.jqDeferred) {
                        var n = t.hasAnyBroken ? "reject" : "resolve";
                        t.jqDeferred[n](t)
                    }
                })
            }
            ,
            a && (a.fn.imagesLoaded = function (e, t) {
                var n = new s(this, e, t);
                return n.jqDeferred.promise(a(this))
            }
            ),
            f.prototype = new t,
            f.prototype.check = function () {
                var e = v[this.img.src] || new c(this.img.src);
                if (e.isConfirmed)
                    return this.confirm(e.isLoaded, "cached was confirmed"),
                        void 0;
                if (this.img.complete && void 0 !== this.img.naturalWidth)
                    return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                        void 0;
                var t = this;
                e.on("confirm", function (e, n) {
                    return t.confirm(e.isLoaded, n),
                        !0
                }),
                    e.check()
            }
            ,
            f.prototype.confirm = function (e, t) {
                this.isLoaded = e,
                    this.emit("confirm", this, t)
            }
            ;
        var v = {};
        return c.prototype = new t,
            c.prototype.check = function () {
                if (!this.isChecked) {
                    var e = new Image;
                    n.bind(e, "load", this),
                        n.bind(e, "error", this),
                        e.src = this.src,
                        this.isChecked = !0
                }
            }
            ,
            c.prototype.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }
            ,
            c.prototype.onload = function (e) {
                this.confirm(!0, "onload"),
                    this.unbindProxyEvents(e)
            }
            ,
            c.prototype.onerror = function (e) {
                this.confirm(!1, "onerror"),
                    this.unbindProxyEvents(e)
            }
            ,
            c.prototype.confirm = function (e, t) {
                this.isConfirmed = !0,
                    this.isLoaded = e,
                    this.emit("confirm", this, t)
            }
            ,
            c.prototype.unbindProxyEvents = function (e) {
                n.unbind(e.target, "load", this),
                    n.unbind(e.target, "error", this)
            }
            ,
            s
    });



/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
    var J = f("html")
        , n = f(r)
        , p = f(G)
        , b = f.fancybox = function () {
            b.open.apply(this, arguments)
        }
        , I = navigator.userAgent.match(/msie/i)
        , B = null
        , s = G.createTouch !== v
        , t = function (a) {
            return a && a.hasOwnProperty && a instanceof f
        }
        , q = function (a) {
            return a && "string" === f.type(a)
        }
        , E = function (a) {
            return q(a) && 0 < a.indexOf("%")
        }
        , l = function (a, d) {
            var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        }
        , w = function (a, b) {
            return l(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}),
                !1 !== b.close(!0)))
                return f.isArray(a) || (a = t(a) ? f(a).get() : [a]),
                    f.each(a, function (e, c) {
                        var k = {}, g, h, j, m, l;
                        "object" === f.type(c) && (c.nodeType && (c = f(c)),
                            t(c) ? (k = {
                                href: c.data("fancybox-href") || c.attr("href"),
                                title: c.data("fancybox-title") || c.attr("title"),
                                isDom: !0,
                                element: c
                            },
                                f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                        g = d.href || k.href || (q(c) ? c : null);
                        h = d.title !== v ? d.title : k.title || "";
                        m = (j = d.content || k.content) ? "html" : d.type || k.type;
                        !m && k.isDom && (m = c.data("fancybox-type"),
                            m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                        q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html",
                            j = c)),
                            "ajax" === m && (l = g.split(/\s+/, 2),
                                g = l.shift(),
                                l = l.shift()));
                        j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline",
                            j = c));
                        f.extend(k, {
                            href: g,
                            type: m,
                            content: j,
                            title: h,
                            selector: l
                        });
                        a[e] = k
                    }),
                    b.opts = f.extend(!0, {}, b.defaults, d),
                    d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1),
                    b.group = a,
                    b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(),
                b.ajaxLoad && b.ajaxLoad.abort(),
                b.ajaxLoad = null,
                b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
                a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
                b.coming = null,
                b.current || b._afterZoomOut(a))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(),
                b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                    b._afterZoomOut()) : (b.isOpen = b.isOpened = !1,
                        b.isClosing = !0,
                        f(".fancybox-item, .fancybox-nav").remove(),
                        b.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                        b.transitions[b.current.closeMethod]())))
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }
                , e = function () {
                    d();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                }
                , c = function () {
                    d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1))
                    b.player.isActive = !0,
                        p.bind({
                            "onCancel.player beforeClose.player": c,
                            "onUpdate.player": e,
                            "beforeLoad.player": d
                        }),
                        e(),
                        b.trigger("onPlayStart")
            } else
                c()
        },
        next: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next),
                b.jumpto(d.index + 1, a, "next"))
        },
        prev: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev),
                b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = l(a),
                b.direction = d || c.direction[a >= c.index ? "next" : "prev"],
                b.router = e || "jumpto",
                c.loop && (0 > a && (a = c.group.length + a % c.group.length),
                    a %= c.group.length),
                c.group[a] !== v && (b.cancel(),
                    b._start(a)))
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d),
                a && "scroll" === a.type ? (delete k.position,
                    c.stop(!0, !0).animate(k, 200)) : (c.css(k),
                        e.pos = f.extend({}, e.dim, k)))
        },
        update: function (a) {
            var d = a && a.type
                , e = !d || "orientationchange" === d;
            e && (clearTimeout(B),
                B = null);
            b.isOpen && !B && (B = setTimeout(function () {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"),
                    (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(),
                    "scroll" === d && c.canShrink || b.reposition(a),
                    b.trigger("onUpdate"),
                    B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView,
                s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
                    b.trigger("onUpdate")),
                b.update())
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode))
                    a.preventDefault(),
                        b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(),
                a.css({
                    position: "absolute",
                    top: 0.5 * d.h + d.y,
                    left: 0.5 * d.w + d.x
                }))
        },
        getViewport: function () {
            var a = b.current && b.current.locked || !1
                , d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            a ? (d.w = a[0].clientWidth,
                d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(),
                    d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function () {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update),
                (d = a.keys) && p.bind("keydown.fb", function (e) {
                    var c = e.which || e.keyCode
                        , k = e.target || e.srcElement;
                    if (27 === c && b.coming)
                        return !1;
                    !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
                        if (1 < a.group.length && k[c] !== v)
                            return b[d](k[c]),
                                e.preventDefault(),
                                !1;
                        if (-1 < f.inArray(c, k))
                            return b[d](),
                                e.preventDefault(),
                                !1
                    })
                }),
                f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                    for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)
                        j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight),
                            h = f(h).parent();
                    if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                        if (0 < g || 0 < k)
                            b.prev(0 < g ? "down" : "left");
                        else if (0 > g || 0 > k)
                            b.next(0 > g ? "up" : "right");
                        d.preventDefault()
                    }
                }))
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)
                    return !1;
                c.helpers && f.each(c.helpers, function (d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))
                        b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function (a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)
                return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))
                b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c)
                    return b.coming = null,
                        b.current && b.router && "jumpto" !== b.router ? (b.current.index = a,
                            b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c)
                    d.autoHeight = d.autoWidth = !1,
                        d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)
                        return b._error("content")
                } else if (!e)
                    return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            }
                ;
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            }
                ;
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function (d, e) {
                    "success" === e && (a.content = d,
                        b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming
                , d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) { }
            });
            a.iframe.preload && (b.showLoading(),
                d.one("load", function () {
                    f(this).data("ready", 1);
                    s || f(this).bind("load.fb", b.update);
                    f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    b._afterLoad()
                }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)
                f = a[(d.index + g) % e],
                    "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d))
                    a.wrap.stop(!0).trigger("onReset").remove(),
                        b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d),
                        d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),
                                e = e.show().detach(),
                                a.wrap.bind("onReset", function () {
                                    f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>',
                                h = "",
                                f.each(a.swf, function (a, b) {
                                    e += '<param name="' + a + '" value="' + b + '"></param>';
                                    h += " " + a + '="' + b + '"'
                                }),
                                e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }
                    (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod)
                            b.transitions[d.prevMethod]()
                    } else
                        f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content,
                    h.autoHeight && 1 === H.data("ready"))
                    try {
                        H[0].contentWindow.document.location && (g.width(C).height(9999),
                            F = H.contents().find("body"),
                            q && F.css("overflow-x", "hidden"),
                            A = F.outerHeight(!0))
                    } catch (G) { }
            } else if (h.autoWidth || h.autoHeight)
                g.addClass("fancybox-tmp"),
                    h.autoWidth || g.width(C),
                    h.autoHeight || g.height(A),
                    h.autoWidth && (C = g.width()),
                    h.autoHeight && (A = g.height()),
                    g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n),
                p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n,
                j = l(c / D)),
                j > p && (j = p,
                    c = l(j * D)),
                c < m && (c = m,
                    j = l(c / D)),
                j < u && (j = u,
                    c = l(j * D))) : (c = Math.max(m, Math.min(c, n)),
                        h.autoHeight && "iframe" !== h.type && (g.width(c),
                            j = g.height()),
                        j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j),
                    e.width(c + x),
                    a = e.width(),
                    y = e.height(),
                    h.aspectRatio)
                    for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)
                        j = Math.max(u, Math.min(p, j - 10)),
                            c = l(j * D),
                            c < m && (c = m,
                                j = l(c / D)),
                            c > n && (c = n,
                                j = l(c / D)),
                            g.width(c).height(j),
                            e.width(c + x),
                            a = e.width(),
                            y = e.height();
                else
                    c = Math.max(m, Math.min(c, c - (a - z))),
                        j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {
                    width: w(a),
                    height: w(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function (a) {
            var d = b.current
                , e = b.getViewport()
                , c = d.margin
                , f = b.wrap.width() + c[1] + c[3]
                , g = b.wrap.height() + c[0] + c[2]
                , c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y,
                c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0,
                b.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                b.update(),
                (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                    !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                        b[a.closeClick ? "close" : "next"]())
                }),
                a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                    a.preventDefault();
                    b.close()
                }),
                a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev),
                    (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)),
                b.trigger("afterShow"),
                !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1,
                    b.play()))
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current
                , d = a.element
                , e = a.orig
                , c = {}
                , f = 50
                , g = 50
                , h = a.hPadding
                , j = a.wPadding
                , m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"),
                e.length || (e = d));
            t(e) ? (c = e.offset(),
                e.is("img") && (f = e.outerWidth(),
                    g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio,
                        c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked)
                c.top -= m.y,
                    c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        },
        step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace
                , h = c.skinSpace;
            if ("width" === f || "height" === f)
                e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start),
                    b.isClosing && (e = 1 - e),
                    c = "width" === f ? c.wPadding : c.hPadding,
                    c = a - c,
                    b.skin[f](l("width" === f ? c : c - g * e)),
                    b.inner[f](l("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function () {
            var a = b.current
                , d = a.pos
                , e = a.openEffect
                , c = "elastic" === e
                , k = f.extend({
                    opacity: 1
                }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(),
                a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function () {
            var a = b.current
                , d = a.closeEffect
                , e = "elastic" === d
                , c = {
                    opacity: 0.1
                };
            e && (c = this.getOrigPosition(),
                a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {
                opacity: 1
            }, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left",
                "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200),
                    c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200),
                        c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function () {
            var a = b.previous
                , d = a.prevEffect
                , e = {
                    opacity: 0.1
                }
                , c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
                this.fixed = !0)
        },
        open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)),
                this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay"))
                    return b.isActive ? b.close() : d.close(),
                        !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"),
                a = n.scrollTop(),
                b = n.scrollLeft(),
                this.el.removeClass("fancybox-lock"),
                n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
                p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function (a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1),
                b.locked = this.overlay.append(b.wrap),
                b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function () {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"),
                this.el.addClass("fancybox-margin")),
                e = n.scrollTop(),
                c = n.scrollLeft(),
                this.el.addClass("fancybox-lock"),
                n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function (a) {
            var d = b.current
                , e = d.title
                , c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin,
                            d.appendTo("body"),
                            I && d.width(d.width()),
                            d.wrapInner('<span class="child"></span>'),
                            b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", k = function (g) {
            var h = f(this).blur(), j = d, k, l;
            !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group",
                l = h.attr(k),
                l || (k = "rel",
                    l = h.get(0)[k]),
                l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e,
                    h = h.filter("[" + k + '="' + l + '"]'),
                    j = h.index(this)),
                a.index = j,
                !1 !== b.open(h, a) && g.preventDefault())
        };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    }
        ;
    p.ready(function () {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
                , b = a.children()
                , b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        }
        );
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
}
)(window, document, jQuery);


/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
    "use strict";

    //Shortcut for fancyBox object
    var F = $.fancybox,
        format = function (url, rez, params) {
            params = params || '';

            if ($.type(params) === "object") {
                params = $.param(params, true);
            }

            $.each(rez, function (key, value) {
                url = url.replace('$' + key, value || '');
            });

            if (params.length) {
                url += (url.indexOf('?') > 0 ? '&' : '?') + params;
            }

            return url;
        };

    //Add helper object
    F.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: 'opaque',
                    enablejsapi: 1
                },
                type: 'iframe',
                url: '//www.youtube.com/embed/$3'
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: 'iframe',
                url: '//player.vimeo.com/video/$1'
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: 'yes'
                },
                type: 'swf',
                url: function (rez, params, obj) {
                    obj.swf.flashVars = 'playerVars=' + $.param(params, true);

                    return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: 'swf',
                url: '//www.dailymotion.com/swf/video/$1'
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: 'iframe',
                url: '//www.twitvid.com/embed.php?guid=$1'
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: 'image',
                url: '//twitpic.com/show/full/$1/'
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: 'image',
                url: '//$1/p/$2/media/?size=l'
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: 'iframe',
                url: function (rez) {
                    return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
                }
            }
        },

        beforeLoad: function (opts, obj) {
            var url = obj.href || '',
                type = false,
                what,
                item,
                rez,
                params;

            for (what in opts) {
                if (opts.hasOwnProperty(what)) {
                    item = opts[what];
                    rez = url.match(item.matcher);

                    if (rez) {
                        type = item.type;
                        params = $.extend(true, {}, item.params, obj[what] || ($.isPlainObject(opts[what]) ? opts[what].params : null));

                        url = $.type(item.url) === "function" ? item.url.call(this, rez, params, obj) : format(item.url, rez, params);

                        break;
                    }
                }
            }

            if (type) {
                obj.href = url;
                obj.type = type;

                obj.autoHeight = false;
            }
        }
    };

}(jQuery));

/*! WOW - v1.1.1 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
    var a, b, c, d, e, f = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
        ;
    b = function () {
        function a() { }
        return a.prototype.extend = function (a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                    null == a[c] && (a[c] = d);
            return a
        }
            ,
            a.prototype.isMobile = function (a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }
            ,
            a.prototype.createEvent = function (a, b, c, d) {
                var e;
                return null == b && (b = !1),
                    null == c && (c = !1),
                    null == d && (d = null),
                    null != document.createEvent ? (e = document.createEvent("CustomEvent"),
                        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
                            e.eventType = a) : e.eventName = a,
                    e
            }
            ,
            a.prototype.emitEvent = function (a, b) {
                return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
            }
            ,
            a.prototype.addEvent = function (a, b, c) {
                return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
            }
            ,
            a.prototype.removeEvent = function (a, b, c) {
                return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
            }
            ,
            a.prototype.innerHeight = function () {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
            }
            ,
            a
    }(),
        c = this.WeakMap || this.MozWeakMap || (c = function () {
            function a() {
                this.keys = [],
                    this.values = []
            }
            return a.prototype.get = function (a) {
                var b, c, d, e, f;
                for (f = this.keys,
                    b = d = 0,
                    e = f.length; e > d; b = ++d)
                    if (c = f[b],
                        c === a)
                        return this.values[b]
            }
                ,
                a.prototype.set = function (a, b) {
                    var c, d, e, f, g;
                    for (g = this.keys,
                        c = e = 0,
                        f = g.length; f > e; c = ++e)
                        if (d = g[c],
                            d === a)
                            return void (this.values[c] = b);
                    return this.keys.push(a),
                        this.values.push(b)
                }
                ,
                a
        }()),
        a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
            function a() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return a.notSupported = !0,
                a.prototype.observe = function () { }
                ,
                a
        }()),
        d = this.getComputedStyle || function (a) {
            return this.getPropertyValue = function (b) {
                var c;
                return "float" === b && (b = "styleFloat"),
                    e.test(b) && b.replace(e, function (a, b) {
                        return b.toUpperCase()
                    }),
                    (null != (c = a.currentStyle) ? c[b] : void 0) || null
            }
                ,
                this
        }
        ,
        e = /(\-([a-z]){1})/g,
        this.WOW = function () {
            function e(a) {
                null == a && (a = {}),
                    this.scrollCallback = f(this.scrollCallback, this),
                    this.scrollHandler = f(this.scrollHandler, this),
                    this.start = f(this.start, this),
                    this.scrolled = !0,
                    this.config = this.util().extend(a, this.defaults),
                    this.animationNameCache = new c,
                    this.wowEvent = this.util().createEvent(this.config.boxClass)
            }
            return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            },
                e.prototype.init = function () {
                    var a;
                    return this.element = window.document.documentElement,
                        "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                        this.finished = []
                }
                ,
                e.prototype.start = function () {
                    var b, c, d, e;
                    if (this.stopped = !1,
                        this.boxes = function () {
                            var a, c, d, e;
                            for (d = this.element.querySelectorAll("." + this.config.boxClass),
                                e = [],
                                a = 0,
                                c = d.length; c > a; a++)
                                b = d[a],
                                    e.push(b);
                            return e
                        }
                            .call(this),
                        this.all = function () {
                            var a, c, d, e;
                            for (d = this.boxes,
                                e = [],
                                a = 0,
                                c = d.length; c > a; a++)
                                b = d[a],
                                    e.push(b);
                            return e
                        }
                            .call(this),
                        this.boxes.length)
                        if (this.disabled())
                            this.resetStyle();
                        else
                            for (e = this.boxes,
                                c = 0,
                                d = e.length; d > c; c++)
                                b = e[c],
                                    this.applyStyle(b, !0);
                    return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
                        this.util().addEvent(window, "resize", this.scrollHandler),
                        this.interval = setInterval(this.scrollCallback, 50)),
                        this.config.live ? new a(function (a) {
                            return function (b) {
                                var c, d, e, f, g;
                                for (g = [],
                                    c = 0,
                                    d = b.length; d > c; c++)
                                    f = b[c],
                                        g.push(function () {
                                            var a, b, c, d;
                                            for (c = f.addedNodes || [],
                                                d = [],
                                                a = 0,
                                                b = c.length; b > a; a++)
                                                e = c[a],
                                                    d.push(this.doSync(e));
                                            return d
                                        }
                                            .call(a));
                                return g
                            }
                        }(this)).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }) : void 0
                }
                ,
                e.prototype.stop = function () {
                    return this.stopped = !0,
                        this.util().removeEvent(window, "scroll", this.scrollHandler),
                        this.util().removeEvent(window, "resize", this.scrollHandler),
                        null != this.interval ? clearInterval(this.interval) : void 0
                }
                ,
                e.prototype.sync = function () {
                    return a.notSupported ? this.doSync(this.element) : void 0
                }
                ,
                e.prototype.doSync = function (a) {
                    var b, c, d, e, f;
                    if (null == a && (a = this.element),
                        1 === a.nodeType) {
                        for (a = a.parentNode || a,
                            e = a.querySelectorAll("." + this.config.boxClass),
                            f = [],
                            c = 0,
                            d = e.length; d > c; c++)
                            b = e[c],
                                g.call(this.all, b) < 0 ? (this.boxes.push(b),
                                    this.all.push(b),
                                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                                    f.push(this.scrolled = !0)) : f.push(void 0);
                        return f
                    }
                }
                ,
                e.prototype.show = function (a) {
                    return this.applyStyle(a),
                        a.className = a.className + " " + this.config.animateClass,
                        null != this.config.callback && this.config.callback(a),
                        this.util().emitEvent(a, this.wowEvent),
                        this.util().addEvent(a, "animationend", this.resetAnimation),
                        this.util().addEvent(a, "oanimationend", this.resetAnimation),
                        this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
                        this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
                        a
                }
                ,
                e.prototype.applyStyle = function (a, b) {
                    var c, d, e;
                    return d = a.getAttribute("data-wow-duration"),
                        c = a.getAttribute("data-wow-delay"),
                        e = a.getAttribute("data-wow-iteration"),
                        this.animate(function (f) {
                            return function () {
                                return f.customStyle(a, b, d, c, e)
                            }
                        }(this))
                }
                ,
                e.prototype.animate = function () {
                    return "requestAnimationFrame" in window ? function (a) {
                        return window.requestAnimationFrame(a)
                    }
                        : function (a) {
                            return a()
                        }
                }(),
                e.prototype.resetStyle = function () {
                    var a, b, c, d, e;
                    for (d = this.boxes,
                        e = [],
                        b = 0,
                        c = d.length; c > b; b++)
                        a = d[b],
                            e.push(a.style.visibility = "visible");
                    return e
                }
                ,
                e.prototype.resetAnimation = function (a) {
                    var b;
                    return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
                        b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
                }
                ,
                e.prototype.customStyle = function (a, b, c, d, e) {
                    return b && this.cacheAnimationName(a),
                        a.style.visibility = b ? "hidden" : "visible",
                        c && this.vendorSet(a.style, {
                            animationDuration: c
                        }),
                        d && this.vendorSet(a.style, {
                            animationDelay: d
                        }),
                        e && this.vendorSet(a.style, {
                            animationIterationCount: e
                        }),
                        this.vendorSet(a.style, {
                            animationName: b ? "none" : this.cachedAnimationName(a)
                        }),
                        a
                }
                ,
                e.prototype.vendors = ["moz", "webkit"],
                e.prototype.vendorSet = function (a, b) {
                    var c, d, e, f;
                    d = [];
                    for (c in b)
                        e = b[c],
                            a["" + c] = e,
                            d.push(function () {
                                var b, d, g, h;
                                for (g = this.vendors,
                                    h = [],
                                    b = 0,
                                    d = g.length; d > b; b++)
                                    f = g[b],
                                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                                return h
                            }
                                .call(this));
                    return d
                }
                ,
                e.prototype.vendorCSS = function (a, b) {
                    var c, e, f, g, h, i;
                    for (h = d(a),
                        g = h.getPropertyCSSValue(b),
                        f = this.vendors,
                        c = 0,
                        e = f.length; e > c; c++)
                        i = f[c],
                            g = g || h.getPropertyCSSValue("-" + i + "-" + b);
                    return g
                }
                ,
                e.prototype.animationName = function (a) {
                    var b;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = d(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                }
                ,
                e.prototype.cacheAnimationName = function (a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                }
                ,
                e.prototype.cachedAnimationName = function (a) {
                    return this.animationNameCache.get(a)
                }
                ,
                e.prototype.scrollHandler = function () {
                    return this.scrolled = !0
                }
                ,
                e.prototype.scrollCallback = function () {
                    var a;
                    return !this.scrolled || (this.scrolled = !1,
                        this.boxes = function () {
                            var b, c, d, e;
                            for (d = this.boxes,
                                e = [],
                                b = 0,
                                c = d.length; c > b; b++)
                                a = d[b],
                                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                            return e
                        }
                            .call(this),
                        this.boxes.length || this.config.live) ? void 0 : this.stop()
                }
                ,
                e.prototype.offsetTop = function (a) {
                    for (var b; void 0 === a.offsetTop;)
                        a = a.parentNode;
                    for (b = a.offsetTop; a = a.offsetParent;)
                        b += a.offsetTop;
                    return b
                }
                ,
                e.prototype.isVisible = function (a) {
                    var b, c, d, e, f;
                    return c = a.getAttribute("data-wow-offset") || this.config.offset,
                        f = window.pageYOffset,
                        e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
                        d = this.offsetTop(a),
                        b = d + a.clientHeight,
                        e >= d && b >= f
                }
                ,
                e.prototype.util = function () {
                    return null != this._util ? this._util : this._util = new b
                }
                ,
                e.prototype.disabled = function () {
                    return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                }
                ,
                e
        }()
}
).call(this);



(function (a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function (f) {
    var y = "1.6.9"
        , p = "left"
        , o = "right"
        , e = "up"
        , x = "down"
        , c = "in"
        , A = "out"
        , m = "none"
        , s = "auto"
        , l = "swipe"
        , t = "pinch"
        , B = "tap"
        , j = "doubletap"
        , b = "longtap"
        , z = "hold"
        , E = "horizontal"
        , u = "vertical"
        , i = "all"
        , r = 10
        , g = "start"
        , k = "move"
        , h = "end"
        , q = "cancel"
        , a = "ontouchstart" in window
        , v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled
        , d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled
        , C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function (H) {
        var G = f(this)
            , F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipe")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    }
        ;
    f.fn.swipe.version = y;
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };
    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipe.defaults, F);
        return this.each(function () {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }
    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents)
            , K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown"
            , az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove"
            , V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup"
            , T = aA ? null : "mouseleave"
            , aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0
            , aQ = null
            , ac = 0
            , a2 = 0
            , a0 = 0
            , H = 1
            , ar = 0
            , aK = 0
            , N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0
            , a3 = 0
            , a6 = 0
            , ae = 0
            , O = 0;
        var aX = null
            , ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function () {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        }
            ;
        this.disable = function () {
            aL();
            return aS
        }
            ;
        this.destroy = function () {
            aL();
            aS.data(C, null);
            aS = null
        }
            ;
        this.option = function (bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipe.options")
            }
            return null
        }
            ;
        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches, bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function () {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }
        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches, bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }
        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc
                , be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }
        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }
        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }
        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }
        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }
        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }
        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function () {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }
        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }
        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }
        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }
        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }
        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }
        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }
        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }
        function Q() {
            return !!(a9() && aY())
        }
        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }
        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }
        function J() {
            return !!(aW() && W())
        }
        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }
        function Y() {
            return aR[0].end.x !== 0
        }
        function a7() {
            return !!(aw.tap)
        }
        function Z() {
            return !!(aw.doubleTap)
        }
        function aV() {
            return !!(aw.longTap)
        }
        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }
        function I() {
            return R()
        }
        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }
        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }
        function ai() {
            return !!(ay() && a7())
        }
        function aH() {
            return !!(R() && Z())
        }
        function aq() {
            return !!(a1() && aV())
        }
        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }
        function S() {
            a6 = 0;
            ae = 0
        }
        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }
        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }
        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }
        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }
        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }
        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }
        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }
        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }
        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }
        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }
        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }
        function aN() {
            return a3 - U
        }
        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }
        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }
        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }
        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }
        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }
        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }
        function au() {
            var bc = new Date();
            return bc.getTime()
        }
        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }
        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
