import { objectType, nonNull, extendType, stringArg, intArg } from "nexus";
import { Ad } from "../entities/Ad";
import { Company } from "../entities/Company";
import { CompanyUser } from "../entities/CompanyUser";

export const CompanyUserType = objectType({
  name: "CompanyUser",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("surname");
    t.nonNull.string("email");
    t.nonNull.string("role");

    t.nonNull.field("company", {
      type: "Company",
      resolve: async (parent) => {
        console.log(parent.companyId);
        return await Company.findOne({ where: { id: parent.companyId } });
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
    t.nonNull.string("createdAt");
    t.nonNull.string("updatedAt");
  },
});

export const CompanyUserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("getAllCompanyUsers", {
      type: "CompanyUser",
      resolve: async (): Promise<CompanyUser[]> => {
        const allCompanyUsers = await CompanyUser.find();
        console.log(allCompanyUsers);
        if (allCompanyUsers) {
          return await allCompanyUsers;
        } else {
          throw new Error("Kullanıcılar bulunamadı!");
        }
      },
    });
  },
});

export const CompanyUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createCompanyUser", {
      type: "CompanyUser",
      args: {
        name: nonNull(stringArg()),
        surname: nonNull(stringArg()),
        email: nonNull(stringArg()),
        role: nonNull(stringArg()),
        companyId: nonNull(intArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<CompanyUser> => {
        const { name, surname, email, role, companyId } = args;
        const companyUser = await CompanyUser.create({ name, surname, email, role, companyId: companyId }).save();
        if (companyUser) {
          return companyUser;
        } else {
          throw new Error("Kullanıcı bulunamadı!");
        }
      },
    });
  },
});
