import { BookingResponse, BookingType } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const bookingServices = {
  getListBooking: () => {
    return api.get<HttpResponse<BookingResponse[]>>(`/dat-phong`);
  },
  register: (payload: BookingType) => {
    return api.post<HttpResponse<BookingType>>(`/dat-phong`, payload);
  },
  editBooking: (id: number, payload: BookingResponse) =>
    api.put(`/dat-phong/${id}`, payload),
  deleteBooking: (id: number) => api.delete(`/dat-phong/${id}`),
};
