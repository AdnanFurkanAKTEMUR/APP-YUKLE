"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ad_1 = require("../../entities/Ad");
const Company_1 = require("../../entities/Company");
const CompanyTrailer_1 = require("../../entities/CompanyTrailer");
const CompanyTrailerResolver = {
    Query: {
        getAllCompanyTrailer: async (_parent, _args, _context, _info) => {
            const companyTrailer = await CompanyTrailer_1.CompanyTrailer.find();
            return companyTrailer;
        },
        getCompanyTrailer: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            try {
                const companyTrailer = await CompanyTrailer_1.CompanyTrailer.findOne({ where: { id } });
                if (!companyTrailer)
                    throw new Error("Kayıt bulunamadı!");
                const company = await Company_1.Company.findOne({ where: { id: companyTrailer.companyId } });
                let ad;
                if (companyTrailer.adId)
                    ad = await Ad_1.Ad.findOne({ where: { id: companyTrailer.adId } });
                return Object.assign(Object.assign({}, companyTrailer), { company: company, ad: ad });
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createCompanyTrailer: async (_parent, args, context, _info) => {
            const { user } = context;
            console.log(user);
            if ((user === null || user === void 0 ? void 0 : user.role) !== "admin")
                throw new Error("Trailer oluşturmaya yetkiniz yok!");
            const { companyId, name } = args.input;
            const companyTrailer = await CompanyTrailer_1.CompanyTrailer.create({ name: name, companyId: companyId }).save();
            const company = await Company_1.Company.findOne({ where: { id: companyId } });
            if (companyTrailer === null || companyTrailer === void 0 ? void 0 : companyTrailer.id)
                return Object.assign(Object.assign({}, companyTrailer), { company: company });
            throw new Error("Oluşturma başarısız");
        },
        updateCompanyTrailer: async (_parent, args, context, _info) => {
            const { id, name, adId } = args.input;
            const { user } = context;
            console.log(user);
            try {
                const cT = await CompanyTrailer_1.CompanyTrailer.findOne({ where: { id } });
                if (!cT)
                    throw new Error("Kayıt bulunamadı!");
                const ad = await Ad_1.Ad.findOne({ where: { id: adId } });
                if (name)
                    cT.name = name;
                if (adId && ad)
                    cT.adId = adId;
                const sr = await cT.save();
                if (sr === null || sr === void 0 ? void 0 : sr.id)
                    return sr;
                throw new Error("Bir hata meydana geldi kayıt edilemedi");
            }
            catch (e) {
                throw new Error(e);
            }
        },
        deleteCompanyTrailer: async (_parent, args, context, _info) => {
            const { id } = args.input;
            const { user } = context;
            console.log(user, "user");
            try {
                const dr = await CompanyTrailer_1.CompanyTrailer.delete({ id });
                if (dr.affected === 1) {
                    return { success: true, msg: "Silme başarılı!" };
                }
                throw new Error("Silme başarısız!");
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = CompanyTrailerResolver;
//# sourceMappingURL=CompanyTrailerResolver.js.map