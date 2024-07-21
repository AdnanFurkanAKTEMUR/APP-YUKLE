"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyBankAccountType = (0, graphql_tag_1.gql) `
  type CompanyBankAccount {
    id: Int
    accountUserName: String
    bankAccountNumber: String
    bankName: String
    companyId: Int
    iban: String
    company: Company
    updatedAt: String
    createdAt: String
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
exports.default = CompanyBankAccountType;
//# sourceMappingURL=CompanyBankAccountType.js.map