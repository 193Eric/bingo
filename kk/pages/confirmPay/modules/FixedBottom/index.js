(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 99 ], {
    668: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var b = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var r = [], o = !0, i = !1, n = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (r.push(a.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    i = !0, n = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (i) throw n;
                    }
                }
                return r;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, t, r) {
            return t && defineProperties(e.prototype, t), r && defineProperties(e, r), e;
        };
        function defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var h = r(0), i = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(h), v = r(4);
        r(669);
        var n = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(FixedPay, h.Component), o(FixedPay, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var i = Object.getPrototypeOf(e);
                        return null === i ? void 0 : get(i, t, r);
                    }
                    if ("value" in o) return o.value;
                    var n = o.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(FixedPay.prototype.__proto__ || Object.getPrototypeOf(FixedPay.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var o = this.$prefix, i = (0, h.genCompid)(o + "$compid__258"), n = b(i, 2), a = n[0], s = n[1], c = (0, 
                h.genCompid)(o + "$compid__259"), p = b(c, 2), u = p[0], l = p[1], f = this.__props, y = f.totalPrice, _ = f.originTotalPrice, d = f.isDisabledPay, P = (f.goPay, 
                (0, v.sub)(_, y));
                return h.propsManager.set({
                    price: y
                }, s, a), y < _ && h.propsManager.set({
                    price: P
                }, l, u), Object.assign(this.__state, {
                    $compid__258: s,
                    $compid__259: l,
                    totalPrice: y,
                    originTotalPrice: _,
                    isDisabledPay: d
                }), this.__state;
            }
        }, {
            key: "funPrivatebjgzz",
            value: function funPrivatebjgzz() {
                return this.props.goPay.apply(void 0, Array.prototype.slice.call(arguments, 1));
            }
        } ]), FixedPay);
        function FixedPay() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, FixedPay);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (FixedPay.__proto__ || Object.getPrototypeOf(FixedPay)).apply(this, arguments));
            return e.$usedState = [ "$compid__258", "$compid__259", "totalPrice", "originTotalPrice", "isDisabledPay", "goPay", "__fn_onClick" ], 
            e.customComponents = [ "Price" ], e;
        }
        n.$$events = [ "funPrivatebjgzz" ], n.$$componentPath = "pages/confirmPay/modules/FixedBottom/index", 
        n.options = {
            addGlobalClass: !0
        }, t.default = n, Component(r(0).default.createComponent(n));
    },
    669: function(e, t, r) {}
}, [ [ 668, 0, 1, 2, 3 ] ] ]);