import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import { Home, Login } from "../pages";
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
      ],
    },
    {
      path: PATH.login,
      element: <Login />,
    },
  ]);
