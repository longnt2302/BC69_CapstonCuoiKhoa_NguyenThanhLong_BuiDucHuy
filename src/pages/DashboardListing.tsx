import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../services";
import { ItemViTri } from "../components/templates/Dashboard";

export const DashboardListing = () => {
  const { data, refetch } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      const dataViTri = await viTriServices.getViTri();
      return dataViTri;
    },
  });
  refetch();
  return (
    <>
      <div className="dasboard-listing-box fl-wrap">
        <div className="dashboard-listings-wrap fl-wrap">
          <div className="row">
            {data?.data?.content?.map((viTri) => (
              <ItemViTri key={viTri.id} viTri={viTri} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
