function t(t, n) {
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = wx.getSystemInfoSync(), r = n, c = new Date().getTime(), s = "91xft" + new Date().getTime(), d = t + "&POST&" + o.APP_CLIENTID + "&" + c + "&" + s + (r ? "&" + JSON.stringify(r) : "");
    console.log(d);
    var g = e.HmacSHA256(d, o.APP_SIGNKEY);
    return a["Client-Id"] = o.APP_CLIENTID, a["Nonce-Str"] = s, a.Timestamp = c, a.Signature = g.toString().toUpperCase(), 
    a["Client-Env"] = JSON.stringify(i), a;
}

function n(t) {
    var n = !1;
    return r.map(function(o) {
        t.indexOf(o) >= 0 && (n = !0);
    }), n;
}

var o = require("./const"), e = require("./crypto"), a = function(t, n) {
    wx.setStorageSync(t, n);
}, i = function(t) {
    return wx.getStorageSync(t);
}, r = [ "/sys/admin/user/login" ], c = wx.getAccountInfoSync().miniProgram.appId;

module.exports = {
    http: function(o) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], 
        arguments[3]);
        return new Promise(function(s, d) {
            e.app_id = c;
            var g = e, u = i("userInfo").token, f = t(o, g);
            u && (f.Authorization = u), console.log("【湖南星富通前端开发团队】 %crequest:" + o, "color: #fc4d50"), 
            console.log("【湖南星富通前端开发团队】 params:" + o, g), wx.showNavigationBarLoading(), wx.request({
                url: "" + o,
                data: g,
                method: r || "POST",
                header: f,
                success: function(t) {
                    wx.hideNavigationBarLoading(), 200 == t.statusCode ? "000000" == t.data.code ? (console.log(o + "返回信息:", t.data), 
                    s(t.data)) : "4U0010" == t.data.code || "4U0011" == t.data.code ? (a("userInfo", ""), 
                    wx.hideLoading()) : (n(o) || wx.showToast({
                        title: t.data.msg,
                        icon: "none"
                    }), d(t.data)) : (wx.showToast({
                        title: "网络错误！",
                        icon: "none",
                        duration: 2e3
                    }), d(t.data));
                },
                fail: function(t) {
                    wx.hideNavigationBarLoading(), wx.showToast({
                        title: "网络错误",
                        icon: "none"
                    }), wx.hideLoading();
                },
                complete: function() {}
            });
        });
    },
    setInfo: a,
    getInfo: i
};