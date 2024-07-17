"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompanyBankAccount_1 = require("../../entities/CompanyBankAccount");
const CompanyBankAccountResolver = {
    Query: {
        getAllCompanyBankAccount: async (_parent, _args, _context, _info) => {
            const company = await CompanyBankAccount_1.CompanyBankAccount.find();
            return company;
        },
        getCompanyBankAccount: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const company = await CompanyBankAccount_1.CompanyBankAccount.findOne({ where: { id: id } });
            return company;
        },
    },
};
exports.default = CompanyBankAccountResolver;
//# sourceMappingURL=CompanyBankAccountResolver.js.map