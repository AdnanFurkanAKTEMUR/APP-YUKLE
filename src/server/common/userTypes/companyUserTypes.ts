import { z } from "zod";

export const CompanyUser = z.object({
  _id: z.string(),
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});



