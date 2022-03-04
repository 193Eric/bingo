(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 100 ], {
    664: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var p = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var o = [], r = !0, n = !1, a = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(r = (u = i.next()).done) && (o.push(u.value), 
                    !e || o.length !== e); r = !0) ;
                } catch (t) {
                    n = !0, a = t;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, r = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var d = o(0), n = _interopRequireDefault(d), a = o(1), u = _interopRequireDefault(o(7));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        o(665);
        var i = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(ProductList, d.Component), r(ProductList, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(t);
                        return null === n ? void 0 : get(n, e, o);
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(ProductList.prototype.__proto__ || Object.getPrototypeOf(ProductList.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShowAllProduct: !1
                }, this.data = {
                    actualCount: 0
                }, this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var r = this.$prefix, n = this.data.actualCount, a = this.__props, u = a.data, i = a.totalCount, c = this._createProductListData(r + "bijzzzzzzz")(), s = u && 3 < n ? this._createToggleShowAllProductButtonData(r + "bjazzzzzzz")() : null;
                return Object.assign(this.__state, {
                    anonymousState__temp: c,
                    data: u,
                    actualCount: n,
                    DEFAULT_MAX_SHOW_PRODUCT_COUNT: 3,
                    anonymousState__temp2: s,
                    totalCount: i
                }), this.__state;
            }
        }, {
            key: "_createProductListData",
            value: function _createProductListData(a) {
                var u = this;
                return function() {
                    var t = u.state.isShowAllProduct, e = u.props.data, n = [], o = [];
                    e.forEach(function(t) {
                        var e = Object.assign({}, t);
                        o.push(e);
                    }), o.forEach(function(r) {
                        if (r.product.isCombinationProduct && r.product.groupList) for (var t = function _loop(t) {
                            var e = r.product.groupList[t], o = n.find(function(t) {
                                return t.productId == e.productId;
                            });
                            o ? o.quantity += r.quantity : n.push({
                                productId: e.productId,
                                quantity: r.quantity,
                                product: e
                            });
                        }, e = 0; e < r.product.groupList.length; e++) t(e); else {
                            var o = n.find(function(t) {
                                return t.productId == r.productId;
                            });
                            o ? o.quantity += r.quantity : n.push(r);
                        }
                    }), u.data.actualCount = n.length;
                    var r = t ? n : n.slice(0, 3);
                    return {
                        loopArray51: r.map(function(t, e) {
                            return t = {
                                $original: (0, d.internal_get_original)(t)
                            }, {
                                $loopState__temp4: u._createProductData(a + "bjbzzzzzzz" + e)(t.$original),
                                $original: t.$original
                            };
                        }),
                        list: r
                    };
                };
            }
        }, {
            key: "_createToggleShowAllProductButtonData",
            value: function _createToggleShowAllProductButtonData() {
                var a = this;
                return function() {
                    var t = a.state.isShowAllProduct, e = a.props.data, o = a.data.actualCount, r = (0, 
                    u.default)("show-hide-product", {
                        active: t
                    }), n = e ? o - 3 : 0;
                    return a.anonymousFunc0 = function toggleIsShowAll() {
                        return a.setState({
                            isShowAllProduct: !t
                        });
                    }, {
                        buttonClass: r,
                        isShowAllProduct: t,
                        hideProductNumber: n
                    };
                };
            }
        }, {
            key: "_createProductData",
            value: function _createProductData(s) {
                var l = this;
                return function(t) {
                    var e = (0, d.genCompid)(s + "$compid__255"), o = p(e, 2), r = o[0], n = o[1], a = t.product, u = t.quantity, i = a.salePrice, c = l._createProductActLabelData(s + "bjczzzzzzz")(t);
                    return d.propsManager.set({
                        price: i
                    }, n, r), {
                        $compid__255: n,
                        product: a,
                        anonymousState__temp5: c,
                        quantity: u
                    };
                };
            }
        }, {
            key: "_createProductActLabelData",
            value: function _createProductActLabelData() {
                var u = this;
                return function(t) {
                    var e, o, r = t.product.productId, n = u.props.storeConfig, a = ((void 0 === n ? {} : n).collectCardConfig || []).find(function(t) {
                        return t.productIds.some(function(t) {
                            return t == r;
                        });
                    });
                    return a && (e = {
                        background: "url('" + a.image + "') no-repeat",
                        backgroundSize: "contain"
                    }, o = (0, d.internal_inline_style)(e)), {
                        _$style: e,
                        _$anonymousState__temp: o,
                        findConfig: a
                    };
                };
            }
        }, {
            key: "showCouponTips",
            value: function showCouponTips() {
                (0, a.Tips)("优惠券超出支付金额部分将失效，不设找零");
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), ProductList);
        function ProductList() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductList);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "data", "actualCount", "DEFAULT_MAX_SHOW_PRODUCT_COUNT", "anonymousState__temp2", "totalCount", "isShowAllProduct", "storeConfig" ], 
            t.customComponents = [ "Price" ], t;
        }
        i.$$events = [ "anonymousFunc0" ], i.$$componentPath = "pages/confirmPay/modules/ProductList/index", 
        i.defaultProps = {
            data: []
        }, e.default = i, Component(o(0).default.createComponent(i));
    },
    665: function(t, e, o) {}
}, [ [ 664, 0, 1, 2, 3 ] ] ]);