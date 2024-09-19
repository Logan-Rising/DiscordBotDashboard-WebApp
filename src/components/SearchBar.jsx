// SearchBar.js

import React, { useState } from 'react';
import InfoButton from './InfoButton';

const SearchBar = ({ onSearch, placeholder = "Search...", buttonLabel = "Search", infoTextParam = "Info" }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
        />
        <button type="submit">{buttonLabel}</button>
        <InfoButton infoText={infoTextParam} />
      </form>
    </div>
  );
};

export default SearchBar;
