(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 66 ], {
    672: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var _ = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var u, c = t[Symbol.iterator](); !(o = (u = c.next()).done) && (r.push(u.value), 
                    !e || r.length !== e); o = !0) ;
                } catch (t) {
                    n = !0, a = t;
                } finally {
                    try {
                        !o && c.return && c.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return r;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(t, e, r) {
            return e && defineProperties(t.prototype, e), r && defineProperties(t, r), t;
        };
        function defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var h = r(0), a = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(h);
        r(673);
        var n = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(CouponProductItem, h.Component), o(CouponProductItem, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, r) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var n = Object.getPrototypeOf(t);
                        return null === n ? void 0 : get(n, e, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(CouponProductItem.prototype.__proto__ || Object.getPrototypeOf(CouponProductItem.prototype), "_constructor", this).apply(this, arguments), 
                this.hasCartAnimate = !1, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "addProduct",
            value: function addProduct() {
                var r = this;
                if (!this.hasCartAnimate) {
                    var t = this.props, o = t.product, n = t.onProductAddCallback;
                    if (n) {
                        var e = a.default.createSelectorQuery().in(this.$scope);
                        e.select(".add_btn").boundingClientRect(), e.exec(function(t) {
                            var e = _(t, 1)[0];
                            n && (r.hasCartAnimate = !0, r.props.onProductAddCallback(e, o).then(function() {
                                r.hasCartAnimate = !1;
                            }));
                        });
                    }
                }
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, n = (0, h.genCompid)(o + "$compid__271"), a = _(n, 2), u = a[0], c = a[1], i = this.__props, p = i.product, s = i.$cart;
                if (!s) return null;
                var l = s.cartProductMap, f = 0;
                if (p) {
                    var d = l[p.productId];
                    f = d ? d.quantity : 0;
                }
                return h.propsManager.set({
                    price: p ? p.salePrice : 0
                }, c, u), Object.assign(this.__state, {
                    $compid__271: c,
                    $cart: s,
                    product: p,
                    number: f
                }), this.__state;
            }
        } ]), CouponProductItem);
        function CouponProductItem() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CouponProductItem);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CouponProductItem.__proto__ || Object.getPrototypeOf(CouponProductItem)).apply(this, arguments));
            return t.$usedState = [ "$compid__271", "$cart", "product", "number" ], t.customComponents = [ "Price" ], 
            t;
        }
        n.$$events = [ "addProduct" ], n.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/couponProductItem", 
        e.default = n, Component(r(0).default.createComponent(n));
    },
    673: function(t, e, r) {}
}, [ [ 672, 0, 1, 2 ] ] ]);