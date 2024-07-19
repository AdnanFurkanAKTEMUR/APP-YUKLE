"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AuthType = (0, graphql_tag_1.gql) `
  type AdminUserAuthMobileType {
    adminUser: AdminUser!
    token: String!
  }

  type CompanyUserAuthMobileType {
    companyUser: CompanyUser!
    token: String!
  }

  input loginInput {
    email: String!
    password: String!
  }
  type Mutation {
    loginAdminUserMobile(input: loginInput): AdminUserAuthMobileType
    loginCompanyUserMobile(input: loginInput): CompanyUserAuthMobileType
  }
`;
exports.default = AuthType;
//# sourceMappingURL=AuthType.js.map