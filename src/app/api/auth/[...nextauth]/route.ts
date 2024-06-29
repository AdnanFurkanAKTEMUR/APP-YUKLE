import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/server/database/mongo";
import { AdminUserType } from "@/server/common/adminUserType/adminUserType";
import { Collection } from "mongodb";
import bcrypt from "bcrypt";
require("dotenv").config();

const nextAuthOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 gün
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      //@ts-ignore
      async authorize(credantials, req) {
        const { email, password } = credantials as {
          email: string;
          password: string;
        };
        const client = await connectToDatabase();
        const db = client.db();
        const adminUserCollection: Collection<AdminUserType> = db.collection("admin_user");
        const user = await adminUserCollection.findOne({ email: email });
        if (!user) return "Kullanıcı bulunamadı";
        const verify = await bcrypt.compare(password, user?.password);
        if (user && verify) {
          return { _id: user._id, name: user.name, email: user.email, role: "admin" };
        } else {
          throw new Error("hata");
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/admin_login",
  },
  callbacks: {
    async jwt({ token, user, session, trigger }: any) {
      if (trigger == "update" && session) {
        token.name = session.name;
        token.email = session.email;
        token.role = session.role;
      }

      if (user) {
        token._id = user._id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }: any) {
      if (token && session.user) {
        session.user._id = token._id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};

const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
