"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserMutation = exports.AdminUserQuery = exports.AdminUserType = void 0;
const nexus_1 = require("nexus");
const AdminUser_1 = require("../entities/AdminUser");
const argon2_1 = __importDefault(require("argon2"));
const generateToken_1 = __importDefault(require("../helpers/generateToken"));
const nodemailer_1 = require("../util/nodemailer");
exports.AdminUserType = (0, nexus_1.objectType)({
    name: "AdminUser",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("surname");
        t.nonNull.string("email");
        t.nonNull.string("password");
        t.nonNull.string("created_at");
        t.nonNull.string("updated_at");
        t.nullable.string("verification_token");
        t.nullable.string("verification_token_expires");
        t.nullable.string("reset_password_token");
        t.nullable.string("reset_passwotd_token_expires");
        t.nonNull.boolean("verified");
    },
});
exports.AdminUserQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.field("getAdminUserQuery", {
            type: "AdminUser",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            async resolve(_parent, args, _context, _info) {
                const { id } = args;
                const user = await AdminUser_1.AdminUser.findOne({ where: { id: id } });
                if (user) {
                    return user;
                }
                else {
                    throw new Error("Kullanıcı bulunamadı");
                }
            },
        });
        t.nonNull.field("getAllAdminUserQuery", {
            type: "AdminUser",
            async resolve(_1, _2, _3, _4) {
                const adminUsers = await AdminUser_1.AdminUser.find();
                if (adminUsers.length > 0) {
                    return adminUsers;
                }
                else {
                    throw new Error("Kullanıcılar bulunamadı!");
                }
            },
        });
    },
});
exports.AdminUserMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createAdminUserMutation", {
            type: "AdminUser",
            args: {
                email: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                surname: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                password: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            async resolve(_, args, context, ____) {
                const { email, name, surname, password } = args;
                const conn = context.SqlConnection;
                const hashedPassword = await argon2_1.default.hash(password);
                const verification_token = (0, generateToken_1.default)(32);
                const verification_token_expires = new Date(Date.now() + 30 * 60 * 1000);
                let adminUser;
                try {
                    const result = await conn
                        .createQueryBuilder()
                        .insert()
                        .into(AdminUser_1.AdminUser)
                        .values({
                        email,
                        name,
                        surname,
                        password: hashedPassword,
                        verification_token,
                        verification_token_expires,
                        verified: false,
                    })
                        .returning("*")
                        .execute();
                    adminUser = result.raw[0];
                    await (0, nodemailer_1.CreateAdminUserEmail)({
                        to: email,
                        subject: "Kayıt",
                        text: "hoş geldiniz!tirmob",
                    });
                    return adminUser;
                }
                catch (e) {
                    throw new Error("db hatası" + e);
                }
            },
        });
    },
});
//# sourceMappingURL=AdminUser.js.map