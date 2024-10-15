import { useMutation } from "@tanstack/react-query";
import { usersServices } from "../../services";
import { userEditType } from "../../@types";

type EditUserArgs = {
  id: number;
  payload: userEditType;
};
export const useUserEdit = () => {
  const mutation = useMutation({
    mutationKey: ["userEdit"],
    mutationFn: async ({ id, payload }: EditUserArgs) =>
      await usersServices.editUser(id, payload),
  });
  return mutation;
};
