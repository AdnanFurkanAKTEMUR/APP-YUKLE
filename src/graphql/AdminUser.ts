import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";
import { AdminUser } from "../entities/AdminUser";
import argon2 from "argon2";
import generateToken from "../helpers/generateToken";
import { DataSource } from "typeorm";
import { CreateAdminUserEmail } from "../util/nodemailer";
export const AdminUserType = objectType({
  name: "AdminUser",
  definition(t) {
    t.nonNull.int("id");
    t.nonNull.string("name");
    t.nonNull.string("surname");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
    t.nullable.string("verification_token");
    t.nullable.string("verification_token_expires");
    t.nullable.string("reset_password_token");
    t.nullable.string("reset_passwotd_token_expires");
    t.nonNull.boolean("verified");
  },
});

export const AdminUserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("getAdminUserQuery", {
      type: "AdminUser",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(_parent, args, _context, _info): Promise<AdminUser> {
        const { id } = args;
        const user = await AdminUser.findOne({ where: { id: id } });
        if (user) {
          return user;
        } else {
          throw new Error("Kullanıcı bulunamadı");
        }
      },
    });
    t.nonNull.field("getAllAdminUserQuery", {
      type: "AdminUser",
      async resolve(_1, _2, _3, _4): Promise<AdminUser[]> {
        const adminUsers = await AdminUser.find();
        if (adminUsers.length > 0) {
          return adminUsers;
        } else {
          throw new Error("Kullanıcılar bulunamadı!");
        }
      },
    });
  },
});

export const AdminUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createAdminUserMutation", {
      type: "AdminUser",
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
        surname: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_, args, context, ____): Promise<AdminUser> {
        const { email, name, surname, password } = args;
        const conn: DataSource = context.SqlConnection;
        // const passwordRegexDesen =
        //   /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{6,}$/;
        // const emailRegexDesen =
        //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // if (
        //   !passwordRegexDesen.test(input.password) ||
        //   !emailRegexDesen.test(input.email)
        // )
        //   return Err("Geçerli email ve şifre girilmeli!");
        const hashedPassword = await argon2.hash(password);
        const verification_token = generateToken(32);
        const verification_token_expires = new Date(
          Date.now() + 30 * 60 * 1000
        );
        let adminUser: AdminUser;
        try {
          const result = await conn
            .createQueryBuilder()
            .insert()
            .into(AdminUser)
            .values({
              email,
              name,
              surname,
              password: hashedPassword,
              verification_token,
              verification_token_expires,
              verified: false,
            })
            .returning("*")
            .execute();
          adminUser = result.raw[0];
          await CreateAdminUserEmail({
            to: email,
            subject: "Kayıt",
            text: "hoş geldiniz!tirmob",
          });
          return adminUser;
        } catch (e) {
          throw new Error("db hatası" + e);
        }
      },
    });
  },
});
