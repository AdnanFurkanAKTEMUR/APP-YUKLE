import { z } from "zod";

const AdsTypeSchema = z.object({
  _id: z.any(),
  company_id: z.any(),
  description: z.string(),
  created_user_id: z.any(),
  updated_user_id: z.any(),
  publish_user_id: z.any(),
  approving_user_id: z.any(),
  active: z.boolean(),
  title: z.string(),
  price: z.number(),
  double_direction: z.boolean(),
  priorty: z.boolean(),
  departure_date: z.string() || z.date(),
  arrival_date: z.string() || z.date(),
  tonage: z.string(),
  is_trailer_exist: z.boolean(),
  company_trailer_id: z.any(),
  is_truck_exist: z.boolean(),
  company_truck_id: z.any(),
  load_type_id: z.any(),
  driver_point_filter: z.boolean(),
  documents: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const CreateAdsTypeSchema = z.object({
  company_id: z.string(),
  description: z.string(),
  user_id: z.string(),
  active: z.boolean(),
  title: z.string(),
  price: z.number(),
  double_direction: z.boolean(),
  priorty: z.boolean(),
  departure_date: z.string() || z.date(),
  arrival_date: z.string() || z.date(),
  tonage: z.string(),
  is_trailer_exist: z.boolean(),
  company_trailer_id: z.string(),
  is_truck_exist: z.boolean(),
  company_truck_id: z.string(),
  load_type_id: z.string(),
  driver_point_filter: z.boolean(),
  documents: z.string(),
});

export const UpdateAdsTypeSchema = z.object({
  _id: z.string(),
  company_id: z.string().optional(),
  description: z.string().optional(),
  user_id: z.string(),
  active: z.boolean().optional(),
  title: z.string().optional(),
  price: z.number().optional(),
  double_direction: z.boolean().optional(),
  priorty: z.boolean().optional(),
  departure_date: z.string().optional() || z.date().optional(),
  arrival_date: z.string().optional() || z.date().optional(),
  tonage: z.string().optional(),
  is_trailer_exist: z.boolean().optional(),
  company_trailer_id: z.string().optional(),
  is_truck_exist: z.boolean().optional(),
  company_truck_id: z.string().optional(),
  load_type_id: z.string().optional(),
  driver_point_filter: z.boolean().optional(),
  documents: z.string().optional(),
});

export const DeleteOrGetAdsTypeSchema = z.object({
  _id: z.string(),
});

export type DeleteOrGetAdsType = z.infer<typeof DeleteOrGetAdsTypeSchema>;
export type UpdateAdsType = z.infer<typeof UpdateAdsTypeSchema>;
export type CreateAdsType = z.infer<typeof CreateAdsTypeSchema>;
export type AdsType = z.infer<typeof AdsTypeSchema>;
