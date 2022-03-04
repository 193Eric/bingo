(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 127 ], {
    680: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var r = o(0), i = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r), a = o(1), c = o(23);
        o(681);
        var u = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Activity2, r.Component), n(Activity2, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === n) {
                        var r = Object.getPrototypeOf(t);
                        return null === r ? void 0 : get(r, e, o);
                    }
                    if ("value" in n) return n.value;
                    var i = n.get;
                    return void 0 !== i ? i.call(o) : void 0;
                })(Activity2.prototype.__proto__ || Object.getPrototypeOf(Activity2.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShowModal: !1,
                    imgHeight: 0
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "useAction",
            value: function useAction() {
                (0, a.navigateBack)();
            }
        }, {
            key: "sendLog",
            value: function sendLog() {
                this.log || (this.log = !0, this.props.actions.$log.pushPageModule({
                    modelName: "活动奖品展示",
                    modelCode: "40010"
                }));
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var n = this.__props.data;
                if (!n || 0 == n.length) return null;
                this.sendLog();
                var r = n.filter(function(t) {
                    return 3 == t.prizeType && !!t.couponVO;
                }).map(function(t) {
                    return t.couponVO;
                }), i = n.filter(function(t) {
                    return 2 == t.prizeType;
                }), a = (0, c.getCouponTotalPrice)(r), u = 0;
                return i.forEach(function(t) {
                    u += Number(t.prizeAmount);
                }), Object.assign(this.__state, {
                    data: n,
                    totalPrice: a,
                    interPrice: u
                }), this.__state;
            }
        } ]), Activity2);
        function Activity2() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Activity2);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Activity2.__proto__ || Object.getPrototypeOf(Activity2)).apply(this, arguments));
            return t.$usedState = [ "data", "totalPrice", "interPrice", "isShowModal", "imgHeight", "actions" ], 
            t.openCouponPage = function() {
                a.feNavigator.navigateTo("/pages/couponChoose/index");
            }, t.customComponents = [], t;
        }
        u.$$events = [ "openCouponPage" ], u.$$componentPath = "pages/paySuccess/modules/CouponList/index", 
        e.default = u, Component(o(0).default.createComponent(u));
    },
    681: function(t, e, o) {}
}, [ [ 680, 0, 1, 2, 3 ] ] ]);