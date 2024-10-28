import { LastestProperties, MainVisual } from "../components/templates/home";
import { Breadcrumb } from "../components/ui";

export const Home = () => {
  return (
    <>
      <MainVisual />

      <Breadcrumb currentPage="Giới thiệu" />

      <LastestProperties />
    </>
  );
};
