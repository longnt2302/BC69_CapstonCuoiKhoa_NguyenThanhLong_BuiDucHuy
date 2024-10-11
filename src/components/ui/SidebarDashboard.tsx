import { NavLink } from "react-router-dom";

export const SidebarDashboard = () => {
  return (
    <div className="dashbard-menu-wrap">
      <div className="dashbard-menu-close">
        <i className="fal fa-times"></i>
      </div>
      <div className="dashbard-menu-container">
        <div className="user-profile-menu">
          <h3>Main</h3>
          <ul className="no-list-style">
            <li>
              <NavLink to="/dashboard" className="user-profile-act">
                <i className="fal fa-chart-line"></i>Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/users">
                <i className="fal fa-user-edit"></i> Users
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-messages.html">
                <i className="fal fa-envelope"></i> Messages <span>3</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-agents.html">
                <i className="fal fa-users"></i> Agents List
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="submenu-link">
                <i className="fal fa-plus"></i>Submenu
              </NavLink>
              <ul className="no-list-style">
                <li>
                  <NavLink to="#">
                    <i className="fal fa-th-list"></i> Submenu 2{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    {" "}
                    <i className="fal fa-calendar-check"></i> Submenu 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="fal fa-comments-alt"></i>Submenu 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="fal fa-file-plus"></i> Submenu 2
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="user-profile-menu">
          <h3>Listings</h3>
          <ul className="no-list-style">
            <li>
              <NavLink to="dashboard-listing-table.html">
                <i className="fal fa-th-list"></i> My listigs{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-bookings.html">
                {" "}
                <i className="fal fa-calendar-check"></i> Bookings{" "}
                <span>2</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-review.html">
                <i className="fal fa-comments-alt"></i> Reviews{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard-add-listing.html">
                <i className="fal fa-file-plus"></i> Add New
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashbard-menu-footer">
        {" "}
        &#169; Homeradar 2022 . All rights reserved.
      </div>
    </div>
  );
};
