// CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

describe('CourseList component tests', () => {
  const emptyListCourses = [];
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  describe('With empty listCourses or not passing listCourses', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={emptyListCourses} />);
    });

    it('renders the table with thead and tbody', () => {
      expect(wrapper.find('table#CourseList')).toHaveLength(1);
      expect(wrapper.find('thead')).toHaveLength(1);
      expect(wrapper.find('tbody')).toHaveLength(1);
    });

    it('renders the header rows correctly', () => {
      const headerRows = wrapper.find('thead').find(CourseListRow);
      expect(headerRows).toHaveLength(2);
      expect(headerRows.at(0).props()).toEqual({
        textFirstCell: 'Available courses',
        isHeader: true,
        textSecondCell: null,
      });
      expect(headerRows.at(1).props()).toEqual({
        textFirstCell: 'Course name',
        textSecondCell: 'Credit',
        isHeader: true,
      });
    });

    it('renders one row indicating no courses available when listCourses is empty', () => {
      const bodyRows = wrapper.find('tbody').find(CourseListRow);
      expect(bodyRows).toHaveLength(1);
      expect(bodyRows.at(0).props()).toEqual({
        textFirstCell: 'No course available yet',
        isHeader: false,
        textSecondCell: null,
      });
    });

    it('renders correctly when listCourses is not passed (default to empty array)', () => {
      wrapper = shallow(<CourseList />);
      const bodyRows = wrapper.find('tbody').find(CourseListRow);
      expect(bodyRows).toHaveLength(1);
      expect(bodyRows.at(0).props()).toEqual({
        textFirstCell: 'No course available yet',
        isHeader: false,
        textSecondCell: null,
      });
    });
  });

  describe('With listCourses containing elements', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders the correct number of CourseListRow components', () => {
      // 2 header rows + 3 course rows = 5
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });

    it('renders each course row with correct props', () => {
      const bodyRows = wrapper.find('tbody').find(CourseListRow);
      expect(bodyRows).toHaveLength(3);
      bodyRows.forEach((row, index) => {
        expect(row.key()).toEqual(listCourses[index].id.toString());
        expect(row.props()).toEqual({
          textFirstCell: listCourses[index].name,
          textSecondCell: listCourses[index].credit,
          isHeader: false,
        });
      });
    });
  });
});

