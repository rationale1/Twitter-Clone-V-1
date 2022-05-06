import React from "react";
import SearchComp from "./Search/SearchComp";
import "./widget.css";
import WidgetOptions from "./WidgetOptions";

const Widget = () => {
  return (
    <div className="widget d-flex d-column gap-2">
      <SearchComp />

      <div className="widget__section">
        <h4>What's happening</h4>

        <WidgetOptions />

        <WidgetOptions />
      </div>
    </div>
  );
};

export default Widget;
