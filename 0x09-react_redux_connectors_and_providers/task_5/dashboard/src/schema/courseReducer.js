// src/reducers/courseReducer.js
import { fromJS, Map } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

// Default state using Immutable Map
const initialState = fromJS({
  courses: {},
});

// Course reducer
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.merge({
        courses: fromJS(normalizedData.entities.courses),
      });

    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;

