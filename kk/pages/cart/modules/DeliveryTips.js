(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 93 ], {
    649: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                Object.defineProperty(e, i.key, i);
            }
        }
        var o = r(0), n = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(o), l = r(4), s = r(1);
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
        }(DeliveryTips, o.Component), i(DeliveryTips, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : get(o, t, r);
                    }
                    if ("value" in i) return i.value;
                    var n = i.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(DeliveryTips.prototype.__proto__ || Object.getPrototypeOf(DeliveryTips.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "back",
            value: function back() {
                (0, s.navigateBack)();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var i = this.__props, o = i.shelf, n = i.totalPrice;
                if (!o) return null;
                var s = o.startDeliveryPrice, a = o.deliveryPrice, c = 0;
                return s && (c = (0, l.sub)(s, n)), Object.assign(this.__state, {
                    shelf: o,
                    startDeliveryPrice: s,
                    diffPrice: c,
                    deliveryPrice: a
                }), this.__state;
            }
        } ]), DeliveryTips);
        function DeliveryTips() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, DeliveryTips);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (DeliveryTips.__proto__ || Object.getPrototypeOf(DeliveryTips)).apply(this, arguments));
            return e.$usedState = [ "shelf", "startDeliveryPrice", "diffPrice", "deliveryPrice", "totalPrice" ], 
            e.customComponents = [], e;
        }
        a.$$events = [ "back" ], a.$$componentPath = "pages/cart/modules/DeliveryTips", 
        a.options = {
            addGlobalClass: !0
        }, t.default = a, Component(r(0).default.createComponent(a));
    }
}, [ [ 649, 0, 1, 2, 3 ] ] ]);