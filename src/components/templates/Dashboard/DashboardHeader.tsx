export const DashboardHeader = () => {
  return (
    <div className="dashbard-menu-header">
      <div className="dashbard-menu-avatar fl-wrap">
        <img src="/assets/images/avatar/5.jpg" alt="..." />
        <h4>
          Welcome, <span>Alica Noory</span>
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
