import { Outlet } from "react-router-dom";
import { FooterDashboard, Header, Loader, SidebarDashboard } from "../ui";

export const DashboardLayout = () => {
  return (
    <>
      <Loader />
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
                <div className="dashbard-menu-header">
                  <div className="dashbard-menu-avatar fl-wrap">
                    <img src="/assets/images/avatar/5.jpg" alt="..." />
                    <h4>
                      Welcome, <span>Alica Noory</span>
                    </h4>
                  </div>
                  <a
                    href="index.html"
                    className="log-out-btn   tolt"
                    data-microtip-position="bottom"
                    data-tooltip="Log Out"
                  >
                    <i className="far fa-power-off"></i>
                  </a>
                </div>
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
