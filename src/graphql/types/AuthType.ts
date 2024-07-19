import { gql } from "graphql-tag";

const AuthType = gql`
  type AdminUserAuthMobileType {
    adminUser: AdminUser!
    token: String!
  }

  type CompanyUserAuthMobileType {
    companyUser: CompanyUser!
    token: String!
  }

  input loginInput {
    email: String!
    password: String!
  }
  type Mutation {
    loginAdminUserMobile(input: loginInput): AdminUserAuthMobileType
    loginCompanyUserMobile(input: loginInput): CompanyUserAuthMobileType
  }
`;
export default AuthType;
