"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyLoadType = (0, graphql_tag_1.gql) `
  type CompanyLoad {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
  }

  type Query {
    getAllCompanyLoad: [CompanyLoad]
    getCompanyLoad(input: getId): CompanyLoad
  }
`;
exports.default = CompanyLoadType;
//# sourceMappingURL=CompanyLoadType.js.map