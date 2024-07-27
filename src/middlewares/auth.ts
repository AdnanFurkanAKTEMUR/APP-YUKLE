import * as jwt from "jsonwebtoken";
import { decode } from "next-auth/jwt";

export interface AuthTokenPayload {
  id: number;
  companyId: number;
  name: string;
  surname: string;
  email: string;
  verified: boolean;
  role: string;
  type: number;
  from: string;
}

export const auth = async (header: string, cookie: any): Promise<AuthTokenPayload | null> => {
  try {
    //burası mobilden gelen token iiçn
    const token = header.split(" ")[1] || "";
    //burası web tarafından gelen token için
    let webToken: any;
    if (cookie) {
      const next_auth_session_token = cookie.split(" ")[2];
      const equalText = next_auth_session_token.indexOf("=");
      webToken = next_auth_session_token.substring(equalText + 1);
    }

    if (!token && !webToken) {
      throw new Error("Invalid Token");
    }

    if (webToken) {
      const decoded = await decode({
        token: webToken,
        secret: process.env.NEXTAUTH_SECRET || "",
      });

      if (decoded) {
        //çünkü admin kullanıcıda henüz rol yok hata verir
        decoded.role = "";
        decoded.from = "web";
        const payload = decoded as unknown;
        if (isAuthTokenPayload(payload)) {
          return payload;
        }
      }
    }

    if (token) {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret);
      const payload = verified as unknown;
      if (isAuthTokenPayload(payload)) {
        payload.from = "mobil";
        return payload;
      }
    }

    return null;
  } catch (error) {
    console.error("Authentication error:", error);
    return null;
  }
};

function isAuthTokenPayload(payload: any): payload is AuthTokenPayload {
  return typeof payload === "object" && payload !== null && "id" in payload && "companyId" in payload && "name" in payload && "surname" in payload && "email" in payload && "verified" in payload && "role" in payload && "type" in payload;
}
