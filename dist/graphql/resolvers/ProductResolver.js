"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("../../entities/Product");
const ProductResolver = {
    Query: {
        getAllProduct: async (_parent, _args, _context, _info) => {
            const products = await Product_1.Product.find();
            return products;
        },
    },
    Mutation: {
        createProduct: async (_parent, args, _context, _info) => {
            const { name } = args.input;
            const product = await Product_1.Product.create({ name }).save();
            return product;
        },
    },
};
exports.default = ProductResolver;
//# sourceMappingURL=ProductResolver.js.map