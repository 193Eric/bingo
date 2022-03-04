(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 41 ], {
    538: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], r = !0, n = !1, a = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); !(r = (s = i.next()).done) && (o.push(s.value), 
                    !t || o.length !== t); r = !0) ;
                } catch (e) {
                    n = !0, a = e;
                } finally {
                    try {
                        !r && i.return && i.return();
                    } finally {
                        if (n) throw a;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, r = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        var _ = o(0), a = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(_);
        o(539);
        var y = [ {
            number: "1",
            showValue: "1",
            className: "has_bot_border has_right_border"
        }, {
            number: "2",
            showValue: "2",
            className: "has_bot_border has_right_border"
        }, {
            number: "3",
            showValue: "3",
            className: "has_bot_border"
        }, {
            number: "4",
            showValue: "4",
            className: "has_bot_border has_right_border"
        }, {
            number: "5",
            showValue: "5",
            className: "has_bot_border has_right_border"
        }, {
            number: "6",
            showValue: "6",
            className: "has_bot_border"
        }, {
            number: "7",
            showValue: "7",
            className: "has_bot_border has_right_border"
        }, {
            number: "8",
            showValue: "8",
            className: "has_bot_border has_right_border"
        }, {
            number: "9",
            showValue: "9",
            className: "has_bot_border"
        }, {
            number: "",
            showValue: "",
            className: "has_right_border gray_bg point"
        }, {
            number: "0",
            showValue: "0",
            className: "has_right_border"
        }, {
            number: "",
            showValue: "",
            className: "del gray_bg",
            type: "del"
        } ], s = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(NumberKeyboard, _.Component), r(NumberKeyboard, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === r) {
                        var n = Object.getPrototypeOf(e);
                        return null === n ? void 0 : get(n, t, o);
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(NumberKeyboard.prototype.__proto__ || Object.getPrototypeOf(NumberKeyboard.prototype), "_constructor", this).apply(this, arguments), 
                this.defaultLiLen = [ "", "", "", "", "", "" ], this.state = {
                    liArr: [],
                    isShow: !1
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.showBoard && this.setState({
                    isShow: !0
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                e.showBoard !== this.props.showBoard && this.setState({
                    isShow: e.showBoard || !1
                });
            }
        }, {
            key: "updateValue",
            value: function updateValue(e, t, o) {
                var r = o.maxLength, n = void 0 === r ? 99 : r, a = o.decimals, s = void 0 === a ? -1 : a, i = "add", u = e;
                if ("del" === t) i = "del", 0 < e.length && (u = e.slice(0, -1)); else if (u.length < n) {
                    var l = e.indexOf(".");
                    "." === t ? e && l < 0 && (u += t) : -1 < s && -1 < l && !(e.length - l <= s) || (u += t);
                }
                return {
                    newVal: u,
                    actionType: i
                };
            }
        }, {
            key: "setValue",
            value: function setValue(e, t) {
                var o = this, r = "object" === (void 0 === e ? "undefined" : n(e)) ? e : e.split("");
                e && this.setState({
                    liArr: r
                }, function() {
                    "function" == typeof t && o.defaultLiLen.length == r.length && setTimeout(function() {
                        t(r.toString());
                    }, 30);
                });
            }
        }, {
            key: "showBoard",
            value: function showBoard() {
                this.setState({
                    isShow: !0
                });
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var e = this;
                setTimeout(function() {
                    e.setState({
                        isShow: !1
                    });
                }, 100);
            }
        }, {
            key: "clickKeyboard",
            value: function clickKeyboard(e) {
                var t = this.props, o = t.onKeyup, r = t.onChange, n = e.type, a = e.number;
                if ("del" === n) "function" == typeof o && this.props.onKeyup(a, n); else {
                    if (!a) return;
                    "function" == typeof o && this.props.onKeyup(a, n), a !== this.curValue && "function" == typeof r && this.props.onChange(a, n);
                }
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, n = (0, _.genCompid)(r + "$compid__56"), a = d(n, 2), s = a[0], i = a[1], u = (0, 
                _.genCompid)(r + "$compid__57"), l = d(u, 2), c = l[0], p = l[1], h = this.__props, b = h.hasMask, f = h.hasHeader;
                return this.__state.isShow, _.propsManager.set({
                    isShow: b
                }, i, s), _.propsManager.set({
                    isShow: f
                }, p, c), Object.assign(this.__state, {
                    $compid__56: i,
                    $compid__57: p,
                    numberMap: y
                }), this.__state;
            }
        } ]), NumberKeyboard);
        function NumberKeyboard() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, NumberKeyboard);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (NumberKeyboard.__proto__ || Object.getPrototypeOf(NumberKeyboard)).apply(this, arguments));
            return e.$usedState = [ "$compid__56", "$compid__57", "isShow", "numberMap", "liArr", "showBoard", "hasMask", "hasHeader" ], 
            e.customComponents = [ "Toggle" ], e;
        }
        s.$$events = [ "clickKeyboard" ], s.$$componentPath = "packages/racoonjs/components/NumberKeyboard/index", 
        t.default = s, Component(o(0).default.createComponent(s));
    },
    539: function(e, t, o) {}
}, [ [ 538, 0, 1, 2 ] ] ]);