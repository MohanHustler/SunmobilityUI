import {
  UPDATE_COVERAGE_REQUEST,
  UPDATE_COVERAGE_FAILURE,
  UPDATE_COVERAGE_SUCCESS
} from '../coverage-constants';

const initialState = {
  isLoading: false
};

const updateCoverage = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COVERAGE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_COVERAGE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_COVERAGE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateCoverage;
