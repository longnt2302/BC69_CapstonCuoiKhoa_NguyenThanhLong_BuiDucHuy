export const About = () => {
  return (
    <>
      <section className="hidden-section single-par2  " data-scrollax-parent="true">
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div
            className="bg par-elem "
            data-bg="images/bg/11.jpg"
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
        </div>
        <div className="container">
          <div className="section-title center-align big-title">
            <h2>
              <span>About Us</span>
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

      <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
        <div className="container">
          <div className="breadcrumbs-list">
            <a href="#">Home</a> <span>About</span>
          </div>
          <div className="share-holder hid-share">
            <a href="#" className="share-btn showshare sfcs">
              {" "}
              <i className="fas fa-share-alt"></i> Share{" "}
            </a>
            <div className="share-container  isShare"></div>
          </div>
        </div>
      </div>

      <section className="gray-bg small-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-headset"></i>
                <h4>
                  24 Hours Support <span>01</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                  lobortis pulvinar.
                </p>
                <a href="#" className="serv-link">
                  Read more
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-users-cog"></i>
                <h4>
                  User Admin Panel <span>02</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                  lobortis pulvinar.
                </p>
                <a href="#" className="serv-link">
                  Read more
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-phone-laptop"></i>
                <h4>
                  Mobile Friendly <span>03</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                  lobortis pulvinar.
                </p>
                <a href="#" className="serv-link">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-md-5">
                <div className="about-title fl-wrap">
                  <h2>
                    Our Company <span>Story</span>
                  </h2>
                  <h4>Check video presentation to find out more about us .</h4>
                </div>
                <p>
                  Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac
                  maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum
                  elementum, est elit finibus tellus, ut tristique elit risus at metus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                  lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar
                  nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor
                  iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
                </p>
                <a href="#" className="btn small-btn float-btn color-bg">
                  Read More
                </a>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <div className="about-img fl-wrap">
                  <img src="/images/all/18.jpg" className="respimg" alt="..." />
                  <div className="about-img-hotifer color-bg">
                    <p>
                      Your website is fully responsive so visitors can view your content from their choice of device.
                    </p>
                    <h4>Mark Antony</h4>
                    <h5>Homeradar CEO</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="color-bg small-padding">
        <div className="container">
          <div className="main-facts fl-wrap">
            <div className="inline-facts-wrap">
              <div className="inline-facts">
                <div className="milestone-counter">
                  <div className="stats animaper">
                    <div className="num" data-content="0" data-num="578">
                      0
                    </div>
                  </div>
                </div>
                <h6>Agents and Agencys</h6>
              </div>
            </div>

            <div className="inline-facts-wrap">
              <div className="inline-facts">
                <div className="milestone-counter">
                  <div className="stats animaper">
                    <div className="num" data-content="0" data-num="12168">
                      0
                    </div>
                  </div>
                </div>
                <h6>Happy Customers Every Year</h6>
              </div>
            </div>

            <div className="inline-facts-wrap">
              <div className="inline-facts">
                <div className="milestone-counter">
                  <div className="stats animaper">
                    <div className="num" data-content="0" data-num="2172">
                      0
                    </div>
                  </div>
                </div>
                <h6>Won Awards</h6>
              </div>
            </div>

            <div className="inline-facts-wrap">
              <div className="inline-facts">
                <div className="milestone-counter">
                  <div className="stats animaper">
                    <div className="num" data-content="0" data-num="732">
                      0
                    </div>
                  </div>
                </div>
                <h6>New Listing Every Week</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-bg">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMax slice"
          >
            <defs>
              <linearGradient id="bg">
                <stop
                  offset="0%"
                  style={{
                    stopColor: "rgba(255, 255, 255, 0.6)",
                  }}
                ></stop>
                <stop offset="50%" style={{ stopColor: "rgba(255, 255, 255, 0.1" }}></stop>
                <stop offset="100%" style={{ stopColor: "rgba(255, 255, 255, 0.6" }}></stop>
              </linearGradient>
              <path
                id="wave"
                stroke="url(#bg)"
                fill="none"
                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                                        s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
              />
            </defs>
            <g>
              <use xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="12s"
                  calcMode="spline"
                  values="0 240;140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title st-center fl-wrap">
            <h4>The Crew</h4>
            <h2>Our Awesome team</h2>
          </div>

          <div className="clearfix"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="team-item fl-wrap">
                <div className="team-img fl-wrap">
                  <img src="/images/agency/agent/1.jpg" className="respimg" alt="..." />
                </div>
                <div className="team-content fl-wrap">
                  <h4>Alisa Gray</h4>
                  <h5>Business consultant</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="team-footer fl-wrap">
                  <ul className="team-social">
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
                  <a
                    href="mailto:yourmail@email.com"
                    className="tolt tf-btn"
                    data-microtip-position="top-right"
                    data-tooltip="Write Message"
                  >
                    <i className="fal fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item fl-wrap">
                <div className="team-img fl-wrap">
                  <img src="/images/agency/agent/4.jpg" className="respimg" alt="..." />
                </div>
                <div className="team-content fl-wrap">
                  <h4>Austin Evon</h4>
                  <h5>Developer / Designer</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="team-footer fl-wrap">
                  <ul className="team-social">
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
                  <a
                    href="mailto:yourmail@email.com"
                    className="tolt tf-btn"
                    data-microtip-position="top-right"
                    data-tooltip="Write Message"
                  >
                    <i className="fal fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-item fl-wrap">
                <div className="team-img fl-wrap">
                  <img src="/images/agency/agent/5.jpg" className="respimg" alt="..." />
                </div>
                <div className="team-content fl-wrap">
                  <h4>Taylor Roberts</h4>
                  <h5>Software Engineer</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <div className="team-footer fl-wrap">
                  <ul className="team-social">
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
                  <a
                    href="mailto:yourmail@email.com"
                    className="tolt tf-btn"
                    data-microtip-position="top-right"
                    data-tooltip="Write Message"
                  >
                    <i className="fal fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-section ps-bg video-section" data-scrollax-parent="true" id="sec2">
        <div className="bg-wrap">
          <div
            className="bg par-elem "
            data-bg="images/bg/5.jpg"
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
        </div>
        <div className="overlay"></div>

        <div className="container">
          <div className="video_section-title fl-wrap">
            <h2>Our Story Video</h2>
            <h4>
              Get ready to start your exciting journey. <br /> Our agency will lead you through the amazing digital
              world
            </h4>
          </div>
          <a href="https://vimeo.com/158059890" className="promo-link big_prom color-bg   image-popup">
            <i className="fas fa-play"></i>
          </a>
        </div>
      </section>

      <section className="gray-bg ">
        <div className="container">
          <div className="section-title st-center fl-wrap">
            <h4>Testimonilas</h4>
            <h2>What Our Clients Say</h2>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="testimonials-slider-wrap">
          <div className="testimonials-slider">
            <div className="slick-item">
              <div className="text-carousel-item fl-wrap">
                <div className="text-carousel-item-header fl-wrap">
                  <div className="popup-avatar">
                    <img src="/images/avatar/1.jpg" alt="..." />
                  </div>
                  <div className="review-owner fl-wrap">Jessie Wilcox</div>
                  <div className="listing-rating card-popup-rainingvis" data-starrating2="5">
                    {" "}
                  </div>
                </div>
                <div className="text-carousel-content fl-wrap">
                  <p>
                    {" "}
                    "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi
                    magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                    sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore luptatum."
                  </p>
                  <a href="#" className="testim-link color-bg">
                    Via Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="slick-item">
              <div className="text-carousel-item fl-wrap">
                <div className="text-carousel-item-header fl-wrap">
                  <div className="popup-avatar">
                    <img src="/images/avatar/2.jpg" alt="..." />
                  </div>
                  <div className="review-owner fl-wrap">Austin Harisson</div>
                  <div className="listing-rating card-popup-rainingvis" data-starrating2="4">
                    {" "}
                  </div>
                </div>
                <div className="text-carousel-content fl-wrap">
                  <p>
                    {" "}
                    "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te odio dignissim qui blandit praesent blandit praesent
                    luptatum zzril.Vulputate urna. Nulla tristique mi a massa convallis."
                  </p>
                  <a href="#" className="testim-link color-bg">
                    Via Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="slick-item">
              <div className="text-carousel-item fl-wrap">
                <div className="text-carousel-item-header fl-wrap">
                  <div className="popup-avatar">
                    <img src="/images/avatar/3.jpg" alt="..." />
                  </div>
                  <div className="review-owner fl-wrap">Garry Colonsi</div>
                  <div className="listing-rating card-popup-rainingvis" data-starrating2="4">
                    {" "}
                  </div>
                </div>
                <div className="text-carousel-content fl-wrap">
                  <p>
                    {" "}
                    "In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi
                    magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit,
                    sed diam nonu mmy nibh euismod tincidunt ut laoreet dolore luptatum."
                  </p>
                  <a href="#" className="testim-link color-bg">
                    Via Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="slick-item">
              <div className="text-carousel-item fl-wrap">
                <div className="text-carousel-item-header fl-wrap">
                  <div className="popup-avatar">
                    <img src="/images/avatar/4.jpg" alt="..." />
                  </div>
                  <div className="review-owner fl-wrap">Antony Moore</div>
                  <div className="listing-rating card-popup-rainingvis" data-starrating2="5">
                    {" "}
                  </div>
                </div>
                <div className="text-carousel-content fl-wrap">
                  <p>
                    {" "}
                    "Feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te odio dignissim qui blandit praesent blandit praesent
                    luptatum zzril.Vulputate urna. Nulla tristique mi a massa convallis."
                  </p>
                  <a href="#" className="testim-link color-bg">
                    Via Twitter
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
