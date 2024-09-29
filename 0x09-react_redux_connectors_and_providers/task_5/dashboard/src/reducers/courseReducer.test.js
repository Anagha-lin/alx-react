// src/reducers/courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  const courses = [
    { id: 1, name: 'React course' },
    { id: 2, name: 'Redux course' }
  ];

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'React course', isSelected: false },
        2: { id: 2, name: 'Redux course', isSelected: false },
      },
    });
    expect(courseReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'React course', isSelected: false },
        2: { id: 2, name: 'Redux course', isSelected: false },
      },
    });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'React course', isSelected: true },
        2: { id: 2, name: 'Redux course', isSelected: false },
      },
    });
    expect(courseReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});

