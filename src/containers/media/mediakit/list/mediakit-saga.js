import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { mediakitUrlWithCategory } from '../../../../utils/urls';
import { GET_MEDIAKIT_REQUEST } from '../mediakit-constants';
import { getMediakitSuccess, getMediakitFailure } from './mediakit-action';

const { getRequest } = new HttpHelper();

export function* getMediakit({ data }) {
  try {
    const response = yield call(getRequest, {
      url: mediakitUrlWithCategory(data.category_id, {
        pageNumber: data.pageNumber,
        pageSize: data.pageSize
      })
    });

    if (response.error) {
      yield put(getMediakitFailure());
    } else {
      yield put(getMediakitSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetMediakit() {
  yield takeLatest(GET_MEDIAKIT_REQUEST, getMediakit);
}
