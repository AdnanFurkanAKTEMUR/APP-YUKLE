import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession, unstable_getServerSession } from "next-auth";

export const createContext = async (opts?: any) => {
  const req = opts?.req;
  const res = opts?.res;

  return req;
};
