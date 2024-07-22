"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ad_1 = require("../../entities/Ad");
const Company_1 = require("../../entities/Company");
const CompanyLoad_1 = require("../../entities/CompanyLoad");
const CompanyTrailer_1 = require("../../entities/CompanyTrailer");
const CompanyUser_1 = require("../../entities/CompanyUser");
const AdResolver = {
    Query: {
        getAllAd: async (_parent, _args, _context, _info) => {
            const ad = await Ad_1.Ad.find();
            return ad;
        },
        getAd: async (_parent, args, context, _info) => {
            const { id } = args.input;
            const { user } = context;
            console.log(user, "user");
            try {
                const ad = await Ad_1.Ad.findOne({ where: { id } });
                const company = await Company_1.Company.findOne({ where: { id: ad === null || ad === void 0 ? void 0 : ad.companyId } });
                const companyTrailer = await CompanyTrailer_1.CompanyTrailer.findOne({ where: { adId: id } });
                const companyLoad = await CompanyLoad_1.CompanyLoad.findOne({ where: { adId: id } });
                const createdUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: ad === null || ad === void 0 ? void 0 : ad.createdCompanyUserId } });
                let approvedUser;
                if (ad === null || ad === void 0 ? void 0 : ad.approvedCompanyUserId)
                    approvedUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: ad === null || ad === void 0 ? void 0 : ad.approvedCompanyUserId } });
                let publishedUser;
                if (ad === null || ad === void 0 ? void 0 : ad.publishedCompanyUserId)
                    publishedUser = await CompanyUser_1.CompanyUser.findOne({ where: { id: ad === null || ad === void 0 ? void 0 : ad.publishedCompanyUserId } });
                return Object.assign(Object.assign({}, ad), { company: company, companyTrailer: companyTrailer, companyLoad: companyLoad, createdUser: createdUser, publishedUser: publishedUser, approvedUser: approvedUser });
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
    Mutation: {
        createAd: async (_parent, args, context, _info) => {
            const { companyId, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck } = args.input;
            const { user } = context;
            if (!user)
                throw new Error("Yetki hatası!");
            try {
                const ad = await Ad_1.Ad.create({ createdCompanyUserId: user.user_id, companyId, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck }).save();
                if (ad)
                    return ad;
                throw new Error("Oluşturulamadı!");
            }
            catch (e) {
                throw new Error(e);
            }
        },
        updateAd: async (_parent, args, context, _info) => {
            const { id, title, active, arrivalDate, departureDate, description, documents, doubleDirection, driverPointFilter, price, prioty, tonage, trailer, truck, approved, published } = args.input;
            const { user } = context;
            if (!user)
                throw new Error("Yetki hatası!");
            try {
                const ad = await Ad_1.Ad.findOne({ where: { id } });
                if (!ad)
                    throw new Error("Kayıt bulunamadı!");
                if (title)
                    ad.title = title;
                if (active)
                    ad.active = active;
                if (arrivalDate)
                    ad.arrivalDate = arrivalDate;
                if (departureDate)
                    ad.departureDate = departureDate;
                if (description)
                    ad.description = description;
                if (documents)
                    ad.documents = documents;
                if (doubleDirection)
                    ad.doubleDirection = doubleDirection;
                if (driverPointFilter)
                    ad.driverPointFilter = driverPointFilter;
                if (price)
                    ad.price = price;
                if (prioty)
                    ad.prioty = prioty;
                if (tonage)
                    ad.tonage = tonage;
                if (trailer)
                    ad.trailer = trailer;
                if (truck)
                    ad.truck = truck;
                if (approved)
                    ad.approved = approved;
                if (approved)
                    ad.approvedCompanyUserId = user.user_id;
                if (published)
                    ad.published = published;
                if (published)
                    ad.publishedCompanyUserId = user.user_id;
                const sr = await ad.save();
                if (sr)
                    return sr;
                throw new Error("Bir hata meydana geldi!");
            }
            catch (e) {
                throw new Error(e);
            }
        },
        deleteAd: async (_parent, args, context, _info) => {
            const { id } = args.input;
            const { user } = context;
            console.log(user, "user");
            try {
                const ad = await Ad_1.Ad.delete({ id });
                if (ad.affected === 1) {
                    const companyTrailer = await CompanyTrailer_1.CompanyTrailer.findOne({ where: { adId: id } });
                    if (companyTrailer) {
                        companyTrailer.adId = null;
                        await companyTrailer.save();
                    }
                    const companyLoad = await CompanyLoad_1.CompanyLoad.findOne({ where: { adId: id } });
                    if (companyLoad) {
                        companyLoad.adId = null;
                        await companyLoad.save();
                    }
                }
            }
            catch (e) {
                throw new Error(e);
            }
        },
    },
};
exports.default = AdResolver;
//# sourceMappingURL=AdResolver.js.map