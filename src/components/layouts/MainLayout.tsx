import { Outlet } from "react-router-dom";
import {
  Footer,
  Header,
  Loader,
  MapModal,
  RegisterModal,
  SecondaryNav,
  Subscribe,
} from "../ui";

export const MainLayout = () => {
  return (
    <>
      {/* <Loader /> */}
      <div id="main">
        <Header />
        <div id="wrapper">
          <div className="content">
            <Outlet />
          </div>
          <Subscribe />
          <Footer />
        </div>
        <RegisterModal />
        <SecondaryNav />
        <MapModal />
      </div>
    </>
  );
};
