(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 121 ], {
    454: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = _interopRequireDefault(a(3)), k = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var a = [], r = !0, n = !1, o = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (a.push(s.value), 
                    !t || a.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, o = e;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (n) throw o;
                    }
                }
                return a;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, I = Object.assign || function(e) {
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
        var n = a(5), o = a(6), S = a(0), s = _interopRequireDefault(S), i = _interopRequireDefault(a(18)), O = a(1), u = _interopRequireDefault(a(2)), c = _interopRequireDefault(a(17)), p = a(114), y = a(136), d = _interopRequireDefault(a(27)), f = _interopRequireDefault(a(115));
        a(455);
        var P, m = a(456), h = _interopRequireDefault(a(457));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var s = e.apply(this, arguments);
                return new Promise(function(n, o) {
                    return function step(e, t) {
                        try {
                            var a = s[e](t), r = a.value;
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
        var g, v, _, w, b = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Pay, o.Component), r(Pay, [ {
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
                })(Pay.prototype.__proto__ || Object.getPrototypeOf(Pay.prototype), "_constructor", this).apply(this, arguments), 
                this.fillErrorLastNumber = 5, this.alreadyPay = !1, this.state = {
                    totalPrice: 0,
                    hasZeroErrorTime: 0,
                    isShowPasswordInput: !1,
                    isOpenResetDialog: !1,
                    payPage: ""
                }, this.payData = {}, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "getPayData",
            value: function getPayData() {
                var e = O.Storage.get("weixinPayData");
                try {
                    "string" == typeof e && (e = JSON.parse(e));
                } catch (e) {
                    return console.error(e), (0, O.Tips)("未获取到支付信息错误"), null;
                }
                return e;
            }
        }, {
            key: "handleCancelPay",
            value: function handleCancelPay(e, t) {
                var a = e.orderId, r = t && "combinedPay" === t.payDataMapKey;
                a && r && u.default.get("cancelPay", {
                    orderId: a
                }, {
                    failedMsg: !1
                }), s.default.navigateBack();
            }
        }, {
            key: "handleSuccessPay",
            value: function handleSuccessPay(e) {
                var t = this;
                (0, O.showToast)({
                    title: "支付成功！"
                }), setTimeout(function() {
                    t.notifyPrevPageUpdate(e), s.default.navigateBack();
                }, 2e3);
            }
        }, {
            key: "handleFailedPay",
            value: function handleFailedPay(e) {
                var t = e.msg, a = e.msg;
                t instanceof Object && (a = t.message || t.msg), (0, O.Tips)(a || "支付失败！", 2100), 
                this.notifyPrevPageUpdate(e), setTimeout(function() {
                    s.default.navigateBack();
                }, 2e3);
            }
        }, {
            key: "notifyPrevPageUpdate",
            value: function notifyPrevPageUpdate() {
                throw new Error("Method not implemented.");
            }
        }, {
            key: "componentDidMount",
            value: (w = _asyncToGenerator(l.default.mark(function _callee() {
                var t, a, r, n, o, s, i, u, c;
                return l.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = this.$router.params, a = t.code, t.type, r = t.price, n = t.payPage, t.sourcePay, 
                        t.sendData, o = this.props.$user, this.setState({
                            totalPrice: r,
                            payPage: n
                        }), s = this.getPayData(), console.log("weixinPayData", s), s) {
                            e.next = 7;
                            break;
                        }
                        return e.abrupt("return");

                      case 7:
                        if (Object.assign(s, {
                            code: a
                        }), this.payData = s, i = s.paymentType, u = (0, y.getPayMethodItemByPaymentType)(i) || O.Storage.get("PAY_ITEM"), 
                        this.currentPayMethodItem = u, console.log(i, u), u) {
                            e.next = 15;
                            break;
                        }
                        return e.abrupt("return");

                      case 15:
                        if (!u.needPassword && "refund" !== n) {
                            e.next = 20;
                            break;
                        }
                        this.showPasswordInput(), e.next = 25;
                        break;

                      case 20:
                        if ((0, d.default)(u.handlePayment)) return e.next = 23, u.handlePayment(s, o, Number(r));
                        e.next = 25;
                        break;

                      case 23:
                        c = e.sent, this.handlePaymentResult(c, this.currentPayMethodItem);

                      case 25:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function componentDidMount() {
                return w.apply(this, arguments);
            })
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                O.Storage.remove("PAY_ITEM"), O.Storage.remove("BUSINESS_PAY_ITEM");
            }
        }, {
            key: "handlePaymentResult",
            value: (_ = _asyncToGenerator(l.default.mark(function _callee2(t, a) {
                return l.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("cancel" === t.type) this.handleCancelPay(t, a); else if ("success" === t.type) {
                            try {
                                this.props.actions.$cart.removeSelectCartItem();
                            } catch (e) {}
                            this.handleSuccessPay(t, a);
                        } else this.handleFailedPay(t);

                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this);
            })), function handlePaymentResult(e, t) {
                return _.apply(this, arguments);
            })
        }, {
            key: "showPasswordInput",
            value: function showPasswordInput() {
                this.setState({
                    isShowPasswordInput: !0
                });
            }
        }, {
            key: "createPayOrder",
            value: function createPayOrder(e) {
                return new Promise(function(t, a) {
                    setTimeout(function() {
                        u.default.post("weixinPay", e, {}).then(function(e) {
                            t(e);
                        }).catch(function(e) {
                            console.log("error", e), a(e);
                        });
                    }, 0);
                });
            }
        }, {
            key: "forgetPassword",
            value: function forgetPassword(e) {
                e.stopPropagation(), this.gotoForgetPassword();
            }
        }, {
            key: "verifyPassword",
            value: (v = _asyncToGenerator(l.default.mark(function _callee3(t) {
                var a, r, n, o = this;
                return l.default.wrap(function _callee3$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (6 != t.length || this.alreadyPay) return e.abrupt("return");
                        e.next = 2;
                        break;

                      case 2:
                        return this.alreadyPay = !0, e.next = 5, (0, p.encryptData)(t);

                      case 5:
                        return a = e.sent, r = {
                            payPassword: a
                        }, n = t.includes("0"), e.abrupt("return", u.default.get("verifyPayPassword", r).then(function() {
                            var e = I({}, o.payData, r);
                            return Promise.resolve(e);
                        }).catch(function(e) {
                            if (o.refs.password.clear(), o.alreadyPay = !1, n) {
                                var t = o.state.hasZeroErrorTime;
                                o.setState({
                                    hasZeroErrorTime: t + 1
                                }), 1 <= t && o.setState({
                                    isOpenResetDialog: !0
                                });
                            } else e.msg && setTimeout(function() {
                                (0, O.Tips)(e.msg);
                            }, 100);
                            return Promise.reject(e);
                        }));

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, _callee3, this);
            })), function verifyPassword(e) {
                return v.apply(this, arguments);
            })
        }, {
            key: "requestBalancePay",
            value: function requestBalancePay(e) {
                var t = "weixinPay";
                return "refund" === this.state.payPage && (t = "refundPay"), u.default.post(t, e).then(function(e) {
                    var t = {
                        type: "success",
                        orderId: e.orderId
                    };
                    return "success" !== e.payData && (t.type = "failed", t.msg = e), Promise.resolve(t);
                }).catch(function(e) {
                    return Promise.resolve({
                        type: "failed",
                        msg: e
                    });
                });
            }
        }, {
            key: "requestCombinedPay",
            value: function requestCombinedPay(e) {
                var t = this;
                if (!this.currentPayMethodItem) return Promise.resolve({
                    type: "cancel"
                });
                var a = this.currentPayMethodItem, r = "combinedBalance" === a.key, n = O.Storage.get("BUSINESS_PAY_ITEM") || null, o = {
                    feeType: "CNY",
                    payAmount: a.balance,
                    payMethodCode: r ? "EPay" : "businessHelpPay",
                    payPassword: e.payPassword
                };
                n && "combinedBusinessBalance" === a.key && (o.grantPlanId = n.grantPlanId, o.groupCustomerId = n.groupCustomerId);
                var s = {
                    feeType: "CNY",
                    payMethodCode: "WeiXinPayJSAPI",
                    payAmount: a.wechatPayPrice
                };
                return e.payItemVOList = [ o, s ], e.appType = "customerShelfMini", u.default.post("weixinPay", e).then(function(e) {
                    return t.weixinPay(e);
                }).then(function(e) {
                    return Promise.resolve(e);
                }).catch(function(e) {
                    return Promise.resolve(e);
                });
            }
        }, {
            key: "weixinPay",
            value: (g = _asyncToGenerator(l.default.mark(function _callee4(t) {
                var a, r, n;
                return l.default.wrap(function _callee4$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, (0, m.checkWeChatPayData)(t, {});

                      case 3:
                        return a = e.sent, r = a.payParam, e.next = 7, (0, h.default)({
                            payParam: r,
                            serveData: t
                        });

                      case 7:
                        return n = e.sent, e.abrupt("return", Promise.resolve({
                            payParam: n.payParam,
                            type: "success",
                            orderId: t.orderId
                        }));

                      case 11:
                        if (e.prev = 11, e.t0 = e.catch(0), e.t0 && "cancel" === e.t0.type) return e.abrupt("return", Promise.reject({
                            type: "cancel",
                            orderId: e.t0.orderId,
                            msg: e.t0
                        }));
                        e.next = 15;
                        break;

                      case 15:
                        return e.abrupt("return", Promise.reject({
                            type: "failed",
                            orderId: e.t0 && e.t0.orderId,
                            msg: e.t0
                        }));

                      case 16:
                      case "end":
                        return e.stop();
                    }
                }, _callee4, this, [ [ 0, 11 ] ]);
            })), function weixinPay(e) {
                return g.apply(this, arguments);
            })
        }, {
            key: "cancelPay",
            value: function cancelPay() {
                s.default.navigateBack();
            }
        }, {
            key: "gotoForgetPassword",
            value: function gotoForgetPassword() {
                O.feNavigator.navigateTo("/packageA/pages/setPassword/index", {
                    status: "2"
                });
            }
        }, {
            key: "_createRendeBalacePayData",
            value: function _createRendeBalacePayData(b) {
                var D = this;
                return function() {
                    var e = (0, S.genCompid)(b + "$compid__306"), t = k(e, 2), a = t[0], r = t[1], n = (0, 
                    S.genCompid)(b + "$compid__307"), o = k(n, 2), s = o[0], i = o[1], u = (0, S.genCompid)(b + "$compid__308"), c = k(u, 2), l = c[0], p = c[1], y = (0, 
                    S.genCompid)(b + "$compid__309"), d = k(y, 2), f = d[0], P = d[1], m = D.state, h = m.isShowPasswordInput, g = m.totalPrice, v = D.currentPayMethodItem && "combinedPay" === D.currentPayMethodItem.payDataMapKey, _ = v ? D.currentPayMethodItem.balance : g, w = {
                        hasMask: !1,
                        showBoard: !0,
                        onKeyup: function onKeyup(e, t) {
                            "del" === t ? D.refs.password.back() : D.refs.password.setValue(e, function(e) {
                                if (6 === e.length) {
                                    var t = (0, O.Loading)("加载中...");
                                    D.verifyPassword(e).then(function(e) {
                                        return console.log(e), console.log(D.currentPayMethodItem), v ? D.requestCombinedPay(e) : D.requestBalancePay(e);
                                    }).then(function(e) {
                                        D.handlePaymentResult(e, D.currentPayMethodItem);
                                    }).catch(function(e) {
                                        console.error(e), t && t.hide(), setTimeout(function() {
                                            (0, O.Tips)(e, 2e3);
                                        }, 100);
                                    });
                                }
                            });
                        }
                    };
                    return S.propsManager.set({
                        isShow: h
                    }, r, a), S.propsManager.set({
                        price: _
                    }, i, s), S.propsManager.set({
                        className: "balace_pay"
                    }, p, l), S.propsManager.set(I({}, w), P, f), {
                        $compid__306: r,
                        $compid__307: i,
                        $compid__308: p,
                        $compid__309: P
                    };
                };
            }
        }, {
            key: "_createResetDialogData",
            value: function _createResetDialogData(s) {
                var i = this;
                return function() {
                    var e = (0, S.genCompid)(s + "$compid__310"), t = k(e, 2), a = t[0], r = t[1], n = i.state.isOpenResetDialog;
                    i.anonymousFunc0 = function() {
                        return i.setState({
                            isOpenResetDialog: !1
                        });
                    };
                    var o = [ {
                        label: "去重置密码",
                        type: "primary",
                        onClose: function onClose() {
                            return i.gotoForgetPassword();
                        }
                    } ];
                    return S.propsManager.set({
                        isOpened: n,
                        onClose: i.anonymousFunc0,
                        buttons: o,
                        content: "您的账户存在风险，为保证账号安全，请重置密码"
                    }, r, a), {
                        anonymousState__temp: o,
                        $compid__310: r
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, a) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, n = this._createRendeBalacePayData(r + "cdgzzzzzzz")(), o = this._createResetDialogData(r + "cdhzzzzzzz")();
                return this.$$refs.pushRefs([ {
                    type: "component",
                    id: "cdezz",
                    refName: "password",
                    fn: null
                }, {
                    type: "component",
                    id: "cdfzz",
                    refName: "keyBoard",
                    fn: null
                } ]), Object.assign(this.__state, {
                    anonymousState__temp2: n,
                    anonymousState__temp3: o
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), (P = Pay).$$events = [ "cancelPay", "forgetPassword" ], P.$$componentPath = "pages/pay/index", 
        P);
        function Pay() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Pay);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (Pay.__proto__ || Object.getPrototypeOf(Pay)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp2", "anonymousState__temp3", "totalPrice", "hasZeroErrorTime", "isShowPasswordInput", "isOpenResetDialog", "payPage", "$user", "actions" ], 
            e.config = {
                navigationBarTitleText: "支付"
            }, e.customComponents = [ "Toggle", "Price", "PayPassword", "NumberKeyboard", "Dialog" ], 
            e;
        }
        b = (0, n.__decorate)([ c.default, f.default, (0, i.default)() ], b), t.default = b, 
        Component(a(0).default.createComponent(b, !0));
    },
    455: function(e, t, a) {},
    456: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkWeChatPayData = t.getXMFApp = t.cancelPay = t.commonCreatePay = t.createPayOrder = void 0;
        var r = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a(2)), s = a(1);
        t.createPayOrder = function createPayOrder(e) {
            return new Promise(function(t, a) {
                r.default.post("weixinPay", e, {
                    showLoading: !0
                }).then(function(e) {
                    t(e);
                }).catch(function(e) {
                    a(e);
                });
            });
        }, t.commonCreatePay = function commonCreatePay(e) {
            return new Promise(function(t, a) {
                r.default.post("commonCreateOrder", e, {
                    showLoading: !0,
                    async: !1,
                    once: !0
                }).then(function(e) {
                    t(e);
                }).catch(function(e) {
                    a(e);
                });
            });
        }, t.cancelPay = function cancelPay(e) {
            return new Promise(function(t, a) {
                e ? r.default.get("cancelPay", {
                    orderId: e
                }, {
                    showLoading: !0
                }).then(function(e) {
                    t(e);
                }).catch(function(e) {
                    a(e);
                }) : a();
            });
        }, t.getXMFApp = function getXMFApp() {
            return !1;
        }, t.checkWeChatPayData = function checkWeChatPayData(n, o) {
            return new Promise(function(e, t) {
                var a = null, r = "";
                try {
                    r = n.payData ? function checkPayParamsError(t, a) {
                        var r = 0, n = "";
                        if (t && ([ {
                            name: "timeStamp",
                            code: 4010
                        }, {
                            name: "nonceStr",
                            code: 4011
                        }, {
                            name: "package",
                            code: 4012
                        }, {
                            name: "signType",
                            code: 4013
                        }, {
                            name: "paySign",
                            code: 4014
                        } ].some(function(e) {
                            return void 0 === ("appId" != e.name && t[e.name]) && (r = e.code, n = "userid: " + a.userid + " 支付遇到问题，缺少参数：" + e.name, 
                            !0);
                        }), r)) return (0, s.Tips)("支付请求失败，请稍后重试"), n;
                        return n;
                    }(a = JSON.parse(n.payData.replace(/'/g, '"')), o) : "无支付参数";
                } catch (e) {
                    return void t(e);
                }
                r ? t(r) : e({
                    payParam: a,
                    orderId: n.orderId
                });
            });
        };
    },
    457: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
        };
        t.default = function WXPayment(e) {
            var r = e.payParam, n = e.userId, o = e.serveData;
            return new Promise(function(t, a) {
                u.default.requestPayment(i({}, r, {
                    success: function success(e) {
                        t(i({}, e, {
                            payParam: r,
                            userId: n,
                            type: "success"
                        }));
                    },
                    fail: function fail(e) {
                        e && e.errMsg && -1 !== e.errMsg.indexOf("fail cancel") ? ((0, l.default)("userid: " + n + " 取消微信支付"), 
                        (0, c.Tips)("已取消支付"), p.default.send({
                            code: "B05-1",
                            result: "cancel",
                            resultInfo: "用户取消支付"
                        }), a({
                            orderId: o.orderId,
                            type: "cancel",
                            msg: "用户取消支付"
                        })) : (e && e.errMsg ? ("object" === (void 0 === e ? "undefined" : s(e)) && (e.userid = n), 
                        (0, l.default)(e, "error"), p.default.record({
                            code: "B05-1",
                            result: "fail"
                        })) : ((0, c.Tips)("亲，请重新刷新页面哦~"), (0, l.default)(n + " catch错误: " + e, "error")), 
                        a({
                            orderId: o.orderId,
                            type: "failed",
                            msg: e
                        }));
                    }
                }));
            });
        };
        var u = _interopRequireDefault(a(6)), c = a(1), l = _interopRequireDefault(a(138)), p = _interopRequireDefault(a(139));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
    }
}, [ [ 454, 0, 1, 2, 3 ] ] ]);