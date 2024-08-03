"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const AddressType = (0, graphql_tag_1.gql) `
  type Address {
    id: Int
    companyId: Int!
    company: CompanyProfile
    addressName: String
    addressTitle: String
    addressDescription: String
    addressType: String
    countryId: Int
    country: Country
    cityId: Int
    city: City
    districtId: Int
    district: District
    createdBy: CompanyUser
    updatedBy: CompanyUser
    deletedBy: CompanyUser
    createdAt: String
    updatedAt: String
    deletedAt: String
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
exports.default = AddressType;
//# sourceMappingURL=AddressType.js.map