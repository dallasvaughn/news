import React from 'react';

const SearchForm = (props) => {
  return (
    <form action="#" className="form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.inputValue}
        className="search"
        placeholder="Search headlines by category..."
        onChange={(e) => props.onInputValueChange(e.target.value)}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
