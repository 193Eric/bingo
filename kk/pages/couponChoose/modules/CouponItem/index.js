(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 103 ], {
    676: function(e, o, t) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var S = function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, o) {
                var t = [], n = !0, a = !1, i = void 0;
                try {
                    for (var p, r = e[Symbol.iterator](); !(n = (p = r.next()).done) && (t.push(p.value), 
                    !o || t.length !== o); n = !0) ;
                } catch (e) {
                    a = !0, i = e;
                } finally {
                    try {
                        !n && r.return && r.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return t;
            }(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(e, o, t) {
            return o && defineProperties(e.prototype, o), t && defineProperties(e, t), e;
        };
        function defineProperties(e, o) {
            for (var t = 0; t < o.length; t++) {
                var n = o[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var M = t(0), a = _interopRequireDefault(M), z = _interopRequireDefault(t(7)), p = _interopRequireDefault(t(2)), r = t(1);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t(677);
        var i = (function _inherits(e, o) {
            if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
            e.prototype = Object.create(o && o.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o);
        }(CouponItem, M.Component), n(CouponItem, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, o, t) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, o);
                    if (void 0 === n) {
                        var a = Object.getPrototypeOf(e);
                        return null === a ? void 0 : get(a, o, t);
                    }
                    if ("value" in n) return n.value;
                    var i = n.get;
                    return void 0 !== i ? i.call(t) : void 0;
                })(CouponItem.prototype.__proto__ || Object.getPrototypeOf(CouponItem.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isOpenDesc: !1
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "handleClick",
            value: function handleClick() {
                var e = this.props, o = e.onSelect, t = e.coupon, n = e.disabled, a = e.isChooseMode;
                !n && a && o && this.props.onSelect(t);
            }
        }, {
            key: "_createCouponBtnData",
            value: function _createCouponBtnData() {
                var r = this;
                return function() {
                    var e = r.props, o = e.coupon, t = e.disabled, n = e.isChooseMode, a = o.isValidPeriod, i = Number(o.couponStatus), p = "";
                    return n ? p = t ? "不可用" : "可使用" : t ? 3 == i ? p = "已使用" : 4 == i ? p = "已过期" : 2 == i && a && (p = "未到使用时间") : p = "立即使用", 
                    {
                        disabled: t,
                        btnText: p
                    };
                };
            }
        }, {
            key: "onCouponBtnClick",
            value: function onCouponBtnClick() {
                var e = this.props, o = e.disabled;
                e.isChooseMode || o || r.feNavigator.reLaunch("/pages/entrance/index");
            }
        }, {
            key: "_createData",
            value: function _createData(e, o, t) {
                this.__state = e || this.state || {}, this.__props = o || this.props || {};
                var n = this.$prefix, a = (0, M.genCompid)(n + "$compid__272"), i = S(a, 2), p = i[0], r = i[1], s = (0, 
                M.genCompid)(n + "$compid__273"), u = S(s, 2), c = u[0], l = u[1], d = (0, M.genCompid)(n + "$compid__274"), _ = S(d, 2), m = _[0], f = _[1], h = (0, 
                M.genCompid)(n + "$compid__275"), y = S(h, 2), v = y[0], C = y[1], g = this.__props, b = g.coupon, $ = g.disabled, w = g.isChooseMode;
                if (!b) return null;
                $ || b.newTag || b.expireTag, 1 == b.discountType ? M.propsManager.set({
                    className: "coupon-value-price",
                    price: b.price,
                    isRound: !1
                }, r, p) : b.discountType, 0 == b.orderAmount && 1 == b.discountType ? M.propsManager.set({
                    price: b.price,
                    isRound: !1,
                    showUnitName: !0
                }, l, c) : M.propsManager.set({
                    price: b.orderAmount,
                    isRound: !1,
                    showUnitName: !0
                }, f, m), b.discountAmountMax && M.propsManager.set({
                    price: b.discountAmountMax,
                    isRound: !1,
                    showUnitName: !0
                }, C, v), b.isNotBegin;
                var O = (0, z.default)("sy-envelopelist", {
                    availCouponInput: !$,
                    has_coupon_desc: !!b.couponDesc,
                    "special-coupon": b.typeId || b.productId || b.discountLimit,
                    "special-coupon-one": !((b.typeId || b.productId) && b.discountLimit && b.usableTime),
                    color_disabled: $ && !b.isNotBegin,
                    "has-time-slot": !!b.couponTimeSlot && b.couponDesc && !b.isNotBegin
                }), I = this._createCouponBtnData(n + "cagzzzzzzz")(), P = this._createExplanationData(n + "cahzzzzzzz")(), D = this._createUnavailableReasonData(n + "caizzzzzzz")();
                return Object.assign(this.__state, {
                    $compid__272: r,
                    $compid__273: l,
                    $compid__274: f,
                    $compid__275: C,
                    coupon: b,
                    couponItemClass: O,
                    isChooseMode: w,
                    disabled: $,
                    anonymousState__temp: I,
                    anonymousState__temp2: P,
                    anonymousState__temp3: D
                }), this.__state;
            }
        }, {
            key: "toggleOpen",
            value: function toggleOpen(e) {
                e.stopPropagation(), this.setState({
                    isOpenDesc: !this.state.isOpenDesc
                });
            }
        }, {
            key: "openCouponProductPopup",
            value: function openCouponProductPopup() {
                var o = this, e = this.props, t = e.onOpenProductPopup, n = e.coupon, a = e.shelfId, i = {
                    couponId: n.couponId,
                    couponRecordId: n.recordId,
                    shelfId: a
                };
                p.default.post("getCategoryCouponProductInfo", i, {
                    showLoading: !0
                }).then(function(e) {
                    e && e.length ? t && o.props.onOpenProductPopup(e) : (0, r.Tips)("暂无可用商品");
                });
            }
        }, {
            key: "_createExplanationData",
            value: function _createExplanationData(g) {
                var b = this;
                return function() {
                    var e = (0, M.genCompid)(g + "$compid__276"), o = S(e, 2), t = o[0], n = o[1], a = (0, 
                    M.genCompid)(g + "$compid__277"), i = S(a, 2), p = i[0], r = i[1], s = (0, M.genCompid)(g + "$compid__278"), u = S(s, 2), c = u[0], l = u[1], d = b.props, _ = d.coupon, m = d.disabled, f = d.isChooseMode, h = b.state.isOpenDesc, y = !(5 != _.couponType && 6 != _.couponType || m || f), v = !!_.couponDesc, C = !!_.couponRemark;
                    return M.propsManager.set({
                        isShow: y
                    }, n, t), M.propsManager.set({
                        isShow: v
                    }, r, p), M.propsManager.set({
                        isShow: C
                    }, l, c), {
                        anonymousState__temp4: v,
                        anonymousState__temp5: C,
                        $compid__276: n,
                        $compid__277: r,
                        $compid__278: l,
                        isOpenDesc: h,
                        isShowProductButton: y,
                        coupon: _
                    };
                };
            }
        }, {
            key: "_createUnavailableReasonData",
            value: function _createUnavailableReasonData(l) {
                var d = this;
                return function() {
                    var e = (0, M.genCompid)(l + "$compid__279"), o = S(e, 2), t = o[0], n = o[1], a = (0, 
                    M.genCompid)(l + "$compid__280"), i = S(a, 2), p = i[0], r = i[1], s = d.props.coupon, u = Number(s.unavailableReason);
                    1 === u && M.propsManager.set({
                        price: s.gapMoney || 0,
                        isRound: !1,
                        showUnitName: !0
                    }, n, t);
                    var c = !!s.unavailableReason;
                    return M.propsManager.set({
                        isShow: c
                    }, r, p), {
                        anonymousState__temp6: c,
                        $compid__279: n,
                        $compid__280: r,
                        unavailableReason: u,
                        unavailableReasonMap: {
                            2: "折扣与优惠券不可同时享用",
                            3: "商品不适用",
                            4: "优惠券不适用于活动商品",
                            5: "订单金额不满足要求",
                            6: "不在使用期限内"
                        },
                        coupon: s
                    };
                };
            }
        } ]), CouponItem);
        function CouponItem() {
            !function _classCallCheck(e, o) {
                if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponItem);
            var e = function _possibleConstructorReturn(e, o) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !o || "object" != typeof o && "function" != typeof o ? e : o;
            }(this, (CouponItem.__proto__ || Object.getPrototypeOf(CouponItem)).apply(this, arguments));
            return e.$usedState = [ "$compid__272", "$compid__273", "$compid__274", "$compid__275", "coupon", "couponItemClass", "isChooseMode", "disabled", "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "isOpenDesc", "shelfId" ], 
            e.customComponents = [ "Price", "Toggle" ], e;
        }
        i.$$events = [ "onCouponBtnClick", "handleClick", "openCouponProductPopup", "toggleOpen" ], 
        i.$$componentPath = "pages/couponChoose/modules/CouponItem/index", o.default = i, 
        Component(t(0).default.createComponent(i));
    },
    677: function(e, o, t) {}
}, [ [ 676, 0, 1, 2, 3 ] ] ]);