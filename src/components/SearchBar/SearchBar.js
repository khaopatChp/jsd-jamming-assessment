/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import './SearchBar.css';

function SearchBar({onSearch}) {
  const [term,setTerm] = useState('');

  const search = () =>{
    onSearch(term);
  }

  function handleTermChange (e){
    setTerm(e.target.value);
  }

  return (
  <div className="SearchBar">
    <input onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
    <button className="SearchButton" onClick={search}>SEARCH</button>
  </div>);
}

export default SearchBar;
