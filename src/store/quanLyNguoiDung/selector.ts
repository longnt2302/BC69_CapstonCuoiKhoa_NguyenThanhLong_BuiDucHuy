import { useSelector } from "react-redux";
import { RootState } from "..";

export const quanLyNguoiDungSelector = () =>
  useSelector((state: RootState) => state.quanLyNguoiDungReducer);
