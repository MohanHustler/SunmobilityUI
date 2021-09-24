import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { mediakitUrlWithId } from '../../../../utils/urls';
import { DELETE_MEDIAKIT_REQUEST } from '../mediakit-constants';
import {
  deleteMediakitSuccess,
  deleteMediakitFailure
} from './delete-mediakit-action';

const { deleteRequest } = new HttpHelper();

export function* deleteMediakit({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: mediakitUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteMediakitFailure());
    } else {
      yield put(deleteMediakitSuccess());
      data.deleteMediakitSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteMediakit() {
  yield takeLatest(DELETE_MEDIAKIT_REQUEST, deleteMediakit);
}
