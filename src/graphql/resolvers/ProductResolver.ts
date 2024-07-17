import { Product } from "@entities/Product";

const ProductResolver = {
  Query: {
    getAllProduct: async (_parent: any, _args: any, _context: any, _info: any) => {
      const products = await Product.find();
      return products;
    },
  },
  Mutation: {
    createProduct: async (_parent: any, args: any, _context: any, _info: any) => {
      const { name } = args.input;
      const product = await Product.create({ name }).save();
      return product;
    },
  },
};

export default ProductResolver;
