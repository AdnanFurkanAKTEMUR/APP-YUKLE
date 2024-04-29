import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
require("dotenv").config();

export const nextAuthOptions = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 gün
  },
  providers: [
    // CredentialsProvider({
    //   type: "credentials",
    //   credentials: {},
    //   //@ts-ignore
    //   async authorize(credantials, req) {
    //     const { email, password } = credantials as {
    //       email: string;
    //       password: string;
    //     };
    //     await clientMongo.connect();
    //     const userCollection = await clientMongo.db("next-auth").collection("user");
    //     const user = await userCollection.findOne({ email: email });
    //     const verify = await bcrypt.compare(password, user.password);
    //     await clientMongo.close();
    //     if (user && verify) {
    //       return { _id: user._id, name: user.name, email: user.email, role: user.role };
    //     } else {
    //       throw new Error("hata");
    //     }
    //   },
    // }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  // pages: {
  //   signIn: "/login",
  // },
  // callbacks: {
  //   async jwt({ token, user, session, trigger }: any) {
  //     if (trigger == "update" && session) {
  //       token.name = session.name;
  //       token.email = session.email;
  //       token.role = session.role;
  //     }

  //     if (user) {
  //       token._id = user._id;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  //   session({ session, token }: any) {
  //     if (token && session.user) {
  //       session.user._id = token._id;
  //       session.user.role = token.role;
  //     }
  //     return session;
  //   },
  // },
};

export const handler = NextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
