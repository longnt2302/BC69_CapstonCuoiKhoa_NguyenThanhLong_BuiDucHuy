import { NavLink } from "react-router-dom";
import { RoomResponse } from "../../../@types";
import { roomServices } from "../../../services";
import { useState } from "react";
import { Modal } from "antd";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

type Props = {
  room: RoomResponse;
};
export const ItemRoom = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    try {
      await roomServices.deleteRoom(room?.id);
      toast.success("Xoá thành công");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.content);
      }
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { room } = props;

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
            data-starrating2="5"
          ></div>
          <div className="dashboard-listings-item_opt">
            <span className="viewed-counter">
              <i className="fas fa-eye"></i> Viewed
            </span>
            <ul>
              <li>
                <NavLink
                  to={`/dashboard/editroom/${room?.id}`}
                  className="tolt"
                  data-microtip-position="top-left"
                  data-tooltip="Edit"
                >
                  <i className="far fa-edit"></i>
                </NavLink>
              </li>

              <li>
                <a
                  href="#"
                  className="tolt"
                  data-microtip-position="top-left"
                  data-tooltip="Delete"
                  onClick={(e) => {
                    e.preventDefault();
                    showModal();
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                </a>
                <Modal
                  title="Xác nhận"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <h4>Bạn có chắc xoá phòng này không ?</h4>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
