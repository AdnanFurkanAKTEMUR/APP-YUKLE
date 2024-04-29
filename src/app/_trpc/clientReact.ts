import { createTRPCReact, inferReactQueryProcedureOptions } from "@trpc/react-query";

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/server";

export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export const trpcReact = createTRPCReact<AppRouter>({});
