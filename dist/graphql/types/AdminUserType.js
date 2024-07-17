"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AdminUserType = (0, graphql_tag_1.gql) `
  type AdminUser {
    id: Int
    name: String
    surname: String
    email: String
    password: String
    verified: Boolean
    verificationTokenExpires: String
    verificationToken: String
    resetPasswordToken: String
    resetPasswordTokenExpires: String
    createdAt: String
    updatedAt: String
  }
  input createAdminUserInput {
    email: String!
    name: String!
    surname: String!
    password: String!
  }
  type Query {
    getAllAdminUser: [AdminUser]
    getAdminUser(input: getId): AdminUser
  }

  type Mutation {
    createAdminUser(input: createAdminUserInput): AdminUser
  }
`;
exports.default = AdminUserType;
//# sourceMappingURL=AdminUserType.js.map