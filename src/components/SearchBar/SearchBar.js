/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './SearchBar.css';

function SearchBar(props) {
  const [input, setInput] = useState('');

  return (
  <div className="SearchBar">
    <input placeholder="Enter A Song, Album, or Artist" />
    <button className="SearchButton">SEARCH</button>
  </div>);
}

export default SearchBar;
