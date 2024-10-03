import { createSlice } from "@reduxjs/toolkit";
import { viTriAPIResponse } from "../../@types";

type initialState = {
  dataViTri: viTriAPIResponse[];
};

const initialState = {
  dataViTri: [{}],
};

const viTriSlice = createSlice({
  name: "viTri",
  initialState,
  reducers: {
    getDataViTri: (state, { payload }) => {
      state.dataViTri.push(payload);
    },
  },
});

export const { reducer: viTriReducer, actions: viTriActions } = viTriSlice;
