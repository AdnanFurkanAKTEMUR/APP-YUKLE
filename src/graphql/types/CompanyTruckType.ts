import { gql } from "graphql-tag";

const CompanyTruckType = gql`
  type CompanyTruck {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  type Query {
    getAllCompanyTruck: [CompanyTruck]
    getCompanyTruck(input: getId): CompanyTruck
  }

  input createCompanyTruckInput {
    name: String!
    companyId: Int!
    adId: Int
  }

  type Mutation {
    createCompanyTruck(input: createCompanyTruckInput): CompanyTruck
  }
`;

export default CompanyTruckType;
