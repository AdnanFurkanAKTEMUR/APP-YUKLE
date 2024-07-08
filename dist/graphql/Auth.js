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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMutation = exports.AuthType = void 0;
const nexus_1 = require("nexus");
const jwt = __importStar(require("jsonwebtoken"));
const argon2_1 = __importDefault(require("argon2"));
const AdminUser_1 = require("../entities/AdminUser");
exports.AuthType = (0, nexus_1.objectType)({
    name: "AuthType",
    definition(t) {
        t.nonNull.string("token"),
            t.nonNull.field("admin_user", {
                type: "AdminUser",
            });
    },
});
exports.AuthMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("login", {
            type: "AuthType",
            args: { email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()), password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()) },
            async resolve(_parent, args, _context, _info) {
                try {
                    const { email, password } = args;
                    const admin_user = await AdminUser_1.AdminUser.findOne({ where: { email } });
                    if (!admin_user) {
                        throw new Error("Kullanıcı bulunamadı");
                    }
                    const isValid = await argon2_1.default.verify(admin_user.password, password);
                    if (!isValid)
                        throw new Error("Invalid creds.");
                    const token = jwt.sign({ user_id: admin_user.id }, process.env.TOKEN_SECRET);
                    return { token, admin_user };
                }
                catch (e) {
                    throw new Error("hata:" + e);
                }
            },
        });
    },
});
//# sourceMappingURL=Auth.js.map