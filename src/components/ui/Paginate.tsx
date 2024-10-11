import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

type Props = {
  total: number | undefined;
  current: number;
  numberPost: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

export const Paginate = (props: Props) => {
  const { total, current, setCurrent, numberPost } = props;

  const numberPage = total && Math.ceil(total / numberPost);

  let listPage: number[] = [];
  if (numberPage) {
    for (let i = 1; i <= numberPage; i++) {
      listPage.push(i);
    }
  }

  return (
    <div className="pagination float-pagination">
      {listPage.map((item) => (
        <div key={item}>
          <Link
            to="#"
            className={cn(
              "!flex items-center justify-center bg-white w-8 h-8 rounded-sm",
              {
                "current-page": item === current,
              }
            )}
            onClick={() => {
              setCurrent(item);
            }}>
            {item}
          </Link>
        </div>
      ))}
      {/* <Link to="#" className="prevposts-link">
        <i className="fa fa-caret-left"></i>
      </Link>
      <Link to="#">1</Link>
      <Link to="#">3</Link>
      <Link to="#">4</Link>
      <Link to="#" className="nextposts-link">
        <i className="fa fa-caret-right"></i>
      </Link> */}
    </div>
  );
};
