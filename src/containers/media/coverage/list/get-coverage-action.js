import {
  GET_COVERAGE_BY_ID_REQUEST,
  GET_COVERAGE_BY_ID_FAILURE,
  GET_COVERAGE_BY_ID_SUCCESS
} from '../coverage-constants';

const getCoverageByIdRequest = (data) => ({
  data,
  type: GET_COVERAGE_BY_ID_REQUEST
});

export const getCoverageByIdSuccess = (data) => ({
  data,
  type: GET_COVERAGE_BY_ID_SUCCESS
});

export const getCoverageByIdFailure = () => ({
  type: GET_COVERAGE_BY_ID_FAILURE
});

export const getCoverageById = async (data, dispatch) => {
  dispatch(getCoverageByIdRequest(data));
};
