import {
  ADD_COVERAGE_REQUEST,
  ADD_COVERAGE_FAILURE,
  ADD_COVERAGE_SUCCESS
} from '../coverage-constants';

const addCoverageRequest = (data) => ({
  data,
  type: ADD_COVERAGE_REQUEST
});

export const addCoverageSuccess = () => ({
  type: ADD_COVERAGE_SUCCESS
});

export const addCoverageFailure = () => ({
  type: ADD_COVERAGE_FAILURE
});

export const addCoverage = async (data, dispatch) => {
  dispatch(addCoverageRequest(data));
};
