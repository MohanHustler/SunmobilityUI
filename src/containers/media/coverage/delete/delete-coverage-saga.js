import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { coverageUrlWithId } from '../../../../utils/urls';
import { DELETE_COVERAGE_REQUEST } from '../coverage-constants';
import {
  deleteCoverageSuccess,
  deleteCoverageFailure
} from './delete-coverage-action';

const { deleteRequest } = new HttpHelper();

export function* deleteCoverage({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: coverageUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteCoverageFailure());
    } else {
      yield put(deleteCoverageSuccess());
      data.deleteCoverageSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteCoverage() {
  yield takeLatest(DELETE_COVERAGE_REQUEST, deleteCoverage);
}
