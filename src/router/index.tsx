import { useRoutes } from "react-router-dom";
import {
  DashboardBooking,
  DashboardHome,
  DashboardListing,
  DashboardRooms,
  DashboardUser,
  Home,
  ListRoom,
  SingleRoom,
} from "../pages";
import { DashboardLayout, MainLayout } from "../components/layouts";
import { PATH } from "../constants";
import { FormRooms, FormViTri } from "../components/templates/Dashboard";

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
          path: PATH.listing,
          element: <ListRoom />,
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
          path: `${PATH.dashboard}/${PATH.bookings}`,
          element: <DashboardBooking />,
        },
        {
          path: `${PATH.dashboard}/${PATH.rooms}`,
          element: <DashboardRooms />,
        },
        {
          path: `${PATH.dashboard}/${PATH.addvitri}`,
          element: <FormViTri />,
        },
        {
          path: `${PATH.dashboard}/editvitri/:maViTri`,
          element: <FormViTri />,
        },
        {
          path: `${PATH.dashboard}/${PATH.addrooms}`,
          element: <FormRooms />,
        },
      ],
    },
  ]);
