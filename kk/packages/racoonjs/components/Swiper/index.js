(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 43 ], {
    585: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = _interopRequireDefault(n(3)), o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var g = n(0), r = _interopRequireDefault(g), i = _interopRequireDefault(n(7)), s = n(1);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _asyncToGenerator(t) {
            return function() {
                var a = t.apply(this, arguments);
                return new Promise(function(r, i) {
                    return function step(t, e) {
                        try {
                            var n = a[t](e), o = n.value;
                        } catch (t) {
                            return void i(t);
                        }
                        if (!n.done) return Promise.resolve(o).then(function(t) {
                            step("next", t);
                        }, function(t) {
                            step("throw", t);
                        });
                        r(o);
                    }("next");
                });
            };
        }
        n(586);
        var u, p = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(SwiperComponent, g.Component), o(SwiperComponent, [ {
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
                })(SwiperComponent.prototype.__proto__ || Object.getPrototypeOf(SwiperComponent.prototype), "_constructor", this).apply(this, arguments), 
                this.data = {
                    isLoad: !0
                }, this.state = {
                    _indicatorDots: !1,
                    currentHeight: 200,
                    heightList: []
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.height && this.setState({
                    currentHeight: this.props.height
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(t) {
                t.data && 1 < t.data.length && this.setState({
                    _indicatorDots: !0
                });
            }
        }, {
            key: "onClickBanner",
            value: function onClickBanner(t, e) {
                var n = this.props, o = n.onClick, r = n.actions, i = n.logEvent;
                r && r.$log && i && r.$log.pushEvent({
                    eventCode: i.eventCode,
                    eventName: i.eventName,
                    relateFromType: 3,
                    relateFromId: t.advertionId
                }), "function" != typeof o ? t.advertionUrl && s.feNavigator.jumpUrl(t.advertionUrl) : this.props.onClick(t, e);
            }
        }, {
            key: "onImageLoad",
            value: (u = _asyncToGenerator(a.default.mark(function _callee(t, e) {
                var n, o, r, i = this;
                return a.default.wrap(function _callee$(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        return n = this.props.onLoad, o = this.state.heightList, t.next = 4, (0, s.getDom)("#bannerImage" + e, {
                            in: !0,
                            $scope: this.$scope,
                            selectAll: !1
                        });

                      case 4:
                        r = t.sent, o[e] = r.height, this.setState({
                            heightList: o
                        }), 0 === e && this.setState({
                            currentHeight: o[e]
                        }, function() {
                            n && i.props.onLoad();
                        });

                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, _callee, this);
            })), function onImageLoad(t, e) {
                return u.apply(this, arguments);
            })
        }, {
            key: "onChange",
            value: function onChange(t) {
                var e = t.target.current, n = this.props, onChange = n.onChange, o = n.data;
                onChange && "function" == typeof onChange && 0 <= e && this.props.onChange(o[e], e);
                var r = this.state, i = r.heightList, a = r.currentHeight, s = i[e];
                this.setState({
                    currentHeight: s || a,
                    heightList: i
                }, function() {});
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                var o = this;
                this.__state = t || this.state || {}, this.__props = e || this.props || {}, this.$prefix;
                var r = this.__props, i = r.data, a = r.indicatorDots, s = this.__state, u = s.currentHeight, p = s._indicatorDots;
                if (!i || !i.length) return null;
                var c = Object.assign({}, {
                    height: u + "px"
                }), l = void 0 !== a ? a : p, h = this.getClassName("swiper-container"), f = (0, 
                g.internal_inline_style)(c), _ = i ? i.map(function(t, e) {
                    t = {
                        $original: (0, g.internal_get_original)(t)
                    };
                    var n = "bcbzz" + e;
                    return o.anonymousFunc0Map[n] = function(t) {
                        return o.onImageLoad(t, e);
                    }, {
                        _$indexKey: n,
                        $original: t.$original
                    };
                }) : [];
                return Object.assign(this.__state, {
                    anonymousState__temp: h,
                    anonymousState__temp2: f,
                    loopArray31: _,
                    data: i,
                    finalIndicatorDots: l
                }), this.__state;
            }
        }, {
            key: "anonymousFunc0",
            value: function anonymousFunc0(t) {
                for (var e, n = arguments.length, o = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                return this.anonymousFunc0Map[t] && (e = this.anonymousFunc0Map)[t].apply(e, o);
            }
        } ]), SwiperComponent);
        function SwiperComponent() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, SwiperComponent);
            var o = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (SwiperComponent.__proto__ || Object.getPrototypeOf(SwiperComponent)).apply(this, arguments));
            return o.$usedState = [ "anonymousState__temp", "anonymousState__temp2", "loopArray31", "data", "finalIndicatorDots", "_indicatorDots", "currentHeight", "heightList", "height", "actions", "logEvent", "indicatorDots", "className" ], 
            o.getClassName = function(t) {
                var e = o.props.className, n = void 0 === e ? "" : e;
                return (0, i.default)(t, n);
            }, o.anonymousFunc0Map = {}, o.customComponents = [], o;
        }
        p.$$events = [ "onChange", "onClickBanner", "anonymousFunc0" ], p.$$componentPath = "packages/racoonjs/components/Swiper/index", 
        e.default = p, Component(n(0).default.createComponent(p));
    },
    586: function(t, e, n) {}
}, [ [ 585, 0, 1, 2, 3 ] ] ]);