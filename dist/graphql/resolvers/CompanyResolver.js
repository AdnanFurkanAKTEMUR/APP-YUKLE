"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("@entities/Company");
const CompanyUser_1 = require("@entities/CompanyUser");
const CompanyBankAccount_1 = require("../../entities/CompanyBankAccount");
const CompanyLoad_1 = require("@entities/CompanyLoad");
const CompanyTrailer_1 = require("@entities/CompanyTrailer");
const CompanyTrucks_1 = require("@entities/CompanyTrucks");
const CompanyResolver = {
    Query: {
        getAllCompany: async (_parent, _args, context, _info) => {
            var _a;
            if (!(context === null || context === void 0 ? void 0 : context.user) || ((_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.type) !== 0)
                throw new Error("yetkiniz yok!");
            const company = await Company_1.Company.find();
            return company;
        },
        getCompany: async (_parent, args, context, _info) => {
            if (!(context === null || context === void 0 ? void 0 : context.user))
                throw new Error("yetkiniz yok!");
            const { id } = args.input;
            const company = await Company_1.Company.findOne({ where: { id: id } });
            const companyUsers = await CompanyUser_1.CompanyUser.find({ where: { companyId: id } });
            const companyBankAccounts = await CompanyBankAccount_1.CompanyBankAccount.find({ where: { companyId: id } });
            const companyLoads = await CompanyLoad_1.CompanyLoad.find({ where: { companyId: id } });
            const companyTrailers = await CompanyTrailer_1.CompanyTrailer.find({ where: { companyId: id } });
            const companyTrucks = await CompanyTrucks_1.CompanyTruck.find({ where: { companyId: id } });
            return Object.assign(Object.assign({}, company), { companyUsers: companyUsers, companyBankAccounts: companyBankAccounts, companyLoads: companyLoads, companyTrailers: companyTrailers, companyTrucks: companyTrucks });
        },
    },
    Mutation: {
        createCompany: async (_parent, args, context, _info) => {
            var _a;
            if (!(context === null || context === void 0 ? void 0 : context.user) || ((_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.type) !== 0)
                throw new Error("yetkiniz yok!");
            const { companyName, address, phoneNumber, vkn, point } = args.input;
            const company = await Company_1.Company.create({ companyName, address, phoneNumber, vkn, point }).save();
            return company;
        },
        updateCompany: async (_parent, args, context, _info) => {
            var _a;
            if (!(context === null || context === void 0 ? void 0 : context.user) || ((_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.type) !== 1 || context.user.role !== "admin")
                throw new Error("yetkiniz yok!");
            const { id, companyName, address, phoneNumber, vkn, point } = args.input;
            const company = await Company_1.Company.findOne({ where: { id } });
            if (!company)
                throw new Error("Kayıt bulunamadı!");
            if (companyName)
                company.companyName = companyName;
            if (address)
                company.address = address;
            if (phoneNumber)
                company.phoneNumber = phoneNumber;
            if (vkn)
                company.vkn = vkn;
            if (point)
                company.point = point;
            const sR = await company.save();
            if (sR === null || sR === void 0 ? void 0 : sR.id)
                return company;
            throw new Error("Güncelleme başarısız");
        },
        deleteCompany: async (_parent, args, context, _info) => {
            var _a;
            if (!(context === null || context === void 0 ? void 0 : context.user) || ((_a = context === null || context === void 0 ? void 0 : context.user) === null || _a === void 0 ? void 0 : _a.type) !== 0)
                throw new Error("yetkiniz yok!");
            const { id } = args.input;
            const company = await Company_1.Company.delete({ id });
            if (company.affected === 1)
                return { success: true, msg: "Silme başarılı" };
            throw new Error("Silme başarısız");
        },
    },
};
exports.default = CompanyResolver;
//# sourceMappingURL=CompanyResolver.js.map