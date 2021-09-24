import {
  GET_COVERAGE_BY_ID_REQUEST,
  GET_COVERAGE_BY_ID_FAILURE,
  GET_COVERAGE_BY_ID_SUCCESS
} from '../coverage-constants';

const initialState = {
  isEditCoverageLoading: false,
  coverageData: {}
};

const getCoverageById = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVERAGE_BY_ID_REQUEST:
      return {
        ...state,
        isEditCoverageLoading: true,
        coverageData: {}
      };
    case GET_COVERAGE_BY_ID_FAILURE:
      return {
        ...state,
        isEditCoverageLoading: false,
        coverageData: {}
      };
    case GET_COVERAGE_BY_ID_SUCCESS:
      return {
        ...state,
        isEditCoverageLoading: false,
        coverageData: action.data
      };
    default:
      return state;
  }
};

export default getCoverageById;
