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
  editUser: (id: number, payload: BookingResponse) =>
    api.put(`/users/${id}`, payload),
};
