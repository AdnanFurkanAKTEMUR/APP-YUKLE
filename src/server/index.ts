import { privateProcedure, publicProcedure, router } from "./trpc";
import { CompanyUserRouter } from "./procedure/companyUser/companyUserRouter";
import { TrailerTypeRouter } from "./procedure/trailerType/trailerTypeRouter";
export const appRouter = router({
  companyUser: CompanyUserRouter,
  trailerType: TrailerTypeRouter,
});

export type AppRouter = typeof appRouter;
