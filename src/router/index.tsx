import { useRoutes } from "react-router-dom";
import { DashboardHome, DashboardListing, Home, ListRoom, SingleRoom } from "../pages";
import { DashboardLayout, MainLayout } from "../components/layouts";
import { PATH } from "../constants";

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
          path: "/:cityName/:roomId",
          element: <SingleRoom />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: PATH.dashboard,
          element: <DashboardHome />,
        },
        {
          path: `${PATH.dashboard}/${PATH.listing}`,
          element: <DashboardListing />,
        },
      ],
    },
  ]);
