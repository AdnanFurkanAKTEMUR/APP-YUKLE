"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyLoad_1 = require("@entities/CompanyLoad");
const CompanyLoadResolver = {
    Query: {
        getAllCompanyLoad: async (_parent, _args, _context, _info) => {
            const companyLoad = await CompanyLoad_1.CompanyLoad.find();
            return companyLoad;
        },
        getCompanyLoad: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyLoad = await CompanyLoad_1.CompanyLoad.findOne({ where: { id: id } });
            return companyLoad;
        },
    },
};
exports.default = CompanyLoadResolver;
//# sourceMappingURL=CompanyLoadResolver.js.map