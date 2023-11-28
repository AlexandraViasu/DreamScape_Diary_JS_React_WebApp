import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ term, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="searchbarcomponent" onSubmit={handleSubmit}>
      <input className="searchbar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="searchbarbutton" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;