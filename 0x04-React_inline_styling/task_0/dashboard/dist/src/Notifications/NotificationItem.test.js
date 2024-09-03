import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  
  it('should render without error', () => {
    shallow(<NotificationItem />);
  });

  it('should display the correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const listItem = wrapper.find('li');

    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toBe('test');
    expect(listItem.prop('data-notification-type')).toBe('default');
  });

  it('should render the html prop correctly', () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const listItem = wrapper.find('li');

    expect(listItem.html()).toBe('<li data-notification-type="default"><u>test</u></li>');
  });

});

/* Uncomment to test the markAsRead functionality
describe('markAsRead functionality', () => {
  
  it('should call markAsRead when the item is clicked', () => {
    const id = 16;
    const wrapper = shallow(
      <NotificationItem type='default' value='test' id={id} />
    );

    const listItem = wrapper.find('li').first();
    const markAsReadMock = jest.fn();
    
    wrapper.setProps({ markAsRead: markAsReadMock });
    
    listItem.simulate('click');

    expect(markAsReadMock).toHaveBeenCalledWith(id);
  });

});
*/


