"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyRecord_1 = require("../../entities/CompanyRecord");
const AdminUserResolvers = {
    Query: {
        getCompanyRecord: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyRecord = await CompanyRecord_1.CompanyRecord.findOne({ where: { id } });
            if (companyRecord)
                return companyRecord;
            throw new Error("Kayıt bulunamadı!");
        },
        getAllCompanyRecord: async (_parent, _args, context, _info) => {
            const user = context.user;
            if (!user || user.type != 0)
                throw new Error("Yetkisiz işlem!");
            try {
                const companyRecors = await CompanyRecord_1.CompanyRecord.find();
                if (companyRecors.length > 0) {
                    return companyRecors;
                }
                else {
                    throw new Error("Kayıt bulunamadı!");
                }
            }
            catch (e) {
                throw new Error(e + "");
            }
        },
    },
    Mutation: {},
};
exports.default = AdminUserResolvers;
//# sourceMappingURL=CompanyRecordResolver.js.map