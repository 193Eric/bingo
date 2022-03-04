(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 40 ], {
    534: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var r = o(0), i = _interopRequireDefault(r), a = _interopRequireDefault(o(2));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(535);
        var s = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(PayPassword, r.Component), n(PayPassword, [ {
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
                    var i = n.get;
                    return void 0 !== i ? i.call(o) : void 0;
                })(PayPassword.prototype.__proto__ || Object.getPrototypeOf(PayPassword.prototype), "_constructor", this).apply(this, arguments), 
                this.timer = null, this.state = {
                    code: "",
                    mobilePhone: "",
                    codeTxt: ""
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var t = this;
                a.default.get("memberInfo").then(function(e) {
                    t.setState({
                        mobilePhone: e.mobilePhone
                    });
                });
            }
        }, {
            key: "componentDidHide",
            value: function componentDidHide() {
                clearInterval(this.timer);
            }
        }, {
            key: "getCode",
            value: function getCode(e) {
                var t = e.detail.value;
                this.setState({
                    code: t
                });
            }
        }, {
            key: "getPhoneCode",
            value: function getPhoneCode() {
                var o = this;
                a.default.get("sendModifyPhoneCode").then(function(e) {
                    clearInterval(o.timer);
                    var t = 60;
                    o.setState({
                        codeTxt: t + "秒后重新获取"
                    }, function() {
                        o.timer = setInterval(function() {
                            --t <= 0 && clearInterval(o.timer), o.setState({
                                codeTxt: t <= 0 ? "" : t + "秒后重新获取"
                            });
                        }, 1e3);
                    }), i.default.showToast({
                        title: "发送成功！",
                        icon: "none"
                    });
                });
            }
        }, {
            key: "onConfirm",
            value: function onConfirm() {
                var e = this.state, t = e.codeTxt, o = e.code, onConfirm = this.props.onConfirm;
                t ? onConfirm && this.props.onConfirm(o) : i.default.showToast({
                    title: "验证码已超时，请重新获取",
                    icon: "none"
                });
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var n = this.__state;
                return n.code, n.codeTxt, n.mobilePhone, Object.assign(this.__state, {}), this.__state;
            }
        } ]), PayPassword);
        function PayPassword() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, PayPassword);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (PayPassword.__proto__ || Object.getPrototypeOf(PayPassword)).apply(this, arguments));
            return e.$usedState = [ "code", "codeTxt", "mobilePhone" ], e.customComponents = [], 
            e;
        }
        s.$$events = [ "getCode", "getPhoneCode", "onConfirm" ], s.$$componentPath = "packages/racoonjs/components/GetCode/index", 
        t.default = s, Component(o(0).default.createComponent(s));
    },
    535: function(e, t, o) {}
}, [ [ 534, 0, 1, 2, 3 ] ] ]);