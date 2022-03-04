(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 53 ], {
    678: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], n = !0, o = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), 
                    !e || r.length !== e); n = !0) ;
                } catch (t) {
                    o = !0, a = t;
                } finally {
                    try {
                        !n && c.return && c.return();
                    } finally {
                        if (o) throw a;
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
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var a, i = r(5), c = r(0), s = _interopRequireDefault(c), u = r(1), l = _interopRequireDefault(r(12)), p = _interopRequireDefault(r(13));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        r(679);
        var f = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(CartIcon, c.Component), o(CartIcon, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, r) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === n) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : get(o, e, r);
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    return void 0 !== a ? a.call(r) : void 0;
                })(CartIcon.prototype.__proto__ || Object.getPrototypeOf(CartIcon.prototype), "_constructor", this).apply(this, arguments), 
                this.newCartIconDOM = null, this.state = {
                    cartIconActiveClass: ""
                }, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "getDOM",
            value: function getDOM() {
                var t = this;
                return new Promise(function(r) {
                    t.newCartIconDOM && r(t.newCartIconDOM), (0, u.getDom)("#new_cart_icon", {
                        $scope: t.$scope
                    }).then(function(t) {
                        var e = n(t, 1)[0];
                        r(e);
                    });
                });
            }
        }, {
            key: "activeCartIcon",
            value: function activeCartIcon() {
                var t = this;
                this.setState({
                    cartIconActiveClass: "active"
                }, function() {
                    setTimeout(function() {
                        t.setState({
                            cartIconActiveClass: ""
                        });
                    }, 110);
                });
            }
        }, {
            key: "openCartPage",
            value: function openCartPage() {
                u.feNavigator.navigateTo(p.default.cart);
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix, 
                this.__state.cartIconActiveClass;
                var n = this.__props.totalCount;
                return Object.assign(this.__state, {
                    totalCount: n
                }), this.__state;
            }
        } ]), (a = CartIcon).$$events = [ "openCartPage" ], a.$$componentPath = "packages/racoonjs/components/customer/components/CartBox/modules/CartIcon/index", 
        a);
        function CartIcon() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CartIcon);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CartIcon.__proto__ || Object.getPrototypeOf(CartIcon)).apply(this, arguments));
            return t.$usedState = [ "cartIconActiveClass", "totalCount" ], t.customComponents = [], 
            t;
        }
        f = (0, i.__decorate)([ (0, l.default)() ], f), e.default = f, Component(r(0).default.createComponent(f));
    },
    679: function(t, e, r) {}
}, [ [ 678, 0, 1, 2, 3 ] ] ]);