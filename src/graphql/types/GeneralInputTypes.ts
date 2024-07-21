import gql from "graphql-tag";

const GeneralInputTypes = gql`
  input getId {
    id: Int!
  }

  type successMsg {
    success: Boolean
    msg: String
  }
`;

export default GeneralInputTypes;
