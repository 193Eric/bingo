(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 108 ], {
    629: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var n = [], o = !0, r = !1, a = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), 
                    !t || n.length !== t); o = !0) ;
                } catch (e) {
                    r = !0, a = e;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return n;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, o = function(e, t, n) {
            return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
        };
        function defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        var h = n(0), r = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(h), a = n(1);
        n(630);
        var i = (function _inherits(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(DineAndDashModal, h.Component), o(DineAndDashModal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, n) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === o) {
                        var r = Object.getPrototypeOf(e);
                        return null === r ? void 0 : get(r, t, n);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(DineAndDashModal.prototype.__proto__ || Object.getPrototypeOf(DineAndDashModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "handleClick",
            value: function handleClick() {
                this.props.actions.$log.pushEvent({
                    eventCode: "10161",
                    eventName: "霸王餐点击"
                }), a.feNavigator.jumpUrlByProject("/personal/memberBenefits/index.html");
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, n) {
                var o = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, a = (0, h.genCompid)(r + "$compid__165"), i = f(a, 2), s = i[0], u = i[1], l = this.__state.isShow, c = this.__props.extraData, p = "";
                return c && (p = c.xmonth), this.anonymousFunc0 = function() {
                    o.__props.actions.$log.pushEvent({
                        eventCode: "10162",
                        eventName: "关闭"
                    }), o.setState({
                        isShow: !1
                    });
                }, h.propsManager.set({
                    isOpen: l,
                    onClose: this.anonymousFunc0,
                    closeOnClickOverlay: !0
                }, u, s), Object.assign(this.__state, {
                    $compid__165: u,
                    month: p
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), DineAndDashModal);
        function DineAndDashModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, DineAndDashModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (DineAndDashModal.__proto__ || Object.getPrototypeOf(DineAndDashModal)).apply(this, arguments));
            return e.$usedState = [ "$compid__165", "month", "isShow", "actions", "extraData" ], 
            e.customComponents = [ "Modal" ], e;
        }
        i.$$events = [ "handleClick" ], i.$$componentPath = "pages/index/modal/DineAndDashModal/index", 
        i.options = {
            addGlobalClass: !0
        }, t.default = i, Component(n(0).default.createComponent(i));
    },
    630: function(e, t, n) {}
}, [ [ 629, 0, 1, 2, 3 ] ] ]);