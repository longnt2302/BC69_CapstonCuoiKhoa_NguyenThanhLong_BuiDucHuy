import { useQuery } from "@tanstack/react-query";
import { usersServices } from "../services";
import moment from "moment";
import { Paginate } from "../components/ui/Paginate";
import { ChangeEvent, useRef, useState } from "react";
import { ModalAdmin } from "../components/ui/ModalAdmin";
import { User } from "../@types";
import { Bounce, toast } from "react-toastify";
import { Button } from "antd";

export const DashboardUser = () => {
  const { data, refetch } = useQuery({
    queryKey: ["listUser"],
    queryFn: async () => await usersServices.getUsers(),
  });

  // paginate
  const totalPost = data?.data.content.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);
  const indexFirstPost = currentPage * postPerPage - postPerPage;
  const lastIndexPost = indexFirstPost + postPerPage;

  const listUser = data?.data.content.slice(indexFirstPost, lastIndexPost);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [typeOfModal, setTypeOfModal] = useState<string>("");
  const [infoUser, setInfoUser] = useState<User>();

  const handleInfo = (event: any, user: User) => {
    setInfoUser(user);
    setIsShowModal(true);
    setTypeOfModal(event.target.name);
  };
  const handleEdit = (event: any, user: User) => {
    setInfoUser(user);
    setIsShowModal(true);
    setTypeOfModal(event.target.name);
  };
  const handleDelete = async (user: User) => {
    try {
      // Gọi API để xóa người dùng
      await usersServices.deleteUser(user.id);

      // Hiển thị thông báo thành công
      toast(`Delete user id: ${user.id} success!`, {
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
      toast(`Error deleting user id: ${user.id}`, {
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

  const [textSearch, setTextSearch] = useState<User[] | undefined>([]);
  console.log("textSearch: ", !!textSearch);

  const inputSearchRef = useRef<HTMLInputElement | null>(null);

  const handleSearchAdmin = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length === 0) {
      setTextSearch([]);
      return;
    }
    const listSearch = data?.data.content.filter((item) =>
      item.name.toLowerCase().trim().includes(value.toLowerCase().trim())
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
            Add User
          </button>
        </div>
        <div className="mb-6">
          <input
            ref={inputSearchRef}
            type="text"
            placeholder="Tìm tên người dùng..."
            className="w-full adminInputSearch p-2"
            onChange={(e) => handleSearchAdmin(e)}
          />
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên người dùng
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày sinh
              </th>
              <th scope="col" className="px-6 py-3">
                Quyền
              </th>
              <th scope="col" className="px-6 py-3">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {textSearch?.length !== 0 && textSearch
              ? textSearch.map((user) => (
                  <tr className="bg-gray-800 border-b text-white" key={user.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap">
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {moment(user.birthday, "DD/MM/YYYY").format("DD/MM/YYYY")}
                    </td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleInfo(event, user)}
                        name="info">
                        Xem thông tin
                      </button>
                      <button
                        className="mx-2 border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleEdit(event, user)}
                        name="edit">
                        Sửa
                      </button>
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => handleDelete(user)}
                        name="delete">
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))
              : listUser &&
                listUser?.map((user) => (
                  <tr className="bg-gray-800 border-b text-white" key={user.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap">
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {moment(user.birthday, "DD/MM/YYYY").format("DD/MM/YYYY")}
                    </td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleInfo(event, user)}
                        name="info">
                        Xem thông tin
                      </button>
                      <button
                        className="mx-2 border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={(event: any) => handleEdit(event, user)}
                        name="edit">
                        Sửa
                      </button>
                      <button
                        className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                        onClick={() => handleDelete(user)}
                        name="delete">
                        Xoá
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <ModalAdmin
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        typeOfModal={typeOfModal}
        infoUser={infoUser}
      />
      <div className="mb-5 mt-9">
        <Paginate
          total={totalPost}
          current={currentPage}
          setCurrent={setCurrentPage}
          numberPost={postPerPage}
        />
      </div>
    </>
  );
};
