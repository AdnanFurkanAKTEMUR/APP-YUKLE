import { gql } from "graphql-tag";

const CompanyDocumentType = gql`
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

export default CompanyDocumentType;
