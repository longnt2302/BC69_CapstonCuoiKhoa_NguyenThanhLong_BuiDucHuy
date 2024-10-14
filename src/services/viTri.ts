import { viTriAPIResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const viTriServices = {
  getViTri: () => api.get<HttpResponse<viTriAPIResponse[]>>("/vi-tri"),
  searchViTri: (query = "") => api.get<HttpResponse<viTriAPIResponse>>(`/vi-tri/phan-trang-tim-kiem${query}`),
  deleteViTri: (id: number) => api.delete(`/vi-tri/${id}`),
  addViTri: (dataForm = {}) => api.post<HttpResponse<viTriAPIResponse>>("/vi-tri/", dataForm),
  uploadImageViTri: (maViTri: number, dataForm: any) =>
    api.post<HttpResponse<viTriAPIResponse>>(`/vi-tri/upload-hinh-vitri?maViTri=${maViTri}`, dataForm),
};
