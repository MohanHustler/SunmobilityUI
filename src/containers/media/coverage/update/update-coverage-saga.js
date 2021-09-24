import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { coverageUrlWithId } from '../../../../utils/urls';
import { UPDATE_COVERAGE_REQUEST } from '../coverage-constants';
import {
  updateCoverageSuccess,
  updateCoverageFailure
} from './update-coverage-action';

const { patchRequest } = new HttpHelper();

export function* updateCoverage({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: coverageUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateCoverageFailure());
    } else if (response.data && response.data.status) {
      yield put(updateCoverageSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.coverageSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateCoverage() {
  yield takeLatest(UPDATE_COVERAGE_REQUEST, updateCoverage);
}
