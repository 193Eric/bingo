(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 64 ], {
    643: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var M = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var u, c = t[Symbol.iterator](); !(o = (u = c.next()).done) && (n.push(u.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, r = t;
                } finally {
                    try {
                        !o && c.return && c.return();
                    } finally {
                        if (a) throw r;
                    }
                }
                return n;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var a, r = n(5), R = n(0), u = _interopRequireDefault(R), c = _interopRequireDefault(n(12)), i = n(1);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        n(644);
        var s = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(CartProductItem, R.Component), o(CartProductItem, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : get(a, e, n);
                    }
                    if ("value" in o) return o.value;
                    var r = o.get;
                    return void 0 !== r ? r.call(n) : void 0;
                })(CartProductItem.prototype.__proto__ || Object.getPrototypeOf(CartProductItem.prototype), "_constructor", this).apply(this, arguments), 
                this.hasCartAnimate = !1, this.lastNumber = -1, this.lastSelect = null, this.$$refs = new u.default.RefsArray();
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(t) {
                var e = t.cartItem, n = t.$cart.cartProductMap, o = this.getProduct(), a = e ? e.quantity : o && n[o.productId] ? n[o.productId].quantity : 0;
                return (t.selected !== this.props.selected || a !== this.lastNumber) && (this.lastNumber = a, 
                console.log("update", a), !0);
            }
        }, {
            key: "getProduct",
            value: function getProduct() {
                var t = this.props, e = t.cartItem, n = t.product;
                return e ? e.product : n;
            }
        }, {
            key: "_createLeftContentData",
            value: function _createLeftContentData(_) {
                var y = this;
                return function() {
                    var t = (0, R.genCompid)(_ + "$compid__190"), e = M(t, 2), n = e[0], o = e[1], a = (0, 
                    R.genCompid)(_ + "$compid__191"), r = M(a, 2), u = r[0], c = r[1], i = y.props, s = i.cartItem, p = i.actions, l = i.selected, m = i.theme, d = "exchange" !== m;
                    return y.anonymousFunc0 = function() {
                        return function toggleSelect() {
                            p.$cart.toggleSelectCartItem(s);
                        }();
                    }, R.propsManager.set({
                        isShow: d
                    }, o, n), R.propsManager.set({
                        checked: l,
                        onChange: y.anonymousFunc0
                    }, c, u), {
                        anonymousState__temp: d,
                        $compid__190: o,
                        $compid__191: c
                    };
                };
            }
        }, {
            key: "onInputCallback",
            value: function onInputCallback(t, e, n) {
                var o = t.product;
                n && (0, i.Tips)("库存不足，最多只能购买" + e + "件~"), this.props.actions.$cart.changeCartProductNumber(o, e);
            }
        }, {
            key: "_createRightContentData",
            value: function _createRightContentData(y) {
                var f = this;
                return function() {
                    var t = (0, R.genCompid)(y + "$compid__192"), e = M(t, 2), n = e[0], o = e[1], a = f.props, r = a.stepperTheme, u = a.cartItem, c = a.$cart, i = a.isShowLabel, s = c.cartProductMap, p = f.getProduct(), l = u ? u.quantity : p && s[p.productId] ? s[p.productId].quantity : 0, m = p ? f._createProductActLabelData(y + "bfbzzzzzzz")(i) : null, d = p ? f._createPromotionInfoData(y + "bfczzzzzzz")(p, u) : null, _ = p ? f._createPriceData(y + "bfdzzzzzzz")(p) : null;
                    return f.anonymousFunc1 = function(t) {
                        return f.onStepperBefore(p, t);
                    }, f.anonymousFunc2 = function(t, e) {
                        return f.onAddCallback(t, e);
                    }, f.anonymousFunc3 = function(t, e) {
                        return f.onInputCallback(u, t, e);
                    }, p && R.propsManager.set({
                        isShowInput: !0,
                        theme: r,
                        min: 0,
                        max: p.stockQuantity,
                        number: l,
                        onBefore: f.anonymousFunc1,
                        onAddCallback: f.anonymousFunc2,
                        onReduceCallback: f.onReduceCallback.bind(f),
                        onInputCallback: f.anonymousFunc3
                    }, o, n), {
                        $compid__192: o,
                        product: p,
                        anonymousState__temp2: m,
                        anonymousState__temp3: d,
                        anonymousState__temp4: _
                    };
                };
            }
        }, {
            key: "_createPromotionInfoData",
            value: function _createPromotionInfoData() {
                return function(t, e) {
                    if (!e) return null;
                    var n = t.activity;
                    return n && 2 != n.skuType ? (e.activityItem && e.activityItem.activityItemName, 
                    {
                        cartItem: e,
                        activity: n
                    }) : null;
                };
            }
        }, {
            key: "onStepperBefore",
            value: function onStepperBefore(t, e) {
                e();
            }
        }, {
            key: "onAddCallback",
            value: function onAddCallback() {
                var t = this.props.onQuantityChange, e = this.getProduct();
                this.props.actions.$cart.addProductToCart(e, !0), t && this.props.onQuantityChange();
            }
        }, {
            key: "onReduceCallback",
            value: function onReduceCallback() {
                var t = this.props.onQuantityChange, e = this.getProduct();
                this.props.actions.$cart.reduceCartProduct(e), t && this.props.onQuantityChange();
            }
        }, {
            key: "_createPriceData",
            value: function _createPriceData(g) {
                var P = this;
                return function(t) {
                    var e = (0, R.genCompid)(g + "$compid__193"), n = M(e, 2), o = n[0], a = n[1], r = (0, 
                    R.genCompid)(g + "$compid__194"), u = M(r, 2), c = u[0], i = u[1], s = (0, R.genCompid)(g + "$compid__195"), p = M(s, 2), l = p[0], m = p[1], d = P.props, _ = d.theme, y = d.isNormal, f = t.salePrice, h = t.activity, b = !y && t.discountPrice || t.salePrice, v = h && 2 === h.activityType;
                    ("exchange" === _ || v && !y) && t.activity && t.activity.markupPriceList[0] && (b = t.activity.markupPriceList[0].discountValue);
                    var C = b !== f;
                    return R.propsManager.set({
                        price: b
                    }, a, o), R.propsManager.set({
                        isShow: C
                    }, i, c), R.propsManager.set({
                        price: f
                    }, m, l), {
                        anonymousState__temp5: C,
                        $compid__193: a,
                        $compid__194: i,
                        $compid__195: m
                    };
                };
            }
        }, {
            key: "_createProductActLabelData",
            value: function _createProductActLabelData() {
                var m = this;
                return function(t) {
                    var e, n, o, a, r = m.getProduct(), u = r.activity, c = r.productId, i = m.props, s = i.businessTypeStyleMap, p = i.storeConfig, l = ((void 0 === p ? {} : p).collectCardConfig || []).find(function(t) {
                        return t.productIds.some(function(t) {
                            return t == c;
                        });
                    });
                    return l && (e = {
                        background: "url('" + l.image + "') no-repeat",
                        backgroundSize: "contain"
                    }, n = (0, R.internal_inline_style)(e)), u && u.businessType && t && (o = s && s[u.businessType], 
                    a = (0, R.internal_inline_style)(o)), r.isNewProduct, {
                        _$style: e,
                        _$anonymousState__temp: n,
                        _$customStyle: o,
                        _$anonymousState__temp2: a,
                        findConfig: l,
                        activity: u,
                        isShowLabel: t,
                        product: r
                    };
                };
            }
        }, {
            key: "_createCombinationProdcutData",
            value: function _createCombinationProdcutData(D) {
                var O = this;
                return function(e) {
                    var t = (0, R.genCompid)(D + "$compid__196"), n = M(t, 2), o = n[0], a = n[1], r = (0, 
                    R.genCompid)(D + "$compid__197"), u = M(r, 2), c = u[0], i = u[1], s = (0, R.genCompid)(D + "$compid__198"), p = M(s, 2), l = p[0], m = p[1], d = (0, 
                    R.genCompid)(D + "$compid__199"), _ = M(d, 2), y = _[0], f = _[1], h = O.props, b = h.stepperTheme, v = h.cartItem, C = h.$cart, g = h.isNormal, P = C.cartProductMap, k = v ? v.quantity : e && P[e.productId] ? P[e.productId].quantity : 0, z = e.groupList[0], $ = e.groupList[1], I = !C.isUsedFullOrderCut && !g, S = I ? e.discountPrice : e.salePrice, F = e.reducePrice, w = O._createLeftContentData(D + "bfezzzzzzz")();
                    return O.anonymousFunc4 = function(t) {
                        return O.onStepperBefore(e, t);
                    }, O.anonymousFunc5 = function(t, e) {
                        return O.onAddCallback(t, e);
                    }, O.anonymousFunc6 = function(t, e) {
                        return O.onInputCallback(v, t, e);
                    }, I && R.propsManager.set({
                        price: F,
                        showUnitName: !0
                    }, a, o), R.propsManager.set({
                        price: S
                    }, i, c), I && R.propsManager.set({
                        price: e.salePrice
                    }, m, l), R.propsManager.set({
                        isShowInput: !0,
                        theme: b,
                        min: 0,
                        max: e.stockQuantity,
                        number: k,
                        onBefore: O.anonymousFunc4,
                        onAddCallback: O.anonymousFunc5,
                        onReduceCallback: O.onReduceCallback.bind(O),
                        onInputCallback: O.anonymousFunc6
                    }, f, y), {
                        $compid__196: a,
                        $compid__197: i,
                        $compid__198: m,
                        $compid__199: f,
                        anonymousState__temp8: w,
                        product1: z,
                        isShowDicountPirce: I,
                        product2: $
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o, a = this.$prefix, r = "exchange" === this.__props.theme ? "c-product--simple" : "c-product--default", u = this.getProduct();
                if (!u) return null;
                var c = u.isCombinationProduct;
                c && (o = void 0, o = this._createCombinationProdcutData(a + "bffzzzzzzz")(u));
                var i = this._createLeftContentData(a + "bfgzzzzzzz")(), s = this._createRightContentData(a + "bfhzzzzzzz")();
                return Object.assign(this.__state, {
                    product: u,
                    isCombinationProduct: c,
                    _$_$anonymousState__temp: o,
                    className: r,
                    anonymousState__temp10: i,
                    anonymousState__temp11: s
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
        }, {
            key: "anonymousFunc3",
            value: function anonymousFunc3() {}
        }, {
            key: "anonymousFunc4",
            value: function anonymousFunc4() {}
        }, {
            key: "anonymousFunc5",
            value: function anonymousFunc5() {}
        }, {
            key: "anonymousFunc6",
            value: function anonymousFunc6() {}
        } ]), (a = CartProductItem).$$events = [], a.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/CartProductItem", 
        a);
        function CartProductItem() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CartProductItem);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CartProductItem.__proto__ || Object.getPrototypeOf(CartProductItem)).apply(this, arguments));
            return t.$usedState = [ "product", "isCombinationProduct", "_$_$anonymousState__temp", "className", "anonymousState__temp10", "anonymousState__temp11", "selected", "cartItem", "actions", "theme", "stepperTheme", "$cart", "isShowLabel", "isNormal", "businessTypeStyleMap", "storeConfig" ], 
            t.customComponents = [ "Toggle", "CheckBox", "Stepper", "Price" ], t;
        }
        s.options = {
            addGlobalClass: !0
        }, s = (0, r.__decorate)([ (0, c.default)() ], s), e.default = s, Component(n(0).default.createComponent(s));
    },
    644: function(t, e, n) {}
}, [ [ 643, 0, 1, 2, 3 ] ] ]);