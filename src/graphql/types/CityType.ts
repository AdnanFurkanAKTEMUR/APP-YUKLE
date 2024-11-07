import gql from "graphql-tag";

const CityType = gql`
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

export default CityType;
