import { gql } from "graphql-tag";

const CompanyRecordType = gql`
  type CompanyRecord {
    id: Int!
    companyName: String!
    officialsName: String!
    companyPhoneNumber: String!
    companyMail: String!
    membershipNote: String
    taxNumber: String!
    companySector: String!
    dailyTrip: String!
    truckType: String!
    companyProfileId: Int
    companyProfile: CompanyProfile
    countryId: Int
    cityId: Int
    districtId: Int
    addressDescription: String!
    messageConfirm: Boolean!
    kvkkConfirm: Boolean!
    otpVerification: Boolean
    mailVerification: Boolean
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getCompanyRecord(input: getId): CompanyRecord
    getAllCompanyRecord: [CompanyRecord]
  }
`;

export default CompanyRecordType;
