import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { videoUrlWithCategory } from '../../../../utils/urls';
import { GET_VIDEO_REQUEST } from '../video-constants';
import { getVideoSuccess, getVideoFailure } from './video-action';

const { getRequest } = new HttpHelper();

export function* getVideo({ data }) {
  try {
    const response = yield call(getRequest, {
      url: videoUrlWithCategory(data.category_id, {
        pageNumber: data.pageNumber,
        pageSize: data.pageSize
      })
    });

    if (response.error) {
      yield put(getVideoFailure());
    } else {
      yield put(getVideoSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetVideo() {
  yield takeLatest(GET_VIDEO_REQUEST, getVideo);
}
