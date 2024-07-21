"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Company_1 = require("@entities/Company");
const CompanyBankAccount_1 = require("@entities/CompanyBankAccount");
const In_1 = require("typeorm/find-options/operator/In");
const CompanyBankAccountResolver = {
    Query: {
        getAllCompanyBankAccount: async (_parent, _args, _context, _info) => {
            const companyBankAccount = await CompanyBankAccount_1.CompanyBankAccount.find();
            const companyIds = companyBankAccount.map((c) => {
                return c.id;
            });
            const companies = await Company_1.Company.find({ where: { id: (0, In_1.In)(companyIds) } });
            const result = companyBankAccount.map((c) => {
                const company = companies.find((element) => {
                    return element.id == c.companyId;
                });
                return Object.assign(Object.assign({}, c), { company });
            });
            return result;
        },
        getCompanyBankAccount: async (_parent, args, _context, _info) => {
            const { id } = args.input;
            const companyBankAccount = await CompanyBankAccount_1.CompanyBankAccount.findOne({ where: { id: id } });
            const company = await Company_1.Company.findOne({ where: { id: companyBankAccount === null || companyBankAccount === void 0 ? void 0 : companyBankAccount.companyId } });
            return Object.assign(Object.assign({}, companyBankAccount), { company: company });
        },
    },
    Mutation: {
        createCompanyBankAccount: async (_parent, args, context, _info) => {
            if (!(context === null || context === void 0 ? void 0 : context.user) || !context.user.user_id || context.user.role !== "admin")
                throw new Error("yetkiniz yok");
            const { companyId, iban, accountUserName, bankAccountNumber, bankName } = args.input;
            const companyBankAccount = await CompanyBankAccount_1.CompanyBankAccount.create({ bankName, companyId, iban, accountUserName, bankAccountNumber }).save();
            const company = await Company_1.Company.findOne({ where: { id: companyId } });
            if (companyBankAccount === null || companyBankAccount === void 0 ? void 0 : companyBankAccount.id)
                return Object.assign(Object.assign({}, companyBankAccount), { company: company });
            throw new Error("Kayıt edilemedi!");
        },
        updateCompanyBankAccount: async (_parent, args, context, _info) => {
            if (!(context === null || context === void 0 ? void 0 : context.user) || !context.user.user_id || context.user.role !== "admin")
                throw new Error("yetkiniz yok");
            const { id, iban, accountUserName, bankAccountNumber, bankName } = args.input;
            const companyBankAccount = await CompanyBankAccount_1.CompanyBankAccount.findOne({ where: { id } });
            if (!companyBankAccount)
                throw new Error("Kayıt bulunamadı!");
            if (iban)
                companyBankAccount.iban = iban;
            if (accountUserName)
                companyBankAccount.accountUserName = accountUserName;
            if (bankAccountNumber)
                companyBankAccount.bankAccountNumber = bankAccountNumber;
            if (bankName)
                companyBankAccount.bankName = bankName;
            const sR = await companyBankAccount.save();
            const company = await Company_1.Company.findOne({ where: { id: sR.companyId } });
            if (sR === null || sR === void 0 ? void 0 : sR.id)
                return Object.assign(Object.assign({}, companyBankAccount), { company: company });
            throw new Error("Güncellenemedi!");
        },
        deleteCompanyBankAccount: async (_parent, args, context, _info) => {
            if (!(context === null || context === void 0 ? void 0 : context.user) || !context.user.user_id || context.user.role !== "admin")
                throw new Error("yetkiniz yok");
            const { id } = args.input;
            const companyBankAccount = await CompanyBankAccount_1.CompanyBankAccount.delete({ id: id });
            console.log(companyBankAccount.affected);
            console.log(companyBankAccount.raw);
            if ((companyBankAccount === null || companyBankAccount === void 0 ? void 0 : companyBankAccount.affected) === 1)
                return { success: true, msg: "Silme başarılı!" };
            throw new Error("Slinemedi!");
        },
    },
};
exports.default = CompanyBankAccountResolver;
//# sourceMappingURL=CompanyBankAccountResolver.js.map