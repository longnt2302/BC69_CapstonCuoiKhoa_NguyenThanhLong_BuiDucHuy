import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isShowModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
};

export const ModalAdmin = (props: Props) => {
  const { isShowModal, setIsShowModal } = props;
  return (
    <Modal
      open={isShowModal}
      onCancel={() => {
        setIsShowModal(false);
      }}
      onOk={() => {
        setIsShowModal(false);
      }}
      okText="Đặt vé"
      cancelText="Huỷ"
      width={800}>
      <h2 className="text-center text-[30px] font-semibold">Đặt vé</h2>
      <div className="grid md:grid-cols-12 grid-cols-6 gap-[10px] mt-20"></div>
      <ul className="flex mt-12 mb-5 space-x-4 justify-center">
        <li className="flex items-center">
          <span className="inline-block me-2 w-9 h-9 rounded-md bg-green-800"></span>
          Ghế Vip
        </li>
        <li className="flex items-center">
          <span className="inline-block me-2 w-9 h-9 rounded-md bg-black"></span>
          Ghế Thường
        </li>
        <li className="flex items-center">
          <span className="inline-block me-2 w-9 h-9 rounded-md bg-orange-400"></span>
          Ghế Đang Chọn
        </li>
      </ul>
    </Modal>
  );
};
