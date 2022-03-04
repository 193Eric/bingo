(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 81 ], {
    470: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var m = function(t, e) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return function sliceIterator(t, e) {
                var o = [], n = !0, i = !1, a = void 0;
                try {
                    for (var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done) && (o.push(r.value), 
                    !e || o.length !== e); n = !0) ;
                } catch (t) {
                    i = !0, a = t;
                } finally {
                    try {
                        !n && s.return && s.return();
                    } finally {
                        if (i) throw a;
                    }
                }
                return o;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }, n = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var C = o(0), i = _interopRequireDefault(C), g = _interopRequireDefault(o(7)), a = _interopRequireDefault(o(27));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        o(471);
        var r = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Dialog, C.Component), n(Dialog, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === n) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : get(i, e, o);
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    return void 0 !== a ? a.call(o) : void 0;
                })(Dialog.prototype.__proto__ || Object.getPrototypeOf(Dialog.prototype), "_constructor", this).apply(this, arguments), 
                this.timer = null, this.data = {}, this.state = {
                    _isOpen: !1,
                    _buttons: []
                }, this.$$refs = new i.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var t = this.props, e = t.isOpened, o = t.buttons;
                e !== this.props.isOpened && this.init(e, o);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.clearTimer();
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(t) {
                return !!t.isOpened;
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(t) {
                var e = t.isOpened, o = t.buttons;
                e !== this.props.isOpened && this.init(e, o);
            }
        }, {
            key: "init",
            value: function init(t, e) {
                var o = this;
                this.clearTimer();
                var n = this.props.buttonCountDown;
                if (e !== this.state._buttons && e && this.setState({
                    _buttons: e
                }), !e) {
                    var i = [ {
                        label: this.props.cancelText || "取消",
                        type: "default",
                        onClose: function onClose() {
                            o.props.onCancel && o.props.onCancel();
                        }
                    }, {
                        label: this.props.confirmText || "确定",
                        type: "primary",
                        openType: this.props.openType,
                        onClose: function onClose() {
                            o.props.onConfirm && o.props.onConfirm();
                        }
                    } ];
                    n && 999 < n && t && (this.data.buttonLabel = i[1].label, this.data.buttonCountDown = parseInt(String(n / 1e3)), 
                    i[1].label = this.data.buttonLabel + "(" + this.data.buttonCountDown + ")", i[1].disabled = !0, 
                    this.setButtonCountDown()), this.setState({
                        _buttons: i
                    });
                }
                t !== this.state._isOpen && this.setState({
                    _isOpen: t
                });
            }
        }, {
            key: "clearTimer",
            value: function clearTimer() {
                clearTimeout(this.timer);
            }
        }, {
            key: "setButtonCountDown",
            value: function setButtonCountDown() {
                var e = this;
                this.timer = setTimeout(function() {
                    e.data.buttonCountDown--;
                    var t = e.state._buttons;
                    t[1].label = e.data.buttonLabel + "(" + e.data.buttonCountDown + ")", t[1].disabled = !0, 
                    0 < e.data.buttonCountDown ? e.setButtonCountDown() : (t[1].label = e.data.buttonLabel, 
                    t[1].disabled = !1), e.setState({
                        _buttons: t
                    });
                }, 1e3);
            }
        }, {
            key: "handleButtonClick",
            value: function handleButtonClick(t, e) {
                var o = this, n = this.state._buttons[e];
                t.disabled || this.setState({
                    _isOpen: !1
                }, function() {
                    o.handleClose(), n && n.onClose && n.onClose();
                });
            }
        }, {
            key: "_createButtonData",
            value: function _createButtonData() {
                var o = this;
                return function(t, e) {
                    return o.props.onGetPhoneNumber, t.openType, {
                        button: t,
                        index: e
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                var n = this;
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var i = this.$prefix, a = (0, C.genCompid)(i + "$compid__15"), r = m(a, 2), s = r[0], l = r[1], u = this.__props, p = u.title, c = u.className, f = u.oneButtonStyle, h = this.__state, d = h._isOpen, b = h._buttons, _ = (0, 
                g.default)("fe-dialog", "c-dialog--taro", {
                    "c-dialog-open": d,
                    "one-button-style": f
                }, c), y = !!p, v = b ? b.map(function(t, e) {
                    return t = {
                        $original: (0, C.internal_get_original)(t)
                    }, {
                        $loopState__temp2: b ? n._createButtonData(i + "bdzzzzzzzz" + e)(t.$original, e) : null,
                        $original: t.$original
                    };
                }) : [];
                return C.propsManager.set({
                    isShow: y
                }, l, s), Object.assign(this.__state, {
                    anonymousState__temp3: y,
                    loopArray0: v,
                    $compid__15: l,
                    dialogClass: _,
                    title: p
                }), this.__state;
            }
        }, {
            key: "funPrivatebczzz",
            value: function funPrivatebczzz() {
                return this.props.onGetPhoneNumber.apply(void 0, Array.prototype.slice.call(arguments, 1));
            }
        } ]), Dialog);
        function Dialog() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Dialog);
            var e = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
            return e.$usedState = [ "anonymousState__temp3", "loopArray0", "$compid__15", "dialogClass", "title", "_buttons", "_isOpen", "isOpened", "buttons", "buttonCountDown", "cancelText", "confirmText", "openType", "className", "oneButtonStyle", "content", "closeOnClickOverlay", "children" ], 
            e.handleTouchMove = function(t) {
                t.stopPropagation(), t.preventDefault();
            }, e.maskTouchMove = function(t) {
                t.stopPropagation(), t.preventDefault();
            }, e.handleClose = function(t) {
                e.props.onClose && (0, a.default)(e.props.onClose) && e.props.onClose(t);
            }, e.handleClickOverlay = function() {
                e.props.closeOnClickOverlay && e.setState({
                    _isOpen: !1
                }, e.handleClose);
            }, e.customComponents = [ "Toggle" ], e;
        }
        r.$$events = [ "funPrivatebczzz", "handleButtonClick", "handleTouchMove", "maskTouchMove", "handleClickOverlay" ], 
        r.$$componentPath = "packages/racoonjs/ui/Dialog/index", r.options = {
            addGlobalClass: !0
        }, e.default = r, Component(o(0).default.createComponent(r));
    },
    471: function(t, e, o) {}
}, [ [ 470, 0, 1, 2 ] ] ]);