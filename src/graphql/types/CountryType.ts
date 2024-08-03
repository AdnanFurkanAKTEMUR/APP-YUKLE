import { gql } from "graphql-tag";

const CountryType = gql`
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

export default CountryType;
