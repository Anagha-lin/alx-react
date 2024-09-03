import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the header element', () => {
    expect(wrapper.find('header.header').exists()).toBe(true);
  });

  it('renders the title element (h1)', () => {
    expect(wrapper.find('header.header h1').exists()).toBe(true);
  });

  it('renders the logo image', () => {
    expect(wrapper.find('header.header img').exists()).toBe(true);
  });
});

