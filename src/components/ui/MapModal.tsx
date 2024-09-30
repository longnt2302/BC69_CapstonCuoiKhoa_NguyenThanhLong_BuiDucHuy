export const MapModal = () => {
  return (
    <div className="map-modal-wrap">
      <div className="map-modal-wrap-overlay"></div>
      <div className="map-modal-item">
        <div className="map-modal-container fl-wrap">
          <h3>
            {" "}
            <span>Listing Title </span>
          </h3>
          <div className="map-modal-close">
            <i className="far fa-times"></i>
          </div>
          <div className="map-modal fl-wrap">
            <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"></div>
            <div className="scrollContorl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
