import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { mediakitUrlWithId } from '../../../../utils/urls';
import { GET_MEDIAKIT_BY_ID_REQUEST } from '../mediakit-constants';
import {
  getMediakitByIdSuccess,
  getMediakitByIdFailure
} from './get-mediakit-action';

const { getRequest } = new HttpHelper();

export function* getMediakitById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: mediakitUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getMediakitByIdFailure());
    } else {
      yield put(getMediakitByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetMediakitById() {
  yield takeLatest(GET_MEDIAKIT_BY_ID_REQUEST, getMediakitById);
}
