import { objectType } from "nexus";
export const UserType = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("username"),
      t.nonNull.string("email"),
      t.nonNull.string("password");
  },
});
