"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyDocumentType = (0, graphql_tag_1.gql) `
  type CompanyDocument {
    id: Int
    documentTitle: String
    documentType: String
    documentFolder: String
    company: Company
    createdCompanyUser: CompanyUser
    updatedCompanyUser: CompanyUser
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCompanyDocuments: [CompanyDocument]
    getCompanyDocumentById(id: Int!): CompanyDocument
  }

  input createCompanyDocumentInput {
    documentTitle: String!
    documentType: String!
    documentFolder: String!
    companyId: Int!
    createdCompanyUserId: Int
    updatedCompanyUserId: Int
  }

  type Mutation {
    createCompanyDocument(input: createCompanyDocumentInput): CompanyDocument
  }
`;
exports.default = CompanyDocumentType;
//# sourceMappingURL=CompanyDocumentType.js.map