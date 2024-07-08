import { objectType } from "nexus";
import { CompanyBankAccount } from "../entities/CompanyBankAccount";
import { CompanyUser } from "../entities/CompanyUser";
import { CompanyTrailer } from "../entities/CompanyTrailer";
import { CompanyTruck } from "../entities/CompanyTrucks";
import { CompanyLoad } from "../entities/CompanyLoad";
import { Ad } from "../entities/Ads";
export const CompanyType = objectType({
  name: "Company",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("companyName");
    t.nonNull.string("address");
    t.nonNull.string("phoneNumber");
    t.nonNull.string("vkn");
    t.nonNull.float("point");

    t.list.field("bankAccounts", {
      type: "CompanyBankAccount",
      resolve: async (parent, _args, _context, _info) => {
        return await CompanyBankAccount.find({ where: { company: parent.id } });
      },
    });

    t.list.field("companyUsers", {
      type: "CompanyUser",
      resolve: async (parent) => {
        return await CompanyUser.find({ where: { company: parent.id } });
      },
    });

    t.list.field("companyTrailers", {
      type: "CompanyTrailer",
      resolve: async (parent) => {
        return await CompanyTrailer.find({ where: { company: parent.id } });
      },
    });

    t.list.field("companyTrucks", {
      type: "CompanyTruck",
      resolve: async (parent) => {
        return await CompanyTruck.find({ where: { company: parent.id } });
      },
    });

    t.list.field("companyLoads", {
      type: "CompanyLoad",
      resolve: async (parent) => {
        return await CompanyLoad.find({ where: { company: parent.id } });
      },
    });

    t.list.field("ads", {
      type: "Ad",
      resolve: async (parent) => {
        return await Ad.find({ where: { company: parent.id } });
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