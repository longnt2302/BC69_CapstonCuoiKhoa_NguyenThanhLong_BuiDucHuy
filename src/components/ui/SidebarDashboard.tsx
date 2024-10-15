import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SidebarDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashbard-menu-wrap">
      <div className="dashbard-menu-close">
        <i className="fal fa-times"></i>
      </div>
      <div className="dashbard-menu-container">
        <div className="user-profile-menu">
          <h3>DASHBOARD</h3>
          <ul className="no-list-style">
            <li>
              <NavLink to="/dashboard/users">
                <i className="fal fa-th-list"></i> Quản lý người dùng
              </NavLink>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/dashboard/listing");
                }}>
                <i className="fal fa-calendar-check"></i> Quản lý thông tin vị
                trí
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/dashboard/rooms");
                }}>
                <i className="fal fa-comments-alt"></i>Quản lý thông tin phòng
              </a>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <i className="fal fa-file-plus"></i> Quản lý đặt phòng
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashbard-menu-footer">
        &#169; Homeradar 2022 . All rights reserved.
      </div>
    </div>
  );
};
