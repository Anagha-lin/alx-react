export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getFooterText = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};

export const getRecentNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};

