export const FooterDashboard = () => {
  return (
    <div className="dashboard-footer">
      <div className="dashboard-footer-links fl-wrap">
        <span>Helpfull Links:</span>
        <ul>
          <li>
            <a href="about.html">Về chúng tối </a>
          </li>
          <li>
            <a href="blog.html">Tin tức</a>
          </li>
          <li>
            <a href="pricing.html">Bảng giá</a>
          </li>
          <li>
            <a href="contacts.html">Liên hệ</a>
          </li>
          <li>
            <a href="help.html">Trung tâm hỗ trợ</a>
          </li>
        </ul>
      </div>
      <a href="#main" className="dashbord-totop  custom-scroll-link">
        <i className="fas fa-caret-up"></i>
      </a>
    </div>
  );
};
