(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 65 ], {
    646: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var v = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(o = (i = c.next()).done) && (r.push(i.value), 
                    !t || r.length !== t); o = !0) ;
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !o && c.return && c.return();
                    } finally {
                        if (n) throw a;
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
        var n, a = r(5), P = r(0), i = _interopRequireDefault(P), c = _interopRequireDefault(r(12)), p = r(1), l = r(23), d = r(10);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
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
        }(ProductItemMoreStyle, P.Component), o(ProductItemMoreStyle, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(ProductItemMoreStyle.prototype.__proto__ || Object.getPrototypeOf(ProductItemMoreStyle.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "onAddProduct",
            value: function onAddProduct() {
                var e = this.props, t = e.actions, r = e.product, o = e.$shelf, n = e.$cart, a = e.isShowPriceLabel, i = n.cartProductMap[r.productId], c = i ? i.quantity : 0;
                if ((0, l.isExceededMachineShelfNumber)(o, n.simpleCartItemList, r, 1)) (0, p.Tips)(d.MACHINE_SHELF_MAX_CART_ITEM_COUNT_TIPS); else if (c < r.stockQuantity) {
                    (0, p.Tips)("加入购物车成功~");
                    var u = a ? "20051" : "20041", s = a ? "凑单添加商品" : "美食添加商品";
                    t.$cart.addProductToCart(r), t.$log.pushEvent({
                        eventCode: u,
                        eventName: s,
                        relateFromId: r.productId,
                        relateFromType: 2
                    });
                } else (0, p.Tips)("库存不足");
            }
        }, {
            key: "_createLabelData",
            value: function _createLabelData(s) {
                var p = this;
                return function() {
                    var e = (0, P.genCompid)(s + "$compid__202"), t = v(e, 2), r = t[0], o = t[1], n = p.props, a = n.product, i = n.isShowPriceLabel;
                    if (!a) return null;
                    var c = a.salePrice, u = "";
                    return i && (1 <= c && c < 2 && (u = "1元凑单"), 2 <= c && c < 3 && (u = "2元凑单"), 3 <= c && c < 4 && (u = "3元凑单")), 
                    P.propsManager.set({
                        isShow: !!u && i
                    }, o, r), {
                        $compid__202: o,
                        product: a,
                        label: u
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, r) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var o = this.$prefix, n = (0, P.genCompid)(o + "$compid__203"), a = v(n, 2), i = a[0], c = a[1], u = (0, 
                P.genCompid)(o + "$compid__204"), s = v(u, 2), p = s[0], l = s[1], d = (0, P.genCompid)(o + "$compid__205"), _ = v(d, 2), f = _[0], m = _[1], y = this.__props.product;
                if (!y) return null;
                var h = this._createLabelData(o + "bfjzzzzzzz")(), b = !!y.isNewProduct;
                return P.propsManager.set({
                    isShow: b
                }, c, i), P.propsManager.set({
                    price: y.salePrice
                }, l, p), P.propsManager.set({
                    isDisplayOnlyAdd: !0
                }, m, f), Object.assign(this.__state, {
                    anonymousState__temp2: b,
                    $compid__203: c,
                    $compid__204: l,
                    $compid__205: m,
                    product: y,
                    anonymousState__temp: h
                }), this.__state;
            }
        } ]), (n = ProductItemMoreStyle).$$events = [ "onAddProduct" ], n.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/ProductItemMoreStyle", 
        n);
        function ProductItemMoreStyle() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductItemMoreStyle);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (ProductItemMoreStyle.__proto__ || Object.getPrototypeOf(ProductItemMoreStyle)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp2", "$compid__203", "$compid__204", "$compid__205", "product", "anonymousState__temp", "actions", "$shelf", "$cart", "isShowPriceLabel" ], 
            e.customComponents = [ "Toggle", "Price", "Stepper" ], e;
        }
        u.options = {
            addGlobalClass: !0
        }, u = (0, a.__decorate)([ (0, c.default)() ], u), t.default = u, Component(r(0).default.createComponent(u));
    }
}, [ [ 646, 0, 1, 2, 3 ] ] ]);