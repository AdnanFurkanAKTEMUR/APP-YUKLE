import { extendType, floatArg, nonNull, objectType, stringArg } from "nexus";
import { Product } from "../entities/Product";
import { User } from "../entities/User";

export const productType = objectType({
  name: "Product",
  definition(t) {
    t.nonNull.int("id"), t.nonNull.string("name"), t.nonNull.float("price");
    t.nonNull.int("creatorId");
    t.field("createdBy", {
      type: "User",
      async resolve(parent, _args, _context, _info): Promise<User | null> {
        return User.findOne({ where: { id: parent.creatorId } });
      },
    });
    t.nonNull.string("created_at");
    t.nonNull.string("updated_at");
  },
});

export const ProductQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("products", {
      type: "Product",
      resolve(_parent, _args, _context, _info): Promise<Product[]> {
        //düz sql yazmak istersekte context içinde sql connection var
        // const { SqlConnection } = context
        //SqlConnection auto complete için DataSource tipini implemente edilmeli.
        // return = SqlConnection.query(`select * from product`)
        return Product.find();
      },
    });
  },
});

export const CreateProductMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createProductMutation", {
      type: "Product",
      args: {
        name: nonNull(stringArg()),
        price: nonNull(floatArg()),
      },
      resolve(_parent, args, context, _info): Promise<Product> {
        const { name, price } = args;
        const { user_id } = context;
        return Product.create({ name, price, creatorId: user_id }).save();
      },
    });
  },
});
