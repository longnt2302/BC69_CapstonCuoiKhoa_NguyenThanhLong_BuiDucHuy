import { useMutation } from "@tanstack/react-query";
import { bookingServices } from "../../services";
import { BookingResponse } from "../../@types";

type EditBookingArgs = {
  id: number;
  payload: BookingResponse;
};
export const bookingEdit = () => {
  const mutation = useMutation({
    mutationKey: ["bookingEdit"],
    mutationFn: async ({ id, payload }: EditBookingArgs) =>
      await bookingServices.editBooking(id, payload),
  });
  return mutation;
};
