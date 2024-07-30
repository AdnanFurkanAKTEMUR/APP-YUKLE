import gql from "graphql-tag";

const CityType = gql`
  type City {
    id: Int
    cityName: String
    plateCode: String
    countryId: Int
    district: [District]
    country: Country
    createdAt: String
    updatedAt: String
  }

  type Query {
    getCity(input: getId): City
  }
`;

export default CityType;
