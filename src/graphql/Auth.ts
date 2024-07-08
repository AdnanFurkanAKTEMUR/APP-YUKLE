import { extendType, nonNull, objectType, stringArg } from "nexus";
import * as jwt from "jsonwebtoken";
import argon2 from "argon2";
import { AdminUser } from "../entities/AdminUser";

export const AuthType = objectType({
  name: "AuthType",
  definition(t) {
    t.nonNull.string("token"),
      t.nonNull.field("admin_user", {
        type: "AdminUser",
      });
  },
});

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("login", {
      type: "AuthType",
      args: { email: nonNull(stringArg()), password: nonNull(stringArg()) },
      async resolve(_parent, args, _context, _info) {
        try {
          const { email, password } = args;
          const admin_user = await AdminUser.findOne({ where: { email } });
          if (!admin_user) {
            throw new Error("Kullanıcı bulunamadı");
          }
          const isValid = await argon2.verify(admin_user.password, password);
          if (!isValid) throw new Error("Invalid creds.");

          const token = jwt.sign(
            { user_id: admin_user.id },
            process.env.TOKEN_SECRET as jwt.Secret
          );
          return { token, admin_user };
        } catch (e) {
          throw new Error("hata:" + e);
        }
      },
    });
  },
});
