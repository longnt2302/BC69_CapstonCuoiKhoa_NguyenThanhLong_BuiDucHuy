import { viTriAPIResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const viTriServices = {
  getViTri: async () => api.get<HttpResponse<viTriAPIResponse[]>>("/vi-tri"),
};
