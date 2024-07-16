"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyUserMutation = exports.CompanyUserQuery = exports.CompanyUserType = void 0;
const nexus_1 = require("nexus");
const Ad_1 = require("../entities/Ad");
const Company_1 = require("../entities/Company");
const CompanyUser_1 = require("../entities/CompanyUser");
const argon2_1 = __importDefault(require("argon2"));
const generateToken_1 = __importDefault(require("../helpers/generateToken"));
exports.CompanyUserType = (0, nexus_1.objectType)({
    name: "CompanyUser",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("surname");
        t.nonNull.string("email");
        t.nonNull.string("role");
        t.nonNull.string("password");
        t.nullable.string("verificationToken");
        t.nullable.string("verificationTokenExpires");
        t.nullable.string("resetPasswordToken");
        t.nullable.string("resetPasswotdTokenExpires");
        t.nonNull.boolean("verified");
        t.nonNull.field("company", {
            type: "Company",
            resolve: async (parent) => {
                console.log(parent.companyId);
                return await Company_1.Company.findOne({ where: { id: parent.companyId } });
            },
        });
        t.list.field("createdAds", {
            type: "Ad",
            resolve: async (parent) => {
                return await Ad_1.Ad.find({ where: { createdUser: parent.id } });
            },
        });
        t.list.field("publishAds", {
            type: "Ad",
            resolve: async (parent) => {
                return await Ad_1.Ad.find({ where: { publishUser: parent.id } });
            },
        });
        t.list.field("approvedAds", {
            type: "Ad",
            resolve: async (parent) => {
                return await Ad_1.Ad.find({ where: { approvedUser: parent.id } });
            },
        });
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    },
});
exports.CompanyUserQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("getAllCompanyUsers", {
            type: "CompanyUser",
            resolve: async () => {
                const allCompanyUsers = await CompanyUser_1.CompanyUser.find();
                if (allCompanyUsers) {
                    return allCompanyUsers;
                }
                else {
                    throw new Error("Kullanıcılar bulunamadı!");
                }
            },
        });
    },
});
exports.CompanyUserMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createCompanyUser", {
            type: "CompanyUser",
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                surname: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                role: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                companyId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { name, surname, email, role, companyId, password } = args;
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
        });
        t.nonNull.field("updateCompanyUser", {
            type: "CompanyUser",
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                surname: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                companyUserId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { name, surname, companyUserId } = args;
                const companyUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: companyUserId } });
                if (!companyUser) {
                    throw new Error("Kullanıcı bulunamadı!");
                }
                companyUser.name = name;
                companyUser.surname = surname;
                await companyUser.save();
                return companyUser;
            },
        });
        t.nonNull.field("deleteCompanyUser", {
            type: "String",
            args: {
                companyUserId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { companyUserId } = args;
                const deleted = await CompanyUser_1.CompanyUser.delete({ id: companyUserId });
                if (deleted.affected === 1) {
                    return "Silindi!";
                }
                return "hata";
            },
        });
    },
});
//# sourceMappingURL=CompanyUser.js.map