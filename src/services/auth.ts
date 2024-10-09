import { DataTypeLogin, DataTypeRegister } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const authServices = {
  register: (payload: DataTypeRegister) => {
    return api.post<HttpResponse<DataTypeRegister>>(`/auth/signup`, payload);
  },
  login: (payload: DataTypeLogin) => {
    return api.post<HttpResponse<DataTypeLogin>>(`/auth/signin`, payload);
  },
};
