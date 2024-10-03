import { useSelector } from "react-redux";
import { RootState } from "..";

export const useViTriSelector = () =>
  useSelector((state: RootState) => state.viTriReducer);
