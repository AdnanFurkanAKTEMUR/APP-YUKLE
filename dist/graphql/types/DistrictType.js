"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const DistrictType = (0, graphql_tag_1.gql) `
  type District {
    id: Int
    districtName: String
    city: City
    postalCode: String
    addresses: [Address]
    companies: [Company]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllDistricts: [District]
    getDistrictById(id: Int!): District
  }

  input createDistrictInput {
    districtName: String!
    cityId: Int
    postalCode: String
  }

  type Mutation {
    createDistrict(input: createDistrictInput): District
  }
`;
exports.default = DistrictType;
//# sourceMappingURL=DistrictType.js.map