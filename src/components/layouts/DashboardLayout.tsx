import { Outlet, useNavigate } from "react-router-dom";
import { FooterDashboard, Header, SidebarDashboard } from "../ui";
import { DashboardHeader } from "../templates/Dashboard";
import { dataUser } from "../../utils";

export const DashboardLayout = () => {
  const currentLoging = dataUser();
  if (!currentLoging) {
    alert("Vui lòng đăng nhập tài khoản ADMIN");
    location.href = "/";
    return;
  } else {
    const { user } = currentLoging;
    if (user.role !== "ADMIN") {
      alert("Bạn không có quyền truy cập");
      location.href = "/";
      return;
    }
  }
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
                  <Outlet />
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
