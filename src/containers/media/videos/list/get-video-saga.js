import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { videoUrlWithId } from '../../../../utils/urls';
import { GET_VIDEO_BY_ID_REQUEST } from '../video-constants';
import { getVideoByIdSuccess, getVideoByIdFailure } from './get-video-action';

const { getRequest } = new HttpHelper();

export function* getVideoById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: videoUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getVideoByIdFailure());
    } else {
      yield put(getVideoByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetVideoById() {
  yield takeLatest(GET_VIDEO_BY_ID_REQUEST, getVideoById);
}
