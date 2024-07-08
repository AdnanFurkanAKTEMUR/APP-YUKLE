import { objectType } from "nexus";
import { Company } from "../entities/Company";

export const CompanyBankAccountType = objectType({
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
        return await Company.findOne(parent.companyId);
      },
    });

    t.nonNull.field("createdAt", {
      type: "DateTime",
    });

    t.nonNull.field("updatedAt", {
      type: "DateTime",
    });
  },
});
