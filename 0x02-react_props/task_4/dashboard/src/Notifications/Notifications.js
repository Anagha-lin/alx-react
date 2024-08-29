import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{ float: 'right', cursor: 'pointer' }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            X
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="urgent" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;

