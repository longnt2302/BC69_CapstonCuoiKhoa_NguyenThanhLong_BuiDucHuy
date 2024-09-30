import React from "react";
import {
  Agents,
  Explore,
  LastestProperties,
  MainVisual,
  Meet,
  OurProperties,
  Testimonial,
} from "../components/templates/home";
import { Breadcrumb } from "../components/ui";

export const Home = () => {
  return (
    <>
      <MainVisual />

      <Breadcrumb currentPage="Introducing" />

      <LastestProperties />

      <OurProperties />

      <Explore />

      <Meet />

      <Agents />

      <Testimonial />
    </>
  );
};
