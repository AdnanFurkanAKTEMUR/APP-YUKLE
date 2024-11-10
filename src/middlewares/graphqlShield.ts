// import { Context } from "@genType/genType";
// import { rule, shield, or, not } from "graphql-shield";
import { shield } from "graphql-shield";
//and

// const isAdmin = rule()((_parent, _args, context: Context) => {
//   return context.user?.type === 0;
// });

// const isCompanyUser = rule()((_parent, _args, context: Context) => {
//   return context.user?.type === 1;
// });

// // const isTruckerUser = rule()((_parent, _args, context: Context) => {
// //   return context.user?.type === 2;
// // });

// const isAuthenticated = rule()((_parent, _args, context: Context) => {
//   return context.user !== null;
// });

export const permissions = shield(
  {
    Query: {
      // getCompanyRecord: or(isAdmin, isCompanyUser, not(isAuthenticated)),
    },
    Mutation: {
      // createCompanyRecord: or(isAdmin, not(isAuthenticated)),
    },
  },
  {
    fallbackError: new Error("Erişim izni reddedildi!"), // Özel hata mesajı
    allowExternalErrors: true,
  }
);
