import { useQuery } from "@tanstack/react-query";
import { commentServices } from "../../../services/comments";
import { ReviewItem } from "./ReviewItem";

type Props = {
  maPhong: number | undefined;
};

export const Comments = (props: Props) => {
  const { maPhong } = props;
  const { data } = useQuery({
    queryKey: ["getCommentsbyIdRoom"],
    queryFn: async () => {
      const data = await commentServices.getCommentById(maPhong);
      return data;
    },
  });
  console.log(data);
  return (
    <div className="list-single-main-item fl-wrap" id="sec6">
      <div className="list-single-main-item-title">
        <h3>
          Bình luận <span>{data?.data?.content?.length}</span>
        </h3>
      </div>
      <div className="list-single-main-item_content fl-wrap">
        <div className="reviews-comments-wrap fl-wrap">
          {data?.data?.content?.map((review) => (
            <ReviewItem key={review?.id} comment={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
