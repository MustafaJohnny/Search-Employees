import React from "react";
import IconSerach from "./IconSearch.svg";

// Simple search input component.
function Search(props) {
  return (
    <div className="search">
      <input
        onChange={props.handleInput}
        type="text"
        placeholder="Search Employee Name"
      />

      <img src={IconSerach} alt="icon" />
    </div>
  );
}

export default Search;
