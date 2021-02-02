import React from 'react';
import './style.css'

const SearchBar = () => {
  return (
    <form className="input-group input-group-lg col-md-4 mx-auto mt-5" id="search">
      <input type="text" className="form-control" aria-label="Employee Search" aria-describedby="inputGroup-sizing-lg" />
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Search</span>
      </div>
    </form>
  )
}

export default SearchBar;