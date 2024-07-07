import { TRPCError, initTRPC } from "@trpc/server";
import { createContext } from "./createContext";
import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

const t = initTRPC.context<typeof createContext>().create();

const isAuthed = t.middleware(async ({ ctx, next }) => {
  //console.log(ctx?.cookies._headers, "ctx")
  //@ts-ignore
  const token = await getToken({ req: ctx, secret });
  console.log(token, "token")
  if (!token) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      name: token.name,
      email: token.email,
    },
  });
});

export const createCallerFactory = t.createCallerFactory;
export const router = t.router;
export const privateProcedure = t.procedure.use(isAuthed);
export const publicProcedure = t.procedure;
