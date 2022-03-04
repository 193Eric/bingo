Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getShopList = function(e) {
    return r(t + "/applet/merchant/store/user/list", e);
}, exports.getUserHistory = function(e) {
    return r(t + "/applet/queue/order/user/history", e);
}, exports.getUserState = function(e) {
    return r(t + "/applet/queue/order/user/state", e);
}, exports.applyUserGen = function(e) {
    return r(t + "/applet/queue/order/user/gen", e);
}, exports.getBanner = function(e) {
    return r(t + "/applet/common/banner/list", e);
}, exports.getUserQueue = function(e) {
    return r(t + "/applet/queue/order/user/list", e);
}, exports.getMerchantStore = function(e) {
    return r(t + "/applet/merchant/store/queue/list", e);
}, exports.login = function(e) {
    return r(t + "/sys/admin/user/login", e);
}, exports.getLastOrder = function(e) {
    return r(t + "/applet/queue/order/user/lastOrder", e);
}, exports.getOrder = function(e) {
    return r(t + "/applet/queue/order/user/detail", e);
}, exports.cancelQueue = function(e) {
    return r(t + "/applet/queue/order/user/cancel", e);
};

var e = require("./const"), r = require("./util").http, t = e.API_URL;