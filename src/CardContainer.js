import React from 'react'
import Card from './Card.js'
import './CardContainer.css'
import ComparedCard from './ComparedCard.js';
import PropTypes from 'prop-types'

const CardContainer = ({ filteredDistricts, selectedCards, displaySelected, displayCompared, comparedCard, removeSelected }) => {
  const displayFilter = filteredDistricts.map((district, index) => {
    // console.log(district.location)
    // console.log(district.stats)
    // console.log(district.location)
    // console.log(district.location)
    // console.log(district.location)
    // console.log(district.location)
    return <Card 
    location={district.location}
    stats={district.stats}
    key={index}
    displaySelected={displaySelected}
    selectedCards={selectedCards}
    displayCompared={displayCompared}
    removeSelected={removeSelected}
    />
  })
  
  const displaySelect = selectedCards.map((district, index) => {
    return <Card 
    location={district.location}
    stats={district.stats}
    key={index}
    displaySelected={displaySelected}
    selectedCards={selectedCards}
    displayCompared={displayCompared}
    selected
    removeSelected={removeSelected}
    />
  })
  
  const displayComparedCard = Object.values(comparedCard)
  const comparedDistrictName = Object.keys(comparedCard)
  const comparedData = (<ComparedCard 
    firstDistrictName={comparedDistrictName[0]}
    firstDistrict={displayComparedCard[0]}
    compared={displayComparedCard[2]}
    secondDistrictName={comparedDistrictName[1]}
    secondDistrict={displayComparedCard[1]}
    removeSelected={removeSelected}
    />)
  
    return(
      <div className="cardList">
        <div className="selectedCardDiv">
          {displaySelect[0]}
          {selectedCards.length > 1 && comparedData}
          {displaySelect[1]}
        </div>
        {displayFilter}
      </div>
    )
  }

CardContainer.propTypes = {
  filteredDistricts: PropTypes.array,
  selectedCards: PropTypes.array,
  displaySelected: PropTypes.func,
  displayCompared: PropTypes.func,
  comparedCard: PropTypes.object
}


export default CardContainer

