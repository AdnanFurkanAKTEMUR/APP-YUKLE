import gql from "graphql-tag";

const DistrictType = gql`
  type District {
    id: Int
    districtName: String
    cityId: Int
    city: City
    postalCode: String
    plateCode: String
    createdAt: String
    updatedAt: String
  }

  input getDistrictOfCityInput {
    cityId: Int!
  }

  type Query {
    getDistrict(input: getId): District
    getDistrictOfCity(input: getDistrictOfCityInput): District
  }
`;

export default DistrictType;
