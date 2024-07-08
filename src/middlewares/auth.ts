import * as jwt from "jsonwebtoken";

export interface AuthTokenPayload {
  user_id: number;
}

export const auth = (header: string): AuthTokenPayload => {
  const token = header.split(" ")[1];

  if (!token) {
    throw new Error("Invalid Token");
  }

  return jwt.verify(
    token,
    process.env.TOKEN_SECRET as jwt.Secret
  ) as AuthTokenPayload;
};
