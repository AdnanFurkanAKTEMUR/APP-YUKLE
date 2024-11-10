"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const jwt_1 = require("next-auth/jwt");
const auth = async (header, cookie) => {
    try {
        const token = header.split(" ")[1] || "";
        let webToken;
        if (cookie) {
            const next_auth_session_token = cookie.split(" ")[2];
            const equalText = next_auth_session_token.indexOf("=");
            webToken = next_auth_session_token.substring(equalText + 1);
        }
        if (!token && !webToken) {
            throw new Error("Invalid Token");
        }
        if (webToken) {
            const decoded = await (0, jwt_1.decode)({
                token: webToken,
                secret: process.env.NEXTAUTH_SECRET || "",
            });
            if (decoded) {
                decoded.role = "";
                decoded.from = "web";
                const payload = decoded;
                if (isAuthTokenPayload(payload)) {
                    return payload;
                }
            }
        }
        if (token) {
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            console.log(verified, "verified");
            const payload = verified;
            if (isAuthTokenPayload(payload)) {
                payload.from = "mobil";
                return payload;
            }
        }
        return null;
    }
    catch (error) {
        return null;
    }
};
exports.auth = auth;
function isAuthTokenPayload(payload) {
    return (typeof payload === "object" &&
        payload !== null &&
        "id" in payload &&
        "company_id" in payload &&
        "name" in payload &&
        "surname" in payload &&
        "email" in payload &&
        "verified" in payload &&
        "role" in payload &&
        "type" in payload);
}
//# sourceMappingURL=auth.js.map