import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../../../services";
import { ListItem } from "../parts";
import { sleep } from "../../../utils";

export const LastestProperties = () => {
  const { data } = useQuery({
    queryKey: ["getViTri"],
    queryFn: async () => {
      await sleep(1000);
      return viTriServices.getViTri();
    },
  });
  return (
    <section className="gray-bg small-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="section-title fl-wrap">
              <h4>Browse Hot Offers</h4>
              <h2>Latest Properties</h2>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="flex flex-grow flex-wrap">
          {data?.data?.content?.map((item) => (
            <ListItem key={item.id} tenViTri={item.tenViTri} />
          ))}
        </div>

        <a href="listing.html" className="btn float-btn small-btn color-bg">
          View All Properties
        </a>
      </div>
    </section>
  );
};
