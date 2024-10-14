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
      const viTri = await viTriServices.getViTri();
      return viTri?.data?.content?.find(
        (viTri) => viTri?.tenViTri === cityName
      );
    },
  });

  const maViTri = data?.id;

  const { data: dataRoom } = useQuery({
    queryKey: ["getRoomByViTri"],
    queryFn: async () => {
      const query = objectToQueryString({
        maViTri: maViTri,
      });
      const data = await roomServices.searchRoom(query);
      return data;
    },
  });

  return (
    <>
      <MainHead />

      <Breadcrumb currentPage={cityName} />

      <div className="container">
        <div className="clearfix"></div>
        <div className="listing-item-container grid md:grid-cols-3 gap-[16px] box-list_ic fl-wrap">
          {dataRoom?.data?.content?.map((room) => (
            <ItemRoom key={room?.id} roomDetail={room} cityName={cityName} />
          ))}
        </div>
      </div>
    </>
  );
};
