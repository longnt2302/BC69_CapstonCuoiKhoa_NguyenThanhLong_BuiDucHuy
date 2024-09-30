import React from "react";

export const OurProperties = () => {
  return (
    <section>
      <div className="container">
        <div className="about-wrap">
          <div className="row">
            <div className="col-md-5">
              <div className="about-title ab-hero fl-wrap">
                <h2>Why Choose Our Properties </h2>
                <h4>Check video presentation to find out more about us .</h4>
              </div>
              <div className="services-opions fl-wrap">
                <ul>
                  <li>
                    <i className="fal fa-headset"></i>
                    <h4>24 Hours Support </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li>
                    <i className="fal fa-users-cog"></i>
                    <h4>User Admin Panel</h4>
                    <p>
                      Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis
                      fringilla diam sed aliquam.{" "}
                    </p>
                  </li>
                  <li>
                    <i className="fal fa-phone-laptop"></i>
                    <h4>Mobile Friendly</h4>
                    <p>
                      Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In
                      fermentum facilisis massa.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="about-img fl-wrap">
                <img src="./assets/images/all/27.jpg" className="respimg" alt="..." />
                <div className="about-img-hotifer color-bg">
                  <p>Your website is fully responsive so visitors can view your content from their choice of device.</p>
                  <h4>Mark Antony</h4>
                  <h5>Homeradar CEO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
