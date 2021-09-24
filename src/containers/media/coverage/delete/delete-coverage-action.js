import {
  DELETE_COVERAGE_REQUEST,
  DELETE_COVERAGE_FAILURE,
  DELETE_COVERAGE_SUCCESS
} from '../coverage-constants';

const deleteCoverageRequest = (data) => ({
  data,
  type: DELETE_COVERAGE_REQUEST
});

export const deleteCoverageSuccess = () => ({
  type: DELETE_COVERAGE_SUCCESS
});

export const deleteCoverageFailure = () => ({
  type: DELETE_COVERAGE_FAILURE
});

export const deleteCoverage = async (data, dispatch) => {
  dispatch(deleteCoverageRequest(data));
};
