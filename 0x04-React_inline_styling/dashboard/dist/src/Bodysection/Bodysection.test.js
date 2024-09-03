import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('<BodySection /> Component Tests', () => {
  
  it('renders with title and children', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );

    const sectionDiv = wrapper.find('.body-section').first();
    const heading = wrapper.find('h2');
    const paragraph = wrapper.find('p');

    expect(sectionDiv.exists()).toBe(true);
    expect(heading).toHaveLength(1);
    expect(heading.text()).toBe('test title');
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toBe('test children node');
  });

});

