// Notifications.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component tests', () => {
  const emptyNotifications = [];
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  describe('With empty listNotifications or not passing listNotifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('renders the menu item', () => {
      expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
    });

    it('does not render the Notifications drawer when displayDrawer is false', () => {
      expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('renders "No new notification for now" when listNotifications is empty', () => {
      wrapper.setProps({ listNotifications: emptyNotifications });
      wrapper.setProps({ displayDrawer: true });
      expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
      expect(wrapper.find('ul')).toHaveLength(0);
    });

    it('renders "No new notification for now" when listNotifications is not passed', () => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
      expect(wrapper.find('ul')).toHaveLength(0);
    });
  });

  describe('With listNotifications', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('renders the menu item', () => {
      expect(wrapper.find('.menuItem').text()).toEqual('Your notifications');
    });

    it('renders the Notifications drawer when displayDrawer is true', () => {
      expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('renders the correct number of NotificationItem components', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it('renders "Here is the list of notifications"', () => {
      expect(wrapper.find('.Notifications p').first().text()).toEqual('Here is the list of notifications');
    });
  });
});

