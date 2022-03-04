(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 117 ], {
    633: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var v = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var r = [], o = !0, a = !1, n = void 0;
                try {
                    for (var u, i = t[Symbol.iterator](); !(o = (u = i.next()).done) && (r.push(u.value), 
                    !e || r.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, n = t;
                } finally {
                    try {
                        !o && i.return && i.return();
                    } finally {
                        if (a) throw n;
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
        var y = r(0), a = _interopRequireDefault(y), u = r(1), P = _interopRequireDefault(r(7));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        r(634);
        var n = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(ProductNavName, y.Component), o(ProductNavName, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, r) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : get(a, e, r);
                    }
                    if ("value" in o) return o.value;
                    var n = o.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(ProductNavName.prototype.__proto__ || Object.getPrototypeOf(ProductNavName.prototype), "_constructor", this).apply(this, arguments), 
                this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "_createOrderPriceData",
            value: function _createOrderPriceData() {
                return function(t) {
                    return {
                        targetValue: t,
                        classname: "sp"
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o, a = this.$prefix, n = this.__props, u = n.otherPopupStatus, i = n.otherPopupData;
                if (!i) return null;
                var p = -1 < u.indexOf("taskCard");
                return p && (o = void 0, o = this._createTaskCardPopupData(a + "bdfzzzzzzz")()), 
                Object.assign(this.__state, {
                    anonymousState__temp2: p,
                    otherPopupData: i,
                    _$_$anonymousState__temp: o
                }), this.__state;
            }
        }, {
            key: "_createTaskCardPopupData",
            value: function _createTaskCardPopupData(h) {
                var m = this;
                return function() {
                    var t = (0, y.genCompid)(h + "$compid__167"), e = v(t, 2), r = e[0], o = e[1], a = m.props, n = a.otherPopupStatus, u = a.otherPopupData;
                    if (!u) return null;
                    var i = (0, P.default)("task-card-popup flip-container", {
                        show: "taskCard" === n,
                        hide: "taskCard_hide" === n
                    }), p = u.finishNum, s = void 0 === p ? 0 : p, c = u.targetNum, l = Math.min(s / c * 100, 100), f = s === c, d = 2 == u.cycleType ? "本周" : "活动期间", _ = m._createOrderPriceData(h + "bdgzzzzzzz")(u.targetValue);
                    return "taskCard" === n && y.propsManager.set({
                        className: "task-progress",
                        progress: l
                    }, o, r), {
                        $compid__167: o,
                        otherPopupData: u,
                        contentClassName: i,
                        otherPopupStatus: n,
                        isFinish: f,
                        anonymousState__temp3: _,
                        finishNum: s,
                        targetNum: c,
                        typeName: d
                    };
                };
            }
        } ]), ProductNavName);
        function ProductNavName() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProductNavName);
            var n = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProductNavName.__proto__ || Object.getPrototypeOf(ProductNavName)).apply(this, arguments));
            return n.$usedState = [ "anonymousState__temp2", "otherPopupData", "_$_$anonymousState__temp", "otherPopupStatus" ], 
            n.onOtherPopupHide = function() {
                n.props.onSetOtherPopupStatus("taskCard_hide"), n.timer && clearTimeout(n.timer), 
                n.timer = setTimeout(function() {
                    n.props.onSetOtherPopupStatus("");
                }, 780);
            }, n.jumpActivityH5 = function() {
                u.feNavigator.jumpUrlByProject("/activity/userTasks/index.html");
            }, n.handleCouponIconClick = function() {
                var t = n.props.otherPopupData;
                if (!t) return null;
                var e = t.finishNum, r = void 0 === e ? 0 : e, o = t.targetNum, a = void 0 === o ? 0 : o;
                r === a && 0 < a && n.jumpActivityH5();
            }, n.customComponents = [ "ProgressBar" ], n;
        }
        n.$$events = [ "onOtherPopupHide", "handleCouponIconClick", "jumpActivityH5" ], 
        n.$$componentPath = "pages/index/modules/HomeOtherPopup/index", e.default = n, Component(r(0).default.createComponent(n));
    },
    634: function(t, e, r) {}
}, [ [ 633, 0, 1, 2, 3 ] ] ]);