var e = require("../../wx_sub/dist/@babel/runtime/helpers/typeof");

!function(t) {
    var n = {};
    function i(e) {
        if (n[e]) return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
    }
    i.m = t, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(t, n) {
        if (1 & n && (t = i(t)), 8 & n) return t;
        if (4 & n && "object" == e(t) && t && t.__esModule) return t;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }), 2 & n && "string" != typeof t) for (var r in t) i.d(o, r, function(e) {
            return t[e];
        }.bind(null, r));
        return o;
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 1);
}([ function(e, t) {
    GameGlobal.sub = {}, sub.fitMode = 1, sub.designResolution = {
        width: 1280,
        height: 720
    }, sub.sysInfo = wx.getSystemInfoSync(), sub.canvas = wx.getSharedCanvas ? wx.getSharedCanvas() : wx.createCanvas(), 
    wx.getSharedCanvas || (sub.canvas.width = sub.sysInfo.pixelRatio * sub.canvas.width, 
    sub.canvas.height = sub.sysInfo.pixelRatio * sub.canvas.height), sub.ctx = sub.canvas.getContext("2d"), 
    sub.onCanvasSizeChange = function(e) {
        sub.designResolution = e, sub.scaleFactor = sub.canvas.height / sub.designResolution.height, 
        0 == sub.fitMode && (sub.scaleFactor = sub.canvas.width / sub.designResolution.width), 
        sub.display = {
            width: sub.canvas.width / sub.scaleFactor,
            height: sub.canvas.height / sub.scaleFactor
        };
    }, sub.onCanvasSizeChange(sub.designResolution), sub.p = function(e, t) {
        return {
            x: e,
            y: t
        };
    }, sub.size = function(e, t) {
        return {
            width: e,
            height: t
        };
    }, sub.rect = function(e, t, n, i) {
        return {
            x: e,
            y: t,
            width: n,
            height: i
        };
    }, sub.color = function(e, t, n, i) {
        return {
            r: e,
            g: t,
            b: n,
            a: i
        };
    }, sub.deg2rad = function(e) {
        return e / 180 * Math.PI;
    }, sub.pRotate = function(e, t, n) {
        var i = sub.p(t.x - e.x, t.y - e.y), o = sub.deg2rad(n), r = i.x * Math.cos(o) - i.y * Math.sin(o) + e.x, a = i.x * Math.sin(o) + i.y * Math.cos(o) + e.y;
        return sub.p(r, a);
    }, sub.screen2WorldPoint = function(e) {
        var t = e.x / sub.scaleFactor, n = (sub.canvas.height - e.y) / sub.scaleFactor;
        return sub.p(t, n);
    }, sub.world2ScreenPoint = function(e) {
        var t = e.x * sub.scaleFactor, n = sub.canvas.height - e.y * sub.scaleFactor;
        return sub.p(t, n);
    }, sub.screen2WorldSize = function(e) {
        var t = e.width / sub.scaleFactor, n = e.height / sub.scaleFactor;
        return sub.size(t, n);
    }, sub.world2ScreenSize = function(e) {
        var t = e.width * sub.scaleFactor, n = e.height * sub.scaleFactor;
        return sub.size(t, n);
    }, sub.pSub = function(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        };
    }, sub.pGetLengh = function(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }, sub.pGetDistance = function(e, t) {
        return sub.pGetLengh(sub.pSub(e, t));
    };
}, function(t, n, i) {
    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    i.r(n), i(0);
    var a = null, s = function() {
        function e() {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), a) throw new Error('sub.Loader is a singleton object, please use "sub.Loader.instance" instead.');
            this._resMap = new Map();
        }
        var t, n, i;
        return t = e, i = [ {
            key: "instance",
            get: function() {
                return a || (a = new e()), a;
            }
        } ], (n = [ {
            key: "load",
            value: function(e, t) {
                var n = this;
                if ("string" == typeof e) {
                    if (this.getImage(e)) return void t();
                    var i = wx.createImage();
                    i.src = e, i.onload = function() {
                        this._resMap.set(e, i), t();
                    }.bind(this);
                }
                if (Array.isArray(e)) {
                    var r = function() {
                        if (0 == (e = e.filter(function(e) {
                            return !this.getImage(e);
                        }.bind(n))).length) return t(), {
                            v: void 0
                        };
                        for (var i = 0, o = function() {
                            ++i == e.length && t();
                        }, r = function(t) {
                            if (n.getImage(e[t])) return o(), "continue";
                            var i = e[t], r = wx.createImage();
                            r.src = i, r.onload = function() {
                                this._resMap.set(i, r), o();
                            }.bind(n);
                        }, a = 0; a < e.length; a++) r(a);
                    }();
                    if ("object" === o(r)) return r.v;
                }
            }
        }, {
            key: "getImage",
            value: function(e) {
                return this._resMap.has(e) ? this._resMap.get(e) : null;
            }
        } ]) && r(t.prototype, n), i && r(t, i), e;
    }();
    function u(t) {
        return (u = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    var c = null, l = function() {
        function e() {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), c) throw new Error('sub.Ticker is a singleton object, please use "sub.Ticker.instance" instead.');
            this.__now__ = 0, this.__last__ = 0, this.__dt__ = 0, this.__linteners__ = new Array(), 
            this._start();
        }
        var t, n, i;
        return t = e, i = [ {
            key: "instance",
            get: function() {
                return c || (c = new e()), c;
            }
        } ], (n = [ {
            key: "tick",
            value: function(e) {
                if ("function" == !u(e)) throw new Error("Invaild argument.");
                return -1 != this.__linteners__.indexOf(e) || this.__linteners__.push(e), e;
            }
        }, {
            key: "untick",
            value: function(e) {
                if ("function" == !u(e)) throw new Error("Invaild argument.");
                var t = this.__linteners__.indexOf(e);
                -1 != t && this.__linteners__.splice(t, 1);
            }
        }, {
            key: "_start",
            value: function() {
                this.__last__ = new Date().getTime(), requestAnimationFrame(this._loop.bind(this));
            }
        }, {
            key: "_loop",
            value: function() {
                var e = this;
                this.__now__ = new Date().getTime(), this.__dt__ = (this.__now__ - this.__last__) / 1e3, 
                this.__linteners__.forEach(function(t) {
                    t(e.__dt__);
                }), this.__last__ = this.__now__, requestAnimationFrame(this._loop.bind(this));
            }
        } ]) && _(t.prototype, n), i && _(t, i), e;
    }();
    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    var f = null, b = function() {
        function e() {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), f) throw new Error('sub.InputManager is a singleton object, please use "sub.InputManager.instance" instead.');
            this.__listeners__ = new Array(), wx.onTouchStart(function(t) {
                this._dispatchTouchEvent(t, e.TOUCH_PHASE.BEGAN);
            }.bind(this)), wx.onTouchMove(function(t) {
                this._dispatchTouchEvent(t, e.TOUCH_PHASE.MOVED);
            }.bind(this)), wx.onTouchEnd(function(t) {
                this._dispatchTouchEvent(t, e.TOUCH_PHASE.ENDED);
            }.bind(this)), wx.onTouchCancel(function(t) {
                this._dispatchTouchEvent(t, e.TOUCH_PHASE.CANCELED);
            }.bind(this));
        }
        var t, n, i;
        return t = e, i = [ {
            key: "instance",
            get: function() {
                return f || (f = new e()), f;
            }
        } ], (n = [ {
            key: "addListener",
            value: function(e) {
                if ("function" != typeof e) throw new Error("Invaild argument.");
                return -1 != this.__listeners__.indexOf(e) || this.__listeners__.push(e), e;
            }
        }, {
            key: "removeListener",
            value: function(e) {
                if ("function" != typeof e) throw new Error("Invaild argument.");
                var t = this.__listeners__.indexOf(e);
                -1 != t && this.__listeners__.splice(t, 1);
            }
        }, {
            key: "_dispatchTouchEvent",
            value: function(e, t) {
                var n = e.changedTouches;
                if (!n) throw new Error("Input error: cannot get the touch data.");
                var i = n[0].clientX * sub.sysInfo.pixelRatio, o = n[0].clientY * sub.sysInfo.pixelRatio, r = sub.p(i, o), a = sub.screen2WorldPoint(r), s = {
                    phase: t,
                    id: n[0].identifier,
                    screenPos: r,
                    worldPos: a
                };
                this.__listeners__.forEach(function(e) {
                    e(s);
                });
            }
        } ]) && h(t.prototype, n), i && h(t, i), e;
    }();
    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    b.TOUCH_PHASE = {
        BEGAN: 0,
        MOVED: 1,
        ENDED: 2,
        CANCELED: 3
    };
    var d = null, v = function() {
        function e() {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), d) throw new Error('sub.MessageManager is a singleton object, please use "sub.MessageManager.instance" instead.');
            this.__listeners__ = new Array(), wx.onMessage(function(e) {
                this.__listeners__.forEach(function(t) {
                    t(e);
                });
            }.bind(this));
        }
        var t, n, i;
        return t = e, i = [ {
            key: "instance",
            get: function() {
                return d || (d = new e()), d;
            }
        } ], (n = [ {
            key: "addListener",
            value: function(e) {
                if ("function" != typeof e) throw new Error("Invaild argument.");
                return -1 != this.__listeners__.indexOf(e) || this.__listeners__.push(e), e;
            }
        }, {
            key: "removeListener",
            value: function(e) {
                if ("function" != typeof e) throw new Error("Invaild argument.");
                var t = this.__listeners__.indexOf(e);
                -1 != t && this.__listeners__.splice(t, 1);
            }
        } ]) && p(t.prototype, n), i && p(t, i), e;
    }();
    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    var g = function() {
        function e(t) {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), t) {
                var n = t.a && t.a / 255 || 1;
                this.__color__ = sub.color(t.r, t.g, t.b, n);
            }
            this.__renderingContext__ = void 0, this.__visible__ = !0, this.__localPos__ = sub.p(0, 0), 
            this.__anchor__ = sub.p(0, 0), this.__layout__ = void 0, this.__size__ = sub.size(0, 0), 
            this.__scaleX__ = 1, this.__scaleY__ = 1, this.__rotation__ = 0, this.__parent__ = void 0, 
            this.__children__ = new Array(), this.__swallowTouches__ = !1;
        }
        var t, n;
        return t = e, (n = [ {
            key: "setVisible",
            value: function(e) {
                this.__visible__ = e, this._dispatchRenderEvent();
            }
        }, {
            key: "isVisible",
            value: function() {
                return this.__visible__;
            }
        }, {
            key: "addChild",
            value: function(e) {
                if (e.__parent__) throw new Error("Error: Add child failed, the child node ettempts to add had aleardy bean added.");
                e._setParent(this), this.__children__.push(e), this._dispatchRenderEvent();
            }
        }, {
            key: "removeChild",
            value: function(e) {
                if (e.__parent__ != this) throw new Error("Error: Remove child failed, the child node attempts to remove is not parented by the current node.");
                e._setParent(void 0);
                var t = this.__children__.indexOf(e);
                this.__children__.splice(t, 1), this._dispatchRenderEvent();
            }
        }, {
            key: "getChild",
            value: function() {
                return this.__children__;
            }
        }, {
            key: "getParent",
            value: function() {
                return this.__parent__;
            }
        }, {
            key: "setPosition",
            value: function(e, t) {
                this.__layout__ = void 0, this.__localPos__ = void 0 === t ? e : sub.p(e, t), this._dispatchRenderEvent();
            }
        }, {
            key: "getPosition",
            value: function() {
                return this.__localPos__;
            }
        }, {
            key: "getWorldPosition",
            value: function() {
                return this._getWorldPos(!0);
            }
        }, {
            key: "setLayout",
            value: function(e) {
                this.__layout__ = e, this.__parent__ && (this._updatePosWithLayout(this.__layout__), 
                this.__layout__ = void 0), this._dispatchRenderEvent();
            }
        }, {
            key: "setScale",
            value: function(e, t) {
                void 0 === t ? this.__scaleX__ = this.__scaleY__ = e : (this.__scaleX__ = e, this.__scaleY__ = t), 
                this._dispatchRenderEvent();
            }
        }, {
            key: "getScale",
            value: function() {
                return sub.p(this.__scaleX__, this.__scaleY__);
            }
        }, {
            key: "getWorldScale",
            value: function() {
                return this._getRealScale();
            }
        }, {
            key: "setRotation",
            value: function(e) {
                this.__rotation__ = e, this._dispatchRenderEvent();
            }
        }, {
            key: "getRotation",
            value: function() {
                return this.__rotation__;
            }
        }, {
            key: "getWorldRotation",
            value: function() {
                return this._getRealRotation();
            }
        }, {
            key: "setAnchorPoint",
            value: function(e, t) {
                this.__anchor__ = void 0 === t ? e : sub.p(e, t), this._dispatchRenderEvent();
            }
        }, {
            key: "getAnchorPoint",
            value: function() {
                return this.__anchor__;
            }
        }, {
            key: "setContentSize",
            value: function(e, t) {
                this.__size__ = void 0 === t ? e : sub.size(e, t), this._dispatchRenderEvent();
            }
        }, {
            key: "getContentSize",
            value: function() {
                return this.__size__;
            }
        }, {
            key: "setOpacity",
            value: function(e) {
                this.__opacity__ = e, this._dispatchRenderEvent();
            }
        }, {
            key: "getOpacity",
            value: function() {
                return this.__opacity__;
            }
        }, {
            key: "enableClipMode",
            value: function() {
                this.__clip__ = !0, this._dispatchRenderEvent();
            }
        }, {
            key: "setClipCornerRadius",
            value: function(e) {
                this.__clipRadius__ = e;
            }
        }, {
            key: "setSwallowTouches",
            value: function(e) {
                this.__swallowTouches__ = e;
            }
        }, {
            key: "isSwallowTouches",
            value: function() {
                return this.__swallowTouches__;
            }
        }, {
            key: "containsPoint",
            value: function(e, t) {
                var n;
                n = void 0 === t ? e : sub.p(e, t);
                var i = sub.world2ScreenPoint(n);
                return this._containsScreenPoint(i.x, i.y);
            }
        }, {
            key: "_containsScreenPoint",
            value: function(e, t) {
                var n = this._getTouchableRect(), i = this._getWorldPos(!0), o = sub.world2ScreenPoint(i), r = sub.p(n.x, n.y), a = sub.p(n.x + n.width, n.y), s = sub.p(n.x, n.y + n.height), u = sub.p(n.x + n.width, n.y + n.height), _ = this._getRealRotation();
                _ % 360 != 0 && (r = sub.pRotate(o, r, _), a = sub.pRotate(o, a, _), s = sub.pRotate(o, s, _), 
                u = sub.pRotate(o, u, _));
                var c = Math.min(r.x, a.x, s.x, u.x), l = Math.max(r.x, a.x, s.x, u.x), h = Math.min(r.y, a.y, s.y, u.y), f = Math.max(r.y, a.y, s.y, u.y);
                return e >= c && e <= l && t >= h && t <= f;
            }
        }, {
            key: "_draw",
            value: function() {
                if (this.__renderingContext__ && this.__visible__) {
                    this.__renderingContext__.save();
                    var e = this.__opacity__ || this.__parent__ && this.__parent__.__opacity__ || 1;
                    this.__renderingContext__.globalAlpha = e;
                    var t = this._getWorldPos(), n = sub.world2ScreenPoint(t);
                    this.__renderingContext__.translate(n.x, n.y), this.__renderingContext__.rotate(this.__rotation__ * Math.PI / 180), 
                    this.__renderingContext__.scale(this.__scaleX__, this.__scaleY__), this.__renderingContext__.translate(-n.x, -n.y);
                    var i = this._getScreenRect(), o = i.x, r = i.y, a = i.width, s = i.height;
                    if (this.__color__) {
                        this.__renderingContext__.beginPath();
                        var u = "rgba(" + this.__color__.r + "," + this.__color__.g + "," + this.__color__.b + "," + this.__color__.a + ")";
                        this.__renderingContext__.fillStyle = u, this.__renderingContext__.fillRect(o, r, a, s);
                    }
                    this.__clip__ && (this.__clipRadius__ ? this._drawRoundedRect(this.__renderingContext__, i, this.__clipRadius__ * sub.scaleFactor) : (this.__renderingContext__.beginPath(), 
                    this.__renderingContext__.rect(o, r, a, s)), this.__renderingContext__.clip());
                    for (var _ = 0; _ < this.__children__.length; _++) this.__children__[_]._draw();
                    this.__renderingContext__.restore();
                }
            }
        }, {
            key: "_setParent",
            value: function(e) {
                if (null == e) return this.__parent__ = void 0, void (this.__renderingContext__ = void 0);
                this.__parent__ = e, this.__renderingContext__ = this.__parent__.__renderingContext__;
                for (var t = this._getAllChildren(), n = 0; n < t.length; n++) t[n].__renderingContext__ = this.__renderingContext__;
            }
        }, {
            key: "_getWorldPos",
            value: function(e) {
                if (!this.__parent__) return this.__localPos__;
                this.__layout__ && (this._updatePosWithLayout(this.__layout__), this.__layout__ = void 0);
                var t = this.__parent__._getRealScale(), n = e && t.x || 1, i = e && t.y || 1, o = this.__parent__._getWorldPos(e), r = this.__parent__.getAnchorPoint(), a = this.__parent__.getContentSize(), s = a.width * n, u = a.height * i, _ = o.x - r.x * s, c = o.y - r.y * u, l = _ + this.__localPos__.x * n, h = c + this.__localPos__.y * i, f = sub.p(l, h);
                if (e) {
                    var b = this.__parent__._getRealRotation(), p = sub.world2ScreenPoint(o), d = sub.world2ScreenPoint(f);
                    f = sub.pRotate(p, d, b), f = sub.screen2WorldPoint(f);
                }
                return f;
            }
        }, {
            key: "_updatePosWithLayout",
            value: function(e) {
                var t = this.__parent__.getContentSize(), n = e.x, i = e.y, o = e.width, r = e.height, a = t.width * n + o, s = t.height * i + r;
                this.__localPos__ = sub.p(a, s);
            }
        }, {
            key: "_getScreenRect",
            value: function(e) {
                var t = e && Math.abs(e.x) || 1, n = e && Math.abs(e.y) || 1, i = this._getWorldPos(void 0 !== e), o = sub.world2ScreenPoint(i), r = sub.world2ScreenSize(this.__size__), a = e && e.x < 0 ? 1 - this.__anchor__.x : this.__anchor__.x, s = e && e.y < 0 ? this.__anchor__.y : 1 - this.__anchor__.y, u = o.x - a * r.width * t, _ = o.y - s * r.height * n, c = r.width * t, l = r.height * n;
                return sub.rect(u, _, c, l);
            }
        }, {
            key: "_getTouchableRect",
            value: function() {
                var e = this._getRealScale();
                return this._getScreenRect(e);
            }
        }, {
            key: "_getRealScale",
            value: function() {
                if (!this.__parent__) return sub.p(this.__scaleX__, this.__scaleY__);
                var e = this.__parent__._getRealScale();
                return sub.p(e.x * this.__scaleX__, e.y * this.__scaleY__);
            }
        }, {
            key: "_getRealRotation",
            value: function() {
                if (!this.__parent__) return this.__rotation__;
                var e = this.__parent__._getRealRotation();
                return this.__rotation__ + e;
            }
        }, {
            key: "_dispatchRenderEvent",
            value: function() {
                !this.__parent__ && this.setDirty ? this.setDirty() : this.__parent__ && this.__parent__._dispatchRenderEvent();
            }
        }, {
            key: "_getAllChildren",
            value: function(e) {
                for (var t = e || new Array(), n = 0; n < this.__children__.length; n++) {
                    var i = this.__children__[n];
                    t.push(i), i._getAllChildren(t);
                }
                return t;
            }
        }, {
            key: "_getClippingParents",
            value: function(e) {
                var t = e || new Array();
                return this.__parent__ ? (this.__parent__.__clip__ && t.push(this.__parent__), this.__parent__._getClippingParents(t), 
                t) : t;
            }
        }, {
            key: "_drawRoundedRect",
            value: function(e, t, n) {
                var i = sub.p(t.x + n, t.y), o = sub.p(t.x + t.width, t.y), r = sub.p(t.x + t.width, t.y + t.height), a = sub.p(t.x, t.y + t.height), s = sub.p(t.x, t.y);
                e.beginPath(), e.moveTo(i.x, i.y), e.arcTo(o.x, o.y, r.x, r.y, n), e.arcTo(r.x, r.y, a.x, a.y, n), 
                e.arcTo(a.x, a.y, s.x, s.y, n), e.arcTo(s.x, s.y, i.x, i.y, n);
            }
        } ]) && y(t.prototype, n), e;
    }();
    function m(t) {
        return (m = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function w(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function S(e) {
        return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function k(e, t) {
        return (k = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    g.prototype.addTo = function(e) {
        return e.addChild(this), this;
    }, g.prototype.move = function(e, t) {
        return this.setPosition(e, t), this;
    }, g.prototype.anchor = function(e, t) {
        return this.setAnchorPoint(e, t), this;
    }, g.prototype.layout = function(e, t, n) {
        var i = sub.p(0, 0);
        null != t && null != n ? (i.x = t, i.y = n) : null != t && null == n && (i = t);
        var o = sub.rect(e.x, e.y, i.x, i.y);
        return this.setLayout(o), this;
    }, g.prototype.scale = function(e, t) {
        return this.setScale(e, t), this;
    }, g.prototype.size = function(e, t) {
        return this.setContentSize(e, t), this;
    }, g.prototype.rotate = function(e) {
        return this.setRotation(e), this;
    }, g.prototype.opacity = function(e) {
        return this.setOpacity(e), this;
    }, g.prototype.visible = function(e) {
        return this.setVisible(e), this;
    }, g.prototype.clipping = function() {
        return this.enableClipMode(), this;
    }, g.prototype.removeSelf = function() {
        this.__parent__ && this.__parent__.removeChild(this);
    };
    var C = function(e) {
        function t() {
            var e;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (e = function(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, S(t).call(this))).__dirty__ = !0, e.__renderingContext__ = sub.ctx, e.setContentSize(sub.display.width, sub.display.height), 
            e.enableMessageEvents(), e;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && k(e, t);
        }(t, e), n = t, (i = [ {
            key: "setDirty",
            value: function() {
                this.__dirty__ = !0;
            }
        }, {
            key: "clearScreen",
            value: function() {
                this.__renderingContext__.clearRect(0, 0, sub.canvas.width, sub.canvas.height);
            }
        }, {
            key: "enableScheduler",
            value: function() {
                this.__scheduleHander__ = sub.Ticker.instance.tick(function(e) {
                    this.update && this.update(e);
                    for (var t = this._getAllChildren(), n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.update && i.update(e);
                    }
                    this.__dirty__ && (this._render(), this.__dirty__ = !1);
                }.bind(this));
            }
        }, {
            key: "disableScheduler",
            value: function() {
                this.__scheduleHander__ && (sub.Ticker.instance.untick(this.__scheduleHander__), 
                this.__scheduleHander__ = null);
            }
        }, {
            key: "enableTouchEvents",
            value: function() {
                this.__touchEventListener__ || (this.__touchEventListener__ = sub.InputManager.instance.addListener(this._dispatchTouchEvent.bind(this)));
            }
        }, {
            key: "disableTouchEvents",
            value: function() {
                this.__touchEventListener__ && (sub.InputManager.instance.removeListener(this.__touchEventListener__), 
                this.__touchEventListener__ = null);
            }
        }, {
            key: "enableMessageEvents",
            value: function() {
                this.__messageEventListener__ || (this.__messageEventListener__ = sub.MessageManager.instance.addListener(this._dispatchMessageEvent.bind(this)));
            }
        }, {
            key: "disableMessageEvents",
            value: function() {
                this.__messageEventListener__ && (sub.MessageManager.instance.removeListener(this.__messageEventListener__), 
                this.__messageEventListener__ = null);
            }
        }, {
            key: "setTouchOffset",
            value: function(e) {
                this._touchOffset = e;
            }
        }, {
            key: "_convertTouchData",
            value: function(e) {
                this._touchOffset && (e.worldPos.x = e.worldPos.x - this._touchOffset.x, e.worldPos.y = e.worldPos.y + this._touchOffset.y, 
                e.screenPos = sub.world2ScreenPoint(e.worldPos));
            }
        }, {
            key: "_dispatchTouchEvent",
            value: function(e) {
                this._convertTouchData(e);
                var t = e.phase;
                t == sub.InputManager.TOUCH_PHASE.BEGAN && (this.__blockOrder__ = 0);
                for (var n = this._getAllChildren(), i = n.length - 1; i >= this.__blockOrder__; i--) {
                    var o = n[i];
                    if (o.onTouchBegan) {
                        for (var r = e.screenPos, a = e.worldPos, s = o._containsScreenPoint(r.x, r.y), u = o._getClippingParents(), _ = !1, c = 0; c < u.length; c++) if (!u[c].containsPoint(a)) {
                            _ = !0;
                            break;
                        }
                        switch (t) {
                          case sub.InputManager.TOUCH_PHASE.BEGAN:
                            if (_) continue;
                            o.onTouchBegan && o.onTouchBegan(e);
                            break;

                          case sub.InputManager.TOUCH_PHASE.MOVED:
                            if (_) {
                                o.onTouchCanceled && o.onTouchCanceled(e);
                                continue;
                            }
                            o.onTouchMoved && o.onTouchMoved(e);
                            break;

                          case sub.InputManager.TOUCH_PHASE.ENDED:
                            if (_) continue;
                            o.onTouchEnded && o.onTouchEnded(e);
                            break;

                          case sub.InputManager.TOUCH_PHASE.CANCELED:
                            if (_) continue;
                            o.onTouchCanceled && o.onTouchCanceled(e);
                        }
                        if (s && o.isSwallowTouches() && t == sub.InputManager.TOUCH_PHASE.BEGAN) {
                            this.__blockOrder__ = i;
                            break;
                        }
                    }
                }
            }
        }, {
            key: "_dispatchMessageEvent",
            value: function(e) {
                this.onMessage && this.onMessage(e), this._getAllChildren().forEach(function(t) {
                    t.onMessage && t.onMessage(e);
                });
            }
        }, {
            key: "_render",
            value: function() {
                this.__renderingContext__.clearRect(0, 0, sub.canvas.width, sub.canvas.height), 
                this.__renderingContext__.globalAlpha = 0, this._draw();
            }
        } ]) && w(n.prototype, i), t;
    }(g);
    function O(t) {
        return (O = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var P = 0, R = 1, I = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, E(t).call(this))).__imgLoaded__ = !1, n.__mode__ = P, e && n.loadImage(e), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t);
        }(t, e), n = t, (i = [ {
            key: "loadImage",
            value: function(e) {
                this.__img__ = sub.Loader.instance.getImage(e), this.__img__ ? (this.__size__ = sub.size(this.__img__.width, this.__img__.height), 
                this.__imgLoaded__ = !0) : sub.Loader.instance.load(e, function() {
                    if (this.__img__ = sub.Loader.instance.getImage(e), 0 == this.__size__.width && 0 == this.__size__.height && (this.__size__ = sub.size(this.__img__.width, this.__img__.height)), 
                    this.__mode__ == R && !this.__stretchRect__) {
                        var t = (this.__img__.width - 2) / 2, n = (this.__img__.height - 2) / 2;
                        this.__stretchRect__ = sub.rect(t, n, 2, 2);
                    }
                    this.__imgLoaded__ = !0, this.onload && this.onload(), this._dispatchRenderEvent();
                }.bind(this));
            }
        }, {
            key: "setContentSize",
            value: function(e, t) {
                if (this.__mode__ == R) {
                    var n;
                    n = void 0 === t ? e : sub.size(e, t), this.__size__ = n, this._dispatchRenderEvent();
                }
            }
        }, {
            key: "setScale9Enabled",
            value: function(e) {
                if (this.__mode__ = e ? R : P, this.__img__) {
                    if (this.__mode__ == R && !this.__stretchRect__) {
                        var t = (this.__img__.width - 2) / 2, n = (this.__img__.height - 2) / 2;
                        this.__stretchRect__ = sub.rect(t, n, 2, 2);
                    }
                    this._dispatchRenderEvent();
                }
            }
        }, {
            key: "setCapInserts",
            value: function(e) {
                this.__stretchRect__ = e, this._dispatchRenderEvent();
            }
        }, {
            key: "isImgLoaded",
            value: function() {
                return this.__imgLoaded__;
            }
        }, {
            key: "_draw",
            value: function() {
                if (this.__renderingContext__ && this.__img__ && this.__visible__) {
                    this.__renderingContext__.save();
                    var e = this.__opacity__ || this.__parent__ && this.__parent__.__opacity__ || 1;
                    this.__renderingContext__.globalAlpha = e;
                    var t = this._getWorldPos(), n = sub.world2ScreenPoint(t);
                    this.__renderingContext__.translate(n.x, n.y), this.__renderingContext__.rotate(this.__rotation__ * Math.PI / 180), 
                    this.__renderingContext__.scale(this.__scaleX__, this.__scaleY__), this.__renderingContext__.translate(-n.x, -n.y);
                    var i = this._getScreenRect(), o = i.x, r = i.y, a = i.width, s = i.height;
                    this.__mode__ == P ? this.__renderingContext__.drawImage(this.__img__, o, r, a, s) : this.__mode__ == R && this._drawWithSliceMode(), 
                    this.__clip__ && (this.__renderingContext__.beginPath(), this.__renderingContext__.rect(o, r, a, s), 
                    this.__renderingContext__.clip());
                    for (var u = 0; u < this.__children__.length; u++) this.__children__[u]._draw();
                    this.__renderingContext__.restore();
                }
            }
        }, {
            key: "_drawWithSliceMode",
            value: function() {
                if (this.__mode__ == R && this.__stretchRect__) {
                    var e = this._getScreenRect(), t = this.__stretchRect__;
                    e.x = Math.ceil(e.x), e.y = Math.ceil(e.y), e.width = Math.floor(e.width), e.height = Math.floor(e.height);
                    var n = t.x, i = t.width, o = this.__img__.width - n - i, r = t.y, a = t.height, s = this.__img__.height - r - a, u = Math.floor(n * sub.scaleFactor), _ = Math.floor(o * sub.scaleFactor), c = e.width - u - _, l = Math.floor(r * sub.scaleFactor), h = Math.floor(s * sub.scaleFactor), f = e.height - l - h, b = n, p = r, d = e.x, v = e.y, y = u, g = l;
                    this.__renderingContext__.drawImage(this.__img__, 0, 0, b, p, d, v, y, g);
                    var m = n + i, w = o, S = r, k = e.x + u + c, C = e.y, O = _, x = l;
                    this.__renderingContext__.drawImage(this.__img__, m, 0, w, S, k, C, O, x);
                    var E = n, T = i, P = r, I = e.x + u, D = e.y, V = c, j = l;
                    this.__renderingContext__.drawImage(this.__img__, E, 0, T, P, I, D, V, j);
                    var A = r + a, z = n, L = s, N = e.x, M = e.y + l + f, F = u, B = h;
                    this.__renderingContext__.drawImage(this.__img__, 0, A, z, L, N, M, F, B);
                    var U = n + i, G = r + a, K = o, H = s, X = e.x + u + c, Y = e.y + l + f, W = _, q = h;
                    this.__renderingContext__.drawImage(this.__img__, U, G, K, H, X, Y, W, q);
                    var Q = n, Z = r + a, J = i, $ = s, ee = e.x + u, te = e.y + l + f, ne = c, ie = h;
                    this.__renderingContext__.drawImage(this.__img__, Q, Z, J, $, ee, te, ne, ie);
                    var oe = r, re = n, ae = a, se = e.x, ue = e.y + l, _e = u, ce = f;
                    this.__renderingContext__.drawImage(this.__img__, 0, oe, re, ae, se, ue, _e, ce);
                    var le = n + i, he = r, fe = o, be = a, pe = e.x + u + c, de = e.y + l, ve = _, ye = f;
                    this.__renderingContext__.drawImage(this.__img__, le, he, fe, be, pe, de, ve, ye);
                    var ge = n, me = r, we = i, Se = a, ke = e.x + u, Ce = e.y + l, Oe = c, xe = f;
                    this.__renderingContext__.drawImage(this.__img__, ge, me, we, Se, ke, Ce, Oe, xe);
                }
            }
        } ]) && x(n.prototype, i), t;
    }(g);
    function D(t) {
        return (D = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function V(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function j(e) {
        return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var z = function(e) {
        function t(e, n, i) {
            var o;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (o = function(e, t) {
                return !t || "object" !== D(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, j(t).call(this))).__text__ = e || "", o.__fontSize__ = n || 20, o.__fontColor__ = i || sub.color(255, 255, 255, 255), 
            o.__fontFamily__ = "Arial", o._measure(), o;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t);
        }(t, e), n = t, (i = [ {
            key: "setFontSize",
            value: function(e) {
                this.__fontSize__ = e, this._measure(), this._dispatchRenderEvent();
            }
        }, {
            key: "getFontSize",
            value: function() {
                return this.__fontSize__;
            }
        }, {
            key: "setFontColor",
            value: function(e) {
                this.__fontColor__ = e, this._dispatchRenderEvent();
            }
        }, {
            key: "getFontColor",
            value: function() {
                return this.__fontColor__;
            }
        }, {
            key: "setText",
            value: function(e) {
                this.__text__ = e, this._measure(), this._dispatchRenderEvent();
            }
        }, {
            key: "getText",
            value: function() {
                return this.__text__;
            }
        }, {
            key: "setContentSize",
            value: function(e) {}
        }, {
            key: "_measure",
            value: function() {
                sub.ctx.save(), sub.ctx.font = this.__fontSize__ * sub.scaleFactor + "px " + this.__fontFamily__;
                var e = sub.ctx.measureText(this.__text__).width / sub.scaleFactor, t = 1.2 * this.__fontSize__;
                this.__size__ = sub.size(e, t), sub.ctx.restore();
            }
        }, {
            key: "_draw",
            value: function() {
                if (this.__renderingContext__ && this.__visible__) {
                    this.__renderingContext__.save();
                    var e = this.__opacity__ || this.__parent__ && this.__parent__.__opacity__ || 1;
                    this.__renderingContext__.globalAlpha = e;
                    var t = this._getWorldPos(), n = sub.world2ScreenPoint(t);
                    this.__renderingContext__.translate(n.x, n.y), this.__renderingContext__.rotate(this.__rotation__ * Math.PI / 180), 
                    this.__renderingContext__.scale(this.__scaleX__, this.__scaleY__), this.__renderingContext__.translate(-n.x, -n.y);
                    var i = this._getScreenRect(), o = i.x, r = i.y;
                    this.__renderingContext__.font = this.__fontSize__ * sub.scaleFactor + "px " + this.__fontFamily__;
                    var a = this.__fontColor__.a && this.__fontColor__.a / 255 || 1, s = "rgba(" + this.__fontColor__.r + "," + this.__fontColor__.g + "," + this.__fontColor__.b + "," + a + ")";
                    this.__renderingContext__.fillStyle = s, this.__renderingContext__.textBaseline = "top", 
                    this.__renderingContext__.fillText(this.__text__, o, r), this.__clip__ && (this.__renderingContext__.beginPath(), 
                    this.__renderingContext__.rect(o, r, width, height), this.__renderingContext__.clip());
                    for (var u = 0; u < this.__children__.length; u++) this.__children__[u]._draw();
                    this.__renderingContext__.restore();
                }
            }
        } ]) && V(n.prototype, i), t;
    }(g);
    function L(t) {
        return (L = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function N(e) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function M(e, t) {
        return (M = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    z.prototype.text = function(e) {
        return this.setText(e), this;
    }, z.prototype.fontSize = function(e) {
        return this.setFontSize(e), this;
    }, z.prototype.fontColor = function(e) {
        return this.setFontColor(e), this;
    };
    var F = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== L(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, N(t).call(this, e))).setScale9Enabled(!0), n;
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && M(e, t);
        }(t, e), t;
    }(I);
    function B(t) {
        return (B = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function U(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function G(e) {
        return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function K(e, t) {
        return (K = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var H = function(e) {
        function t() {
            var e;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (e = function(e, t) {
                return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, G(t).call(this))).clipping(), e.__container__ = null, e.__direction__ = t.VERTICAL, 
            e.__lastTouchPos__ = null, e.__moveDelta__ = sub.p(0, 0), e.setSwallowTouches(!0), 
            e;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && K(e, t);
        }(t, e), n = t, (i = [ {
            key: "setContainer",
            value: function(e) {
                this.__container__ && (this.__container__.removeSelf(), this.__container__ = null), 
                this.__container__ = e, this.addChild(this.__container__);
            }
        }, {
            key: "getContainer",
            value: function() {
                return this.__container__;
            }
        }, {
            key: "setDirection",
            value: function(e) {
                this.__direction__ = e;
            }
        }, {
            key: "onTouchBegan",
            value: function(e) {
                var t = this.containsPoint(e.worldPos), n = this.isVisible();
                this.__passing__ = t && n, this.__moveDelta__ = sub.p(0, 0), this.__passing__ && (this.__lastTouchPos__ = e.worldPos, 
                this.__touching__ = !0);
            }
        }, {
            key: "onTouchMoved",
            value: function(e) {
                if (this.__passing__ && null != this.__lastTouchPos__) {
                    var n = 0, i = 0;
                    this.__direction__ == t.HORIZONTAL && (n = e.worldPos.x - this.__lastTouchPos__.x), 
                    this.__direction__ == t.VERTICAL && (i = e.worldPos.y - this.__lastTouchPos__.y), 
                    this.__moveDelta__ = sub.p(n, i), this.__lastTouchPos__ = e.worldPos;
                    var o = this.__container__.getPosition(), r = (this.__container__.getContentSize(), 
                    sub.p(o.x + n, o.y + i));
                    this.__container__.move(r);
                }
            }
        }, {
            key: "onTouchEnded",
            value: function(e) {
                this.__lastTouchPos__ = null, this.__passing__ && (this.__touching__ = !1);
            }
        }, {
            key: "onTouchCanceled",
            value: function(e) {
                this.onTouchEnded(e);
            }
        }, {
            key: "update",
            value: function(e) {
                if (this.__container__ && !this.__touching__) {
                    var n = this.__container__.getPosition(), i = this.__container__.getAnchorPoint(), o = this.__container__.getContentSize(), r = n.y - o.height * i.y, a = r + o.height, s = n.x - o.width * i.x, u = s + o.width;
                    if (this.__direction__ == t.VERTICAL && a < this.__size__.height) {
                        var _ = this.__size__.height - o.height * (1 - i.y), c = (_ - n.y) / 10, l = n.y + c;
                        Math.abs(l - _) < .1 && (l = _), this.__container__.move(sub.p(n.x, l)), this.__moveDelta__ = sub.p(0, 0);
                    } else if (this.__direction__ == t.VERTICAL && r > 0) {
                        var h = o.height * i.y, f = (n.y - h) / 10, b = n.y - f;
                        Math.abs(b - h) < .1 && (b = h), this.__container__.move(sub.p(n.x, b)), this.__moveDelta__ = sub.p(0, 0);
                    }
                    if (this.__direction__ == t.HORIZONTAL && u < this.__size__.width) {
                        var p = this.__size__.width - o.width * (1 - i.x), d = (p - n.x) / 10, v = n.x + d;
                        Math.abs(v - p) < .1 && (v = p), this.__container__.move(sub.p(v, n.y)), this.__moveDelta__ = sub.p(0, 0);
                    } else if (this.__direction__ == t.HORIZONTAL && s > 0) {
                        var y = o.width * i.x, g = (n.x - y) / 10, m = n.x - g;
                        Math.abs(m - y) < .1 && (m = y), this.__container__.move(sub.p(m, n.y)), this.__moveDelta__ = sub.p(0, 0);
                    } else {
                        if (0 == this.__moveDelta__.x && 0 == this.__moveDelta__.y) return;
                        if (this.__moveDelta__ = sub.p(.95 * this.__moveDelta__.x, .95 * this.__moveDelta__.y), 
                        Math.abs(this.__moveDelta__.x) < .1 && Math.abs(this.__moveDelta__.y) < .1) return void (this.__moveDelta__ = sub.p(0, 0));
                        this.__container__.move(sub.p(this.__moveDelta__.x + n.x, this.__moveDelta__.y + n.y));
                    }
                }
            }
        } ]) && U(n.prototype, i), t;
    }(g);
    function X(t) {
        return (X = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function W(e, t, n) {
        return (W = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var i = function(e, t) {
                for (;!Object.prototype.hasOwnProperty.call(e, t) && null !== (e = q(e)); ) ;
                return e;
            }(e, t);
            if (i) {
                var o = Object.getOwnPropertyDescriptor(i, t);
                return o.get ? o.get.call(n) : o.value;
            }
        })(e, t, n || e);
    }
    function q(e) {
        return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Q(e, t) {
        return (Q = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    H.HORIZONTAL = 0, H.VERTICAL = 1;
    var Z = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== X(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, q(t).call(this))).__pool__ = [], n.__cellPos__ = {}, n.__config__ = e, n.__data__ = e.data, 
            n._reload(), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Q(e, t);
        }(t, e), n = t, (i = [ {
            key: "setData",
            value: function(e) {
                this.__data__ = e, this._reload();
            }
        }, {
            key: "_reload",
            value: function() {
                this.__pool__ = [];
                var e = new g(), t = this.__config__.cellSize, n = this.__data__.length;
                if (this.__direction__ == H.VERTICAL) {
                    var i = n * t.height;
                    i < this.getContentSize().height && (i = this.getContentSize().height), e.size(this.getContentSize().width, i);
                } else if (this.__direction__ == H.HORIZONTAL) {
                    var o = n * t.width;
                    o < this.getContentSize().width && (o = this.getContentSize().width), e.size(o, this.getContentSize().height);
                }
                this.setContainer(e), e.anchor(sub.p(0, 1)), e.layout(sub.p(0, 1)), this._generateCellData(), 
                this._updateCells();
            }
        }, {
            key: "_generateCellData",
            value: function() {
                var e = this.__data__.length, t = this.__config__.cellSize, n = this.getContainer().getContentSize(), i = this.__config__.cellOffsetX || 0;
                this.__cellPos__ = [];
                for (var o = 0; o < e; o++) {
                    var r = i, a = 0;
                    this.__direction__ == H.VERTICAL ? a = n.height - o * t.height : this.__direction__ == H.HORIZONTAL && (r = o * t.width, 
                    a = this.getContentSize().height), this.__cellPos__[o] = sub.p(r, a);
                }
            }
        }, {
            key: "_calcDisplayIndex",
            value: function() {
                var e = this.getContainer(), t = e.getPosition(), n = e.getContentSize(), i = this.getContentSize(), o = [];
                if (this.__direction__ == H.VERTICAL) for (var r in this.__cellPos__) {
                    var a = this.__cellPos__[r], s = this.__config__.cellSize, u = t.y - n.height, _ = a.y - i.height + u + i.height;
                    _ >= 0 && _ <= i.height + s.height && o.push(r);
                } else if (this.__direction__ == H.HORIZONTAL) for (var c in this.__cellPos__) {
                    var l = this.__cellPos__[c], h = this.__config__.cellSize, f = l.x + t.x;
                    f >= -h.width && f <= i.width && o.push(c);
                }
                return o;
            }
        }, {
            key: "_recycleCell",
            value: function(e) {
                for (var t = this.getContainer(), n = t.__children__.length, i = 0; i < n; i++) {
                    var o = t.__children__[i];
                    o.index == e && (o.visible(!1), o.index = -1, this.__pool__.push(o));
                }
            }
        }, {
            key: "_reuseCell",
            value: function(e) {
                var t = this.__pool__.pop();
                if (null == t) {
                    var n = this.getContainer();
                    (t = this.__config__.onCreateCell()).addTo(n).anchor(0, 1);
                }
                t.visible(!0), t.index = e;
                var i = this.__cellPos__[e];
                t.setPosition(i);
                var o = this.__data__[e];
                this.__config__.onUpdateCell(t, o);
            }
        }, {
            key: "_isReuse",
            value: function(e) {
                for (var t = this.getContainer(), n = t.__children__.length, i = 0; i < n; i++) {
                    var o = t.__children__[i];
                    if (o.index == e) return !o.isVisible();
                }
                return !0;
            }
        }, {
            key: "_isCellShow",
            value: function(e, t) {
                for (var n = !1, i = 0; i < t.length; i++) if (e == t[i]) {
                    n = !0;
                    break;
                }
                return n;
            }
        }, {
            key: "_updateCells",
            value: function() {
                var e = this._calcDisplayIndex();
                for (var t in this.__cellPos__) 0 == this._isCellShow(t, e) ? this._recycleCell(t) : this._isReuse(t) && this._reuseCell(t);
            }
        }, {
            key: "update",
            value: function() {
                W(q(t.prototype), "update", this).call(this), this._updateCells();
            }
        } ]) && Y(n.prototype, i), t;
    }(H);
    function J(t) {
        return (J = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function $(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function ee(e) {
        return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function te(e, t) {
        return (te = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var ne = function(e) {
        function t(e, n, i) {
            var o;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (o = function(e, t) {
                return !t || "object" !== J(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, ee(t).call(this))).__config__ = n, o.__contentStr__ = e || "", o.__spriteArr__ = [], 
            o.__space__ = i || 0, o._updateNode(), o;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && te(e, t);
        }(t, e), n = t, (i = [ {
            key: "setText",
            value: function(e) {
                this.__contentStr__ = e, this._updateNode();
            }
        }, {
            key: "_updateNode",
            value: function() {
                this._clearSpriteArr();
                for (var e = 0, t = 0, n = 0; n < this.__contentStr__.length; n++) {
                    var i = this.__config__[this.__contentStr__[n]];
                    if (i) {
                        var o = new I(i).addTo(this).anchor(0, .5);
                        this.__spriteArr__.push(o);
                        var r = o.getContentSize();
                        t = Math.max(r.height, t), e = e + r.width + this.__space__;
                    } else console.warn("=========FontLabel::_updateNode unsupport char:", this.__contentStr__[n]);
                }
                e > 0 && (e -= this.__space__), this.setContentSize(e, t), this._layoutSpriteArr();
            }
        }, {
            key: "_clearSpriteArr",
            value: function() {
                for (var e = 0; e < this.__spriteArr__.length; e++) this.__spriteArr__[e].removeSelf();
                this.__spriteArr__ = [];
            }
        }, {
            key: "_layoutSpriteArr",
            value: function() {
                for (var e = 0, t = 0; t < this.__spriteArr__.length; t++) this.__spriteArr__[t].layout(sub.p(0, .5), sub.p(e, 0)), 
                e = e + this.__spriteArr__[t].getContentSize().width + this.__space__;
            }
        } ]) && $(n.prototype, i), t;
    }(g);
    function ie(t) {
        return (ie = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function oe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function re(e) {
        return (re = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function ae(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function se(e, t) {
        return (se = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var ue = function(e) {
        function t() {
            var e, n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this, (e = !(n = re(t).call(this, sub.color(255, 255, 255, 255))) || "object" !== ie(n) && "function" != typeof n ? ae(this) : n)._isTouchEnable = !0, 
            e.setContentSize(200, 60), e.setAnchorPoint(.5, .5), e.setSwallowTouches(!0), e.__image__ = new I(), 
            e.__image__.addTo(ae(e)), e.__label__ = new z("Button", 18), e.__label__.addTo(ae(e)), 
            e.__label__.anchor(.5, .5), e.__label__.fontColor(sub.color(50, 50, 50, 255)), e.__label__.layout(sub.p(.5, .5)), 
            e;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && se(e, t);
        }(t, e), n = t, (i = [ {
            key: "setImage",
            value: function(e) {
                this.__image__.loadImage(e);
                var t = function() {
                    this.__color__ = null, this.__image__.anchor(.5, .5), this.__image__.size(this.__size__), 
                    this.__image__.layout(sub.p(.5, .5));
                    var e = this.__image__.getContentSize();
                    this.setContentSize(e), this.__label__.layout(sub.p(.5, .5));
                }.bind(this);
                return this.__image__.isImgLoaded() ? (t(), this) : (this.__image__.onload = function() {
                    t();
                }.bind(this), this);
            }
        }, {
            key: "setText",
            value: function(e) {
                return this.__label__.text(e), this;
            }
        }, {
            key: "setTextSize",
            value: function(e) {
                return this.__label__.fontSize(e), this;
            }
        }, {
            key: "setTextColor",
            value: function(e) {
                return this.__label__.fontColor(e), this;
            }
        }, {
            key: "setTextVisible",
            value: function(e) {
                return this.__label__.visible(e), this;
            }
        }, {
            key: "setBtnImageScale9Enabled",
            value: function(e) {
                return this.__image__.setScale9Enabled(e), this;
            }
        }, {
            key: "setContentSize",
            value: function(e, t) {
                this.__size__ = t ? sub.size(e, t) : e, this.__image__ && (this.__image__.size(e, t), 
                this.__image__.layout(sub.p(.5, .5))), this.__label__ && this.__label__.layout(sub.p(.5, .5)), 
                this._dispatchRenderEvent();
            }
        }, {
            key: "setTouchEnable",
            value: function(e) {
                this._isTouchEnable = e;
            }
        }, {
            key: "onTouchBegan",
            value: function(e) {
                if (this._isTouchEnable) {
                    var t = this.containsPoint(e.worldPos), n = this.isVisible();
                    this.__passing__ = t && n, this.__moveDistance__ = 0, this.__firstTouchPos__ = e.screenPos, 
                    this.__passing__ && (this.__originScale__ = this.getScale(), this.scale(.9 * this.__originScale__.x, .9 * this.__originScale__.y));
                }
            }
        }, {
            key: "onTouchMoved",
            value: function(e) {
                if (this.__passing__) {
                    var t = e.screenPos, n = sub.pGetDistance(this.__firstTouchPos__, t);
                    this.__firstTouchPos__ = t, this.__moveDistance__ += n, this.containsPoint(e.worldPos) || this.scale(this.__originScale__.x, this.__originScale__.y);
                }
            }
        }, {
            key: "onTouchEnded",
            value: function(e) {
                this.__passing__ && (this.scale(this.__originScale__.x, this.__originScale__.y), 
                this.__passing__ = !1, this.__moveDistance__ > 20 || this.containsPoint(e.worldPos) && this.onClick && this.onClick(e));
            }
        }, {
            key: "onTouchCanceled",
            value: function(e) {
                this.onTouchEnded(e);
            }
        } ]) && oe(n.prototype, i), t;
    }(g);
    function _e(t) {
        return (_e = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function ce(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function le(e) {
        return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function he(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function fe(e, t) {
        return (fe = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    ue.prototype.setClickCallback = function(e) {
        return this.onClick = e, this;
    }, sub.Loader = s, sub.Ticker = l, sub.InputManager = b, sub.MessageManager = v, 
    sub.Node = g, sub.Scene = C, sub.Sprite = I, sub.Label = z, sub.Scale9Sprite = F, 
    sub.ScrollView = H, sub.RankView = Z, sub.FontLabel = ne, sub.Button = ue;
    var be = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), n = !(i = le(t).call(this)) || "object" !== _e(i) && "function" != typeof i ? he(this) : i;
            var o = "team" == e.mode;
            n._baseImgDir = e.baseImgDir + (o ? "team/" : ""), n._btnCb = e.btnCb;
            var r = e.subCellSize, a = e.mode;
            n.size(r), n._bg = new sub.Scale9Sprite(n._baseImgDir + "bg2.png").size(r).addTo(he(n)).anchor(.5, .5).layout(sub.p(.5, .5)), 
            n._createAvatarNode(a);
            var s = o ? sub.color(75, 102, 144, 255) : sub.color(164, 118, 80, 255), u = o ? 97 : 104;
            n._txtNickname = new sub.Label("", 28).addTo(n._bg).fontColor(s).anchor(0, .5).layout(sub.p(0, .5), sub.p(u, 0));
            var _ = "yftx" == a ? "btn_yqld.png" : "btn_fx.png";
            _ = o ? "btn_invite.png" : _;
            var c = o ? sub.size(112, 56) : sub.size(137, 56);
            return n._btn = new sub.Button().addTo(n._bg).setTextVisible(!1).size(c).setImage(n._baseImgDir + _).anchor(.5, .5).layout(sub.p(0, .5), sub.p(343, 0)), 
            n._btn.setSwallowTouches(!1), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && fe(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function(e) {
                var t = "team" == e, n = t ? sub.size(76, 76) : sub.size(70, 70), i = t ? 9 : 14, o = t ? .57 : .53, r = new sub.Node().size(n).addTo(this._bg).anchor(0, .5).layout(sub.p(0, .5), sub.p(i, 0));
                r.enableClipMode(), r.setClipCornerRadius(n.width / 2), this._imgAvatar = new sub.Sprite().addTo(r).scale(Re.getAvatarScale(o)).anchor(.5, .5).layout(sub.p(.5, .5)), 
                new sub.Sprite(this._baseImgDir + "head_bg.png").addTo(this._bg).anchor(0, .5).layout(sub.p(0, .5), sub.p(i, 0));
            }
        }, {
            key: "updateView",
            value: function(e) {
                if (!e) return this.visible(!1), void this._btn.setClickCallback(void 0);
                this.visible(!0), this._imgAvatar.loadImage(e.avatarUrl);
                var t = Re.trimString(e.nickname, 5, "..");
                this._txtNickname.setText(t);
                var n = this;
                this._btn.setClickCallback(function() {
                    n._btnCb(n._btn, e);
                });
            }
        } ]) && ce(n.prototype, i), t;
    }();
    function pe(t) {
        return (pe = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function de(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function ve(e) {
        return (ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function ye(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function ge(e, t) {
        return (ge = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var me = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), n = !(i = ve(t).call(this)) || "object" !== pe(i) && "function" != typeof i ? ye(this) : i;
            var o = e.cellSize;
            n.size(o);
            var r = "team" == e.mode, a = r ? sub.size(416, 96) : sub.size((o.width - 11) / 2, o.height);
            e.subCellSize = a;
            var s = r ? 1 : .5;
            return n._leftCell = new be(e).addTo(ye(n)).anchor(0, s).layout(sub.p(0, s)), n._rightCell = new be(e).addTo(ye(n)).anchor(1, s).layout(sub.p(1, s)), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ge(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "updateView",
            value: function(e) {
                this._leftCell.updateView(e[0]), this._rightCell.updateView(e[1]);
            }
        } ]) && de(n.prototype, i), t;
    }(), we = function(e) {
        return new Promise(function(t, n) {
            wx.getFriendCloudStorage({
                keyList: e,
                success: function(e) {
                    t(e);
                },
                fail: function(e) {
                    t(), console.warn("获取朋友圈云端数据失败：", e);
                }
            });
        });
    }, Se = function(e) {
        return new Promise(function(t, n) {
            wx.setUserCloudStorage({
                KVDataList: e,
                success: function() {
                    t();
                },
                fail: function(e) {
                    t(), console.warn("上传数据失败：", e);
                }
            });
        });
    }, ke = function(e) {
        return new Promise(function(t, n) {
            wx.shareMessageToFriend({
                openId: e.openId,
                title: e.title,
                imageUrl: e.imageUrl,
                imageUrlId: e.imageUrlId,
                friendInfo: e.friendInfo,
                success: function(e) {
                    t(!0);
                },
                fail: function(e) {
                    t(!1), console.warn("定向分享失败: ", e);
                }
            });
        });
    };
    function Ce(t) {
        return (Ce = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Oe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function xe(e) {
        return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Ee(e, t) {
        return (Ee = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Te = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== Ce(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, xe(t).call(this)))._MAX_FRIEND_COUNT = 20, n._share = e.custom || {}, n._isTeamMode = "team" == n._share.mode, 
            n.size(e.size), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ee(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                var n = new sub.Label("加载中...", 28).addTo(this).fontColor(sub.color(255, 250, 239, 255)).anchor(.5, .5).layout(sub.p(.5, .5));
                this._tip = n;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    if (sub.curScene.isViewValid(i)) {
                        var n = sub.size(e.size.width, 97);
                        i._isTeamMode && (n.height = 106);
                        var o = {};
                        o.cellSize = n, o.baseImgDir = t, o.btnCb = i._onBtnClicked.bind(i), o.mode = i._share.mode;
                        var r = {
                            data: [],
                            cellSize: n,
                            cellOffsetX: 0,
                            onCreateCell: function() {
                                return new me(o);
                            },
                            onUpdateCell: function(e, t) {
                                e.updateView(t);
                            }
                        }, a = new sub.RankView(r);
                        a.size(sub.size(e.size.width, e.size.height)).addTo(i).anchor(.5, 1).layout(sub.p(.5, 1), sub.p(0, 0)), 
                        i._view = a, i._initViewData();
                    }
                });
            }
        }, {
            key: "onTargetShareResult",
            value: function(e) {
                this._onShareMessageToFriend(e);
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("Change" != (e = e || {}).op) ; else {
                    if (!this._isEnd) return;
                    Re.getRandomFriendList(this._onGetFriendList.bind(this), 8, !1, this._MAX_FRIEND_COUNT, !0);
                }
            }
        }, {
            key: "_initViewData",
            value: function() {
                var e = this;
                Re.initFilterArr(Pe.KEY_NAME).then(function(t) {
                    var n = Re.getLocalViewData();
                    n ? e._onGetFriendList(n, !0) : Re.getRandomFriendList(e._onGetFriendList.bind(e), 8, !0, e._MAX_FRIEND_COUNT);
                });
            }
        }, {
            key: "_onGetFriendList",
            value: function(e, t) {
                if (this._isEnd = t, Re.saveLocalViewData(e), sub.curScene.isViewValid(this)) {
                    var n = Re.getLocalViewData(this._MAX_FRIEND_COUNT);
                    this._updateViewData(n);
                }
            }
        }, {
            key: "_onBtnClicked",
            value: function(e, t) {
                if (!this._operatedOpenId) {
                    var n = {};
                    n.openId = t.openid, n.title = this._share.title, n.imageUrl = this._share.image, 
                    Re.isQQMiniGame() && (n.friendInfo = {
                        avatarUrl: t.avatarUrl,
                        nickname: t.nickname,
                        openid: t.openid
                    }), this._operatedOpenId = t.openid;
                    var i = this;
                    ke(n).then(function(e) {
                        i._onShareMessageToFriend(e);
                    });
                }
            }
        }, {
            key: "_onShareMessageToFriend",
            value: function(e) {
                if (this._operatedOpenId) {
                    var t = this._operatedOpenId;
                    this._operatedOpenId = void 0, e && this._onShareSuccess(t);
                }
            }
        }, {
            key: "_onShareSuccess",
            value: function(e) {
                if (this._isTeamMode || Re.addFilterUser(Pe.KEY_NAME, e), sub.curScene.isViewValid(this)) {
                    var t = Re.getLocalViewData(this._MAX_FRIEND_COUNT);
                    this._updateViewData(t), !this._isTeamMode && this._isEnd && t.length < this._MAX_FRIEND_COUNT && Re.getRandomFriendList(this._onGetFriendList.bind(this), 8, !1, this._MAX_FRIEND_COUNT);
                }
            }
        }, {
            key: "_updateViewData",
            value: function(e) {
                this._isEnd && 0 == e.length ? (this._tip.setText("您当前暂无可分享的微信好友哦~"), this._tip.visible(!0)) : e.length > 0 && this._tip.visible(!1);
                var t = Re.zipArr(e, 2);
                this._view.setData(t);
            }
        } ]) && Oe(n.prototype, i), t;
    }(), Pe = {
        TYPE_NAME: "yftx",
        KEY_NAME: "yftx_daily",
        onCreateView: function(e) {
            return new Te(e);
        },
        onInitView: function(e, t) {
            var n = Re.getBaseImgDir(t.imgPathData, "subcontext");
            e.initView(t, n);
        },
        onSetData: function(e) {}
    }, Re = {
        KEY_NAME: "game_user",
        getAllKeys: function() {
            return [ "xzdd_week", Pe.KEY_NAME, this.KEY_NAME ];
        },
        setSelfOpenId: function(e) {
            this.isQQMiniGame() && e && "ios" == e.substr(0, 3) && (e = e.substr(3)), this._selfOpenId = e;
        },
        getSelfOpenId: function() {
            return this._selfOpenId;
        },
        setGameUserFlag: function() {
            if (!this._isSetFlag) {
                this._isSetFlag = !0;
                var e = {
                    key: this.KEY_NAME,
                    value: "1"
                };
                Se([ e ]);
            }
        },
        getPotentialFriendData: function() {
            return new Promise(function(e, t) {
                new Promise(function(e, t) {
                    wx.getPotentialFriendList({
                        success: function(t) {
                            e(t);
                        },
                        fail: function(t) {
                            e(), console.warn("获取可能对游戏感兴趣的未注册的好友名单失败: ", t);
                        }
                    });
                }).then(function(t) {
                    var n = {};
                    if (t && t.list && t.list.length) for (var i = 0; i < t.list.length; i++) {
                        var o = t.list[i];
                        o && (n[o.openid] = o);
                    }
                    e(n);
                });
            });
        },
        getGameFriendData: function() {
            var e = this;
            return new Promise(function(t, n) {
                we(e.getAllKeys()).then(function(e) {
                    var n = {};
                    if (e && e.data && e.data.length) for (var i = 0; i < e.data.length; i++) {
                        var o = e.data[i];
                        o && (n[o.openid] = o);
                    }
                    t(n);
                });
            });
        },
        getRandomFriendList: function(e, t, n, i, o) {
            var r = n ? 1 : 0, a = t + r, s = 0, u = 0, _ = this._friendListData || [];
            o && this.shuffle(_), this._friendListData = _;
            var c = {}, l = this, h = function n(o, h) {
                for (var f in s++, 1 == h && (u++, l.isSameKeyObject(o, c) ? a = (t = u) + r : c = o), 
                o) {
                    for (var b = !0, p = 0; p < _.length; p++) if (_[p].openid == f) {
                        b = !1;
                        break;
                    }
                    b && _.push(o[f]);
                }
                var d = l.filterFriendList(_);
                d.length >= i && (a = (t = u) + r), e(d, s >= a), 1 == h && u < t && l.getPotentialFriendData().then(function(e) {
                    n(e, 1);
                });
            };
            t > 0 && this.getPotentialFriendData().then(function(e) {
                h(e, 1);
            }), n && this.getGameFriendData().then(function(e) {
                h(e, 2);
            });
        },
        filterFriendList: function(e, t) {
            for (var n = [], i = this._filterArr || [], o = 0; o < e.length; o++) {
                var r = e[o].openid;
                if (r != this._selfOpenId && -1 == this.indexOfArr(i, r)) {
                    if (null != t && n.length == t) break;
                    n.push(e[o]);
                }
            }
            return n;
        },
        getTodayFilterUserArr: function(e) {
            var t = this;
            return new Promise(function(n, i) {
                (function(e) {
                    return new Promise(function(t, n) {
                        wx.getUserCloudStorage({
                            keyList: e,
                            success: function(e) {
                                t(e);
                            },
                            fail: function(e) {
                                t(), console.warn("获取用户云端数据失败：", e);
                            }
                        });
                    });
                })([ e ]).then(function(i) {
                    var o = [];
                    if (i && i.KVDataList && i.KVDataList[0] && i.KVDataList[0].key == e && i.KVDataList[0].value) {
                        var r = t.getCurDateStr();
                        o = JSON.parse(i.KVDataList[0].value)[r] || [];
                    }
                    n(o);
                });
            });
        },
        initFilterArr: function(e) {
            var t = this;
            return new Promise(function(n, i) {
                t._filterArr ? n(t._filterArr) : t.getTodayFilterUserArr(e).then(function(e) {
                    t._filterArr = e, n(e);
                });
            });
        },
        saveLocalViewData: function(e) {
            this._localViewData = e;
        },
        getLocalViewData: function(e) {
            if (this._localViewData) return this.filterFriendList(this._localViewData, e);
        },
        addFilterUser: function(e, t) {
            this._filterArr = this._filterArr || [], this._filterArr.push(t), this._filterArr = this.uniqueArr(this._filterArr);
            var n = {};
            n[this.getCurDateStr()] = this._filterArr, Se([ {
                key: e,
                value: JSON.stringify(n)
            } ]);
        },
        zipArr: function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var o = Math.floor(i / t), r = i % t;
                n[o] = n[o] || [], n[o][r] = e[i];
            }
            return n;
        },
        filterArr: function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) t(e[i]) || n.push(e[i]);
            return n;
        },
        uniqueArr: function(e, t) {
            for (var n = {}, i = 0; i < e.length; i++) n[t ? t(e[i]) : e[i]] = e[i];
            var o = [];
            for (var r in n) o.push(n[r]);
            return o;
        },
        indexOfArr: function(e, t) {
            for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
            return -1;
        },
        trimString: function(e, t, n) {
            var i = e || "";
            return n = n || "", i.length <= t ? i : i.substring(0, t) + n;
        },
        getBaseImgDir: function(e, t) {
            if (!e || !e[0]) return "";
            var n = e[0].lastIndexOf(t + "/");
            return e[0].substr(0, n + t.length + 1);
        },
        getCurDateStr: function() {
            var e = new Date();
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
        },
        isSameKeyObject: function(e, t) {
            var n = Object.keys(e), i = Object.keys(t);
            if (n.length != i.length) return !1;
            for (var o = n.length, r = 0; r < o; r++) {
                for (var a = n[r], s = 0; s < o && a != i[s]; s++) ;
                if (s == o) return !1;
            }
            return !0;
        },
        getCurrentDateSecond: function() {
            return parseInt(new Date().getTime() / 1e3);
        },
        IsFastClick: function(e, t) {
            var n = new Date().getTime();
            return t = t || 1e3, !!(e._lastClickTime && n - e._lastClickTime < t) || (e._lastClickTime = n, 
            !1);
        },
        merge: function(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
        },
        shuffle: function(e) {
            var t, n, i;
            for (i = e.length - 1; i > 0; i--) t = Math.floor(Math.random() * (i + 1)), n = e[i], 
            e[i] = e[t], e[t] = n;
            return e;
        },
        isQQMiniGame: function() {
            return void 0 !== GameGlobal.qq;
        },
        getAvatarScale: function(e) {
            return this.isQQMiniGame() ? 132 * e / 100 : e;
        }
    };
    function Ie(t) {
        return (Ie = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function De(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Ve(e) {
        return (Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function je(e, t) {
        return (je = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Ae = function(e) {
        function t() {
            var e;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (e = function(e, t) {
                return !t || "object" !== Ie(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Ve(t).call(this)))._viewPool = {}, e._viewStack = [], e._enableState = !1, 
            e._viewFuncPool = {}, e._lastViewId = void 0, e;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && je(e, t);
        }(t, sub.Scene), n = t, (i = [ {
            key: "registerViewFunc",
            value: function(e, t) {
                this._viewFuncPool[e] = t;
            }
        }, {
            key: "unregisterViewFunc",
            value: function(e) {
                delete this._viewFuncPool[e];
            }
        }, {
            key: "isViewValid",
            value: function(e) {
                return !!this._viewPool[e._viewId];
            }
        }, {
            key: "onMessage",
            value: function(e) {
                if (e) {
                    var t = "onMsg" + e.cmd;
                    "function" == typeof this[t] ? this[t](e) : console.warn("===========不支持该命令: ", t);
                }
            }
        }, {
            key: "onMsgChangeCanvasSize",
            value: function(e) {
                sub.onCanvasSizeChange(e.winSize);
                var t = this.getContentSize();
                t.width == sub.display.width && t.height == sub.display.height || this.setContentSize(sub.display.width, sub.display.height);
            }
        }, {
            key: "onMsgCreateView",
            value: function(e) {
                if (this._viewFuncPool[e.type]) {
                    var t = this._viewFuncPool[e.type].onCreateView(e);
                    t && (t.anchor(sub.p(0, 1)), t._viewId = e.viewId, this._viewPool[e.viewId] = t, 
                    this._viewFuncPool[e.type].onInitView(t, e));
                } else console.warn("=========RankScene::onMsgCreateView unsupport type", e.type);
            }
        }, {
            key: "onMsgDeleteView",
            value: function(e) {
                this._viewPool[e.viewId] && (this._viewPool[e.viewId].removeSelf(), delete this._viewPool[e.viewId], 
                this._viewStack = this._viewStack.filter(function(t) {
                    return t != e.viewId;
                }), this._onViewStateChange());
            }
        }, {
            key: "onMsgSetViewVisible",
            value: function(e) {
                if (this._viewPool[e.viewId]) {
                    var t = this.getChild()[0];
                    t && t.isVisible() && (t.removeSelf(), this._viewStack.push(t._viewId)), this._viewPool[e.viewId].setVisible(e.visible), 
                    this._viewPool[e.viewId].removeSelf(), this._viewStack = this._viewStack.filter(function(t) {
                        return t != e.viewId;
                    }), e.visible && this._viewStack.push(e.viewId), this._onViewStateChange();
                }
            }
        }, {
            key: "onMsgSetViewOffset",
            value: function(e) {
                if (this._viewPool[e.viewId]) {
                    this._viewPool[e.viewId].viewOffset = e.offset;
                    var t = this.getChild()[0];
                    t && t.isVisible() && t._viewId == e.viewId && this.setTouchOffset(e.offset);
                }
            }
        }, {
            key: "onMsgSetData",
            value: function(e) {
                if ("setUserOpenId" == e.op) return Re.setSelfOpenId(e.openId), void Re.setGameUserFlag();
                this._viewFuncPool[e.type] ? this._viewFuncPool[e.type].onSetData(e) : console.warn("=========RankScene::onMsgSetData unsupport type", e.type);
            }
        }, {
            key: "onMsgSetTouch",
            value: function(e) {
                e.touch ? this.enableTouchEvents() : this.disableTouchEvents();
            }
        }, {
            key: "onMsgTargetShareResult",
            value: function(e) {
                var t = this._viewPool[e.viewId];
                t && t.onTargetShareResult && t.onTargetShareResult(e.result);
            }
        }, {
            key: "onMsgSetViewData",
            value: function(e) {
                var t = this._viewPool[e.viewId];
                t && t.onSetViewData && t.onSetViewData(e);
            }
        }, {
            key: "_enableScene",
            value: function() {
                this._enableState || (this._enableState = !0, this.enableScheduler(), this.enableTouchEvents());
            }
        }, {
            key: "_disableScene",
            value: function() {
                this._enableState && (this._enableState = !1, this.disableScheduler(), this.disableTouchEvents(), 
                0 == Object.keys(this._viewPool).length && this.clearScreen());
            }
        }, {
            key: "_onViewStateChange",
            value: function() {
                var e = this.getChild()[0];
                if (e && e.isVisible()) this._enableScene(); else {
                    for (e && e.removeSelf(); this._viewStack.length; ) {
                        var t = this._viewStack.pop();
                        if (this._viewPool[t]) {
                            this._viewPool[t].addTo(this).layout(sub.p(0, 1)), this.setTouchOffset(this._viewPool[t].viewOffset), 
                            t != this._lastViewId && this.clearScreen(), this._lastViewId = t, e = this._viewPool[t];
                            break;
                        }
                    }
                    e && e.isVisible() ? this._enableScene() : this._disableScene();
                }
            }
        } ]) && De(n.prototype, i), t;
    }();
    function ze(t) {
        return (ze = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Le(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Ne(e) {
        return (Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Me(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function Fe(e, t) {
        return (Fe = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Be = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = !(i = Ne(t).call(this)) || "object" !== ze(i) && "function" != typeof i ? Me(this) : i)._isSelf = e.bSelf, 
            n._userName = e.userName, n._baseImgDir = e.baseImgDir;
            var o = e.subCellSize;
            n.size(o);
            var r = sub.color(202, 99, 36, 255), a = sub.color(89, 100, 149, 255);
            sub.color(91, 128, 187, 255), e.bSelf || (new sub.Sprite(n._baseImgDir + "line_blue.png").addTo(Me(n)).anchor(.5, .5).layout(sub.p(.5, 0)).setScale(50, 1), 
            new sub.Sprite(n._baseImgDir + "rank_num_bg.png").addTo(Me(n)).anchor(.5, .5).layout(sub.p(0, .5), sub.p(58, 0))), 
            n._topRankImg = new sub.Sprite().addTo(Me(n)).anchor(.5, .5).layout(sub.p(0, .5), e.bSelf ? sub.p(48, -10) : sub.p(58, 0));
            for (var s = {}, u = 0; u < 10; u++) s[u] = n._baseImgDir + "num/" + u + ".png";
            return n._imgRankNum = new sub.FontLabel("", s, 1).addTo(Me(n)).anchor(.5, .5).layout(sub.p(0, .5), e.bSelf ? sub.p(48, -10) : sub.p(58, 0)), 
            n._createAvatarNode(e.bSelf), n._txtNickname = new sub.Label("", 28).addTo(Me(n)).fontColor(a).anchor(0, .5).layout(sub.p(0, .5), e.bSelf ? sub.p(170, 0) : sub.p(180, 0)), 
            n._gradeBtn = new sub.Button().addTo(Me(n)).setTextVisible(!1).size(sub.size(90, 84)).scale(.64).anchor(0, .5).layout(sub.p(0, .5), e.bSelf ? sub.p(286, 0) : sub.p(330, 0)), 
            n._gradeBtn.setSwallowTouches(!1), n._gradeLevel = new sub.Label("", 28).addTo(Me(n)).fontColor(e.bSelf ? a : r).anchor(0, .5).layout(sub.p(0, .5), e.bSelf ? sub.p(342, 0) : sub.p(392, 0)), 
            n._gradeScore = new sub.Label("", 28).addTo(Me(n)).fontColor(e.bSelf ? a : r).anchor(1, .5).layout(sub.p(0, .5), sub.p(586, 0)), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Fe(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function(e) {
                var t = new sub.Node().size(sub.size(80, 80)).addTo(this).anchor(.5, .5).layout(sub.p(0, .5), e ? sub.p(127, 2) : sub.p(137, 0));
                t.enableClipMode(), t.setClipCornerRadius(30), this._imgAvatar = new sub.Sprite().addTo(t).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(0, 0));
            }
        }, {
            key: "_createPromptIcon",
            value: function(e, t) {
                this._promptObj && !this._promptObj.timeId && (clearTimeout(this._promptObj.timeId), 
                this._promptObj = void 0), Bt.cleanGradePromptObj();
                var n = 1 != t || this._isSelf ? sub.p(400, 40) : sub.p(400, 35);
                this._isSelf && (n = sub.p(356, 40));
                var i = Bt.getGradeLevelNameByLevel(e), o = new sub.Sprite().addTo(this).anchor(0, .5).layout(sub.p(0, .5), n);
                o.loadImage(this._baseImgDir + "prompt.png"), this._promptObj = o;
                var r = new sub.Label(i, 20).addTo(o).fontColor(sub.color(255, 255, 255, 255)).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(0, -2));
                o.rotate(180), r.rotate(180), Bt.setGradePromptObj(this._promptObj);
                var a = this, s = setTimeout(function() {
                    a._promptObj = void 0, Bt.cleanGradePromptObj();
                }, 3e3);
                this._promptObj.timeId = s;
            }
        }, {
            key: "updateView",
            value: function(e, t) {
                if (!e) return this.visible(!1), void this._btn.setClickCallback(void 0);
                this.visible(!0);
                var n = this._baseImgDir + "avatar_boy.png", i = e.avatarUrl ? Re.getAvatarScale(.5) : .82, o = e.avatarUrl ? e.avatarUrl : n;
                this._imgAvatar.loadImage(o), this._imgAvatar.scale(i);
                var r = e.nickname, a = Re.getSelfOpenId();
                a && this._userName && e.openId == a && (r = this._userName);
                var s = Re.trimString(r, 4, "..");
                this._txtNickname.setText(s), this._updateRankImg(e.rank, t), this._isSelf || this._gradeScore.setText(e.score + ""), 
                this._gradeBtn.setImage(this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, e.score) + ".png");
                var u = Bt.getCurGradeLevelByScore(void 0, e.score), _ = this;
                this._gradeBtn.setClickCallback(function() {
                    _._createPromptIcon(u, e.rank);
                });
                var c = Bt.getCurStarLevelByScore(void 0, e.score) + "星";
                this._isSelf && (c += "(" + e.score + ")"), this._gradeLevel.setText(c);
            }
        }, {
            key: "_updateRankImg",
            value: function(e, t) {
                if (this._isSelf && t) return this._imgRankNum.visible(!1), void this._topRankImg.visible(!1);
                if (e <= 3) {
                    this._imgRankNum.visible(!1), this._topRankImg.visible(!0);
                    var n = {
                        1: "rank_1.png",
                        2: "rank_2.png",
                        3: "rank_3.png"
                    }[e];
                    this._topRankImg.loadImage(this._baseImgDir + n);
                } else this._topRankImg.visible(!1), this._imgRankNum.visible(!0), this._imgRankNum.setText(e + "");
            }
        } ]) && Le(n.prototype, i), t;
    }();
    function Ue(t) {
        return (Ue = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Ge(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Ke(e) {
        return (Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function He(e, t) {
        return (He = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Xe = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== Ue(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Ke(t).call(this))).size(e.size), n._isExcludeRank = e.custom.isExcludeRank, 
            Bt.onExcludeRankChange(e.custom.isExcludeRank), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && He(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                this._createTopInfo();
                var n = new sub.Label("加载中...", 28).addTo(this).fontColor(sub.color(255, 250, 239, 255)).anchor(.5, .5).layout(sub.p(.5, .5));
                this._tip = n;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    if (sub.curScene.isViewValid(i)) {
                        var o = sub.size(e.size.width, 83), r = {};
                        r.baseImgDir = t, r.subCellSize = o, r.bSelf = !0, r.userName = e.custom.userName, 
                        i._selfCell = new Be(r).addTo(i).anchor(.5, 0).layout(sub.p(.5, 0));
                        var a = sub.size(e.size.width, 97), s = {};
                        s.subCellSize = a, s.baseImgDir = t, s.userName = e.custom.userName;
                        var u = {
                            data: [],
                            cellSize: a,
                            cellOffsetX: 0,
                            onCreateCell: function() {
                                return new Be(s);
                            },
                            onUpdateCell: function(e, t) {
                                e._promptObj && (e._promptObj.timeId && clearTimeout(e._promptObj.timeId), e._promptObj.removeSelf()), 
                                e.updateView(t);
                            }
                        }, _ = new sub.RankView(u);
                        _.size(sub.size(e.size.width, e.size.height - 150)).addTo(i).anchor(.5, 1).layout(sub.p(.5, 1), sub.p(0, -50)), 
                        i._rankView = _, Bt.pullViewData(e.custom.shortName, function(e) {
                            sub.curScene.isViewValid(i) && (n.removeSelf(), i._viewDataArr = e, i._updateView());
                        });
                    }
                });
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("SetExcludeRank" == (e = e || {}).op) {
                    if (Bt.onExcludeRankChange(e.isExcludeRank), this._isExcludeRank == e.isExcludeRank) return;
                    return this._isExcludeRank = e.isExcludeRank, void this._updateView();
                }
            }
        }, {
            key: "_updateView",
            value: function() {
                if (this._rankView && this._selfCell) {
                    var e = this._viewDataArr || [], t = Re.getSelfOpenId(), n = e;
                    n = Bt.getShowedViewData(n, this._isExcludeRank), this._rankView.setData(n);
                    for (var i = 0; i < e.length; i++) if (e[i].openId == t) {
                        this._selfCell.updateView(e[i], this._isExcludeRank);
                        break;
                    }
                }
            }
        }, {
            key: "_createTopInfo",
            value: function() {
                new sub.Label("排名", 26).addTo(this).fontColor(sub.color(106, 123, 168, 255)).anchor(.5, .5).layout(sub.p(0, 1), sub.p(60, -29)), 
                new sub.Label("用户", 26).addTo(this).fontColor(sub.color(106, 123, 168, 255)).anchor(.5, .5).layout(sub.p(0, 1), sub.p(207, -29)), 
                new sub.Label("段位", 26).addTo(this).fontColor(sub.color(106, 123, 168, 255)).anchor(.5, .5).layout(sub.p(0, 1), sub.p(396, -29)), 
                new sub.Label("段位积分", 26).addTo(this).fontColor(sub.color(106, 123, 168, 255)).anchor(.5, .5).layout(sub.p(0, 1), sub.p(544, -29));
            }
        } ]) && Ge(n.prototype, i), t;
    }();
    function Ye(t) {
        return (Ye = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function We(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function qe(e) {
        return (qe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Qe(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function Ze(e, t) {
        return (Ze = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Je = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = !(i = qe(t).call(this)) || "object" !== Ye(i) && "function" != typeof i ? Qe(this) : i)._baseImgDir = e.baseImgDir;
            var o = e.subCellSize;
            return n.size(o), n._createAvatarNode(), n._topRankImg = new sub.Sprite().addTo(Qe(n)).anchor(0, 1).layout(sub.p(0, 1), sub.p(0, 0)), 
            n._pRankImg = new sub.Sprite().addTo(Qe(n)).anchor(0, 1).layout(sub.p(0, 1), sub.p(13, -7)), 
            n._pRankLabel = new sub.Label("", 21).addTo(n._pRankImg).fontColor(sub.color(255, 255, 255, 255)).anchor(sub.p(.5, .5)).layout(sub.p(.5, .5), sub.p(16, 8)), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ze(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function() {
                var e = new sub.Node().size(sub.size(80, 80)).addTo(this).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(0, 0));
                e.enableClipMode(), e.setClipCornerRadius(15), this._imgAvatar = new sub.Sprite().addTo(e).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(0, 0));
            }
        }, {
            key: "_updateRankImg",
            value: function(e) {
                if (e <= 3) {
                    this._pRankLabel.visible(!1), this._pRankImg.visible(!1), this._topRankImg.visible(!0);
                    var t = {
                        1: "simple_rank_1.png",
                        2: "simple_rank_2.png",
                        3: "simple_rank_3.png"
                    }[e];
                    this._topRankImg.loadImage(this._baseImgDir + t);
                } else this._topRankImg.visible(!1), this._pRankLabel.visible(!0), this._pRankLabel.setText("" + e), 
                this._pRankImg.visible(!0), this._pRankImg.loadImage(this._baseImgDir + "simple_rank_bg.png");
            }
        }, {
            key: "updateView",
            value: function(e) {
                if (e) {
                    this.visible(!0);
                    var t = this._baseImgDir + "avatar_boy.png", n = e.avatarUrl ? Re.getAvatarScale(.56) : .925, i = e.avatarUrl ? e.avatarUrl : t;
                    this._imgAvatar.loadImage(i), this._imgAvatar.scale(n), this._updateRankImg(e.rank);
                } else this.visible(!1);
            }
        } ]) && We(n.prototype, i), t;
    }();
    function $e(t) {
        return ($e = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function et(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function tt(e) {
        return (tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function nt(e, t) {
        return (nt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var it = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== $e(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, tt(t).call(this))).size(e.size), n._isExcludeRank = e.custom.isExcludeRank, 
            Bt.onExcludeRankChange(e.custom.isExcludeRank), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && nt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                var n = new sub.Label("加载中", 28).addTo(this).fontColor(sub.color(255, 250, 239, 255)).anchor(.5, .5).layout(sub.p(.5, .5));
                this._tip = n;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    if (sub.curScene.isViewValid(i)) {
                        var o = sub.size(e.size.width, 88), r = {};
                        r.subCellSize = o, r.baseImgDir = t;
                        var a = {
                            data: [],
                            cellSize: o,
                            cellOffsetX: 0,
                            onCreateCell: function() {
                                return new Je(r);
                            },
                            onUpdateCell: function(e, t) {
                                e.updateView(t);
                            }
                        }, s = new sub.RankView(a);
                        s.size(sub.size(e.size.width, e.size.height)).addTo(i).anchor(.5, 1).layout(sub.p(.5, 1), sub.p(0, 0)), 
                        i._rankView = s, Bt.pullViewData(e.custom.shortName, function(e) {
                            sub.curScene.isViewValid(i) && (n.removeSelf(), i._viewDataArr = e, i._updateView());
                        });
                    }
                });
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("SetExcludeRank" == (e = e || {}).op) {
                    if (Bt.onExcludeRankChange(e.isExcludeRank), this._isExcludeRank == e.isExcludeRank) return;
                    return this._isExcludeRank = e.isExcludeRank, void this._updateView();
                }
            }
        }, {
            key: "_updateView",
            value: function() {
                if (this._rankView) {
                    var e = this._viewDataArr || [];
                    e = Bt.getShowedViewData(e, this._isExcludeRank), this._rankView.setData(e);
                }
            }
        } ]) && et(n.prototype, i), t;
    }();
    function ot(t) {
        return (ot = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function rt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function at(e) {
        return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function st(e, t) {
        return (st = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var ut = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== ot(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, at(t).call(this))).size(e.size), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && st(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                this._baseImgDir = t;
                var n = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    sub.curScene.isViewValid(n) && Bt.pullViewData(e.custom.shortName, function(t) {
                        if (sub.curScene.isViewValid(n)) {
                            for (var i = 0, o = Re.getSelfOpenId(), r = void 0, a = 0; a < t.length; a++) {
                                if (t[a].openId == o) {
                                    i = t[a].score;
                                    break;
                                }
                                r = t[a];
                            }
                            r ? n._showSurpassView(r) : n._showSeasonView(e.custom.seasonRankNum, i, e.custom.seasonRankPercent);
                        }
                    }.bind(this));
                });
            }
        }, {
            key: "_showSurpassView",
            value: function(e) {
                this._createAvatarNode(e), new sub.Label("即将超越TA", 24).addTo(this).fontColor(sub.color(25, 144, 45, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(173, 31));
                var t = Re.trimString(e.nickname, 4, "..");
                new sub.Label(t, 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(173, 4));
                var n = this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, e.score) + ".png";
                new sub.Sprite(n).addTo(this).scale(.375).anchor(0, .5).layout(sub.p(0, .5), sub.p(167, -26)), 
                new sub.Label(e.score + "分", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(202, -26));
            }
        }, {
            key: "_showSeasonView",
            value: function(e, t, n) {
                var i = e > 0 && e <= 1e3, o = i ? 36 : 0, r = this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, t) + ".png";
                new sub.Sprite(r).addTo(this).anchor(0, .5).layout(sub.p(0, .5), sub.p(34 + o, 0));
                var a = 134 + o;
                if (new sub.Label("赛季排名", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(a, 15)), 
                i) {
                    var s = new sub.Label("第", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(a, 44)), u = s.getContentSize().width + s.getPosition().x + 5, _ = new sub.Label(e + "", 36).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(u, 39));
                    u = _.getContentSize().width + _.getPosition().x + 5, new sub.Label("名", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(u, 44));
                } else {
                    var c = new sub.Label("超过", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(a, 44)), l = c.getContentSize().width + c.getPosition().x + 4, h = new sub.Label(n + "%", 36).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(l, 39));
                    l = h.getContentSize().width + h.getPosition().x + 4, new sub.Label("玩家", 24).addTo(this).fontColor(sub.color(70, 99, 113, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(l, 44));
                }
            }
        }, {
            key: "_createAvatarNode",
            value: function(e) {
                var t = new sub.Node().size(sub.size(78, 78)).addTo(this).anchor(0, .5).layout(sub.p(0, .5), sub.p(72, 1));
                t.enableClipMode(), t.setClipCornerRadius(39);
                var n = this._baseImgDir + "avatar_boy.png", i = e.avatarUrl ? e.avatarUrl : n, o = e.avatarUrl ? Re.getAvatarScale(.6) : 1;
                new sub.Sprite(i).addTo(t).scale(o).anchor(.5, .5).layout(sub.p(.5, .5)), new sub.Sprite(this._baseImgDir + "avatar_border.png").addTo(this).anchor(0, .5).layout(sub.p(0, .5), sub.p(70, 1));
            }
        } ]) && rt(n.prototype, i), t;
    }();
    function _t(t) {
        return (_t = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function ct(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function lt(e) {
        return (lt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function ht(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function ft(e, t) {
        return (ft = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var bt = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = !(i = lt(t).call(this)) || "object" !== _t(i) && "function" != typeof i ? ht(this) : i)._isSelf = e.bSelf, 
            n._userName = e.userName, n._baseImgDir = e.baseImgDir;
            var o = e.subCellSize;
            n.size(o), e.bSelf || new sub.Scale9Sprite(n._baseImgDir + "five/img_xian.png").size(683, 2).addTo(ht(n)).anchor(.5, 0).layout(sub.p(.5, 0));
            var r = e.bSelf ? sub.p(57, -17) : sub.p(57, 0), a = e.bSelf ? .6 : 1;
            n._topRankImg = new sub.Sprite().addTo(ht(n)).scale(a).anchor(.5, .5).layout(sub.p(0, .5), r);
            var s = e.bSelf ? sub.p(57, -12) : sub.p(57, 0);
            return n._txtRank = new sub.Label("", 28).addTo(ht(n)).fontColor(sub.color(53, 86, 162, 255)).anchor(.5, .5).layout(sub.p(0, .5), s), 
            n._createAvatarNode(e.bSelf), n._txtNickname = new sub.Label("", 24).addTo(ht(n)).fontColor(sub.color(53, 86, 162, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(192, 0)), 
            n._gradeImg = new sub.Sprite().addTo(ht(n)).scale(.4).anchor(.5, .5).layout(sub.p(0, .5), sub.p(379, 0)), 
            n._gradeInfo = new sub.Label("", 24).addTo(ht(n)).fontColor(sub.color(37, 56, 94, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(401, 0)), 
            n._gradeScore = new sub.Label("", 24).addTo(ht(n)).fontColor(sub.color(161, 72, 37, 255)).anchor(.5, .5).layout(sub.p(0, .5), sub.p(618, 0)), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ft(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function(e) {
                var t = new sub.Node().size(sub.size(64, 64)).addTo(this).anchor(0, .5).layout(sub.p(0, .5), sub.p(120, 0));
                t.enableClipMode(), t.setClipCornerRadius(6), this._imgAvatar = new sub.Sprite().addTo(t).anchor(.5, .5).layout(sub.p(.5, .5));
            }
        }, {
            key: "updateView",
            value: function(e, t) {
                if (e) {
                    this.visible(!0), this._updateRankImg(e.rank, t);
                    var n = this._baseImgDir + "avatar_boy.png", i = e.avatarUrl ? Re.getAvatarScale(.49) : .8, o = e.avatarUrl ? e.avatarUrl : n;
                    this._imgAvatar.loadImage(o), this._imgAvatar.scale(i);
                    var r = e.nickname, a = Re.getSelfOpenId();
                    a && this._userName && e.openId == a && (r = this._userName);
                    var s = Re.trimString(r, 4, "..");
                    this._txtNickname.setText(s), this._gradeImg.loadImage(this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, e.score) + ".png");
                    var u = Bt.getGradeLevelByScore(void 0, e.score) + "";
                    this._gradeInfo.setText(u), this._gradeScore.setText(e.score + "");
                } else this.visible(!1);
            }
        }, {
            key: "_updateRankImg",
            value: function(e, t) {
                if (this._isSelf && t) return this._txtRank.visible(!1), void this._topRankImg.visible(!1);
                e >= 1 && e <= 3 ? (this._txtRank.visible(!1), this._topRankImg.visible(!0), this._topRankImg.loadImage(this._baseImgDir + "five/img_" + e + ".png")) : (this._topRankImg.visible(!1), 
                this._txtRank.visible(!0), this._txtRank.setText(e + ""));
            }
        } ]) && ct(n.prototype, i), t;
    }();
    function pt(t) {
        return (pt = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function vt(e) {
        return (vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function yt(e, t) {
        return (yt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var gt = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== pt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, vt(t).call(this))).size(e.size), n._isExcludeRank = e.custom.isExcludeRank, 
            Bt.onExcludeRankChange(e.custom.isExcludeRank), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && yt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                var n = new sub.Label("加载中...", 28).addTo(this).fontColor(sub.color(53, 86, 162, 255)).anchor(.5, .5).layout(sub.p(.5, .5));
                this._tip = n;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    if (sub.curScene.isViewValid(i)) {
                        var o = sub.size(e.size.width, 96), r = {};
                        r.baseImgDir = t, r.subCellSize = o, r.bSelf = !0, r.userName = e.custom.userName, 
                        i._selfCell = new bt(r).addTo(i).anchor(.5, 0).layout(sub.p(.5, 0));
                        var a = sub.size(e.size.width, 96), s = {};
                        s.subCellSize = a, s.baseImgDir = t, s.userName = e.custom.userName;
                        var u = {
                            data: [],
                            cellSize: a,
                            cellOffsetX: 0,
                            onCreateCell: function() {
                                return new bt(s);
                            },
                            onUpdateCell: function(e, t) {
                                e.updateView(t);
                            }
                        }, _ = new sub.RankView(u);
                        _.size(sub.size(e.size.width, e.size.height - o.height)).addTo(i).anchor(.5, 1).layout(sub.p(.5, 1)), 
                        i._rankView = _, Bt.pullViewData(e.custom.shortName, function(e) {
                            sub.curScene.isViewValid(i) && (n.removeSelf(), i._viewDataArr = e, i._updateView());
                        });
                    }
                });
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("SetExcludeRank" == (e = e || {}).op) {
                    if (Bt.onExcludeRankChange(e.isExcludeRank), this._isExcludeRank == e.isExcludeRank) return;
                    return this._isExcludeRank = e.isExcludeRank, void this._updateView();
                }
            }
        }, {
            key: "_updateView",
            value: function() {
                if (this._rankView && this._selfCell) {
                    var e = this._viewDataArr || [], t = Re.getSelfOpenId(), n = e;
                    n = Bt.getShowedViewData(n, this._isExcludeRank), this._rankView.setData(n);
                    for (var i = 0; i < e.length; i++) if (e[i].openId == t) {
                        this._selfCell.updateView(e[i], this._isExcludeRank);
                        break;
                    }
                }
            }
        } ]) && dt(n.prototype, i), t;
    }();
    function mt(t) {
        return (mt = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function wt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function St(e) {
        return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function kt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function Ct(e, t) {
        return (Ct = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Ot = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = !(i = St(t).call(this)) || "object" !== mt(i) && "function" != typeof i ? kt(this) : i)._baseImgDir = e.baseImgDir;
            var o = e.subCellSize;
            return n.size(o), n._createAvatarNode(), n._topRankImg = new sub.Sprite().addTo(kt(n)).scale(.54).anchor(.5, .5).layout(sub.p(0, 0), sub.p(21, 54)), 
            n._pRankImg = new sub.Sprite().addTo(kt(n)).anchor(.5, .5).layout(sub.p(0, 0), sub.p(33, 52)), 
            n._pRankImg.loadImage(n._baseImgDir + "five/img_bq.png"), n._pRankLabel = new sub.Label("", 20).addTo(kt(n)).fontColor(sub.color(255, 255, 255, 255)).anchor(sub.p(.5, .5)).layout(sub.p(0, 0), sub.p(27, 52)), 
            n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Ct(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function() {
                var e = new sub.Node().size(sub.size(64, 64)).addTo(this).anchor(.5, 0).layout(sub.p(.5, 0));
                e.enableClipMode(), e.setClipCornerRadius(6), this._imgAvatar = new sub.Sprite().addTo(e).anchor(.5, .5).layout(sub.p(.5, .5));
            }
        }, {
            key: "updateView",
            value: function(e) {
                if (e) {
                    this.visible(!0);
                    var t = this._baseImgDir + "avatar_boy.png", n = e.avatarUrl ? Re.getAvatarScale(.49) : .8, i = e.avatarUrl ? e.avatarUrl : t;
                    this._imgAvatar.loadImage(i), this._imgAvatar.scale(n);
                    var o = e.rank >= 1 && e.rank <= 3;
                    this._topRankImg.visible(o), this._pRankImg.visible(!o), this._pRankLabel.visible(!o), 
                    o ? this._topRankImg.loadImage(this._baseImgDir + "five/img_" + e.rank + ".png") : this._pRankLabel.setText("" + e.rank);
                } else this.visible(!1);
            }
        } ]) && wt(n.prototype, i), t;
    }();
    function xt(t) {
        return (xt = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Et(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Tt(e) {
        return (Tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Pt(e, t) {
        return (Pt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Rt = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== xt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Tt(t).call(this))).size(e.size), n._isExcludeRank = e.custom.isExcludeRank, 
            Bt.onExcludeRankChange(e.custom.isExcludeRank), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Pt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                var n = new sub.Label("加载中", 22).addTo(this).fontColor(sub.color(53, 86, 162, 255)).anchor(.5, .5).layout(sub.p(.5, .5));
                this._tip = n;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    if (sub.curScene.isViewValid(i)) {
                        var o = sub.size(e.size.width, 72), r = {};
                        r.subCellSize = o, r.baseImgDir = t;
                        var a = {
                            data: [],
                            cellSize: o,
                            cellOffsetX: 0,
                            onCreateCell: function() {
                                return new Ot(r);
                            },
                            onUpdateCell: function(e, t) {
                                e.updateView(t);
                            }
                        }, s = new sub.RankView(a);
                        s.size(sub.size(e.size.width, e.size.height)).addTo(i).anchor(.5, 1).layout(sub.p(.5, 1), sub.p(0, 0)), 
                        i._rankView = s, Bt.pullViewData(e.custom.shortName, function(e) {
                            sub.curScene.isViewValid(i) && (n.removeSelf(), i._viewDataArr = e, i._updateView());
                        });
                    }
                });
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("SetExcludeRank" == (e = e || {}).op) {
                    if (Bt.onExcludeRankChange(e.isExcludeRank), this._isExcludeRank == e.isExcludeRank) return;
                    return this._isExcludeRank = e.isExcludeRank, void this._updateView();
                }
            }
        }, {
            key: "_updateView",
            value: function() {
                if (this._rankView) {
                    var e = this._viewDataArr || [];
                    e = Bt.getShowedViewData(e, this._isExcludeRank), this._rankView.setData(e);
                }
            }
        } ]) && Et(n.prototype, i), t;
    }();
    function It(t) {
        return (It = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Vt(e) {
        return (Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function jt(e, t) {
        return (jt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var At = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== It(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Vt(t).call(this))).size(e.size), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && jt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                this._baseImgDir = t;
                var n = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    sub.curScene.isViewValid(n) && Bt.pullViewData(e.custom.shortName, function(t) {
                        if (sub.curScene.isViewValid(n)) {
                            for (var i = 0, o = Re.getSelfOpenId(), r = void 0, a = 0; a < t.length; a++) {
                                if (t[a].openId == o) {
                                    i = t[a].score;
                                    break;
                                }
                                r = t[a];
                            }
                            r ? n._showSurpassView(r) : n._showSeasonView(e.custom.seasonRankNum, i, e.custom.seasonRankPercent);
                        }
                    }.bind(this));
                });
            }
        }, {
            key: "_showSurpassView",
            value: function(e) {
                this._createAvatarNode(e), new sub.Label("即将超越TA", 21).addTo(this).fontColor(sub.color(53, 86, 162, 255)).anchor(0, .5).layout(sub.p(0, 0), sub.p(164, 108));
                var t = Re.trimString(e.nickname, 4, "..");
                new sub.Label(t, 19).addTo(this).fontColor(sub.color(37, 56, 94, 255)).anchor(0, .5).layout(sub.p(0, 0), sub.p(164, 82));
                var n = this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, e.score) + ".png";
                new sub.Sprite(n).addTo(this).scale(.37).anchor(.5, .5).layout(sub.p(0, 0), sub.p(178, 57)), 
                new sub.Label(e.score + "分", 19).addTo(this).fontColor(sub.color(37, 56, 94, 255)).anchor(0, .5).layout(sub.p(0, 0), sub.p(197, 55));
            }
        }, {
            key: "_showSeasonView",
            value: function(e, t, n) {
                var i = e > 0 && e <= 1e3, o = this._baseImgDir + "medal_icon_" + Bt.getCurGradeLevelByScore(void 0, t) + ".png";
                new sub.Sprite(o).addTo(this).anchor(.5, .5).layout(sub.p(0, 0), sub.p(99, 79)), 
                new sub.Label("赛季排名", 24).addTo(this).fontColor(sub.color(53, 86, 162, 255)).anchor(0, .5).layout(sub.p(0, 0), sub.p(164, 98));
                var r = new sub.Label(i ? "第" : "超过", 22).addTo(this).fontColor(sub.color(37, 56, 94, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(164, 50)), a = r.getContentSize().width + r.getPosition().x + 10, s = i ? e + "" : n + "%", u = new sub.Label(s, 28).addTo(this).fontColor(sub.color(9, 162, 116, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(a, 50));
                a = u.getContentSize().width + u.getPosition().x + 11, new sub.Label(i ? "名" : "玩家", 22).addTo(this).fontColor(sub.color(37, 56, 94, 255)).anchor(0, 0).layout(sub.p(0, 0), sub.p(a, 51));
            }
        }, {
            key: "_createAvatarNode",
            value: function(e) {
                var t = new sub.Node().size(sub.size(72, 72)).addTo(this).anchor(.5, .5).layout(sub.p(0, .5), sub.p(102, 5));
                t.enableClipMode(), t.setClipCornerRadius(4);
                var n = this._baseImgDir + "avatar_boy.png", i = e.avatarUrl ? e.avatarUrl : n, o = e.avatarUrl ? Re.getAvatarScale(.55) : .9;
                new sub.Sprite(i).addTo(t).scale(o).anchor(.5, .5).layout(sub.p(.5, .5));
            }
        } ]) && Dt(n.prototype, i), t;
    }();
    function zt(t) {
        return (zt = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Lt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Nt(e) {
        return (Nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Mt(e, t) {
        return (Mt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Ft = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== zt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Nt(t).call(this))).size(e.size), n._isExcludeRank = e.custom.isExcludeRank, 
            Bt.onExcludeRankChange(e.custom.isExcludeRank), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Mt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                this._baseImgDir = t;
                var n = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    sub.curScene.isViewValid(n) && Bt.pullViewData(e.custom.shortName, function(e) {
                        sub.curScene.isViewValid(n) && (n._viewDataArr = e, n._updateView());
                    });
                });
            }
        }, {
            key: "onSetViewData",
            value: function(e) {
                if ("SetExcludeRank" == (e = e || {}).op) {
                    if (Bt.onExcludeRankChange(e.isExcludeRank), this._isExcludeRank == e.isExcludeRank) return;
                    return this._isExcludeRank = e.isExcludeRank, void this._updateView();
                }
            }
        }, {
            key: "_updateView",
            value: function() {
                var e = this._viewDataArr || [];
                e = Bt.getShowedViewData(e, this._isExcludeRank), this._createAvatars(e);
            }
        }, {
            key: "_createAvatars",
            value: function(e) {
                for (var t = this.getChild(), n = t.length - 1; n > 0; n--) this.removeChild(t[n]);
                for (var i = Math.min(e.length, 5), o = 0; o < i; o++) {
                    var r = new sub.Node().size(sub.size(36, 36)).addTo(this).anchor(0, .5).layout(sub.p(0, .5), sub.p(42 * o, 0));
                    r.enableClipMode(), r.setClipCornerRadius(4);
                    var a = new sub.Sprite().addTo(r).anchor(.5, .5).layout(sub.p(.5, .5)), s = this._baseImgDir + "avatar_boy.png", u = e[o].avatarUrl ? Re.getAvatarScale(.27) : .45, _ = e[o].avatarUrl ? e[o].avatarUrl : s;
                    a.loadImage(_), a.scale(u);
                }
            }
        } ]) && Lt(n.prototype, i), t;
    }(), Bt = {
        TYPE_NAME: "season",
        MAX_SCORE: 9999999999,
        KING_BASE_SCORE: 4200,
        _gradePromptObj: void 0,
        KEY_EXCLUDE_RANK: "excludeRankOption",
        onCreateView: function(e) {
            return this._seasonBeginTime = e.custom.seasonBeginTime, this._honorKingScore = e.custom.honorKingScore, 
            this._rankShortName = e.custom.shortName, "simple" == e.custom.viewType ? new it(e) : "surpass" == e.custom.viewType ? new ut(e) : "season5Rank" == e.custom.viewType ? new gt(e) : "season5Main" == e.custom.viewType ? new Rt(e) : "season5Surpass" == e.custom.viewType ? new At(e) : "season5room" == e.custom.viewType ? new Ft(e) : new Xe(e);
        },
        onInitView: function(e, t) {
            var n = Re.getBaseImgDir(t.imgPathData, "subcontext");
            e.initView(t, n);
        },
        onSetData: function(e) {
            var t = e.shortName, n = {
                wxgame: {}
            };
            n.wxgame.score = e.gradeScore, n.wxgame.update_time = Re.getCurrentDateSecond();
            var i = JSON.stringify(n);
            Se([ {
                key: t,
                value: i
            } ]);
        },
        getGradeLevelByScore: function(e, t) {
            return e = e || this._rankShortName, this.getGradeDetailByScore(e, t).curGradeDescribeStr;
        },
        getCurGradeLevelByScore: function(e, t) {
            return e = e || this._rankShortName, this.getGradeDetailByScore(e, t).curGradeLevel;
        },
        getCurStarLevelByScore: function(e, t) {
            return e = e || this._rankShortName, this.getGradeDetailByScore(e, t).curStarLevel;
        },
        pullViewData: function(e, t) {
            var n = function(n) {
                if (n && n.data && n.data.length) {
                    for (var i = [], o = n.data, r = 0; r < o.length; r++) {
                        var a = {};
                        a.avatarUrl = o[r].avatarUrl, a.nickname = Re.trimString(o[r].nickname + "", 4, ".."), 
                        a.openId = o[r].openid;
                        var s = o[r].KVDataList || [], u = this._getKvDataFromList(s, e), _ = this._getValueFromKVData(u), c = this._getKvDataFromList(s, this.KEY_EXCLUDE_RANK);
                        a.openId != Re.getSelfOpenId() && c && "1" == c.value || (a.score = _.wxgame.score, 
                        a.time = _.wxgame.update_time, i.push(a));
                    }
                    i.sort(function(e, t) {
                        return t.score == e.score ? t.time == e.time ? t.openId > e.openId ? -1 : t.openId < e.openId ? 1 : 0 : e.time - t.time : t.score - e.score;
                    }), i = i.map(function(e, t) {
                        return e.rank = t + 1, e;
                    }), t(i);
                } else t([]);
            }.bind(this);
            we([ e, this.KEY_EXCLUDE_RANK ]).then(n);
        },
        _getKvDataFromList: function(e, t) {
            if (e && e.length) for (var n = 0, i = e.length; n < i; n++) if (e[n] && e[n].key == t) return e[n];
        },
        _getValueFromKVData: function(e) {
            var t = e && e.value;
            if (t) try {
                t = JSON.parse(t);
            } catch (e) {
                console.warn("===========SeasonRankHelper::_getValueFromKVData parse wrong:", t), 
                t = void 0;
            }
            return t || (t = {
                wxgame: {
                    score: 0,
                    update_time: Re.getCurrentDateSecond()
                }
            }), this._fixExpireData(t);
        },
        _fixExpireData: function(e) {
            return e.wxgame.update_time < this._seasonBeginTime && (e.wxgame.score = 0, e.wxgame.update_time = Re.getCurrentDateSecond()), 
            e;
        },
        getGradeDetailByScore: function(e, t) {
            (t < 0 || null == t || t > this.MAX_SCORE) && (t = 0);
            for (var n = 0, i = 1, o = [ 0, 1299 ], r = this._getStarLevelScoreCfgByRankShortName(e), a = 0; a < r.length; a++) for (var s = r[a], u = 0; u < s.length; u++) {
                var _ = s[u], c = _[0], l = _[1];
                if (t >= c && t <= l) {
                    n = a, i = u + 1, o = _;
                    break;
                }
            }
            var h = 5 == i ? 1 : i + 1, f = 5 == i ? n + 1 : n, b = r[f][h - 1], p = {};
            if (p.curGradeLevel = n, p.curStarLevel = i, p.curStarScoreArea = o, p.nextStarLevel = h, 
            p.nextGradeLevel = f, p.nextStarScoreArea = b || o, p.curStarLevelScore = o[0], 
            p.nextStarLevelScore = p.nextStarScoreArea[0], t >= this.KING_BASE_SCORE) {
                var d = this._getKingScoreDetail(t);
                p.curStarLevel = d.curStarLevel, p.nextStarLevel = p.curStarLevel + 1, this.isHonorKing(t, e) && (p.curGradeLevel = 7, 
                p.nextGradeLevel = 7), p.nextStarLevelScore = d.nextStarLevelScore, p.curStarLevelScore = d.curStarLevelScore, 
                p.curStarScoreArea = d.curStarScoreArea, p.nextStarScoreArea = d.nextStarScoreArea;
            }
            return p.curGradeDescribeStr = this.getDescribeStrByScore(e, p.curGradeLevel, p.curStarLevel), 
            p.nextGradeDescribeStr = this.getDescribeStrByScore(e, p.nextGradeLevel, p.nextStarLevel), 
            p;
        },
        _getKingScoreDetail: function(e) {
            var t = {
                curStarLevel: 1,
                curStarLevelScore: this.KING_BASE_SCORE,
                curStarScoreArea: [ this.KING_BASE_SCORE, this.KING_BASE_SCORE + 99 ],
                nextStarLevelScore: this.KING_BASE_SCORE + 100,
                nextStarScoreArea: [ this.KING_BASE_SCORE + 100, this.KING_BASE_SCORE + 199 ]
            };
            if (e < this.KING_BASE_SCORE) return console.warn("====_getKingScoreDetail(subcontext) score less KingBaseScore, score: ", e), 
            t;
            for (var n = 0, i = 100, o = this.KING_BASE_SCORE; o < this.MAX_SCORE; ) {
                if (!(e >= o + 10 * i)) {
                    for (var r = 0; r < 10; r++) {
                        var a = o + r * i, s = o + (r + 1) * i - 1;
                        if (e >= a && e <= s) {
                            var u = {};
                            return u.curStarLevel = n + r + 1, u.curStarLevelScore = a, u.curStarScoreArea = [ a, s ], 
                            9 == r && (i += 100), u.nextStarLevelScore = s + 1, u.nextStarScoreArea = [ s + 1, s + i ], 
                            u;
                        }
                    }
                    break;
                }
                o += 10 * i, i += 100, n += 10;
            }
            return console.warn("====_getKingScoreDetail(subcontext) dont find range, score: ", e), 
            t;
        },
        getGradeLevelNameByLevel: function(e) {
            return [ "青铜", "白银", "黄金", "铂金", "星钻", "皇冠", "王者", "至尊王者" ][e = e > 7 ? 7 : e];
        },
        getDescribeStrByScore: function(e, t, n) {
            return this.getGradeLevelNameByLevel(t) + n + "星";
        },
        isHonorKing: function(e, t) {
            return !(e < this.KING_BASE_SCORE) && e >= this._honorKingScore;
        },
        setGradePromptObj: function(e) {
            this.cleanGradePromptObj(), this._gradePromptObj = e;
        },
        cleanGradePromptObj: function() {
            this._gradePromptObj && this._gradePromptObj.timeId && clearTimeout(this._gradePromptObj.timeId), 
            this._gradePromptObj && this._gradePromptObj.removeSelf(), this._gradePromptObj = void 0;
        },
        _getStarLevelScoreCfgByRankShortName: function(e) {
            var t = [ [ [ 0, 1299 ], [ 1300, 1399 ], [ 1400, 1499 ], [ 1500, 1599 ], [ 1600, 1699 ] ], [ [ 1700, 1799 ], [ 1800, 1899 ], [ 1900, 1999 ], [ 2e3, 2099 ], [ 2100, 2199 ] ], [ [ 2200, 2299 ], [ 2300, 2399 ], [ 2400, 2499 ], [ 2500, 2599 ], [ 2600, 2699 ] ], [ [ 2700, 2799 ], [ 2800, 2899 ], [ 2900, 2999 ], [ 3e3, 3099 ], [ 3100, 3199 ] ], [ [ 3200, 3299 ], [ 3300, 3399 ], [ 3400, 3499 ], [ 3500, 3599 ], [ 3600, 3699 ] ], [ [ 3700, 3799 ], [ 3800, 3899 ], [ 3900, 3999 ], [ 4e3, 4099 ], [ 4100, 4199 ] ], [ [ this.KING_BASE_SCORE, this.MAX_SCORE ] ] ];
            return {}[e] || t;
        },
        getShowedViewData: function(e, t) {
            for (var n = Re.getSelfOpenId(), i = 1, o = [], r = 0, a = e.length; r < a; r++) t && e[r] && e[r].openId == n || (e[r].rank = i, 
            o.push(e[r]), i++);
            return o;
        },
        onExcludeRankChange: function(e) {
            this._cloundExcludeRank != e && (this._cloundExcludeRank = e, this._updateCloudExcludeRank(e));
        },
        _updateCloudExcludeRank: function(e) {
            var t = e ? "1" : "0", n = {
                key: this.KEY_EXCLUDE_RANK,
                value: t
            };
            Se([ n ]);
        }
    };
    function Ut(t) {
        return (Ut = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function Gt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Kt(e) {
        return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Ht(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function Xt(e, t) {
        return (Xt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Yt = function(e) {
        function t(e) {
            var n, i;
            !function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = !(i = Kt(t).call(this)) || "object" !== Ut(i) && "function" != typeof i ? Ht(this) : i)._baseImgDir = e.baseImgDir, 
            n._btnCb = e.btnCb;
            var o = e.cellSize;
            return n.size(o), n._bg = new sub.Scale9Sprite(n._baseImgDir + "bg.png").size(o).addTo(Ht(n)).anchor(.5, .5).layout(sub.p(.5, .5)), 
            n._createAvatarNode(), n._txtNickname = new sub.Label("", 22).addTo(n._bg).fontColor(sub.color(255, 255, 255, 255)).anchor(0, .5).layout(sub.p(0, .5), sub.p(80, -4)), 
            n._btn = new sub.Button().addTo(n._bg).setTextVisible(!1).size(sub.size(85, 45)).setImage(n._baseImgDir + "btn_invite.png").anchor(.5, .5).layout(sub.p(0, .5), sub.p(249, -4)), 
            n._btn.setSwallowTouches(!1), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Xt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "_createAvatarNode",
            value: function() {
                var e = new sub.Node().size(sub.size(60, 60)).addTo(this._bg).anchor(0, .5).layout(sub.p(0, .5), sub.p(10, 0));
                e.enableClipMode(), e.setClipCornerRadius(2), this._imgAvatar = new sub.Sprite().addTo(e).scale(Re.getAvatarScale(.45)).anchor(.5, .5).layout(sub.p(.5, .5));
            }
        }, {
            key: "updateView",
            value: function(e) {
                if (!e) return this.visible(!1), void this._btn.setClickCallback(void 0);
                this.visible(!0), this._imgAvatar.loadImage(e.avatarUrl);
                var t = Re.trimString(e.nickname, 4, "..");
                this._txtNickname.setText(t);
                var n = this;
                this._btn.setClickCallback(function() {
                    n._btnCb(n._btn, e);
                });
            }
        } ]) && Gt(n.prototype, i), t;
    }();
    function Wt(t) {
        return (Wt = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t);
        })(t);
    }
    function qt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function Qt(e) {
        return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function Zt(e, t) {
        return (Zt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    var Jt = function(e) {
        function t(e) {
            var n;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, t), (n = function(e, t) {
                return !t || "object" !== Wt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }(this, Qt(t).call(this)))._share = e.custom || {}, n.size(e.size), n;
        }
        var n, i;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Zt(e, t);
        }(t, sub.Node), n = t, (i = [ {
            key: "initView",
            value: function(e, t) {
                var n = new sub.Label("加载中...", 28).addTo(this).fontColor(sub.color(255, 250, 239, 255)).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(0, 30));
                this._tip = n, this._data = e, this._baseImgDir = t;
                var i = this;
                sub.Loader.instance.load(e.imgPathData, function() {
                    sub.curScene.isViewValid(i) && (i._createChangeBtn(), $t.getRandomFriendList(i._onGetFriendList.bind(i), 2, !0));
                });
            }
        }, {
            key: "_createChangeBtn",
            value: function() {
                var e = new sub.Button().addTo(this).setTextVisible(!1).size(sub.size(162, 47)).setImage(this._baseImgDir + "btn_change.png").anchor(.5, .5).layout(sub.p(.5, 0), sub.p(0, 34));
                this._changeBtn = e;
                var t = this;
                e.setClickCallback(function() {
                    t._onChangeBtnClicked(e);
                });
            }
        }, {
            key: "_createEmptyView",
            value: function() {
                this._emptyView = new sub.Sprite(this._baseImgDir + "none.png").addTo(this).anchor(.5, .5).layout(sub.p(.5, .5), sub.p(9, 67)), 
                new sub.Label("暂无可邀请的好友", 22).addTo(this._emptyView).fontColor(sub.color(129, 129, 129, 255)).anchor(.5, 1).layout(sub.p(.5, 0), sub.p(-5, -21));
            }
        }, {
            key: "_createDataView",
            value: function() {
                var e = this._data, t = this._baseImgDir, n = sub.size(e.size.width, 83), i = {};
                i.cellSize = n, i.baseImgDir = t, i.btnCb = this._onInviteBtnClicked.bind(this);
                var o = {
                    data: [],
                    cellSize: n,
                    cellOffsetX: 0,
                    onCreateCell: function() {
                        return new Yt(i);
                    },
                    onUpdateCell: function(e, t) {
                        e.updateView(t);
                    }
                }, r = new sub.RankView(o);
                r.size(sub.size(e.size.width, e.size.height - 72)).addTo(this).anchor(.5, 1).layout(sub.p(.5, 1), sub.p(0, 0)), 
                this._dataView = r;
            }
        }, {
            key: "_onGetFriendList",
            value: function(e, t) {
                this._isEnd = t, this._isEnd && sub.curScene.isViewValid(this) && (this._tip.setVisible(!1), 
                this._changeBtn.setImage(this._baseImgDir + "btn_change.png"), this._changeBtn.setTouchEnable(!0), 
                this._updateViewData(e));
            }
        }, {
            key: "_updateViewData",
            value: function(e) {
                $t.addShowedData(e), 0 != e.length || this._emptyView ? e.length > 0 && !this._dataView && this._createDataView() : this._createEmptyView(), 
                this._emptyView && this._emptyView.visible(0 == e.length), this._dataView && (this._dataView.visible(e.length > 0), 
                this._dataView.setData(e));
            }
        }, {
            key: "_onInviteBtnClicked",
            value: function(e, t) {
                if (!Re.IsFastClick(e, 1e3)) {
                    var n = {};
                    n.openId = t.openid, n.title = this._share.title, n.imageUrl = this._share.image, 
                    Re.isQQMiniGame() && (n.friendInfo = {
                        avatarUrl: t.avatarUrl,
                        nickname: t.nickname,
                        openid: t.openid
                    }), ke(n).then(function(e) {});
                }
            }
        }, {
            key: "_onChangeBtnClicked",
            value: function(e) {
                this._isEnd && !Re.IsFastClick(e, 1e3) && (this._changeBtn.setImage(this._baseImgDir + "btn_change_gray.png"), 
                this._changeBtn.setTouchEnable(!1), $t.getRandomFriendList(this._onGetFriendList.bind(this), 5, !0));
            }
        } ]) && qt(n.prototype, i), t;
    }(), $t = {
        TYPE_NAME: "tsside",
        MAX_SHOW_COUNT: 20,
        MAX_PLAYER_SHOW_COUNT: 10,
        _showedOpenIds: [],
        _showedData: [],
        onCreateView: function(e) {
            return new Jt(e);
        },
        onInitView: function(e, t) {
            var n = Re.getBaseImgDir(t.imgPathData, "side");
            e.initView(t, n);
        },
        onSetData: function(e) {},
        addShowedData: function(e) {
            var t = this._showedData.concat(e);
            this._showedData = [], this._showedOpenIds = [];
            for (var n = {}, i = 0, o = t.length; i < o; i++) {
                var r = t[i].openid;
                n[r] || (n[r] = !0, this._showedData.push(t[i]), this._showedOpenIds.push(r));
            }
        },
        getRandomFriendList: function(e, t, n) {
            var i = this.MAX_SHOW_COUNT, o = n ? 1 : 0, r = t + o, a = 0, s = 0, u = {}, _ = {}, c = this, l = function n(l, h) {
                a++, 1 == h && s++, 1 == h ? Re.merge(_, l) : Re.merge(u, l);
                var f = c._mergeFriendData(_, u, a < r);
                f.length >= i && (r = (t = s) + o), e(f, a >= r), 1 == h && s < t && Re.getPotentialFriendData().then(function(e) {
                    n(e, 1);
                });
            };
            t > 0 && Re.getPotentialFriendData().then(function(e) {
                l(e, 1);
            }), n && Re.getGameFriendData().then(function(e) {
                l(e, 2);
            });
        },
        _mergeFriendData: function(e, t, n) {
            var i = this.MAX_SHOW_COUNT, o = this.MAX_PLAYER_SHOW_COUNT, r = {}, a = [], s = [];
            r[Re.getSelfOpenId()] = !0;
            for (var u = [ {
                data: t,
                arr: a,
                showedArr: [],
                limit: o
            }, {
                data: e,
                arr: s,
                showedArr: [],
                limit: i
            } ], _ = 0; _ < u.length; _++) {
                var c = u[_].data, l = u[_].arr;
                for (var h in c) if (!r[h]) {
                    if (l.length >= u[_].limit) break;
                    this._isShowedOpenId(h) ? u[_].showedArr.push([ h, c[h] ]) : (r[h] = !0, l.push(c[h]));
                }
            }
            if (!n) {
                var f = Re.filterArr(this._showedData, function(e) {
                    return !!t[e.openid];
                }).map(function(e) {
                    return [ e.openid, e ];
                });
                u.push({
                    data: e,
                    arr: s,
                    showedArr: f,
                    limit: i
                });
                for (var b = 0; b < u.length; b++) {
                    var p = u[b].arr, d = u[b].showedArr;
                    Re.shuffle(d);
                    for (var v = 0; v < d.length; v++) {
                        var y = d[v][0];
                        if (!r[y] && (r[y] = !0, p.push(d[v][1]), p.length >= u[b].limit)) break;
                    }
                    if (a.length + s.length >= i) break;
                }
            }
            var g = a.concat(s);
            return g.length > i && (g.length = i), g;
        },
        _isShowedOpenId: function(e) {
            return -1 != Re.indexOfArr(this._showedOpenIds, e);
        }
    }, en = new Ae();
    sub.curScene = en, en.registerViewFunc(Pe.TYPE_NAME, Pe), en.registerViewFunc(Bt.TYPE_NAME, Bt), 
    en.registerViewFunc($t.TYPE_NAME, $t);
} ]);