import { gql } from "graphql-tag";

const CompanyLoadType = gql`
  type CompanyLoad {
    id: Int
    companyId: Int
    name: String
    ad: Ad
    company: Company
    updatedAt: String
    createdAt: String
  }

  type Query {
    getAllCompanyLoad: [CompanyLoad]
    getCompanyLoad(input: getId): CompanyLoad
  }
`;

export default CompanyLoadType;
