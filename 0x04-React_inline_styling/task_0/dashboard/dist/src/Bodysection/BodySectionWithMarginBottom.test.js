import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('<BodySectionWithMarginBottom /> Tests', () => {
  
  it('renders the component and verifies props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='test title'>
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    const sectionDiv = wrapper.find('.body-section-with-margin').first();
    const InnerBodySection = wrapper.find('BodySection');
    const internalSection = InnerBodySection.dive();
    const heading = internalSection.find('h2');
    const paragraph = internalSection.find('p');

    expect(sectionDiv.exists()).toBe(true);
    expect(InnerBodySection).toHaveLength(1);
    expect(InnerBodySection.props().title).toEqual('test title');
    expect(heading).toHaveLength(1);
    expect(heading.text()).toEqual('test title');
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual('test children node');
  });

});

