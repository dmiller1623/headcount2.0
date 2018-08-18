import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper
  let displaySelectedMock
  let key 
  let displayComparedMock
  let removeSelectedMock
  let selectedCardsArray = []
  beforeEach(() => {
    key = 1
    displaySelectedMock = jest.fn()
    displayComparedMock = jest.fn()
    removeSelectedMock = jest.fn()
    wrapper = shallow(<Card 
      location= 'COLORADO'
      stats={ {2004: 0.24} }
      key={key}
      selected
      selectedCards={selectedCardsArray}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      removeSelected={removeSelectedMock}
      />)
  })
    it('expect wrapper to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('handle click updates state', () => {
      expect(wrapper.state('clicked')).toEqual(false)
      wrapper.instance().handleClick()
      expect(wrapper.state('clicked')).toEqual(true)
      
    })
    it('calls removeSelected when a card is clicked on and clicked is true', () => {
      let location = "COLORADO"
      wrapper.instance().handleClick()
      wrapper.setState( { clicked: true } )
      expect(displaySelectedMock).not.toHaveBeenCalled()
      expect(removeSelectedMock).toHaveBeenCalledWith(location)
    })
    it('calls display selelected when clicked is false', () => {
      wrapper = shallow(<Card 
        location= 'COLORADO'
        stats={ {2004: 0.24} }
        key={key}
        selectedCards={selectedCardsArray}
        displaySelected={displaySelectedMock}
        displayCompared={displayComparedMock}
        removeSelected={removeSelectedMock}
        />)
      wrapper.instance().handleClick()
      expect(displaySelectedMock).toHaveBeenCalled()
    })
    it('should have a class of highnum if less than .5', () => {
      expect(wrapper.find('ul').hasClass('highNum')).toEqual(true)
    })
    it('should have a class of lowNum if more than lowNum', () => {
      wrapper = shallow(<Card 
        location= 'COLORADO'
        stats={ {2004: 0.6} }
        key={key}
        selectedCards={selectedCardsArray}
        displaySelected={displaySelectedMock}
        displayCompared={displayComparedMock}
        removeSelected={removeSelectedMock}
        />)
      
      expect(wrapper.find('ul').hasClass('lowNum')).toEqual(true)
    })

})