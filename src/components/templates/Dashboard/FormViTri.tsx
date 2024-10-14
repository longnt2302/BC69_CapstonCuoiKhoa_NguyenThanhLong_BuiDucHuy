import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Upload } from "antd";
import type { UploadFile } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { viTriSchema, viTriSchemaType } from "../../../schema/addViTri";
import { viTriServices } from "../../../services";
import { sleep } from "../../../utils";
import { useNavigate } from "react-router-dom";

export const FormViTri = () => {
  const navigate = useNavigate();
  const fileList: UploadFile[] = [];
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<viTriSchemaType>({
    mode: "onChange",
    resolver: zodResolver(viTriSchema),
  });

  const onSubmit: SubmitHandler<viTriSchemaType> = async (data) => {
    console.log("data: ", data);
    // try {
    //   await viTriServices.addViTri(data);
    //   console.log("Upload success");
    //   sleep(3000);
    //   navigate("/dashboard/listing");
    // } catch (error) {
    //   console.log("error: ", error);
    // }
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
                defaultValue={fileList}
                render={({ field }) => (
                  <Upload
                    {...field}
                    listType="picture"
                    defaultFileList={fileList}
                    fileList={fileList}
                    maxCount={1}
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
