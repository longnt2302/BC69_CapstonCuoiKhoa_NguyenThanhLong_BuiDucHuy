import { viTriAPIResponse } from "../../../@types";
import { ListItem } from "../parts";

export const List = (props: viTriAPIResponse) => {
  const { tenViTri } = props;
  return <ListItem tenViTri={tenViTri} />;
};
