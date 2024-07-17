import { CompanyUser } from "@entities/CompanyUser";
import generateToken from "@helpers/generateToken";
import argon2 from "argon2";
const CompanyUserResolver = {
  Query: {
    getAllCompanyUser: async (_parent: any, _args: any, _context: any, _info: any) => {
      const companyUser = await CompanyUser.find();
      return companyUser;
    },
    getCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const { id } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { id: id } });
      return companyUser;
    },
  },
  Mutation: {
    createCompanyUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const { name, surname, email, role, companyId, password } = args.input;
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
  },
};

export default CompanyUserResolver;
