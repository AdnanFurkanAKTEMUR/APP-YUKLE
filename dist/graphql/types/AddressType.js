"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AddressType = (0, graphql_tag_1.gql) `
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
    getAllCompanyAddress: [Address]
  }

  type Mutation {
    createAddress(input: createAddressInput): Address
  }
`;
exports.default = AddressType;
//# sourceMappingURL=AddressType.js.map