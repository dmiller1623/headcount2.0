import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call filterDistricts on a change event', () => {
    let filterDistrictsMock = jest.fn();
    let eventObject = { target: { value: "A" } };
    const wrapper = shallow(<Search filterDistricts={filterDistrictsMock}/>);
    wrapper.find('input').simulate('change', eventObject);
    expect(filterDistrictsMock).toHaveBeenCalled();
  });
});