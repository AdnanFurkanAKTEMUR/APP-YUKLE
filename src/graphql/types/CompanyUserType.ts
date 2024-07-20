import { gql } from "graphql-tag";

const CompanyUserType = gql`
  type CompanyUser {
    id: Int
    companyId: Int
    email: String
    name: String
    surname: String
    role: String
    password: String
    resetPasswordToken: String
    resetPasswotdTokenExpires: String
    verificationToken: String
    verificationTokenExpires: String
    verified: Boolean
    company: Company
    updatedAt: String
    createdAt: String
  }

  input createCompanyUserInput {
    companyId: Int!
    email: String!
    name: String!
    password: String!
    role: String!
    surname: String!
  }

  input updateCompanyUserInput {
    name: String
    surname: String
    role: String
  }

  input resetCompanyUserPasswordInput {
    email: String
    password: String
    token: String
  }

  input changeCompanyUserPasswordInput {
    id: Int!
    password: String!
    newPassword: String!
  }

  input sendVerificationEmailToCompanyUserInput {
    id: Int!
    email: String!
  }

  input verifyCompanyUserInput {
    id: Int!
    email: String!
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
    deleteCompanyUser(input: getId): successMsg
    updateCompanyUser(input: updateCompanyUserInput): CompanyUser
    resetCompanyUserPassword(input: resetCompanyUserPasswordInput): successMsg
    changeCompanyUserPassword(input: changeCompanyUserPasswordInput): successMsg
    sendVerificationEmailToCompanyUser(input: sendVerificationEmailToCompanyUserInput): successMsg
    verifyCompanyUser(input: verifyCompanyUserInput): successMsg
  }
`;

export default CompanyUserType;
