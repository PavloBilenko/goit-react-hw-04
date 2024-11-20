import React, { useState } from "react";
import "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="SearchInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit" className="SearchButton">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
