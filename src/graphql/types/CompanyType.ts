import { gql } from "graphql-tag";

const CompanyType = gql`
  type Company {
    address: String
    ads: [Ad]
    bankAccounts: [CompanyBankAccount]
    companyLoads: [CompanyLoad]
    companyTrailers: [CompanyTrailer]
    companyTrucks: [CompanyTruck]
    companyUsers: [CompanyUser]
    companyName: String
    createdAt: String
    id: Int
    phoneNumber: String
    point: Float
    updatedAt: String
    vkn: String
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
