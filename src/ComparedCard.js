import React from 'react';
import './ComparedCard.css';
import PropTypes from 'prop-types';

const ComparedCard = ( { 
  firstDistrict,
  compared,
  secondDistrict, 
  firstDistrictName, 
  secondDistrictName } ) => {
  return (
    <div className="comparedCard">
      <h2 className="comparedName">{firstDistrictName}</h2>
      <p>&darr;</p>
      <h5 className="averages">&lt;-----{firstDistrict}</h5>
      <h2 className="compared">&lt;--{compared}--&gt;</h2>
      <h5 className="averages">{secondDistrict}------&gt;</h5>
      <p>&uarr;</p>
      <h2 className="comparedName">{secondDistrictName}</h2>
    </div>
  );
};

ComparedCard.propTypes = { 
  firstDistrict: PropTypes.number,
  compared: PropTypes.number,
  secondDistrict: PropTypes.number,
  firstDistrictName: PropTypes.string,
  secondDistrictName: PropTypes.string
};


export default ComparedCard;