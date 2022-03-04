(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 49 ], {
    593: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var i = n(0), a = _interopRequireDefault(i), d = _interopRequireDefault(n(7)), r = n(1), c = n(20);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        n(594);
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
        }(Ad15, i.Component), o(Ad15, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, n) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : get(i, e, n);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(Ad15.prototype.__proto__ || Object.getPrototypeOf(Ad15.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    initX: 0,
                    initY: 0,
                    hasInit: !1
                }, this.data = {
                    x: 0,
                    y: 0,
                    middleX: 0,
                    initLeftX: 5,
                    initRightX: 0,
                    log: !1
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var t = (0, r.getSystemInfoSync)(), e = t.windowWidth, n = e - 5 - 64, o = t.windowHeight - 100 - 64;
                this.setState({
                    initX: n,
                    initY: o,
                    hasInit: !0
                }), this.data.x = n, this.data.y = n, this.data.middleX = e / 2 - 32, this.data.initLeftX = 5, 
                this.data.initRightX = e - 5 - 64;
            }
        }, {
            key: "handleClick",
            value: function handleClick() {
                var t = this.props, e = t.data, n = t.actions, o = null;
                e && 0 < e.length && (o = e[0]), o && o.advertionUrl && (n.$log.pushEvent({
                    eventName: "广告位1-5点击",
                    eventCode: "10121",
                    relateFromId: o.advertionId,
                    relateFromType: 3
                }), r.feNavigator.jumpUrl(o.advertionUrl));
            }
        }, {
            key: "onChange",
            value: function onChange(t) {
                if (t.detail) {
                    var e = t.detail, n = e.x, o = e.y;
                    this.data.x = n, this.data.y = o;
                }
            }
        }, {
            key: "onTouchEnd",
            value: function onTouchEnd() {
                var t = this.data, e = t.x, n = t.middleX, o = t.initLeftX, i = t.initRightX, a = this.state.initY;
                n < e ? (this.setState({
                    initX: i,
                    initY: a
                }), console.log(i)) : (console.log(o), this.setState({
                    initX: o,
                    initY: a
                }));
            }
        }, {
            key: "pushLog",
            value: function pushLog(t) {
                var e = this.props.actions;
                !this.data.log && e && e.$log && (this.data.log = !0, e.$log.pushPageModule({
                    modelCode: "10120",
                    modelName: "广告位1-5",
                    relateFromType: 3,
                    relateFromId: t.advertionId
                }));
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var o = this.__props, i = o.data, a = o.isScrollFlag, r = null;
                i && 0 < i.length && (r = i[0]);
                var s = !r || !(0, c.isWeixin)();
                if (s) return null;
                this.pushLog(r);
                var l = this.__state, u = (l.initX, l.initY, l.hasInit, (0, d.default)("fixed-ad15", {
                    "scroll-hidden": a
                }));
                return Object.assign(this.__state, {
                    anonymousState__temp: s,
                    ad15Classname: u,
                    ad15: r
                }), this.__state;
            }
        } ]), Ad15);
        function Ad15() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Ad15);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Ad15.__proto__ || Object.getPrototypeOf(Ad15)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "hasInit", "ad15Classname", "initX", "initY", "ad15", "data", "actions", "isScrollFlag" ], 
            t.customComponents = [], t;
        }
        s.$$events = [ "onChange", "handleClick", "onTouchEnd" ], s.$$componentPath = "packages/racoonjs/components/customer/components/Ad15/index", 
        s.options = {
            addGlobalClass: !0
        }, e.default = s, Component(n(0).default.createComponent(s));
    },
    594: function(t, e, n) {}
}, [ [ 593, 0, 1, 2, 3 ] ] ]);