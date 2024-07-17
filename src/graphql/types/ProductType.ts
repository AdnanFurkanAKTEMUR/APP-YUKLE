import gql from "graphql-tag";

const ProductType = gql`
  type Product {
    id: Int
    name: String
  }

  input createProducutInput {
    name: String!
  }

  type Query {
    getAllProduct: [Product]
    # getProduct(input: getId): Product
  }

  type Mutation {
    createProduct(input: createProducutInput): Product
  }
`;

export default ProductType;
