"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyLoadType = (0, graphql_tag_1.gql) `
  type CompanyLoad {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  type Query {
    getAllCompanyLoad: [CompanyLoad]
    getCompanyLoad(input: getId): CompanyLoad
  }
`;
exports.default = CompanyLoadType;
//# sourceMappingURL=CompanyLoadType.js.map