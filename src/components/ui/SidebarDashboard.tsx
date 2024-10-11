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
              <a href="dashboard.html" className="user-profile-act">
                <i className="fal fa-chart-line"></i>Dashboard
              </a>
            </li>
            <li>
              <a href="dashboard-myprofile.html">
                <i className="fal fa-user-edit"></i> Edit profile
              </a>
            </li>
            <li>
              <a href="dashboard-messages.html">
                <i className="fal fa-envelope"></i> Messages <span>3</span>
              </a>
            </li>
            <li>
              <a href="dashboard-agents.html">
                <i className="fal fa-users"></i> Agents List
              </a>
            </li>
            <li>
              <a href="#" className="submenu-link">
                <i className="fal fa-plus"></i>Submenu
              </a>
              <ul className="no-list-style">
                <li>
                  <a href="#">
                    <i className="fal fa-th-list"></i> Submenu 2{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fal fa-calendar-check"></i> Submenu 2
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-comments-alt"></i>Submenu 2
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-file-plus"></i> Submenu 2
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="user-profile-menu">
          <h3>Listings</h3>
          <ul className="no-list-style">
            <li>
              <a href="dashboard-listing-table.html">
                <i className="fal fa-th-list"></i> My listigs{" "}
              </a>
            </li>
            <li>
              <a href="dashboard-bookings.html">
                {" "}
                <i className="fal fa-calendar-check"></i> Bookings <span>2</span>
              </a>
            </li>
            <li>
              <a href="dashboard-review.html">
                <i className="fal fa-comments-alt"></i> Reviews{" "}
              </a>
            </li>
            <li>
              <a href="dashboard-add-listing.html">
                <i className="fal fa-file-plus"></i> Add New
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashbard-menu-footer"> &#169; Homeradar 2022 . All rights reserved.</div>
    </div>
  );
};
