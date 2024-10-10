import z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "Please not empty!" })
    .email({ message: "Please enter correct email format!" }),
  password: z.string(),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
