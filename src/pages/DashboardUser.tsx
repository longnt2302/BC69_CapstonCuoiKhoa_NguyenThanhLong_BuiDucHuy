import { useQuery } from "@tanstack/react-query";
import { usersServices } from "../services";
import { Button } from "antd";
import moment from "moment";
import { Paginate } from "../components/ui/Paginate";
import { useState } from "react";

export const DashboardUser = () => {
  const { data } = useQuery({
    queryKey: ["listUser"],
    queryFn: async () => await usersServices.getUsers(),
  });

  // paginate
  const totalPost = data?.data.content.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const indexFirstPost = currentPage * postPerPage - postPerPage;
  const lastIndexPost = indexFirstPost + postPerPage;

  const listUser = data?.data.content.slice(indexFirstPost, lastIndexPost);

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
                  <Button>View Info</Button>
                  <Button className="mx-2">Edit</Button>
                  <Button>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
