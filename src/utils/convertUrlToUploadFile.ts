import type { UploadFile } from "antd";

export const convertUrlToUploadFile = (url: string | undefined): UploadFile => {
  return {
    uid: "-1",
    name: url?.split("/").pop() || "image",
    status: "done",
    url,
  };
};
