import { createSlice } from "@reduxjs/toolkit";
import { DataTypeLogin } from "../../@types";
import { storage } from "../../constants/storage";

type initialState = {
  user: DataTypeLogin | null;
};

const initialState = {
  user: storage("USER"),
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.user = payload;
      localStorage.setItem("USER", JSON.stringify(payload));
    },
  },
});

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
