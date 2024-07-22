import { DataSource } from "typeorm";

export type User = {
  user_id: number;
  company_id: string;
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
