import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Upload } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  imageUploadSchema,
  imageUploadSchemaType,
} from "../../../schema/imageViTri";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import { useState } from "react";
import axios from "axios";
import { TOKEN } from "../../../constants";

export const FormImageViTri = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleOnChangeUpload = (info: UploadChangeParam) => {
    let newFileList = [...info.fileList];

    // Restrict to latest uploaded file (optional)
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<imageUploadSchemaType>({
    resolver: zodResolver(imageUploadSchema),
  });

  const onSubmit: SubmitHandler<imageUploadSchemaType> = async (data) => {
    const { hinhAnh } = data;
    const formData = new FormData();

    const uploadedFiles = hinhAnh[0].originFileObj;

    formData.append("hinhAnh", uploadedFiles);
    try {
      const response = await axios.post(
        `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/upload-hinh-vitri?maViTri=3328`,
        formData,
        {
          headers: {
            token: TOKEN.token,
            tokenCyberSoft: TOKEN.tokenCybersoft,
          },
        }
      );
      console.log(response);
    } catch (error: any) {
      console.log("🚀 ~ resUpload ~ error:", error);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="hinhAnh"
        control={control}
        render={({ field: { onChange } }) => (
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
        )}
      />

      {/* Hiển thị lỗi nếu có */}
      <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </form>
  );
};
