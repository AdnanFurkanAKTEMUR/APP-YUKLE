import { gql } from "graphql-tag";

const CompanyUserType = gql`
  type CompanyUser {
    approvedAds: [Ad]
    company: Company
    createdAds: [Ad]
    createdAt: String
    email: String
    id: Int
    name: String
    password: String
    publishAds: [Ad]
    resetPasswordToken: String
    resetPasswotdTokenExpires: String
    role: String
    surname: String
    updatedAt: String
    verificationToken: String
    verificationTokenExpires: String
    verified: Boolean
  }

  input createCompanyUserInput {
    companyId: Int!
    email: String!
    name: String!
    password: String!
    role: String!
    surname: String!
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
  }
`;

export default CompanyUserType;
