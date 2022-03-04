(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 57 ], {
    591: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
        }, o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var l = n(0), r = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(l);
        n(592);
        var i = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(FlyInCart, l.Component), o(FlyInCart, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(t);
                        return null === r ? void 0 : get(r, e, n);
                    }
                    if ("value" in o) return o.value;
                    var i = o.get;
                    return void 0 !== i ? i.call(n) : void 0;
                })(FlyInCart.prototype.__proto__ || Object.getPrototypeOf(FlyInCart.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    outerStyle: {},
                    innerStyle: {}
                }, this.animationDuration = 280, this.isAnimatePlaying = !1, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "start",
            value: function start(e, a, s) {
                var l = this;
                return new Promise(function(o) {
                    if (e && a && !l.isAnimatePlaying) {
                        l.isAnimatePlaying = !0;
                        var t = {
                            left: "0",
                            top: "0",
                            display: "none"
                        }, r = {
                            left: "0",
                            top: "0"
                        }, i = e.top + e.height / 2 - (a.top + a.height / 2);
                        t.left = e.left + e.height / 2 + "px", t.top = e.top + e.height / 2 + "px", l.setState({
                            outerStyle: t,
                            innerStyle: r
                        }, function() {
                            var n = u({}, t);
                            n.display = "block", l.setState({
                                outerStyle: n
                            }, function() {
                                var e = u({}, n), t = u({}, r);
                                e.left = a.left + a.width / 2 + "px", t.top = -i + "px", setTimeout(function() {
                                    l.setState({
                                        outerStyle: e,
                                        innerStyle: t
                                    }), setTimeout(function() {
                                        var t = u({}, e);
                                        t.display = "none", l.setState({
                                            outerStyle: t
                                        }), s.activeCartIcon(), l.isAnimatePlaying = !1, o();
                                    }, l.animationDuration);
                                }, 16);
                            });
                        });
                    } else o();
                });
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var o = this.__state, r = o.outerStyle, i = o.innerStyle, a = (0, l.internal_inline_style)(r), s = (0, 
                l.internal_inline_style)(i);
                return Object.assign(this.__state, {
                    anonymousState__temp: a,
                    anonymousState__temp2: s
                }), this.__state;
            }
        } ]), FlyInCart);
        function FlyInCart() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, FlyInCart);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (FlyInCart.__proto__ || Object.getPrototypeOf(FlyInCart)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "outerStyle", "innerStyle" ], 
            t.customComponents = [], t;
        }
        i.$$events = [], i.$$componentPath = "packages/racoonjs/components/customer/components/FlyInCart/index", 
        e.default = i, Component(n(0).default.createComponent(i));
    },
    592: function(t, e, n) {}
}, [ [ 591, 0, 1, 2 ] ] ]);