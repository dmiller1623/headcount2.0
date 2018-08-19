import React from 'react';
import ComparedCard from './ComparedCard';
import { shallow } from 'enzyme';

describe('ComparedCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ComparedCard />);
    expect(wrapper).toMatchSnapshot();
  });

});