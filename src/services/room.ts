import { RoomResponse } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const roomServices = {
  searchRoom: (query = "") =>
    api.get<HttpResponse<RoomResponse[]>>(
      `/phong-thue/lay-phong-theo-vi-tri${query}`
    ),
  getRoomById: (id: string | undefined) =>
    api.get<HttpResponse<RoomResponse>>(`/phong-thue/${id}`),
  getRooms: () => api.get<HttpResponse<RoomResponse[]>>("phong-thue"),
  deleteRoom: (id: number) => api.delete(`/phong-thue/${id}`),
};
