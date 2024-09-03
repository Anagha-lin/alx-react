import React from 'react';
import { getCurrentYear, getFooterText, getRecentNotification } from './utils';

describe('Utility Functions Tests', () => {
  
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  it('should return footer text for index page', () => {
    expect(getFooterText(true)).toBe('Holberton School');
  });

  it('should return footer text for main dashboard', () => {
    expect(getFooterText(false)).toBe('Holberton School main dashboard');
  });

  it('should return the most recent notification message', () => {
    expect(getRecentNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});

