import { z } from "zod";
import { ObjectId } from "mongodb";
import { CreateCompanyUserInputSchema } from "../userTypes/companyUserTypes";

export const companyTypeSch = z.object({
  _id: z.custom<ObjectId>().optional(),
  id: z.string().optional(),
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  users: z.array(z.string()).optional(),
  vkn: z.string(),
  bank_account: z.string().optional(),
  ads: z.array(z.string()).optional(),
  point: z.number().optional(),
});

export const createCompanySch = z.object({
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  vkn: z.string(),
});

//get içinde kullanılabilir
export const deleteCompanySch = z.object({
  id: z.string(),
});

export const updateCompanySch = z.object({
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  vkn: z.string(),
});

export const createCompanyUsersSch = z.object({
  name: z.string(),
  surname: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string(),
});

export const getAllCompanyUsersSch = z.object({
  user_ids: z.array(z.string()),
});

export const deleteCompanyUsersSch = z.object({
  user_id: z.string(),
});

export const getCompanyUserSch = z.object({
  user_id: z.string(),
});

export const createCompanyAdsSch = z.object({
  
})