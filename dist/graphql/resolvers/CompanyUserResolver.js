"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyUser_1 = require("../../entities/CompanyUser");
const generateToken_1 = __importDefault(require("../../helpers/generateToken"));
const argon2_1 = __importDefault(require("argon2"));
const CompanyUserResolver = {
    Query: {
        getAllCompanyUser: async (_parent, _args, _context, _info) => {
            const companyUser = await CompanyUser_1.CompanyUser.find();
            return companyUser;
        },
        getCompanyUser: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: id } });
            return companyUser;
        },
    },
    Mutation: {
        createCompanyUser: async (_parent, args, _context, _info) => {
            const { name, surname, email, role, companyId, password } = args.input;
            const hashedPassword = await argon2_1.default.hash(password);
            const verificationToken = (0, generateToken_1.default)(32);
            const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
            const companyUser = await CompanyUser_1.CompanyUser.create({ name, surname, email, role, companyId: companyId, password: hashedPassword, verificationToken, verificationTokenExpires, verified: false }).save();
            if (companyUser) {
                return companyUser;
            }
            else {
                throw new Error("Kullanıcı bulunamadı!");
            }
        },
    },
};
exports.default = CompanyUserResolver;
//# sourceMappingURL=CompanyUserResolver.js.map