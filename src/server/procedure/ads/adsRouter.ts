import { CreateAdsTypeSchema, DeleteOrGetAdsTypeSchema, UpdateAdsTypeSchema } from "@/server/common/adsType/adsType";
import { privateProcedure, publicProcedure, router } from "../../trpc";
import getAds from "./getAds";
import getAllAds from "./getAllAds";
import createAds from "./createAds";
import updateAds from "./updateAds";
import deleteAds from "./deleteAds";

export const AdsRouter = router({
  getAds: privateProcedure.input(DeleteOrGetAdsTypeSchema).query(async ({ ctx, input }) => {
    const result = await getAds(input);
    return result;
  }),
  getAllAds: privateProcedure.query(async ({ ctx }) => {
    const result = await getAllAds();
    return result;
  }),
  createAds: privateProcedure.input(CreateAdsTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await createAds(input);
    return result;
  }),
  updateAds: privateProcedure.input(UpdateAdsTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await updateAds(input);
    return result;
  }),
  deleteAds: privateProcedure.input(DeleteOrGetAdsTypeSchema).mutation(async ({ ctx, input }) => {
    const result = await deleteAds(input);
    return result;
  }),
});
