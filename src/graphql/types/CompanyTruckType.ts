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
  }
`;

export default CompanyTruckType;
