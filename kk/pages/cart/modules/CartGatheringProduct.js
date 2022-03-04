(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 90 ], {
    645: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var l = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], o = !0, n = !1, a = void 0;
                try {
                    for (var i, u = t[Symbol.iterator](); !(o = (i = u.next()).done) && (r.push(i.value), 
                    !e || r.length !== e); o = !0) ;
                } catch (t) {
                    n = !0, a = t;
                } finally {
                    try {
                        !o && u.return && u.return();
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
        }(CartGatheringProduct, f.Component), o(CartGatheringProduct, [ {
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
                })(CartGatheringProduct.prototype.__proto__ || Object.getPrototypeOf(CartGatheringProduct.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var i = this.$prefix, o = (0, f.genCompid)(i + "$compid__201"), n = l(o, 2), a = n[0], u = n[1], c = this.__props.productList || [], s = 0 < c.length, p = c.map(function(t, e) {
                    t = {
                        $original: (0, f.internal_get_original)(t)
                    };
                    var r = (0, f.genCompid)(i + "bfizzzzzzz" + e, !0), o = l(r, 2), n = o[0], a = o[1];
                    return f.propsManager.set({
                        product: t.$original,
                        isShowPriceLabel: !0
                    }, a, n), {
                        $compid__200: a,
                        $original: t.$original
                    };
                });
                return f.propsManager.set({
                    isShow: s
                }, u, a), Object.assign(this.__state, {
                    anonymousState__temp: s,
                    loopArray44: p,
                    $compid__201: u,
                    productList: c
                }), this.__state;
            }
        } ]), CartGatheringProduct);
        function CartGatheringProduct() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CartGatheringProduct);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CartGatheringProduct.__proto__ || Object.getPrototypeOf(CartGatheringProduct)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "loopArray44", "$compid__201", "productList" ], 
            t.customComponents = [ "Toggle", "CartMoreProductItem" ], t;
        }
        a.$$events = [], a.$$componentPath = "pages/cart/modules/CartGatheringProduct", 
        a.options = {
            addGlobalClass: !0
        }, e.default = a, Component(r(0).default.createComponent(a));
    }
}, [ [ 645, 0, 1, 2 ] ] ]);