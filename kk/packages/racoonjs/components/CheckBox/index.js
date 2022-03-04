(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 39 ], {
    548: function(e, t, o) {
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
        var r = o(0), c = _interopRequireDefault(r), p = _interopRequireDefault(o(7));
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o(549);
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
        }(CheckBox, r.Component), n(CheckBox, [ {
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
                    var c = n.get;
                    return void 0 !== c ? c.call(o) : void 0;
                })(CheckBox.prototype.__proto__ || Object.getPrototypeOf(CheckBox.prototype), "_constructor", this).apply(this, arguments), 
                this.state = {
                    innerChecked: !1
                }, this.$$refs = new c.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.setState({
                    innerChecked: this.props.checked
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(e) {
                this.props.checked !== e.checked && this.setState({
                    innerChecked: e.checked
                });
            }
        }, {
            key: "onClickCheck",
            value: function onClickCheck() {
                this.props.onChange && this.props.onChange(this.state.innerChecked);
            }
        }, {
            key: "_createData",
            value: function _createData(e, t, o) {
                this.__state = e || this.state || {}, this.__props = t || this.props || {}, this.$prefix;
                var n = this.__state.innerChecked, r = this.__props, c = r.label, i = r.className, s = r.disabled, a = (0, 
                p.default)("c-checkbox", {
                    "c-checkbox--active": n
                }, {
                    "c-checkbox--disabled": s
                }, i);
                return Object.assign(this.__state, {
                    checkboxClassname: a,
                    label: c
                }), this.__state;
            }
        } ]), CheckBox);
        function CheckBox() {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, CheckBox);
            var e = function _possibleConstructorReturn(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t;
            }(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
            return e.$usedState = [ "checkboxClassname", "label", "innerChecked", "checked", "className", "disabled" ], 
            e.customComponents = [], e;
        }
        i.$$events = [ "onClickCheck" ], i.$$componentPath = "packages/racoonjs/components/CheckBox/index", 
        i.options = {
            addGlobalClass: !0
        }, i.defaultProps = {
            label: ""
        }, t.default = i, Component(o(0).default.createComponent(i));
    },
    549: function(e, t, o) {}
}, [ [ 548, 0, 1, 2 ] ] ]);