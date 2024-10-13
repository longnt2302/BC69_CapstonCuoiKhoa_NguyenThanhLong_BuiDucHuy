import { User } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const usersServices = {
  getUsers: () => api.get<HttpResponse<User[]>>("/users"),
  deleteUser: (id: number) => api.delete(`/users?id=${id}`),
};
