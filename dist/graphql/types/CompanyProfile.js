"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyProfileType = (0, graphql_tag_1.gql) `
  type CompanyProfile {
    id: Int
    companyCode: String
    companyPhoneNumber: String
    taxNumber: String
    taxAdministration: String
    taxPlateDoc: String
    companyUsers: [CompanyUser]
    companyDocuments: [CompanyDocument]
    addresses: [Address]
    companyRecord: [CompanyRecord]
    createdCompanyUser: CompanyUser
    updatedCompanyUser: CompanyUser
    updatedAt: String
    createdAt: String
  }

  type Query {
    getCompanyProfile(input: getId): CompanyProfile
    getAllCompanyProfile: [CompanyProfile]
  }
`;
exports.default = CompanyProfileType;
//# sourceMappingURL=CompanyProfile.js.map