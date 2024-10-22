import { Avatar, Popover } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { dataUser } from "../../utils";

export const Header = () => {
  const currentLoging = dataUser();

  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="logo-holder">
        <NavLink to="/">
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

      <div className="add-list_wrap">
        <NavLink to="/dashboard" className="add-list color-bg">
          <i className="fal fa-plus"></i> <span>Quản trị</span>
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
                    navigate("/");
                  }}
                >
                  <span className="inline-block me-3">Đăng xuất</span>
                  <LogoutOutlined className="text-red-400" />
                </NavLink>
              </div>
            }
          >
            <Avatar size={40} icon={<UserOutlined />} />
          </Popover>
        </div>
      ) : (
        <div className="show-reg-form">
          <div className="modal-open">
            <i className="fas fa-user"></i>
            <span>Đăng nhập</span>
          </div>
        </div>
      )}

      <div className="nav-holder main-menu">
        <nav>
          <ul className="no-list-style">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
