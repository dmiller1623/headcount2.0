import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import Card from './Card.js'
import { shallow, mount } from 'enzyme';


describe('CardContainer', () => {
  let wrapper
  let removeSelectedMock
  let displaySelectedMock
  let displayComparedMock
  let filteredDistricts = []
  let comparedCard = {}
  let selectedCards= []
  beforeEach(() => {
    removeSelectedMock = jest.fn()
    displaySelectedMock = jest.fn()
    displayComparedMock = jest.fn()
    wrapper = shallow(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCards}
      comparedCard={comparedCard}
      filteredDistricts={filteredDistricts}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should pass down the right props to the Card component', () => {
    wrapper = shallow(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCards}
      comparedCard={comparedCard}
      filteredDistricts={filteredDistricts}
    />)
   console.log(wrapper.find('Card').props.location)
  })

})