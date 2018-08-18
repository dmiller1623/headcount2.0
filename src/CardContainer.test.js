import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import Card from './Card';

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
})