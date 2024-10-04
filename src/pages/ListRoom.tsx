import { List, MainHead } from "../components/templates/listRoom";
import { Breadcrumb } from "../components/ui";

export const ListRoom = () => {
  return (
    <>
      <MainHead />

      <Breadcrumb currentPage="Listings Rooms" />

      <div className="container">
        <List />
      </div>
    </>
  );
};
