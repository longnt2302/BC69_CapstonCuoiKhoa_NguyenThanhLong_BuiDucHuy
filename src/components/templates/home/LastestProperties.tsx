import { useQuery } from "@tanstack/react-query";
import { viTriServices } from "../../../services/viTri";
import { ListItem } from "./ListItem";
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

        {/* <div className="grid-item-holder gallery-items gisp fl-wrap">
          {data?.data?.content?.map((item) => (
            <ListItem key={item.id} tenViTri={item.tenViTri} />
          ))}
        </div> */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 gallery-list">
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
