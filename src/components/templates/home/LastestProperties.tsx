export const LastestProperties = () => {
  return (
    <section className="gray-bg small-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title fl-wrap">
              <h4>Browse Hot Offers</h4>
              <h2>Latest Properties</h2>
            </div>
          </div>
          <div className="col-md-8">
            <div className="listing-filters gallery-filters">
              <a href="#" className="gallery-filter  gallery-filter-active" data-filter="*">
                {" "}
                <span>All Categories</span>
              </a>
              <a href="#" className="gallery-filter" data-filter=".for_sale">
                {" "}
                <span>For Sale</span>
              </a>
              <a href="#" className="gallery-filter" data-filter=".for_rent">
                {" "}
                <span>For Rent</span>
              </a>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="grid-item-holder gallery-items gisp fl-wrap">
          <div className="gallery-item for_sale">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/3.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.72956781"
                      data-newlongitude="-73.99726866"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> 70 Bright St New York, USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Sale
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        Apartment
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 8
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Gorgeous House For Sale</a>
                  </h3>
                  <div className="geodir-category-content_price">$ 600,000</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>3</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>2</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>450 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/2.jpg" alt="..." />
                      <span>By Liza Rose</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Good"
                      data-starrating2="4"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="gallery-item for_sale">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/1.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.88496706"
                      data-newlongitude="-73.88191222"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> 40 Journal Square , NJ, USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Sale
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        Apartment
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 47
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Luxury Family Home</a>
                  </h3>
                  <div className="geodir-category-content_price">$ 320,000</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>4</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>2</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>460 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/1.jpg" alt="..." />
                      <span>By Anna Lips</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Excellent"
                      data-starrating2="5"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="gallery-item for_rent">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/9.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.94982541"
                      data-newlongitude="-73.84357452"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> 34-42 Montgomery St , NY, USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Rent
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        House
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 4
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Family House for Rent</a>
                  </h3>
                  <div className="geodir-category-content_price">$ 700 / per month</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>2</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>1</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>220 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/3.jpg" alt="..." />
                      <span>By Mark Frosty</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Good"
                      data-starrating2="4"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="gallery-item for_sale">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/6.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.72228267"
                      data-newlongitude="-73.99246214"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> W 85th St, New York, USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Sale
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        Apartment
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 13
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Contemporary Apartment</a>
                  </h3>
                  <div className="geodir-category-content_price">$ 1,600,000</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>4</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>1</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>550 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/4.jpg" alt="..." />
                      <span>By Bill Trust</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Excellent
                                                        "
                      data-starrating2="5"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="gallery-item for_sale for_rent">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/5.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.88496706"
                      data-newlongitude="-73.88191222"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> 75 Prince St, NY, USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Sale
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        Villa
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 12
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Kayak Point House</a>
                  </h3>
                  <div className="geodir-category-content_price">$ 500.000</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>5</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>1</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>510 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/6.jpg" alt="..." />
                      <span>By Andy Sposty</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Average"
                      data-starrating2="3"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="gallery-item for_rent">
            <div className="listing-item">
              <article className="geodir-category-listing fl-wrap">
                <div className="geodir-category-img fl-wrap">
                  <a href="listing-single.html" className="geodir-category-img_item">
                    <img src="./assets/images/all/8.jpg" alt="..." />
                    <div className="overlay"></div>
                  </a>
                  <div className="geodir-category-location">
                    <a
                      href="#"
                      className="single-map-item tolt"
                      data-newlatitude="40.76221766"
                      data-newlongitude="-73.96511769"
                      data-microtip-position="top-left"
                      data-tooltip="On the map"
                    >
                      <i className="fas fa-map-marker-alt"></i> <span> 70 Bright St, Jersey City, NJ USA</span>
                    </a>
                  </div>
                  <ul className="list-single-opt_header_cat">
                    <li>
                      <a href="#" className="cat-opt blue-bg">
                        Rent
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cat-opt color-bg">
                        Apartment
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="geodir_save-btn tolt" data-microtip-position="left" data-tooltip="Save">
                    <span>
                      <i className="fal fa-heart"></i>
                    </span>
                  </a>
                  <a href="#" className="compare-btn tolt" data-microtip-position="left" data-tooltip="Compare">
                    <span>
                      <i className="fal fa-random"></i>
                    </span>
                  </a>
                  <div className="geodir-category-listing_media-list">
                    <span>
                      <i className="fas fa-camera"></i> 21
                    </span>
                  </div>
                </div>
                <div className="geodir-category-content fl-wrap">
                  <h3 className="title-sin_item">
                    <a href="listing-single.html">Urban House</a>
                  </h3>
                  <div className="geodir-category-content_price">1500 / per month</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla.
                  </p>
                  <div className="geodir-category-content-details">
                    <ul>
                      <li>
                        <i className="fal fa-bed"></i>
                        <span>5</span>
                      </li>
                      <li>
                        <i className="fal fa-bath"></i>
                        <span>3</span>
                      </li>
                      <li>
                        <i className="fal fa-cube"></i>
                        <span>1210 ft2</span>
                      </li>
                    </ul>
                  </div>
                  <div className="geodir-category-footer fl-wrap">
                    <a href="agent-single.html" className="gcf-company">
                      <img src="./assets/images/avatar/5.jpg" alt="..." />
                      <span>By Liza Kobart</span>
                    </a>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="top"
                      data-tooltip="Excellent
                                                        "
                      data-starrating2="5"
                    ></div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <a href="listing.html" className="btn float-btn small-btn color-bg">
          View All Properties
        </a>
      </div>
    </section>
  );
};
