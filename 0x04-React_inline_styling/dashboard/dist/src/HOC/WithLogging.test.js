import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging />', () => {
  beforeEach(() => {
    console.log = jest.fn(); // Mock console.log before each test
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restore mocks after each test
  });

  it('renders without crashing with a functional component', () => {
    const HOC = WithLogging(() => <p />);
    const wrapper = shallow(<HOC />);
    
    expect(wrapper.exists()).toBe(true);
  });

  it('renders without crashing with the Login component', () => {
    const HOC = WithLogging(Login);
    const wrapper = shallow(<HOC />);
    
    expect(wrapper.exists()).toBe(true);
  });

  // Uncomment the following tests if you want to include mount testing with logging

  /*
  it('logs messages on mount and unmount with pure HTML', () => {
    const HOC = WithLogging(() => <p />);
    const wrapper = mount(<HOC />);
    
    expect(wrapper.exists()).toBe(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Component is mounted`
    );

    wrapper.unmount();

    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Component is going to unmount`
    );
  });

  it('logs messages on mount and unmount with the Login component', () => {
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    
    expect(wrapper.exists()).toBe(true);
    expect(console.log).toHaveBeenNthCalledWith(
      1,
      `Component Login is mounted`
    );

    wrapper.unmount();

    expect(console.log).toHaveBeenNthCalledWith(
      2,
      `Component Login is going to unmount`
    );
  });
  */

});

