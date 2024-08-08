"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyProfile_1 = require("../../entities/CompanyProfile");
const CompanyRecord_1 = require("../../entities/CompanyRecord");
const CompanyRecordResolvers = {
    Query: {
        getCompanyRecord: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyRecord = await CompanyRecord_1.CompanyRecord.findOne({
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
    Mutation: {
        createCompanyRecord: async (_parent, args, _context, _info) => {
            console.log("first");
            try {
                const createdCompanyProfile = await CompanyProfile_1.CompanyProfile.create({
                    companyCode: "code01",
                    companyPhoneNumber: args.input.companyPhoneNumber,
                    taxNumber: args.input.taxNumber,
                    taxAdministration: args.input.taxNumber,
                }).save();
                await CompanyRecord_1.CompanyRecord.create(Object.assign(Object.assign({}, args.input), { companyProfileId: createdCompanyProfile.id })).save();
                return { success: true, msg: "Kayıt Başarılı!" };
            }
            catch (e) {
                console.log(e);
                throw new Error(e);
            }
        },
    },
};
exports.default = CompanyRecordResolvers;
//# sourceMappingURL=CompanyRecordResolver.js.map