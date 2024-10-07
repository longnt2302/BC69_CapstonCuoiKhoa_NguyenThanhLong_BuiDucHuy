import { useRoutes } from "react-router-dom";
import { Home } from "../pages";
import { MainLayout } from "../components/layouts";
import { ListRoom } from "../pages/ListRoom";

export const routers = () =>
  useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/:cityName",
          element: <ListRoom />,
        },
      ],
    },
  ]);
