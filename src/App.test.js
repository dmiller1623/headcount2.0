import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  it('it should start off with the data in districts as initial state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('filteredDistricts')).toHaveLength(181);
    expect(wrapper.state('selectedCards')).toEqual([]);
    expect(wrapper.state('comparedCard')).toEqual({});
    expect(wrapper.state('matchedCards')).toEqual(false);

  });
  it('filterDistricts when run should update the state', () => {
    const wrapper = shallow(<App />);
    const value = "Asp";
    wrapper.instance().filterDistricts(value);
    expect(wrapper.state('filteredDistricts')).toHaveLength(1);
    
  });
  it('displaySelected should update the state of selected cards', () => {
    const wrapper = shallow(<App />);
    const location = "COLORADO";
    wrapper.instance().displaySelected(location);
    expect(wrapper.state('selectedCards')).toHaveLength(1);
  });
  it('display selected should not add a card if exsists in the array', () => {
    const wrapper = shallow(<App />);
    const newLocation = { location: 'COLORADO',
      stats: { '2004': 0.24 } };
    const initialState = [{ location: 'COLORADO',
      stats: { '2004': 0.24 } }];
    wrapper.setState({ selectedCards: initialState });
    wrapper.instance().displaySelected(newLocation);
    expect(wrapper.state('selectedCards')).toEqual(initialState);
  });
  it('display selected will not add another card if two already exsist', () => {
    const wrapper = shallow(<App />);
    const newLocation = { location: 'APSEN', stats:{ '2004': 0.2 } };
    const initialState =  [ 
      { location: 'COLORADO',
        stats: { '2004': 0.24 } },
      { location: 'COLORADO SPRINGS 11',
        stats:{ '2004': 0.069  } }];
    wrapper.setState({ selectedCards: initialState });
    wrapper.instance().displaySelected(newLocation);
    expect(wrapper.state('selectedCards')).toHaveLength(2);
  });
  it('removeSelected removes the matching district out of the array', () => {
    const wrapper = shallow(<App />);
    const location = 'COLORADO SPRINGS 11';
    const initialState =  [ 
      { location: 'COLORADO',
        stats: { '2004': 0.24 } },
      { location: 'COLORADO SPRINGS 11',
        stats:{ '2004': 0.069  } }];
    wrapper.setState({ selectedCards: initialState });
    expect(wrapper.state('selectedCards')).toHaveLength(2);
    wrapper.instance().removeSelected(location);
    expect(wrapper.state('selectedCards')).toHaveLength(1);
  });
  it('sets state back to false after compared card is removed', () => {
    const wrapper = shallow(<App />);
    const location = 'COLORADO SPRINGS 11';
    const initialState =  [ 
      { location: 'COLORADO',
        stats: { '2004': 0.24 } },
      { location: 'COLORADO SPRINGS 11',
        stats:{ '2004': 0.069  } }];
    wrapper.setState({ selectedCards: initialState });
    expect(wrapper.state('matchedCards')).toBe(true);
    wrapper.instance().removeSelected(location);
    expect(wrapper.state('matchedCards')).toBe(false);
    
  });
  it('displayCompared updates state with the compared object', () => {
    const wrapper = shallow(<App />);
    const initialState =  [ 
      { location: 'COLORADO',
        stats: { '2004': 0.24 } },
      { location: 'COLORADO SPRINGS 11',
        stats:{ '2004': 0.069  } }];
    const expected = { "COLORADO": 0.53,
      "COLORADO SPRINGS 11": 0.833,
      "compared": 0.636 };
    wrapper.setState({ selectedCards: initialState });
    wrapper.instance().displayCompared();
    expect(wrapper.state('comparedCard')).toEqual(expected);
  });
  it('add districts should udate state with 181 cards on load', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('filteredDistricts')).toHaveLength(181);
  });

});
