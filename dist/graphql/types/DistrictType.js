"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const DistrictType = (0, graphql_tag_1.default) `
  type District {
    id: Int
    districtName: String
    city: City
    postalCode: String
    createdAt: String
    updatedAt: String
  }

  input getDistrictOfCityInput {
    cityId: Int!
  }

  input createDistrictInput {
    districtName: String!
    cityId: Int
    postalCode: String
  }

  type Query {
    getDistrict(input: getId): District
  }

  type Mutation {
    createDistrict(input: createDistrictInput): District
  }
`;
exports.default = DistrictType;
//# sourceMappingURL=DistrictType.js.map