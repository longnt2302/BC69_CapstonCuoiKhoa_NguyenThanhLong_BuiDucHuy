import { useRoutes } from "react-router-dom";
import { Home, ListRoom, SingleRoom } from "../pages";
import { MainLayout } from "../components/layouts";

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
        {
          path: "/:cityName/:roomName",
          element: <SingleRoom />,
        },
      ],
    },
  ]);
