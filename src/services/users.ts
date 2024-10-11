import { userAPIResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const usersServices = {
  getUsers: () => api.get<HttpResponse<userAPIResponse[]>>("/users"),
};
