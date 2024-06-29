import { z } from "zod";

export const CompanyUserSchema = z.object({
  _id: z.any(),
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const CreateCompanyUserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
});

export const UpdateCompanyUserSchema = z.object({
  _id: z.string(),
  name: z.string(),
  surname: z.string(),
  role: z.string(),
});

export const DeleteOrGetCompanyUserSchema = z.object({
  _id: z.string(),
});

export const UpdateCompanyUserPasswordTypeSchema = z.object({
  _id: z.string(),
  password: z.string(),
  new_password: z.string(),
});

export type CompanyUserType = z.infer<typeof CompanyUserSchema>;
export type CreateCompanyUserType = z.infer<typeof CreateCompanyUserSchema>;
export type UpdateCompanyUserType = z.infer<typeof UpdateCompanyUserSchema>;
export type DeleteOrGetCompanyUserType = z.infer<typeof DeleteOrGetCompanyUserSchema>;
export type UpdateCompanyUserPasswordType = z.infer<typeof UpdateCompanyUserPasswordTypeSchema>;
