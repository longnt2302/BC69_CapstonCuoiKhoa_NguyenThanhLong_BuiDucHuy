import { NavLink, useNavigate } from "react-router-dom";
import { RoomResponse } from "../../../@types";
type Props = {
  key: number;
  roomDetail: RoomResponse;
  cityName: string | undefined;
};
export const ItemRoom = (props: Props) => {
  const { roomDetail, cityName } = props;
  const navigate = useNavigate();
  return (
    <div className="listing-item">
      <article className="geodir-category-listing fl-wrap">
        <div className="geodir-category-img fl-wrap">
          <NavLink
            to={`/${cityName}/${roomDetail.id}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${cityName}/${roomDetail.id}`);
            }}
            className="geodir-category-img_item">
            <img src={roomDetail?.hinhAnh} alt="..." />
            <div className="overlay"></div>
          </NavLink>
          <NavLink
            to="#"
            className="geodir_save-btn tolt"
            data-microtip-position="left"
            data-tooltip="Save">
            <span>
              <i className="fal fa-heart"></i>
            </span>
          </NavLink>
          <NavLink
            to="#"
            className="compare-btn tolt"
            data-microtip-position="left"
            data-tooltip="Compare">
            <span>
              <i className="fal fa-random"></i>
            </span>
          </NavLink>
          <div className="geodir-category-listing_media-list">
            <span>
              <i className="fas fa-camera"></i> 8
            </span>
          </div>
        </div>
        <div className="geodir-category-content fl-wrap">
          <h3 className="title-sin_item">
            <NavLink
              to={`/${cityName}/${roomDetail.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${cityName}/${roomDetail.id}`);
              }}
              className="text-[16px]">
              {roomDetail?.tenPhong}
            </NavLink>
          </h3>
          <div className="geodir-category-content_price">
            $ {roomDetail?.giaTien}
          </div>
          <p>{roomDetail?.moTa.slice(0, 200)}...</p>
          <div className="geodir-category-content-details">
            <ul>
              <li>
                <i className="fal fa-bed"></i>
                <span>{roomDetail?.phongNgu}</span>
              </li>
              <li>
                <i className="fal fa-bath"></i>
                <span>{roomDetail?.phongTam}</span>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};
