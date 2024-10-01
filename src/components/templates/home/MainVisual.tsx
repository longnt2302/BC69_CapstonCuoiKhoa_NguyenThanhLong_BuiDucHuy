import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../../../services/viTri";
import { sleep } from "../../../utils";

export const MainVisual = () => {
  const { data } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      await sleep(1000);
      return viTriServices.getViTri();
    },
  });

  return (
    <section className="hero-section hidden-section">
      <div className="media-container bg-parallax-wrap-gradien">
        <div className="video-container">
          <video autoPlay loop muted className="bgvid">
            <source src="./assets/video/1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container">
        <div className="hero-title hero-title_center">
          <h4>Real Estate Searching Platform</h4>
          <h2>
            Find The House of Your Dream <br />
            Using Our Platform
          </h2>
        </div>
        <div className="main-search-input-wrap shadow_msiw msiw-center">
          <div className="main-search-input fl-wrap">
            <div className="main-search-input-item">
              <input type="text" placeholder="What are you looking for?" className="text-white" />
            </div>
            <div className="main-search-input-item">
              <select data-placeholder="All Categories" className="chosen-select no-search-select">
                <option>All Statuses</option>
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
            </div>
            <div className="main-search-input-item">
              <select
                data-placeholder="All Categories"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                  color: "white",
                  padding: "0 15px",
                }}
              >
                {data?.data?.content?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.tenViTri}
                  </option>
                ))}
              </select>
            </div>
            <button className="main-search-button color-bg" onClick={() => (window.location.href = "listing.html")}>
              {" "}
              Search <i className="far fa-search"></i>{" "}
            </button>
          </div>
        </div>
        <div className="hero-notifer hn_center fl-wrap">
          Need more search options? <a href="listing.html">Advanced Search</a>
        </div>
        <div className="scroll-down-wrap sdw_center">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
