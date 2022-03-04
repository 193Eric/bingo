(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 78 ], {
    513: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var T = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], r = !0, n = !1, c = void 0;
                try {
                    for (var i, a = e[Symbol.iterator](); !(r = (i = a.next()).done) && (o.push(i.value), 
                    !t || o.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, c = e;
                } finally {
                    try {
                        !r && a.return && a.return();
                    } finally {
                        if (n) throw c;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, r = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var N = _interopRequireDefault(o(7)), q = o(0), n = _interopRequireDefault(q), c = o(1), A = o(4);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(514);
        var i = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(RecommendProductModal, q.Component), r(RecommendProductModal, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, o);
                    }
                    if ("value" in r) return r.value;
                    var c = r.get;
                    return void 0 !== c ? c.call(o) : void 0;
                })(RecommendProductModal.prototype.__proto__ || Object.getPrototypeOf(RecommendProductModal.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    isShow: !0,
                    product: null
                }, this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this.props.$store;
                if (!e) return null;
                var t = e.recommendProductData, o = e.productList, r = t.productIds.slice().filter(function(t) {
                    return !!o.find(function(e) {
                        return e.productId == t;
                    });
                }), n = r.length, c = r[parseInt(String(n * Math.random()))], i = o.find(function(e) {
                    return e.productId == c;
                });
                this.setState({
                    product: i
                });
            }
        }, {
            key: "closeProductRecommend",
            value: function closeProductRecommend() {
                this.props.actions.$log.pushEvent({
                    eventCode: "10152",
                    eventName: "不再推荐"
                }), c.Storage.setLocal("recommendNoRem", "true"), this.closeModal();
            }
        }, {
            key: "addProduct",
            value: function addProduct(e) {
                var t = this.props.actions;
                t.$log.pushEvent({
                    eventCode: "10151",
                    eventName: "添加商品",
                    relateFromType: 2,
                    relateFromId: e.productId
                }), t.$cart.addProductToCart(e), this.closeModal();
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                this.setState({
                    isShow: !1
                });
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                var r = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var n = this.$prefix, c = (0, q.genCompid)(n + "$compid__38"), i = T(c, 2), a = i[0], s = i[1], u = (0, 
                q.genCompid)(n + "$compid__39"), d = T(u, 2), p = d[0], l = d[1], m = (0, q.genCompid)(n + "$compid__40"), _ = T(m, 2), f = _[0], h = _[1], y = (0, 
                q.genCompid)(n + "$compid__41"), v = T(y, 2), g = v[0], P = v[1], $ = (0, q.genCompid)(n + "$compid__42"), b = T($, 2), w = b[0], M = b[1], C = this.__state, O = C.isShow, R = C.product, S = this.__props, j = S.$store, k = S.$shelf;
                if (!j) return null;
                var I = k.isCounter, D = {
                    backgroundImage: "url(" + (j.recommendProductData.imgUrl || "https://qn-cdn-pic.feng1.com/recommed_bg3.png") + ")"
                };
                if (!R) return null;
                var F = 0 !== (0, A.sub)(R.salePrice, R.discountPrice || 0) && 0 < (R.discountPrice || 0), x = (0, 
                N.default)("sy-recommend", {
                    "no-button": I
                });
                this.anonymousFunc0 = function() {
                    r.__props.actions.$log.pushEvent({
                        eventCode: "10153",
                        eventName: "关闭",
                        relateFromType: 2,
                        relateFromId: R.productId
                    }), r.setState({
                        isShow: !1
                    });
                };
                var E = (0, q.internal_inline_style)(D);
                return q.propsManager.set({
                    isOpen: O,
                    closeOnClickOverlay: !1,
                    onClose: this.anonymousFunc0
                }, s, a), q.propsManager.set({
                    isShow: F
                }, l, p), q.propsManager.set({
                    price: R.discountPrice || R.salePrice,
                    showUnitName: !0
                }, h, f), q.propsManager.set({
                    isShow: F
                }, P, g), q.propsManager.set({
                    price: R.salePrice,
                    showUnitName: !0
                }, M, w), Object.assign(this.__state, {
                    anonymousState__temp: E,
                    $compid__38: s,
                    $compid__39: l,
                    $compid__40: h,
                    $compid__41: P,
                    $compid__42: M,
                    $store: j,
                    contentClassname: x,
                    isCounter: I
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), RecommendProductModal);
        function RecommendProductModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, RecommendProductModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (RecommendProductModal.__proto__ || Object.getPrototypeOf(RecommendProductModal)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp", "$compid__38", "$compid__39", "$compid__40", "$compid__41", "$compid__42", "$store", "product", "contentClassname", "isCounter", "isShow", "actions", "$shelf" ], 
            e.customComponents = [ "Modal", "Toggle", "Price" ], e;
        }
        i.$$events = [ "addProduct", "closeProductRecommend" ], i.$$componentPath = "packages/racoonjs/project/customer/pages/index/modal/RecommendProductModal/index", 
        t.default = i, Component(o(0).default.createComponent(i));
    },
    514: function(e, t, o) {}
}, [ [ 513, 0, 1, 2, 3 ] ] ]);