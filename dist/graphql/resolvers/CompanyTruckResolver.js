"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyTrucks_1 = require("../../entities/CompanyTrucks");
const CompanyTruckResolver = {
    Query: {
        getAllCompanyTruck: async (_parent, _args, _context, _info) => {
            const companyTruck = await CompanyTrucks_1.CompanyTruck.find();
            return companyTruck;
        },
    },
};
exports.default = CompanyTruckResolver;
//# sourceMappingURL=CompanyTruckResolver.js.map