import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { CompanyBankAccount } from "../entities/CompanyBankAccount";
import { CompanyUser } from "../entities/CompanyUser";
import { CompanyTrailer } from "../entities/CompanyTrailer";
import { CompanyTruck } from "../entities/CompanyTrucks";
import { CompanyLoad } from "../entities/CompanyLoad";
import { Ad } from "../entities/Ad";
import { Company } from "../entities/Company";
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

    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
  },
});

export const CompanyQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getCompanies", {
      type: "Company",
      resolve: async (): Promise<Company[]> => {
        return await Company.find();
      },
    });

    t.nonNull.field("getCompany", {
      type: "Company",
      args: {
        //burda id yazsakta ön tarafta otomatil yapıyor idye özel durum
        getCompanyId: nonNull(intArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<Company> => {
        const { getCompanyId } = args;
        const company = await Company.findOne({ where: { id: getCompanyId } });
        if (company) {
          return company;
        } else {
          throw new Error("Kayıt bulunamadı!");
        }
      },
    });
  },
});

export const CompanyMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createCompanyMutation", {
      type: "Company",
      args: {
        companyName: nonNull(stringArg()),
        address: nonNull(stringArg()),
        phoneNumber: nonNull(stringArg()),
        vkn: nonNull(stringArg()),
        point: nonNull(stringArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<Company> => {
        const { companyName, address, phoneNumber, vkn, point } = args;
        const company = await Company.create({ companyName, address, phoneNumber, vkn, point }).save();
        if (company) {
          return company;
        } else {
          throw new Error("Kayıt Eklenemedi!");
        }
      },
    });

    t.nonNull.field("updateCompanyInfo", {
      type: "Company",
      args: {
        companyId: nonNull(intArg()),
        companyName: nonNull(stringArg()),
        address: nonNull(stringArg()),
        phoneNumber: nonNull(stringArg()),
        vkn: nonNull(stringArg()),
        point: nonNull(stringArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<Company> => {
        const { companyName, address, phoneNumber, vkn, point, companyId } = args;
        const updatedCompany = await Company.findOne({ where: { id: companyId } });
        if (!updatedCompany) {
          throw new Error("Firma bulunamadı!");
        }
        updatedCompany.companyName = companyName;
        updatedCompany.address = address;
        updatedCompany.phoneNumber = phoneNumber;
        updatedCompany.vkn = vkn;
        updatedCompany.point = point;

        updatedCompany.save();
        return updatedCompany;
      },
    });

    t.nonNull.field("deleteCompany", {
      type: "Company",
      args: {
        companyId: nonNull(intArg()),
      },
      resolve: async (_parent, args, _context, _info) => {
        const { companyId } = args;
        const deletedCompany = await Company.delete({ id: companyId });
        if (deletedCompany.affected == 1) {
          return "Firma silindi!";
        } else {
          throw new Error("Firma silinirken bir hata ile karşılaşıldı!");
        }
      },
    });
  },
});
