"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyTrailer_1 = require("../../entities/CompanyTrailer");
const CompanyTrailerResolver = {
    Query: {
        getAllCompanyTrailer: async (_parent, _args, _context, _info) => {
            const companyTrailer = await CompanyTrailer_1.CompanyTrailer.find();
            return companyTrailer;
        },
    },
    Mutation: {
        createCompanyTrailer: async (_parent, args, context, _info) => {
            console.log(context.user);
            if (context.user.role !== "admin")
                throw new Error("Trailer oluşturmaya yetkiniz yok!");
            const { companyId, name } = args.input;
            const companyTrailer = await CompanyTrailer_1.CompanyTrailer.create({ name: name, companyId: companyId }).save();
            const company = await Company_1.Company.findOne({ where: { id: companyId } });
            if (companyTrailer === null || companyTrailer === void 0 ? void 0 : companyTrailer.id)
                return Object.assign(Object.assign({}, companyTrailer), { company: company });
            throw new Error("Oluşturma başarısız");
        },
    },
};
exports.default = CompanyTrailerResolver;
//# sourceMappingURL=CompanyTrailerResolver.js.map