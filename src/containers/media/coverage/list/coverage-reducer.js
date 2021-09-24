import {
  GET_COVERAGE_REQUEST,
  GET_COVERAGE_FAILURE,
  GET_COVERAGE_SUCCESS
} from '../coverage-constants';

const initialState = {
  isLoading: false,
  coverageList: []
};

const getCoverage = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVERAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        coverageList: []
      };
    case GET_COVERAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        coverageList: []
      };
    case GET_COVERAGE_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        coverageList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getCoverage;
