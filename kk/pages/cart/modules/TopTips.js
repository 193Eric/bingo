(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 95 ], {
    650: function(e, t, o) {
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
        var s = o(0), r = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(s), l = o(91);
        var p = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(TopTips, s.Component), n(TopTips, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === n) {
                        var s = Object.getPrototypeOf(e);
                        return null === s ? void 0 : get(s, t, o);
                    }
                    if ("value" in n) return n.value;
                    var r = n.get;
                    return void 0 !== r ? r.call(o) : void 0;
                })(TopTips.prototype.__proto__ || Object.getPrototypeOf(TopTips.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    message: ""
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                this.props.message !== e.message && this.setState({
                    message: e.message
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.setState({
                    message: this.props.message
                });
            }
        }, {
            key: "onClickClose",
            value: function onClickClose() {
                this.setState({
                    message: ""
                });
            }
        }, {
            key: "_createExchangeTipsData",
            value: function _createExchangeTipsData() {
                var n = this;
                return function() {
                    var e = n.props, t = e.tips, o = (e.onExchangePopupChange, t.text);
                    return n.anonymousFunc0 = function() {
                        return n.props.onExchangePopupChange(!0);
                    }, {
                        text: o
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var n, s = this.$prefix, r = this.__props, p = r.goToSelectCoupon, i = r.tips || {}, a = i.text, u = i.type;
                if (!a) return null;
                u == l.TipsType.Exchange && (n = void 0, n = this._createExchangeTipsData(s + "bgdzzzzzzz")());
                var c = u == l.TipsType.CouponExpiredToday;
                return this.anonymousFunc1 = function() {
                    p();
                }, Object.assign(this.__state, {
                    text: a,
                    type: u,
                    TipsType: l.TipsType,
                    _$_$anonymousState__temp: n,
                    isShowCouponBtn: c
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        }, {
            key: "anonymousFunc1",
            value: function anonymousFunc1() {}
        } ]), TopTips);
        function TopTips() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, TopTips);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (TopTips.__proto__ || Object.getPrototypeOf(TopTips)).apply(this, arguments));
            return e.$usedState = [ "text", "type", "TipsType", "_$_$anonymousState__temp", "isShowCouponBtn", "message", "tips", "goToSelectCoupon" ], 
            e.customComponents = [], e;
        }
        p.$$events = [ "anonymousFunc0", "anonymousFunc1", "onClickClose" ], p.$$componentPath = "pages/cart/modules/TopTips", 
        p.options = {
            addGlobalClass: !0
        }, t.default = p, Component(o(0).default.createComponent(p));
    }
}, [ [ 650, 0, 1, 2, 3 ] ] ]);