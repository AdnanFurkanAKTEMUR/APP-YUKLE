"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("../../entities/Company");
const CompanyResolver = {
    Query: {
        getAllCompany: async (_parent, _args, _context, _info) => {
            const company = await Company_1.Company.find();
            return company;
        },
        getCompany: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const company = await Company_1.Company.findOne({ where: { id: id } });
            return company;
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