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
  type Query {
    getAllCompanyBankAccount: [CompanyBankAccount]
    getCompanyBankAccount(input: getId): CompanyBankAccount
  }
`;

export default CompanyBankAccountType;
