import React, { useState } from "react";
import './Search.css';

const Search = ({ setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search">
    
      <input type="text"  placeholder="search" onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
