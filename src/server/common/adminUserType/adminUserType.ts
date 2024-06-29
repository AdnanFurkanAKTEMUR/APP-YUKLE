import { z } from "zod";

const AdminUserTypeSchema = z.object({
  _id: z.any(),
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  password: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const CreateAdminUserTypeSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
  password: z.string(),
  passwordConfirm: z.string(),
});

export const UpdateAdminUserTypeSchema = z.object({
  _id: z.string(),
  name: z.string(),
  surname: z.string(),
});

export type AdminUserType = z.infer<typeof AdminUserTypeSchema>;
export type CreateAdminUserType = z.infer<typeof CreateAdminUserTypeSchema>;
export type UpdateAdminUserType = z.infer<typeof UpdateAdminUserTypeSchema>;
