(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 51 ], {
    587: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = _interopRequireDefault(n(3)), o = function(t, e, n) {
            return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
        };
        function defineProperties(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(t, o.key, o);
            }
        }
        var l = n(1), c = n(0), r = _interopRequireDefault(c);
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function _asyncToGenerator(t) {
            return function() {
                var i = t.apply(this, arguments);
                return new Promise(function(r, a) {
                    return function step(t, e) {
                        try {
                            var n = i[t](e), o = n.value;
                        } catch (t) {
                            return void a(t);
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
        n(588);
        var a = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(Borad, c.Component), o(Borad, [ {
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
                    var a = o.get;
                    return void 0 !== a ? a.call(n) : void 0;
                })(Borad.prototype.__proto__ || Object.getPrototypeOf(Borad.prototype), "_constructor", this).apply(this, arguments), 
                this.isGetElement = !1, this.index = -1, this.timer = null, this.broadcastItems = null, 
                this.state = {
                    hasTransition: !0,
                    animateStyle: {
                        top: 0
                    },
                    isPlayHorizontalAnimation: !1
                }, this.$$refs = new r.default.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(t) {
                var a = this;
                if (t.list && 0 < t.list.length && this.props.list !== t.list) {
                    var i = this.props.actions;
                    setTimeout(_asyncToGenerator(s.default.mark(function _callee() {
                        var e, n, o, r;
                        return s.default.wrap(function _callee$(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, l.getDom)(".broadcast_item", {
                                    in: !0,
                                    $scope: a.$scope,
                                    selectAll: !0
                                });

                              case 2:
                                return e = t.sent, t.next = 5, (0, l.getDom)(".broadcast_item_btn", {
                                    in: !0,
                                    $scope: a.$scope,
                                    selectAll: !1
                                });

                              case 5:
                                if (n = t.sent, a.broadcastItems = e, a.isGetElement = !0, a.index = 0, a.props.list && 0 < a.props.list.length && i && i.$log && i.$log.pushPageModule({
                                    modelCode: "10030",
                                    modelName: "通告",
                                    selector: ".broadcast_container",
                                    component: a
                                }), a.broadcastItems.length - 1 == 1) return o = e[0].width, r = n.width, clearInterval(a.timer), 
                                a.setState({
                                    isPlayHorizontalAnimation: o < r
                                }), t.abrupt("return");
                                t.next = 16;
                                break;

                              case 16:
                                if (a.timer) return t.abrupt("return");
                                t.next = 18;
                                break;

                              case 18:
                                a.setState({
                                    isPlayHorizontalAnimation: !1
                                }), a.timer = setInterval(function() {
                                    a.nextBroadcast();
                                }, 4e3);

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, _callee, a);
                    })), 100);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                clearInterval(this.timer);
            }
        }, {
            key: "nextBroadcast",
            value: function nextBroadcast() {
                var t = this;
                if (this.broadcastItems[0]) {
                    var e = this.broadcastItems[0].height;
                    this.index++, this.setState({
                        hasTransition: !0,
                        animateStyle: {
                            top: "-" + this.index * e + "px"
                        }
                    }), this.index >= this.broadcastItems.length - 1 && setTimeout(function() {
                        t.setState({
                            hasTransition: !1,
                            animateStyle: {
                                top: 0
                            }
                        }), t.index = 0;
                    }, 500);
                }
            }
        }, {
            key: "_createBroadcastsItemData",
            value: function _createBroadcastsItemData() {
                var s = this;
                return function(t) {
                    if (!t || 0 == t.length) return null;
                    var e = [].concat(function _toConsumableArray(t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                            return n;
                        }
                        return Array.from(t);
                    }(t), [ t[0] ]), n = s.state, o = n.hasTransition, r = n.animateStyle, a = n.isPlayHorizontalAnimation, i = s.props.isSchoolShelf;
                    return {
                        anonymousState__temp: (0, c.internal_inline_style)(r),
                        list: t,
                        hasTransition: o,
                        isSchoolShelf: i,
                        newList: e,
                        isOnlyOne: a
                    };
                };
            }
        }, {
            key: "onItemClick",
            value: function onItemClick(t) {
                this.props.actions.$log.pushEvent({
                    eventCode: "10031"
                }), t.contentDetail && t.contentDetail.detailUrl && l.feNavigator.jumpUrl(t.contentDetail.detailUrl);
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, n) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var o = this.$prefix, r = this.__props.list;
                if (!r || 0 == r.length) return null;
                var a = this._createBroadcastsItemData(o + "bcczzzzzzz")(r);
                return Object.assign(this.__state, {
                    list: r,
                    anonymousState__temp2: a
                }), this.__state;
            }
        } ]), Borad);
        function Borad() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, Borad);
            var t = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (Borad.__proto__ || Object.getPrototypeOf(Borad)).apply(this, arguments));
            return t.$usedState = [ "list", "anonymousState__temp2", "hasTransition", "animateStyle", "isPlayHorizontalAnimation", "actions", "isSchoolShelf" ], 
            t.handleTouchMove = function(t) {
                t.stopPropagation();
            }, t.customComponents = [], t;
        }
        a.$$events = [ "onItemClick", "handleTouchMove" ], a.$$componentPath = "packages/racoonjs/components/customer/components/Broadcast/index", 
        a.options = {
            addGlobalClass: !0
        }, e.default = a, Component(n(0).default.createComponent(a));
    },
    588: function(t, e, n) {}
}, [ [ 587, 0, 1, 2, 3 ] ] ]);