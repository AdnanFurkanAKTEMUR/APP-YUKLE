import { gql } from "graphql-tag";

const CompanyLoadType = gql`
  type CompanyLoad {
    id: Int
    companyId: Int
    adId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  input createCompanyLoadInput {
    companyId: Int!
    name: String!
  }

  input updateCompanyLoadInput {
    id: Int!
    name: String
  }

  type Query {
    getAllCompanyLoad: [CompanyLoad]
    getCompanyLoad(input: getId): CompanyLoad
  }

  type Mutation {
    createCompanyLoad(input: createCompanyLoadInput): CompanyLoad
    updateCompanyLoad(input: updateCompanyLoadInput): CompanyLoad
    deleteCompanyLoad(input: getId): successMsg
  }
`;

export default CompanyLoadType;
