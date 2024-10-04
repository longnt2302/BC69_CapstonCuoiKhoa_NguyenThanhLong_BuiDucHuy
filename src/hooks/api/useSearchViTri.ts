import { useQuery } from "@tanstack/react-query";
import { objectToQueryString } from "../../utils";
import { viTriServices } from "../../services";

export const useSearchViTri = (keyword?: string) => {
  const query = useQuery({
    queryKey: ["ViTriDetail", keyword],
    queryFn: () => {
      const queryString = objectToQueryString({
        keyword: keyword,
        pageIndex: 1,
        pageSize: 1,
      });
      return viTriServices.searchViTri(queryString);
    },
  });
  return {
    ...query,
    data: query?.data?.data?.content,
  };
};
