import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const DashboardHeader = () => {
  const { user } = useSelector(
    (state: RootState) => state.quanLyNguoiDungReducer
  );
  return (
    <div className="dashbard-menu-header">
      <div className="dashbard-menu-avatar fl-wrap">
        <img src={user?.avatar} alt="..." />
        <h4>
          Welcome, <span>{user.name}</span>
        </h4>
      </div>
      <a
        href="#logout"
        className="log-out-btn   tolt"
        data-microtip-position="bottom"
        data-tooltip="Log Out"
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("USER");
          location.href = "/";
        }}
      >
        <i className="far fa-power-off"></i>
      </a>
    </div>
  );
};
