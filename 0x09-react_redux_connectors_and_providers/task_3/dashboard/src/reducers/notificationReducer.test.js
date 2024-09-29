// src/reducers/notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' }
  ];

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    const expectedState = fromJS({
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
      filter: 'DEFAULT',
    });
    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 1 };
    const initialState = fromJS({
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
      filter: 'DEFAULT',
    });
    const expectedState = fromJS({
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: true },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
      filter: 'DEFAULT',
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});

