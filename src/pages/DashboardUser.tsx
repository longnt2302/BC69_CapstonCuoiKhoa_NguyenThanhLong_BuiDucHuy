import { useQuery } from "@tanstack/react-query";
import { usersServices } from "../services";
import moment from "moment";
import { Paginate } from "../components/ui/Paginate";
import { useState } from "react";
import { ModalAdmin } from "../components/ui/ModalAdmin";

export const DashboardUser = () => {
  const { data } = useQuery({
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

  const handleInfo = (event: any) => {
    console.log("event: ", event.target.name);
    setIsShowModal(true);
  };
  const handleEdit = (event: any) => {
    console.log("event: ", event.target.name);
    setIsShowModal(true);
  };
  const handleDelete = (event: any) => {
    console.log("event: ", event.target.name);
    setIsShowModal(true);
  };

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Birthday
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listUser?.map((user) => (
              <tr className="bg-gray-800 border-b text-white">
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
                    onClick={(event: any) => handleInfo(event)}
                    name="info">
                    View Info
                  </button>
                  <button
                    className="mx-2 border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                    onClick={(event: any) => handleEdit(event)}
                    name="edit">
                    Edit
                  </button>
                  <button
                    className=" border rounded-md px-5 py-2 hover:bg-white hover:text-gray-800 transition-all"
                    onClick={(event: any) => handleDelete(event)}
                    name="delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalAdmin isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
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
