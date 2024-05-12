import { privateProcedure, publicProcedure, router } from "./trpc";
import { CompanyUserRouter } from "./funcs/companyUser/companyUserRouter";
import { TrailerTypeRouter } from "./funcs/trailerType/trailerTypeRouter";
export const appRouter = router({
  companyUser: CompanyUserRouter,
  trailerType: TrailerTypeRouter,
});

export type AppRouter = typeof appRouter;
