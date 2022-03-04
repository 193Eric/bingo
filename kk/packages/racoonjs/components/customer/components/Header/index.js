(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 58 ], {
    578: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = _interopRequireDefault(n(3)), r = function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                Object.defineProperty(e, a.key, a);
            }
        }
        var o = n(0), i = _interopRequireDefault(o), s = _interopRequireDefault(n(145)), c = n(1), l = _interopRequireDefault(n(13)), u = _interopRequireDefault(n(579));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function _asyncToGenerator(e) {
            return function() {
                var i = e.apply(this, arguments);
                return new Promise(function(r, o) {
                    return function step(e, t) {
                        try {
                            var n = i[e](t), a = n.value;
                        } catch (e) {
                            return void o(e);
                        }
                        if (!n.done) return Promise.resolve(a).then(function(e) {
                            step("next", e);
                        }, function(e) {
                            step("throw", e);
                        });
                        r(a);
                    }("next");
                });
            };
        }
        n(580);
        var f, d = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Header, o.Component), r(Header, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === a) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, n);
                    }
                    if ("value" in a) return a.value;
                    var o = a.get;
                    return void 0 !== o ? o.call(n) : void 0;
                })(Header.prototype.__proto__ || Object.getPrototypeOf(Header.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    shelfAddressName: "",
                    styleTemplateId: 1,
                    greeting: null,
                    adv1_2: void 0
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.$shelf;
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                if (e.$shelf && e.homeConfig) {
                    e.$shelf;
                    var t = e.homeConfig.contentCouponTheme, n = Array.isArray(t) ? t.length : 0;
                    n && t && this.setState({
                        greeting: t[parseInt(String(Math.random() * n), 10)].detailValue
                    });
                }
                if (e.advList) {
                    var a = this.props.advList;
                    if (!a) return;
                    var r = 0 < a.length ? a[0] : null;
                    this.setState({
                        adv1_2: r
                    });
                }
                if (e.homeConfig && !this.state.greeting) {
                    var o = this.props.homeConfig, i = 1;
                    if (o && o.contentGreetings) {
                        var s = o.contentGreetings.contentDetails, c = s && s.length, l = c ? s[parseInt(String(Math.random() * c), 10)].detailValue : null;
                        if (i = o.contentGreetings.styleTemplateId || 1, c && 1 == i && 8 != e.$shelf.shelfType) try {
                            document.querySelector("#shelfApp").classList.add("member-birthday-theme1");
                        } catch (e) {}
                        2 == i && (l = null), this.setState({
                            styleTemplateId: i,
                            greeting: l && 10 < l.length ? l.substr(0, 10) + "..." : l
                        });
                    }
                }
            }
        }, {
            key: "_createLeftContentData",
            value: function _createLeftContentData(e) {
                var t = this;
                return function() {
                    return {
                        shelfAddressName: t.state.shelfAddressName,
                        IS_SCHOOL_SHELF: !1,
                        anonymousState__temp: t._createGreetingsData(e + "bbhzzzzzzz")()
                    };
                };
            }
        }, {
            key: "sendLog",
            value: function sendLog(e) {
                !this.log && this.props.actions && (this.log = !0, this.props.actions.$log.pushPageModule({
                    modelCode: "10010",
                    modelName: "问候语-" + e
                }));
            }
        }, {
            key: "_createGreetingsData",
            value: function _createGreetingsData() {
                var r = this;
                return function() {
                    var e = r.state, t = e.shelfAddressName, n = e.styleTemplateId, a = e.greeting;
                    return t && r.sendLog(t || ""), 2 == n && r.sendLog("生日问候"), {
                        shelfAddressName: t,
                        styleTemplateId: n,
                        GIF_MEMBER_BIRTHDAY: "https://qn-cdn-pic.feng1.com/theme_pic-20200813-cb68455e6ad76911d3d1c3113f58e7d1?imageslim",
                        greeting: a
                    };
                };
            }
        }, {
            key: "_createAdvContentData",
            value: function _createAdvContentData() {
                var t = this;
                return function() {
                    var e = t.state.adv1_2;
                    return null == e ? null : {
                        adv1_2: e
                    };
                };
            }
        }, {
            key: "clickStoreAddress",
            value: function clickStoreAddress() {}
        }, {
            key: "clickAdv",
            value: function clickAdv(e) {
                c.feNavigator.jumpUrl(e.advertionUrl);
            }
        }, {
            key: "clickHeadPersonal",
            value: function clickHeadPersonal() {
                var e = this.props.$shelf.shelfCode;
                c.feNavigator.navigateTo(l.default.personal, {
                    shelfCode: e
                });
            }
        }, {
            key: "clickHeadPLocation",
            value: function clickHeadPLocation() {
                var e = this.props.$user.city;
                c.feNavigator.navigateTo(l.default.location, e || {});
            }
        }, {
            key: "clickHeadContact",
            value: function clickHeadContact() {
                var e = this.props.$shelf.shelfRandomCode;
                c.feNavigator.jumpUrlByProject("/shelfInformation/shelfInformation.html?shelfCode=" + e);
            }
        }, {
            key: "scanBarCode",
            value: (f = _asyncToGenerator(a.default.mark(function _callee() {
                var t;
                return a.default.wrap(function _callee$(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.prev = 0, e.next = 3, (0, s.default)();

                      case 3:
                        t = e.sent, console.log(t), e.next = 10;
                        break;

                      case 7:
                        e.prev = 7, e.t0 = e.catch(0), e.t0.msg && (0, c.Tips)(e.t0.msg);

                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, _callee, this, [ [ 0, 7 ] ]);
            })), function scanBarCode() {
                return f.apply(this, arguments);
            })
        }, {
            key: "_createHeaderEntryData",
            value: function _createHeaderEntryData() {
                var e = this;
                return function() {
                    return {
                        IS_SCHOOL_SHELF: !1,
                        showUnreadPoint: e.props.showUnreadPoint
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var a = this.$prefix, r = this._createLeftContentData(a + "bbizzzzzzz")(), o = this._createHeaderEntryData(a + "bbjzzzzzzz")(), i = this._createAdvContentData(a + "bcazzzzzzz")(), s = "top_wrap_container " + ((0, 
                u.default)() ? "header-taro--theme" : "");
                return Object.assign(this.__state, {
                    anonymousState__temp5: s,
                    anonymousState__temp2: r,
                    anonymousState__temp3: o,
                    anonymousState__temp4: i
                }), this.__state;
            }
        } ]), Header);
        function Header() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Header);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp5", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "shelfAddressName", "styleTemplateId", "greeting", "adv1_2", "$shelf", "advList", "homeConfig", "actions", "$user", "showUnreadPoint" ], 
            e.customComponents = [], e;
        }
        d.$$events = [ "clickHeadPLocation", "clickStoreAddress", "clickStoreAddress", "clickAdv", "clickHeadPersonal", "clickHeadContact" ], 
        d.$$componentPath = "packages/racoonjs/components/customer/components/Header/index", 
        d.options = {
            addGlobalClass: !0
        }, t.default = d, Component(n(0).default.createComponent(d));
    },
    579: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = (0, o.default)(new Date()).format("YYYY-MM-DD"), t = {
                qixi: {
                    beginDate: "2020-08-20",
                    endDate: "2020-08-26"
                }
            };
            if (t.qixi) {
                var n = t.qixi, a = n.beginDate, r = n.endDate;
                return a <= e && e <= r;
            }
            return !1;
        };
        var o = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n(11));
    },
    580: function(e, t, n) {}
}, [ [ 578, 0, 1, 2, 3 ] ] ]);