import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App /> Component', () => {

  it('renders successfully', () => {
    shallow(<App />);
  });

  it('includes the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('includes the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('includes the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('includes the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('does not include CourseList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('displays CourseList when logged in', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('calls logOut function', () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} />);
    const alertSpy = jest.spyOn(global, 'alert');

    expect(alertSpy).toBeDefined();
    expect(logOutMock).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

});

