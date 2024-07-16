"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyBankAccountType = void 0;
const nexus_1 = require("nexus");
const Company_1 = require("../entities/Company");
exports.CompanyBankAccountType = (0, nexus_1.objectType)({
    name: "CompanyBankAccount",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("bankName");
        t.nonNull.string("iban");
        t.nonNull.string("bankAccountNumber");
        t.nonNull.string("accountUserName");
        t.nonNull.int("companyId");
        t.field("company", {
            type: "Company",
            resolve: async (parent) => {
                return await Company_1.Company.findOne(parent.companyId);
            },
        });
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    },
});
//# sourceMappingURL=CompanyBankAccount.js.map