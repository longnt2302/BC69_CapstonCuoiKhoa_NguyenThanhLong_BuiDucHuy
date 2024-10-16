export const Subscribe = () => {
  return (
    <div className="subscribe-wrap fl-wrap">
      <div className="container">
        <div className="subscribe-container fl-wrap color-bg">
          <div className="pwh_bg"></div>
          <div className="mrb_dec mrb_dec3"></div>
          <div className="row">
            <div className="col-md-6">
              <div className="subscribe-header">
                <h4>Tin</h4>
                <h3>
                  Đăng ký nhận bản tin và nhận tin tức và cập nhật mới nhất
                </h3>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="footer-widget fl-wrap">
                <div className="subscribe-widget fl-wrap">
                  <div className="subcribe-form">
                    <form id="subscribe">
                      <input
                        className="enteremail fl-wrap"
                        name="email"
                        id="subscribe-email"
                        placeholder="Nhập Email Của Bạn"
                        spellCheck="false"
                        type="text"
                      />
                      <button
                        type="submit"
                        id="subscribe-button"
                        className="subscribe-button color-bg">
                        {" "}
                        Đăng ký
                      </button>
                      <label
                        htmlFor="subscribe-email"
                        className="subscribe-message"></label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
