(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 112 ], {
    619: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var T = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], n = !0, r = !1, i = void 0;
                try {
                    for (var c, a = e[Symbol.iterator](); !(n = (c = a.next()).done) && (o.push(c.value), 
                    !t || o.length !== t); n = !0) ;
                } catch (e) {
                    r = !0, i = e;
                } finally {
                    try {
                        !n && a.return && a.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var N = _interopRequireDefault(o(7)), q = o(0), r = _interopRequireDefault(q), i = o(1), A = o(4);
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(620);
        var c = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(RecommendProductModal, q.Component), n(RecommendProductModal, [ {
            key: "_constructor",
            value: function _constructor(e) {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === n) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, o);
                    }
                    if ("value" in n) return n.value;
                    var i = n.get;
                    return void 0 !== i ? i.call(o) : void 0;
                })(RecommendProductModal.prototype.__proto__ || Object.getPrototypeOf(RecommendProductModal.prototype), "_constructor", this).call(this, e), 
                this.state = {
                    isShow: !0,
                    product: null
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this.props.$store;
                if (!e) return null;
                var t = e.recommendProductData, o = e.productList, n = t.productIds.slice().filter(function(t) {
                    return !!o.find(function(e) {
                        return e.productId == t;
                    });
                }), r = n.length, i = n[parseInt(String(r * Math.random()))], c = o.find(function(e) {
                    return e.productId == i;
                });
                this.setState({
                    product: c
                });
            }
        }, {
            key: "closeProductRecommend",
            value: function closeProductRecommend() {
                this.props.actions.$log.pushEvent({
                    eventCode: "10152",
                    eventName: "不再推荐"
                }), i.Storage.setLocal("recommendNoRem", "true"), this.closeModal();
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
                var n = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, i = (0, q.genCompid)(r + "$compid__154"), c = T(i, 2), a = c[0], s = c[1], u = (0, 
                q.genCompid)(r + "$compid__155"), d = T(u, 2), p = d[0], l = d[1], m = (0, q.genCompid)(r + "$compid__156"), _ = T(m, 2), f = _[0], h = _[1], y = (0, 
                q.genCompid)(r + "$compid__157"), v = T(y, 2), P = v[0], g = v[1], $ = (0, q.genCompid)(r + "$compid__158"), b = T($, 2), w = b[0], M = b[1], C = this.__state, O = C.isShow, R = C.product, S = this.__props, k = S.$store, j = S.$shelf;
                if (!k) return null;
                var I = j.isCounter, D = {
                    backgroundImage: "url(" + (k.recommendProductData.imgUrl || "https://qn-cdn-pic.feng1.com/recommed_bg3.png") + ")"
                };
                if (!R) return null;
                var F = 0 !== (0, A.sub)(R.salePrice, R.discountPrice || 0) && 0 < (R.discountPrice || 0), x = (0, 
                N.default)("sy-recommend", {
                    "no-button": I
                });
                this.anonymousFunc0 = function() {
                    n.__props.actions.$log.pushEvent({
                        eventCode: "10153",
                        eventName: "关闭",
                        relateFromType: 2,
                        relateFromId: R.productId
                    }), n.setState({
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
                }, g, P), q.propsManager.set({
                    price: R.salePrice,
                    showUnitName: !0
                }, M, w), Object.assign(this.__state, {
                    anonymousState__temp: E,
                    $compid__154: s,
                    $compid__155: l,
                    $compid__156: h,
                    $compid__157: g,
                    $compid__158: M,
                    $store: k,
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
            return e.$usedState = [ "anonymousState__temp", "$compid__154", "$compid__155", "$compid__156", "$compid__157", "$compid__158", "$store", "product", "contentClassname", "isCounter", "isShow", "actions", "$shelf" ], 
            e.customComponents = [ "Modal", "Toggle", "Price" ], e;
        }
        c.$$events = [ "addProduct", "closeProductRecommend" ], c.$$componentPath = "pages/index/modal/RecommendProductModal/index", 
        t.default = c, Component(o(0).default.createComponent(c));
    },
    620: function(e, t, o) {}
}, [ [ 619, 0, 1, 2, 3 ] ] ]);