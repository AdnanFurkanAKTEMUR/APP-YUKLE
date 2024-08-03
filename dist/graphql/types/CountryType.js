"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CountryType = (0, graphql_tag_1.gql) `
  type Country {
    id: Int!
    countryName: String
    plateCode: String
    cities: [City]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCountry: [Country]
    getCountry(input: getId): Country
  }
`;
exports.default = CountryType;
//# sourceMappingURL=CountryType.js.map