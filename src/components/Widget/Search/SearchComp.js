import React from "react";
import "./search.css";

import { Search } from "@material-ui/icons";

const SearchComp = () => {
  return (
    <div className="search d-flex ai-center">
      <Search />
      <input type="text" placeholder="Search Toolbar" />
    </div>
  );
};

export default SearchComp;
