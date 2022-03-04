(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 56 ], {
    576: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = _interopRequireDefault(o(3)), B = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], n = !0, r = !1, a = void 0;
                try {
                    for (var i, p = e[Symbol.iterator](); !(n = (i = p.next()).done) && (o.push(i.value), 
                    !t || o.length !== t); n = !0) ;
                } catch (e) {
                    r = !0, a = e;
                } finally {
                    try {
                        !n && p.return && p.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var r = o(8), i = _interopRequireDefault(o(2)), A = o(0), p = _interopRequireDefault(A), u = o(1);
        o(577);
        var s = o(21);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(r, a) {
                    return function step(e, t) {
                        try {
                            var o = i[e](t), n = o.value;
                        } catch (e) {
                            return void a(e);
                        }
                        if (!o.done) return Promise.resolve(n).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        r(n);
                    }("next");
                });
            };
        }
        var c, l = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(CouponCenter, A.Component), n(CouponCenter, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === n) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, o);
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(CouponCenter.prototype.__proto__ || Object.getPrototypeOf(CouponCenter.prototype), "_constructor", this).apply(this, arguments), 
                this.data = {
                    hasRequest: !1,
                    hasInit: !1,
                    defaultBgUrl: "https://qn-cdn-pic.feng1.com/theme_pic-20200923-d7fb2b42ac8435d1a24a9c2fa27aa5c8?imageslim&imageView2/2/w/800"
                }, this.$$refs = new p.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = (u.Storage.get("themeConfig") || {}).couponCenterBg;
                e && (this.data.defaultBgUrl = e);
            }
        }, {
            key: "onImageLoad",
            value: function onImageLoad() {
                this.props.onLoad && this.props.onLoad();
            }
        }, {
            key: "clickReceive",
            value: function clickReceive(e) {
                1 !== e.receiveStatus || this.data.hasRequest || this.receiveCouponById(e.couponId);
            }
        }, {
            key: "receiveCouponById",
            value: (c = _asyncToGenerator(a.default.mark(function _callee(t) {
                var o, n, r;
                return a.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, (0, u.subscribeMessage)(s.SubscribeMessageTemplateName.COUPON, {
                            moduleName: "coupon"
                        });

                      case 2:
                        return o = this.props.shelfId, this.data.hasRequest = !0, n = (0, u.Loading)("领取中..."), 
                        e.prev = 5, e.next = 8, i.default.get("couponDistributeCoupon", {
                            couponId: t,
                            shelfId: o
                        });

                      case 8:
                        r = e.sent, this.data.hasRequest = !1, n && n.hide(), !0 === r && ((this.data.hasInit = !1, 
                        u.Tips)("领取成功！快去使用吧～"), this.props.onChange && this.props.onChange(t)), e.next = 19;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(5), (0, u.Tips)("领取失败！"), n && n.hide(), this.data.hasRequest = !1;

                      case 19:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this, [ [ 5, 14 ] ]);
            })), function receiveCouponById(e) {
                return c.apply(this, arguments);
            })
        }, {
            key: "_createCouponListData",
            value: function _createCouponListData(q) {
                var U = this;
                return function() {
                    var x = U.props.couponList;
                    return {
                        loopArray30: x ? x.map(function(e, t) {
                            e = {
                                $original: (0, A.internal_get_original)(e)
                            };
                            var o = x ? 1 == e.$original.receiveStatus : null, n = x ? 2 == e.$original.receiveStatus : null, r = x ? 3 == e.$original.receiveStatus : null, a = x ? 1 == e.$original.discountType : null, i = x ? 2 == e.$original.discountType : null, p = x ? U.getCouponDesc(e.$original) : null, u = (0, 
                            A.genCompid)(q + "bbazzzzzzz" + t, !0), s = B(u, 2), c = s[0], l = s[1];
                            A.propsManager.set({
                                isShow: o
                            }, l, c);
                            var f = (0, A.genCompid)(q + "bbbzzzzzzz" + t, !0), d = B(f, 2), _ = d[0], h = d[1];
                            A.propsManager.set({
                                isShow: n
                            }, h, _);
                            var g = (0, A.genCompid)(q + "bbczzzzzzz" + t, !0), m = B(g, 2), v = m[0], y = m[1];
                            A.propsManager.set({
                                isShow: r
                            }, y, v);
                            var z = (0, A.genCompid)(q + "bbdzzzzzzz" + t, !0), b = B(z, 2), C = b[0], $ = b[1];
                            A.propsManager.set({
                                isShow: a
                            }, $, C);
                            var w = (0, A.genCompid)(q + "bbezzzzzzz" + t, !0), S = B(w, 2), k = S[0], O = S[1];
                            A.propsManager.set({
                                price: e.$original.price,
                                isRound: !1
                            }, O, k);
                            var I = (0, A.genCompid)(q + "bbfzzzzzzz" + t, !0), R = B(I, 2), D = R[0], P = R[1];
                            A.propsManager.set({
                                isShow: i
                            }, P, D);
                            var T = (0, A.genCompid)(q + "bbgzzzzzzz" + t, !0), L = B(T, 2), j = L[0], M = L[1];
                            return A.propsManager.set({
                                price: e.$original.orderAmount,
                                isRound: !1,
                                showUnitName: !0
                            }, M, j), {
                                $loopState__temp2: o,
                                $loopState__temp4: n,
                                $loopState__temp6: r,
                                $loopState__temp8: a,
                                $loopState__temp10: i,
                                $loopState__temp12: p,
                                $compid__118: l,
                                $compid__119: h,
                                $compid__120: y,
                                $compid__121: $,
                                $compid__122: O,
                                $compid__123: P,
                                $compid__124: M,
                                $original: e.$original
                            };
                        }) : [],
                        couponList: x
                    };
                };
            }
        }, {
            key: "getCouponDesc",
            value: function getCouponDesc(e) {
                var t = e.couponType, o = e.remark;
                return t === r.CouponType.category ? "限" + o + "商品可用" : t === r.CouponType.product ? "限部分商品可用" : "全场通用";
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var n = this.$prefix, r = (0, A.genCompid)(n + "$compid__125"), a = B(r, 2), i = a[0], p = a[1], u = this.__props, s = u.couponList, c = u.couponTheme;
                if (!s || 0 === s.length) return null;
                var l = this.data.defaultBgUrl, f = c && c.bgUrl ? c.bgUrl : l, d = this._createCouponListData(n + "bajzzzzzzz")(), _ = 2 <= s.length;
                return A.propsManager.set({
                    isShow: _
                }, p, i), Object.assign(this.__state, {
                    anonymousState__temp14: _,
                    $compid__125: p,
                    couponList: s,
                    couponGif: f,
                    anonymousState__temp13: d
                }), this.__state;
            }
        } ]), CouponCenter);
        function CouponCenter() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponCenter);
            var t = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CouponCenter.__proto__ || Object.getPrototypeOf(CouponCenter)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp14", "$compid__125", "couponList", "couponGif", "anonymousState__temp13", "shelfId", "couponTheme" ], 
            t.shouldComponentUpdate = function(e) {
                return !t.data.hasInit && (t.data.hasInit = 0 < e.couponList.length, !0);
            }, t.customComponents = [ "Toggle", "Price" ], t;
        }
        l.$$events = [ "clickReceive", "onImageLoad" ], l.$$componentPath = "packages/racoonjs/components/customer/components/CouponCenter/index", 
        t.default = l, Component(o(0).default.createComponent(l));
    },
    577: function(e, t, o) {}
}, [ [ 576, 0, 1, 2, 3 ] ] ]);