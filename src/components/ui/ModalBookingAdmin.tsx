import { DatePicker, Form, Input, Modal, FormInstance, Button } from "antd";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { BookingResponse } from "../../@types";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, bookingSchemaType } from "../../schema";
import { useBooking, bookingEdit } from "../../hooks/api";
import { Bounce, toast } from "react-toastify";

type Props = {
  isShowModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  typeOfModal: string;
  infoBooking: BookingResponse | undefined;
};

export const ModalBookingAdmin = (props: Props) => {
  const { isShowModal, setIsShowModal, typeOfModal, infoBooking } = props;
  console.log("infoBooking: ", infoBooking);

  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    formRef.current?.setFieldsValue({
      id: infoBooking?.id,
      maPhong: infoBooking?.maPhong,
      ngayDi: infoBooking?.ngayDi
        ? moment(infoBooking.ngayDi, "DD/MM/YYYY")
        : null,
      ngayDen: infoBooking?.ngayDen
        ? moment(infoBooking?.ngayDen, "DD/MM/YYYY")
        : null,
      soLuongKhach: infoBooking?.soLuongKhach || "",
      maNguoiDung: infoBooking?.maNguoiDung || "",
    });
  }, [infoBooking]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<bookingSchemaType>({
    mode: "onChange",
    resolver: zodResolver(bookingSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useBooking();

  const onSubmit = (data: bookingSchemaType) => {
    mutate(data);
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Đăng ký thành công !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        reset();
      }, 1500);
      setIsLoading(true);
    }, 100);
    setIsShowModal(false);
    reset();
  };

  // const currentUser = dataUser();

  // useEffect(() => {
  //   if (currentUser) {
  //     setValue("maPhong", currentUser?.user.id);
  //   }
  //   if (currentUser) {
  //     setValue("maNguoiDung", currentUser?.user.id);
  //   }
  // }, [currentUser, currentUser, setValue]);

  const handleCanelAdd = () => {
    setIsShowModal(false);
    reset();
  };

  const handleCanel = () => {
    setIsShowModal(false);
    reset();
  };

  const { mutate: mutateEdit } = bookingEdit();
  const onFinish = (data: BookingResponse) => {
    mutateEdit({ id: Number(data.id), payload: data });
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Cập nhật thành công !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        reset();
      }, 1500);
      setIsLoading(true);
    }, 100);
    setIsShowModal(false);
    reset();
  };

  return (
    <>
      {typeOfModal === "info" ? (
        <Modal
          open={isShowModal}
          onCancel={() => handleCanel()}
          onOk={() => setIsShowModal(false)}
          cancelText="Đóng"
          okButtonProps={{ style: { display: "none" } }}
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Thông tin vé
          </h2>
          <Form ref={formRef}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Mã
                </label>
                <Form.Item name="id">
                  <Input disabled value={infoBooking?.id} />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Mã phòng
                </label>
                <Form.Item name="maPhong">
                  <Input disabled value={infoBooking?.maPhong} />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Ngày đi
                </label>
                <Form.Item name="ngayDi">
                  <DatePicker
                    className="w-full noBG"
                    // format={"DD/MM/YYYY"}
                    disabled
                    value={
                      infoBooking?.ngayDi
                        ? moment(infoBooking.ngayDi, "DD/MM/YYYY")
                        : null
                    }
                  />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Ngày đến
                </label>
                <Form.Item name="ngayDen">
                  <DatePicker
                    className="w-full noBG"
                    // format={"DD/MM/YYYY"}
                    disabled
                    value={
                      infoBooking?.ngayDen
                        ? moment(infoBooking.ngayDen, "DD/MM/YYYY")
                        : null
                    }
                  />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Số lượng khách
                </label>
                <Form.Item name="soLuongKhach">
                  <Input disabled value={infoBooking?.soLuongKhach} />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Mã người dùng
                </label>
                <Form.Item name="maNguoiDung">
                  <Input disabled value={infoBooking?.maNguoiDung} />
                </Form.Item>
              </div>
            </div>
          </Form>
        </Modal>
      ) : typeOfModal === "edit" ? (
        <Modal
          open={isShowModal}
          onCancel={() => handleCanel()}
          onOk={() => setIsShowModal(false)}
          footer={[]}
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Sửa thông tin đặt vé
          </h2>
          <Form ref={formRef} onFinish={onFinish}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Mã phòng
                </label>
                <Form.Item name="maPhong">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Ngày đi
                </label>
                <Form.Item name="ngayDi">
                  <DatePicker className="w-full noBG" format={"DD/MM/YYYY"} />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Ngày đến
                </label>
                <Form.Item name="ngayDen">
                  <DatePicker className="w-full noBG" format={"DD/MM/YYYY"} />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Số lượng khách
                </label>
                <Form.Item name="soLuongKhach">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Mã người dùng
                </label>
                <Form.Item name="maNguoiDung">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div>
              <Button className="me-2" onClick={() => handleCanel()}>
                Huỷ
              </Button>
              <Button
                loading={isLoading}
                htmlType="submit"
                className="log_btn color-bg text-white">
                {" "}
                Cập nhật
              </Button>
            </div>
          </Form>
        </Modal>
      ) : (
        <Modal
          open={isShowModal}
          onCancel={() => handleCanel()}
          onOk={() => setIsShowModal(false)}
          footer={[]}
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Đặt phòng
          </h2>
          <form
            name="registerform"
            className="main-register-form"
            id="main-register-form2"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="text-left mb-2">
                <label className="font-semibold">Mã phòng * </label>
                <Controller
                  control={control}
                  name="maPhong"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.maPhong && (
                  <p className="text-red-500">{errors.maPhong.message}</p>
                )}
              </div>
              <div className="text-left mb-2">
                <label className="font-semibold">Ngày đến * </label>
                <Controller
                  control={control}
                  name="ngayDen"
                  render={({ field }) => (
                    <DatePicker
                      className="w-full noBG"
                      {...field}
                      // format="DD/MM/YYYY"
                      value={
                        field.value ? moment(field.value, "DD/MM/YYYY") : null
                      }
                      onChange={(date) =>
                        field.onChange(date ? date.format("DD/MM/YYYY") : null)
                      }
                    />
                  )}
                />
                {errors.ngayDen && (
                  <p className="text-red-500">{errors.ngayDen.message}</p>
                )}
              </div>
              <div className="text-left mb-2">
                <label className="font-semibold">Ngày đi * </label>
                <Controller
                  control={control}
                  name="ngayDi"
                  render={({ field }) => (
                    <DatePicker
                      className="w-full noBG"
                      {...field}
                      // format="DD/MM/YYYY"
                      value={
                        field.value ? moment(field.value, "DD/MM/YYYY") : null
                      }
                      onChange={(date) =>
                        field.onChange(date ? date.format("DD/MM/YYYY") : null)
                      }
                    />
                  )}
                />
                {errors.ngayDi && (
                  <p className="text-red-500">{errors.ngayDi.message}</p>
                )}
              </div>
              <div className="text-left mb-2">
                <label className="font-semibold">Số khách </label>
                <Controller
                  control={control}
                  name="soLuongKhach"
                  render={({ field }) => <Input {...field} type="number" />}
                />
                {errors.soLuongKhach && (
                  <p className="text-red-500">{errors.soLuongKhach.message}</p>
                )}
              </div>
              <div className="text-left mb-2">
                <label className="font-semibold">Mã người dùng * </label>
                <Controller
                  control={control}
                  name="maNguoiDung"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      // value={currentUser.user.id}
                    />
                  )}
                />
                {errors.maNguoiDung && (
                  <p className="text-red-500">{errors.maNguoiDung.message}</p>
                )}
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="text-right">
              <Button className="me-2" onClick={() => handleCanelAdd()}>
                Huỷ
              </Button>
              <Button
                loading={isLoading}
                htmlType="submit"
                className="log_btn color-bg text-white">
                {" "}
                Đăng ký{" "}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};
