import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { imageGalleryUrlLaunchId } from '../../../../utils/urls';
import { GET_LAUNCHES_REQUEST } from '../image-gallery-constants';
import { getLaunchesSuccess, getLaunchesFailure } from './get-launches-action';

const { getRequest } = new HttpHelper();

export function* getLaunches({ data }) {
  try {
    const response = yield call(getRequest, {
      url: imageGalleryUrlLaunchId(data.id)
    });

    if (response.error) {
      yield put(getLaunchesFailure());
    } else {
      yield put(getLaunchesSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetLaunches() {
  yield takeLatest(GET_LAUNCHES_REQUEST, getLaunches);
}
