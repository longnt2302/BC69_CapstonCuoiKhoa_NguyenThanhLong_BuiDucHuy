import { dataUser } from "../../../utils";

export const DashboardHeader = () => {
  const currentLoging = dataUser();
  const { user } = currentLoging;
  return (
    <div className="dashbard-menu-header">
      <div className="dashbard-menu-avatar fl-wrap">
        <img src={user.hinhAnh} alt="..." />
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
