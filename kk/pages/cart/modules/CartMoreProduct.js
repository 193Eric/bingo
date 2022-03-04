(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 91 ], {
    647: function(t, e, r) {
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
        var n, a = r(5), f = r(0), i = _interopRequireDefault(f), u = _interopRequireDefault(r(12)), c = _interopRequireDefault(r(2)), p = r(41);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
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
        }(CartMoreProduct, f.Component), o(CartMoreProduct, [ {
            key: "_constructor",
            value: function _constructor() {
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
                })(CartMoreProduct.prototype.__proto__ || Object.getPrototypeOf(CartMoreProduct.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    productList: []
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var r = this, t = this.props, e = t.$store, o = t.$shelf, n = t.$cart, a = t.actions, i = o.shelfId, u = e.productList, s = n.cartProductMap;
                i && c.default.get("getRecommendProductIdByShelfId", {
                    shelfId: i
                }, {
                    showToast: !1,
                    failedMsg: !1
                }).then(function(t) {
                    var e = (0, p.getRecommendProduct)(t, u, s);
                    r.setState({
                        productList: e
                    }), e && 0 < e.length && a.$log.pushPageModule({
                        modelCode: "20040",
                        modelName: "美食推荐",
                        lastModel: !0
                    });
                });
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var i = this.$prefix, o = (0, f.genCompid)(i + "$compid__207"), n = l(o, 2), a = n[0], u = n[1], s = this.__state.productList, c = 0 < s.length, p = s.map(function(t, e) {
                    t = {
                        $original: (0, f.internal_get_original)(t)
                    };
                    var r = (0, f.genCompid)(i + "bgazzzzzzz" + e, !0), o = l(r, 2), n = o[0], a = o[1];
                    return f.propsManager.set({
                        product: t.$original
                    }, a, n), {
                        $compid__206: a,
                        $original: t.$original
                    };
                });
                return f.propsManager.set({
                    isShow: c
                }, u, a), Object.assign(this.__state, {
                    anonymousState__temp: c,
                    loopArray45: p,
                    $compid__207: u
                }), this.__state;
            }
        } ]), (n = CartMoreProduct).$$events = [], n.$$componentPath = "pages/cart/modules/CartMoreProduct", 
        n);
        function CartMoreProduct() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CartMoreProduct);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CartMoreProduct.__proto__ || Object.getPrototypeOf(CartMoreProduct)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "loopArray45", "$compid__207", "productList", "$store", "$shelf", "$cart", "actions" ], 
            t.customComponents = [ "Toggle", "CartMoreProductItem" ], t;
        }
        s.options = {
            addGlobalClass: !0
        }, s = (0, a.__decorate)([ (0, u.default)() ], s), e.default = s, Component(r(0).default.createComponent(s));
    }
}, [ [ 647, 0, 1, 2, 3 ] ] ]);