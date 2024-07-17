import { AdminUser } from "@entities/AdminUser";
import argon2 from "argon2";
import * as jwt from "jsonwebtoken";

const AuthResolver = {
  Mutation: {
    login: async (_parent: any, args: any, _context: any, _info: any) => {
      const { email, password } = args.input;
      const admin_user = await AdminUser.findOne({ where: { email } });
      if (!admin_user) {
        throw new Error("Kullanıcı bulunamadı");
      }
      const isValid = await argon2.verify(admin_user.password, password);
      if (!isValid) throw new Error("Invalid creds.");
      const token = jwt.sign({ user_id: admin_user.id }, process.env.TOKEN_SECRET as jwt.Secret);
      return { token, admin_user };
    },
  },
};

export default AuthResolver;
