import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { MEDIAKIT_URL } from '../../../../utils/urls';
import { ADD_MEDIAKIT_REQUEST } from '../mediakit-constants';
import {
  addMediakitSuccess,
  addMediakitFailure
} from './create-mediakit-action';

const { postRequest } = new HttpHelper();

export function* addMediakit({ data }) {
  try {
    const response = yield call(postRequest, {
      url: MEDIAKIT_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addMediakitFailure());
    } else if (response.data && response.data.status) {
      yield put(addMediakitSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.mediakitSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateMediakit() {
  yield takeLatest(ADD_MEDIAKIT_REQUEST, addMediakit);
}
