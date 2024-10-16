import { Breadcrumb } from "../components/ui";

export const Pricing = () => {
  return (
    <>
      <section className="hidden-section single-par2  " data-scrollax-parent="true">
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div
            className="bg par-elem "
            data-bg="images/bg/4.jpg"
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
        </div>
        <div className="container">
          <div className="section-title center-align big-title">
            <h2>
              <span>Our Pricing Plans</span>
            </h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tincidunt arcu, sit amet fermentum sem.
            </h4>
          </div>
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
            <span>Scroll Down To Discover</span>
          </div>
        </div>
      </section>
      <Breadcrumb currentPage="Pricing Plans" />

      <section className="gray-bg small-padding ">
        <div className="container">
          <div className="pricing-switcher-header">Simple Pricing For Everyone Users:</div>
          <div className="pricing-switcher">
            <div className="fieldset color-bg">
              <input type="radio" name="duration-1" id="monthly-1" className="tariff-toggle" checked />
              <label htmlFor="monthly-1">Monthly Tariff</label>
              <input type="radio" name="duration-1" className="tariff-toggle" id="yearly-1" />
              <label htmlFor="yearly-1">Yearly Tariff</label>
              <span className="switch"></span>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>01.</span>Free
                  </h3>
                  <div className="price-num price-item fl-wrap">
                    <div className="price-num-item">
                      <span className="mouth-cont">
                        <span className="curen">$</span>0
                      </span>
                      <span className="year-cont">
                        <span className="curen">$</span>0
                      </span>
                    </div>
                    <div className="price-num-desc">
                      <span className="mouth-cont">Per Month</span>
                      <span className="year-cont">Per Year</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>One Listing</li>
                    <li className="not-included">90 Days Availability</li>
                    <li className="not-included">Non-Featured</li>
                    <li className="not-included">Limited Support</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Choose Free
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>02.</span>Basic
                  </h3>
                  <div className="price-num price-item fl-wrap">
                    <div className="price-num-item">
                      <span className="mouth-cont">
                        <span className="curen">$</span>49
                      </span>
                      <span className="year-cont">
                        <span className="curen">$</span>530
                      </span>
                    </div>
                    <div className="price-num-desc">
                      <span className="mouth-cont">Per Month</span>
                      <span className="year-cont">Per Year</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="recomm-price color-bg">Recommended</div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>20 Listings</li>
                    <li>190 Days Availability</li>
                    <li>Non-Featured</li>
                    <li className="not-included">24/7 Support</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Choose Basic
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>03.</span>Extended
                  </h3>
                  <div className="price-num price-item fl-wrap">
                    <div className="price-num-item">
                      <span className="mouth-cont">
                        <span className="curen">$</span>109
                      </span>
                      <span className="year-cont">
                        <span className="curen">$</span>1100
                      </span>
                    </div>
                    <div className="price-num-desc">
                      <span className="mouth-cont">Per Month</span>
                      <span className="year-cont">Per Year</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>Unlimited Listings</li>
                    <li>220 Days Availability</li>
                    <li>Non-Featured</li>
                    <li>Limited Support</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Choose Extended
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>04.</span>Premium
                  </h3>
                  <div className="price-num price-item fl-wrap">
                    <div className="price-num-item">
                      <span className="mouth-cont">
                        <span className="curen">$</span>149
                      </span>
                      <span className="year-cont">
                        <span className="curen">$</span>1430
                      </span>
                    </div>
                    <div className="price-num-desc">
                      <span className="mouth-cont">Per Month</span>
                      <span className="year-cont">Per Year</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>Unlimited Listings</li>
                    <li>Lifetime Availability</li>
                    <li>Featured In Search Results</li>
                    <li>24/7 Support</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Choose Premium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
