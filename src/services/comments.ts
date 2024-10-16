import { CommentResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const commentServices = {
  getCommentById: (maPhong: number | undefined) =>
    api.get<HttpResponse<CommentResponse[]>>(`/binh-luan/lay-binh-luan-theo-phong/${maPhong}`),
  getComments: () => api.get<HttpResponse<CommentResponse[]>>("/binh-luan/"),
};
