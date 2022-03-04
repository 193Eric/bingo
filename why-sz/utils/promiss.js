function n() {
    var n = getCurrentPages();
    return n[n.length - 1];
}

var o = require("./api"), e = require(".//util");

exports.loginCheck = function(t) {
    if (t.onLoad) {
        var r = t.onLoad;
        t.onLoad = function(t) {
            wx.login({
                success: function(i) {
                    (0, o.login)({
                        code: i.code,
                        login_type: "third"
                    }).then(function(o) {
                        (0, e.setInfo)("userInfo", o.data);
                        var i = n();
                        r.call(i, t);
                    }).catch(function() {
                        (0, e.setInfo)("userInfo", "");
                        var o = n();
                        r.call(o, t);
                    });
                }
            });
        };
    }
    return t;
};