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
                <h4>newsletter</h4>
                <h3>Sign up for newsletter and get latest news and update</h3>
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
                        placeholder="Enter Your Email"
                        spellCheck="false"
                        type="text"
                      />
                      <button
                        type="submit"
                        id="subscribe-button"
                        className="subscribe-button color-bg"
                      >
                        {" "}
                        Subscribe
                      </button>
                      <label
                        htmlFor="subscribe-email"
                        className="subscribe-message"
                      ></label>
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
