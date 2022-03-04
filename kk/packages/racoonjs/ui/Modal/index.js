(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 82 ], {
    462: function(e, t, o) {
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
        var u = o(0), s = _interopRequireDefault(u), c = _interopRequireDefault(o(7)), r = _interopRequireDefault(o(27));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(463);
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
        }(Modal, u.Component), n(Modal, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(e, t, o) {
                    null === e && (e = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (void 0 === n) {
                        var s = Object.getPrototypeOf(e);
                        return null === s ? void 0 : get(s, t, o);
                    }
                    if ("value" in n) return n.value;
                    var r = n.get;
                    return void 0 !== r ? r.call(o) : void 0;
                })(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    _isOpen: !1
                }, this.$$refs = new s.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this, t = this.props.isOpen;
                t !== this.state._isOpen && setTimeout(function() {
                    e.setState({
                        _isOpen: t
                    });
                }, 50);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                var t = e.isOpen;
                t !== this.state._isOpen && this.setState({
                    _isOpen: t
                });
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var n = this.__state._isOpen, s = this.__props, r = s.isShowClose, a = s.style, i = s.className, l = (0, 
                c.default)("fe-modal", {
                    "fe-modal-open": n
                }, i), p = (0, u.internal_inline_style)(a);
                return Object.assign(this.__state, {
                    anonymousState__temp: p,
                    modalClass: l,
                    isShowClose: r
                }), this.__state;
            }
        } ]), Modal);
        function Modal() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, Modal);
            var t = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
            return t.$usedState = [ "anonymousState__temp", "modalClass", "isShowClose", "_isOpen", "isOpen", "style", "className", "closeOnClickOverlay", "children" ], 
            t.handleTouchMove = function(e) {
                e.stopPropagation();
            }, t.maskTouchMove = function(e) {
                e.stopPropagation(), e.preventDefault();
            }, t.handleClose = function(e) {
                (0, r.default)(t.props.onClose) && t.props.onClose && t.props.onClose(e);
            }, t.close = function() {
                t.setState({
                    _isOpen: !1
                }, t.handleClose);
            }, t.handleClickOverlay = function() {
                t.props.closeOnClickOverlay && t.close();
            }, t.customComponents = [], t;
        }
        a.$$events = [ "handleTouchMove", "maskTouchMove", "handleClickOverlay", "close" ], 
        a.$$componentPath = "packages/racoonjs/ui/Modal/index", a.options = {
            addGlobalClass: !0
        }, a.defaultProps = {
            isShowClose: !0,
            closeOnClickOverlay: !0
        }, t.default = a, Component(o(0).default.createComponent(a));
    },
    463: function(e, t, o) {}
}, [ [ 462, 0, 1, 2 ] ] ]);