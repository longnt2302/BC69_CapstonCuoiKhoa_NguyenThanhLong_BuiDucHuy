import z from "zod";

export const registerSchema = z.object({
  // id: z
  //   .string({ message: "Please not empty!" })
  //   .regex(new RegExp(".*[0-9].*"), { message: "ID is number" }),
  name: z.string({ message: "Please not empty!" }),
  email: z
    .string({ message: "Please not empty!" })
    .email({ message: "Please enter correct email format!" }),
  password: z.string(),
  phone: z
    .string({ message: "Only number please!" })
    .min(10, { message: "Phone number to short!" })
    .max(12, { message: "Phone number to long!" }),
  birthday: z.string({ message: "Please not empty!" }),
  gender: z.boolean().optional(),
  role: z.string({ message: "Please not empty!" }),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
