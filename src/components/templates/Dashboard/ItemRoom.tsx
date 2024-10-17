import { useNavigate } from "react-router-dom";
import { RoomResponse } from "../../../@types";
import { roomServices } from "../../../services";

type Props = {
  room: RoomResponse;
  refetch: () => void;
};
export const ItemRoom = (props: Props) => {
  const navigate = useNavigate();
  const { room, refetch } = props;
  refetch();
  return (
    <div className="col-md-6">
      <div className="dashboard-listings-item fl-wrap">
        <div className="dashboard-listings-item_img">
          <div className="bg-wrap">
            <img src={room?.hinhAnh} alt={room?.tenPhong} />
          </div>
        </div>
        <div className="dashboard-listings-item_content">
          <h4>
            <a href="#">{room?.tenPhong}</a>
          </h4>
          <div className="geodir-category-location">
            <span className="text-gray-600 text-left">{room?.moTa}</span>
          </div>
          <div className="clearfix"></div>
          <div
            className="listing-rating card-popup-rainingvis tolt"
            data-microtip-position="right"
            data-tooltip="Excellent"
            data-starrating2="5"></div>
          <div className="dashboard-listings-item_opt">
            <span className="viewed-counter">
              <i className="fas fa-eye"></i> Viewed
            </span>
            <ul>
              <li>
                <a
                  href={`/dashboard/editroom/${room?.id}`}
                  className="tolt"
                  data-microtip-position="top-left"
                  data-tooltip="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/dashboard/editroom/${room?.id}`);
                  }}>
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
                    try {
                      e.preventDefault();
                      await roomServices.deleteRoom(room?.id);
                      refetch();
                    } catch (error) {
                      console.log("🚀 ~ onClick={ ~ error:", error);
                    }
                  }}>
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
