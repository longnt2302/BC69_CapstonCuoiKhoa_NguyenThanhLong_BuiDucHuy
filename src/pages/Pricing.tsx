import { Breadcrumb } from "../components/ui";

export const Pricing = () => {
  return (
    <>
      <section
        className="hidden-section single-par2  "
        data-scrollax-parent="true">
        <div className="bg-wrap bg-parallax-wrap-gradien">
          <div
            className="bg par-elem "
            data-bg="images/bg/4.jpg"
            data-scrollax="properties: { translateY: '30%' }"></div>
        </div>
        <div className="container">
          <div className="section-title center-align big-title">
            <h2>
              <span>Kế hoạch giá của chúng tôi</span>
            </h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
              tincidunt arcu, sit amet fermentum sem.
            </h4>
          </div>
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
            <span>Cuộn xuống</span>
          </div>
        </div>
      </section>
      <Breadcrumb currentPage="Bảng giá" />

      <section className="gray-bg small-padding ">
        <div className="container">
          <div className="pricing-switcher-header">
            Giá cả đơn giản cho mọi người dùng:
          </div>
          <div className="pricing-switcher">
            <div className="fieldset color-bg">
              <input
                type="radio"
                name="duration-1"
                id="monthly-1"
                className="tariff-toggle"
                checked
              />
              <label htmlFor="monthly-1">Biểu phí hàng tháng</label>
              <input
                type="radio"
                name="duration-1"
                className="tariff-toggle"
                id="yearly-1"
              />
              <label htmlFor="yearly-1">Biểu thuế hàng năm</label>
              <span className="switch"></span>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>01.</span>Miễn phí
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
                      <span className="mouth-cont">Mỗi tháng</span>
                      <span className="year-cont">Mỗi năm</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>Một danh sách</li>
                    <li className="not-included">Khả dụng trong 90 ngày</li>
                    <li className="not-included">Không có tính năng</li>
                    <li className="not-included">Hỗ trợ hạn chết</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Chọn miễn phí
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>02.</span>Cơ bản
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
                      <span className="mouth-cont">Mỗi tháng</span>
                      <span className="year-cont">Mỗi năm</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="recomm-price color-bg">Đề xuất</div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>20 Danh sách</li>
                    <li>190 Ngày có sẵn</li>
                    <li>Không có tính năng</li>
                    <li className="not-included">24/7 Hỗ trợ</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Chọn cơ bản
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>03.</span>Mở rộng
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
                      <span className="mouth-cont">Mỗi tháng</span>
                      <span className="year-cont">Mỗi năm</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>Danh sách không giới hạn</li>
                    <li>220 Hoạt động</li>
                    <li>Không tính năng</li>
                    <li>Hỗ trợ hạn chế</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Chọn mở rộng
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="pricing-column fl-wrap">
                <div className="pricing-header">
                  <h3>
                    <span>04.</span>Chất lượng cao
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
                      <span className="mouth-cont">Mỗi tháng</span>
                      <span className="year-cont">Mỗi năm</span>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. </p>
                </div>
                <div className="pricing-content fl-wrap">
                  <ul className="no-list-style">
                    <li>Danh sách không giới hạn</li>
                    <li>Hoạt động trọn đời</li>
                    <li>Nổi bật trong kết quả tìm kiếm</li>
                    <li>24/7 Hỗ trợ</li>
                  </ul>
                  <a href="#" className="price-link color-bg fl-wrap">
                    Chọn gói năng cao
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
