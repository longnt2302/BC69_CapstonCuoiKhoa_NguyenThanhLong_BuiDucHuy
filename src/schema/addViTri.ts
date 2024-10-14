import z from "zod";
// const imageUrlRegex = /(https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|webp|svg))/i;

export const viTriSchema = z.object({
  id: z.number(),
  tenViTri: z.string({ message: "Vui lòng nhập tên vị trí" }),
  tinhThanh: z.string({ message: "Vui lòng nhập tên tỉnh thành" }),
  quocGia: z.string({ message: "Vui lòng nhập tên quốc gia" }),
  hinhAnh: z
    .any()
    .transform((value) => {
      return value as FileList;
    })
    .optional(),
});

export type viTriSchemaType = z.infer<typeof viTriSchema>;
