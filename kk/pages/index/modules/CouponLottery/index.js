(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 116 ], {
    568: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var u = _interopRequireDefault(n(3)), a = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var n = [], r = !0, a = !1, o = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(r = (u = i.next()).done) && (n.push(u.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    a = !0, o = t;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return n;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, r = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var o = n(0), i = _interopRequireDefault(o), s = n(1), c = _interopRequireDefault(n(569));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _asyncToGenerator(t) {
            return function() {
                var u = t.apply(this, arguments);
                return new Promise(function(a, o) {
                    return function step(t, e) {
                        try {
                            var n = u[t](e), r = n.value;
                        } catch (t) {
                            return void o(t);
                        }
                        if (!n.done) return Promise.resolve(r).then(function(t) {
                            step("next", t);
                        }, function(t) {
                            step("throw", t);
                        });
                        a(r);
                    }("next");
                });
            };
        }
        n(570);
        var l, p = "https://qn-cdn-pic.feng1.com/theme_pic-20201030-13b4f22b41166e8badfa95b18a079628", f = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(CouponLottery, o.Component), r(CouponLottery, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : get(a, e, n);
                    }
                    if ("value" in r) return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(n) : void 0;
                })(CouponLottery.prototype.__proto__ || Object.getPrototypeOf(CouponLottery.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    drawing: !1,
                    drawStyle: {},
                    couponData: null,
                    fadeCouponInfo: !1
                }, this.data = {
                    loading: !1,
                    discountItemHeight: 40
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "startDraw",
            value: (l = _asyncToGenerator(u.default.mark(function _callee2() {
                var e, n, r, a, o = this;
                return u.default.wrap(function _callee2$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (this.data.loading) return t.abrupt("return");
                        t.next = 2;
                        break;

                      case 2:
                        return this.data.loading = !0, e = this.props.onUpdateCouponData, n = s.Storage.get("shelfId") || "", 
                        t.next = 7, (0, c.default)({
                            shelfId: n
                        });

                      case 7:
                        r = t.sent, a = Number(r.discount), this.setState({
                            drawing: !0,
                            drawStyle: {
                                transform: "translateY(0)"
                            }
                        }, function() {
                            setTimeout(_asyncToGenerator(u.default.mark(function _callee() {
                                return u.default.wrap(function _callee$(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return t.next = 2, o.getDiscountItemHeight();

                                      case 2:
                                        o.setState({
                                            drawStyle: {
                                                transition: "4.5s cubic-bezier(.3,.95,0,.98)",
                                                transform: "translateY(" + o.getTargetTranslateY(a) + ")"
                                            },
                                            couponData: r
                                        });

                                      case 3:
                                      case "end":
                                        return t.stop();
                                    }
                                }, _callee, o);
                            })), 100), setTimeout(function() {
                                o.setState({
                                    fadeCouponInfo: !0,
                                    drawing: !1
                                }), e && o.props.onUpdateCouponData(r), o.data.loading = !1;
                            }, 4650);
                        });

                      case 10:
                      case "end":
                        return t.stop();
                    }
                }, _callee2, this);
            })), function startDraw() {
                return l.apply(this, arguments);
            })
        }, {
            key: "getTargetTranslateY",
            value: function getTargetTranslateY(t) {
                var e = this.data.discountItemHeight;
                return -(5 * e * 9 + (t - 1) * e) + "px";
            }
        }, {
            key: "getDiscountItemHeight",
            value: function getDiscountItemHeight() {
                var r = this;
                return new Promise(function(n) {
                    var t = i.default.createSelectorQuery().in(r.$scope);
                    t.select(".discount-item").boundingClientRect(), t.exec(function(t) {
                        var e = a(t, 1)[0];
                        console.log(e), r.data.discountItemHeight = e.height, n();
                    });
                });
            }
        }, {
            key: "_createNoDrawStyleData",
            value: function _createNoDrawStyleData() {
                var e = this;
                return function() {
                    var t = e.props.data;
                    return {
                        beforeImg: t.beforeImg || "https://qn-cdn-pic.feng1.com/theme_pic-20201030-30010b4ed4ab1deaec684784b68993ed",
                        afterImg: t.afterImg || p
                    };
                };
            }
        }, {
            key: "_createDrawingStyleData",
            value: function _createDrawingStyleData() {
                var r = this;
                return function() {
                    var t = new Array(54).fill(0).map(function(t, e) {
                        return e % 9 + 1;
                    }), e = r.state.drawStyle, n = r.props.data.afterImg || p;
                    return {
                        anonymousState__temp: (0, o.internal_inline_style)(e),
                        afterImg: n,
                        discountList: t
                    };
                };
            }
        }, {
            key: "_createDrawStyleData",
            value: function _createDrawStyleData() {
                var s = this;
                return function() {
                    var t = s.state, e = t.couponData, n = t.fadeCouponInfo, r = s.props.data, a = e || r, o = a.orderAmount, u = a.discountAmountMax, i = a.discount;
                    return {
                        afterImg: r.afterImg || p,
                        fadeCouponInfo: n,
                        discountAmountMax: u,
                        discount: i,
                        orderAmount: o
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var r = this.$prefix, a = this.__props.data, o = this.__state, u = o.drawing, i = !!o.couponData || a && a.hasLottery, s = u ? this._createDrawingStyleData(r + "bafzzzzzzz")() : null, c = i ? this._createDrawStyleData(r + "bagzzzzzzz")() : null, l = this._createNoDrawStyleData(r + "bahzzzzzzz")();
                return Object.assign(this.__state, {
                    anonymousState__temp2: s,
                    hasDraw: i,
                    anonymousState__temp3: c,
                    anonymousState__temp4: l
                }), this.__state;
            }
        } ]), CouponLottery);
        function CouponLottery() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponLottery);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CouponLottery.__proto__ || Object.getPrototypeOf(CouponLottery)).apply(this, arguments));
            return t.$usedState = [ "drawing", "anonymousState__temp2", "hasDraw", "anonymousState__temp3", "anonymousState__temp4", "drawStyle", "couponData", "fadeCouponInfo", "data" ], 
            t.customComponents = [], t;
        }
        f.$$events = [ "startDraw" ], f.$$componentPath = "pages/index/modules/CouponLottery/index", 
        e.default = f, Component(n(0).default.createComponent(f));
    },
    569: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function fetchWxappDiscountCouponLottery(t, r) {
            var a = (0, u.default)("discount/coupon/lottery", "customer");
            return new Promise(function(e, n) {
                o.default.post(a, t, r).then(function(t) {
                    e(t);
                }).catch(function(t) {
                    n(t);
                });
            });
        };
        var o = _interopRequireDefault(n(2)), u = _interopRequireDefault(n(29));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
    },
    570: function(t, e, n) {}
}, [ [ 568, 0, 1, 2, 3 ] ] ]);