import {
  DatePicker,
  Form,
  Input,
  Modal,
  FormInstance,
  Checkbox,
  Button,
} from "antd";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { User, userEditType } from "../../@types";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "../../schema";
import { useRegister } from "../../hooks/api";
import { Bounce, toast } from "react-toastify";
import { userEdit } from "../../hooks/api/userEdit";

type Props = {
  isShowModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  typeOfModal: string;
  infoUser: User | undefined;
};

export const ModalAdmin = (props: Props) => {
  const { isShowModal, setIsShowModal, typeOfModal, infoUser } = props;

  const formRef = useRef<FormInstance>(null);

  useEffect(() => {
    formRef.current?.setFieldsValue({
      id: infoUser?.id,
      name: infoUser?.name || "",
      email: infoUser?.email || "",
      birthday: infoUser?.birthday
        ? moment(infoUser.birthday, "DD/MM/YYYY")
        : null,
      phone: infoUser?.phone || "",
      role: infoUser?.role || "",
    });
  }, [infoUser]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registerSchemaType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      gender: true, // or false, depending on your default logic
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const { mutate: Editmutate } = useRegister();
  const onSubmit = (data: registerSchemaType) => {
    Editmutate(data);
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

  const handleCanelAdd = () => {
    setIsShowModal(false);
    reset();
  };

  const handleCanel = () => {
    setIsShowModal(false);
    reset();
  };

  const { mutate: mutateEdit } = userEdit();
  const onFinish = (data: userEditType) => {
    mutateEdit({ id: data.id, payload: data });
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
          cancelText="Close"
          okButtonProps={{ style: { display: "none" } }}
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Info User
          </h2>
          <Form ref={formRef}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  ID
                </label>
                <Form.Item name="id">
                  <Input disabled />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  User Name
                </label>
                <Form.Item name="name">
                  <Input disabled />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Email
                </label>
                <Form.Item name="email">
                  <Input disabled />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Birthday
                </label>
                <Form.Item name="birthday">
                  <DatePicker
                    className="w-full noBG"
                    format={"DD/MM/YYYY"}
                    disabled
                  />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Phone Number
                </label>
                <Form.Item name="phone">
                  <Input disabled />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Role
                </label>
                <Form.Item name="role">
                  <Input disabled />
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
            Edit User
          </h2>
          <Form ref={formRef} onFinish={onFinish}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  ID
                </label>
                <Form.Item name="id">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  User Name
                </label>
                <Form.Item name="name">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Email
                </label>
                <Form.Item name="email">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Birthday
                </label>
                {/* <Form.Item name="birthday">
                  <DatePicker className="w-full noBG" format={"DD/MM/YYYY"} />
                </Form.Item> */}
                <Form.Item name="birthday">
                  <DatePicker className="w-full noBG" format="DD/MM/YYYY" />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Phone Number
                </label>
                <Form.Item name="phone">
                  <Input />
                </Form.Item>
              </div>
              <div className="mb-2 text-left">
                <label htmlFor="" className="font-medium">
                  Role
                </label>
                <Form.Item name="role">
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
            Add New User
          </h2>
          <form
            name="registerform"
            className="main-register-form"
            id="main-register-form2"
            onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
              <div className="text-left">
                <label>ID * </label>
                <Controller
                  control={control}
                  name="id"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.id && (
                  <p className="text-red-500">{errors.id.message}</p>
                )}
              </div>
              <div className="text-left">
                <label>Name * </label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="text-left">
                <label>Email Address * </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => <Input {...field} type="email" />}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="pass-input-wrap fl-wrap text-left">
                <label>Password * </label>
                <div className="relative">
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => <Input {...field} type="text" />}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                  {/* <span className="eye z-10 bottom-0 top-1/2 right-2 -translate-y-1/2">
                    <i className="fal fa-eye"></i>{" "}
                  </span> */}
                </div>
              </div>
              <div className="text-left">
                <label>Phone Number * </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div className="text-left">
                <label>BirthDay * </label>
                <Controller
                  control={control}
                  name="birthday"
                  render={({ field }) => (
                    <DatePicker
                      className="w-full noBG"
                      {...field}
                      format="DD/MM/YYYY"
                      value={
                        field.value ? moment(field.value, "DD/MM/YYYY") : null
                      }
                      onChange={(date) =>
                        field.onChange(date ? date.format("DD/MM/YYYY") : null)
                      }
                    />
                  )}
                />
                {errors.birthday && (
                  <p className="text-red-500">{errors.birthday.message}</p>
                )}
              </div>
              <div className="text-left">
                <label>Role * </label>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
              <div className="text-left">
                <label>Male * </label>
                <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      checked={field.value !== undefined ? field.value : true} // Set default value to true
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
              </div>
            </div>
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
