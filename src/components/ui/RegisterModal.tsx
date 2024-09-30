export const RegisterModal = () => {
  return (
    <div className="main-register-wrap modal">
      <div className="reg-overlay"></div>
      <div className="main-register-holder tabs-act">
        <div className="main-register-wrapper modal_main fl-wrap">
          <div className="main-register-header color-bg">
            <div className="main-register-logo fl-wrap">
              <img src="./assets/images/white-logo.png" alt="..." />
            </div>
            <div className="main-register-bg">
              <div className="mrb_pin"></div>
              <div className="mrb_pin mrb_pin2"></div>
            </div>
            <div className="mrb_dec"></div>
            <div className="mrb_dec mrb_dec2"></div>
          </div>
          <div className="main-register">
            <div className="close-reg">
              <i className="fal fa-times"></i>
            </div>
            <ul className="tabs-menu fl-wrap no-list-style">
              <li className="current">
                <a href="#tab-1">
                  <i className="fal fa-sign-in-alt"></i> Login
                </a>
              </li>
              <li>
                <a href="#tab-2">
                  <i className="fal fa-user-plus"></i> Register
                </a>
              </li>
            </ul>

            <div className="tabs-container">
              <div className="tab">
                <div id="tab-1" className="tab-content first-tab">
                  <div className="custom-form">
                    <form method="post" name="registerform">
                      <label>
                        Username or Email Address *{" "}
                        <span className="dec-icon">
                          <i className="fal fa-user"></i>
                        </span>
                      </label>
                      <input name="email" type="text" />
                      <div className="pass-input-wrap fl-wrap">
                        <label>
                          Password *{" "}
                          <span className="dec-icon">
                            <i className="fal fa-key"></i>
                          </span>
                        </label>
                        <input name="password" type="password" autoComplete="off" />
                        <span className="eye">
                          <i className="fal fa-eye"></i>{" "}
                        </span>
                      </div>
                      <div className="lost_password">
                        <a href="#">Lost Your Password?</a>
                      </div>
                      <div className="filter-tags">
                        <input id="check-a3" type="checkbox" name="check" />
                        <label htmlFor="check-a3">Remember me</label>
                      </div>
                      <div className="clearfix"></div>
                      <button type="submit" className="log_btn color-bg">
                        {" "}
                        LogIn{" "}
                      </button>
                    </form>
                  </div>
                </div>

                <div className="tab">
                  <div id="tab-2" className="tab-content">
                    <div className="custom-form">
                      <form method="post" name="registerform" className="main-register-form" id="main-register-form2">
                        <label>
                          Full Name *{" "}
                          <span className="dec-icon">
                            <i className="fal fa-user"></i>
                          </span>
                        </label>
                        <input name="name" type="text" />
                        <label>
                          Email Address *{" "}
                          <span className="dec-icon">
                            <i className="fal fa-envelope"></i>
                          </span>
                        </label>
                        <input name="email" type="text" />
                        <div className="pass-input-wrap fl-wrap">
                          <label>
                            Password *{" "}
                            <span className="dec-icon">
                              <i className="fal fa-key"></i>
                            </span>
                          </label>
                          <input name="password" type="password" autoComplete="off" />
                          <span className="eye">
                            <i className="fal fa-eye"></i>{" "}
                          </span>
                        </div>
                        <div className="filter-tags ft-list">
                          <input id="check-a2" type="checkbox" name="check" />
                          <label htmlFor="check-a2">
                            I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="clearfix"></div>
                        <button type="submit" className="log_btn color-bg">
                          {" "}
                          Register{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="log-separator fl-wrap">
                <span>or</span>
              </div>
              <div className="soc-log fl-wrap">
                <p>For faster login or register use your social account.</p>
                <a href="#" className="facebook-log">
                  {" "}
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
