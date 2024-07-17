"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyTrailer_1 = require("../../entities/CompanyTrailer");
const CompanyTrailerResolver = {
    Query: {
        getAllCompanyTrailer: async (_parent, _args, _context, _info) => {
            const companyTrailer = await CompanyTrailer_1.CompanyTrailer.find();
            return companyTrailer;
        },
    },
};
exports.default = CompanyTrailerResolver;
//# sourceMappingURL=CompanyTrailerResolver.js.map