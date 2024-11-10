"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CityType = (0, graphql_tag_1.gql) `
  type City {
    id: Int
    cityName: String
    plateCode: String
    country: Country
    districts: [District]
    addresses: [Address]
    companies: [Company]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCities: [City]
    getCityById(input: getId): City
  }

  input createCityInput {
    cityName: String!
    plateCode: String
    countryId: Int
  }

  type Mutation {
    createCity(input: createCityInput): City
  }
`;
exports.default = CityType;
//# sourceMappingURL=CityType.js.map