(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 111 ], {
    631: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = function(e, n) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, n) {
                var t = [], o = !0, r = !1, a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(o = (i = u.next()).done) && (t.push(i.value), 
                    !n || t.length !== n); o = !0) ;
                } catch (e) {
                    r = !0, a = e;
                } finally {
                    try {
                        !o && u.return && u.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return t;
            }(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, n, t) {
            return n && defineProperties(e.prototype, n), t && defineProperties(e, t), e;
        };
        function defineProperties(e, n) {
            for (var t = 0; t < n.length; t++) {
                var o = n[t];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var y = t(0), r = _interopRequireDefault(y), a = t(1), i = _interopRequireDefault(t(9)), u = t(14), c = t(146);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t(632);
        var s = (function _inherits(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            e.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
        }(PrivacyPolicyModal, y.Component), o(PrivacyPolicyModal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, n, t) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, n, t);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(t) : void 0;
                })(PrivacyPolicyModal.prototype.__proto__ || Object.getPrototypeOf(PrivacyPolicyModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "openPolicyUrl",
            value: function openPolicyUrl() {
                a.feNavigator.jumpUrlByProject("/html/privacyPolicy.html?t=" + new Date().getTime());
            }
        }, {
            key: "openUserAgreement",
            value: function openUserAgreement() {
                a.feNavigator.jumpUrlByProject("/html/userAgreement.html?t=" + new Date().getTime());
            }
        }, {
            key: "argee",
            value: function argee() {
                var e = this, n = this.props.onModalClose;
                this.setState({
                    isShow: !1
                }, function() {
                    n && e.props.onModalClose(u.PRIVACY_POLICY_MODAL_ID);
                }), i.default.setLocal(c.PRIVACY_POLICY_STORAGE_KEY, "1");
            }
        }, {
            key: "disargee",
            value: function disargee() {
                (0, a.Tips)("请同意政策后使用服务");
            }
        }, {
            key: "_createPrivacyPolicyData",
            value: function _createPrivacyPolicyData() {
                var e = this;
                return function() {
                    return e.anonymousFunc0 = function() {
                        return e.openPolicyUrl();
                    }, {};
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, n, t) {
                var o = this;
                this.__state = e || this.state || {}, this.__props = n || this.props || {};
                var r = this.$prefix, a = (0, y.genCompid)(r + "$compid__166"), i = l(a, 2), u = i[0], c = i[1], s = this.__state.isShow;
                return this.anonymousFunc1 = function() {
                    return o.setState({
                        isShow: !1
                    });
                }, this.anonymousFunc2 = function() {
                    return o.openUserAgreement();
                }, this.anonymousFunc3 = function() {
                    return o.openPolicyUrl();
                }, this.anonymousFunc4 = function() {
                    return o.argee();
                }, this.anonymousFunc5 = function() {
                    return o.disargee();
                }, y.propsManager.set({
                    className: "privacy-policy-modal",
                    isOpen: s,
                    onClose: this.anonymousFunc1,
                    closeOnClickOverlay: !1,
                    isShowClose: !1
                }, c, u), Object.assign(this.__state, {
                    $compid__166: c
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
        } ]), PrivacyPolicyModal);
        function PrivacyPolicyModal() {
            !function _classCallCheck(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            }(this, PrivacyPolicyModal);
            var e = function _possibleConstructorReturn(e, n) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? e : n;
            }(this, (PrivacyPolicyModal.__proto__ || Object.getPrototypeOf(PrivacyPolicyModal)).apply(this, arguments));
            return e.$usedState = [ "$compid__166", "isShow" ], e.customComponents = [ "Modal" ], 
            e;
        }
        s.$$events = [ "anonymousFunc0", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5" ], 
        s.$$componentPath = "pages/index/modal/PrivacyPolicyModal/index", n.default = s, 
        Component(t(0).default.createComponent(s));
    },
    632: function(e, n, t) {}
}, [ [ 631, 0, 1, 2, 3 ] ] ]);