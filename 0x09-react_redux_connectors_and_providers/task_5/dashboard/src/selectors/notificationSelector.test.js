// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector tests', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'default', value: 'New job offer' }
    },
  });

  it('filterTypeSelected works as expected', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications returns a list of notifications', () => {
    const result = getNotifications(state).toJS();
    const expected = {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'default', value: 'New job offer' }
    };
    expect(result).toEqual(expected);
  });

  it('getUnreadNotifications returns a list of unread notifications', () => {
    const result = getUnreadNotifications(state).toJS();
    const expected = {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'default', value: 'New job offer' }
    };
    expect(result).toEqual(expected);
  });
});

