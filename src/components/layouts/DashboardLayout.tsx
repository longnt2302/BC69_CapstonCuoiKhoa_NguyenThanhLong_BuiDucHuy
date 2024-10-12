import { Outlet } from "react-router-dom";
import { FooterDashboard, Header, SidebarDashboard } from "../ui";
import { DashboardHeader } from "../templates/Dashboard";

export const DashboardLayout = () => {
  const dataUser = localStorage.getItem("USER")
    ? JSON.parse(localStorage.getItem("USER"))
    : "";
  if (!dataUser) location.href = "/";
  return (
    <>
      <div id="main">
        <Header />
        <div id="wrapper">
          <div className="dashbard-menu-overlay"></div>
          <SidebarDashboard />
          <div className="dashboard-content">
            <div className="dashboard-menu-btn color-bg">
              <span>
                <i className="fas fa-bars"></i>
              </span>
              Dasboard Menu
            </div>
            <div className="container dasboard-container">
              <div className="dashboard-title fl-wrap">
                <div className="dashboard-title-item">
                  <span>Dashboard</span>
                </div>
                <DashboardHeader />
              </div>
              <div className="dasboard-wrapper fl-wrap no-pag">
                <div className="dashboard-stats-container fl-wrap">
                  <div className="row">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
            <FooterDashboard />
          </div>
          <div className="dashbard-bg gray-bg"></div>
        </div>
      </div>
    </>
  );
};
