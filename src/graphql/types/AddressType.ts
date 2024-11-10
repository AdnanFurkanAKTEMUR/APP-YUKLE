import { gql } from "graphql-tag";

const AddressType = gql`
  type Address {
    id: Int
    company: Company
    addressName: String
    addressTitle: String
    addressDescription: String
    addressType: String
    country: Country
    city: City
    district: District
    placeAddress: [Offer]
    offersAddress: [Offer]
    createdCompanyUser: CompanyUser
    updatedCompanyUser: CompanyUser
    createdAt: String
    updatedAt: String
  }

  input createAddressInput {
    companyId: Int!
    addressName: String!
    addressTitle: String!
    addressDescription: String
    addressType: String
    countryId: Int!
    cityId: Int!
    districtId: Int!
  }

  type Query {
    getAllAddress: [Address]
    getAddress(input: getId): Address
  }

  type Mutation {
    createAddress(input: createAddressInput): Address
  }
`;

export default AddressType;
