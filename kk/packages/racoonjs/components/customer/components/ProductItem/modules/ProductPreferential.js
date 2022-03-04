(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 69 ], {
    564: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t, e, r) {
            return e && defineProperties(t.prototype, e), r && defineProperties(t, r), t;
        };
        function defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var n = r(0), a = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n), f = r(4);
        r(565);
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
        }(ProductPreferential, n.Component), o(ProductPreferential, [ {
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
                })(ProductPreferential.prototype.__proto__ || Object.getPrototypeOf(ProductPreferential.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {}
        }, {
            key: "_createContentData",
            value: function _createContentData() {
                var a = this;
                return function() {
                    var t = a.props, e = t.product, r = t.onlyLowStockFlag;
                    if (!e || r) return null;
                    var o = e.activity;
                    if (o && !o.isInActivityPeriod) return null;
                    var n = null;
                    return o && o.markupPriceList && o.markupPriceList.length && (n = o.markupPriceList[0]) && n.fullPrice, 
                    o && o.fullPieceList && o.skuType, o && 1 == o.discountType && 1 == o.skuType && o.activityType, 
                    {
                        activity: o,
                        product: e,
                        onlyLowStockFlag: r,
                        exchangeData: n
                    };
                };
            }
        }, {
            key: "_createLowStockFlagData",
            value: function _createLowStockFlagData() {
                var o = this;
                return function() {
                    var t = o.props.product;
                    if (!t || !t.isLowStock) return null;
                    var e = t.activity, r = "full_piece_w";
                    return e && e.markupPriceList && e.markupPriceList.length && (r = "exchange_w"), 
                    e && e.fullPieceList && 1 == e.skuType && (r = "full_piece_w"), e && 1 == e.discountType && 1 == e.skuType && (r = "full_piece_w"), 
                    {
                        product: t,
                        classname: r
                    };
                };
            }
        }, {
            key: "_createProductCateActivityFlagData",
            value: function _createProductCateActivityFlagData() {
                var p = this;
                return function() {
                    var t = p.props, e = t.product, r = t.onlyLowStockFlag;
                    if (!e || r) return null;
                    var o = e.activity;
                    if (!o) return null;
                    if (o && !o.isInActivityPeriod) return null;
                    var n = o.activityType, a = o.fullPieceList, i = "";
                    if (10 == n) {
                        var u = o.discountValue;
                        i = 5 == u ? "第2件半价" : "第2件" + u + "折";
                    }
                    if (3 == n && a) {
                        var c = a[0];
                        i = c ? c.activityItemName : "";
                    }
                    if (1 == n) {
                        var l = o.discountType, s = o.discountValue;
                        1 == l && (i = s + "折"), 2 == l && (i = "降价" + s + "元"), 3 == l && (i = "降价" + (0, 
                        f.sub)(e.salePrice, s) + "元");
                    }
                    return {
                        product: e,
                        onlyLowStockFlag: r,
                        activity: o,
                        content: i
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, n = this.__props.isInProductCate, a = n ? this._createProductCateActivityFlagData(o + "babzzzzzzz")() : null, i = this._createContentData(o + "baczzzzzzz")(), u = this._createLowStockFlagData(o + "badzzzzzzz")();
                return Object.assign(this.__state, {
                    isInProductCate: n,
                    anonymousState__temp: a,
                    anonymousState__temp2: i,
                    anonymousState__temp3: u
                }), this.__state;
            }
        } ]), ProductPreferential);
        function ProductPreferential() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductPreferential);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductPreferential.__proto__ || Object.getPrototypeOf(ProductPreferential)).apply(this, arguments));
            return t.$usedState = [ "isInProductCate", "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "product", "onlyLowStockFlag" ], 
            t.customComponents = [], t;
        }
        i.$$events = [], i.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/modules/ProductPreferential", 
        i.defaultProps = {}, e.default = i, Component(r(0).default.createComponent(i));
    },
    565: function(t, e, r) {}
}, [ [ 564, 0, 1, 2, 3 ] ] ]);