import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { mediakitUrlWithId } from '../../../../utils/urls';
import { UPDATE_MEDIAKIT_REQUEST } from '../mediakit-constants';
import {
  updateMediakitSuccess,
  updateMediakitFailure
} from './update-mediakit-action';

const { patchRequest } = new HttpHelper();

export function* updateMediakit({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: mediakitUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateMediakitFailure());
    } else if (response.data && response.data.status) {
      yield put(updateMediakitSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.mediakitSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateMediakit() {
  yield takeLatest(UPDATE_MEDIAKIT_REQUEST, updateMediakit);
}
