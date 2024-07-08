import { objectType } from "nexus";
import { Ad } from "../entities/Ads";
import { Company } from "../entities/Company";

export const CompanyTruckType = objectType({
  name: "CompanyTruck",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.int("companyId");

    t.field("company", {
      type: "Company",
      resolve: async (parent) => {
        return await Company.findOne(parent.companyId);
      },
    });

    t.field("ad", {
      type: "Ad",
      resolve: async (parent) => {
        return await Ad.findOne({ where: { companyTruck: parent.id } });
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
