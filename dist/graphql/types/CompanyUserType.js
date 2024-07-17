"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyUserType = (0, graphql_tag_1.gql) `
  type CompanyUser {
    approvedAds: [Ad]
    company: Company
    createdAds: [Ad]
    createdAt: String
    email: String
    id: Int
    name: String
    password: String
    publishAds: [Ad]
    resetPasswordToken: String
    resetPasswotdTokenExpires: String
    role: String
    surname: String
    updatedAt: String
    verificationToken: String
    verificationTokenExpires: String
    verified: Boolean
  }

  input createCompanyUserInput {
    companyId: Int!
    email: String!
    name: String!
    password: String!
    role: String!
    surname: String!
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
  }
`;
exports.default = CompanyUserType;
//# sourceMappingURL=CompanyUserType.js.map