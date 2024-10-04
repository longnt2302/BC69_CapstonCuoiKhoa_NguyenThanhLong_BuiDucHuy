import { viTriAPIResponse } from "../../../@types";
import { ListItem } from "../parts";

export const List = (props: viTriAPIResponse) => {
  const { data } = props;
  return <ListItem tenViTri={data?.tenViTri} />;
};
