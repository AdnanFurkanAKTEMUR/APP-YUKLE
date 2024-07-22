"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyTrailerType = (0, graphql_tag_1.gql) `
  type CompanyTrailer {
    id: Int
    companyId: Int
    adId: Int
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

  input updateCompanyTrailerInput {
    id: Int!
    name: String
    adId: Int
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
    getCompanyTrailer(input: getId): CompanyTrailer
  }
  type Mutation {
    createCompanyTrailer(input: createCompanyTrailerInput): CompanyTrailer
    updateCompanyTrailer(input: updateCompanyTrailerInput): CompanyTrailer
    deleteCompanyTrailer(input: getId): successMsg
  }
`;
exports.default = CompanyTrailerType;
//# sourceMappingURL=CompanyTrailerType.js.map