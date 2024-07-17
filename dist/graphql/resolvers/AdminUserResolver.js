"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminUser_1 = require("../../entities/AdminUser");
const argon2_1 = __importDefault(require("argon2"));
const generateToken_1 = __importDefault(require("../../helpers/generateToken"));
const AdminUserResolvers = {
    Query: {
        getAllAdminUser: async (_parent, _args, _context, _info) => {
            const adminUsers = await AdminUser_1.AdminUser.find();
            return adminUsers;
        },
        getAdminUser: async (_parent, args, _context, _info) => {
            const user = await AdminUser_1.AdminUser.findOne({ where: { id: args.input.id } });
            return user;
        },
    },
    Mutation: {
        createAdminUser: async (_parent, args, context, _info) => {
            const { email, name, surname, password } = args.input;
            const conn = context.SqlConnection;
            const hashedPassword = await argon2_1.default.hash(password);
            const verificationToken = (0, generateToken_1.default)(32);
            const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
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
                    verificationToken,
                    verificationTokenExpires,
                    verified: false,
                })
                    .returning("*")
                    .execute();
                adminUser = result.raw[0];
                return adminUser;
            }
            catch (e) {
                throw new Error("db hatası" + e);
            }
        },
    },
};
exports.default = AdminUserResolvers;
//# sourceMappingURL=AdminUserResolver.js.map