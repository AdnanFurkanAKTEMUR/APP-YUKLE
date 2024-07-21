import { gql } from "graphql-tag";

const CompanyTrailerType = gql`
  type CompanyTrailer {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  input createCompanyTrailerInput {
    companyId: Int!
    name: String!
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
  }
  type Mutation {
    createCompanyTrailer(input: createCompanyTrailerInput): CompanyTrailer
  }
`;

export default CompanyTrailerType;
