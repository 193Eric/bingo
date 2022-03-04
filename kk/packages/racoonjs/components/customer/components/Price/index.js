(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 63 ], {
    515: function(e, t, o) {
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
        var r = o(0), a = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), i = o(1), h = o(516), d = o(4);
        o(517);
        var s = o(50);
        var u = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Price, r.Component), n(Price, [ {
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
                    var a = n.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(Price.prototype.__proto__ || Object.getPrototypeOf(Price.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    openType: i.Storage.get("openType") || "1",
                    thirdInfoData: {}
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var e = i.Storage.get("thirdInfoData") || {};
                this.setState({
                    thirdInfoData: e
                });
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(e, t) {
                return e.price != this.props.price || !(0, s.shallowEqual)(this.state, t);
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var n = this.__state, r = n.openType, a = n.thirdInfoData, i = this.__props, s = i.price, u = i.isRound, c = i.showUnitName, p = i.className, l = 1;
                if (a && a.exchangeRate && (l = a.exchangeRate), void 0 === s) return null;
                var f = "9" == r ? (0, d.mul)((0, h.money)(s), l) : null, _ = u ? (0, h.money)(s) : s;
                return Object.assign(this.__state, {
                    anonymousState__temp: f,
                    anonymousState__temp2: _,
                    price: s,
                    undefined: void 0,
                    className: p,
                    showUnitName: c
                }), this.__state;
            }
        } ]), Price);
        function Price() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Price);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (Price.__proto__ || Object.getPrototypeOf(Price)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "price", "undefined", "openType", "className", "showUnitName", "thirdInfoData", "isRound" ], 
            e.customComponents = [], e;
        }
        u.$$events = [], u.$$componentPath = "packages/racoonjs/components/customer/components/Price/index", 
        u.options = {
            addGlobalClass: !0
        }, u.defaultProps = {
            isRound: !0,
            showUnitName: !1
        }, t.default = u, Component(o(0).default.createComponent(u));
    },
    516: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.money = function money() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            return (0, n.round)(e || 0).toFixed(2);
        };
        var n = o(4);
    },
    517: function(e, t, o) {}
}, [ [ 515, 0, 1, 2, 3 ] ] ]);