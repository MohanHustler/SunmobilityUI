import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { videoUrlWithId } from '../../../../utils/urls';
import { UPDATE_VIDEO_REQUEST } from '../video-constants';
import { updateVideoSuccess, updateVideoFailure } from './update-video-action';

const { patchRequest } = new HttpHelper();

export function* updateVideo({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: videoUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateVideoFailure());
    } else if (response.data && response.data.status) {
      yield put(updateVideoSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.videoSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateVideo() {
  yield takeLatest(UPDATE_VIDEO_REQUEST, updateVideo);
}
