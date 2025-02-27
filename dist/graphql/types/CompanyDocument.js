"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyDocumentType = (0, graphql_tag_1.gql) `
  type CompanyDocument {
    id: Int
    documentTitle: String
    documentType: String
    documentFolder: String
    companyProfile: CompanyProfile
    createdCompanyUser: CompanyUser
    updatedCompanyUser: CompanyUser
    createdAt: String
    updatedAt: String
  }

  type Query {
    getCompanyDocument(input: getId): CompanyDocument
    getAllCompanyDocument: [CompanyDocument]
  }
`;
exports.default = CompanyDocumentType;
//# sourceMappingURL=CompanyDocument.js.map