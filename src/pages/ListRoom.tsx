import { useParams } from "react-router-dom";
import { MainHead } from "../components/templates/listRoom";
import { Breadcrumb } from "../components/ui";
import { ItemRoom } from "../components/templates/parts";
import { useQuery } from "@tanstack/react-query";
import { objectToQueryString, sleep } from "../utils";
import { roomServices, viTriServices } from "../services";

export const ListRoom = () => {
  const { cityName } = useParams<string>();

  const { data } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      await sleep(1000);
      return viTriServices.getViTri();
    },
  });

  const filterData = data?.data?.content?.find(
    (viTri) => viTri?.tenViTri === cityName
  );

  console.log("🚀 ~ ListRoom ~ filterData:", filterData?.id);
  const { data: dataRoom } = useQuery({
    queryKey: ["getRoomByViTri"],
    queryFn: async () => {
      const query = objectToQueryString({
        maViTri: filterData?.id,
      });
      return roomServices.searchRoom(query);
    },
  });

  console.log(dataRoom?.data?.content);
  return (
    <>
      <MainHead />

      <Breadcrumb currentPage={cityName} />

      <div className="container">
        <div className="clearfix"></div>
        <div className="flex flex-row">
          {dataRoom?.data?.content?.map((room) => (
            <ItemRoom key={room?.id} roomDetail={room} />
          ))}
        </div>
      </div>
    </>
  );
};
