export const FooterDashboard = () => {
  return (
    <div className="dashboard-footer">
      <div className="dashboard-footer-links fl-wrap">
        <span>Helpfull Links:</span>
        <ul>
          <li>
            <a href="about.html">About </a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="pricing.html">Pricing Plans</a>
          </li>
          <li>
            <a href="contacts.html">Contacts</a>
          </li>
          <li>
            <a href="help.html">Help Center</a>
          </li>
        </ul>
      </div>
      <a href="#main" className="dashbord-totop  custom-scroll-link">
        <i className="fas fa-caret-up"></i>
      </a>
    </div>
  );
};
