import { useNavigate } from "react-router-dom";
import { viTriAPIResponse } from "../../../@types";
import { viTriServices } from "../../../services";

type Props = {
  viTri: viTriAPIResponse;
  refetch: () => void;
};
export const ItemViTri = (props: Props) => {
  const navigate = useNavigate();
  const { viTri, refetch } = props;

  return (
    <div className="col-md-6">
      <div className="dashboard-listings-item fl-wrap">
        <div className="dashboard-listings-item_img">
          <div className="bg-wrap">
            <img src={viTri?.hinhAnh} alt={viTri?.tenViTri} />
          </div>
        </div>
        <div className="dashboard-listings-item_content">
          <h4>
            <a
              href={`/${viTri?.tenViTri}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${viTri?.tenViTri}`);
              }}
            >
              {viTri?.tenViTri}
            </a>
          </h4>
          <div className="geodir-category-location">
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> <span>{viTri?.tinhThanh}</span>
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
                  href={`/dashboard/editvitri/${viTri?.id}`}
                  className="tolt"
                  data-microtip-position="top-left"
                  data-tooltip="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/dashboard/editvitri/${viTri?.id}`);
                  }}
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
                      await viTriServices.deleteViTri(viTri.id);
                      console.log("delete vi tri success");
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
  );
};
