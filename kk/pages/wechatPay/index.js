(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 133 ], {
    366: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
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
        var r = n(0), i = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), s = n(1);
        var c = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(WebViewComponent, r.Component), o(WebViewComponent, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, n);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(WebViewComponent.prototype.__proto__ || Object.getPrototypeOf(WebViewComponent.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var t = this, e = this.$router.params.data;
                try {
                    var n = JSON.parse(decodeURIComponent(e)), o = n.payType, r = n.payParam;
                    i.default.requestPayment(a({}, r, {
                        success: function success() {
                            t.handleSuccess(o);
                        },
                        fail: function fail(e) {
                            e && e.errMsg && -1 !== e.errMsg.indexOf("fail cancel") ? t.handleCancel(o) : (e && e.errMsg, 
                            t.handleFailed(o, e));
                        }
                    }));
                } catch (e) {
                    (0, s.Tips)("支付参数获取错误"), this.timer = setTimeout(function() {
                        i.default.navigateBack();
                    }, 1500), console.error(e);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                clearTimeout(this.timer);
            }
        }, {
            key: "handleSuccess",
            value: function handleSuccess() {
                var e = s.Storage.get("shelfCode"), t = s.Storage.get("shelfType"), n = this.$router.params.orderId;
                n ? s.feNavigator.reLaunch("/pages/paySuccess/index", {
                    orderId: n
                }) : 6 == t && e ? s.feNavigator.reLaunch("/counter/pages/index/index", {
                    shelfCode: e
                }) : (i.default.showToast({
                    title: "支付成功"
                }), s.Storage.set("isNavigateBack", "1", 30), this.timer = setTimeout(function() {
                    i.default.navigateBack();
                }, 1500));
            }
        }, {
            key: "handleCancel",
            value: function handleCancel() {
                i.default.navigateBack();
            }
        }, {
            key: "handleFailed",
            value: function handleFailed(e, t) {
                (0, s.Tips)(t && t.errMsg), setTimeout(function() {
                    i.default.navigateBack();
                }, 3e3);
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                return this.__state = e || this.state || {}, this.__props = t || this.props || {}, 
                this.$prefix, Object.assign(this.__state, {}), this.__state;
            }
        } ]), WebViewComponent);
        function WebViewComponent() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, WebViewComponent);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (WebViewComponent.__proto__ || Object.getPrototypeOf(WebViewComponent)).apply(this, arguments));
            return e.$usedState = [], e.config = {
                navigationBarTitleText: "微信安全支付"
            }, e.customComponents = [], e;
        }
        c.$$events = [], c.$$componentPath = "pages/wechatPay/index", t.default = c, Component(n(0).default.createComponent(c, !0));
    }
}, [ [ 366, 0, 1, 2, 3 ] ] ]);