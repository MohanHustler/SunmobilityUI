import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { COVERAGE_URL } from '../../../../utils/urls';
import { ADD_COVERAGE_REQUEST } from '../coverage-constants';
import {
  addCoverageSuccess,
  addCoverageFailure
} from './create-coverage-action';

const { postRequest } = new HttpHelper();

export function* addCoverage({ data }) {
  try {
    const response = yield call(postRequest, {
      url: COVERAGE_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addCoverageFailure());
    } else if (response.data && response.data.status) {
      yield put(addCoverageSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.coverageSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchAddCoverage() {
  yield takeLatest(ADD_COVERAGE_REQUEST, addCoverage);
}
