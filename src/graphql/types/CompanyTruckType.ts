import { gql } from "graphql-tag";

const CompanyTruckType = gql`
  type CompanyTruck {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
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
