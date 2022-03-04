(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 122 ], {
    451: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = _interopRequireDefault(a(3)), J = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var a = [], r = !0, n = !1, o = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (a.push(i.value), 
                    !t || a.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, o = e;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, w = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
        }, r = function(e, t, a) {
            return t && defineProperties(e.prototype, t), a && defineProperties(e, a), e;
        };
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var n, o = a(5), V = a(0), s = _interopRequireDefault(V), z = _interopRequireDefault(a(7)), m = a(8), y = _interopRequireDefault(a(2)), _ = a(1), g = a(4), i = a(90), u = _interopRequireDefault(a(19)), v = a(82), c = _interopRequireDefault(a(12)), d = _interopRequireDefault(a(56)), S = _interopRequireDefault(a(13)), X = a(20);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(n, o) {
                    return function step(e, t) {
                        try {
                            var a = i[e](t), r = a.value;
                        } catch (e) {
                            return void o(e);
                        }
                        if (!a.done) return Promise.resolve(r).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        n(r);
                    }("next");
                });
            };
        }
        a(452), a(453);
        var l, p, h, C, D, b = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(PaySuccess, V.Component), r(PaySuccess, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, a) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, a);
                    }
                    if ("value" in r) return r.value;
                    var o = r.get;
                    return void 0 !== o ? o.call(a) : void 0;
                })(PaySuccess.prototype.__proto__ || Object.getPrototypeOf(PaySuccess.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    orderId: "",
                    productList: [],
                    advList: [],
                    isShowProductList: !1,
                    loading: !0,
                    totalDiscountAmount: 0,
                    productTotalAmount: 0,
                    integral: 0,
                    postOrderBoxHeader: void 0,
                    activityList: void 0,
                    postOrderBoxFooter: void 0,
                    newRewardOriented: void 0,
                    imgHeight: 0,
                    orderModalImgStyle: {},
                    isShowActivityModal: !1,
                    freightAmount: 0,
                    activityUserIntegralDetail: void 0,
                    showActivityType: 0,
                    isSubscribe: !1,
                    isMachineShelf: !1,
                    isCounter: !1,
                    activityUserTask: null,
                    couponAmount: 0,
                    discountAmount: 0,
                    thirdDiscountAmount: 0,
                    originProductTotalAmount: 0,
                    serialOrderRewardModal: null,
                    serialOrderRewardData: null,
                    shelfType: 0
                }, this.data = {
                    orderId: "",
                    shareData: {
                        title: "",
                        path: "",
                        imageUrl: ""
                    },
                    queryShipmentStatusTimer: 0,
                    isYuanQiTheme: !!_.Storage.get("isYuanQiMachineShelf")
                }, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "onShareAppMessage",
            value: function onShareAppMessage() {
                var e = this.data.shareData.title, t = this.data.shareData.path;
                return w({}, this.data.shareData, {
                    path: "/pages/webview/webview?url=" + encodeURIComponent(t) + "&title=" + (e || "")
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.actions.$log.setPage({
                    pageCode: "4",
                    pageName: "支付完成"
                }), (0, i.resetRiskTrigger)();
            }
        }, {
            key: "fetch",
            value: (D = _asyncToGenerator(f.default.mark(function _callee2() {
                var t, a, r, n, o, i, s, u, c, d;
                return f.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.$router.params.type, a = this.$router.params.orderId, r = !1, e.prev = 3, 
                        e.next = 6, y.default.post("extendOrder", {
                            orderPayId: a
                        }, {
                            failedMsg: !1,
                            showToast: !1
                        });

                      case 6:
                        n = e.sent, o = n.orderId, i = void 0 === o ? a : o, s = n.machineTypeId, 0 != i && (a = i), 
                        r = 14 == s, e.next = 16;
                        break;

                      case 14:
                        e.prev = 14, e.t0 = e.catch(3);

                      case 16:
                        if (this.data.isYuanQiTheme = this.data.isYuanQiTheme || r, console.log(a, t), !a) {
                            e.next = 40;
                            break;
                        }
                        if (this.setState({
                            orderId: a
                        }), this.props.actions.$cart.removeSelectCartItem(), this.props.actions.$store.fetchStoreConfig(this.getShelfId()), 
                        this.data.orderId = a, u = Number(_.Storage.get("shelfType")), c = u === m.ShelfType.AUTO_SALE_MACHINET || r, 
                        d = "counter" === t || u === m.ShelfType.COUNTER, c) return this.setState({
                            isMachineShelf: !0
                        }), this.handleMachineShelfOrder(), e.abrupt("return");
                        e.next = 30;
                        break;

                      case 30:
                        if (d) return this.setState({
                            isCounter: !0
                        }), this.getOrderDetail(a), e.abrupt("return");
                        e.next = 34;
                        break;

                      case 34:
                        this.getOrderDetail(a), this.getActivityAndManagerData(), this.getAdv(), this.checkIsSubscribe(), 
                        e.next = 41;
                        break;

                      case 40:
                        (0, _.Tips)("缺少支付参数", 5e3);

                      case 41:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this, [ [ 3, 14 ] ]);
            })), function fetch() {
                return D.apply(this, arguments);
            })
        }, {
            key: "onAuthSuccessCallback",
            value: (C = _asyncToGenerator(f.default.mark(function _callee3() {
                return f.default.wrap(function _callee3$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        this.fetch();

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee3, this);
            })), function onAuthSuccessCallback() {
                return C.apply(this, arguments);
            })
        }, {
            key: "onAuthErrorCallback",
            value: function onAuthErrorCallback() {
                _.feNavigator.reLaunch("/pages/auth/index?redirect=" + encodeURIComponent(_.feNavigator.getCurrentPagePath()));
            }
        }, {
            key: "handleMachineShelfOrder",
            value: function handleMachineShelfOrder() {
                var t = this, e = this.data.orderId;
                y.default.get("getOrDerDetail", {
                    orderId: e
                }).then(function(e) {
                    2 == e.orderStatus || 6 == e.orderStatus || 7 == e.orderStatus ? t.queryShipmentStatus() : t.jumpHome();
                });
            }
        }, {
            key: "queryShipmentStatus",
            value: function queryShipmentStatus() {
                var t = this, a = this.data.orderId;
                setTimeout(function() {
                    y.default.get("getShipmentState", {
                        orderId: a
                    }).then(function(e) {
                        1 == e ? t.queryShipmentStatus() : (t.setState({
                            isShowProductList: !0
                        }), t.getOrderDetail(a));
                    }).catch(function() {
                        t.queryShipmentStatus();
                    });
                }, 3e3);
            }
        }, {
            key: "getOrderDetail",
            value: (h = _asyncToGenerator(f.default.mark(function _callee4(t) {
                var a, r, n, o, i, s, u, c, d, l, p, h = this;
                return f.default.wrap(function _callee4$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return a = Number(_.Storage.get("shelfType")), r = a === m.ShelfType.AUTO_SALE_MACHINET || this.state.isMachineShelf, 
                        e.next = 4, y.default.get("getOrDerDetail", {
                            orderId: t
                        });

                      case 4:
                        if (!(n = e.sent) || 2 != n.orderStatus && (!r || 6 != n.orderStatus && 7 != n.orderStatus)) return (0, 
                        _.Tips)("支付失败，请重新支付", 1500), setTimeout(function() {
                            var e = _.Storage.get("shelfCode");
                            _.feNavigator.reLaunch(S.default.home, {
                                shelfCode: e
                            });
                        }, 1500), e.abrupt("return");
                        e.next = 10;
                        break;

                      case 10:
                        (0, v.clearCart)(), (0, v.clearNeedClearCartInHomeFlag)(), o = Number(n.couponAmount) || 0, 
                        i = Number(n.discountAmount) || 0, s = Number(n.thirdDiscountAmount) || 0, u = (0, 
                        g.round)(o + i).toFixed(2), c = n.activityUserIntegralDetail ? n.activityUserIntegralDetail : void 0, 
                        d = n.items || [], l = 0, d.forEach(function(e) {
                            l = (0, g.add)(l, (0, g.mul)(e.quantity, e.salePrice));
                        }), p = !c && n.activityCenteredDetail ? n.activityCenteredDetail : null, this.setState({
                            loading: !1,
                            activityUserIntegralDetail: c,
                            productList: d,
                            productTotalAmount: n.productTotalAmount || 0,
                            totalDiscountAmount: u,
                            integral: n.integral || 0,
                            newRewardOriented: n.newRewardOriented,
                            freightAmount: n.freightAmount || 0,
                            activityUserTask: p,
                            showActivityType: c ? 1 : p ? 1.1 : 2,
                            couponAmount: o,
                            discountAmount: i,
                            thirdDiscountAmount: s,
                            originProductTotalAmount: l,
                            serialOrderRewardData: n.specifySerialOrderRewardVO || null,
                            serialOrderRewardModal: !!n.specifySerialOrderRewardVO,
                            shelfType: n.shelfType || a
                        }, function() {
                            if (h.state.isCounter) {
                                var e = h.refs;
                                e.discountCard && e.discountCard.fetch();
                            }
                        });

                      case 22:
                      case "end":
                        return e.stop();
                    }
                }, _callee4, this);
            })), function getOrderDetail(e) {
                return h.apply(this, arguments);
            })
        }, {
            key: "getShelfId",
            value: function getShelfId() {
                var e = this.props.$shelf.shelfId;
                return e = e || _.Storage.get("shelfId");
            }
        }, {
            key: "getShelfType",
            value: function getShelfType() {
                var e = this.props.$shelf.shelfType;
                return e = e || _.Storage.get("shelfType");
            }
        }, {
            key: "getActivityAndManagerData",
            value: (p = _asyncToGenerator(f.default.mark(function _callee5() {
                var t, a, r, n, o, i, s, u;
                return f.default.wrap(function _callee5$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this.getShelfId(), a = this.data.orderId, r = {
                            shelfId: t,
                            orderId: a
                        }, (n = _.Storage.get("openGroupInviteId")) && (r.inviteId = n), e.next = 7, y.default.post("postOrderBox", r);

                      case 7:
                        o = e.sent, i = o.postOrderBoxHeader || void 0, s = o.postOrderBoxFooter || void 0, 
                        u = o.itemList || void 0, this.setState({
                            activityList: u,
                            postOrderBoxHeader: i,
                            postOrderBoxFooter: s
                        });

                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, _callee5, this);
            })), function getActivityAndManagerData() {
                return p.apply(this, arguments);
            })
        }, {
            key: "getAdv",
            value: (l = _asyncToGenerator(f.default.mark(function _callee6() {
                var t, a, r;
                return f.default.wrap(function _callee6$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ((0, X.isWeixin)()) {
                            e.next = 2;
                            break;
                        }
                        return e.abrupt("return");

                      case 2:
                        return t = this.getShelfId(), a = {
                            advertionPositionCode: "2-1,2-3",
                            shelfId: t,
                            channelType: "1"
                        }, e.next = 6, y.default.get("storeBanners", a);

                      case 6:
                        r = e.sent, this.setState({
                            advList: r
                        });

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, _callee6, this);
            })), function getAdv() {
                return l.apply(this, arguments);
            })
        }, {
            key: "checkIsSubscribe",
            value: function checkIsSubscribe() {
                var t = this;
                (0, X.isWeixin)() && y.default.get("isSubscribe", null, {
                    failedMsg: !1,
                    showToast: !1
                }).then(function(e) {
                    t.setState({
                        isSubscribe: !0 === e
                    });
                });
            }
        }, {
            key: "previewImage",
            value: function previewImage(e) {
                (0, _.previewImage)({
                    current: e,
                    urls: [ e ]
                });
            }
        }, {
            key: "jumpHome",
            value: function jumpHome() {
                if (this.state.isCounter) _.feNavigator.reLaunch("/pages/entrance/index"); else {
                    var e = _.Storage.get("shelfCode");
                    _.feNavigator.reLaunch(S.default.home, {
                        shelfCode: e
                    });
                }
            }
        }, {
            key: "_createHeaderData",
            value: function _createHeaderData(g) {
                var v = this;
                return function() {
                    var e = (0, V.genCompid)(g + "$compid__281"), t = J(e, 2), a = t[0], r = t[1], n = (0, 
                    V.genCompid)(g + "$compid__282"), o = J(n, 2), i = o[0], s = o[1], u = (0, V.genCompid)(g + "$compid__283"), c = J(u, 2), d = c[0], l = c[1], p = v.state, h = p.totalDiscountAmount, f = p.productTotalAmount, m = p.integral, y = p.newRewardOriented, _ = v.props.actions;
                    return V.propsManager.set({
                        price: f
                    }, r, a), 0 < h && V.propsManager.set({
                        price: h
                    }, s, i), V.propsManager.set({
                        data: y,
                        actions: _
                    }, l, d), {
                        $compid__281: r,
                        $compid__282: s,
                        $compid__283: l,
                        totalDiscountAmount: h,
                        integral: m
                    };
                };
            }
        }, {
            key: "onClickToggleProduct",
            value: function onClickToggleProduct() {
                var r = this;
                this.setState({
                    isShowProductList: !this.state.isShowProductList
                }, function() {
                    var e = r.state.isShowProductList, t = e ? "40021" : "40020", a = e ? "展开订单" : "收起订单";
                    r.props.actions.$log.pushEvent({
                        eventCode: t,
                        eventName: a
                    });
                });
            }
        }, {
            key: "getRandomIndex",
            value: function getRandomIndex() {
                var e = Math.random();
                return e <= .2 ? 4 : e <= .5 ? 5 : e <= .8 ? 6 : 7;
            }
        }, {
            key: "getShareConfig",
            value: function getShareConfig(r) {
                var n = this;
                y.default.post("copywriting/getCopywriting", r).then(function(e) {
                    var t = null, a = {};
                    e && e.length && (e.forEach(function(e) {
                        (a[e.businessType] = e).businessType == r.businessTypes && (t = e);
                    }), t || !a || t instanceof Array || (t = a, n.data.shareData = {
                        title: t.shareTitle,
                        path: r.shareLink,
                        imageUrl: t.image
                    }));
                });
            }
        }, {
            key: "_createOrderListData",
            value: function _createOrderListData(c) {
                var d = this;
                return function() {
                    var e = (0, V.genCompid)(c + "$compid__284"), t = J(e, 2), a = t[0], r = t[1], n = d.state, o = n.productList, i = n.isShowProductList, s = d.props.$store.storeConfig, u = d._createOrderMetaData(c + "cajzzzzzzz")();
                    return V.propsManager.set({
                        data: o,
                        storeConfig: s
                    }, r, a), {
                        $compid__284: r,
                        isShowProductList: i,
                        anonymousState__temp: u
                    };
                };
            }
        }, {
            key: "_createOrderMetaData",
            value: function _createOrderMetaData(c) {
                var d = this;
                return function() {
                    var e = d.state, t = e.isShowProductList, a = e.orderId, r = e.originProductTotalAmount, n = e.freightAmount, o = e.couponAmount, i = e.discountAmount, s = e.thirdDiscountAmount, u = 0 < o + i + s;
                    return {
                        isShowProductList: t,
                        anonymousState__temp2: d._createOrderMetaRowData(c + "cbazzzzzzz")("商品金额", r, {
                            alwaysShow: !0
                        }),
                        anonymousState__temp3: d._createOrderMetaRowData(c + "cbbzzzzzzz")("配送费", n),
                        isShowLine: u,
                        anonymousState__temp4: d._createOrderMetaRowData(c + "cbczzzzzzz")("商品折扣", i, {
                            isDiscount: !0
                        }),
                        anonymousState__temp5: d._createOrderMetaRowData(c + "cbdzzzzzzz")("优惠券", o, {
                            isDiscount: !0
                        }),
                        anonymousState__temp6: d._createOrderMetaRowData(c + "cbezzzzzzz")("支付优惠", s, {
                            isDiscount: !0
                        }),
                        orderId: a
                    };
                };
            }
        }, {
            key: "_createOrderMetaRowData",
            value: function _createOrderMetaRowData() {
                return function(e, t, a) {
                    var r = a || {}, n = r.isDiscount, o = r.alwaysShow;
                    return {
                        isShowThisRow: 0 < t || void 0 !== o && o,
                        label: e,
                        isDiscount: void 0 !== n && n,
                        value: t
                    };
                };
            }
        }, {
            key: "_createMachineOrderListData",
            value: function _createMachineOrderListData(p) {
                var h = this;
                return function() {
                    var e = (0, V.genCompid)(p + "$compid__285"), t = J(e, 2), a = t[0], r = t[1], n = (0, 
                    V.genCompid)(p + "$compid__286"), o = J(n, 2), i = o[0], s = o[1], u = h.state.productList, c = [], d = [], l = 0;
                    return u.forEach(function(e) {
                        var t = w({}, e);
                        t.originQuantity = e.quantity, e.shipmentFail ? (t.quantity = e.quantity - e.shipmentFail, 
                        0 < t.quantity && c.push(w({}, t)), t.quantity = e.shipmentFail, d.push(t)) : c.push(t);
                    }), d.forEach(function(e) {
                        l = (0, g.add)(l, (0, g.mul)((0, g.div)(e.realTotalPrice, e.originQuantity), e.quantity));
                    }), l = (0, g.round)(l), 0 < c.length && V.propsManager.set({
                        data: c,
                        isMachineShelfType: !0,
                        className: "machine-type"
                    }, r, a), 0 < d.length && V.propsManager.set({
                        data: d,
                        isMachineShelfType: !0,
                        className: "machine-type failed"
                    }, s, i), {
                        $compid__285: r,
                        $compid__286: s,
                        successList: c,
                        failedList: d,
                        faildTotalAmount: l
                    };
                };
            }
        }, {
            key: "onOpenModal",
            value: function onOpenModal() {
                var e = this.getShelfId();
                this.setState({
                    isShowActivityModal: !0
                }), this.initShareConfig(e);
            }
        }, {
            key: "_createContentData",
            value: function _createContentData(Y) {
                var W = this;
                return function() {
                    var e = (0, V.genCompid)(Y + "$compid__287"), t = J(e, 2), a = t[0], r = t[1], n = (0, 
                    V.genCompid)(Y + "$compid__288"), o = J(n, 2), i = o[0], s = o[1], u = (0, V.genCompid)(Y + "$compid__289"), c = J(u, 2), d = c[0], l = c[1], p = (0, 
                    V.genCompid)(Y + "$compid__290"), h = J(p, 2), f = h[0], m = h[1], y = (0, V.genCompid)(Y + "$compid__291"), _ = J(y, 2), g = _[0], v = _[1], S = (0, 
                    V.genCompid)(Y + "$compid__292"), w = J(S, 2), z = w[0], C = w[1], D = (0, V.genCompid)(Y + "$compid__293"), b = J(D, 2), O = b[0], T = b[1], I = W.getShelfId(), M = W.props.actions, k = W.$router.params.orderId, A = W.state, $ = A.postOrderBoxHeader, P = A.postOrderBoxFooter, x = A.activityList, L = A.productList, R = A.productTotalAmount, F = A.activityUserIntegralDetail, q = A.showActivityType, N = A.isMachineShelf, j = A.activityUserTask, U = [];
                    L.map(function(e) {
                        e.productId && U.push(e.productId);
                    });
                    var H = {
                        orderId: k,
                        productIds: U,
                        shelfId: I,
                        orderAmount: R
                    }, B = (0, X.isWeixin)(), E = [];
                    3 == q && E.push({
                        modelCode: "40040",
                        modelName: "运营位4-2（横幅形式）"
                    }), B && E.push({
                        modelCode: "40050",
                        modelName: "活动位",
                        selector: ".activity-section-two"
                    }), P && P.footerGroupUrl && E.push({
                        modelCode: "40070",
                        modelName: "公众号二维码",
                        selector: ".manager-code"
                    }), W.sendLog(E);
                    var G = N ? W._createMachineOrderListData(Y + "cbfzzzzzzz")() : null, Q = W._createOrderListData(Y + "cbgzzzzzzz")();
                    return V.propsManager.set({
                        orderId: k
                    }, r, a), 1 == q && V.propsManager.set({
                        data: F
                    }, s, i), 1.1 == q && V.propsManager.set({
                        layout: 2,
                        log: M && M.$log,
                        taskData: j
                    }, l, d), V.propsManager.set({
                        actions: M,
                        displayStyle: 2,
                        isPaySuccess: !0,
                        payParams: H,
                        loadFinishCallback: W.onActivityConfigPortalLoadFinishCallback.bind(W)
                    }, m, f), 3 == q && V.propsManager.set({
                        data: $
                    }, v, g), B && V.propsManager.set({
                        data: x,
                        onOpenModal: W.onOpenModal.bind(W)
                    }, C, z), V.propsManager.set({
                        data: P
                    }, T, O), {
                        $compid__287: r,
                        $compid__288: s,
                        $compid__289: l,
                        $compid__290: m,
                        $compid__291: v,
                        $compid__292: C,
                        $compid__293: T,
                        isMachineShelf: N,
                        anonymousState__temp7: G,
                        anonymousState__temp8: Q,
                        showActivityType: q,
                        isWeixinChannel: B
                    };
                };
            }
        }, {
            key: "sendLog",
            value: function sendLog(e) {
                this.log || (this.log = !0, this.props.actions.$log.pushPageModule(e));
            }
        }, {
            key: "onActivityConfigPortalLoadFinishCallback",
            value: function onActivityConfigPortalLoadFinishCallback(e) {
                var t = this.state.showActivityType;
                0 != t && 2 != t || this.setState({
                    showActivityType: e ? 2 : 3
                });
            }
        }, {
            key: "_createFollowData",
            value: function _createFollowData() {
                var i = this;
                return function() {
                    var e = !(0, X.isWeixin)();
                    if (e) return null;
                    var t = i.state, a = t.isSubscribe, r = t.isMachineShelf, n = t.isCounter, o = !a && !r && !n;
                    return i.anonymousFunc0 = function() {
                        return function openArticle() {
                            _.feNavigator.jumpUrl("https://mp.weixin.qq.com/s/lJdhbHdqhILdOtbliFOZ9g");
                        }();
                    }, {
                        anonymousState__temp20: e,
                        isShowCode: o,
                        url: "https://qn-cdn-pic.feng1.com/theme_pic-20210728-569e8c1affca359db7531d57d374a407?imageslim"
                    };
                };
            }
        }, {
            key: "_createAdvData",
            value: function _createAdvData(f) {
                var m = this;
                return function() {
                    var e = (0, V.genCompid)(f + "$compid__294"), t = J(e, 2), a = t[0], r = t[1], n = m.getShelfId(), o = m.getShelfType(), i = m.props, s = i.$store, u = i.actions, c = m.state, d = c.advList, l = c.isCounter, p = c.isMachineShelf, h = !l && !p;
                    return h && V.propsManager.set({
                        advList: d,
                        shelfId: n,
                        shelfType: o,
                        currentDateTime: s.currentDateTime,
                        initShareConfig: m.initShareConfig.bind(m),
                        actions: u
                    }, r, a), {
                        $compid__294: r,
                        isShow: h
                    };
                };
            }
        }, {
            key: "_createLoadingData",
            value: function _createLoadingData() {
                var t = this;
                return function() {
                    var e = t.state.isMachineShelf;
                    return {
                        prefix: t.data.isYuanQiTheme ? "" : "小e",
                        isMachineShelf: e
                    };
                };
            }
        }, {
            key: "_createOrderOrderModalData",
            value: function _createOrderOrderModalData(h) {
                var f = this;
                return function() {
                    var e = (0, V.genCompid)(h + "$compid__295"), t = J(e, 2), a = t[0], r = t[1], n = f.state, o = n.orderModalImgStyle, i = n.serialOrderRewardModal, s = n.serialOrderRewardData, u = s && s.prizePic, c = null;
                    c = s && s.activityStylePic ? {
                        backgroundImage: "url(" + s.activityStylePic + ")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    } : {
                        background: "#fff"
                    };
                    var d = !!i;
                    f.anonymousFunc1 = function() {
                        return f.setState({
                            serialOrderRewardModal: null
                        });
                    };
                    var l = (0, V.internal_inline_style)(c);
                    f.anonymousFunc2 = function() {
                        _.feNavigator.jumpUrlByProject("/personal/index.html?#/drawRecord");
                    };
                    var p = u ? (0, V.internal_inline_style)(o) : null;
                    return f.anonymousFunc3 = function(e, t) {
                        return f.onImageLoad2(e, t);
                    }, V.propsManager.set({
                        isOpen: d,
                        isShowClose: !1,
                        onClose: f.anonymousFunc1,
                        style: null
                    }, r, a), {
                        anonymousState__temp9: d,
                        anonymousState__temp10: l,
                        anonymousState__temp11: p,
                        $compid__295: r,
                        prizePic: u,
                        orderReward: s
                    };
                };
            }
        }, {
            key: "_createActivityModalData",
            value: function _createActivityModalData(c) {
                var d = this;
                return function() {
                    var e = (0, V.genCompid)(c + "$compid__296"), t = J(e, 2), a = t[0], r = t[1], n = d.state, o = n.imgHeight, i = n.isShowActivityModal, s = {};
                    0 < o && (s.height = o + "px"), d.anonymousFunc4 = function() {
                        return d.setState({
                            isShowActivityModal: !1
                        });
                    };
                    var u = (0, V.internal_inline_style)(s);
                    return d.anonymousFunc5 = function(e) {
                        return d.onImageLoad(e);
                    }, V.propsManager.set({
                        isOpen: i,
                        onClose: d.anonymousFunc4,
                        style: null
                    }, r, a), {
                        anonymousState__temp12: u,
                        $compid__296: r
                    };
                };
            }
        }, {
            key: "_createCounterDiscountCardData",
            value: function _createCounterDiscountCardData(s) {
                var u = this;
                return function() {
                    var e = (0, V.genCompid)(s + "$compid__297"), t = J(e, 2), a = t[0], r = t[1], n = u.state, o = n.isCounter, i = n.orderId;
                    return o && V.propsManager.set({
                        orderId: i,
                        isPaySuccess: !0
                    }, r, a), {
                        $compid__297: r,
                        isCounter: o
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, a) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r, n = this.$prefix, o = (0, V.genCompid)(n + "$compid__298"), i = J(o, 2), s = i[0], u = i[1], c = this.__props.$app.isIphoneX, d = this.__state, l = d.loading, p = d.shelfType, h = this.data.isYuanQiTheme, f = (0, 
                z.default)("pay-success-container", {
                    "yuanqi-theme": h,
                    "page-iphonex": c
                });
                l && (r = void 0, r = this._createLoadingData(n + "cbizzzzzzz")());
                var m = this._createHeaderData(n + "cbjzzzzzzz")(), y = this._createContentData(n + "ccazzzzzzz")(), _ = this._createFollowData(n + "ccbzzzzzzz")(), g = this._createAdvData(n + "ccczzzzzzz")(), v = this._createActivityModalData(n + "ccdzzzzzzz")(), S = this._createOrderOrderModalData(n + "ccezzzzzzz")();
                return V.propsManager.set(w({}, this.__props, {
                    shelfType: p
                }), u, s), this.$$refs.pushRefs([ {
                    type: "component",
                    id: "cbhzz",
                    refName: "discountCard",
                    fn: null
                } ]), Object.assign(this.__state, {
                    $compid__298: u,
                    _$_$anonymousState__temp: r,
                    pageClass: f,
                    anonymousState__temp14: m,
                    anonymousState__temp15: y,
                    anonymousState__temp16: _,
                    anonymousState__temp17: g,
                    anonymousState__temp18: v,
                    anonymousState__temp19: S
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        }, {
            key: "anonymousFunc1",
            value: function anonymousFunc1() {}
        }, {
            key: "anonymousFunc2",
            value: function anonymousFunc2() {}
        }, {
            key: "anonymousFunc3",
            value: function anonymousFunc3() {}
        }, {
            key: "anonymousFunc4",
            value: function anonymousFunc4() {}
        }, {
            key: "anonymousFunc5",
            value: function anonymousFunc5() {}
        } ]), (n = PaySuccess).$$events = [ "onClickToggleProduct", "copyOrderId", "anonymousFunc0", "anonymousFunc2", "anonymousFunc3", "anonymousFunc5" ], 
        n.$$componentPath = "pages/paySuccess/index", n);
        function PaySuccess() {
            var e = this;
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, PaySuccess);
            var m = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (PaySuccess.__proto__ || Object.getPrototypeOf(PaySuccess)).apply(this, arguments));
            return m.$usedState = [ "$compid__298", "_$_$anonymousState__temp", "loading", "pageClass", "anonymousState__temp14", "anonymousState__temp15", "anonymousState__temp16", "anonymousState__temp17", "anonymousState__temp18", "anonymousState__temp19", "orderId", "productList", "advList", "isShowProductList", "totalDiscountAmount", "productTotalAmount", "integral", "postOrderBoxHeader", "activityList", "postOrderBoxFooter", "newRewardOriented", "imgHeight", "orderModalImgStyle", "isShowActivityModal", "freightAmount", "activityUserIntegralDetail", "showActivityType", "isSubscribe", "isMachineShelf", "isCounter", "activityUserTask", "couponAmount", "discountAmount", "thirdDiscountAmount", "originProductTotalAmount", "serialOrderRewardModal", "serialOrderRewardData", "shelfType", "actions", "$shelf", "$store", "$app" ], 
            m.config = {
                navigationBarTitleText: "支付成功"
            }, m.initShareConfig = function(e, t, a, r, n, o, i) {
                (0, _.showShareMenu)({
                    withShareTicket: !1
                });
                var s = encodeURIComponent("share/coupon"), u = "【丰e足食】快来领取美食福利，任性吃吃吃!", c = m.getRandomIndex(), d = "https://wxapp.feng1.com/static/customer/weixin.html?module_name=" + s + "&orderId=" + m.data.orderId + "&shelfId=" + e, l = "https://wxapp.feng1.com/static/customer/images/share_logo.png", p = m.data.orderId, h = _.Storage.get("sharedOrderId");
                if (c) {
                    if (h != p && (y.default.get("createShareLink", {
                        orderId: p,
                        optimumIndex: c
                    }, {
                        showToast: !1,
                        failedMsg: !1
                    }).then(function() {
                        _.Storage.setLocal("sharedOrderId", p);
                    }), _.Storage.setLocal("shareId" + p, String(c))), u = "【丰e足食】快来领取超值福利，看谁得大奖！", 
                    o && 1 === i && (u = t, l = r, d = n), m.data.shareData = {
                        title: u,
                        path: d,
                        imageUrl: l
                    }, o && 1 == i) return;
                    var f = {
                        shareLink: d,
                        businessTypes: 2,
                        copywritingType: 2
                    };
                    m.getShareConfig(f);
                }
            }, m.copyOrderId = _asyncToGenerator(f.default.mark(function _callee() {
                var t;
                return f.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = m.state.orderId, e.next = 3, (0, _.copyText)(t);

                      case 3:
                        (0, _.Tips)("内容已复制");

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, _callee, e);
            })), m.onImageLoad = function(e, t) {
                if (e && e.detail) {
                    var a = e.detail, r = 750 / (a.width / a.height);
                    t ? m.setState(function _defineProperty(e, t, a) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = a, e;
                    }({}, t, r)) : m.setState({
                        imgHeight: r
                    });
                }
            }, m.onImageLoad2 = function(e, t) {
                if (e) {
                    var a = e.detail || t || {}, r = a.width, n = a.height;
                    if (r && n) {
                        var o = r, i = n;
                        100 < n && (o = (i = 100) / (n / r)), m.setState({
                            orderModalImgStyle: {
                                width: s.default.pxTransform(o),
                                height: s.default.pxTransform(i)
                            }
                        });
                    }
                }
            }, m.customComponents = [ "Price", "CouponList", "ProductList", "CollectCard", "UpgradePackage", "TaskCard", "ActivityConfigPortal", "Activity1", "Activity2", "ManageCode", "BottomBanner", "Modal", "DiscountCard", "FooterActionBar" ], 
            m;
        }
        b = (0, o.__decorate)([ (0, c.default)(), d.default, u.default ], b), t.default = b, 
        Component(a(0).default.createComponent(b, !0));
    },
    452: function(e, t, a) {},
    453: function(e, t, a) {}
}, [ [ 451, 0, 1, 2, 3 ] ] ]);