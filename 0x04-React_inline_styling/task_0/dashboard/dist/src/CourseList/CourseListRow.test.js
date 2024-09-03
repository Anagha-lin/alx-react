import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow /> Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='test' />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a single header cell', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
    wrapper.update();
    
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toBe('2');
  });

  it('should render two header cells', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='test' textSecondCell='second' />
    );
    wrapper.update();

    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.first().text()).toBe('test');
    expect(th.at(1).text()).toBe('second');
  });

  it('should render two data cells', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell='test' textSecondCell='second' />
    );
    wrapper.update();

    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.children('td')).toHaveLength(2);
  });
});

