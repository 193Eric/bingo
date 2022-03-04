function e(e) {
    return Math.min(Math.max(e, 0), 100);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/color"), r = require("../common/component"), n = require("../common/utils"), a = require("../common/validator"), i = require("../common/version"), o = require("./canvas"), l = 2 * Math.PI, s = -Math.PI / 2;

r.VantComponent({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: "round"
        },
        value: {
            type: Number,
            value: 0,
            observer: "reRender"
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100,
            observer: function() {
                this.drawCircle(this.currentValue);
            }
        },
        fill: String,
        layerColor: {
            type: String,
            value: t.WHITE
        },
        color: {
            type: null,
            value: t.BLUE,
            observer: function() {
                var e = this;
                this.setHoverColor().then(function() {
                    e.drawCircle(e.currentValue);
                });
            }
        },
        type: {
            type: String,
            value: ""
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        hoverColor: t.BLUE
    },
    methods: {
        getContext: function() {
            var e = this, t = this.data, r = t.type, a = t.size;
            if ("" === r || !i.canIUseCanvas2d()) {
                var l = wx.createCanvasContext("van-circle", this);
                return Promise.resolve(l);
            }
            var s = n.getSystemInfoSync().pixelRatio;
            return new Promise(function(t) {
                wx.createSelectorQuery().in(e).select("#van-circle").node().exec(function(n) {
                    var i = n[0].node, l = i.getContext(r);
                    e.inited || (e.inited = !0, i.width = a * s, i.height = a * s, l.scale(s, s)), t(o.adaptor(l));
                });
            });
        },
        setHoverColor: function() {
            var e = this, t = this.data, r = t.color, n = t.size;
            return a.isObj(r) ? this.getContext().then(function(t) {
                var a = t.createLinearGradient(n, 0, 0, 0);
                Object.keys(r).sort(function(e, t) {
                    return parseFloat(e) - parseFloat(t);
                }).map(function(e) {
                    return a.addColorStop(parseFloat(e) / 100, r[e]);
                }), e.hoverColor = a;
            }) : (this.hoverColor = r, Promise.resolve());
        },
        presetCanvas: function(e, t, r, n, a) {
            var i = this.data, o = i.strokeWidth, l = i.lineCap, s = i.clockwise, u = i.size / 2, c = u - o / 2;
            e.setStrokeStyle(t), e.setLineWidth(o), e.setLineCap(l), e.beginPath(), e.arc(u, u, c, r, n, !s), 
            e.stroke(), a && (e.setFillStyle(a), e.fill());
        },
        renderLayerCircle: function(e) {
            var t = this.data, r = t.layerColor, n = t.fill;
            this.presetCanvas(e, r, 0, l, n);
        },
        renderHoverCircle: function(e, t) {
            var r = this.data.clockwise, n = l * (t / 100), a = r ? s + n : 3 * Math.PI - (s + n);
            this.presetCanvas(e, this.hoverColor, s, a);
        },
        drawCircle: function(t) {
            var r = this, n = this.data.size;
            this.getContext().then(function(a) {
                a.clearRect(0, 0, n, n), r.renderLayerCircle(a);
                var i = e(t);
                0 !== i && r.renderHoverCircle(a, i), a.draw();
            });
        },
        reRender: function() {
            var e = this, t = this.data, r = t.value, n = t.speed;
            n <= 0 || n > 1e3 ? this.drawCircle(r) : (this.clearInterval(), this.currentValue = this.currentValue || 0, 
            this.interval = setInterval(function() {
                e.currentValue !== r ? (Math.abs(e.currentValue - r) < 1 ? e.currentValue = r : e.currentValue < r ? e.currentValue += 1 : e.currentValue -= 1, 
                e.drawCircle(e.currentValue)) : e.clearInterval();
            }, 1e3 / n));
        },
        clearInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            this.interval && (clearInterval(this.interval), this.interval = null);
        })
    },
    mounted: function() {
        var e = this;
        this.currentValue = this.data.value, this.setHoverColor().then(function() {
            e.drawCircle(e.currentValue);
        });
    },
    destroyed: function() {
        this.clearInterval();
    }
});