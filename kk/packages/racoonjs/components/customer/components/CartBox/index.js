(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 52 ], {
    600: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = _interopRequireDefault(n(3)), ye = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
        }, Ce = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, r = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (a) throw r;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var a, r = n(5), ve = n(0), i = _interopRequireDefault(ve), ge = n(4), p = _interopRequireDefault(n(145)), s = _interopRequireDefault(n(13)), l = n(1), Oe = n(20), c = _interopRequireDefault(n(144));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(a, r) {
                    return function step(e, t) {
                        try {
                            var n = i[e](t), o = n.value;
                        } catch (e) {
                            return void r(e);
                        }
                        if (!n.done) return Promise.resolve(o).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        a(o);
                    }("next");
                });
            };
        }
        n(601);
        var f, m, _ = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(CartBox, ve.Component), o(CartBox, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var a = Object.getPrototypeOf(e);
                        return null === a ? void 0 : get(a, t, n);
                    }
                    if ("value" in o) return o.value;
                    var r = o.get;
                    return void 0 !== r ? r.call(n) : void 0;
                })(CartBox.prototype.__proto__ || Object.getPrototypeOf(CartBox.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isOpenCart: !1,
                    isClearCartDialogOpen: !1,
                    isOpenExpireModal: !1,
                    isProductTakeOffAlertOpen: !1,
                    cartIconActiveClass: "",
                    isOpenScanDialog: !1
                }, this.scanBarDOM = null, this.newCartIconDOM = null, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: (m = _asyncToGenerator(u.default.mark(function _callee() {
                var t = this;
                return u.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        (0, l.getDom)(".fixed_scan_bar", {
                            $scope: this.$scope,
                            selectAll: !1
                        }).then(function(e) {
                            t.scanBarDOM = e;
                        }), (0, l.getDom)("#new_cart_icon", {
                            $scope: this.$scope,
                            selectAll: !1
                        }).then(function(e) {
                            t.newCartIconDOM = e;
                        });

                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function componentDidMount() {
                return m.apply(this, arguments);
            })
        }, {
            key: "getAnimationDestDOM",
            value: function getAnimationDestDOM() {
                var o = this, a = this.props.$cart.cartProductList, r = 0 === a.length && this.checkScanOpenType();
                return new Promise(function(n) {
                    var e = r ? "#fixed_scan_bar" : "#new_cart_icon";
                    0 !== a.length || o.checkScanOpenType() || (e = "#new_cart_icon_empty");
                    var t = i.default.createSelectorQuery().in(o.$scope);
                    t.select(e).boundingClientRect(), t.exec(function(e) {
                        var t = Ce(e, 1)[0];
                        n(t);
                    });
                });
            }
        }, {
            key: "scanQRCode",
            value: (f = _asyncToGenerator(u.default.mark(function _callee2() {
                var t, n, o, a, r, i, s, c = this;
                return u.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, (0, p.default)();

                      case 3:
                        t = e.sent, n = this.props, o = n.$shelf, a = n.actions, r = n.productList, i = o.shelfRandomCode, 
                        s = {
                            productCode: t,
                            shelfRandomCode: i
                        }, a.$store.fetchScanQRCode(s, function(t) {
                            if (t.error) (0, l.Tips)(t.msg); else if (2 == t.salesStatus) c.productTakeOffAlert(); else {
                                var e = r.find(function(e) {
                                    return e.productId === t.productId;
                                });
                                e || a.$store.addProductItem(t);
                                var n = e || t;
                                c.onStepperBefore(n, function() {
                                    a.$cart.addProductToCartById(t.productId), c.activeCartIcon(), c.setState({
                                        isOpenScanDialog: !0
                                    }), setTimeout(function() {
                                        c.setState({
                                            isOpenCart: !0
                                        });
                                    }, 300);
                                }, !1, !1);
                            }
                        }), a.$log.pushEvent({
                            eventCode: "10115",
                            eventName: "扫商品条形码",
                            relateFromType: 2,
                            relateFromId: t
                        }), e.next = 14;
                        break;

                      case 11:
                        e.prev = 11, e.t0 = e.catch(0), e.t0.msg && (0, l.Tips)(e.t0.msg);

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this, [ [ 0, 11 ] ]);
            })), function scanQRCode() {
                return f.apply(this, arguments);
            })
        }, {
            key: "checkScanOpenType",
            value: function checkScanOpenType() {
                var e = this.props.$shelf;
                return !e.isSchoolShelf && !e.isMachineShelf && (0, Oe.isWeixin)();
            }
        }, {
            key: "activeCartIcon",
            value: function activeCartIcon() {
                var e = this;
                this.setState({
                    cartIconActiveClass: "active"
                }, function() {
                    setTimeout(function() {
                        e.setState({
                            cartIconActiveClass: ""
                        });
                    }, 110);
                });
            }
        }, {
            key: "openBox",
            value: function openBox() {
                this.setState({
                    isOpenCart: !0
                });
            }
        }, {
            key: "jumpCartPage",
            value: function jumpCartPage() {
                var e = this.props;
                e.history, e.actions.$log.pushEvent({
                    eventName: "去支付",
                    eventCode: "10114"
                }), l.feNavigator.navigateTo(s.default.cart);
            }
        }, {
            key: "_createScanTipsDialogData",
            value: function _createScanTipsDialogData(i) {
                var s = this;
                return function() {
                    var e = (0, ve.genCompid)(i + "$compid__128"), t = Ce(e, 2), n = t[0], o = t[1], a = s.props.actions, r = s.state.isOpenScanDialog;
                    return s.anonymousFunc0 = function() {
                        return s.setState({
                            isOpenScanDialog: !1
                        });
                    }, s.anonymousFunc1 = function onConfirm() {
                        a.$log.pushEvent({
                            eventCode: "10212",
                            eventName: "立即扫码"
                        }), s.scanQRCode();
                    }, s.anonymousFunc2 = function onCancel() {
                        a.$log.pushEvent({
                            eventCode: "10211",
                            eventName: "不需要"
                        });
                    }, ve.propsManager.set({
                        isOpened: r,
                        onClose: s.anonymousFunc0,
                        onConfirm: s.anonymousFunc1,
                        onCancel: s.anonymousFunc2
                    }, o, n), {
                        $compid__128: o
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                var o = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var a = this.$prefix, r = (0, ve.genCompid)(a + "$compid__129"), i = Ce(r, 2), s = i[0], c = i[1], u = (0, 
                ve.genCompid)(a + "$compid__130"), p = Ce(u, 2), l = p[0], f = p[1], m = (0, ve.genCompid)(a + "$compid__131"), _ = Ce(m, 2), d = _[0], h = _[1], y = (0, 
                ve.genCompid)(a + "$compid__132"), C = Ce(y, 2), v = C[0], g = C[1], O = (0, ve.genCompid)(a + "$compid__133"), $ = Ce(O, 2), S = $[0], F = $[1], x = (0, 
                ve.genCompid)(a + "$compid__134"), k = Ce(x, 2), b = k[0], D = k[1], w = (0, ve.genCompid)(a + "$compid__135"), M = Ce(w, 2), P = M[0], T = M[1], A = (0, 
                ve.genCompid)(a + "$compid__136"), R = Ce(A, 2), B = R[0], I = R[1], j = (0, ve.genCompid)(a + "$compid__137"), E = Ce(j, 2), N = E[0], q = E[1], z = (0, 
                ve.genCompid)(a + "$compid__138"), G = Ce(z, 2), Q = G[0], L = G[1], U = (0, ve.genCompid)(a + "$compid__139"), J = Ce(U, 2), W = J[0], H = J[1], K = this.__props, V = K.$cart, X = K.$shelf, Y = K.isScrollFlag;
                if (!V || !V.cartBox) return null;
                var Z = this.__state, ee = Z.isOpenCart, te = (Z.cartIconActiveClass, Z.isClearCartDialogOpen), ne = Z.isProductTakeOffAlertOpen, oe = Z.isOpenExpireModal, ae = V.cartBox, re = ae.originTotalPrice, ie = ae.unsatisfiedCoupon, se = ae.totalCount, ce = V.cartProductList, ue = V.cartBox.totalPrice, pe = X.isSchoolShelf, le = X.isMachineShelf, fe = !pe && !le && (0, 
                Oe.isWeixin)(), me = (0, ge.sub)(re, ue), _e = this._createScanTipsDialogData(a + "bcgzzzzzzz")();
                this.anonymousFunc3 = function() {
                    return o.__props.actions.$cart.clearCart();
                }, this.anonymousFunc4 = function() {
                    return o.setState({
                        isClearCartDialogOpen: !1
                    });
                };
                var de = [ {
                    label: "我知道了",
                    type: "textcolor",
                    onClose: function onClose() {}
                } ];
                this.anonymousFunc5 = function() {
                    return o.setState({
                        isProductTakeOffAlertOpen: !1
                    });
                }, this.anonymousFunc6 = function() {
                    return o.setState({
                        isOpenExpireModal: !1
                    });
                }, this.anonymousFunc7 = function() {
                    return o.setState({
                        isOpenExpireModal: !1
                    });
                }, this.anonymousFunc8 = function() {
                    return o.setState({
                        isOpenExpireModal: !0
                    });
                }, this.anonymousFunc9 = function() {
                    return o.setState({
                        isClearCartDialogOpen: !0
                    });
                };
                var he = 0 < ce.length;
                return ve.propsManager.set({
                    title: "提示",
                    content: "确认清空购物车吗?",
                    isOpened: te,
                    onConfirm: this.anonymousFunc3,
                    onClose: this.anonymousFunc4
                }, c, s), ve.propsManager.set({
                    isOpened: ne,
                    buttons: de,
                    onClose: this.anonymousFunc5
                }, f, l), ve.propsManager.set({
                    isOpen: oe,
                    onClose: this.anonymousFunc6
                }, h, d), ve.propsManager.set({
                    isOpen: ee && 0 < ce.length,
                    onClose: this.onClose,
                    isShowClose: !1
                }, g, v), ve.propsManager.set(ye({}, this.__props, {
                    onOpenExpriedModal: this.anonymousFunc8,
                    onOpenClearCartDialog: this.anonymousFunc9
                }), F, S), ve.propsManager.set({
                    isShow: 0 === ce.length && fe
                }, D, b), ve.propsManager.set({
                    isShow: he
                }, T, P), ve.propsManager.set({
                    price: ue,
                    isRound: !1
                }, I, B), 0 < me && ve.propsManager.set({
                    price: me,
                    showUnitName: !0,
                    isRound: !1
                }, q, N), ie && ve.propsManager.set({
                    price: ie.needToSatisfyAmount,
                    showUnitName: !0,
                    isRound: !1
                }, L, Q), ie && !ie.discount && ve.propsManager.set({
                    price: ie.price,
                    showUnitName: !0,
                    isRound: !1
                }, H, W), Object.assign(this.__state, {
                    anonymousState__temp2: de,
                    anonymousState__temp3: he,
                    $compid__129: c,
                    $compid__130: f,
                    $compid__131: h,
                    $compid__132: g,
                    $compid__133: F,
                    $compid__134: D,
                    $compid__135: T,
                    $compid__136: I,
                    $compid__137: q,
                    $compid__138: L,
                    $compid__139: H,
                    $cart: V,
                    isShowScan: fe,
                    totalCount: se,
                    anonymousState__temp: _e,
                    IMG_expired_example: "https://qn-cdn-pic.feng1.com/theme_pic-20210402-a112889cec6eff40677930f46ae37408?imageslim",
                    isScrollFlag: Y,
                    preferentialPrice: me,
                    unsatisfiedCoupon: ie
                }), this.__state;
            }
        }, {
            key: "productTakeOffAlert",
            value: function productTakeOffAlert() {
                this.setState({
                    isProductTakeOffAlertOpen: !0
                });
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
        }, {
            key: "anonymousFunc6",
            value: function anonymousFunc6() {}
        }, {
            key: "anonymousFunc7",
            value: function anonymousFunc7() {}
        }, {
            key: "anonymousFunc8",
            value: function anonymousFunc8() {}
        }, {
            key: "anonymousFunc9",
            value: function anonymousFunc9() {}
        } ]), (a = CartBox).$$events = [ "anonymousFunc7", "scanQRCode", "toggleCartOpen", "jumpCartPage" ], 
        a.$$componentPath = "packages/racoonjs/components/customer/components/CartBox/index", 
        a);
        function CartBox() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CartBox);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CartBox.__proto__ || Object.getPrototypeOf(CartBox)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp2", "anonymousState__temp3", "$compid__129", "$compid__130", "$compid__131", "$compid__132", "$compid__133", "$compid__134", "$compid__135", "$compid__136", "$compid__137", "$compid__138", "$compid__139", "$cart", "isShowScan", "totalCount", "anonymousState__temp", "IMG_expired_example", "isScrollFlag", "cartIconActiveClass", "isOpenCart", "preferentialPrice", "unsatisfiedCoupon", "isClearCartDialogOpen", "isOpenExpireModal", "isProductTakeOffAlertOpen", "isOpenScanDialog", "$shelf", "actions", "productList", "history" ], 
            e.toggleCartOpen = function() {
                e.setState({
                    isOpenCart: !e.state.isOpenCart
                }, function() {
                    e.state.isOpenCart && e.props.actions.$log.pushEvent({
                        eventCode: "10110",
                        eventName: "首页购物车展开"
                    });
                });
            }, e.onClose = function() {
                e.setState({
                    isOpenCart: !1
                });
            }, e.onOpen = function() {
                e.setState({
                    isOpenCart: !0
                });
            }, e.customComponents = [ "Dialog", "Modal", "BottomSheet", "CartOpen", "Toggle", "Price" ], 
            e;
        }
        _.options = {
            addGlobalClass: !0
        }, _ = (0, r.__decorate)([ c.default ], _), t.default = _, Component(n(0).default.createComponent(_));
    },
    601: function(e, t, n) {}
}, [ [ 600, 0, 1, 2, 3 ] ] ]);