import { useQuery } from "@tanstack/react-query";
import { roomServices } from "../services";
import { ItemRoom } from "../components/templates/Dashboard";

export const DashboardRooms = () => {
  const { data } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      const dataRooms = await roomServices.getRooms();
      return dataRooms?.data?.content;
    },
  });
  return (
    <div className="dasboard-listing-box fl-wrap">
      <div className="dashboard-listings-wrap fl-wrap">
        <div className="row">
          {data?.map((room) => (
            <ItemRoom key={room?.id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};
