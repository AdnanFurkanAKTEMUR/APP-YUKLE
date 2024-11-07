import gql from "graphql-tag";

const DistrictType = gql`
  type District {
    id: Int
    districtName: String
    city: City
    postalCode: String
    plateCode: String
    createdAt: String
    updatedAt: String
  }

  input getDistrictOfCityInput {
    cityId: Int!
  }

  input createDistrictInput {
    districtName: String!
    cityId: Int
    postalCode: String
    plateCode: String
  }

  type Query {
    getDistrict(input: getId): District
  }

  type Mutation {
    createDistrict(input: createDistrictInput): District
  }
`;

export default DistrictType;
