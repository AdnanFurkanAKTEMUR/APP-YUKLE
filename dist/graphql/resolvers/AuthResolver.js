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
const AdminUser_1 = require("../../entities/AdminUser");
const CompanyUser_1 = require("../../entities/CompanyUser");
const argon2_1 = __importDefault(require("argon2"));
const jwt = __importStar(require("jsonwebtoken"));
const AuthResolver = {
    Mutation: {
        loginAdminUserMobile: async (_parent, args, _context, _info) => {
            const { email, password } = args.input;
            const adminUser = await AdminUser_1.AdminUser.findOne({ where: { email } });
            if (!adminUser)
                throw new Error("Kullanıcı bulunamadı");
            const isValid = await argon2_1.default.verify(adminUser.password, password);
            if (!isValid)
                throw new Error("Invalid creds.");
            const token = jwt.sign({ id: adminUser.id, name: adminUser.name, surname: adminUser.surname, email: adminUser.email, verified: adminUser.verified, type: adminUser.type, companyId: 0, role: "" }, process.env.TOKEN_SECRET);
            return { token, adminUser };
        },
        loginCompanyUserMobile: async (_parent, args, _context, _info) => {
            const { email, password } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { userEmail: email } });
            if (!companyUser)
                throw new Error("Kullanıcı bulunamadı");
            const isValid = await argon2_1.default.verify(companyUser.userPassword, password);
            if (!isValid)
                throw new Error("Invalid creds.");
            const token = jwt.sign({ user_id: companyUser.id, company_id: "", name: companyUser.userFirstName, surname: companyUser.userLastName, role: companyUser.userRole, email: companyUser.userEmail, type: companyUser.type }, process.env.TOKEN_SECRET);
            return { token, companyUser };
        },
    },
};
exports.default = AuthResolver;
//# sourceMappingURL=AuthResolver.js.map