import z from "zod";

export const bookingSchema = z.object({
  // maPhong: z.number({ message: "Not empty please!" }).optional(),
  maPhong: z
    .string({ message: "Please not empty!" })
    .regex(new RegExp(".*[0-9].*"), { message: "ID is number" }),
  ngayDen: z.string({ message: "Not empty please!" }),
  ngayDi: z.string({ message: "Not empty please!" }),
  soLuongKhach: z.string({ message: "Not empty please!" }),
  // maNguoiDung: z.number({ message: "Not empty please!" }).optional(),
  maNguoiDung: z
    .string({ message: "Please not empty!" })
    .regex(new RegExp(".*[0-9].*"), { message: "ID is number" }),
});

export type bookingSchemaType = z.infer<typeof bookingSchema>;
