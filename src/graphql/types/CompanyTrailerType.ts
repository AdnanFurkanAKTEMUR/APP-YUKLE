import { gql } from "graphql-tag";

const CompanyTrailerType = gql`
  type CompanyTrailer {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
  }

  input createCompanyTrailerInput {
    companyId: Int!
    name: String!
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
  }
  type Mutation {
    createCompanyTrailer(input:createCompanyTrailerInput): CompanyTrailer
  }
`;

export default CompanyTrailerType;
