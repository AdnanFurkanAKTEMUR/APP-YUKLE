"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMutation = exports.CompanyQuery = exports.CompanyType = void 0;
const nexus_1 = require("nexus");
const CompanyBankAccount_1 = require("../entities/CompanyBankAccount");
const CompanyUser_1 = require("../entities/CompanyUser");
const CompanyTrailer_1 = require("../entities/CompanyTrailer");
const CompanyTrucks_1 = require("../entities/CompanyTrucks");
const CompanyLoad_1 = require("../entities/CompanyLoad");
const Ad_1 = require("../entities/Ad");
const Company_1 = require("../entities/Company");
exports.CompanyType = (0, nexus_1.objectType)({
    name: "Company",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("companyName");
        t.nonNull.string("address");
        t.nonNull.string("phoneNumber");
        t.nonNull.string("vkn");
        t.nonNull.float("point");
        t.list.field("bankAccounts", {
            type: "CompanyBankAccount",
            resolve: async (parent, _args, _context, _info) => {
                return await CompanyBankAccount_1.CompanyBankAccount.find({ where: { company: parent.id } });
            },
        });
        t.list.field("companyUsers", {
            type: "CompanyUser",
            resolve: async (parent) => {
                return await CompanyUser_1.CompanyUser.find({ where: { company: parent.id } });
            },
        });
        t.list.field("companyTrailers", {
            type: "CompanyTrailer",
            resolve: async (parent) => {
                return await CompanyTrailer_1.CompanyTrailer.find({ where: { company: parent.id } });
            },
        });
        t.list.field("companyTrucks", {
            type: "CompanyTruck",
            resolve: async (parent) => {
                return await CompanyTrucks_1.CompanyTruck.find({ where: { company: parent.id } });
            },
        });
        t.list.field("companyLoads", {
            type: "CompanyLoad",
            resolve: async (parent) => {
                return await CompanyLoad_1.CompanyLoad.find({ where: { company: parent.id } });
            },
        });
        t.list.field("ads", {
            type: "Ad",
            resolve: async (parent) => {
                return await Ad_1.Ad.find({ where: { company: parent.id } });
            },
        });
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    },
});
exports.CompanyQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("getCompanies", {
            type: "Company",
            resolve: async () => {
                return await Company_1.Company.find();
            },
        });
        t.nonNull.field("getCompany", {
            type: "Company",
            args: {
                getCompanyId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { getCompanyId } = args;
                const company = await Company_1.Company.findOne({ where: { id: getCompanyId } });
                if (company) {
                    return company;
                }
                else {
                    throw new Error("Kayıt bulunamadı!");
                }
            },
        });
    },
});
exports.CompanyMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createCompanyMutation", {
            type: "Company",
            args: {
                companyName: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                address: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                phoneNumber: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                vkn: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                point: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { companyName, address, phoneNumber, vkn, point } = args;
                const company = await Company_1.Company.create({ companyName, address, phoneNumber, vkn, point }).save();
                if (company) {
                    return company;
                }
                else {
                    throw new Error("Kayıt Eklenemedi!");
                }
            },
        });
        t.nonNull.field("updateCompanyInfo", {
            type: "Company",
            args: {
                companyId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
                companyName: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                address: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                phoneNumber: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                vkn: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                point: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { companyName, address, phoneNumber, vkn, point, companyId } = args;
                const updatedCompany = await Company_1.Company.findOne({ where: { id: companyId } });
                if (!updatedCompany) {
                    throw new Error("Firma bulunamadı!");
                }
                updatedCompany.companyName = companyName;
                updatedCompany.address = address;
                updatedCompany.phoneNumber = phoneNumber;
                updatedCompany.vkn = vkn;
                updatedCompany.point = point;
                updatedCompany.save();
                return updatedCompany;
            },
        });
        t.nonNull.field("deleteCompany", {
            type: "Company",
            args: {
                companyId: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            resolve: async (_parent, args, _context, _info) => {
                const { companyId } = args;
                const deletedCompany = await Company_1.Company.delete({ id: companyId });
                if (deletedCompany.affected == 1) {
                    return "Firma silindi!";
                }
                else {
                    throw new Error("Firma silinirken bir hata ile karşılaşıldı!");
                }
            },
        });
    },
});
//# sourceMappingURL=Company.js.map