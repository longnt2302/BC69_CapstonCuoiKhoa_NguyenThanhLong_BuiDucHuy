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
        <div className="block">
          <div className="md:w-1/3 w-full">
            <div className="section-title fl-wrap">
              <h4>Ưu đãi hấp dẫn</h4>
              <h2>Mới nhất</h2>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {data?.data?.content?.map((item) => (
            <ListItem key={item.id} tenViTri={item.tenViTri} />
          ))}
        </div>
      </div>
    </section>
  );
};
