import { BookingType } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
});

export const bookingServices = {
  register: (payload: BookingType) => {
    return api.post<HttpResponse<BookingType>>(`/dat-phong`, payload);
  },
};
