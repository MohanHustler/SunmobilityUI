import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { VIDEO_URL } from '../../../../utils/urls';
import { ADD_VIDEO_REQUEST } from '../video-constants';
import { addVideoSuccess, addVideoFailure } from './create-video-action';

const { postRequest } = new HttpHelper();

export function* addVideo({ data }) {
  try {
    const response = yield call(postRequest, {
      url: VIDEO_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addVideoFailure());
    } else if (response.data && response.data.status) {
      yield put(addVideoSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.videoSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateVideo() {
  yield takeLatest(ADD_VIDEO_REQUEST, addVideo);
}
