import { configureStore } from "@reduxjs/toolkit";
import { viTriReducer } from "./viTri";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";

export const store = configureStore({
  reducer: {
    viTriReducer,
    quanLyNguoiDungReducer,
  },
});

type appDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => appDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)["getState"]>;
