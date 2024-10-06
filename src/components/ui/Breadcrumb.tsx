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
            <a href="/">Home</a>
            {currentPage && <span>{currentPage}</span>}
          </div>
          <div className="share-holder hid-share min-w-[90px]">
            <a href="#" className="share-btn showshare sfcs inline-block">
              {" "}
              <i className="fas fa-share-alt"></i> Share{" "}
            </a>
            <div className="share-container  isShare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
