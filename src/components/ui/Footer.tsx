export const Footer = () => {
  return (
    <>
      <footer className="main-footer fl-wrap">
        <div className="footer-inner fl-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-widget fl-wrap">
                  <div className="footer-widget-logo fl-wrap">
                    <img src="/assets/images/logo.png" alt="..." />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  </p>
                  <div className="fw_hours fl-wrap">
                    <span>
                      Monday - Friday:<strong> 8am - 6pm</strong>
                    </span>
                    <span>
                      Saturday - Sunday:<strong> 9am - 3pm</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-widget fl-wrap">
                  <div className="footer-widget-title fl-wrap">
                    <h4>Helpful links</h4>
                  </div>
                  <ul className="footer-list fl-wrap">
                    <li>
                      <a href="about.html">About Our Company</a>
                    </li>
                    <li>
                      <a href="blog.html">Our last News</a>
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
              </div>

              <div className="col-md-3">
                <div className="footer-widget fl-wrap">
                  <div className="footer-widget-title fl-wrap">
                    <h4>Contacts Info</h4>
                  </div>
                  <ul className="footer-contacts fl-wrap">
                    <li>
                      <span>
                        <i className="fal fa-envelope"></i> Mail :
                      </span>
                      <a href="#" target="_blank">
                        yourmail@domain.com
                      </a>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <i className="fal fa-map-marker"></i> Adress :
                      </span>
                      <a href="#" target="_blank">
                        USA 27TH Brooklyn NY
                      </a>
                    </li>
                    <li>
                      <span>
                        <i className="fal fa-phone"></i> Phone :
                      </span>
                      <a href="#">+7(111)123456789</a>
                    </li>
                  </ul>
                  <div className="footer-social fl-wrap">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-vk"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-widget fl-wrap">
                  <div className="footer-widget-title fl-wrap">
                    <h4>Download our API</h4>
                  </div>
                  <p>
                    Start working with Homeradar that can provide everything you
                    need{" "}
                  </p>
                  <div className="api-links fl-wrap">
                    <a href="#" className="api-btn color-bg">
                      <i className="fab fa-apple"></i> App Store
                    </a>
                    <a href="#" className="api-btn color-bg">
                      <i className="fab fa-google-play"></i> Play Market
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-footer gray-bg fl-wrap">
          <div className="container">
            <div className="copyright">
              {" "}
              &#169; Homeradar 2022 . All rights reserved.
            </div>
            <div className="subfooter-nav">
              <ul className="no-list-style">
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <a className="to-top color-bg">
        <i className="fas fa-caret-up"></i>
      </a>
    </>
  );
};
