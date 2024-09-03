import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the footer element', () => {
    expect(wrapper.find('footer.footer').exists()).toBe(true);
  });

  it('renders the paragraph with copyright text', () => {
    const paragraph = wrapper.find('footer.footer p');
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toContain('Copyright');
  });
});

