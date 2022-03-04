(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 42 ], {
    536: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function(t, e, r) {
            return e && defineProperties(t.prototype, e), r && defineProperties(t, r), t;
        };
        function defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var o = r(0), a = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(o);
        r(537);
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
        }(PayPassword, o.Component), n(PayPassword, [ {
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
                })(PayPassword.prototype.__proto__ || Object.getPrototypeOf(PayPassword.prototype), "_constructor", this).apply(this, arguments), 
                this.defaultLiLen = [ "", "", "", "", "", "" ], this.state = {
                    liArr: []
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {}
        }, {
            key: "setValue",
            value: function setValue(t, e) {
                var r = this;
                if (t && 6 !== this.state.liArr.length) {
                    var n = String(t);
                    this.setState(function(t) {
                        var e = t.liArr.concat();
                        return e.push(n), {
                            liArr: e
                        };
                    }, function() {
                        var t = r.state.liArr;
                        "function" == typeof e && r.defaultLiLen.length === t.length && setTimeout(function() {
                            e(t.join(""));
                        }, 30);
                    });
                }
            }
        }, {
            key: "back",
            value: function back() {
                this.setState(function(t) {
                    var e = t.liArr.concat();
                    return 0 === e.length ? null : (e.pop(), {
                        liArr: e
                    });
                });
            }
        }, {
            key: "clear",
            value: function clear() {
                this.setState({
                    liArr: []
                });
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix, 
                this.__state.liArr;
                var n = this.defaultLiLen, o = this.__props.className;
                return Object.assign(this.__state, {
                    className: o,
                    defaultLiLen: n
                }), this.__state;
            }
        } ]), PayPassword);
        function PayPassword() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, PayPassword);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (PayPassword.__proto__ || Object.getPrototypeOf(PayPassword)).apply(this, arguments));
            return t.$usedState = [ "className", "liArr", "defaultLiLen" ], t.customComponents = [], 
            t;
        }
        s.$$events = [], s.$$componentPath = "packages/racoonjs/components/PayPassword/index", 
        s.defaultProps = {
            className: ""
        }, e.default = s, Component(r(0).default.createComponent(s));
    },
    537: function(t, e, r) {}
}, [ [ 536, 0, 1, 2 ] ] ]);