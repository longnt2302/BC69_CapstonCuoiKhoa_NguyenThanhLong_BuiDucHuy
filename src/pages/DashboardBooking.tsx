import { useQuery } from "@tanstack/react-query";
import { bookingServices } from "../services";
import { ChangeEvent, useRef, useState } from "react";
import { BookingResponse } from "../@types";
import { Paginate } from "../components/ui";
import moment from "moment";
import { ModalBookingAdmin } from "../components/ui/ModalBookingAdmin";
import { Bounce, toast } from "react-toastify";

export const DashboardBooking = () => {
  const { data, refetch } = useQuery({
    queryKey: ["listBooking"],
    queryFn: async () => await bookingServices.getListBooking(),
  });

  // paginate
  const totalPost = data?.data.content.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  const indexFirstPost = currentPage * postPerPage - postPerPage;
  const lastIndexPost = indexFirstPost + postPerPage;

  const listBooking = data?.data.content.slice(indexFirstPost, lastIndexPost);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [typeOfModal, setTypeOfModal] = useState<string>("");
  const [infoBooking, setinfoBooking] = useState<BookingResponse>();

  const handleInfo = (event: any, booking: BookingResponse) => {
    setinfoBooking(booking);
    setIsShowModal(true);
    setTypeOfModal(event.target.name);
  };
  const handleEdit = (event: any, booking: BookingResponse) => {
    setinfoBooking(booking);
    setIsShowModal(true);
    setTypeOfModal(event.target.name);
  };
  const handleDelete = async (booking: BookingResponse) => {
    try {
      // Gọi API để xóa người dùng
      await bookingServices.deleteBooking(Number(booking.id));
      // Hiển thị thông báo thành công
      toast(`Xoá đặt phòng id: ${booking.id} thành công!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      // Làm mới dữ liệu
      refetch();
    } catch (error) {
      // Xử lý lỗi nếu có
      toast(`lỗi xoá đặtphòng id: ${booking.id}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const [textSearch, setTextSearch] = useState<BookingResponse[] | undefined>(
    []
  );

  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  const handleSearchAdmin = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length === 0) {
      setTextSearch([]);
      return;
    }
    const listSearch = data?.data.content.filter(
      (item) =>
        // item.maPhong.toLowerCase().trim().includes(value.toLowerCase().trim())
        Number(item.maPhong) === Number(value)
    );
    setTextSearch(listSearch);
  };

  const handleAddUser = (event: any) => {
    setIsShowModal(true);
    setTypeOfModal(event.target.name);
  };
  return (
    <>
      <div className="relative overflow-x-auto">
        <div className="mb-6 text-left">
          <button
            onClick={(event) => handleAddUser(event)}
            name="add"
            className="border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all text-white">
            Add Booking
          </button>
        </div>
        <div className="mb-6">
          <input
            ref={inputSearchRef}
            type="text"
            placeholder="Tìm kiếm đặt phòng..."
            className="w-full adminInputSearch p-2"
            onChange={(e) => handleSearchAdmin(e)}
          />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã phòng
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày đi
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày đến
              </th>
              <th scope="col" className="px-6 py-3">
                Số lượng khách
              </th>
              <th scope="col" className="px-6 py-3">
                Mã người dùng
              </th>
              <th scope="col" className="px-6 py-3">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {textSearch?.length !== 0 && textSearch
              ? textSearch.map((booking) => (
                  <tr
                    className="bg-gray-800 border-b text-white"
                    key={booking.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap">
                      {booking.maPhong}
                    </th>
                    <td className="px-6 py-4">
                      {moment(booking.ngayDi, "DD/MM/YYYY").format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {moment(booking.ngayDen, "DD/MM/YYYY").format(
                        "DD/MM/YYYY"
                      )}
                    </td>
                    <td className="px-6 py-4">{booking.soLuongKhach}</td>
                    <td className="px-6 py-4">{booking.maNguoiDung}</td>
                    <td className="px-6 py-4">
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleInfo(event, booking)}
                        name="info">
                        Xem thông tin
                      </button>
                      <button
                        className="mx-2 border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleEdit(event, booking)}
                        name="edit">
                        Sửa
                      </button>
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => handleDelete(booking)}
                        name="delete">
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))
              : listBooking &&
                listBooking?.map((booking) => (
                  <tr
                    className="bg-gray-800 border-b text-white"
                    key={booking.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap">
                      {booking.maPhong}
                    </th>
                    <td className="px-6 py-4">
                      {
                        // moment(booking.ngayDi, "DD/MM/YYYY").format(
                        //   "DD/MM/YYYY"
                        // )
                        booking.ngayDen
                      }
                    </td>
                    <td className="px-6 py-4">
                      {
                        // moment(booking.ngayDen, "DD/MM/YYYY").format(
                        //   "DD/MM/YYYY"
                        // )
                        booking.ngayDi
                      }
                    </td>
                    <td className="px-6 py-4">{booking.soLuongKhach}</td>
                    <td className="px-6 py-4">{booking.maNguoiDung}</td>
                    <td className="px-6 py-4">
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleInfo(event, booking)}
                        name="info">
                        Xem thông tin
                      </button>
                      <button
                        className="mx-2 border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleEdit(event, booking)}
                        name="edit">
                        Sửa
                      </button>
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => handleDelete(booking)}
                        name="delete">
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <ModalBookingAdmin
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        typeOfModal={typeOfModal}
        infoBooking={infoBooking}
      />
      <div className="mb-5 mt-9">
        {
          <Paginate
            total={totalPost}
            current={currentPage}
            setCurrent={setCurrentPage}
            numberPost={postPerPage}
          />
        }
      </div>
    </>
  );
};
