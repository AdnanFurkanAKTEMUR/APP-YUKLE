import { z } from "zod";
import { ObjectId } from "mongodb";

export const CompanyTypeSch = z.object({
  _id: z.any(),
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  users: z.array(z.string()).optional(),
  vkn: z.string(),
  bank_account: z.string().optional(),
  ads: z.array(z.string()).optional(),
  point: z.number().optional(),
  company_trailers_ids: z.string().optional(),
  company_trucks_ids: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
});

export const CreateCompanySch = z.object({
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  vkn: z.string(),
});

//get içinde kullanılabilir
export const DeleteOrGetCompanySchema = z.object({
  _id: z.string(),
});

export const UpdateCompanySch = z.object({
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  vkn: z.string(),
});

export type CompanyType = z.infer<typeof CompanyTypeSch>;
export type CreateCompanyType = z.infer<typeof CreateCompanySch>;
export type UpdateCompanyType = z.infer<typeof UpdateCompanySch>;
export type DeleteOrGetCompany = z.infer<typeof DeleteOrGetCompanySchema>;
