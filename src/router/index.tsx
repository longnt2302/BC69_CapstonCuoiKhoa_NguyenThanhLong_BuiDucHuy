import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import { Home, Login, ListRoom } from "../pages";
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
      ],
    },
    {
      path: PATH.login,
      element: <Login />,
    },
  ]);
