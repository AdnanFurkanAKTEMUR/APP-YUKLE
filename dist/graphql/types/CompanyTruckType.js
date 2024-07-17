"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyTruckType = (0, graphql_tag_1.gql) `
  type CompanyTruck {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
  }

  type Query {
    getAllCompanyTruck: [CompanyTruck]
  }
`;
exports.default = CompanyTruckType;
//# sourceMappingURL=CompanyTruckType.js.map