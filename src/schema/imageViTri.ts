import z from "zod";

export const imageUploadSchema = z.object({
  hinhAnh: z.array(z.any()).nonempty({ message: "Vui lòng upload ít nhất 1 hình ảnh" }),
});

export type imageUploadSchemaType = z.infer<typeof imageUploadSchema>;
