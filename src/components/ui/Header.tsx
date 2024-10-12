import { Avatar, Popover } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { quanLyNguoiDungSelector } from "../../store/quanLyNguoiDung";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { user } = quanLyNguoiDungSelector();

  return (
    <header className="main-header">
      <div className="logo-holder">
        <NavLink to={"/"}>
          <img src="/assets/images/logo.png" alt="..." />
        </NavLink>
      </div>

      <div className="nav-button-wrap color-bg nvminit">
        <div className="nav-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="header-search-button">
        <i className="fal fa-search"></i>
        <span>Search...</span>
      </div>

      <div className="add-list_wrap">
        <a href="dashboard-add-listing.html" className="add-list color-bg">
          <i className="fal fa-plus"></i> <span>Admin</span>
        </a>
      </div>

      {user ? (
        <div className="h-full inline-flex items-center float-right md:px-5 px-2 md:border-l border-solid border-opacity-[0.1] border-white">
          <Popover
            placement="bottom"
            content={
              <div className="px-3">
                <a
                  href="#"
                  className="flex text-[13px] cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("USER");
                    location.href = "/";
                  }}>
                  <span className="inline-block me-3">LogOut</span>
                  <LogoutOutlined className="text-red-400" />
                </a>
              </div>
            }>
            <Avatar size={40} icon={<UserOutlined />} />
          </Popover>
        </div>
      ) : (
        <div className="show-reg-form">
          <div className="modal-open">
            <i className="fas fa-user"></i>
            <span>Sign In</span>
          </div>
        </div>
      )}

      <div className="nav-holder main-menu">
        <nav>
          <ul className="no-list-style">
            <li>
              <a href="#" className="act-link">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Listings <i className="fa fa-caret-down"></i>
              </a>

              <ul>
                <li>
                  <a href="listing6.html">Without Map 2</a>
                </li>
                <li>
                  <a href="#">
                    Single <i className="fa fa-caret-down"></i>
                  </a>

                  <ul>
                    <li>
                      <a href="listing-single.html">Style 1</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">News</a>
            </li>
            <li>
              <a href="#">
                Pages <i className="fa fa-caret-down"></i>
              </a>
              <ul>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
