import { privateProcedure, publicProcedure, router } from "../../trpc";
import createCompanyUser from "./createCompanyUser";
import { CreateCompanyUserSchema } from "../../common/companyUserType/companyUserTypes";

export const CompanyUserRouter = router({
  getTodos: privateProcedure.query(async ({ ctx, input }) => {
    if (ctx.name) {
      return ctx.name;
    }
    return [1, 2, 3];
  }),
  createCompanyUser: privateProcedure.input(CreateCompanyUserSchema).mutation(async ({ ctx, input }) => {
    //ctx kontrolü ileride içinde token ve kullanıcı bilgisi var
    const result = await createCompanyUser(input);
    return result;
  }),
});
