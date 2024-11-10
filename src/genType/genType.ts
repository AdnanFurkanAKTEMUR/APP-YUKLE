import { DataSource } from "typeorm";

//type 0 biz, type 1 companyUser type 2 truckeruser

export type User = {
  id: number;
  company_id: number;
  name: string;
  surname: string;
  email: string;
  verified: boolean;
  role: string;
  type: number;
};

export type Context = {
  user: User | null;
  req: Request;
  res: Response;
  SqlConnection: DataSource;
};
