import { configureStore } from "@reduxjs/toolkit";
import { viTriReducer } from "./viTri";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    viTriReducer,
  },
});

type appDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => appDispatch = useDispatch;

export type RootState = ReturnType<(typeof store)["getState"]>;
