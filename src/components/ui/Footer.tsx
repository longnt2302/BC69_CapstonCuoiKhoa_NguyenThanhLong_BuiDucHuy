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
                    <h4>Liên kết</h4>
                  </div>
                  <ul className="footer-list fl-wrap">
                    <li>
                      <a href="about.html">Về chúng tôi</a>
                    </li>
                    <li>
                      <a href="blog.html">Tin tức mới nhất</a>
                    </li>
                    <li>
                      <a href="pricing.html">Giá bất động sản</a>
                    </li>
                    <li>
                      <a href="contacts.html">Liên hệ</a>
                    </li>
                    <li>
                      <a href="help.html">Trung tâm hỗ trợ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="footer-widget fl-wrap">
                  <div className="footer-widget-title fl-wrap">
                    <h4>Thông tin liên hệ</h4>
                  </div>
                  <ul className="footer-contacts fl-wrap">
                    <li>
                      <span>
                        <i className="fal fa-envelope"></i> Email :
                      </span>
                      <a href="#" target="_blank">
                        yourmail@domain.com
                      </a>
                    </li>
                    <li>
                      {" "}
                      <span>
                        <i className="fal fa-map-marker"></i> Địa chỉ :
                      </span>
                      <a href="#" target="_blank">
                        USA 27TH Brooklyn NY
                      </a>
                    </li>
                    <li>
                      <span>
                        <i className="fal fa-phone"></i> Số điện thoại :
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
                    <h4>Tải API của chúng tôi</h4>
                  </div>
                  <p>
                    Bắt đầu làm việc với Homeradar có thể cung cấp mọi thứ bạn
                    cần{" "}
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
              &#169; Homeradar 2022. Bảo lưu mọi quyền.
            </div>
            <div className="subfooter-nav">
              <ul className="no-list-style">
                <li>
                  <a href="#">Điều khoản sử dụng</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="#">Tin tức</a>
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
