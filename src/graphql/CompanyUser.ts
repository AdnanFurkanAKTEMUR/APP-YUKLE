import { objectType } from "nexus";
import { Ad } from "../entities/Ads";
import { Company } from "../entities/Company";

export const CompanyUserType = objectType({
  name: "CompanyUser",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("surname");
    t.nonNull.string("email");
    t.nonNull.string("role");

    t.field("company", {
      type: "Company",
      resolve: async (parent) => {
        return await Company.findOne(parent.companyId);
      },
    });

    t.list.field("createdAds", {
      type: "Ad",
      resolve: async (parent) => {
        return await Ad.find({ where: { createdUser: parent.id } });
      },
    });

    t.list.field("publishAds", {
      type: "Ad",
      resolve: async (parent) => {
        return await Ad.find({ where: { publishUser: parent.id } });
      },
    });

    t.list.field("approvedAds", {
      type: "Ad",
      resolve: async (parent) => {
        return await Ad.find({ where: { approvedUser: parent.id } });
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
