import { ObjectId } from "mongodb";
import { z } from "zod";

const LoadTypeSchema = z.object({
  _id: z.any(),
  trailerTypeId: z.any(),
  name: z.string(),
  weight: z.string(),
});

export const CreateLoadTypeSchema = z.object({
  trailerTypeId: z.string(),
  name: z.string(),
  weight: z.string(),
});

export const UpdateLoadTypeSchema = z.object({
  _id: z.string(),
  name: z.string(),
  trailerTypeId: z.string(),
  weight: z.string(),
});

export const DeleteOrGetLoadTypeSchema = z.object({
  _id: z.string(),
});

export type DeleteOrGetLoadType = z.infer<typeof DeleteOrGetLoadTypeSchema>;
export type UpdateLoadType = z.infer<typeof UpdateLoadTypeSchema>;
export type CreateLoadType = z.infer<typeof CreateLoadTypeSchema>;
export type LoadType = z.infer<typeof LoadTypeSchema>;
