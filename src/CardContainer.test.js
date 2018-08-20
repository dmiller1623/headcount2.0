import React from 'react';
import CardContainer from './CardContainer';
import Card from './Card.js';
import { shallow, mount } from 'enzyme';
import ComparedCard from './ComparedCard';

describe('CardContainer', () => {
  let wrapper;
  let removeSelectedMock;
  let displaySelectedMock;
  let displayComparedMock;
  let filteredDistrictsMock = [];
  let comparedCardMock = {};
  let selectedCardsMock = [];
  beforeEach(() => {
    removeSelectedMock = jest.fn();
    displaySelectedMock = jest.fn();
    displayComparedMock = jest.fn();
    wrapper = shallow(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCardsMock}
      comparedCard={comparedCardMock}
      filteredDistricts={filteredDistrictsMock}
    />);
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it(' should return the right amount of cards from filteredArray', () => {
    let filteredDistrictsMock = [{ location: 'COLORADO',
      stats: { '2004': 0.24 } },
    { location: 'COLORADO SPRINGS 11',
      stats:{ '2004': 0.069  } }];
    wrapper = shallow(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCardsMock}
      comparedCard={comparedCardMock}
      filteredDistricts={filteredDistrictsMock}
    />);
    
    expect(wrapper.find(Card).length).toEqual(2);
  });
  it('should return the right amount of cards from selectedArray', () => {
    let selectedCardsMock = [{ location: 'COLORADO',
      stats: { '2004': 0.24 } }];
    wrapper = shallow(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCardsMock}
      comparedCard={comparedCardMock}
      filteredDistricts={filteredDistrictsMock}
    />);
    expect(wrapper.find(Card).length).toEqual(1);
  });
  it('should return a compared card if two cards are selected', () => {
    let selectedCardsMock = [{ location: 'COLORADO',
      stats: { '2004': 0.24 } },
    { location: 'COLORADO SPRINGS 11',
      stats:{ '2004': 0.069  } }];
    let comparedCardMock = { "COLORADO": 0.53,
      "COLORADO SPRINGS 11": 0.833,
      "compared": 0.636 };
    wrapper = mount(<CardContainer 
      removeSelected={removeSelectedMock}
      displaySelected={displaySelectedMock}
      displayCompared={displayComparedMock}
      selectedCards={selectedCardsMock}
      comparedCard={comparedCardMock}
      filteredDistricts={filteredDistrictsMock}
    />);
    expect(wrapper.find(ComparedCard).length).toEqual(1);
  });
});