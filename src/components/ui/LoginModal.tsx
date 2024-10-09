import { Button, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "../../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useLogin } from "../../hooks/api";
import { Bounce, toast } from "react-toastify";

export const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useLogin();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<loginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchemaType) => {
    console.log("login: ", data);
    mutate(data);
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Login sucessfully !", {
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
    <form name=" loginform" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <label>
            Email Address *{" "}
            <span className="dec-icon">
              <i className="fal fa-user"></i>
            </span>
          </label>
          <Controller
            control={control}
            name="emailLG"
            render={({ field }) => <Input {...field} type="email" />}
          />
          {errors.emailLG && (
            <p className="text-red-500">{errors.emailLG.message}</p>
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
            name="passwordLG"
            render={({ field }) => <Input {...field} type="password" />}
          />
          {errors.passwordLG && (
            <p className="text-red-500">{errors.passwordLG.message}</p>
          )}
          <span className="eye z-10">
            <i className="fal fa-eye"></i>{" "}
          </span>
        </div>
      </div>
      <div className="clearfix"></div>
      <Button
        htmlType="submit"
        className="log_btn color-bg"
        loading={isLoading}>
        {" "}
        LogIn{" "}
      </Button>
    </form>
  );
};
