import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/auth";
import { DataTypeRegister } from "../../@types";

export const useRegister = () => {
  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: async (payload: DataTypeRegister) =>
      await authServices.register(payload),
  });
  return mutation;
};
