"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateToken;
function generateToken(n) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var token = "";
    for (var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}
//# sourceMappingURL=generateToken.js.map