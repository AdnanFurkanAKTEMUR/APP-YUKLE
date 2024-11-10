import { gql } from "graphql-tag";

const CompanyUserType = gql`
  type CompanyUser {
    id: Int
    userFirstName: String
    type: Int
    userLastName: String
    userEmail: String
    userRole: String
    userPassword: String
    userStatus: Boolean
    userPhone: String
    userImage: String
    company: Company
    createdOffers: [Offer]
    updatedOffers: [Offer]
    createdAddresses: [Address]
    updatedAddresses: [Address]
    createdCompanyDocuments: [CompanyDocument]
    updatedCompanyDocuments: [CompanyDocument]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCompanyUsers: [CompanyUser]
    getCompanyUserById(input: getId): CompanyUser
    getCompanyUsersOfCompany: CompanyUser
  }

  input createCompanyUserInput {
    userFirstName: String!
    userLastName: String!
    userEmail: String!
    userRole: String!
    userPassword: String!
    userPhone: String
    userImage: String
  }

  input createCompanyUserByAdminInput {
    userFirstName: String!
    userLastName: String!
    userEmail: String!
    userRole: String!
    userPassword: String!
    userPhone: String
    userImage: String
    companyId: Int
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
    createCompanyUserByAdmin(input: createCompanyUserByAdminInput): CompanyUser
  }
`;

export default CompanyUserType;
