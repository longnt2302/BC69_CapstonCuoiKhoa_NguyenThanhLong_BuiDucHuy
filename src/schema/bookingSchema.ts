import z from "zod";

export const bookingSchema = z.object({
  // maPhong: z.number({ message: "Not empty please!" }).optional(),
  maPhong: z
    .string()
    .min(1, { message: "Not empty please!" })
    .transform((val) => Number(val)),
  ngayDen: z.string({ message: "Not empty please!" }),
  ngayDi: z.string({ message: "Not empty please!" }),
  soLuongKhach: z.string({ message: "Not empty please!" }),
  maNguoiDung: z
    .string()
    .min(1, { message: "Not empty please!" })
    .transform((val) => Number(val)),
});

export type bookingSchemaType = z.infer<typeof bookingSchema>;
