import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // Pass the value to the parent component
    };

    return (
        <div className="search">
            <input 
            type="text" 
            className="searchbar"
            placeholder='Search...'
            value={searchTerm}
            onChange={handleInputChange}
            />
        </div>
    );
  }

  Search.propTypes = {
    onSearch: PropTypes.func.isRequired, // onSearch should be a required function
    };
  export default Search;