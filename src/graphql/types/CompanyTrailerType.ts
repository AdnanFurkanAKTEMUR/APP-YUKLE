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

  type Query {
    getAllCompanyTrailer: [CompanyTrailer]
  }
`;

export default CompanyTrailerType;
