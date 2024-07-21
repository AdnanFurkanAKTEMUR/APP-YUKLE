"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyUser_1 = require("../../entities/CompanyUser");
const CompanyBankAccount_1 = require("../../entities/CompanyBankAccount");
const CompanyLoad_1 = require("../../entities/CompanyLoad");
const CompanyTrailer_1 = require("../../entities/CompanyTrailer");
const CompanyTrucks_1 = require("../../entities/CompanyTrucks");
const CompanyResolver = {
    Query: {
        getAllCompany: async (_parent, _args, _context, _info) => {
            const company = await Company_1.Company.find();
            return company;
        },
        getCompany: async (_parent, args, _context, _info) => {
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
        createCompany: async (_parent, args, _context, _info) => {
            const { companyName, address, phoneNumber, vkn, point } = args.input;
            const company = await Company_1.Company.create({ companyName, address, phoneNumber, vkn, point }).save();
            return company;
        },
    },
};
exports.default = CompanyResolver;
//# sourceMappingURL=CompanyResolver.js.map