"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyType = (0, graphql_tag_1.gql) `
  type Company {
    id: Int
    companyName: String
    address: String
    vkn: String
    phoneNumber: String
    point: Float
    ads: [Ad]
    companyBankAccounts: [CompanyBankAccount]
    companyLoads: [CompanyLoad]
    companyTrailers: [CompanyTrailer]
    companyTrucks: [CompanyTruck]
    companyUsers: [CompanyUser]
    updatedAt: String
    createdAt: String
  }

  input createCompanyInput {
    address: String!
    companyName: String!
    phoneNumber: String!
    point: String!
    vkn: String!
  }
  input updateCompanyInput {
    id: Int!
    address: String
    companyName: String
    phoneNumber: String
    point: String
    vkn: String
  }

  type Query {
    getAllCompany: [Company]
    getCompany(input: getId): Company
  }
  type Mutation {
    createCompany(input: createCompanyInput): Company
    updateCompany(input: updateCompanyInput): Company
    deleteCompany(input: getId): successMsg
  }
`;
exports.default = CompanyType;
//# sourceMappingURL=CompanyType.js.map