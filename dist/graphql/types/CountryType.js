"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CountryType = (0, graphql_tag_1.gql) `
  type Country {
    id: Int
    countryName: String
    plateCode: String
    cities: [City]
    addresses: [Address]
    companies: [Company]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCountries: [Country]
    getCountryById(input: getId): Country
  }

  input createCountryInput {
    countryName: String!
    plateCode: String
  }

  type Mutation {
    createCountry(input: createCountryInput): Country
  }
`;
exports.default = CountryType;
//# sourceMappingURL=CountryType.js.map