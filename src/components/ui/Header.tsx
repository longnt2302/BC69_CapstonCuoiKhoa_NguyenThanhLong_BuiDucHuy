import { Avatar, Popover } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
// import { quanLyNguoiDungSelector } from "../../store/quanLyNguoiDung";
import { NavLink } from "react-router-dom";
import { dataUser } from "../../utils";

export const Header = () => {
  // const { user } = quanLyNguoiDungSelector();

  const currentLoging = dataUser();

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
        <NavLink to="/dashboard" className="add-list color-bg">
          <i className="fal fa-plus"></i> <span>Admin</span>
        </NavLink>
      </div>

      {currentLoging ? (
        <div className="h-full inline-flex items-center float-right md:px-5 px-2 md:border-l border-solid border-opacity-[0.1] border-white">
          <Popover
            placement="bottom"
            content={
              <div className="px-3">
                <NavLink
                  to="#"
                  className="flex text-[13px] cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("USER");
                    location.href = "/";
                  }}>
                  <span className="inline-block me-3">LogOut</span>
                  <LogoutOutlined className="text-red-400" />
                </NavLink>
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
              <NavLink to="#">
                Listings <i className="fa fa-caret-down"></i>
              </NavLink>

              <ul>
                <li>
                  <NavLink to="listing6.html">Without Map 2</NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    Single <i className="fa fa-caret-down"></i>
                  </NavLink>

                  <ul>
                    <li>
                      <NavLink to="listing-single.html">Style 1</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="blog.html">News</NavLink>
            </li>
            <li>
              <NavLink to="#">
                Pages <i className="fa fa-caret-down"></i>
              </NavLink>
              <ul>
                <li>
                  <NavLink to="contacts.html">Contacts</NavLink>
                </li>
                <li>
                  <NavLink to="blog-single.html">Blog Single</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
