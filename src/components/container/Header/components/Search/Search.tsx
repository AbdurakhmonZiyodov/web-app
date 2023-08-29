import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="header-search">
      <div className="header-search__input">
        <input type="text" placeholder="Search..." />
        <FaSearch className="icon" />
      </div>
    </div>
  );
};

export default Search;
