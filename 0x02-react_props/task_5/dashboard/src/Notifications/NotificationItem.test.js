// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correctly with type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test notification" />);
    expect(wrapper.find('li').text()).toBe('Test notification');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders correctly with html prop', () => {
    const html = { __html: '<strong>Test HTML</strong>' };
    const wrapper = shallow(<NotificationItem type="urgent" html={html} />);
    expect(wrapper.find('li').html()).toContain('<strong>Test HTML</strong>');
  });

  it('does not render value when html prop is provided', () => {
    const html = { __html: '<strong>Test HTML</strong>' };
    const wrapper = shallow(<NotificationItem type="urgent" html={html} value="Test notification" />);
    expect(wrapper.find('li').text()).toBe('');
  });
});

