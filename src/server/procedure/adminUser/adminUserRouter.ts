import { CreateAdminUserTypeSchema, UpdateAdminUserTypeSchema } from "@/server/common/adminUserType/adminUserType";
import { privateProcedure, publicProcedure, router } from "../../trpc";
import createAdminUser from "./createAdminUser";
import updateAdminUser from "./updateAdminUser";

export const AdminUserRouter = router({
  createAdminUser: publicProcedure.input(CreateAdminUserTypeSchema).mutation(async ({ input }) => {
    const result = await createAdminUser(input);
    return result;
  }),
  updateAdminUser: privateProcedure.input(UpdateAdminUserTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await updateAdminUser(input);
    return result;
  }),
});
