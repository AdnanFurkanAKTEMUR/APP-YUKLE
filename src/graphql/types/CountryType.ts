import { gql } from "graphql-tag";

const CountryType = gql`
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
    getCountryById(id: Int!): Country
  }

  input createCountryInput {
    countryName: String!
    plateCode: String
  }

  type Mutation {
    createCountry(input: createCountryInput): Country
  }
`;

export default CountryType;
