import { gql } from "graphql-tag";

const CityType = gql`
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
    getCityById(id: Int!): City
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

export default CityType;
