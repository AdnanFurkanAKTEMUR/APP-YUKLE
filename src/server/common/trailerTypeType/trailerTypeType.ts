import { z } from "zod";
import { ObjectId } from "mongodb";
export const trailerTypeSchema = z.object({
  _id: z.custom<ObjectId>().optional(),
  id: z.string().optional(),
  name: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date(),
});

export const UpdateTrailerTypeInputSch = z.object({
  id: z.string(),
  name: z.string(),
});

export const CreateTrailerTypeInputSchema = z.object({
  name: z.string(),
});

export const DeleteTrailerTypeInputSch = z.object({
  id: z.string(),
});

export type TrailerTypeType = z.infer<typeof trailerTypeSchema>;
export type CreateTrailerTypeInputType = z.infer<typeof CreateTrailerTypeInputSchema>;
export type UpdateTrailerTypeInputType = z.infer<typeof UpdateTrailerTypeInputSch>;
export type DeleteTrailerTypeInputType = z.infer<typeof DeleteTrailerTypeInputSch>;
