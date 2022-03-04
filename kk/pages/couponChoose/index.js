(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 102 ], {
    449: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = _interopRequireDefault(o(3)), Y = function(e, t) {
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
        var a, i = o(5), j = o(0), u = _interopRequireDefault(j), s = _interopRequireDefault(o(12)), c = _interopRequireDefault(o(56)), p = _interopRequireDefault(o(11)), l = _interopRequireDefault(o(19)), d = _interopRequireDefault(o(2)), h = o(1), f = _interopRequireDefault(o(142)), m = o(23), C = o(21);
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
        o(450);
        var _, v, g, y = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(CouponChoose, j.Component), n(CouponChoose, [ {
            key: "_constructor",
            value: function _constructor(e) {
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
                })(CouponChoose.prototype.__proto__ || Object.getPrototypeOf(CouponChoose.prototype), "_constructor", this).call(this, e), 
                this.CODE_REG = /^\w{16}$/, this.openSource = "personal", this.currentSelectCoupon = null, 
                this.state = {
                    availCouponList: [],
                    unAvailCouponList: [],
                    redeemCode: "",
                    isShowProductPopup: !1,
                    popupProductList: [],
                    isChooseMode: !1
                }, this.currentSelectCoupon = this.props.$cart.currentCouponData, this.$$refs = new u.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: (g = _asyncToGenerator(r.default.mark(function _callee() {
                return r.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.props.actions.$log.setPage({
                            pageCode: "2",
                            pageName: "优惠券列表-购物车"
                        });

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function componentDidMount() {
                return g.apply(this, arguments);
            })
        }, {
            key: "fetch",
            value: function fetch() {
                var e = this, t = this.$router.params.openSource;
                t && (this.openSource = t), this.setState({
                    isChooseMode: "cart" === t
                }, function() {
                    e.refs.loadMoreScroll.fetch();
                });
            }
        }, {
            key: "onAuthSuccessCallback",
            value: (v = _asyncToGenerator(r.default.mark(function _callee2(e) {
                return r.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.fetch();

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this);
            })), function onAuthSuccessCallback(e) {
                return v.apply(this, arguments);
            })
        }, {
            key: "onAuthErrorCallback",
            value: function onAuthErrorCallback() {
                h.feNavigator.reLaunch("/pages/auth/index?redirect=" + encodeURIComponent(h.feNavigator.getCurrentPagePath()));
            }
        }, {
            key: "onPullDownRefresh",
            value: function onPullDownRefresh() {
                this.refs.loadMoreScroll.refresh();
            }
        }, {
            key: "onReachBottom",
            value: function onReachBottom() {
                this.refs.loadMoreScroll.fetch();
            }
        }, {
            key: "processItem",
            value: function processItem(e) {
                var t = null;
                this.currentSelectCoupon && this.currentSelectCoupon.coupon && (t = this.currentSelectCoupon.coupon.recordId);
                var o = new Date(), n = new Date((0, f.default)(e.couponTime || e.validStartTime)), r = e.nowDate || new Date().getTime(), a = e.validStartTime, i = (0, 
                p.default)((0, p.default)(o).format("YYYY-MM-DD")).diff((0, p.default)(n).format("YYYY-MM-DD"), "day"), u = (0, 
                p.default)((0, p.default)(o).format("YYYY-MM-DD")).diff((0, p.default)(n).format("YYYY-MM-DD"), "day");
                if (0 <= i && i <= 1 ? e.newTag = !0 : 0 <= u && u <= 1 && (e.expireTag = !0), r < a) {
                    e.isNotBegin = !0;
                    var s = a - r;
                    s < 6e4 && (s = 6e4), e.beginInfo = this.timeToStr(s);
                }
                return e.isSelect = t === e.recordId, e.validTimeFormat = (0, f.default)(e.validTime), 
                e;
            }
        }, {
            key: "timeToStr",
            value: function timeToStr(e) {
                var t = e / 1e3, o = parseInt(String(t / 3600 / 24), 10), n = parseInt(String(t / 3600), 10);
                return (0 < o ? o + "天" : "") + (0 < (n %= 24) ? n + "小时" : "") + parseInt(String(t % 3600 / 60), 10) + "分后可用";
            }
        }, {
            key: "onFetchSuccess",
            value: function onFetchSuccess(e, t) {
                var o = this, n = this.state.isChooseMode, r = e.dataList, a = [], i = [];
                r && r.forEach(function(e) {
                    (n ? 1 === Number(e.usable) : 2 === Number(e.couponStatus) && 1 === Number(e.isValidPeriod)) ? a.push(o.processItem(e)) : i.push(o.processItem(e));
                });
                var u = this.state, s = u.availCouponList, c = u.unAvailCouponList;
                function Za(e, t) {
                    return n ? t.price - e.price : 0;
                }
                t && (s = [], c = []), this.setState({
                    availCouponList: s.concat(a.sort(Za)),
                    unAvailCouponList: c.concat(i.sort(Za))
                });
            }
        }, {
            key: "handleChange",
            value: function handleChange(e) {
                var t;
                t = e.detail.value, this.setState({
                    redeemCode: t
                });
            }
        }, {
            key: "handleChangeInH5",
            value: function handleChangeInH5() {}
        }, {
            key: "handleExchange",
            value: (_ = _asyncToGenerator(r.default.mark(function _callee3() {
                var t, o, n = this;
                return r.default.wrap(function _callee3$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (16 !== (t = this.state.redeemCode).length) return e.abrupt("return");
                        e.next = 3;
                        break;

                      case 3:
                        if (this.CODE_REG.test(t)) {
                            e.next = 6;
                            break;
                        }
                        return (0, h.Tips)("请输入16位字母和数字组成的兑换码"), e.abrupt("return");

                      case 6:
                        return o = {
                            couponCode: t
                        }, e.next = 9, (0, h.subscribeMessage)(C.SubscribeMessageTemplateName.COUPON, {
                            moduleName: "coupon"
                        });

                      case 9:
                        d.default.get("exchangeCouponByCode", o, {
                            showLoading: !0,
                            showToast: !0
                        }).then(function(e) {
                            e && (n.setState({
                                redeemCode: ""
                            }), (0, h.Tips)("兑换成功!"), n.onPullDownRefresh());
                        });

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, _callee3, this);
            })), function handleExchange() {
                return _.apply(this, arguments);
            })
        }, {
            key: "handleNoUseCoupon",
            value: function handleNoUseCoupon() {
                this.props.actions.$log.pushEvent({
                    eventCode: "20022",
                    eventName: "不使用优惠券"
                }), this.props.actions.$cart.selectCoupon(null), (0, h.navigateBack)();
            }
        }, {
            key: "handleSelectCoupon",
            value: function handleSelectCoupon(e) {
                this.props.actions.$log.pushEvent({
                    eventCode: "20021",
                    eventName: "更改优惠券"
                }), this.props.actions.$cart.selectCoupon(e), (0, h.navigateBack)();
            }
        }, {
            key: "getRequestParams",
            value: function getRequestParams() {
                var e = this.state.isChooseMode, t = this.props.$shelf.shelfId;
                if (!e) return {
                    shelfId: t
                };
                var r = [], o = this.props.$cart, n = o.cartProductList, a = o.isUsedFullOrderCut, i = (0, 
                m.priceCalculateAndGetRuleData)(n, a).normalPriceRule, u = {};
                i.meetConditionCartProductList.forEach(function(e) {
                    u[e.productId] = e;
                });
                var s = i.calculateResult.total;
                return n.forEach(function(e) {
                    if (e.selected) {
                        var t = e.product, o = e.quantity, n = u[t.productId] ? u[t.productId].quantity : 0;
                        t.groupInfo || r.push({
                            productId: t.productId,
                            typeId: t.typeId || "",
                            quantity: o,
                            salePrice: t.salePrice,
                            isNewProduct: !!t.isNewProduct,
                            positiveQuantity: n
                        });
                    }
                }), {
                    shelfId: t,
                    positiveAmount: Math.max(s, .01).toFixed(2),
                    productList: r
                };
            }
        }, {
            key: "_createBottomProductListPopupData",
            value: function _createBottomProductListPopupData(c) {
                var p = this;
                return function() {
                    var e = (0, j.genCompid)(c + "$compid__264"), t = Y(e, 2), o = t[0], n = t[1], r = p.state, a = r.isShowProductPopup, i = r.popupProductList, u = p.props.$cart;
                    p.anonymousFunc0 = function() {
                        return p.setState({
                            isShowProductPopup: !1
                        });
                    };
                    var s = i.map(function(e, t) {
                        e = {
                            $original: (0, j.internal_get_original)(e)
                        };
                        var o = (0, j.genCompid)(c + "caczzzzzzz" + t, !0), n = Y(o, 2), r = n[0], a = n[1];
                        return j.propsManager.set({
                            product: e.$original,
                            onProductAddCallback: p.onProductAddCallback.bind(p),
                            $cart: u
                        }, a, r), {
                            $compid__263: a,
                            $original: e.$original
                        };
                    });
                    return j.propsManager.set({
                        isOpen: a,
                        onClose: p.anonymousFunc0,
                        isShowClose: !0
                    }, n, o), {
                        loopArray52: s,
                        $compid__264: n,
                        popupProductList: i
                    };
                };
            }
        }, {
            key: "onProductAddCallback",
            value: function onProductAddCallback(t, e) {
                var o = this, n = this.refs;
                return n.cartIcon.getDOM().then(function(e) {
                    return n.flyInCart.start(t, e, n.cartIcon);
                }).then(function() {
                    o.props.actions.$cart.addProductToCart(e);
                });
            }
        }, {
            key: "handleOpenProductPopup",
            value: function handleOpenProductPopup(e) {
                this.setState({
                    isShowProductPopup: !0,
                    popupProductList: e
                });
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                var i = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var u = this.$prefix, n = (0, j.genCompid)(u + "$compid__267"), r = Y(n, 2), a = r[0], s = r[1], c = (0, 
                j.genCompid)(u + "$compid__268"), p = Y(c, 2), l = p[0], d = p[1], h = (0, j.genCompid)(u + "$compid__269"), f = Y(h, 2), m = f[0], C = f[1], _ = (0, 
                j.genCompid)(u + "$compid__270"), v = Y(_, 2), g = v[0], y = v[1], P = this.__state, b = P.availCouponList, $ = P.unAvailCouponList, S = P.redeemCode, w = P.isChooseMode, k = P.isShowProductPopup, D = this.__props, I = D.$shelf, M = D.$cart, z = this.getRequestParams(), O = I.shelfId, R = M.totalCount, T = w ? "pageUserAvailableCoupon" : "pageUserCoupon", L = w ? "post" : "get", x = this._createBottomProductListPopupData(u + "bjizzzzzzz")(), A = "btn exchange-btn " + (16 === S.length && this.CODE_REG.test(S) && "active"), N = b.map(function(e, t) {
                    e = {
                        $original: (0, j.internal_get_original)(e)
                    };
                    var o = (0, j.genCompid)(u + "cadzzzzzzz" + t, !0), n = Y(o, 2), r = n[0], a = n[1];
                    return j.propsManager.set({
                        coupon: e.$original,
                        isChooseMode: w,
                        onSelect: i.handleSelectCoupon.bind(i),
                        onOpenProductPopup: i.handleOpenProductPopup.bind(i),
                        shelfId: O
                    }, a, r), {
                        $compid__265: a,
                        $original: e.$original
                    };
                }), E = $.map(function(e, t) {
                    e = {
                        $original: (0, j.internal_get_original)(e)
                    };
                    var o = (0, j.genCompid)(u + "caezzzzzzz" + t, !0), n = Y(o, 2), r = n[0], a = n[1];
                    return j.propsManager.set({
                        coupon: e.$original,
                        isChooseMode: w,
                        disabled: !0,
                        shelfId: O,
                        onOpenProductPopup: i.handleOpenProductPopup.bind(i)
                    }, a, r), {
                        $compid__266: a,
                        $original: e.$original
                    };
                });
                return j.propsManager.set({
                    className: "coupon-container",
                    url: T,
                    method: L,
                    params: z,
                    onFetchSuccess: this.onFetchSuccess.bind(this)
                }, s, a), j.propsManager.set({
                    isShow: w
                }, d, l), j.propsManager.set({
                    isShow: k
                }, C, m), j.propsManager.set({
                    totalCount: R
                }, y, g), this.$$refs.pushRefs([ {
                    type: "component",
                    id: "bjjzz",
                    refName: "loadMoreScroll",
                    fn: null
                }, {
                    type: "component",
                    id: "caazz",
                    refName: "cartIcon",
                    fn: null
                }, {
                    type: "component",
                    id: "cabzz",
                    refName: "flyInCart",
                    fn: null
                } ]), Object.assign(this.__state, {
                    anonymousState__temp2: A,
                    loopArray53: N,
                    loopArray54: E,
                    $compid__267: s,
                    $compid__268: d,
                    $compid__269: C,
                    $compid__270: y,
                    anonymousState__temp: x
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), (a = CouponChoose).$$events = [ "handleChange", "handleChangeInH5", "handleExchange", "handleNoUseCoupon" ], 
        a.$$componentPath = "pages/couponChoose/index", a);
        function CouponChoose() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponChoose);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CouponChoose.__proto__ || Object.getPrototypeOf(CouponChoose)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp2", "loopArray53", "loopArray54", "$compid__267", "$compid__268", "$compid__269", "$compid__270", "redeemCode", "availCouponList", "unAvailCouponList", "isChooseMode", "anonymousState__temp", "isShowProductPopup", "popupProductList", "$cart", "actions", "$shelf" ], 
            e.config = {
                navigationBarTitleText: "优惠券"
            }, e.componentDidRecover = function() {
                e.props.actions.$log.setPage({
                    pageCode: "2",
                    pageName: "优惠券列表-购物车"
                });
            }, e.customComponents = [ "BottomSheet", "CouponProductItem", "LoadMoreScroll", "CouponItem", "Toggle", "CartIcon", "FlyInCart" ], 
            e;
        }
        y = (0, i.__decorate)([ (0, s.default)(), c.default, l.default ], y), t.default = y, 
        Component(o(0).default.createComponent(y, !0));
    },
    450: function(e, t, o) {}
}, [ [ 449, 0, 1, 2, 3 ] ] ]);