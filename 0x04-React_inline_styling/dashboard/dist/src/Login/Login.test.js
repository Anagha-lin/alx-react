import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('should render without throwing an error', () => {
  shallow(<Login />);
});

it('should contain the login main section', () => {
  expect(wrapper.find('main.login').exists()).toBe(true);
});

it('should have two input fields', () => {
  expect(wrapper.find('main.login input')).toHaveLength(2);
});

it('should include two label elements', () => {
  expect(wrapper.find('main.login label')).toHaveLength(2);
});

