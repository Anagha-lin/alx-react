import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
  return (
    <table className='course-list'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell='No courses available'
            isHeader={false}
          />
        ) : (
          listCourses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;

