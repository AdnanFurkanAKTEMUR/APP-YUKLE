import { AdminUser } from "@entities/AdminUser";
import { CompanyUser } from "@entities/CompanyUser";
import argon2 from "argon2";
import * as jwt from "jsonwebtoken";

const AuthResolver = {
  Mutation: {
    loginAdminUserMobile: async (_parent: any, args: any, _context: any, _info: any) => {
      const { email, password } = args.input;
      const adminUser = await AdminUser.findOne({ where: { email } });
      if (!adminUser) throw new Error("Kullanıcı bulunamadı");
      const isValid = await argon2.verify(adminUser.password, password);
      if (!isValid) throw new Error("Invalid creds.");
      const token = jwt.sign({ id: adminUser.id, name: adminUser.name, surname: adminUser.surname, email: adminUser.email, verified: adminUser.verified, type: 0, companyId: 0, role: "" }, process.env.TOKEN_SECRET as jwt.Secret);
      return { token, adminUser };
    },
    loginCompanyUserMobile: async (_parent: any, args: any, _context: any, _info: any) => {
      const { email, password } = args.input;
      const companyUser = await CompanyUser.findOne({ where: { email } });
      if (!companyUser) throw new Error("Kullanıcı bulunamadı");
      const isValid = await argon2.verify(companyUser.password, password);
      if (!isValid) throw new Error("Invalid creds.");
      const token = jwt.sign({ user_id: companyUser.id, company_id: companyUser.companyId, name: companyUser.name, surname: companyUser.surname, role: companyUser.role, email: companyUser.email, verified: companyUser.verified, type: 1 }, process.env.TOKEN_SECRET as jwt.Secret);
      return { token, companyUser };
    },
  },
};

export default AuthResolver;
