(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 132 ], {
    362: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var o, a = r(5), i = r(0), s = _interopRequireDefault(i), l = _interopRequireDefault(r(18)), u = _interopRequireDefault(r(17)), p = r(1), c = r(113), d = r(363), f = _interopRequireDefault(d), h = r(10), v = _interopRequireDefault(r(364));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        r(365);
        var m = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(WebViewComponent, i.Component), n(WebViewComponent, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === n) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : get(o, t, r);
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(WebViewComponent.prototype.__proto__ || Object.getPrototypeOf(WebViewComponent.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    encodeUrl: "",
                    url: ""
                }, this.data = {
                    shareData: {
                        title: "丰e足食",
                        path: "/pages/index/index",
                        imageUrl: ""
                    }
                }, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "onShareAppMessage",
            value: function onShareAppMessage() {
                return this.data.shareData;
            }
        }, {
            key: "componentDidShow",
            value: function componentDidShow() {
                if (p.Storage.get("isNavigateBack")) {
                    p.Storage.remove("isNavigateBack");
                    var e = this.state.encodeUrl, t = (0, p.getParamsUrl)(e, {
                        decode: !1
                    }).redirect;
                    if (t) {
                        var r = decodeURIComponent(t);
                        r.startsWith("https") && this.setState({
                            url: (0, p.setParamsUrl)(r, {
                                t: Date.now()
                            })
                        });
                    }
                }
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var e = this.$router.params, n = e.url, t = e.title, r = p.Storage.get(h.TOKEN_KEY), o = -1 === decodeURIComponent(n).indexOf("autoLogin/index.html"), a = decodeURIComponent(n).match(/inviteId=(.*?)$/);
                if (a && a[1] && p.Storage.set("openGroupInviteId", a[1], 300), o && r) n = (0, 
                c.formatH5Url)(n), (0, f.default)(n); else {
                    var i = (0, d.getUrlParam)(n);
                    i.redirect && (0, f.default)(decodeURIComponent(i.redirect));
                }
                (n.startsWith("http%3A%2F%2F") || n.startsWith("https%3A%2F%2F")) && (n = decodeURIComponent(n)), 
                v.default.some(function(e) {
                    var t = e, r = encodeURIComponent(e);
                    return -1 < n.indexOf(t) || -1 < n.indexOf(r);
                }) && p.Storage.set("needUpdateCoupon", "1"), console.log("webview:", n), this.setState({
                    encodeUrl: n,
                    url: n
                }), t && s.default.setNavigationBarTitle({
                    title: t
                });
                try {
                    s.default.onCopyUrl(function() {
                        return {
                            query: "url=" + encodeURIComponent((0, c.formatShareUrl)(n))
                        };
                    });
                } catch (e) {}
            }
        }, {
            key: "onNeedUpdate",
            value: function onNeedUpdate(e) {
                if (e) {
                    var t = e.type, r = e.payload;
                    if ("SHARE_CONFIG" === t) {
                        s.default.showShareMenu({
                            withShareTicket: !1
                        });
                        var n = r.miniExtraData;
                        n && n.openGroupInviteId && p.Storage.set("openGroupInviteId", n.openGroupInviteId, 300), 
                        this.data.shareData = {
                            title: r.shareTitle,
                            path: "/pages/webview/webview?url=" + encodeURIComponent((0, c.formatShareUrl)(r.shareLink)),
                            imageUrl: r.shareImg
                        };
                    }
                }
            }
        }, {
            key: "onMessage",
            value: function onMessage(e) {
                var t = e.detail.data;
                if (t && 0 != t.length) {
                    var r = t[t.length - 1];
                    if (r && r.type) {
                        var n = r.type, o = r.payload;
                        "THEME_ACTIVITY_ADD_PRODUCT" !== n && "GOODS_ACTIVITY_ADD_PRODUCT" !== n || this.props.actions.$cart.combineOldCartData(o), 
                        "SHARE_CONFIG" === n && (this.data.shareData = {
                            title: o.shareTitle,
                            path: "/pages/webview/webview?url=" + encodeURIComponent((0, c.formatShareUrl)(o.shareLink)) + "&title=" + (o.shareTitle || ""),
                            imageUrl: o.shareImg
                        });
                    }
                }
            }
        }, {
            key: "webviewOnLoad",
            value: function webviewOnLoad() {}
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                return this.__state = e || this.state || {}, this.__props = t || this.props || {}, 
                this.$prefix, this.__state.url, Object.assign(this.__state, {}), this.__state;
            }
        } ]), (o = WebViewComponent).$$events = [ "onMessage", "webviewOnLoad" ], o.$$componentPath = "pages/webview/webview", 
        o);
        function WebViewComponent() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, WebViewComponent);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (WebViewComponent.__proto__ || Object.getPrototypeOf(WebViewComponent)).apply(this, arguments));
            return e.$usedState = [ "url", "encodeUrl", "actions" ], e.config = {
                navigationBarTitleText: ""
            }, e.customComponents = [], e;
        }
        m = (0, a.__decorate)([ u.default, (0, l.default)() ], m), t.default = m, Component(r(0).default.createComponent(m, !0));
    },
    363: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getUrlParam = getUrlParam, t.default = function H5Activity(t) {
            var e = o.find(function(e) {
                if (-1 < t.indexOf(e.url)) return !0;
            });
            e && e.handle(t);
        };
        var n = r(1);
        function getUrlParam(e) {
            if ("string" != typeof e) return {};
            var o = {}, t = decodeURIComponent(e), r = void 0;
            return -1 != (t = t.split("#")[0]).indexOf("?") && (r = t.indexOf("?") + 1, (t = t.substr(r)).split("&").forEach(function(e) {
                var t = e.indexOf("=");
                if (-1 != t) {
                    var r = e.substring(0, t), n = e.substr(t + 1);
                    o[r] = n.replace(/\t/g, "").replace(/\n/g, "").replace(/\r/g, "");
                }
            })), o;
        }
        var o = [ {
            url: "activity/taskReward/index",
            handle: function handle() {
                n.Storage.remove("customerActivityLottery");
            }
        }, {
            url: "integralMall/luckDraw/index",
            handle: function handle(e) {
                var t = getUrlParam(e);
                t && (t.activityCode || t.groupCode) && n.Storage.set("customerActivityLottery", t);
            }
        } ];
    },
    364: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = [ "activity/userTasks/index.html", "integralMall/integralMall.html", "personal/memberBenefits/index.html" ];
    },
    365: function(e, t, r) {}
}, [ [ 362, 0, 1, 2, 3 ] ] ]);