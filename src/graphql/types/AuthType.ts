import { gql } from "graphql-tag";

const AuthType = gql`
  type AuthType {
    admin_user: AdminUser!
    token: String!
  }
  input loginInput {
    email: String!
    password: String!
  }
  type Mutation {
    login(input: loginInput): AuthType
  }
`;
export default AuthType;
