import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component { 
handleChange = (event) => {
  this.props.filterDistricts(event.target.value);
}

render() {
  return (
    <div className="search-form">
      <form>
        <input
          className="search-input"
          type="text"
          onChange={this.handleChange}
          placeholder="Search by District"
        />
      </form>
    </div>
  );
}
}

Search.propTypes = {
  filterDistricts: PropTypes.func
};

export default Search; 