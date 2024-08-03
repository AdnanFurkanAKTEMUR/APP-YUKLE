import { gql } from "graphql-tag";

const CompanyDocumentType = gql`
  type CompanyDocument {
    id: Int
    documentTitle: String
    documentType: String
    documentFolder: String
    companyProfileId: Int
    companyProfile: CompanyProfile
    createdBy: CompanyUser
    updatedBy: CompanyUser
    deletedBy: CompanyUser
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Query {
    getCompanyDocument(input: getId): CompanyDocument
    getAllCompanyDocument: [CompanyDocument]
  }
`;
export default CompanyDocumentType;
