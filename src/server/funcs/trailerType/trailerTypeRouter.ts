import { privateProcedure, publicProcedure, router } from "../../trpc";
import { CreateCompanyUserInputSchema } from "../../common/userTypes/companyUserTypes";
import { CreateTrailerTypeInputSchema, DeleteTrailerTypeInputSch } from "@/server/common/trailerTypeType/trailerTypeType";
import getTrailerType from "./getTrailerType";
import getAllTrailerType from "./getAllTrailerType";
import createTrailerType from "./createTrailerType";
import { UpdateTrailerTypeInputSch } from "../../common/trailerTypeType/trailerTypeType";
import updateTrailer from "./updateTrailerType";
import deleteTrailerType from "./deleteTrailerType";

//ctx içinde user ve yetki kontrolü
//private olan tüm funclarda yap

export const TrailerTypeRouter = router({
  getTrailerType: privateProcedure.input(DeleteTrailerTypeInputSch).query(async ({ ctx, input }) => {
    const result = await getTrailerType(input);
    return result;
  }),
  getAllTrailerType: privateProcedure.query(async ({ ctx, input }) => {
    const result = await getAllTrailerType();
    return result;
  }),
  createTrailerType: privateProcedure.input(CreateTrailerTypeInputSchema).mutation(async ({ ctx, input }) => {
    const result = await createTrailerType(input);
    return result;
  }),
  updateTrailerType: privateProcedure.input(UpdateTrailerTypeInputSch).mutation(async ({ ctx, input }) => {
    const result = await updateTrailer(input);
    return result;
  }),
  deleteTrailerType: privateProcedure.input(DeleteTrailerTypeInputSch).mutation(async ({ ctx, input }) => {
    const result = await deleteTrailerType(input);
    return result;
  }),
});
