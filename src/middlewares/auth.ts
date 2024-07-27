import * as jwt from "jsonwebtoken";

export interface AuthTokenPayload {
  id: number;
  companyId: number;
  name: string;
  surname: string;
  email: string;
  verified: boolean;
  role: string;
  type: number;
}

export const auth = (header: string): AuthTokenPayload => {
  const token = header.split(" ")[1];
  console.log(token)
  if (!token) {
    throw new Error("Invalid Token");
  }

  return jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret) as AuthTokenPayload;
};
