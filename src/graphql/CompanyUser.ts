import { objectType, nonNull, extendType, stringArg, intArg } from "nexus";
import { Ad } from "../entities/Ad";
import { Company } from "../entities/Company";
import { CompanyUser } from "../entities/CompanyUser";
import argon2 from "argon2";
import generateToken from "../helpers/generateToken";

export const CompanyUserType = objectType({
  name: "CompanyUser",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("surname");
    t.nonNull.string("email");
    t.nonNull.string("role");
    t.nonNull.string("password");
    t.nullable.string("verificationToken");
    t.nullable.string("verificationTokenExpires");
    t.nullable.string("resetPasswordToken");
    t.nullable.string("resetPasswotdTokenExpires");
    t.nonNull.boolean("verified");

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
        if (allCompanyUsers) {
          return allCompanyUsers;
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
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<CompanyUser> => {
        const { name, surname, email, role, companyId, password } = args;
        const hashedPassword = await argon2.hash(password);
        const verificationToken = generateToken(32);
        const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
        const companyUser = await CompanyUser.create({ name, surname, email, role, companyId: companyId, password: hashedPassword, verificationToken, verificationTokenExpires, verified: false }).save();
        if (companyUser) {
          //kayıt ve verification emaili
          return companyUser;
        } else {
          throw new Error("Kullanıcı bulunamadı!");
        }
      },
    });

    t.nonNull.field("updateCompanyUser", {
      type: "CompanyUser",
      args: {
        name: nonNull(stringArg()),
        surname: nonNull(stringArg()),
        companyUserId: nonNull(intArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<CompanyUser> => {
        const { name, surname, companyUserId } = args;
        const companyUser = await CompanyUser.findOne({ where: { id: companyUserId } });
        if (!companyUser) {
          throw new Error("Kullanıcı bulunamadı!");
        }
        companyUser.name = name;
        companyUser.surname = surname;
        await companyUser.save();

        return companyUser;
      },
    });

    t.nonNull.field("deleteCompanyUser", {
      type: "String",
      args: {
        companyUserId: nonNull(intArg()),
      },
      resolve: async (_parent, args, _context, _info): Promise<string> => {
        const { companyUserId } = args;
        const deleted = await CompanyUser.delete({ id: companyUserId });
        if (deleted.affected === 1) {
          return "Silindi!";
        }
        return "hata";
      },
    });
  },
});
