import z from "zod";

export const loginSchema = z.object({
  emailLG: z
    .string({ message: "Please not empty!" })
    .email({ message: "Please enter correct email format!" }),
  passwordLG: z.string(),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
