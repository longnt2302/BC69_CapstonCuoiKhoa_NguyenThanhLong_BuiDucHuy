export const MainHead = () => {
  return (
    <section
      className="hidden-section single-par2  "
      data-scrollax-parent="true">
      <div className="bg-wrap bg-parallax-wrap-gradien">
        <div
          className="bg par-elem "
          data-bg="./assets/images/bg/3.jpg"
          data-scrollax="properties: { translateY: '30%' }"></div>
      </div>
      <div className="container">
        <div className="section-title center-align big-title">
          <h2>
            <span>Listings Rooms</span>
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
          <span>Scroll Down To Discover</span>
        </div>
      </div>
    </section>
  );
};
