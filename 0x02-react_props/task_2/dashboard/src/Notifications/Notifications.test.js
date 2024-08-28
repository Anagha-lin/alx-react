import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the first NotificationItem with the correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).first().prop('value')).toBe('New course available');
  });
});

