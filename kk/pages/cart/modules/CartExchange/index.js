(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 88 ], {
    651: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var y = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], n = !0, o = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), 
                    !e || r.length !== e); n = !0) ;
                } catch (t) {
                    o = !0, a = t;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return r;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(t, e, r) {
            return e && defineProperties(t.prototype, e), r && defineProperties(t, r), t;
        };
        function defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var g = r(0), o = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(g);
        r(652);
        var a = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(CartExchange, g.Component), n(CartExchange, [ {
            key: "_constructor",
            value: function _constructor(t) {
                (function get(t, e, r) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === n) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : get(o, e, r);
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(CartExchange.prototype.__proto__ || Object.getPrototypeOf(CartExchange.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new o.default.RefsArray();
            }
        }, {
            key: "_createProductItemData",
            value: function _createProductItemData(h) {
                var d = this;
                return function(t) {
                    var e = (0, g.genCompid)(h + "$compid__211"), r = y(e, 2), n = r[0], o = r[1], a = (0, 
                    g.genCompid)(h + "$compid__212"), i = y(a, 2), c = i[0], u = i[1], p = (d.props.onAddProduct, 
                    t.imagePath), s = t.shortName, l = t.salePrice, f = t.activity, _ = f.markupPriceList && f.markupPriceList[0] && f.markupPriceList[0].discountValue;
                    return g.propsManager.set({
                        price: _
                    }, o, n), g.propsManager.set({
                        price: l
                    }, u, c), {
                        $compid__211: o,
                        $compid__212: u,
                        product: t,
                        imagePath: p,
                        shortName: s
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                var n = this;
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, a = void 0, i = this.__props.productList, c = (void 0 === i ? [] : i).filter(function(t) {
                    return t.activity && 2 == t.activity.activityType;
                });
                return 0 < c.length && (a = c.map(function(t, e) {
                    return t = {
                        $original: (0, g.internal_get_original)(t)
                    }, {
                        $loopState__temp2: n._createProductItemData(o + "bgfzzzzzzz" + e)(t.$original),
                        $original: t.$original
                    };
                })), Object.assign(this.__state, {
                    loopArray46: a,
                    exchangeProductList: c
                }), this.__state;
            }
        }, {
            key: "funPrivatebgezz",
            value: function funPrivatebgezz() {
                return this.props.onAddProduct.apply(this, Array.prototype.slice.call(arguments, 1));
            }
        } ]), CartExchange);
        function CartExchange() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CartExchange);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CartExchange.__proto__ || Object.getPrototypeOf(CartExchange)).apply(this, arguments));
            return t.$usedState = [ "loopArray46", "exchangeProductList", "__fn_onClick", "productList" ], 
            t.customComponents = [ "Price" ], t;
        }
        a.$$events = [ "funPrivatebgezz" ], a.$$componentPath = "pages/cart/modules/CartExchange/index", 
        e.default = a, Component(r(0).default.createComponent(a));
    },
    652: function(t, e, r) {}
}, [ [ 651, 0, 1, 2 ] ] ]);