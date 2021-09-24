import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { newsUrlWithId } from '../../../../utils/urls';
import { DELETE_NEWS_REQUEST } from '../news-constants';
import { deleteNewsSuccess, deleteNewsFailure } from './delete-news-action';

const { deleteRequest } = new HttpHelper();

export function* deleteNews({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: newsUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteNewsFailure());
    } else {
      yield put(deleteNewsSuccess());
      data.deleteNewsSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteNews() {
  yield takeLatest(DELETE_NEWS_REQUEST, deleteNews);
}
