import { useMutation } from "@tanstack/react-query";
import { bookingServices } from "../../services";
import { BookingType } from "../../@types";

export const useBooking = () => {
  const mutation = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (payload: BookingType) =>
      await bookingServices.register(payload),
  });
  return mutation;
};
