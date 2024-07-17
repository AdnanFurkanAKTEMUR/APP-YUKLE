"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AuthType = (0, graphql_tag_1.gql) `
  type AuthType {
    admin_user: AdminUser!
    token: String!
  }
  input loginInput {
    email: String!
    password: String!
  }
  type Mutation {
    login(input: loginInput): AuthType
  }
`;
exports.default = AuthType;
//# sourceMappingURL=AuthType.js.map