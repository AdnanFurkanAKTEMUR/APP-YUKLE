import { gql } from "graphql-tag";

const CompanyUserType = gql`
  type CompanyUser {
    id: Int
    userFirstName: String
    userLastName: String
    userEmail: String
    userRole: String
    userPassword: String
    userStatus: Boolean
    userPhone: String
    userImage: String
    companyProfileId: Int
    companyProfile: CompanyProfile
    offers: [Offer]
    createdBy: CompanyUser
    updatedBy: CompanyUser
    deletedBy: CompanyUser
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }
`;

export default CompanyUserType;
