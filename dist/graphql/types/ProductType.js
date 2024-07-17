"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const ProductType = (0, graphql_tag_1.default) `
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
exports.default = ProductType;
//# sourceMappingURL=ProductType.js.map