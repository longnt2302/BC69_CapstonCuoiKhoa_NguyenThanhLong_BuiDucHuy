import { viTriAPIResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const viTriServices = {
  getViTri: () => api.get<HttpResponse<viTriAPIResponse[]>>("/vi-tri"),
  searchViTri: (query = "") =>
    api.get<HttpResponse<viTriAPIResponse>>(
      `/vi-tri/phan-trang-tim-kiem${query}`
    ),
  deleteViTri: (id: number) => api.delete(`/vi-tri/${id}`),
};
