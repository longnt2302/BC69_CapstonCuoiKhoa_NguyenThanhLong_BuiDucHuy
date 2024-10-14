import z from "zod";

export const bookingSchema = z.object({
  maPhong: z.number({ message: "Not empty please!" }).optional(),
  ngayDen: z.string({ message: "Not empty please!" }),
  ngayDi: z.string({ message: "Not empty please!" }),
  soLuongKhach: z.string({ message: "Not empty please!" }),
  maNguoiDung: z.number({ message: "Not empty please!" }).optional(),
});

export type bookingSchemaType = z.infer<typeof bookingSchema>;
