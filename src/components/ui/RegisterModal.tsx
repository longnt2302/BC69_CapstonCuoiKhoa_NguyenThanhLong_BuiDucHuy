import { useForm, Controller } from "react-hook-form";
import {
  registerSchema,
  registerSchemaType,
} from "../../schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, DatePicker, Input } from "antd";
import moment from "moment";
import { useRegister } from "../../hooks/api";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import { LoginModal } from "./LoginModal";

export const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<registerSchemaType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      gender: true, // or false, depending on your default logic
    },
  });

  const { mutate } = useRegister();

  const onSubmit = (data: registerSchemaType) => {
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
      reset();
    }, 100);
  };

  return (
    <div className="main-register-wrap modal">
      <div className="reg-overlay"></div>
      <div className="main-register-holder tabs-act">
        <div className="main-register-wrapper modal_main fl-wrap">
          <div className="main-register-header color-bg">
            <div className="main-register-logo fl-wrap">
              <img src="./assets/images/white-logo.png" alt="..." />
            </div>
            <div className="main-register-bg">
              <div className="mrb_pin"></div>
              <div className="mrb_pin mrb_pin2"></div>
            </div>
            <div className="mrb_dec"></div>
            <div className="mrb_dec mrb_dec2"></div>
          </div>
          <div className="main-register">
            <div className="close-reg">
              <i className="fal fa-times"></i>
            </div>
            <ul className="tabs-menu fl-wrap no-list-style">
              <li className="current">
                <a href="#tab-1">
                  <i className="fal fa-sign-in-alt"></i> Đăng nhập
                </a>
              </li>
              <li>
                <a href="#tab-2">
                  <i className="fal fa-user-plus"></i> Đăng ký
                </a>
              </li>
            </ul>

            <div className="tabs-container">
              <div className="tab">
                <div id="tab-1" className="tab-content first-tab">
                  <div className="custom-form">
                    <LoginModal />
                  </div>
                </div>

                <div className="tab">
                  <div id="tab-2" className="tab-content">
                    <div className="custom-form">
                      <form
                        name="registerform"
                        className="main-register-form"
                        id="main-register-form2"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <div>
                            <label>
                              Mã *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-id-badge"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="id"
                              render={({ field }) => (
                                <Input {...field} type="text" />
                              )}
                            />
                            {errors.id && (
                              <p className="text-red-500">
                                {errors.id.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label>
                              Tên *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-user"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="name"
                              render={({ field }) => (
                                <Input {...field} type="text" />
                              )}
                            />
                            {errors.name && (
                              <p className="text-red-500">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label>
                              Email *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-envelope"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="email"
                              render={({ field }) => (
                                <Input {...field} type="email" />
                              )}
                            />
                            {errors.email && (
                              <p className="text-red-500">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div className="pass-input-wrap fl-wrap">
                            <label>
                              Mật khẩu *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-key"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="password"
                              render={({ field }) => (
                                <Input {...field} type="password" />
                              )}
                            />
                            {errors.password && (
                              <p className="text-red-500">
                                {errors.password.message}
                              </p>
                            )}
                            <span className="eye z-10">
                              <i className="fal fa-eye"></i>{" "}
                            </span>
                          </div>
                          <div>
                            <label>
                              Số điện thoại *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-phone"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="phone"
                              render={({ field }) => (
                                <Input {...field} type="text" />
                              )}
                            />
                            {errors.phone && (
                              <p className="text-red-500">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label>
                              Ngày sinh *{" "}
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
                                    field.value
                                      ? moment(field.value, "DD/MM/YYYY")
                                      : null
                                  }
                                  onChange={(date) =>
                                    field.onChange(
                                      date ? date.format("DD/MM/YYYY") : null
                                    )
                                  }
                                />
                              )}
                            />
                            {errors.birthday && (
                              <p className="text-red-500">
                                {errors.birthday.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label>
                              Quyền *{" "}
                              <span className="dec-icon">
                                <i className="fal fa-user"></i>
                              </span>
                            </label>
                            <Controller
                              control={control}
                              name="role"
                              render={({ field }) => (
                                <Input {...field} type="text" />
                              )}
                            />
                            {errors.role && (
                              <p className="text-red-500">
                                {errors.role.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label>Nam * </label>
                            <Controller
                              control={control}
                              name="gender"
                              render={({ field }) => (
                                <Checkbox
                                  {...field}
                                  checked={
                                    field.value !== undefined
                                      ? field.value
                                      : true
                                  } // Set default value to true
                                  onChange={(e) =>
                                    field.onChange(e.target.checked)
                                  }
                                />
                              )}
                            />
                            {errors.gender && (
                              <p className="text-red-500">
                                {errors.gender.message}
                              </p>
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="log-separator fl-wrap">
                <span>or</span>
              </div>
              <div className="soc-log fl-wrap">
                <p>For faster login or register use your social account.</p>
                <a href="#" className="facebook-log">
                  {" "}
                  Facebook
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
