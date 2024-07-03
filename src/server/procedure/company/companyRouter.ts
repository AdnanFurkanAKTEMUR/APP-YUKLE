import { CreateCompanySch, DeleteOrGetCompanySchema } from "@/server/common/companyType/companyType";
import { privateProcedure, publicProcedure, router } from "../../trpc";
import createCompany from "./createCompany";
import getAllCompany from "./getAllCompany";
import deleteCompany from "./deleteCompany";
import getCompany from "./getCompany";

export const CompanyRouter = router({
  createCompnay: privateProcedure.input(CreateCompanySch).mutation(async ({ ctx, input }) => {
    const result = await createCompany(input);
    return result;
  }),
  getAllCompany: privateProcedure.query(async ({ ctx, input }) => {
    const result = await getAllCompany();
    return result;
  }),
  deleteCompany: privateProcedure.input(DeleteOrGetCompanySchema).mutation(async ({ ctx, input }) => {
    const result = await deleteCompany(input);
    return result;
  }),
  getCompany: privateProcedure.input(DeleteOrGetCompanySchema).query(async ({ ctx, input }) => {
    const result = await getCompany(input);
    return result;
  }),
});
