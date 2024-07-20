import { gql } from "graphql-tag";

const CompanyBankAccountType = gql`
  type CompanyBankAccount {
    accountUserName: String
    bankAccountNumber: String
    bankName: String
    company: Company
    companyId: Int
    createdAt: String
    iban: String
    id: Int
    updatedAt: String
  }

  input createCompanyBankAccountInput {
    companyId: Int!
    iban: String!
    accountUserName: String!
    bankAccountNumber: String!
    bankName: String!
  }

  input updateCompanyBankAccountInput {
    id: Int!
    iban: String
    accountUserName: String
    bankAccountNumber: String
    bankName: String
  }

  type Query {
    getAllCompanyBankAccount: [CompanyBankAccount]
    getCompanyBankAccount(input: getId): CompanyBankAccount
  }

  type Mutation {
    createCompanyBankAccount(input: createCompanyBankAccountInput): CompanyBankAccount
    updateCompanyBankAccount(input: updateCompanyBankAccountInput): CompanyBankAccount
    deleteCompanyBankAccount(input: getId): successMsg
  }
`;

export default CompanyBankAccountType;
