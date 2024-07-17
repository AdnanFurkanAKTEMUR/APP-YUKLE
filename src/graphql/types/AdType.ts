import { gql } from "graphql-tag";

const AdType = gql`
  type Ad {
  active: Boolean
  approvedUser: CompanyUser
  arrivalDate: String
  company: Company
  companyId: Int
  companyLoad: CompanyLoad
  companyTrailer: CompanyTrailer
  companyTruck: CompanyTruck
  createdAt: String
  createdUser: CompanyUser
  departureDate: String
  description: String
  documents: String
  doubleDirection: Boolean
  driverPointFilter: Float
  id: Int
  price: Float
  prioty: Boolean
  publishUser: CompanyUser
  title: String
  tonage: String
  trailer: Boolean
  truck: Boolean
  updatedAt: String
}

  type Query {
    getAllAd: [Ad]
  }
`;

export default AdType;
