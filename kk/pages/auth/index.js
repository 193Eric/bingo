(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 83 ], {
    458: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = _interopRequireDefault(n(3)), _ = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (o) throw i;
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
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var i, a = n(5), d = n(0), s = _interopRequireDefault(d), c = _interopRequireDefault(n(12)), u = n(1);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var a = e.apply(this, arguments);
                return new Promise(function(o, i) {
                    return function step(e, t) {
                        try {
                            var n = a[e](t), r = n.value;
                        } catch (e) {
                            return void i(e);
                        }
                        if (!n.done) return Promise.resolve(r).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        o(r);
                    }("next");
                });
            };
        }
        n(459);
        var l, p, f = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(WebViewComponent, d.Component), o(WebViewComponent, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : get(o, t, n);
                    }
                    if ("value" in r) return r.value;
                    var i = r.get;
                    return void 0 !== i ? i.call(n) : void 0;
                })(WebViewComponent.prototype.__proto__ || Object.getPrototypeOf(WebViewComponent.prototype), "_constructor", this).apply(this, arguments), 
                this.data = {
                    redirect: ""
                }, this.state = {
                    canIUseGetUserProfile: !1,
                    userAccountList: []
                }, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this.$router.params.redirect;
                this.data.redirect = decodeURIComponent(e);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                wx.getUserProfile && this.setState({
                    canIUseGetUserProfile: !0
                });
            }
        }, {
            key: "onInnerGetUserInfo",
            value: (p = _asyncToGenerator(r.default.mark(function _callee(t) {
                return r.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("getUserInfo:ok" === t.detail.errMsg) return e.next = 3, this.authorizeGetUseInfo();
                        e.next = 4;
                        break;

                      case 3:
                        this.onAuthSuccessCallback();

                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this);
            })), function onInnerGetUserInfo(e) {
                return p.apply(this, arguments);
            })
        }, {
            key: "onGetUserProfile",
            value: (l = _asyncToGenerator(r.default.mark(function _callee2() {
                return r.default.wrap(function _callee2$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.getUserProfileHOC();

                      case 2:
                        u.feNavigator.reLaunch("/" + this.data.redirect);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, _callee2, this);
            })), function onGetUserProfile() {
                return l.apply(this, arguments);
            })
        }, {
            key: "onAuthSuccessCallback",
            value: function onAuthSuccessCallback() {
                u.feNavigator.reLaunch("/" + this.data.redirect);
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, o = (0, d.genCompid)(r + "$compid__311"), i = _(o, 2), a = i[0], s = i[1], c = (0, 
                d.genCompid)(r + "$compid__312"), u = _(c, 2), l = u[0], p = u[1], f = this.__state, h = f.userAccountList;
                return f.canIUseGetUserProfile, 1 < h.length && d.propsManager.set({
                    list: h,
                    scene: 1,
                    onLogin: this.onLogin
                }, s, a), d.propsManager.set({
                    isOpen: !0,
                    closeOnClickOverlay: !1,
                    isShowClose: !1
                }, p, l), Object.assign(this.__state, {
                    $compid__311: s,
                    $compid__312: p
                }), this.__state;
            }
        } ]), (i = WebViewComponent).$$events = [ "onInnerGetUserInfo", "onGetUserProfile" ], 
        i.$$componentPath = "pages/auth/index", i);
        function WebViewComponent() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, WebViewComponent);
            var t = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (WebViewComponent.__proto__ || Object.getPrototypeOf(WebViewComponent)).apply(this, arguments));
            return t.$usedState = [ "$compid__311", "$compid__312", "userAccountList", "canIUseGetUserProfile" ], 
            t.config = {
                navigationBarTitleText: "丰e足食"
            }, t.onLogin = function(e) {
                t.setUserInfo(e), t.setState({
                    userAccountList: []
                }), u.feNavigator.reLaunch("/" + t.data.redirect);
            }, t.customComponents = [ "AccountLogin", "Modal" ], t;
        }
        f = (0, a.__decorate)([ (0, c.default)() ], f), t.default = f, Component(n(0).default.createComponent(f, !0));
    },
    459: function(e, t, n) {}
}, [ [ 458, 0, 1, 2, 3 ] ] ]);