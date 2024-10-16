import { Avatar, Popover } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { dataUser } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../../services";

export const Header = () => {
  const { data: dataViTri, refetch } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      const resViTri = await viTriServices.getViTri();
      return resViTri;
    },
  });
  refetch();

  const currentLoging = dataUser();

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
                    location.href = "/";
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
              <NavLink to="/" className="act-link">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                Khu vực <i className="fa fa-caret-down"></i>
              </NavLink>

              <ul>
                {dataViTri?.data?.content?.map((viTri) => (
                  <li key={viTri?.id}>
                    <NavLink to={`/${viTri?.tenViTri}`}>{viTri?.tenViTri}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
