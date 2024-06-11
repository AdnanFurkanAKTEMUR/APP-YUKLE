import { z } from "zod";
import { ObjectId } from "mongodb";
import { CreateCompanyUserInputSchema } from "../userTypes/companyUserTypes";

export const companyTypeSch = z.object({
  _id: z.string(),
  name: z.string(),
  address: z.string(),
  phone_number: z.string(),
  users: z.array(z.string()).optional(),
  vkn: z.string(),
  bank_account: z.string().optional(),
  ads: z.array(z.string()).optional(),
  point: z.number().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
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

export const companyAdsSch = z.object({
  _id: z.custom<ObjectId>().optional(),
  id: z.string().optional(),
  company_id: z.string(),
  publish_user_id: z.string(),
  approving_user_id: z.string(),
  active: z.boolean(),
  title: z.string(),
  price: z.number(),
  double_direction: z.boolean(),
  priorty: z.boolean(),
  departure_date: z.date(),
  arrival_date: z.date(),
  load_type_id: z.string(),
  tonage: z.string(),
  is_with_trailer: z.boolean(),
  is_with_truck: z.boolean(),
  driver_point_filter: z.number(),
  documents: z.string(),
});

export const createCompanyAdsSch = z.object({});
