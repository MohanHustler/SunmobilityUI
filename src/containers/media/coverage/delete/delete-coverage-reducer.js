import {
  DELETE_COVERAGE_REQUEST,
  DELETE_COVERAGE_FAILURE,
  DELETE_COVERAGE_SUCCESS
} from '../coverage-constants';

const initialState = {
  isLoading: false
};

const deleteCoverage = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COVERAGE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_COVERAGE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_COVERAGE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteCoverage;
