import { useMutation } from "@tanstack/react-query";
import { authServices } from "../../services/auth";
import { DataTypeLogin } from "../../@types";

export const useLogin = () => {
  const mutationLG = useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: DataTypeLogin) => authServices.login(payload),
  });
  return mutationLG;
};
