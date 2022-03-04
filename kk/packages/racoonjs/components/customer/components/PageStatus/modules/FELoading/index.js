(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 62 ], {
    553: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var r = o(0), i = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        o(554);
        var a = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(FELoading, r.Component), n(FELoading, [ {
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
                })(FELoading.prototype.__proto__ || Object.getPrototypeOf(FELoading.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                return this.__state = e || this.state || {}, this.__props = t || this.props || {}, 
                this.$prefix, Object.assign(this.__state, {}), this.__state;
            }
        } ]), FELoading);
        function FELoading() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, FELoading);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (FELoading.__proto__ || Object.getPrototypeOf(FELoading)).apply(this, arguments));
            return e.$usedState = [], e.customComponents = [], e;
        }
        a.$$events = [], a.$$componentPath = "packages/racoonjs/components/customer/components/PageStatus/modules/FELoading/index", 
        t.default = a, Component(o(0).default.createComponent(a));
    },
    554: function(e, t, o) {}
}, [ [ 553, 0, 1, 2 ] ] ]);