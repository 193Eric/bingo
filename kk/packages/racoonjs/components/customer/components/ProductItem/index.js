(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 67 ], {
    558: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var O = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var n = [], o = !0, r = !1, a = void 0;
                try {
                    for (var u, i = e[Symbol.iterator](); !(o = (u = i.next()).done) && (n.push(u.value), 
                    !t || n.length !== t); o = !0) ;
                } catch (e) {
                    r = !0, a = e;
                } finally {
                    try {
                        !o && i.return && i.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var r, a = n(5), M = n(0), u = _interopRequireDefault(M), c = n(23), i = _interopRequireDefault(n(144));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        n(559);
        var s = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(ProductItem, M.Component), o(ProductItem, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, n);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(ProductItem.prototype.__proto__ || Object.getPrototypeOf(ProductItem.prototype), "_constructor", this).apply(this, arguments), 
                this.hasCartAnimate = !1, this.lastNumber = 0, this.$$refs = new u.default.RefsArray();
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(e) {
                var t = e.product, n = e.$cart, o = e.businessTypeStyleMap, r = n.simpleCartProductMap[t.productId], a = r ? r.quantity : 0;
                return a !== this.lastNumber ? (this.lastNumber = a, !0) : t !== this.props.product || o !== this.props.businessTypeStyleMap;
            }
        }, {
            key: "innerOnAddCallback",
            value: function innerOnAddCallback(e, t) {
                var n = this, o = this.props, r = o.onProductAddCallback, a = o.$shelf, u = o.$cart, i = o.product;
                !(0, c.isExceededMachineShelfNumber)(a, u.simpleCartItemList, i, 1) && r ? this.props.onProductAddCallback(t, e).then(function() {
                    n.onAddCallback(e, t);
                }) : this.onAddCallback(e, t);
            }
        }, {
            key: "onDOMQueryCallback",
            value: function onDOMQueryCallback(e, t) {
                var onDOMQueryCallback = this.props.onDOMQueryCallback;
                onDOMQueryCallback && this.props.onDOMQueryCallback(e, t);
            }
        }, {
            key: "_createLeftContentData",
            value: function _createLeftContentData(n) {
                var o = this;
                return function() {
                    var e, t = o.props.product;
                    return t && (e = void 0, e = o._createProductActLabelData(n + "jdzzzzzzzz")()), 
                    {
                        _$_$anonymousState__temp: e,
                        product: t
                    };
                };
            }
        }, {
            key: "isDisabledStepper",
            value: function isDisabledStepper() {
                var e = this.props, t = e.product, n = e.$shelf;
                return !!t && 3 == n.operatingStatus;
            }
        }, {
            key: "_createRightContentData",
            value: function _createRightContentData(k) {
                var g = this;
                return function() {
                    var e, t, n, o, r, a = (0, M.genCompid)(k + "$compid__106"), u = O(a, 2), i = u[0], c = u[1], s = (0, 
                    M.genCompid)(k + "$compid__107"), p = O(s, 2), d = p[0], l = p[1], m = (0, M.genCompid)(k + "$compid__108"), _ = O(m, 2), y = _[0], f = _[1], b = g.props, h = b.product, v = b.stepperTheme, C = b.$cart, z = b.isInProductCate, P = b.isCheckExpirationTime, $ = void 0 === P || P;
                    return h && (r = void 0, t = (e = C.simpleCartProductMap[h.productId]) ? e.quantity : 0, 
                    n = g.isDisabledStepper(), o = g._createRestrictionsNumData(k + "jezzzzzzzz")(), 
                    r = g._createPriceData(k + "jfzzzzzzzz")(h), g.anonymousFunc0 = function(e) {
                        return g.onStepperBefore(h, e, !0, $);
                    }, g.anonymousFunc1 = function(e, t) {
                        return g.innerOnAddCallback(e, t);
                    }, M.propsManager.set({
                        product: h,
                        isInProductCate: z
                    }, c, i), M.propsManager.set({
                        product: h,
                        isInProductCate: z
                    }, l, d), M.propsManager.set({
                        isQueryDOM: !0,
                        isShowInput: !1,
                        theme: v,
                        min: 0,
                        max: h.stockQuantity,
                        number: t,
                        onBefore: g.anonymousFunc0,
                        onAddCallback: g.anonymousFunc1,
                        onReduceCallback: g.onReduceCallback.bind(g),
                        disabled: n
                    }, f, y)), {
                        $compid__106: c,
                        $compid__107: l,
                        $compid__108: f,
                        _$_$anonymousState__temp2: o,
                        product: h,
                        _$_$anonymousState__temp3: r
                    };
                };
            }
        }, {
            key: "_createLayout25Data",
            value: function _createLayout25Data($) {
                var k = this;
                return function() {
                    var e = (0, M.genCompid)($ + "$compid__109"), t = O(e, 2), n = t[0], o = t[1], r = (0, 
                    M.genCompid)($ + "$compid__110"), a = O(r, 2), u = a[0], i = a[1], c = (0, M.genCompid)($ + "$compid__111"), s = O(c, 2), p = s[0], d = s[1], l = k.props, m = l.product, _ = l.stepperTheme, y = l.$cart, f = l.isCheckExpirationTime, b = y.simpleCartProductMap[m.productId], h = b ? b.quantity : 0, v = m.discountPrice || m.salePrice, C = k.isDisabledStepper(), z = k._createPriceData($ + "jgzzzzzzzz")(m), P = v === m.salePrice;
                    return k.anonymousFunc2 = function(e) {
                        return k.onStepperBefore(m, e, !0, f);
                    }, k.anonymousFunc3 = function(e, t) {
                        return k.innerOnAddCallback(e, t);
                    }, M.propsManager.set({
                        isShow: P
                    }, o, n), M.propsManager.set({
                        product: m,
                        onlyLowStockFlag: !0
                    }, i, u), M.propsManager.set({
                        isShowInput: !1,
                        isDisplayOnlyAdd: !0,
                        isQueryDOM: !0,
                        theme: _,
                        min: 0,
                        max: m.stockQuantity,
                        number: h,
                        onBefore: k.anonymousFunc2,
                        onAddCallback: k.anonymousFunc3,
                        onReduceCallback: k.onReduceCallback.bind(k),
                        disabled: C
                    }, d, p), {
                        anonymousState__temp5: P,
                        $compid__109: o,
                        $compid__110: i,
                        $compid__111: d,
                        product: m,
                        anonymousState__temp4: z
                    };
                };
            }
        }, {
            key: "_createCombinationProductItemData",
            value: function _createCombinationProductItemData(D) {
                var S = this;
                return function() {
                    var e = (0, M.genCompid)(D + "$compid__112"), t = O(e, 2), n = t[0], o = t[1], r = (0, 
                    M.genCompid)(D + "$compid__113"), a = O(r, 2), u = a[0], i = a[1], c = (0, M.genCompid)(D + "$compid__114"), s = O(c, 2), p = s[0], d = s[1], l = S.props, m = l.product, _ = l.stepperTheme, y = l.$cart, f = l.isCheckExpirationTime;
                    if (!y) return null;
                    var b = y.simpleCartProductMap[m.productId], h = b ? b.quantity : 0, v = m.salePrice, C = m.reducePrice, z = m.discountPrice || m.salePrice, P = null, $ = null;
                    if (Array.isArray(m.groupList)) {
                        var k = O(m.groupList, 2);
                        P = k[0], $ = k[1];
                    }
                    var g = S.isDisabledStepper();
                    return S.anonymousFunc4 = function(e) {
                        return S.onStepperBefore(m, e, !0, f);
                    }, S.anonymousFunc5 = function(e, t) {
                        return S.innerOnAddCallback(e, t);
                    }, M.propsManager.set({
                        price: z
                    }, o, n), M.propsManager.set({
                        price: v
                    }, i, u), M.propsManager.set({
                        isQueryDOM: !0,
                        isShowInput: !1,
                        theme: _,
                        min: 0,
                        max: m.stockQuantity,
                        number: h,
                        onBefore: S.anonymousFunc4,
                        onAddCallback: S.anonymousFunc5,
                        onReduceCallback: S.onReduceCallback.bind(S),
                        disabled: g
                    }, d, p), {
                        $compid__112: o,
                        $compid__113: i,
                        $compid__114: d,
                        $cart: y,
                        reducePrice: C,
                        product2: $,
                        product1: P,
                        product: m
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var o, r, a = this.$prefix, u = this.__props, i = u.layout, c = u.typeKey;
                i && "2.5" === i && (o = void 0, o = this._createLayout25Data(a + "jhzzzzzzzz")()), 
                "combination" == c && (r = void 0, r = this._createCombinationProductItemData(a + "jizzzzzzzz")());
                var s = this._createLeftContentData(a + "jjzzzzzzzz")(), p = this._createRightContentData(a + "baazzzzzzz")();
                return Object.assign(this.__state, {
                    layout: i,
                    _$_$anonymousState__temp4: o,
                    _$_$anonymousState__temp5: r,
                    typeKey: c,
                    anonymousState__temp8: s,
                    anonymousState__temp9: p
                }), this.__state;
            }
        }, {
            key: "_createPriceData",
            value: function _createPriceData(l) {
                return function(e) {
                    var t = (0, M.genCompid)(l + "$compid__115"), n = O(t, 2), o = n[0], r = n[1], a = (0, 
                    M.genCompid)(l + "$compid__116"), u = O(a, 2), i = u[0], c = u[1];
                    if (!e) return null;
                    var s = e.salePrice, p = void 0 === s ? 0 : s, d = e.discountPrice || e.salePrice;
                    return M.propsManager.set({
                        price: d,
                        isRound: !1
                    }, r, o), d !== p && M.propsManager.set({
                        price: p
                    }, c, i), {
                        $compid__115: r,
                        $compid__116: c,
                        product: e,
                        discountPrice: d,
                        salePrice: p
                    };
                };
            }
        }, {
            key: "_createRestrictionsNumData",
            value: function _createRestrictionsNumData() {
                var t = this;
                return function() {
                    var e = t.props.product;
                    return e && e.homeRestrictionsNumber && e.homeRestrictionsNumber, {
                        product: e
                    };
                };
            }
        }, {
            key: "_createProductActLabelData",
            value: function _createProductActLabelData() {
                var l = this;
                return function() {
                    var e, t, n, o, r = l.props, a = r.product, u = r.businessTypeStyleMap, i = r.$store;
                    if (!a) return null;
                    var c = a.activity, s = a.productId, p = i.storeConfig, d = ((void 0 === p ? {} : p).collectCardConfig || []).find(function(e) {
                        return e.productIds.some(function(e) {
                            return e == s;
                        });
                    });
                    return d && a && (e = {
                        background: "url('" + d.image + "') no-repeat",
                        backgroundSize: "contain"
                    }, t = (0, M.internal_inline_style)(e)), a && c && c.businessType && 7 != c.businessType && (n = u && u[c.businessType], 
                    o = (0, M.internal_inline_style)(n)), a && a.isNewProduct, {
                        _$style: e,
                        _$anonymousState__temp6: t,
                        _$customStyle: n,
                        _$anonymousState__temp7: o,
                        product: a,
                        findConfig: d,
                        activity: c
                    };
                };
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
        } ]), (r = ProductItem).$$events = [], r.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/index", 
        r);
        function ProductItem() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductItem);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).apply(this, arguments));
            return e.$usedState = [ "layout", "_$_$anonymousState__temp4", "_$_$anonymousState__temp5", "typeKey", "anonymousState__temp8", "anonymousState__temp9", "product", "businessTypeStyleMap", "$shelf", "$cart", "stepperTheme", "isInProductCate", "isCheckExpirationTime", "$store" ], 
            e.customComponents = [ "ProductDescribe", "ProductPreferential", "Stepper", "Toggle", "Price" ], 
            e;
        }
        s.options = {
            addGlobalClass: !0
        }, s = (0, a.__decorate)([ i.default ], s), t.default = s, Component(n(0).default.createComponent(s));
    },
    559: function(e, t, n) {}
}, [ [ 558, 0, 1, 2, 3 ] ] ]);