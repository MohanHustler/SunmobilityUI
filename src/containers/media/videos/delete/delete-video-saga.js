import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { videoUrlWithId } from '../../../../utils/urls';
import { DELETE_VIDEO_REQUEST } from '../video-constants';
import { deleteVideoSuccess, deleteVideoFailure } from './delete-video-action';

const { deleteRequest } = new HttpHelper();

export function* deleteVideo({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: videoUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteVideoFailure());
    } else {
      yield put(deleteVideoSuccess());
      data.deleteVideoSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteVideo() {
  yield takeLatest(DELETE_VIDEO_REQUEST, deleteVideo);
}
