(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 107 ], {
    615: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var S = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], n = !0, r = !1, a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(n = (i = u.next()).done) && (o.push(i.value), 
                    !t || o.length !== t); n = !0) ;
                } catch (e) {
                    r = !0, a = e;
                } finally {
                    try {
                        !n && u.return && u.return();
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
        var R = o(0), r = _interopRequireDefault(R), l = _interopRequireDefault(o(11));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(616);
        var a = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(CouponModal, R.Component), n(CouponModal, [ {
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
                })(CouponModal.prototype.__proto__ || Object.getPrototypeOf(CouponModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0,
                    autoReceiveCoupon: []
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var u = this, e = this.props, t = e.$store.couponData, o = t.autoReceiveCoupon, n = t.userCouponRecord, r = e.extraData, a = r && r.isShowCouponRecord, i = r && r.couponList, p = a ? n : o;
                i && (p = i), p.forEach(function(e) {
                    var t = e.validStartTime, o = e.validTime, n = e.nowDate;
                    if (2 == e.whetherDay && n < t) {
                        var r = (0, l.default)(t).format("YYYY.M.D HH:mm");
                        e.validDayEndText = r + "后可用";
                    } else if (864e5 <= o - n) {
                        var a = (0, l.default)(o).format("YYYY.M.D HH:mm");
                        e.validDayEndText = "有效期至" + a;
                    } else {
                        var i = u.formatDate(o, n);
                        i && (e.validDayEndText = i + "后失效");
                    }
                }), this.setState({
                    autoReceiveCoupon: p
                });
            }
        }, {
            key: "formatDate",
            value: function formatDate(e, t) {
                if (0 < e && 0 < t && t < e) {
                    var o = (e - t) / 1e3, n = Math.floor(o / 86400), r = Math.floor((o - 86400 * n) / 3600), a = Math.floor((o - 86400 * n - 3600 * r) / 60);
                    return (0 < n ? n + "天" : "") + (0 < r ? r + "小时" : "") + (0 == r && 0 == a ? "1分" : a + "分");
                }
                return null;
            }
        }, {
            key: "_createCouponItemData",
            value: function _createCouponItemData() {
                return function(e) {
                    var t = e.childCouponName, o = e.couponName, n = e.validDayEndText, r = e.validDay, a = e.orderAmount, i = e.childOrderAmount, u = e.childPrice;
                    return {
                        validDayEndText: n,
                        discount: e.discount,
                        childCouponName: t,
                        couponName: o,
                        validDay: r,
                        price: e.price,
                        childPrice: u,
                        orderAmount: a,
                        childOrderAmount: i
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                var n = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, a = (0, R.genCompid)(r + "$compid__152"), i = S(a, 2), u = i[0], p = i[1], l = this.__props, c = l.isRegisterMode, s = l.$store, d = l.extraData;
                if (!s) return null;
                var f = 15498144e5, m = 15502464e5, _ = Date.now(), h = "https://qn-cdn-pic.feng1.com/pop_pict_orange_nor.png", y = "coupon-modal--coming";
                c || (y = "coupon-modal--received", h = "https://qn-cdn-pic.feng1.com/pop_pict_orange2_nor.png"), 
                f < _ && _ < m && (h = "https://qn-cdn-pic.feng1.com/kaigongdaji_2019.png", y = "coupon-modal--happy-new-year");
                var v = this.__state, g = v.isShow, C = v.autoReceiveCoupon;
                if (!(C && 0 < C.length)) return null;
                var b = {}, w = C.find(function(e) {
                    return e.styleTemplateVO;
                });
                w && (w.styleTemplateVO.headImg && (y = "coupon-modal--no", h = w.styleTemplateVO.headImg), 
                w.styleTemplateVO.background && (b = {
                    background: w.styleTemplateVO.background,
                    color: "#fff"
                }));
                var D = d && d.isShowCouponRecord;
                D && (h = "https://qn-cdn-pic.feng1.com/theme_pic-20210325-b0e20800a00944a67d7853dcd05223e9?imageslim"), 
                this.anonymousFunc0 = function() {
                    n.__props.actions.$log.pushEvent({
                        eventCode: "10171",
                        eventName: "关闭"
                    }), n.setState({
                        isShow: !1
                    });
                };
                var O = (0, R.internal_inline_style)(b), M = (0, R.internal_inline_style)(b), $ = C.map(function(e, t) {
                    return e = {
                        $original: (0, R.internal_get_original)(e)
                    }, {
                        $loopState__temp2: n._createCouponItemData(r + "bdbzzzzzzz" + t)(e.$original),
                        $original: e.$original
                    };
                });
                return R.propsManager.set({
                    className: "coupon-modal-container",
                    isOpen: g,
                    onClose: this.anonymousFunc0
                }, p, u), Object.assign(this.__state, {
                    anonymousState__temp3: O,
                    anonymousState__temp4: M,
                    loopArray36: $,
                    $compid__152: p,
                    $store: s,
                    typeClassName: y,
                    headerImageUrl: h,
                    isShowCouponRecord: D
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), CouponModal);
        function CouponModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CouponModal.__proto__ || Object.getPrototypeOf(CouponModal)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp3", "anonymousState__temp4", "loopArray36", "$compid__152", "$store", "autoReceiveCoupon", "typeClassName", "headerImageUrl", "isShowCouponRecord", "isShow", "extraData", "isRegisterMode", "actions" ], 
            e.customComponents = [ "Modal" ], e;
        }
        a.$$events = [], a.$$componentPath = "pages/index/modal/CouponModal/index", t.default = a, 
        Component(o(0).default.createComponent(a));
    },
    616: function(e, t, o) {}
}, [ [ 615, 0, 1, 2 ] ] ]);