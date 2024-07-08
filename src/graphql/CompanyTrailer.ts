import { objectType } from "nexus";
import { Ad } from "../entities/Ads";
import { Company } from "../entities/Company";


export const CompanyTrailerType = objectType({
  name: "CompanyTrailer",
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
        return await Ad.findOne({ where: { companyTrailer: parent.id } });
      },
    });

    t.nonNull.field("created_at", {
      type: "DateTime",
    });

    t.nonNull.field("updated_at", {
      type: "DateTime",
    });
  },
});
