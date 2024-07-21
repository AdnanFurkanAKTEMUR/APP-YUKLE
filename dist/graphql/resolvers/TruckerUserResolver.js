"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TruckerUser_1 = require("../../entities/TruckerUser");
const argon2_1 = __importDefault(require("argon2"));
const generateToken_1 = __importDefault(require("../../helpers/generateToken"));
const TruckerUserResolver = {
    Query: {
        getAllTruckerUser: async (_parent, _args, _context, _info) => {
            const truckerUsers = await TruckerUser_1.TruckerUser.find();
            return truckerUsers;
        },
        getTruckerUser: async (_parent, args, _context, _info) => {
            const trucker = await TruckerUser_1.TruckerUser.findOne({ where: { id: args.input.id } });
            return trucker;
        },
    },
    Mutation: {
        createTruckerUser: async (_parent, args, context, _info) => {
            const { TruckerName, TruckerSurname, TruckerIdentificationNumer, TruckerMail, TruckerPhone, TruckerPassword, TruckerUserName } = args.input;
            const conn = context.SqlConnection;
            const hashedTruckerPassword = await argon2_1.default.hash(TruckerPassword);
            const TruckerVerificationToken = (0, generateToken_1.default)(32);
            const TruckerVerificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
            let truckerUser;
            try {
                const result = await conn
                    .createQueryBuilder()
                    .insert()
                    .into(TruckerUser_1.TruckerUser)
                    .values({
                    TruckerName,
                    TruckerSurname,
                    TruckerIdentificationNumer,
                    TruckerMail,
                    TruckerPhone,
                    TruckerUserName,
                    TruckerPassword: hashedTruckerPassword,
                    TruckerVerificationToken,
                    TruckerVerificationTokenExpires,
                    TruckerVerfied: false,
                })
                    .returning("*")
                    .execute();
                truckerUser = result.raw[0];
                return truckerUser;
            }
            catch (x) {
                throw new Error("Database Hatası!" + x);
            }
        },
    },
};
exports.default = TruckerUserResolver;
//# sourceMappingURL=TruckerUserResolver.js.map