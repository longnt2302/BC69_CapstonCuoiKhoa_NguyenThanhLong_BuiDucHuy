export const Page404 = () => {
  return (
    <section className="parallax-section color-bg" data-scrollax-parent="true">
      <div className="container">
        <div className="error-wrap">
          <div className="hero-text-big">
            <h6>404</h6>
          </div>
          <p>
            We're sorry, but the Page you were looking for, couldn't be found.
          </p>
          <div className="clearfix"></div>
          <form action="#">
            <input
              name="se"
              id="se"
              type="text"
              className="search"
              placeholder="Search.."
            />
            <button className="search-submit" id="submit_btn">
              <i className="fal fa-search"></i>{" "}
            </button>
          </form>
          <div className="clearfix"></div>
          <p>Or</p>
          <a href="index.html" className="btn color-bg">
            Back to Home Page
          </a>
        </div>
      </div>
      <div className="pwh_bg fw-pwh">
        <div className="mrb_pin vis_mr mrb_pin3 "></div>
        <div className="mrb_pin vis_mr mrb_pin4 "></div>
      </div>
    </section>
  );
};
