import { useQuery } from "@tanstack/react-query";
import { objectToQueryString } from "../../utils";
import { viTriServices } from "../../services";

export const useAddViTri = (
  maViTri: number | undefined,
  dataForm: any = ""
) => {
  const query = useQuery({
    queryKey: ["AddViTri"],
    queryFn: () => {
      const queryString = objectToQueryString({
        maViTri,
      });
      return viTriServices.uploadImageViTri(queryString, dataForm);
    },
  });
  return {
    ...query,
    data: query?.data?.data?.content,
  };
};
