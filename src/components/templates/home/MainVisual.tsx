import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../../../services";
import { sleep } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

export const MainVisual = () => {
  const { data } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      await sleep(1000);
      return viTriServices.getViTri();
    },
  });
  const navigate = useNavigate();

  console.log("🚀 ~ MainVisual ~ data:", data);
  return (
    <section className="hero-section hidden-section px-4">
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
          <div
            className="main-search-input fl-wrap"
            style={{
              padding: 0,
            }}
          >
            <div className="main-search-input-item">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="text-white"
              />
            </div>
            <div className="main-search-input-item w-1/3">
              <Select
                defaultValue="Chọn Khu Vực"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1B182B",
                  color: "white",
                }}
                onChange={(value) => {
                  navigate(`/${value}`);
                }}
                options={data?.data?.content?.map((item) => ({
                  value: item.tenViTri,
                  label: item.tenViTri,
                }))}
              />
            </div>
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
