(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 68 ], {
    560: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var f = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], o = !0, n = !1, i = void 0;
                try {
                    for (var c, u = t[Symbol.iterator](); !(o = (c = u.next()).done) && (r.push(c.value), 
                    !e || r.length !== e); o = !0) ;
                } catch (t) {
                    n = !0, i = t;
                } finally {
                    try {
                        !o && u.return && u.return();
                    } finally {
                        if (n) throw i;
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
        var d = r(0), n = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(d);
        r(561);
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
        }(ProductDescribe, d.Component), o(ProductDescribe, [ {
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
                    var i = o.get;
                    return void 0 !== i ? i.call(r) : void 0;
                })(ProductDescribe.prototype.__proto__ || Object.getPrototypeOf(ProductDescribe.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {}
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(t) {
                return t.isInProductCate !== this.props.isInProductCate || t.product !== this.props.product;
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, n = (0, d.genCompid)(o + "$compid__117"), i = f(n, 2), c = i[0], u = i[1], a = this.__props, s = a.product, p = a.isInProductCate;
                if (!s) return null;
                var l = s.activity;
                return s && l && -1 < l.activityBuyQuantity && !p && d.propsManager.set({
                    activity: s.activity
                }, u, c), s && s.guessLabel, s && s.interestLabel, Object.assign(this.__state, {
                    $compid__117: u,
                    product: s,
                    activity: l,
                    isInProductCate: p
                }), this.__state;
            }
        } ]), ProductDescribe);
        function ProductDescribe() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductDescribe);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductDescribe.__proto__ || Object.getPrototypeOf(ProductDescribe)).apply(this, arguments));
            return t.$usedState = [ "$compid__117", "product", "activity", "isInProductCate" ], 
            t.customComponents = [ "ProductSpikeProgress" ], t;
        }
        i.$$events = [], i.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/modules/ProductDescribe", 
        i.defaultProps = {}, e.default = i, Component(r(0).default.createComponent(i));
    },
    561: function(t, e, r) {}
}, [ [ 560, 0, 1, 2 ] ] ]);