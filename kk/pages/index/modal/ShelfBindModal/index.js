(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 113 ], {
    621: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var p = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function sliceIterator(e, t) {
                var o = [], n = !0, r = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (o.push(a.value), 
                    !t || o.length !== t); n = !0) ;
                } catch (e) {
                    r = !0, i = e;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return o;
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(e, t, o) {
            return t && defineProperties(e.prototype, t), o && defineProperties(e, o), e;
        };
        function defineProperties(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(e, n.key, n);
            }
        }
        var h = o(0), r = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(h);
        o(622);
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
        }(ShelfBindModal, h.Component), n(ShelfBindModal, [ {
            key: "_constructor",
            value: function _constructor() {
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
                })(ShelfBindModal.prototype.__proto__ || Object.getPrototypeOf(ShelfBindModal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    isShow: !0
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "close",
            value: function close() {
                this.setState({
                    isShow: !1
                });
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                var n = this;
                this.__state = e || this.state || {}, this.__props = t || this.props || {};
                var r = this.$prefix, i = (0, h.genCompid)(r + "$compid__159"), a = p(i, 2), s = a[0], l = a[1], u = this.__state.isShow, c = this.__props.$shelf;
                if (!c) return null;
                var f = c.allRelateShelfCount;
                return this.anonymousFunc0 = function() {
                    n.__props.actions.$log.pushEvent({
                        eventCode: "10181",
                        eventName: "关闭"
                    }), n.setState({
                        isShow: !1
                    });
                }, h.propsManager.set({
                    isOpen: u,
                    onClose: this.anonymousFunc0
                }, l, s), Object.assign(this.__state, {
                    $compid__159: l,
                    $shelf: c,
                    allRelateShelfCount: f
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0() {}
        } ]), ShelfBindModal);
        function ShelfBindModal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, ShelfBindModal);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (ShelfBindModal.__proto__ || Object.getPrototypeOf(ShelfBindModal)).apply(this, arguments));
            return e.$usedState = [ "$compid__159", "$shelf", "allRelateShelfCount", "isShow", "actions" ], 
            e.customComponents = [ "Modal" ], e;
        }
        i.$$events = [ "close" ], i.$$componentPath = "pages/index/modal/ShelfBindModal/index", 
        t.default = i, Component(o(0).default.createComponent(i));
    },
    622: function(e, t, o) {}
}, [ [ 621, 0, 1, 2 ] ] ]);