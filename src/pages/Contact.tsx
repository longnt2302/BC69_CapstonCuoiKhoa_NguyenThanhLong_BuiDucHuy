import { Breadcrumb } from "../components/ui";

export const Contact = () => {
  return (
    <>
      <section className="hidden-section single-par2  " data-scrollax-parent="true">
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div
            className="bg par-elem "
            data-bg="./../assets/images/bg/17.jpg"
            data-scrollax="properties: { translateY: '30%' }"
          ></div>
        </div>
        <div className="container">
          <div className="section-title center-align big-title">
            <h2>
              <span>Our Contacts</span>
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

      <Breadcrumb currentPage="Contact" />

      <section className="gray-bg small-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-envelope"></i>
                <h4>
                  Our Mails <span>01</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="serv-link sl-b">
                  yourmail@domain.com
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-phone-rotary"></i>
                <h4>
                  Our Phones<span>02</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="serv-link sl-b">
                  +7(111)123456789
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-item fl-wrap">
                <i className="fal fa-map-marked"></i>
                <h4>
                  Our Adress <span>03</span>
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <a href="#" className="serv-link sl-b">
                  USA 27TH Brooklyn NY
                </a>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="contacts-opt fl-wrap">
            <div className="contact-social">
              <span className="cs-title">Find us on: </span>
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
            <a href="#" className="btn small-btn float-btn color-bg cf_btn">
              Write Mesagge
            </a>
            <div className="contact-notifer">
              Or visit our <a href="help.html"> help page</a>
            </div>
          </div>

          <div className="box-widget">
            <div className="box-widget-title single_bwt fl-wrap   ">Office Location</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
              lobortis pulvinar. Donec a consectetur nulla.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
