export interface BookingType {
  maPhong?: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: string;
  maNguoiDung?: number;
}
export interface BookingResponse {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
export interface BookingRegister {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
