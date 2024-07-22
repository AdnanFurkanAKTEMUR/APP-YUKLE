import { gql } from "graphql-tag";

const CompanyTrailerType = gql`
  type CompanyTrailer {
    id: Int
    companyId: Int
    adId: Int
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

  input updateCompanyTrailerInput {
    id: Int!
    name: String
    adId: Int
  }

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
    getCompanyTrailer(input: getId): CompanyTrailer
  }
  type Mutation {
    createCompanyTrailer(input: createCompanyTrailerInput): CompanyTrailer
    updateCompanyTrailer(input: updateCompanyTrailerInput): CompanyTrailer
    deleteCompanyTrailer(input: getId): successMsg
  }
`;

export default CompanyTrailerType;
