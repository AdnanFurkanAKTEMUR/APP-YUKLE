"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyUserType = (0, graphql_tag_1.gql) `
  type CompanyUser {
    id: Int
    userFirstName: String
    type: Int
    userLastName: String
    userEmail: String
    userRole: String
    userPassword: String
    userStatus: Boolean
    userPhone: String
    userImage: String
    company: Company
    createdOffers: [Offer]
    updatedOffers: [Offer]
    createdAddresses: [Address]
    updatedAddresses: [Address]
    createdCompanyDocuments: [CompanyDocument]
    updatedCompanyDocuments: [CompanyDocument]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCompanyUsers: [CompanyUser]
    getCompanyUserById(input: getId): CompanyUser
    getCompanyUsersOfCompany: CompanyUser
  }

  input createCompanyUserInput {
    userFirstName: String!
    userLastName: String!
    userEmail: String!
    userRole: String!
    userPassword: String!
    userPhone: String
    userImage: String
  }

  input createCompanyUserByAdminInput {
    userFirstName: String!
    userLastName: String!
    userEmail: String!
    userRole: String!
    userPassword: String!
    userPhone: String
    userImage: String
    companyId: Int
  }

  input companyUserLoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
    createCompanyUserByAdmin(input: createCompanyUserByAdminInput): CompanyUser
    companyUserLogin(input: companyUserLoginInput): CompanyUser
  }
`;
exports.default = CompanyUserType;
//# sourceMappingURL=CompanyUserType.js.map