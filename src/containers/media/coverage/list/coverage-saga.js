import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { coverageUrlWithCategory } from '../../../../utils/urls';
import { GET_COVERAGE_REQUEST } from '../coverage-constants';
import { getCoverageSuccess, getCoverageFailure } from './coverage-action';

const { getRequest } = new HttpHelper();

export function* getCoverage({ data }) {
  try {
    const response = yield call(getRequest, {
      url: coverageUrlWithCategory(data.category_id, {
        pageNumber: data.pageNumber,
        pageSize: data.pageSize
      })
    });

    if (response.error) {
      yield put(getCoverageFailure());
    } else {
      yield put(getCoverageSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetCoverage() {
  yield takeLatest(GET_COVERAGE_REQUEST, getCoverage);
}
