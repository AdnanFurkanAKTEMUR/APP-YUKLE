"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const CityType = (0, graphql_tag_1.default) `
  type City {
    id: Int
    cityName: String
    plateCode: String
    district: [District]
    country: Country
    createdAt: String
    updatedAt: String
  }

  input createCityInput {
    cityName: String!
    plateCode: String
    countryId: Int
  }

  type Query {
    getCity(input: getId): City
  }

  type Mutation {
    createCity(input: createCityInput): City
  }
`;
exports.default = CityType;
//# sourceMappingURL=CityType.js.map