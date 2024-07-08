import { objectType } from "nexus";
import { Company } from "../entities/Company";
import { CompanyLoad } from "../entities/CompanyLoad";
import { CompanyTrailer } from "../entities/CompanyTrailer";
import { CompanyTruck } from "../entities/CompanyTrucks";
import { CompanyUser } from "../entities/CompanyUser";

export const AdType = objectType({
  name: "Ad",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("title");
    t.nonNull.string("description");
    t.nonNull.boolean("active");
    t.nonNull.float("price");
    t.nonNull.boolean("prioty");
    t.nonNull.boolean("doubleDirection");
    t.nonNull.boolean("truck");
    t.nonNull.boolean("trailer");
    t.nonNull.float("driverPointFilter");
    t.nonNull.string("tonage");
    t.nonNull.string("documents");
    t.nonNull.int("companyId");

    t.field("company", {
      type: "Company",
      resolve: async (parent) => {
        return await Company.findOne(parent.companyId);
      },
    });

    t.field("createdUser", {
      type: "CompanyUser",
      resolve: async (parent) => {
        return await CompanyUser.findOne(parent.createdUserId);
      },
    });

    t.field("publishUser", {
      type: "CompanyUser",
      resolve: async (parent) => {
        return await CompanyUser.findOne(parent.publishUserId);
      },
    });

    t.field("approvedUser", {
      type: "CompanyUser",
      resolve: async (parent) => {
        return await CompanyUser.findOne(parent.approvedUserId);
      },
    });

    t.field("companyLoad", {
      type: "CompanyLoad",
      resolve: async (parent) => {
        return await CompanyLoad.findOne({ where: { ad: parent.id } });
      },
    });

    t.field("companyTrailer", {
      type: "CompanyTrailer",
      resolve: async (parent) => {
        return await CompanyTrailer.findOne({ where: { ad: parent.id } });
      },
    });

    t.field("companyTruck", {
      type: "CompanyTruck",
      resolve: async (parent) => {
        return await CompanyTruck.findOne({ where: { ad: parent.id } });
      },
    });

    t.nonNull.string("departureDate");
    t.nonNull.string("arrivalDate");
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
  },
});
