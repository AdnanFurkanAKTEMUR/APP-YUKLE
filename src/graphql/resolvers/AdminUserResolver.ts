import { AdminUser } from "@entities/AdminUser";
import { DataSource } from "typeorm";
import argon2 from "argon2";
import generateToken from "@helpers/generateToken";

const AdminUserResolvers = {
  Query: {
    getAllAdminUser: async (_parent: any, _args: any, context: any, _info: any) => {
      console.log(context.user, "context.user");
      const adminUsers = await AdminUser.find();
      return adminUsers;
    },
    getAdminUser: async (_parent: any, args: any, _context: any, _info: any) => {
      const user = await AdminUser.findOne({ where: { id: args.input.id } });
      return user;
    },
  },

  Mutation: {
    createAdminUser: async (_parent: any, args: any, context: any, _info: any) => {
      const { email, name, surname, password } = args.input;

      //gelen inputlara regex doğrulamaları eklenmeli
      const conn: DataSource = context.SqlConnection;
      const hashedPassword = await argon2.hash(password);
      const verificationToken = generateToken(32);
      const verificationTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
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
            verificationToken,
            verificationTokenExpires,
            verified: false,
          })
          .returning("*")
          .execute();
        adminUser = result.raw[0];
        return adminUser;
      } catch (e) {
        throw new Error("db hatası" + e);
      }
    },
  },
};

export default AdminUserResolvers;
