import { Context } from '@genType/genType';
import { rule, shield, or, not } from 'graphql-shield';
//and


const isAdmin = rule()((_parent, _args, context: Context) => {
  return context.user?.type === 0;
});

const isCompanyUser = rule()((_parent, _args, context: Context) => {
  return context.user?.type === 1;
});

// const isTruckerUser = rule()((_parent, _args, context: Context) => {
//   return context.user?.type === 2;
// });

const isAuthenticated = rule()((_parent, _args, context: Context) => {
  return context.user !== null;
});


export const permissions = shield({
  Query: {
    getCompanyRecord: or(isAdmin, isCompanyUser, not(isAuthenticated))
    // adminOnlyQuery: isAdmin,
    // regularUserQuery: or(isAdmin, isCompanyUser),
    // publicQuery: or(isAdmin, isCompanyUser, not(isAuthenticated)),
  },
  Mutation: {
    // adminOnlyMutation: isAdmin,
  },
});
