import { NavLink } from "react-router-dom";

type Props<T> = {
  currentPage: T;
};
export const Breadcrumb = (props: Props<string | undefined>) => {
  const { currentPage } = props;
  return (
    <div className="breadcrumbs fw-breadcrumbs sp-brd fl-wrap">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="breadcrumbs-list">
            <NavLink to="/">Home</NavLink>
            {currentPage && <span>{currentPage}</span>}
          </div>
          <div className="share-holder hid-share min-w-[90px]">
            <NavLink to="#" className="share-btn showshare sfcs inline-block">
              {" "}
              <i className="fas fa-share-alt"></i> Share{" "}
            </NavLink>
            <div className="share-container  isShare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
