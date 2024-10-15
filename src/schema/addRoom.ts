import z from "zod";

export const roomSchema = z.object({
  id: z.number(),
  tenPhong: z.string({ message: "Vui lòng nhập tên phòng" }),
  khach: z.coerce.number({ message: "Vui lòng nhập số lượng khách" }),
  phongNgu: z.coerce.number({ message: "Vui lòng nhập số phòng ngủ" }),
  giuong: z.coerce.number({ message: "Vui lòng nhập số giường" }),
  phongTam: z.coerce.number({ message: "Vui lòng nhập số phòng tắm" }),
  moTa: z.string({ message: "Vui lòng nhập mô tả" }),
  giaTien: z.coerce.number({ message: "Vui lòng nhập giá tiền" }),
  mayGiat: z.boolean().optional(),
  banLa: z.boolean().optional(),
  tivi: z.boolean().optional(),
  dieuHoa: z.boolean().optional(),
  wifi: z.boolean().optional(),
  bep: z.boolean().optional(),
  doXe: z.boolean().optional(),
  hoBoi: z.boolean().optional(),
  banUi: z.boolean().optional(),
  maViTri: z.number({ message: "Vui lòng chọn vị trí" }),
  hinhAnh: z
    .any()
    .transform((value) => {
      return value as FileList;
    })
    .optional(),
});

export type roomSchemaType = z.infer<typeof roomSchema>;
