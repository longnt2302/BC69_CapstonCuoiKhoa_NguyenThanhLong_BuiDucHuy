import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../services";
import axios from "axios";
import { TOKEN } from "../constants";

export const DashboardListing = () => {
  const { data, refetch } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      const dataViTri = await viTriServices.getViTri();
      return dataViTri?.data?.content;
    },
  });
  return (
    <>
      <div className="dasboard-listing-box fl-wrap">
        <div className="dashboard-listings-wrap fl-wrap">
          <div className="row">
            {data?.map((viTri) => (
              <div key={viTri?.id} className="col-md-6">
                <div className="dashboard-listings-item fl-wrap">
                  <div className="dashboard-listings-item_img">
                    <div className="bg-wrap">
                      <img src={viTri?.hinhAnh} alt={viTri?.tenViTri} />
                    </div>
                  </div>
                  <div className="dashboard-listings-item_content">
                    <h4>
                      <a href="#">{viTri?.tenViTri}</a>
                    </h4>
                    <div className="geodir-category-location">
                      <a href="#">
                        <i className="fas fa-map-marker-alt"></i>{" "}
                        <span>{viTri?.tinhThanh}</span>
                      </a>
                    </div>
                    <div className="clearfix"></div>
                    <div
                      className="listing-rating card-popup-rainingvis tolt"
                      data-microtip-position="right"
                      data-tooltip="Excellent"
                      data-starrating2="5"
                    ></div>
                    <div className="dashboard-listings-item_opt">
                      <span className="viewed-counter">
                        <i className="fas fa-eye"></i> Viewed
                      </span>
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="tolt"
                            data-microtip-position="top-left"
                            data-tooltip="Edit"
                          >
                            <i className="far fa-edit"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="tolt"
                            data-microtip-position="top-left"
                            data-tooltip="Delete"
                            onClick={async (e) => {
                              e.preventDefault();
                              try {
                                await axios.delete(
                                  `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/${viTri.id}`,
                                  { headers: TOKEN }
                                );
                                console.log("delete success");
                                refetch();
                              } catch (error) {
                                console.log("🚀 ~ onClick={ ~ error:", error);
                              }
                            }}
                          >
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
