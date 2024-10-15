export type viTriSearchAPIResponse = {
  pageIndex: number;
  pageSize: number;
  totalRow: number;
  keywords: string;
  data: viTriResponse[];
};

export type viTriResponse = {
  id: number;
  tenViTri: string;
  tinhThanh: string;
  quocGia: string;
  hinhAnh: string;
};
