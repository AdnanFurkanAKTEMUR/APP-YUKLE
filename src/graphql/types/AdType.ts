import { gql } from "graphql-tag";

const AdType = gql`
  type Ad {
    id: Int
    companyId: Int
    publishedCompanyUserId: Int
    approvedCompanyUserId: Int
    createdCompanyUserId: Int
    title: String
    active: Boolean
    arrivalDate: String
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
    approved: Boolean
    published: Boolean
    companyLoad: CompanyLoad
    companyTrailer: CompanyTrailer
    companyTruck: CompanyTruck
    company: Company
    createdUser: CompanyUser
    publishedUser: CompanyUser
    approvedUser: CompanyUser
    updatedAt: String
    createdAt: String
  }

  input createAdInput {
    companyId: Int
    title: String
    active: Boolean
    arrivalDate: String
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
  }

  input updateAdInput {
    title: String
    active: Boolean
    arrivalDate: String
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
    approved: Boolean
    published: Boolean
  }

  type Query {
    getAllAd: [Ad]
    getAd(input: getId): Ad
  }
  type Mutation {
    createAd(iput: createAdInput): Ad
    updateAd(input: updateAdInput): Ad
    deleteAd(input: getId): Ad
  }
`;

export default AdType;
