"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = require("graphql-tag");
const CompanyRecordType = (0, graphql_tag_1.gql) `
  type CompanyRecord {
    id: Int
    companyName: String
    officialsName: String
    companyPhoneNumber: String
    companyMail: String
    membershipNote: String
    taxNumber: String
    companySector: String
    dailyTrip: String
    truckType: String
    companyProfileId: Int
    companyProfile: CompanyProfile
    countryId: Int
    cityId: Int
    districtId: Int
    addressDescription: String
    messageConfirm: Boolean
    kvkkConfirm: Boolean
    otpVerification: Boolean
    mailVerification: Boolean
    createdAt: String
    updatedAt: String
  }

  input createCompanyRecordInput {
    companyName: String!
    officialsName: String!
    companyPhoneNumber: String!
    companyMail: String!
    membershipNote: String!
    taxNumber: String!
    companySector: String!
    dailyTrip: String!
    truckType: String!
    countryId: Int!
    cityId: Int!
    districtId: Int!
    addressDescription: String!
    messageConfirm: Boolean!
    kvkkConfirm: Boolean!
    otpVerification: Boolean!
    mailVerification: Boolean!
  }

  type Query {
    getCompanyRecord(input: getId): CompanyRecord
    getAllCompanyRecord: [CompanyRecord]
  }

  type Mutation {
    createCompanyRecord(input: createCompanyRecordInput): successMsg
  }
`;
exports.default = CompanyRecordType;
//# sourceMappingURL=CompanyRecord.js.map