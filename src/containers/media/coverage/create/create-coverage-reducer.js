import {
  ADD_COVERAGE_REQUEST,
  ADD_COVERAGE_FAILURE,
  ADD_COVERAGE_SUCCESS
} from '../coverage-constants';

const initialState = {
  isLoading: false
};

const addCoverage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COVERAGE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_COVERAGE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_COVERAGE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addCoverage;
