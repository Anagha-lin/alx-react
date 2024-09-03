import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList /> Component', () => {
  const wrapper = shallow(<CourseList />);

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the header rows', () => {
    const rows = wrapper.find('CourseListRow');

    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(0).prop('isHeader')).toBe(true);
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');
    expect(rows.at(1).prop('isHeader')).toBe(true);
    expect(rows.at(2).prop('isHeader')).toBe(false);
  });
});

describe('CourseList with populated listCourses', () => {
  let courses;

  beforeEach(() => {
    courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  });

  it('should render rows correctly', () => {
    const wrapper = shallow(<CourseList listCourses={courses} />);
    const rows = wrapper.find('CourseListRow');

    expect(rows).toHaveLength(5);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(0).prop('isHeader')).toBe(true);
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');
    expect(rows.at(1).prop('isHeader')).toBe(true);
    expect(rows.at(2).prop('textFirstCell')).toBe('ES6');
    expect(rows.at(2).prop('textSecondCell')).toBe(60);
    expect(rows.at(2).prop('isHeader')).toBe(false);
    expect(rows.at(3).prop('textFirstCell')).toBe('Webpack');
    expect(rows.at(3).prop('textSecondCell')).toBe(20);
    expect(rows.at(3).prop('isHeader')).toBe(false);
    expect(rows.at(4).prop('textFirstCell')).toBe('React');
    expect(rows.at(4).prop('textSecondCell')).toBe(40);
    expect(rows.at(4).prop('isHeader')).toBe(false);
  });
});

describe('CourseList with empty listCourses', () => {
  let courses;

  beforeEach(() => {
    courses = [];
  });

  it('should render the empty state', () => {
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.exists()).toBe(true);
    const rows = wrapper.find('CourseListRow');

    expect(rows).toHaveLength(3);
    expect(rows.at(0).prop('textFirstCell')).toBe('Available courses');
    expect(rows.at(0).prop('isHeader')).toBe(true);
    expect(rows.at(1).prop('textFirstCell')).toBe('Course name');
    expect(rows.at(1).prop('textSecondCell')).toBe('Credit');
    expect(rows.at(1).prop('isHeader')).toBe(true);
    expect(rows.at(2).prop('textFirstCell')).toBe('No course available yet');
    expect(rows.at(2).prop('textSecondCell')).toBe(null);
    expect(rows.at(2).prop('isHeader')).toBe(false);
  });
});

