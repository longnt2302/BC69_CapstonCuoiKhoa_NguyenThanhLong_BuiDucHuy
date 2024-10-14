import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { viTriSchema, viTriSchemaType } from "../../../schema/addViTri";
import { viTriServices } from "../../../services";
import { sleep } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { TOKEN } from "../../../constants";

export const FormViTri = () => {
  const navigate = useNavigate();

  const [fileList, setFileList] = useState<any[]>([]);

  const handleOnChangeUpload = (info: UploadChangeParam) => {
    let newFileList = [...info.fileList];

    // Restrict to latest uploaded file (optional)
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  // const [maViTri, setMaViTri] = useState<number | undefined>();
  // console.log("🚀 ~ FormViTri ~ maViTri:", maViTri);

  // useEffect(() => {
  //   console.log(fileList);
  //   if (fileList.length === 0) return;

  //   const resUpload = async () => {
  //     const formData = new FormData();

  //     const uploadedFiles = fileList[0].originFileObj;

  //     formData.append("hinhAnh", uploadedFiles);
  //     // try {
  //     //   const resData = await axios.post(
  //     //     `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/upload-hinh-vitri?maViTri=${maViTri}`,
  //     //     formData,
  //     //     {
  //     //       headers: {
  //     //         token: TOKEN.token,
  //     //         tokenCyberSoft: TOKEN.tokenCybersoft,
  //     //       },
  //     //     }
  //     //   );
  //     //   return resData;
  //     // } catch (error: any) {
  //     //   console.log("🚀 ~ resUpload ~ error:", error);
  //     // }
  //   };
  //   resUpload();
  // }, [maViTri]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<viTriSchemaType>({
    mode: "onChange",
    resolver: zodResolver(viTriSchema),
  });

  const onSubmit: SubmitHandler<viTriSchemaType> = async (data) => {
    const unDataImage = {
      ...data,
      hinhAnh: undefined,
    };
    try {
      const responseData = await viTriServices.addViTri(unDataImage);
      sleep(3000);
      const { id: maViTri } = responseData?.data?.content;

      // // handle upload image
      if (fileList.length === 0) return;

      const formData = new FormData();
      formData.append("hinhAnh", fileList[0].originFileObj);

      viTriServices
        .uploadImageViTri(maViTri, formData)
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
        })
        .catch((err) => {
          console.log(err);
        });

      // sleep(5000);
      // navigate("/dashboard/listing");
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
                Tên vị trí
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="tenViTri"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tên vị trí" />
                )}
              />
              {errors?.tenViTri && (
                <p className="text-red-500">{errors?.tenViTri?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Tỉnh thành
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="tinhThanh"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tên tỉnh thành" />
                )}
              />
              {errors?.tinhThanh && (
                <p className="text-red-500">{errors?.tinhThanh?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Quốc gia
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              <Controller
                control={control}
                name="quocGia"
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tên quốc gia" />
                )}
              />
              {errors?.quocGia && (
                <p className="text-red-500">{errors?.quocGia?.message}</p>
              )}
            </div>
            <div className="col-sm-6">
              <label className="uppercase">
                Hình ảnh
                <span className="dec-icon">
                  <i className="far fa-long-arrow-alt-right"></i>
                </span>
              </label>
              {/* <Controller
                control={control}
                name="hinhAnh"
                render={({ field }) => <Input {...field} placeholder="Nhập url hình ảnh" />}
              />
              {errors?.hinhAnh && <p className="text-red-500">{errors?.hinhAnh?.message}</p>} */}
              <Controller
                control={control}
                name="hinhAnh"
                render={({ field: { onChange } }) => (
                  <Upload
                    listType="picture"
                    maxCount={1}
                    fileList={fileList}
                    onChange={(info) => {
                      handleOnChangeUpload(info); // Cập nhật fileList trong state
                      onChange(info.fileList); // Cập nhật giá trị trong React Hook Form
                    }}
                    beforeUpload={() => false}
                  >
                    <Button type="primary" icon={<UploadOutlined />}>
                      Upload
                    </Button>
                  </Upload>
                )}
              />
            </div>
            <div className="col-sm-12">
              <Button
                htmlType="submit"
                type="primary"
                className="btn color-bg float-btn"
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
