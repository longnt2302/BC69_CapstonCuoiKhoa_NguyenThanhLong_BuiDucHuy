import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { viTriSchema, viTriSchemaType } from "../../../schema/addViTri";
import { viTriServices } from "../../../services";
import { sleep } from "../../../utils";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { UploadFile } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const convertUrlToUploadFile = (url: string | undefined): UploadFile => {
  return {
    uid: "-1",
    name: url?.split("/").pop() || "image",
    status: "done",
    url,
  };
};

export const EditViTri = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  console.log("fileList: ", fileList);

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
  } = useForm<viTriSchemaType>({
    mode: "onChange",
    resolver: zodResolver(viTriSchema),
  });
  useEffect(() => {
    viTriServices
      .getViTriById(id)
      .then((res) => {
        const dataViTri = res.data.content;
        const fileUploadOld = convertUrlToUploadFile(dataViTri.hinhAnh);
        console.log("fileUploadOld: ", fileUploadOld);
        setFileList([fileUploadOld]);
        reset({
          id: dataViTri.id,
          tenViTri: dataViTri.tenViTri,
          tinhThanh: dataViTri.tinhThanh,
          quocGia: dataViTri.quocGia,
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [id, reset]);

  const onSubmit: SubmitHandler<viTriSchemaType> = async (data) => {
    console.log("data: ", data);
    const { id } = data;
    const unDataImage = {
      ...data,
      hinhAnh: undefined,
    };
    try {
      const responseData = await viTriServices.updateViTri(id, unDataImage);
      sleep(3000);
      const { id: maViTri } = responseData.data.content;

      // handle upload image
      if (fileList.length === 0) return;

      const formData = new FormData();

      formData.append("formFile", fileList[0].originFileObj as Blob);

      viTriServices
        .uploadImageViTri(maViTri, formData)
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
        })
        .catch((err) => {
          console.log(err);
        });

      toast.success("Success !!!", {
        position: "top-right",
        autoClose: 3000,
      });
      setFileList([]);
      navigate(-1);
    } catch (error) {
      console.log("error: ", error);
      toast.error("Update Failed !!!", {
        position: "top-right",
        autoClose: 3000,
      });
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
              render={({ field }) => <Input {...field} type="hidden" value={id} />}
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
                render={({ field }) => <Input {...field} placeholder="Nhập tên vị trí" />}
              />
              {errors?.tenViTri && <p className="text-red-500">{errors?.tenViTri?.message}</p>}
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
                render={({ field }) => <Input {...field} placeholder="Nhập tên tỉnh thành" />}
              />
              {errors?.tinhThanh && <p className="text-red-500">{errors?.tinhThanh?.message}</p>}
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
                render={({ field }) => <Input {...field} placeholder="Nhập tên quốc gia" />}
              />
              {errors?.quocGia && <p className="text-red-500">{errors?.quocGia?.message}</p>}
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
                      beforeUpload={() => false}
                    >
                      <Button type="primary" icon={<UploadOutlined />}>
                        Upload
                      </Button>
                    </Upload>
                  )}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <Button htmlType="submit" type="primary" className="btn color-bg float-btn">
                SUBMIT
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
