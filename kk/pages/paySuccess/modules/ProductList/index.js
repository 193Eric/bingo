(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 130 ], {
    682: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(o = (i = c.next()).done) && (r.push(i.value), 
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
        var f = r(0), n = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(f);
        r(683);
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
        }(ProductList, f.Component), o(ProductList, [ {
            key: "_constructor",
            value: function _constructor(t) {
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
                })(ProductList.prototype.__proto__ || Object.getPrototypeOf(ProductList.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, n = this.__props.className, a = this._createProductListData(o + "ccfzzzzzzz")();
                return Object.assign(this.__state, {
                    className: n,
                    anonymousState__temp: a
                }), this.__state;
            }
        }, {
            key: "_createProductListData",
            value: function _createProductListData(n) {
                var a = this;
                return function() {
                    var t = a.props, r = t.data, o = t.isMachineShelfType;
                    return {
                        loopArray55: r ? r.map(function(t, e) {
                            return t = {
                                $original: (0, f.internal_get_original)(t)
                            }, {
                                $loopState__temp3: r && o ? a._createProductInMachineShelfData(n + "ccgzzzzzzz" + e)(t.$original) : null,
                                $loopState__temp5: r ? a._createProductLeftData(n + "cchzzzzzzz" + e)(t.$original) : null,
                                $loopState__temp7: r ? a._createProductRightData(n + "ccizzzzzzz" + e)(t.$original) : null,
                                $loopState__temp9: r ? t.$original.typeId || e : null,
                                $original: t.$original
                            };
                        }) : [],
                        isMachineShelfType: o,
                        data: r
                    };
                };
            }
        }, {
            key: "_createProductInMachineShelfData",
            value: function _createProductInMachineShelfData(p) {
                return function(t) {
                    var e = (0, f.genCompid)(p + "$compid__299"), r = l(e, 2), o = r[0], n = r[1], a = (0, 
                    f.genCompid)(p + "$compid__300"), i = l(a, 2), c = i[0], u = i[1], s = t.realTotalPrice / t.originQuantity;
                    return f.propsManager.set({
                        price: s
                    }, n, o), 0 < t.discountAmount && f.propsManager.set({
                        price: t.salePrice
                    }, u, c), {
                        anonymousState__temp10: s,
                        $compid__299: n,
                        $compid__300: u,
                        productItem: t
                    };
                };
            }
        }, {
            key: "_createProductLeftData",
            value: function _createProductLeftData(e) {
                var r = this;
                return function(t) {
                    return {
                        productItem: t,
                        anonymousState__temp11: r._createProductActLabelData(e + "ccjzzzzzzz")(t)
                    };
                };
            }
        }, {
            key: "_createProductRightData",
            value: function _createProductRightData(a) {
                return function(t) {
                    var e = (0, f.genCompid)(a + "$compid__301"), r = l(e, 2), o = r[0], n = r[1];
                    return f.propsManager.set({
                        price: t.realTotalPrice
                    }, n, o), {
                        $compid__301: n
                    };
                };
            }
        }, {
            key: "_createCouponData",
            value: function _createCouponData() {
                return function() {
                    return {};
                };
            }
        }, {
            key: "_createProductActLabelData",
            value: function _createProductActLabelData() {
                var i = this;
                return function(t) {
                    var e, r, o = t.productId, n = i.props.storeConfig, a = ((void 0 === n ? {} : n).collectCardConfig || []).find(function(t) {
                        return t.productIds.some(function(t) {
                            return t == o;
                        });
                    });
                    return a && (e = {
                        background: "url('" + a.image + "') no-repeat",
                        backgroundSize: "contain"
                    }, r = (0, f.internal_inline_style)(e)), {
                        _$style: e,
                        _$anonymousState__temp: r,
                        findConfig: a
                    };
                };
            }
        } ]), ProductList);
        function ProductList() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductList);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).apply(this, arguments));
            return t.$usedState = [ "className", "anonymousState__temp", "data", "isMachineShelfType", "storeConfig" ], 
            t.customComponents = [ "Price" ], t;
        }
        a.$$events = [], a.$$componentPath = "pages/paySuccess/modules/ProductList/index", 
        a.defaultProps = {
            data: []
        }, e.default = a, Component(r(0).default.createComponent(a));
    },
    683: function(t, e, r) {}
}, [ [ 682, 0, 1, 2 ] ] ]);