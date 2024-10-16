import { viTriAPIResponse } from "../@types";
import { viTriSearchAPIResponse } from "../@types/viTriSearchResponse";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const viTriServices = {
  getViTri: () => api.get<HttpResponse<viTriAPIResponse[]>>("/vi-tri"),
  getViTriById: (id: string | undefined) => api.get<HttpResponse<viTriAPIResponse>>(`/vi-tri/${id}`),
  searchViTri: (query = "") => api.get<HttpResponse<viTriSearchAPIResponse>>(`/vi-tri/phan-trang-tim-kiem${query}`),
  deleteViTri: (id: number) => api.delete(`/vi-tri/${id}`),
  addViTri: (dataForm = {}) => api.post<HttpResponse<viTriAPIResponse>>("/vi-tri/", dataForm),
  uploadImageViTri: (maViTri: number, dataForm: FormData) =>
    api.post<HttpResponse<viTriAPIResponse>>(`/vi-tri/upload-hinh-vitri?maViTri=${maViTri}`, dataForm),
  updateViTri: (maViTri: number, dataForm = {}) =>
    api.put<HttpResponse<viTriAPIResponse>>(`/vi-tri/${maViTri}`, dataForm),
};
