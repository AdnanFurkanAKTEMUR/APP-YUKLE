import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextApiRequest, NextApiResponse } from "next";
import { appRouter } from "@/server";
import { getSession } from "next-auth/react";
import { createContext } from "@/server/createContext";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await createContext({ req }),
  });

export { handler as GET, handler as POST };

