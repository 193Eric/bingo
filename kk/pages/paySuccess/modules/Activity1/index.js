(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 123 ], {
    689: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(t, r.key, r);
            }
        }
        var i = o(0), n = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(i), a = o(1);
        o(690);
        var c = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Activity1, i.Component), r(Activity1, [ {
            key: "_constructor",
            value: function _constructor(t) {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === r) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : get(i, e, o);
                    }
                    if ("value" in r) return r.value;
                    var n = r.get;
                    return void 0 !== n ? n.call(o) : void 0;
                })(Activity1.prototype.__proto__ || Object.getPrototypeOf(Activity1.prototype), "_constructor", this).call(this, t), 
                this.$$refs = new n.default.RefsArray();
            }
        }, {
            key: "openActivityPage",
            value: function openActivityPage() {
                var t = this.props.data;
                t && a.feNavigator.jumpUrl(t.linkUrl);
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var r = this.__props.data;
                return r ? (Object.assign(this.__state, {
                    activityObj: r
                }), this.__state) : null;
            }
        } ]), Activity1);
        function Activity1() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Activity1);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Activity1.__proto__ || Object.getPrototypeOf(Activity1)).apply(this, arguments));
            return t.$usedState = [ "activityObj", "data" ], t.customComponents = [], t;
        }
        c.$$events = [ "openActivityPage" ], c.$$componentPath = "pages/paySuccess/modules/Activity1/index", 
        e.default = c, Component(o(0).default.createComponent(c));
    },
    690: function(t, e, o) {}
}, [ [ 689, 0, 1, 2, 3 ] ] ]);