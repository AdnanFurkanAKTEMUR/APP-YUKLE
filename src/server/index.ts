import { privateProcedure, publicProcedure, router } from "./trpc";
import { CompanyUserRouter } from "./procedure/companyUser/companyUserRouter";
import { TrailerTypeRouter } from "./procedure/trailerType/trailerTypeRouter";
import { LoadRouter } from "./procedure/loadType/loadRouter";
import { AdsRouter } from "./procedure/ads/adsRouter";
export const appRouter = router({
  companyUser: CompanyUserRouter,
  trailerType: TrailerTypeRouter,
  load: LoadRouter,
  ads: AdsRouter,
});

export type AppRouter = typeof appRouter;
