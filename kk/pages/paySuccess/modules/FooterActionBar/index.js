(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 128 ], {
    702: function(e, t, o) {
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
        var r = _interopRequireDefault(o(0)), s = _interopRequireDefault(o(7)), p = o(8), f = o(1), l = _interopRequireDefault(o(13));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(703);
        var a = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(FooterActionBar, r.default.Component), n(FooterActionBar, [ {
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
                })(FooterActionBar.prototype.__proto__ || Object.getPrototypeOf(FooterActionBar.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var n = this.__props, r = n.$app.isIphoneX, a = n.shelfType || Number(f.Storage.get("shelfType")), u = a === p.ShelfType.COUNTER, i = a === p.ShelfType.AUTO_SALE_MACHINET, c = (0, 
                s.default)("footer-action-bar", {
                    iphonex: r
                });
                return this.anonymousFunc0 = function contactCustomerService() {
                    n.actions.$log.pushEvent({
                        eventCode: "40022",
                        eventName: "在线客服"
                    }), f.feNavigator.jumpUrl("https://ocs2odp.sf-express.com/app/init?orgName=zh&channelId=116&clientType=2&accountId=");
                }, this.anonymousFunc1 = function applyAfterSales() {
                    f.feNavigator.jumpUrlByProject("/refund/index.html");
                }, this.anonymousFunc2 = function goHome() {
                    if (u) f.feNavigator.reLaunch("/pages/entrance/index"); else {
                        var e = f.Storage.get("shelfCode");
                        f.feNavigator.reLaunch(l.default.home, {
                            shelfCode: e
                        });
                    }
                }, Object.assign(this.__state, {
                    anonymousState__temp: c,
                    isMachineShelf: i,
                    isCounter: u
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
        } ]), FooterActionBar);
        function FooterActionBar() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, FooterActionBar);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (FooterActionBar.__proto__ || Object.getPrototypeOf(FooterActionBar)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp", "isMachineShelf", "isCounter" ], 
            e.customComponents = [], e;
        }
        a.$$events = [ "anonymousFunc0", "anonymousFunc1", "anonymousFunc2" ], a.$$componentPath = "pages/paySuccess/modules/FooterActionBar/index", 
        t.default = a, Component(o(0).default.createComponent(a));
    },
    703: function(e, t, o) {}
}, [ [ 702, 0, 1, 2, 3 ] ] ]);