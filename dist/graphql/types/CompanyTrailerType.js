"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyTrailerType = (0, graphql_tag_1.gql) `
  type CompanyTrailer {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  input createCompanyTrailerInput {
    companyId: Int!
    name: String!
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
  }
  type Mutation {
    createCompanyTrailer(input: createCompanyTrailerInput): CompanyTrailer
  }
`;
exports.default = CompanyTrailerType;
//# sourceMappingURL=CompanyTrailerType.js.map