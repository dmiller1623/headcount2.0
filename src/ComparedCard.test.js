import React from 'react';
import ReactDOM from 'react-dom';
import ComparedCard from './ComparedCard';
import { shallow, mount } from 'enzyme';

describe('ComparedCard',() => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ComparedCard />)
    expect(wrapper).toMatchSnapshot()
  })

})