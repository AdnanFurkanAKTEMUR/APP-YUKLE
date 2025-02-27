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
    type: Int
    companyProfile: CompanyProfile
    createdOffers: [Offer]
    updatedOffers: [Offer]
    createdAddresses: [Address]
    updatedAddresses: [Address]
    createdCompanyDocuments: [CompanyDocument]
    updatedCompanyDocuments: [CompanyDocument]
    createdCompanyProfiles: [CompanyProfile]
    updatedCompanyProfiles: [CompanyProfile]
    createdAt: String
    updatedAt: String
  }

  input createCompanyUserInput {
    userFirstName: String
    userLastName: String
    userEmail: String
    userRole: String
    userPassword: String
    userStatus: Boolean
    userPhone: String
    userImage: String
    companyProfileId: Int
  }

  type Query {
    getAllCompanyUser: [CompanyUser]
    getCompanyUser(input: getId): CompanyUser
  }

  type Mutation {
    createCompanyUser(input: createCompanyUserInput): CompanyUser
  }
`;
exports.default = CompanyUserType;
//# sourceMappingURL=CompanyUser.js.map