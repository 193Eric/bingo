(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 101 ], {
    670: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var p = _interopRequireDefault(o(3)), w = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var o = [], r = !0, n = !1, i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (o.push(a.value), 
                    !e || o.length !== e); r = !0) ;
                } catch (t) {
                    n = !0, i = t;
                } finally {
                    try {
                        !r && s.return && s.return();
                    } finally {
                        if (n) throw i;
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
        var L = o(0), n = _interopRequireDefault(L), l = o(1), h = _interopRequireDefault(o(2)), i = o(4), f = o(95), y = _interopRequireDefault(o(94)), v = _interopRequireDefault(o(53));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _asyncToGenerator(t) {
            return function() {
                var a = t.apply(this, arguments);
                return new Promise(function(n, i) {
                    return function step(t, e) {
                        try {
                            var o = a[t](e), r = o.value;
                        } catch (t) {
                            return void i(t);
                        }
                        if (!o.done) return Promise.resolve(r).then(function(t) {
                            step("next", t);
                        }, function(t) {
                            step("throw", t);
                        });
                        n(r);
                    }("next");
                });
            };
        }
        o(671);
        var a, s = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(ProductList, L.Component), r(ProductList, [ {
            key: "_constructor",
            value: function _constructor(t) {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(t);
                        return null === n ? void 0 : get(n, e, o);
                    }
                    if ("value" in r) return r.value;
                    var i = r.get;
                    return void 0 !== i ? i.call(o) : void 0;
                })(ProductList.prototype.__proto__ || Object.getPrototypeOf(ProductList.prototype), "_constructor", this).call(this, t), 
                this.storageKey = "customerConfirmPayREC", this.data = {
                    productList: []
                }, this.state = {
                    show: !1,
                    quantity: 1,
                    sellPoint: "",
                    product: void 0,
                    imgUrl: "",
                    isShowClose: !0
                }, this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.fetchProduct();
            }
        }, {
            key: "fetchProduct",
            value: (a = _asyncToGenerator(p.default.mark(function _callee() {
                var e, o, r, n, i, a, s, u, c, d, l;
                return p.default.wrap(function _callee$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return e = this.props, o = e.shelfId, r = e.cartItemList, n = e.shelf, i = (0, v.default)(r.map(function(t) {
                            return t.product.isCombinationProduct ? String(t.productId).split(",") : t.productId;
                        }).reduce(function(t, e) {
                            return t.concat(e);
                        }, [])), a = {
                            advertionPositionCode: "B-1",
                            shelfId: o,
                            productIdList: i,
                            shelfCode: n ? n.shelfRandomCode : ""
                        }, t.prev = 3, this.storageKey = this.storageKey + "_" + o, t.next = 7, h.default.post("getRecommendProductData", a);

                      case 7:
                        s = t.sent, u = s.productIds, c = s.productInterestCopyWriter, d = void 0 === c ? [] : c, 
                        l = [], u && 0 < u.length && u.forEach(function(e) {
                            var t = d.find(function(t) {
                                return t.productId == e;
                            }) || {}, o = t.productInterest, r = t.sellPoint;
                            l.push({
                                productId: e,
                                productInterest: o || "立即加购   抢“鲜”美味",
                                sellPoint: r || "立即加购   抢“鲜”美味"
                            });
                        }), 0 < l.length ? (this.data.productList = l, this.randomShowProduct()) : this.clearStorage(), 
                        s && s.imgUrl && this.setState({
                            imgUrl: s.imgUrl
                        }), t.next = 18;
                        break;

                      case 15:
                        t.prev = 15, t.t0 = t.catch(3), console.error(t.t0);

                      case 18:
                      case "end":
                        return t.stop();
                    }
                }, _callee, this, [ [ 3, 15 ] ]);
            })), function fetchProduct() {
                return a.apply(this, arguments);
            })
        }, {
            key: "randomShowProduct",
            value: function randomShowProduct() {
                var t = this, e = this.props.productList, o = this.getFilterProductList();
                if (0 != o.length) {
                    var r = o[this.getRandom(o.length)], n = e.find(function(t) {
                        return t.productId == r.productId;
                    });
                    console.log("REC product:", n), this.setState({
                        show: !0,
                        sellPoint: r.sellPoint,
                        product: n
                    }, function() {
                        n && t.setStorageProductId(Number(n.productId)), n && t.sendLog("商品推荐弹窗-展现次数", "30060", n.productId);
                    });
                }
            }
        }, {
            key: "getFilterProductList",
            value: function getFilterProductList() {
                var t = this.props, e = t.cartProductMap, o = void 0 === e ? {} : e, r = t.productList, n = l.Storage.get(this.storageKey) || [];
                return this.data.productList.filter(function(e) {
                    return !(o[e.productId] || -1 < n.indexOf(e.productId)) && r.some(function(t) {
                        return t.productId == e.productId && 0 < t.originStockQuantity;
                    });
                });
            }
        }, {
            key: "setStorageProductId",
            value: function setStorageProductId(t) {
                var e = l.Storage.get(this.storageKey) || [];
                e.push(t), l.Storage.setLocal(this.storageKey, e);
            }
        }, {
            key: "clearStorage",
            value: function clearStorage() {
                l.Storage.remove(this.storageKey);
            }
        }, {
            key: "getRandom",
            value: function getRandom(t) {
                var e = Math.floor(Math.random() * t);
                return e == t && (e = t - 1), e;
            }
        }, {
            key: "onStepperValue",
            value: function onStepperValue(t) {
                var e = this.state.product, o = this.props, r = o.shelf, n = void 0 === r ? {} : r, i = o.cartItemList, a = o.isReCalcProductQuantity;
                if (e) {
                    var s = a ? (0, f.getProductMaxStock)(e, (0, l.getServerTime)(), n) : e.stockQuantity, u = Math.min(s, t);
                    this.setState({
                        quantity: u
                    });
                    var c = {
                        product: e,
                        productId: e.productId,
                        quantity: u - 1,
                        selected: !0
                    }, d = (0, y.default)(e, i, c);
                    s <= t ? (0, l.Tips)("库存不足！") : d && (0, l.Tips)("已超过限购数量，超过部分将按原价结算哦~");
                }
            }
        }, {
            key: "onReduceCallback",
            value: function onReduceCallback(t) {
                var e = this.state.product, o = this.props, r = o.shelf, n = void 0 === r ? {} : r, i = o.isReCalcProductQuantity;
                if (e) {
                    var a = i ? (0, f.getProductMaxStock)(e, (0, l.getServerTime)(), n) : e.stockQuantity, s = Math.min(a, t);
                    this.setState({
                        quantity: s
                    }), e && this.sendLog("商品推荐弹窗-减少商品次数", "30062", e.productId);
                }
            }
        }, {
            key: "onAddCallback",
            value: function onAddCallback(t) {
                var e = this.state.product;
                this.onStepperValue(t), e && this.sendLog("商品推荐弹窗-添加商品次数", "30061", e.productId);
            }
        }, {
            key: "onHide",
            value: function onHide() {
                var t = this, e = this.state.product;
                this.setState({
                    show: "hiding"
                }), setTimeout(function() {
                    t.setState({
                        show: !1
                    });
                }, 400), e && this.sendLog("商品推荐弹窗-弹窗关闭次数", "30063", e.productId);
            }
        }, {
            key: "onAddCart",
            value: function onAddCart() {
                this.onHide();
                var t = this.props.onAddToCart, e = this.state, o = e.product, r = e.quantity;
                "function" == typeof t && o && this.props.onAddToCart({
                    productId: o.productId,
                    quantity: r
                });
            }
        }, {
            key: "getDiscountPrice",
            value: function getDiscountPrice(t) {
                var e = t.activity, o = t.salePrice, r = o;
                if (e && (1 === e.activityType || 7 === e.activityType) && e.isInActivityPeriod) {
                    var n = e.discountValue;
                    switch (e.discountType) {
                      case 1:
                        r = (0, i.round)((0, i.mul)(o, (0, i.div)(n, 10)));
                        break;

                      case 2:
                        r = (0, i.round)((0, i.sub)(o, n));
                        break;

                      case 3:
                        r = (0, i.round)(n);
                    }
                }
                return r;
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var r = this.$prefix, n = (0, L.genCompid)(r + "$compid__260"), i = w(n, 2), a = i[0], s = i[1], u = (0, 
                L.genCompid)(r + "$compid__261"), c = w(u, 2), d = c[0], l = c[1], p = (0, L.genCompid)(r + "$compid__262"), h = w(p, 2), f = h[0], y = h[1], v = this.__state, m = v.show, _ = (v.sellPoint, 
                v.product), g = v.quantity, P = v.imgUrl;
                if (v.isShowClose, !m || !_) return null;
                var b = _.salePrice, S = this.getDiscountPrice(_), k = P ? {
                    background: "url(" + P + ") no-repeat",
                    backgroundSize: "contain"
                } : void 0, C = this._createProductActLabelData(r + "bjhzzzzzzz")(), I = (0, L.internal_inline_style)(k);
                return L.propsManager.set({
                    price: S
                }, s, a), b != S && L.propsManager.set({
                    price: b
                }, l, d), L.propsManager.set({
                    min: 1,
                    number: g,
                    theme: "white2",
                    className: "stepper-margin",
                    onInputCallback: this.onStepperValue.bind(this),
                    onAddCallback: this.onAddCallback.bind(this),
                    onReduceCallback: this.onReduceCallback.bind(this)
                }, y, f), Object.assign(this.__state, {
                    anonymousState__temp2: I,
                    $compid__260: s,
                    $compid__261: l,
                    $compid__262: y,
                    anonymousState__temp: C,
                    salePrice: b,
                    discountPrice: S
                }), this.__state;
            }
        }, {
            key: "sendLog",
            value: function sendLog(t, e, o) {
                var r = this.props.log;
                r && r.pushEvent && (o ? r.pushEvent({
                    eventName: t,
                    eventCode: e,
                    relateFromId: o,
                    relateFromType: 2
                }) : r.pushEvent({
                    eventName: t,
                    eventCode: e
                }));
            }
        }, {
            key: "_createProductActLabelData",
            value: function _createProductActLabelData() {
                var i = this;
                return function() {
                    var t, e, o = i.state.product, r = i.props.store;
                    if (!o) return null;
                    var n = o.activity;
                    return n && n.businessType && (t = {}, r && r.businessTypeStyleMap && (t = r.businessTypeStyleMap && r.businessTypeStyleMap[n.businessType] || {}), 
                    e = (0, L.internal_inline_style)(t)), o.labelList && 0 < o.labelList.length && o.labelList[0].labelType, 
                    {
                        _$customStyle: t,
                        _$anonymousState__temp: e,
                        product: o,
                        activity: n
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
            return t.$usedState = [ "anonymousState__temp2", "$compid__260", "$compid__261", "$compid__262", "show", "product", "isShowClose", "anonymousState__temp", "salePrice", "discountPrice", "sellPoint", "quantity", "imgUrl", "shelfId", "cartItemList", "shelf", "productList", "cartProductMap", "isReCalcProductQuantity", "log", "store" ], 
            t.customComponents = [ "Price", "Stepper" ], t;
        }
        s.$$events = [ "onHide", "onAddCart" ], s.$$componentPath = "pages/confirmPay/modules/RecommendProductPop/index", 
        e.default = s, Component(o(0).default.createComponent(s));
    },
    671: function(t, e, o) {}
}, [ [ 670, 0, 1, 2, 3 ] ] ]);