import { NavLink } from "react-router-dom";

export const SidebarDashboard = () => {
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
              <NavLink to="/dashboard/listing">
                <i className="fal fa-th-list"></i> Danh sách thông tin vị trí
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addvitri">
                <i className="fal fa-file-plus"></i>Thêm vị trí
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/rooms">
                <i className="fal fa-th-list"></i> Danh sách thông tin phòng
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addrooms">
                <i className="fal fa-file-plus"></i>Thêm mới phòng
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/bookings">
                <i className="fal fa-file-plus"></i> Quản lý đặt phòng
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashbard-menu-footer">&#169; Homeradar 2022 . All rights reserved.</div>
    </div>
  );
};
