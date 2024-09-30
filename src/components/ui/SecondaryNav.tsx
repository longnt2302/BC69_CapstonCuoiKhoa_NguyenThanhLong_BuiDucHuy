import React from "react";

export const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <ul>
        <li>
          <a
            href="dashboard-add-listing.html"
            className="tolt"
            data-microtip-position="left"
            data-tooltip="Sell Property"
          >
            <i className="fal fa-truck-couch"></i>{" "}
          </a>
        </li>
        <li>
          <a href="listing.html" className="tolt" data-microtip-position="left" data-tooltip="Buy Property">
            {" "}
            <i className="fal fa-shopping-bag"></i>
          </a>
        </li>
        <li>
          <a href="compare.html" className="tolt" data-microtip-position="left" data-tooltip="Your Compare">
            <i className="fal fa-exchange"></i>
          </a>
        </li>
      </ul>
      <div className="progress-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
          <circle cx="16" cy="16" r="15.9155" className="progress-bar__background" />
          <circle
            cx="16"
            cy="16"
            r="15.9155"
            className="progress-bar__progress 
                            js-progress-bar"
          />
        </svg>
      </div>
    </div>
  );
};
