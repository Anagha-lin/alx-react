import React, { Component, Fragment } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <Fragment>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div className="Notifications">
            <p>Here’s the list of notifications</p>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notifications at the moment" />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>

            <button
              type="button"
              aria-label="Close"
              onClick={() => console.log('Close button clicked')}
              style={{
                display: 'inline-block',
                position: 'absolute',
                top: '56px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                zIndex: 1,
              }}
            >
              <img
                src={closeIcon}
                alt="Close notification"
                style={{ width: '8px', height: '8px' }}
              />
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;

