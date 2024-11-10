"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyRecordResolvers = {
    Query: {
        getCompanyRecord: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyRecord = await Company_1.Company.findOne({
                where: {
                    id,
                },
            });
            if (companyRecord)
                return companyRecord;
            throw new Error("Kayıt bulunamadı!");
        },
        getAllCompanyRecord: async (_parent, _args, context, _info) => {
            const user = context.user;
            if (!user || user.type != 0)
                throw new Error("Yetkisiz işlem!");
            try {
                const companyRecors = await Company_1.Company.find();
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
exports.default = CompanyRecordResolvers;
//# sourceMappingURL=CompanyRecordResolver.js.map