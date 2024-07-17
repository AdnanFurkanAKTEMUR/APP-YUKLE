import { gql } from "graphql-tag";

const CompanyLoadType = gql`
  type CompanyLoad {
    ad: Ad
    company: Company
    companyId: Int
    createdAt: String
    id: Int
    name: String
    updatedAt: String
  }

  type Query {
    getAllCompanyLoad: [CompanyLoad]
    getCompanyLoad(input: getId): CompanyLoad
  }
`;

export default CompanyLoadType;
