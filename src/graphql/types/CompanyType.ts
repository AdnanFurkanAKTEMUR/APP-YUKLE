import { gql } from "graphql-tag";

const CompanyType = gql`
  type Company {
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
    taxAdministration: String
    taxPlateDoc: String
    messageConfirm: Boolean
    kvkkConfirm: Boolean
    otpVerification: Boolean
    mailVerification: Boolean
    addresses: [Address]
    country: Country
    city: City
    district: District
    addressDescription: String
    companyDocuments: [CompanyDocument]
    companyUsers: [CompanyUser]
    createdAt: String
    updatedAt: String
  }

  type Query {
    getAllCompanies: [Company]
    getCompanyById(input: getId): Company
  }

  input createCompanyInput {
    companyName: String!
    officialsName: String!
    companyPhoneNumber: String!
    companyMail: String!
    membershipNote: String
    taxNumber: String!
    companySector: String!
    dailyTrip: String!
    truckType: String!
    messageConfirm: Boolean!
    kvkkConfirm: Boolean!
    otpVerification: Boolean!
    mailVerification: Boolean!
    countryId: Int!
    cityId: Int!
    districtId: Int!
    addressDescription: String!
  }

  type Mutation {
    createCompany(input: createCompanyInput): successMsg
  }
`;

export default CompanyType;
