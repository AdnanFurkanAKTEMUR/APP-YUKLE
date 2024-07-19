"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyType = (0, graphql_tag_1.gql) `
  type Company {
    address: String
    ads: [Ad]
    companyBankAccounts: [CompanyBankAccount]
    companyLoads: [CompanyLoad]
    companyTrailers: [CompanyTrailer]
    companyTrucks: [CompanyTruck]
    companyUsers: [CompanyUser]
    companyName: String
    createdAt: String
    id: Int
    phoneNumber: String
    point: Float
    updatedAt: String
    vkn: String
  }

  input createCompanyInput {
    address: String!
    companyName: String!
    phoneNumber: String!
    point: String!
    vkn: String!
  }

  type Query {
    getAllCompany: [Company]
    getCompany(input: getId): Company
  }
  type Mutation {
    createCompany(input: createCompanyInput): Company
  }
`;
exports.default = CompanyType;
//# sourceMappingURL=CompanyType.js.map