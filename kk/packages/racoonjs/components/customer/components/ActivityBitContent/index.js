(wx.webpackJsonp = wx.webpackJsonp || []).push([ [ 47 ], {
    589: function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, c = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
            }
            return t;
        }, i = function(t, e, o) {
            return e && defineProperties(t.prototype, e), o && defineProperties(t, o), t;
        };
        function defineProperties(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                Object.defineProperty(t, n.key, n);
            }
        }
        var r = o(0), a = function _interopRequireDefault(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(r), s = o(1);
        o(590);
        var p = (function _inherits(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
        }(ActivityBitContent, r.Component), i(ActivityBitContent, [ {
            key: "_constructor",
            value: function _constructor(t) {
                (function get(t, e, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, e);
                    if (void 0 === n) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : get(i, e, o);
                    }
                    if ("value" in n) return n.value;
                    var r = n.get;
                    return void 0 !== r ? r.call(o) : void 0;
                })(ActivityBitContent.prototype.__proto__ || Object.getPrototypeOf(ActivityBitContent.prototype), "_constructor", this).call(this, t), 
                this.data = {
                    mapPositionType: {
                        1: 1,
                        2: 3,
                        3: 4
                    },
                    log: !1
                }, this.state = {
                    finalContentDetails: []
                }, this.$$refs = new a.default.RefsArray();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(t) {
                var o = this;
                if (t.contentPosition) {
                    var e = t.contentPosition, n = e.contentDetails, i = e.positionType, r = t.positionDefault, a = [];
                    if (n && 0 < n.length && n.forEach(function(t) {
                        if (o.activityIsEffective(t)) {
                            var e = c({}, t);
                            t.redirectType, a.push(e);
                        }
                    }), 0 != a.length) {
                        var s = this.data.mapPositionType[i];
                        r && r.forEach(function(t) {
                            var e = t.positionAddDefaultDetails && t.positionAddDefaultDetails.find(function(t) {
                                return t.picSizeType == s;
                            });
                            a.push({
                                detailValue: e ? e.picUrl : "",
                                detailUrl: t.defaultUrl
                            });
                        }), this.setState({
                            finalContentDetails: 1 == i ? a.slice(0, 2) : a.slice(0, 3)
                        }, function() {
                            o.sendLog();
                        });
                    }
                }
            }
        }, {
            key: "sendLog",
            value: function sendLog() {
                var t = this.props.actions;
                if (!this.data.log && t && t.$log) {
                    var e = this.state.finalContentDetails;
                    this.data.log = !0;
                    var o = [];
                    e.forEach(function(t) {
                        t.productIds && (o = o.concat(t.productIds));
                    }), t.$log.pushPageModule({
                        modelCode: "10050",
                        modelName: "活动位",
                        selector: ".activity_bit_box",
                        relateFromType: 2,
                        relateFromId: o,
                        component: this
                    });
                }
            }
        }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(t) {
                return t.productList !== this.props.productList || t.categoryList !== this.props.categoryList || t.positionDefault !== this.props.positionDefault || t.contentPosition !== this.props.contentPosition;
            }
        }, {
            key: "onImageLoad",
            value: function onImageLoad() {
                this.props.onLoad && this.props.onLoad();
            }
        }, {
            key: "activityIsEffective",
            value: function activityIsEffective(t) {
                var e = t.showType, o = t.productIds, n = t.typeIds, i = t.typeId, r = t.redirectType, a = t.otherRedirect, s = t.pcId, c = this.props.categoryList, p = !1;
                if (1 == e && o && 0 < o.length) p = !!this.findProductStock(o); else if (2 == e) {
                    if (c && s && c.find(function(t) {
                        return t.pcId == s;
                    })) return !0;
                    if (p = !!this.findCategoryId(n), c && c.find(function(t) {
                        return t.typeKey == a;
                    })) return !0;
                } else 3 == e && (p = !0);
                return p && 2 === r && !s && (p = !!this.findCategoryId(i)), p;
            }
        }, {
            key: "findProductStock",
            value: function findProductStock(t) {
                var o = this.props.productList;
                return t && t.find(function(e) {
                    return o.find(function(t) {
                        return t.productId == e && 0 < t.stockQuantity;
                    });
                });
            }
        }, {
            key: "findCategoryId",
            value: function findCategoryId(e) {
                var t = this.props.categoryList;
                return t && e ? "object" == (void 0 === e ? "undefined" : n(e)) ? e && e.find(function(e) {
                    return t.find(function(t) {
                        return t.typeId == e;
                    });
                }) : t.find(function(t) {
                    return t.typeId == e;
                }) : null;
            }
        }, {
            key: "_createType1Data",
            value: function _createType1Data() {
                var t = this;
                return function() {
                    return {
                        finalContentDetails: t.state.finalContentDetails
                    };
                };
            }
        }, {
            key: "_createType2Data",
            value: function _createType2Data() {
                var t = this;
                return function() {
                    return {
                        finalContentDetails: t.state.finalContentDetails
                    };
                };
            }
        }, {
            key: "_createType3Data",
            value: function _createType3Data() {
                var t = this;
                return function() {
                    return {
                        finalContentDetails: t.state.finalContentDetails
                    };
                };
            }
        }, {
            key: "_createData",
            value: function _createData(t, e, o) {
                this.__state = t || this.state || {}, this.__props = e || this.props || {};
                var n = this.$prefix, i = this.__props.contentPosition;
                if (!i) return null;
                var r = i.positionType, a = 1 === r ? this._createType1Data(n + "bcdzzzzzzz")() : null, s = 2 === r ? this._createType2Data(n + "bcezzzzzzz")() : null, c = 3 === r ? this._createType3Data(n + "bcfzzzzzzz")() : null;
                return Object.assign(this.__state, {
                    contentPosition: i,
                    positionType: r,
                    anonymousState__temp: a,
                    anonymousState__temp2: s,
                    anonymousState__temp3: c
                }), this.__state;
            }
        } ]), ActivityBitContent);
        function ActivityBitContent() {
            !function _classCallCheck(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, ActivityBitContent);
            var n = function _possibleConstructorReturn(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e;
            }(this, (ActivityBitContent.__proto__ || Object.getPrototypeOf(ActivityBitContent)).apply(this, arguments));
            return n.$usedState = [ "contentPosition", "positionType", "anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "finalContentDetails", "actions", "productList", "categoryList", "positionDefault" ], 
            n.onJumpUrl = function(t) {
                var e = t.typeId || t.typeIds || t.pcId || t.productIds || "";
                n.props.actions.$log.pushEvent({
                    eventCode: "10051",
                    eventName: "活动位点击",
                    relateFromId: e
                });
                var o = n.props.onScrollToType;
                "newProduct" == t.otherRedirect ? o && n.props.onScrollToType("newProduct") : t.pcId ? o && n.props.onScrollToType(t.pcId) : t.typeId ? o && n.props.onScrollToType(t.typeId) : t.detailUrl && s.feNavigator.jumpUrl(t.detailUrl);
            }, n.customComponents = [], n;
        }
        p.$$events = [ "onJumpUrl", "onImageLoad", "onJumpUrl", "onImageLoad", "onJumpUrl", "onImageLoad" ], 
        p.$$componentPath = "packages/racoonjs/components/customer/components/ActivityBitContent/index", 
        e.default = p, Component(o(0).default.createComponent(p));
    },
    590: function(t, e, o) {}
}, [ [ 589, 0, 1, 2, 3 ] ] ]);