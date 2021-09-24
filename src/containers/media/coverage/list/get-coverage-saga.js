import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { coverageUrlWithId } from '../../../../utils/urls';
import { GET_COVERAGE_BY_ID_REQUEST } from '../coverage-constants';
import {
  getCoverageByIdSuccess,
  getCoverageByIdFailure
} from './get-coverage-action';

const { getRequest } = new HttpHelper();

export function* getCoverageById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: coverageUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getCoverageByIdFailure());
    } else {
      yield put(getCoverageByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetCoverageById() {
  yield takeLatest(GET_COVERAGE_BY_ID_REQUEST, getCoverageById);
}
