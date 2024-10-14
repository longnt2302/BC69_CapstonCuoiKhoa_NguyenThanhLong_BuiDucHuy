import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Upload } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { imageUploadSchema, imageUploadSchemaType } from "../../../schema/imageViTri";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile } from "antd";

export const FormImageViTri = () => {
  const fileList: UploadFile[] = [];

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<imageUploadSchemaType>({
    resolver: zodResolver(imageUploadSchema),
  });

  const onSubmit: SubmitHandler<imageUploadSchemaType> = async (data) => {
    console.log("data: ", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="hinhAnh"
        control={control}
        defaultValue={fileList}
        render={({ field: { onChange, value } }) => (
          <Upload
            fileList={value as UploadFile[]}
            beforeUpload={(file) => {
              // Thêm tệp vào danh sách file mà react-hook-form quản lý
              onChange([...value, file]);
              return false; // Ngăn không upload trực tiếp lên server
            }}
            onRemove={(file) => {
              // Loại bỏ tệp khi người dùng xóa file
              onChange(value.filter((v) => v.uid !== file.uid));
            }}
            multiple
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        )}
      />
      {errors.images && <p style={{ color: "red" }}>{errors.images.message}</p>} {/* Hiển thị lỗi nếu có */}
      <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
        Submit
      </Button>
    </form>
  );
};
