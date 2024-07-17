"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyTrailerType = (0, graphql_tag_1.gql) `
  type CompanyTrailer {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
  }
`;
exports.default = CompanyTrailerType;
//# sourceMappingURL=CompanyTrailerType.js.map