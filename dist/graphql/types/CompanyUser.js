"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyUserType = (0, graphql_tag_1.gql) `
  type CompanyUser {
    id: Int
    userFirstName: String
    userLastName: String
    userEmail: String
    userRole: String
    userPassword: String
    userStatus: Boolean
    userPhone: String
    userImage: String
    companyProfileId: Int
    companyProfile: CompanyProfile
    offers: [Offer]
    createdBy: CompanyUser
    updatedBy: CompanyUser
    deletedBy: CompanyUser
    createdAt: String
    updatedAt: String
    deletedAt: String
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }
`;
exports.default = CompanyUserType;
//# sourceMappingURL=CompanyUser.js.map