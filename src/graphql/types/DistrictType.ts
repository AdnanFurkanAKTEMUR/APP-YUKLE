import { gql } from "graphql-tag";

const DistrictType = gql`
  type District {
    id: Int
    districtName: String
    city: City
    postalCode: String
    addresses: [Address]
    companies: [Company]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllDistricts: [District]
    getDistrictById(input: getId): District
  }

  input createDistrictInput {
    districtName: String!
    cityId: Int
    postalCode: String
  }

  type Mutation {
    createDistrict(input: createDistrictInput): District
  }
`;

export default DistrictType;
