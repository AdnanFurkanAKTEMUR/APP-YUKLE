import { gql } from "graphql-tag";

const CompanyType = gql`
  type Company {
    id: Int
    companyName: String
    address: String
    vkn: String
    phoneNumber: String
    point: Float
    ads: [Ad]
    companyBankAccounts: [CompanyBankAccount]
    companyLoads: [CompanyLoad]
    companyTrailers: [CompanyTrailer]
    companyTrucks: [CompanyTruck]
    companyUsers: [CompanyUser]
    updatedAt: String
    createdAt: String
  }

  input createCompanyInput {
    address: String!
    companyName: String!
    phoneNumber: String!
    point: String!
    vkn: String!
  }

  type Query {
    getAllCompany: [Company]
    getCompany(input: getId): Company
  }
  type Mutation {
    createCompany(input: createCompanyInput): Company
  }
`;

export default CompanyType;
