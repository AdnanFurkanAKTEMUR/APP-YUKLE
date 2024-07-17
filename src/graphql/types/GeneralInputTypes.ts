import gql from "graphql-tag";

const GeneralInputTypes = gql`
  input getId {
    id: Int!
  }
`;

export default GeneralInputTypes;
