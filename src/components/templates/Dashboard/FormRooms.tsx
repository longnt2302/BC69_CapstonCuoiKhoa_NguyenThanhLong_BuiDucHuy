import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Select, Switch, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { roomSchema, roomSchemaType } from "../../../schema/addRoom";
import { roomServices, viTriServices } from "../../../services";
import { sleep } from "../../../utils";
import { useState } from "react";
import { toast } from "react-toastify";
import type { UploadFile } from "antd";
import { useQuery } from "@tanstack/react-query";
type AnyObject = { [key: string]: string | number | boolean };

export const FormRooms = () => {
  const { data: dataViTri } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      await sleep(1000);
      return viTriServices.getViTri();
    },
  });

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleOnChangeUpload = (info: UploadChangeParam) => {
    let newFileList = [...info.fileList];

    // Restrict to latest uploaded file (optional)
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<roomSchemaType>({
    mode: "onChange",
    resolver: zodResolver(roomSchema),
  });

  const onSubmit: SubmitHandler<roomSchemaType> = async (data) => {
    const newData: AnyObject = { ...data, hinhAnh: "undefined" };
    Object.keys(newData).forEach((key) => {
      const value = newData[key];
      if (value === undefined) newData[key] = false;
    });
    try {
      const responseData = await roomServices.addRoom(newData);
      sleep(3000);
      const { id: maPhong } = responseData.data.content;

      // handle upload image
      if (fileList.length === 0) return;

      const formData = new FormData();

      formData.append("formFile", fileList[0].originFileObj as Blob);

      roomServices
        .uploadImageRoom(maPhong, formData)
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
        })
        .catch((err) => {
          console.log(err);
        });

      toast("Success !!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFileList([]);
      reset();
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="dasboard-widget-box fl-wrap">
      <div className="custom-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <Controller
              control={control}
              name="id"
              defaultValue={0}
              render={({ field }) => <Input {...field} type="hidden" />}
            />

            <div className="col-sm-6">
              <label className="uppercase">
                Tên phòng
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="tenPhong"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tên phòng" />
                )}
              />
              {errors?.tenPhong && (
                <p className="text-red-500">{errors?.tenPhong?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Số lượng khách
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="khach"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số lượng khách" />
                )}
              />
              {errors?.khach && (
                <p className="text-red-500">{errors?.khach?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Phòng ngủ
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="phongNgu"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số phòng ngủ" />
                )}
              />
              {errors?.phongNgu && (
                <p className="text-red-500">{errors?.phongNgu?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Giường
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="giuong"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số giường" />
                )}
              />
              {errors?.giuong && (
                <p className="text-red-500">{errors?.giuong?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Phòng tắm
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="phongTam"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số phòng tắm" />
                )}
              />
              {errors?.phongTam && (
                <p className="text-red-500">{errors?.phongTam?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Mô tả
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="moTa"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập mô tả" />
                )}
              />
              {errors?.moTa && (
                <p className="text-red-500">{errors?.moTa?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Giá tiền
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="giaTien"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập giá tiền" />
                )}
              />
              {errors?.giaTien && (
                <p className="text-red-500">{errors?.giaTien?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">Hình ảnh</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="hinhAnh"
                  render={({ field: { onChange } }) => (
                    <Upload
                      listType="picture"
                      maxCount={1}
                      fileList={fileList}
                      defaultFileList={fileList}
                      onChange={(info) => {
                        handleOnChangeUpload(info); // Cập nhật fileList trong state
                        onChange(info.fileList); // Cập nhật giá trị trong React Hook Form
                      }}
                      beforeUpload={() => false}>
                      <Button type="primary" icon={<UploadOutlined />}>
                        Upload
                      </Button>
                    </Upload>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6">
              <label className="uppercase">Vị trí</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="maViTri"
                  render={({ field }) => (
                    <Select
                      {...field}
                      placeholder="Chọn vị trí"
                      style={{
                        width: "200px",
                        height: "100%",
                        backgroundColor: "#1B182B",
                        color: "white",
                      }}
                      options={dataViTri?.data?.content?.map((item) => ({
                        value: item.id,
                        label: item.tenViTri,
                      }))}
                    />
                  )}
                />
                {errors?.maViTri && (
                  <p className="text-red-500">{errors?.maViTri?.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-sm-2">
              <label className="uppercase">Máy giặt</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="mayGiat"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Bàn là</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="banLa"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Tivi</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="tivi"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Điều hoà</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="dieuHoa"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Wifi</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="wifi"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Bếp</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="bep"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-2">
              <label className="uppercase">Đỗ xe</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="doXe"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Hồ bơi</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="hoBoi"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <label className="uppercase">Bản ủi</label>
              <div className="text-start">
                <Controller
                  control={control}
                  name="banUi"
                  render={({ field }) => <Switch {...field} />}
                />
              </div>
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-sm-12">
              <Button
                htmlType="submit"
                type="primary"
                className="btn color-bg float-btn">
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
