"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductMutation = exports.ProductQuery = exports.productType = void 0;
const nexus_1 = require("nexus");
const Product_1 = require("../entities/Product");
const User_1 = require("../entities/User");
exports.productType = (0, nexus_1.objectType)({
    name: "Product",
    definition(t) {
        t.nonNull.int("id"), t.nonNull.string("name"), t.nonNull.float("price");
        t.nonNull.int("creatorId");
        t.field("createdBy", {
            type: "User",
            async resolve(parent, _args, _context, _info) {
                return User_1.User.findOne({ where: { id: parent.creatorId } });
            },
        });
        t.nonNull.string("created_at");
        t.nonNull.string("updated_at");
    },
});
exports.ProductQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("products", {
            type: "Product",
            resolve(_parent, _args, _context, _info) {
                return Product_1.Product.find();
            },
        });
    },
});
exports.CreateProductMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createProductMutation", {
            type: "Product",
            args: {
                name: (0, nexus_1.nonNull)((0, nexus_1.stringArg)()),
                price: (0, nexus_1.nonNull)((0, nexus_1.floatArg)()),
            },
            resolve(_parent, args, context, _info) {
                const { name, price } = args;
                const { user_id } = context;
                return Product_1.Product.create({ name, price, creatorId: user_id }).save();
            },
        });
    },
});
//# sourceMappingURL=Product.js.map