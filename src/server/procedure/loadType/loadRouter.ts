import { privateProcedure, publicProcedure, router } from "../../trpc";
import getLoad from "./getLoad";
import { CreateLoadTypeSchema, DeleteOrGetLoadTypeSchema, UpdateLoadTypeSchema } from "../../common/loadTypeType/loadTypeType";
import getAllLoad from "./getAllLoad";
import createLoad from "./createLoad";
import updateLoad from "./updateLoad";
import deleteLoad from "./deleteLoad";

export const CompanyUserRouter = router({
  getLoad: privateProcedure.input(DeleteOrGetLoadTypeSchema).query(async ({ ctx, input }) => {
    //ctx kontrolü ileride içinde token ve kullanıcı bilgisi var
    const result = await getLoad(input);
    return result;
  }),
  getAllLoad: privateProcedure.query(async ({ ctx }) => {
    const result = await getAllLoad();
    return result;
  }),
  createLoad: privateProcedure.input(CreateLoadTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await createLoad(input);
    return result;
  }),
  updateLoad: privateProcedure.input(UpdateLoadTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await updateLoad(input);
    return result;
  }),
  deleteLoad: privateProcedure.input(DeleteOrGetLoadTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await deleteLoad(input);
    return result;
  }),
});
