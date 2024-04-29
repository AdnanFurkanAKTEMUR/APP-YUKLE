import { privateProcedure, publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: privateProcedure.query(async ({ ctx }) => {
    if (ctx.name) {
      return ctx.name;
    }
    return [1, 2, 3];
  }),
});

export type AppRouter = typeof appRouter;
