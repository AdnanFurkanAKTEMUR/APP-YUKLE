import { gql } from "graphql-tag";

const CompanyProfileType = gql`
  type CompanyProfile {
    id: Int
    companyRecordId: Int
    companyRecord: [CompanyRecord]
    companyUsers: [CompanyUser]
    companyCode: String
    companyPhoneNumber: String
    taxNumber: String
    taxAdministration: String
    taxPlateDoc: String
    companyDocumentId: Int
    createdBy: CompanyUser
    updatedBy: CompanyUser
    deletedBy: CompanyUser
    deletedAt: String
    updatedAt: String
    createdAt: String
  }

  type Query {
    getCompanyProfile(input: getId): CompanyProfile
    getAllCompanyProfile: [CompanyProfile]
  }
`;

export default CompanyProfileType;
