import { useRoutes } from "react-router-dom";
import { DashboardHome, DashboardListing, DashboardRooms, Home, ListRoom, SingleRoom } from "../pages";
import { DashboardLayout, MainLayout } from "../components/layouts";
import { PATH } from "../constants";
import { FormViTri } from "../components/templates/Dashboard";
import { DashboardUser } from "../pages/DashboardUser";

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
        {
          path: `${PATH.dashboard}/${PATH.users}`,
          element: <DashboardUser />,
        },
        {
          path: `${PATH.dashboard}/${PATH.rooms}`,
          element: <DashboardRooms />,
        },
        {
          path: `${PATH.dashboard}/${PATH.addvitri}`,
          element: <FormViTri />,
        },
      ],
    },
  ]);
