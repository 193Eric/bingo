(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 70 ], {
    562: function(t, e, r) {
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
        var s = r(0), n = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(s);
        r(563);
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
        }(ProductSpikeProgress, s.Component), o(ProductSpikeProgress, [ {
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
                })(ProductSpikeProgress.prototype.__proto__ || Object.getPrototypeOf(ProductSpikeProgress.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {}
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var o = this.__props.activity;
                if (!o || !o.activityProgress) return null;
                if (!o.isInActivityPeriod) return null;
                var n = parseInt(o.activityProgress), i = (0, s.internal_inline_style)(this.getProgressStyle());
                return Object.assign(this.__state, {
                    anonymousState__temp: i,
                    activity: o,
                    activityProgress: n
                }), this.__state;
            }
        }, {
            key: "getProgressStyle",
            value: function getProgressStyle() {
                var t = this.props.activity;
                return t ? {
                    width: t.activityProgress + "%"
                } : {};
            }
        } ]), ProductSpikeProgress);
        function ProductSpikeProgress() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductSpikeProgress);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductSpikeProgress.__proto__ || Object.getPrototypeOf(ProductSpikeProgress)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "activity", "activityProgress" ], 
            t.customComponents = [], t;
        }
        i.$$events = [], i.$$componentPath = "packages/racoonjs/components/customer/components/ProductItem/modules/ProductSpikeProgress", 
        i.defaultProps = {}, e.default = i, Component(r(0).default.createComponent(i));
    },
    563: function(t, e, r) {}
}, [ [ 562, 0, 1, 2 ] ] ]);