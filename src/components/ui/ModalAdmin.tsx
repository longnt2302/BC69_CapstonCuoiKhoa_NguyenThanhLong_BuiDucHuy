import { DatePicker, Form, Input, Modal } from "antd";
import type { InputRef } from "antd";
import { Dispatch, SetStateAction, useRef } from "react";
import { UserResponse } from "../../@types";
import moment from "moment";

type Props = {
  isShowModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  typeOfModal: string;
  infoUser: UserResponse | undefined;
};

export const ModalAdmin = (props: Props) => {
  const { isShowModal, setIsShowModal, typeOfModal, infoUser } = props;

  const nameRef = useRef<InputRef>(null);
  console.log("nameRef.current: ", nameRef.current?.input);

  return (
    <>
      {typeOfModal === "info" ? (
        <Modal
          open={isShowModal}
          onCancel={() => {
            setIsShowModal(false);
          }}
          onOk={() => {
            setIsShowModal(false);
          }}
          cancelText="Close"
          okButtonProps={{ style: { display: "none" } }}
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Info User
          </h2>
          <Form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  User Name
                </label>
                <Input value={infoUser?.user.name} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Email
                </label>
                <Input value={infoUser?.user.email} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Birthday
                </label>
                <DatePicker
                  className="w-full noBG"
                  value={moment(infoUser?.user.birthday, "DD/MM/YYYY")}
                  format={"DD/MM/YYYY"}
                />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Phone Number
                </label>
                <Input value={infoUser?.user.phone} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Role
                </label>
                <Input value={infoUser?.user.role} />
              </div>
            </div>
          </Form>
        </Modal>
      ) : typeOfModal === "edit" ? (
        <Modal
          open={isShowModal}
          onCancel={() => {
            setIsShowModal(false);
          }}
          onOk={() => {
            setIsShowModal(false);
          }}
          okText="Save Change"
          cancelText="Cancel"
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Edit User
          </h2>
          <Form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  User Name
                </label>
                <Input ref={nameRef} value={infoUser?.user.name} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Email
                </label>
                <Input value={infoUser?.user.email} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Birthday
                </label>
                <DatePicker
                  className="w-full noBG"
                  value={moment(infoUser?.user.birthday, "DD/MM/YYYY")}
                  format={"DD/MM/YYYY"}
                />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Phone Number
                </label>
                <Input value={infoUser?.user.phone} />
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Role
                </label>
                <Input value={infoUser?.user.role} />
              </div>
            </div>
          </Form>
        </Modal>
      ) : (
        <Modal
          open={isShowModal}
          onCancel={() => {
            setIsShowModal(false);
          }}
          onOk={() => {
            setIsShowModal(false);
          }}
          okText="Add"
          cancelText="Cancel"
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Add New User
          </h2>
          <div className="grid md:grid-cols-12 grid-cols-6 gap-[10px] mt-20"></div>
        </Modal>
      )}
    </>
  );
};
