import { z } from "zod";

export const CompanyUserSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const CreateCompanyUserInputSchema = z.object({
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
});

export type CompanyUserType = z.infer<typeof CompanyUserSchema>;
export type CreateCompanyUserInputType = z.infer<typeof CreateCompanyUserInputSchema>;
