import { gql } from "graphql-tag";

const AdminUserType = gql`
  type AdminUser {
    id: Int
    name: String
    surname: String
    email: String
    password: String
    verified: Boolean
    verificationTokenExpires: String
    verificationToken: String
    resetPasswordToken: String
    resetPasswordTokenExpires: String
    type: Int
    createdAt: String
    updatedAt: String
  }
  input createAdminUserInput {
    email: String!
    name: String!
    surname: String!
    password: String!
  }
  type Query {
    getAllAdminUser: [AdminUser]
    getAdminUser(input: getId): AdminUser
  }

  type Mutation {
    createAdminUser(input: createAdminUserInput): AdminUser
  }
`;

export default AdminUserType;
