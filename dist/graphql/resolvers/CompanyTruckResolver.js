"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyTrucks_1 = require("../../entities/CompanyTrucks");
const CompanyTruckResolver = {
    Query: {
        getAllCompanyTruck: async (_parent, _args, _context, _info) => {
            const companyTruck = await CompanyTrucks_1.CompanyTruck.find();
            return companyTruck;
        },
    },
    Mutation: {
        createCompanyTruck: async (_parent, args, _context, _info) => {
            const { name, companyId, adId } = args.input;
            const companyTruck = await CompanyTrucks_1.CompanyTruck.create({ name, companyId, adId }).save();
            const company = await Company_1.Company.findOne({ where: { id: companyId } });
            const result = Object.assign(Object.assign({}, companyTruck), { company: company });
            return result;
        },
    },
};
exports.default = CompanyTruckResolver;
//# sourceMappingURL=CompanyTruckResolver.js.map