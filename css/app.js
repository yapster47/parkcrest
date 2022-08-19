! function () {
   var t = {
         523: function (t) {
            ! function () {
               "use strict";
               t.exports = {
                  polyfill: function () {
                     var t = window,
                        o = document;
                     if (!("scrollBehavior" in o.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                        var e, l = t.HTMLElement || t.Element,
                           r = {
                              scroll: t.scroll || t.scrollTo,
                              scrollBy: t.scrollBy,
                              elementScroll: l.prototype.scroll || c,
                              scrollIntoView: l.prototype.scrollIntoView
                           },
                           n = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                           i = (e = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0);
                        t.scroll = t.scrollTo = function () {
                           void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? v.call(t, o.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                        }, t.scrollBy = function () {
                           void 0 !== arguments[0] && (s(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : v.call(t, o.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }, l.prototype.scroll = l.prototype.scrollTo = function () {
                           if (void 0 !== arguments[0])
                              if (!0 !== s(arguments[0])) {
                                 var t = arguments[0].left,
                                    o = arguments[0].top;
                                 v.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === o ? this.scrollTop : ~~o)
                              } else {
                                 if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                 r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                              }
                        }, l.prototype.scrollBy = function () {
                           void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior
                           }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, l.prototype.scrollIntoView = function () {
                           if (!0 !== s(arguments[0])) {
                              var e = d(this),
                                 l = e.getBoundingClientRect(),
                                 n = this.getBoundingClientRect();
                              e !== o.body ? (v.call(this, e, e.scrollLeft + n.left - l.left, e.scrollTop + n.top - l.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                 left: l.left,
                                 top: l.top,
                                 behavior: "smooth"
                              })) : t.scrollBy({
                                 left: n.left,
                                 top: n.top,
                                 behavior: "smooth"
                              })
                           } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                     }

                     function c(t, o) {
                        this.scrollLeft = t, this.scrollTop = o
                     }

                     function s(t) {
                        if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                        if ("object" == typeof t && "smooth" === t.behavior) return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                     }

                     function a(t, o) {
                        return "Y" === o ? t.clientHeight + i < t.scrollHeight : "X" === o ? t.clientWidth + i < t.scrollWidth : void 0
                     }

                     function f(o, e) {
                        var l = t.getComputedStyle(o, null)["overflow" + e];
                        return "auto" === l || "scroll" === l
                     }

                     function u(t) {
                        var o = a(t, "Y") && f(t, "Y"),
                           e = a(t, "X") && f(t, "X");
                        return o || e
                     }

                     function d(t) {
                        for (; t !== o.body && !1 === u(t);) t = t.parentNode || t.host;
                        return t
                     }

                     function p(o) {
                        var e, l, r, i, c = (n() - o.startTime) / 468;
                        i = c = c > 1 ? 1 : c, e = .5 * (1 - Math.cos(Math.PI * i)), l = o.startX + (o.x - o.startX) * e, r = o.startY + (o.y - o.startY) * e, o.method.call(o.scrollable, l, r), l === o.x && r === o.y || t.requestAnimationFrame(p.bind(t, o))
                     }

                     function v(e, l, i) {
                        var s, a, f, u, d = n();
                        e === o.body ? (s = t, a = t.scrollX || t.pageXOffset, f = t.scrollY || t.pageYOffset, u = r.scroll) : (s = e, a = e.scrollLeft, f = e.scrollTop, u = c), p({
                           scrollable: s,
                           method: u,
                           startTime: d,
                           startX: a,
                           startY: f,
                           x: l,
                           y: i
                        })
                     }
                  }
               }
            }()
         }
      },
      o = {};

   function e(l) {
      var r = o[l];
      if (void 0 !== r) return r.exports;
      var n = o[l] = {
         exports: {}
      };
      return t[l](n, n.exports, e), n.exports
   }
   e.n = function (t) {
         var o = t && t.__esModule ? function () {
            return t.default
         } : function () {
            return t
         };
         return e.d(o, {
            a: o
         }), o
      }, e.d = function (t, o) {
         for (var l in o) e.o(o, l) && !e.o(t, l) && Object.defineProperty(t, l, {
            enumerable: !0,
            get: o[l]
         })
      }, e.o = function (t, o) {
         return Object.prototype.hasOwnProperty.call(t, o)
      },
      function () {
         "use strict";
         var t = e(523),
            o = e.n(t);
         const l = {
            scrollTo(t) {
               window.scroll({
                  top: t.offsetTop,
                  left: 0,
                  behavior: "smooth"
               })
            },
            init() {
               const t = document.querySelectorAll(".nav-menu-link");
               null != t && t.forEach((function (t) {
                  t.addEventListener("click", (function (o) {
                     const e = t.getAttribute("href"),
                        r = document.querySelector(e);
                     null != r && (document.querySelector("body").classList.toggle("hamburger-active"), setTimeout((() => {
                        l.scrollTo(r)
                     }), 850)), o.preventDefault()
                  }))
               }))
            }
         };
         var r = l;
         const n = {
            handleIntersect(t, o) {
               const e = document.querySelector(".header-block");
               null != e && t.forEach((t => {
                  t.isIntersecting ? (e.classList.remove("sticky-post"), e.classList.remove("sticky-pre")) : (e.classList.add("sticky-pre"), setTimeout((() => {
                     e.classList.add("sticky-post")
                  }), 250))
               }))
            },
            init() {
               const t = {
                     root: null,
                     rootMargin: "50px 0px 0px 0px",
                     threshold: [1]
                  },
                  o = document.querySelector("#sticky-observer");
               null != o && new IntersectionObserver(n.handleIntersect, t).observe(o)
            }
         };
         var i = n;
         ! function () {
            function t() {
               o().polyfill(),
                  function () {
                     const t = document.querySelector(".hamburger");
                     if (null != t) {
                        const o = document.querySelector("body");
                        t.addEventListener("click", (function (t) {
                           o.classList.toggle("hamburger-active"), t.preventDefault()
                        }), !1)
                     }
                  }(), r.init()
            }
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t(), window.addEventListener("load", (function () {
               i.init()
            }), !1)
         }()
      }()
}();