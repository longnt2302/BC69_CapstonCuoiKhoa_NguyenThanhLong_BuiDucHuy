import { useParams } from "react-router-dom";
import { MainHead } from "../components/templates/listRoom";
import { Breadcrumb } from "../components/ui";
import { ListItem } from "../components/templates/parts";

export const ListRoom = () => {
  const { cityName } = useParams<string>();
  return (
    <>
      <MainHead />

      <Breadcrumb currentPage={cityName} />

      <div className="container">
        <div className="clearfix"></div>
        <div className="flex flex-row">
          <ListItem tenViTri={cityName} />
        </div>
      </div>
    </>
  );
};
