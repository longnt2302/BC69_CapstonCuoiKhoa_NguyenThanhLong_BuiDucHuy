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
import { User } from "../../@types";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "../../schema";
import { useRegister } from "../../hooks/api";
import { Bounce, toast } from "react-toastify";

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

  const { mutate } = useRegister();
  const onSubmit = (data: registerSchemaType) => {
    console.log("data: ", data);
    // useRegister(data);
    mutate(data);
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Register sucessfully !", {
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
  };

  return (
    <>
      {typeOfModal === "info" ? (
        <Modal
          open={isShowModal}
          onCancel={() => setIsShowModal(false)}
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
          onCancel={() => setIsShowModal(false)}
          onOk={() => setIsShowModal(false)}
          okText="Save Change"
          cancelText="Cancel"
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Edit User
          </h2>
          <Form ref={formRef}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
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
                <Form.Item name="birthday">
                  <DatePicker className="w-full noBG" format={"DD/MM/YYYY"} />
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
          </Form>
        </Modal>
      ) : (
        <Modal
          open={isShowModal}
          onCancel={() => setIsShowModal(false)}
          onOk={() => setIsShowModal(false)}
          okText="Add"
          cancelText="Cancel"
          width={800}>
          <h2 className="text-center text-[30px] font-semibold mb-5">
            Add New User
          </h2>
          <Form
            name="registerform"
            className="main-register-form"
            id="main-register-form2"
            // onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label>
                  ID *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-id-badge"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="id"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.id && (
                  <p className="text-red-500">{errors.id.message}</p>
                )}
              </div>
              <div>
                <label>
                  Name *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-user"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label>
                  Email Address *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-envelope"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => <Input {...field} type="email" />}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="pass-input-wrap fl-wrap">
                <label>
                  Password *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-key"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => <Input {...field} type="password" />}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <span className="eye z-10">
                  <i className="fal fa-eye"></i>{" "}
                </span>
              </div>
              <div>
                <label>
                  Phone Number *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-phone"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label>
                  BirthDay *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-birthday-cake"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="birthday"
                  render={({ field }) => (
                    <DatePicker
                      className="w-full"
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
              <div>
                <label>
                  Role *{" "}
                  <span className="dec-icon">
                    <i className="fal fa-user"></i>
                  </span>
                </label>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => <Input {...field} type="text" />}
                />
                {errors.role && (
                  <p className="text-red-500">{errors.role.message}</p>
                )}
              </div>
              <div>
                <label>
                  Male *{" "}
                  {/* <span className="dec-icon">
                                <i className="fal fa-user"></i>
                              </span> */}
                </label>
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
            <div className="clearfix"></div>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="log_btn color-bg">
              {" "}
              Đăng ký{" "}
            </Button>
          </Form>
        </Modal>
      )}
    </>
  );
};
