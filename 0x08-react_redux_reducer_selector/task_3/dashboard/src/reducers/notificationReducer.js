// src/reducers/notificationReducer.js
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Default state for the notification reducer
const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

// Notification reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Set isRead to false for each notification in the list
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };

    case MARK_AS_READ:
      // Mark the notification with the matching id as read
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index ? { ...notification, isRead: true } : notification
        ),
      };

    case SET_TYPE_FILTER:
      // Update the filter based on the action's filter value
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;

