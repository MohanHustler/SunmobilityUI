import {
  UPDATE_COVERAGE_REQUEST,
  UPDATE_COVERAGE_FAILURE,
  UPDATE_COVERAGE_SUCCESS
} from '../coverage-constants';

const updateCoverageRequest = (data) => ({
  data,
  type: UPDATE_COVERAGE_REQUEST
});

export const updateCoverageSuccess = () => ({
  type: UPDATE_COVERAGE_SUCCESS
});

export const updateCoverageFailure = () => ({
  type: UPDATE_COVERAGE_FAILURE
});

export const updateCoverage = async (data, dispatch) => {
  dispatch(updateCoverageRequest(data));
};
