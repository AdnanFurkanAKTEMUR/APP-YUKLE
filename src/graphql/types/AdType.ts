import { gql } from "graphql-tag";

const AdType = gql`
  type Ad {
    id: Int
    title: String
    active: Boolean
    arrivalDate: String
    companyId: Int
    departureDate: String
    description: String
    documents: String
    doubleDirection: Boolean
    driverPointFilter: Float
    price: Float
    prioty: Boolean
    tonage: String
    trailer: Boolean
    truck: Boolean
    companyLoad: CompanyLoad
    companyTrailer: CompanyTrailer
    companyTruck: CompanyTruck
    company: Company
    createdUser: CompanyUser
    publishUser: CompanyUser
    approvedUser: CompanyUser
    updatedAt: String
    createdAt: String
  }

  type Query {
    getAllAd: [Ad]
  }
`;

export default AdType;
