import { CreateCompanySch } from "@/server/common/companyType/companyType";
import { privateProcedure, publicProcedure, router } from "../../trpc";
import createCompany from "./createCompany";

export const CompanyRouter = router({
  createCompnay: privateProcedure.input(CreateCompanySch).mutation(async ({ ctx, input }) => {
    const result = await createCompany(input);
    return result;
  }),
});
