import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from "./helper.js"
import Search from './Search'

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredDistricts: [],
      selectedCards: [],
      comparedCard: {},
      matchedCards: false
    }
  }

  filterDistricts = (value) => {
    const districts = new DistrictRepository(kinderData)
    const matchedDistricts = districts.findAllMatches(value)
    this.setState({ filteredDistricts: matchedDistricts })
  }

  removeSelected = (location) => {
    if(this.state.selectedCards.length >= 1) {
    const selectedCards = this.state.selectedCards.filter(card => {
      return card.location !== location
    })
    this.setState({ selectedCards, matchedCards: false })
    } 
  }
  
  displaySelected = (card) => {
    if(this.state.selectedCards.length > 1) {
      return 
    }
    let selectedCards = [...this.state.selectedCards, card]
    this.setState({ selectedCards })
  }

  displayCompared = () => {
    const districts = new DistrictRepository(kinderData)
    const locations = this.state.selectedCards.map(district => {
      return district.location
    })
    const matched = districts.compareDistrictAverages(locations[0], locations[1])
    this.setState({ comparedCard: matched, matchedCards: true })
   
  }

  componentDidMount = () => {
   this.addDistricts()
  }

  componentDidUpdate = () => {
    if(this.state.selectedCards.length === 2 && !this.state.matchedCards) {
      this.displayCompared()
    }
  }
 
  addDistricts = () => {
    const districts = new DistrictRepository(kinderData)
    const districtArray = districts.findAllMatches()
    this.setState( { filteredDistricts: districtArray })
  }

  render() {
    return (
      <div className="App">
        <CardContainer 
          filteredDistricts={this.state.filteredDistricts}
          selectedCards={this.state.selectedCards}
          displaySelected={this.displaySelected}
          displayCompared={this.displayCompared} 
          comparedCard={this.state.comparedCard}
          removeSelected={this.removeSelected}
        />
        <Search filterDistricts={this.filterDistricts} />
      </div>
    );
  }
}

export default App;
