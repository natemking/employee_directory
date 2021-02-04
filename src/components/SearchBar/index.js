import React from 'react';
import './style.css'

const SearchBar = (props) => {
  return (
    <form 
      className="input-group input-group-lg col-md-4 mx-auto mt-5" 
      id="search" 
      onSubmit={e => { e.preventDefault(); }}
    >
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text" 
        className="form-control" 
        aria-label="Employee Search"
        placeholder="Search by name or phone#" 
      />
    </form>
  )
}

export default SearchBar;