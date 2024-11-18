import React from "react";
import s from "./SearchBox.module.css";

function SearchBox({ searchQuery, onSearchChange }) {
  return (
    <div className={s.searchBoxContainer}>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        className={s.searchInput}
        placeholder="Search by name"
      />
    </div>
  );
}

export default SearchBox;
