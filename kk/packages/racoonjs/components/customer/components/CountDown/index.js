(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 55 ], {
    495: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var g = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var n = [], o = !0, r = !1, i = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    r = !0, i = t;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return n;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, u = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            }
            return t;
        }, o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var w = n(0), r = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(w);
        n(496);
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
        }(CountDown, w.Component), o(CountDown, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(t);
                        return null === r ? void 0 : get(r, e, n);
                    }
                    if ("value" in o) return o.value;
                    var i = o.get;
                    return void 0 !== i ? i.call(n) : void 0;
                })(CountDown.prototype.__proto__ || Object.getPrototypeOf(CountDown.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isEnd: !1,
                    days: "",
                    hours: "",
                    minutes: "",
                    second: "",
                    millisecond: ""
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.interval();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                clearInterval(this.timer);
            }
        }, {
            key: "interval",
            value: function interval() {
                var e = this, n = 0, t = this.props, o = t.timeDiffer, r = t.startTime, i = t.endTime, a = t.millisecond;
                if (o && 0 < o ? n = o : r && i && r < i && (n = i - r), 0 !== n) {
                    var s = this.getDate(n);
                    s && this.setState(u({
                        isEnd: !1
                    }, s)), this.timer = setInterval(function() {
                        n = a ? n - 100 : n - 1e3;
                        var t = e.getDate(n);
                        t ? e.setState(u({
                            isEnd: !1
                        }, t)) : e.setState({
                            isEnd: !0
                        }, e.timeEndCallback);
                    }, a ? 100 : 1e3);
                } else this.setState({
                    isEnd: !0
                }, this.timeEndCallback);
            }
        }, {
            key: "getDate",
            value: function getDate(t) {
                var e = this.props.days;
                if (t <= 0) return null;
                var n = parseInt("" + t / 3600 / 24 / 1e3, 10), o = parseInt("" + t / 3600 / 1e3, 10);
                e && (o %= 24);
                var r = parseInt("" + t / 1e3 % 3600 / 60, 10), i = parseInt("" + t / 1e3 % 60, 10), a = parseInt("" + t % 1e3, 10);
                return {
                    days: n,
                    hours: this.zeroPadding(o),
                    minutes: this.zeroPadding(r),
                    second: this.zeroPadding(i),
                    millisecond: this.zeroPadding(a, 3)
                };
            }
        }, {
            key: "timeEndCallback",
            value: function timeEndCallback() {
                var t = this.props.endedCallback;
                t && t(), clearInterval(this.timer);
            }
        }, {
            key: "zeroPadding",
            value: function zeroPadding(t, e) {
                var n = String(t);
                return 3 === e ? String(t).substr(0, 1) : 2 <= n.length ? n.substr(n.length - 2, 2) : "0" + t;
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, r = (0, w.genCompid)(o + "$compid__27"), i = g(r, 2), a = i[0], s = i[1], u = (0, 
                w.genCompid)(o + "$compid__28"), l = g(u, 2), c = l[0], p = l[1], d = this.__props, f = d.theme, h = void 0 === f ? "" : f, m = d.days, _ = d.millisecond, v = this.__state, y = v.days;
                if (v.hours, v.minutes, v.second, v.millisecond, v.isEnd) return null;
                var b = m && 0 < Number(y);
                return w.propsManager.set({
                    isShow: b
                }, s, a), w.propsManager.set({
                    isShow: _
                }, p, c), Object.assign(this.__state, {
                    anonymousState__temp: b,
                    $compid__27: s,
                    $compid__28: p,
                    theme: h
                }), this.__state;
            }
        } ]), CountDown);
        function CountDown() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, CountDown);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "$compid__27", "$compid__28", "isEnd", "theme", "days", "hours", "minutes", "second", "millisecond", "timeDiffer", "startTime", "endTime", "endedCallback" ], 
            t.customComponents = [ "Toggle" ], t;
        }
        i.$$events = [], i.$$componentPath = "packages/racoonjs/components/customer/components/CountDown/index", 
        i.options = {
            addGlobalClass: !0
        }, e.default = i, Component(n(0).default.createComponent(i));
    },
    496: function(t, e, n) {}
}, [ [ 495, 0, 1, 2 ] ] ]);