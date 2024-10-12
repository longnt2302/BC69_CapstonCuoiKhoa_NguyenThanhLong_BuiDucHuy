import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../../@types";

const initialState: UserResponse = {
  user: {},
  token: "",
};

const quanLyNguoiDungSlice = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const { user, token } = payload;
      state.user = user;
      state.token = token;
      localStorage.setItem("USER", JSON.stringify(payload));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("USER");
    },
  },
});

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = quanLyNguoiDungSlice;
