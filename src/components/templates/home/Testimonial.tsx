export const Testimonial = () => {
  return (
    <section className="gray-bg ">
      <div className="container">
        <div className="section-title st-center fl-wrap">
          <h4>Phản hồi và đánh giá</h4>
          <h2>Khách hàng nói gì về chúng tôi</h2>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="testimonials-slider-wrap">
        <div className="testimonials-slider">
          <div className="slick-item">
            <div className="text-carousel-item fl-wrap">
              <div className="text-carousel-item-header fl-wrap">
                <div className="popup-avatar">
                  <img src="./assets/images/avatar/1.jpg" alt="..." />
                </div>
                <div className="review-owner fl-wrap">Jessie Wilcox</div>
                <div
                  className="listing-rating card-popup-rainingvis"
                  data-starrating2="5">
                  {" "}
                </div>
              </div>
              <div className="text-carousel-content fl-wrap">
                <p>
                  {" "}
                  "In ut odio libero, at vulputate urna. Nulla tristique mi a
                  massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                  commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer
                  adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut
                  laoreet dolore luptatum."
                </p>
                <a href="#" className="testim-link color-bg">
                  Từ Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="text-carousel-item fl-wrap">
              <div className="text-carousel-item-header fl-wrap">
                <div className="popup-avatar">
                  <img src="./assets/images/avatar/2.jpg" alt="..." />
                </div>
                <div className="review-owner fl-wrap">Austin Harisson</div>
                <div
                  className="listing-rating card-popup-rainingvis"
                  data-starrating2="4">
                  {" "}
                </div>
              </div>
              <div className="text-carousel-content fl-wrap">
                <p>
                  {" "}
                  "Feugiat nulla facilisis at vero eros et accumsan et iusto
                  odio dignissim qui blandit praesent luptatum zzril delenit
                  augue duis dolore te odio dignissim qui blandit praesent
                  blandit praesent luptatum zzril.Vulputate urna. Nulla
                  tristique mi a massa convallis."
                </p>
                <a href="#" className="testim-link color-bg">
                  Từ Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="text-carousel-item fl-wrap">
              <div className="text-carousel-item-header fl-wrap">
                <div className="popup-avatar">
                  <img src="./assets/images/avatar/3.jpg" alt="..." />
                </div>
                <div className="review-owner fl-wrap">Garry Colonsi</div>
                <div
                  className="listing-rating card-popup-rainingvis"
                  data-starrating2="4">
                  {" "}
                </div>
              </div>
              <div className="text-carousel-content fl-wrap">
                <p>
                  {" "}
                  "In ut odio libero, at vulputate urna. Nulla tristique mi a
                  massa convallis cursus. Nulla eu mi magna. Etiam suscipit
                  commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer
                  adipiscing elit, sed diam nonu mmy nibh euismod tincidunt ut
                  laoreet dolore luptatum."
                </p>
                <a href="#" className="testim-link color-bg">
                  Từ Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="text-carousel-item fl-wrap">
              <div className="text-carousel-item-header fl-wrap">
                <div className="popup-avatar">
                  <img src="./assets/images/avatar/4.jpg" alt="..." />
                </div>
                <div className="review-owner fl-wrap">Antony Moore</div>
                <div
                  className="listing-rating card-popup-rainingvis"
                  data-starrating2="5">
                  {" "}
                </div>
              </div>
              <div className="text-carousel-content fl-wrap">
                <p>
                  {" "}
                  "Feugiat nulla facilisis at vero eros et accumsan et iusto
                  odio dignissim qui blandit praesent luptatum zzril delenit
                  augue duis dolore te odio dignissim qui blandit praesent
                  blandit praesent luptatum zzril.Vulputate urna. Nulla
                  tristique mi a massa convallis."
                </p>
                <a href="#" className="testim-link color-bg">
                  Từ Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
