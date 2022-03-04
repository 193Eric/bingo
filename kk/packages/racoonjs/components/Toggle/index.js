(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 44 ], {
    472: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var n = o(0), i = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n);
        var s = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(Toggle, n.Component), r(Toggle, [ {
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
                    var i = r.get;
                    return void 0 !== i ? i.call(o) : void 0;
                })(Toggle.prototype.__proto__ || Object.getPrototypeOf(Toggle.prototype), "_constructor", this).call(this, e), 
                this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var r = this.__props, n = r.isShow;
                return r.children, Object.assign(this.__state, {
                    isShow: n
                }), this.__state;
            }
        } ]), Toggle);
        function Toggle() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Toggle);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
            return e.$usedState = [ "isShow", "children" ], e.customComponents = [], e;
        }
        s.$$events = [], s.$$componentPath = "packages/racoonjs/components/Toggle/index", 
        s.options = {
            addGlobalClass: !0
        }, t.default = s, Component(o(0).default.createComponent(s));
    }
}, [ [ 472, 0, 1, 2 ] ] ]);