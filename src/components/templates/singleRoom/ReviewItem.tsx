import moment from "moment";
import { CommentResponse } from "../../../@types";

type Props = {
  comment: CommentResponse;
};
export const ReviewItem = (props: Props) => {
  const { comment } = props;
  return (
    <div className="reviews-comments-item">
      <div className="review-comments-avatar">
        <img src={comment?.avatar} alt={comment?.tenNguoiBinhLuan} />
      </div>
      <div className="reviews-comments-item-text smpar">
        <h4>
          <a href="#">{comment?.tenNguoiBinhLuan}</a>
        </h4>
        <div
          className="listing-rating card-popup-rainingvis"
          data-starrating2="3"
        ></div>
        <div className="clearfix"></div>
        <p>" {comment?.noiDung} "</p>
        <div className="reviews-comments-item-date">
          <span className="reviews-comments-item-date-item">
            <i className="far fa-calendar-check"></i>
            {moment(comment?.ngayBinhLuan).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
};
