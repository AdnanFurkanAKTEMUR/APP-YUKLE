"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyTruckType = (0, graphql_tag_1.gql) `
  type CompanyTruck {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  type Query {
    getAllCompanyTruck: [CompanyTruck]
    getCompanyTruck(input: getId): CompanyTruck
  }

  input createCompanyTruckInput {
    name: String!
    companyId: Int!
    adId: Int
  }

  type Mutation {
    createCompanyTruck(input: createCompanyTruckInput): CompanyTruck
  }
`;
exports.default = CompanyTruckType;
//# sourceMappingURL=CompanyTruckType.js.map