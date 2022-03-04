(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 54 ], {
    602: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var n = [], r = !0, o = !1, a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, a = e;
                } finally {
                    try {
                        !r && u.return && u.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, r = function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var y = n(0), o = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(y), a = n(1);
        n(603);
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
        }(CartOpen, y.Component), r(CartOpen, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : get(o, t, n);
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(CartOpen.prototype.__proto__ || Object.getPrototypeOf(CartOpen.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isClearCartDialogOpen: !1
                }, this.$$refs = new o.default.RefsArray();
            }
        }, {
            key: "onAddCallback",
            value: function onAddCallback(e) {
                var t = e.product, n = this.props.actions;
                n.$cart.addProductToCart(t), n.$log.pushEvent({
                    eventCode: "10111",
                    eventName: "首页购物车-添加商品",
                    relateFromType: 2,
                    relateFromId: t.productId
                });
            }
        }, {
            key: "onReduceCallback",
            value: function onReduceCallback(e) {
                var t = e.product, n = this.props.actions;
                n.$cart.reduceCartProduct(t), n.$log.pushEvent({
                    eventCode: "10112",
                    eventName: "首页购物车-减少商品",
                    relateFromType: 2,
                    relateFromId: t.productId
                });
            }
        }, {
            key: "onInputCallback",
            value: function onInputCallback(e, t, n) {
                var r = e.product, o = this.props.actions;
                n && (0, a.Tips)("库存不足，最多只能购买" + t + "件~"), o.$cart.changeCartProductNumber(r, t), 
                o.$log.pushEvent({
                    eventCode: "10113",
                    eventName: "首页购物车-修改商品",
                    relateFromType: 2,
                    relateFromId: r.productId
                });
            }
        }, {
            key: "clearCart",
            value: function clearCart() {
                this.props.onOpenClearCartDialog && this.props.onOpenClearCartDialog();
            }
        }, {
            key: "closeCart",
            value: function closeCart() {}
        }, {
            key: "preventEvent",
            value: function preventEvent() {}
        }, {
            key: "openExpiredModal",
            value: function openExpiredModal() {
                this.props.onOpenExpriedModal && this.props.onOpenExpriedModal();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                var s = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var d = this.$prefix, r = this.__props.$cart;
                if (!r) return null;
                var o = r.cartProductList;
                this.anonymousFunc0 = function() {
                    return s.preventEvent();
                };
                var a = o.map(function(n, e) {
                    n = {
                        $original: (0, y.internal_get_original)(n)
                    };
                    var t = "bchzz" + e;
                    s.anonymousFunc1Map[t] = function(e, t) {
                        return s.onInputCallback(n.$original, e, t);
                    };
                    var r = (0, y.genCompid)(d + "bcizzzzzzz" + e, !0), o = f(r, 2), a = o[0], i = o[1];
                    y.propsManager.set({
                        price: n.$original.product.discountPrice || n.$original.product.salePrice
                    }, i, a);
                    var u = (0, y.genCompid)(d + "bcjzzzzzzz" + e, !0), c = f(u, 2), p = c[0], l = c[1];
                    return y.propsManager.set({
                        isShowInput: !0,
                        min: 0,
                        max: n.$original.product.stockQuantity,
                        number: n.$original.quantity,
                        onAddCallback: s.onAddCallback.bind(s, n.$original),
                        onReduceCallback: s.onReduceCallback.bind(s, n.$original),
                        onInputCallback: s.anonymousFunc1.bind(s, t)
                    }, l, p), {
                        _$indexKey: t,
                        $compid__140: i,
                        $compid__141: l,
                        $original: n.$original
                    };
                });
                return Object.assign(this.__state, {
                    loopArray35: a,
                    $cart: r,
                    cartProductList: o
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        }, {
            key: "anonymousFunc1",
            value: function anonymousFunc1(e) {
                for (var t, n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return this.anonymousFunc1Map[e] && (t = this.anonymousFunc1Map)[e].apply(t, r);
            }
        } ]), CartOpen);
        function CartOpen() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CartOpen);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CartOpen.__proto__ || Object.getPrototypeOf(CartOpen)).apply(this, arguments));
            return e.$usedState = [ "loopArray35", "$cart", "cartProductList", "isClearCartDialogOpen", "actions" ], 
            e.anonymousFunc1Map = {}, e.customComponents = [ "Price", "Stepper" ], e;
        }
        i.$$events = [ "closeCart", "anonymousFunc0", "clearCart" ], i.$$componentPath = "packages/racoonjs/components/customer/components/CartBox/modules/CartOpen", 
        i.options = {
            addGlobalClass: !0
        }, t.default = i, Component(n(0).default.createComponent(i));
    },
    603: function(e, t, n) {}
}, [ [ 602, 0, 1, 2, 3 ] ] ]);