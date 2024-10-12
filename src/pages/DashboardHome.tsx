export const DashboardHome = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="dashboard-stats fl-wrap">
          <i className="fal fa-map-marked"></i>
          <h4>Active Listings</h4>
          <div className="dashboard-stats-count">124</div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-stats fl-wrap">
          <i className="fal fa-chart-bar"></i>
          <h4>Listing Views</h4>
          <div className="dashboard-stats-count">
            1056
            <span>
              (<strong>+356</strong> this week)
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-stats fl-wrap">
          <i className="fal fa-comments-alt"></i>
          <h4>Your Reviews</h4>
          <div className="dashboard-stats-count">
            357
            <span>
              (<strong>+12</strong> this week)
            </span>
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="dashboard-stats fl-wrap">
          <i className="fal fa-heart"></i>
          <h4>Times Bookmarked</h4>
          <div className="dashboard-stats-count">
            2329
            <span>
              (<strong>+234</strong> this week)
            </span>
          </div>
        </div>
      </div>

      <div className="clearfix"></div>
      <div className="row mt-[30px]">
        <div className="col-md-8">
          <div className="notification success-notif  fl-wrap">
            <p>
              Your listing <a href="#">Family house in Brooklyn</a> has been
              approved!
            </p>
            <a className="notification-close" href="#">
              <i className="fal fa-times"></i>
            </a>
          </div>
          <div className="dashboard-widget-title fl-wrap">Your Statistic</div>
          <div className="dasboard-content fl-wrap">
            <div className="chart-wrap   fl-wrap">
              <div className="chart-header fl-wrap">
                <div className="listsearch-input-item">
                  <select
                    data-placeholder="Week"
                    className="chosen-select no-search-select">
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </div>
                <div id="myChartLegend"></div>
              </div>
              <canvas id="canvas-chart"></canvas>
            </div>
          </div>
          <div className="dashboard-widget-title fl-wrap">Last Activites</div>
          <div className="dashboard-list-box  fl-wrap">
            <div className="dashboard-list fl-wrap">
              <div className="dashboard-message">
                <span className="close-dashboard-item color-bg">
                  <i className="fal fa-times"></i>
                </span>
                <div className="main-dashboard-message-icon color-bg">
                  <i className="far fa-check"></i>
                </div>
                <div className="main-dashboard-message-text">
                  <p>
                    Your listing <a href="#">Urban Appartmes</a> has been
                    approved!{" "}
                  </p>
                </div>
                <div className="main-dashboard-message-time">
                  <i className="fal fa-calendar-week"></i> 28 may 2020
                </div>
              </div>
            </div>

            <div className="dashboard-list fl-wrap">
              <div className="dashboard-message">
                <span className="close-dashboard-item color-bg">
                  <i className="fal fa-times"></i>
                </span>
                <div className="main-dashboard-message-icon color-bg">
                  <i className="fal fa-comment-alt"></i>
                </div>
                <div className="main-dashboard-message-text">
                  <p>
                    {" "}
                    Someone left a review on <a href="#">Park Central</a>{" "}
                    listing!
                  </p>
                </div>
                <div className="main-dashboard-message-time">
                  <i className="fal fa-calendar-week"></i> 28 may 2020
                </div>
              </div>
            </div>

            <div className="dashboard-list fl-wrap">
              <div className="dashboard-message">
                <span className="close-dashboard-item color-bg">
                  <i className="fal fa-times"></i>
                </span>
                <div className="main-dashboard-message-icon color-bg">
                  <i className="far fa-heart"></i>
                </div>
                <div className="main-dashboard-message-text">
                  <p>
                    <a href="#">Fider Mamby</a> bookmarked your{" "}
                    <a href="#">Holiday Home</a> listing!
                  </p>
                </div>
                <div className="main-dashboard-message-time">
                  <i className="fal fa-calendar-week"></i> 28 may 2020
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dasboard-widget fl-wrap">
            <div className="dasboard-widget-title fl-wrap">
              <h5>
                <i className="fas fa-comment-alt"></i>Last Messages
              </h5>
            </div>
            <div className="chat-contacts fl-wrap">
              <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/2.jpg" alt="..." />
                  <div className="message-counter">2</div>
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Mark Rose</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>

              <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/1.jpg" alt="..." />
                  <div className="message-counter">1</div>
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Adam Koncy</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>

              <a
                className="chat-contacts-item chat-contacts-item_active"
                href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/3.jpg" alt="..." />
                  <div className="message-counter">3</div>
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Andy Smith</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>

              <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/5.jpg" alt="..." />
                  <div className="message-counter">4</div>
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Joe Frick</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>

              <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/4.jpg" alt="..." />
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Alise Goovy</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>

              <a className="chat-contacts-item" href="#">
                <div className="dashboard-message-avatar">
                  <img src="/assets/images/avatar/6.jpg" alt="..." />
                </div>
                <div className="chat-contacts-item-text">
                  <h4>Cristiano Olando</h4>
                  <span>27 Dec 2018 </span>
                  <p>
                    Vivamus lobortis vel nibh nec maximus. Donec dolor erat,
                    rutrum ut feugiat sed, ornare vitae nunc. Donec massa nisl,
                    bibendum id ultrices sed, accumsan sed dolor.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="box-widget fl-wrap">
            <div className="banner-widget fl-wrap">
              <div className="bg-wrap bg-parallax-wrap-gradien">
                <div className="bg  " data-bg="images/all/blog/1.jpg"></div>
              </div>
              <div className="banner-widget_content">
                <h5>
                  Participate in our loyalty program. Refer a friend and get a
                  discount.
                </h5>
                <a href="#" className="btn float-btn color-bg small-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
