import {
  GET_COVERAGE_REQUEST,
  GET_COVERAGE_FAILURE,
  GET_COVERAGE_SUCCESS
} from '../coverage-constants';

const getCoverageRequest = (data) => ({
  data,
  type: GET_COVERAGE_REQUEST
});

export const getCoverageSuccess = (data) => ({
  data,
  type: GET_COVERAGE_SUCCESS
});

export const getCoverageFailure = () => ({
  type: GET_COVERAGE_FAILURE
});

export const getCoverage = async (data, dispatch) => {
  dispatch(getCoverageRequest(data));
};
