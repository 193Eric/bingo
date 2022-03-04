(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 118 ], {
    635: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function(t, e, r) {
            return e && defineProperties(t.prototype, e), r && defineProperties(t, r), t;
        };
        function defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var a = r(0), h = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(a);
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
        }(ProgressBar, a.Component), o(ProgressBar, [ {
            key: "_constructor",
            value: function _constructor() {
                (function get(t, e, r) {
                    null === t && (t = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === o) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : get(s, e, r);
                    }
                    if ("value" in o) return o.value;
                    var n = o.get;
                    return void 0 !== n ? n.call(r) : void 0;
                })(ProgressBar.prototype.__proto__ || Object.getPrototypeOf(ProgressBar.prototype), "_constructor", this).apply(this, arguments), 
                this.ctx = null, this.state = {
                    style: {}
                }, this.$$refs = new h.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var e = this, r = null;
                h.default.createSelectorQuery().in(this.$scope).select("#progressBar").fields({
                    node: !0,
                    size: !0
                }).exec(function(t) {
                    r = t[0].node, e.draw(r);
                });
            }
        }, {
            key: "draw",
            value: function draw(t) {
                if (t) {
                    var e = this.props.progress, r = 106, o = Math.PI / 180 * 135, s = Math.PI / 180 * 405;
                    this.ctx = t.getContext("2d"), this.ctx.scale(2, 2);
                    var n = h.default.pxTransform(120), a = h.default.pxTransform(120);
                    this.setState({
                        style: {
                            width: "" + n,
                            height: "" + a,
                            margin: "0 auto",
                            display: "block"
                        }
                    }), t.width = 240, t.height = 240, this.ctx.lineCap = "round", this.drawArc(r, r, r, o, s, "#eee", 28);
                    var i = (.01 * e * 270 + 135) * (Math.PI / 180), c = 106 + Math.cos(o) * r, u = 106 + Math.cos(i) * r, p = 106 + Math.sin(o) * r, l = 106 + Math.sin(i) * r, f = this.ctx.createLinearGradient(c, p, u, l);
                    f.addColorStop(0, "#FDE06B"), f.addColorStop(1, "#FA9F39"), this.drawArc(r, r, r, o, i, f, 28);
                }
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, r) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var o = this.__state.style, s = this.__props.className, n = (0, a.internal_inline_style)(o);
                return Object.assign(this.__state, {
                    anonymousState__temp: n,
                    className: s
                }), this.__state;
            }
        } ]), ProgressBar);
        function ProgressBar() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ProgressBar);
            var i = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
            return i.$usedState = [ "anonymousState__temp", "className", "style", "progress" ], 
            i.drawArc = function(t, e, r, o, s, n, a) {
                i.ctx.beginPath(), i.ctx.strokeStyle = n, i.ctx.arc(t + a / 2, e + a / 2, r, o, s), 
                i.ctx.lineWidth = a, i.ctx.stroke(), i.ctx.closePath();
            }, i.customComponents = [], i;
        }
        s.$$events = [], s.$$componentPath = "pages/index/modules/HomeOtherPopup/progressBar", 
        s.options = {
            addGlobalClass: !0
        }, e.default = s, Component(r(0).default.createComponent(s));
    }
}, [ [ 635, 0, 1, 2 ] ] ]);