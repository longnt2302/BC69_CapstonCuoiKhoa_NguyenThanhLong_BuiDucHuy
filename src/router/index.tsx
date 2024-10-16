import { useRoutes } from "react-router-dom";
import {
  About,
  Contact,
  DashboardBooking,
  DashboardHome,
  DashboardListing,
  DashboardRooms,
  DashboardUser,
  Home,
  ListRoom,
  Pricing,
  SingleRoom,
} from "../pages";
import { DashboardLayout, MainLayout } from "../components/layouts";
import { PATH } from "../constants";
import { EditRooms, EditViTri, FormRooms, FormViTri } from "../components/templates/Dashboard";

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
        {
          path: PATH.about,
          element: <About />,
        },
        {
          path: PATH.pricing,
          element: <Pricing />,
        },
        {
          path: PATH.contact,
          element: <Contact />,
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
          path: `${PATH.dashboard}/editvitri/:id`,
          element: <EditViTri />,
        },
        {
          path: `${PATH.dashboard}/editroom/:id`,
          element: <EditRooms />,
        },
        {
          path: `${PATH.dashboard}/${PATH.addrooms}`,
          element: <FormRooms />,
        },
      ],
    },
  ]);
