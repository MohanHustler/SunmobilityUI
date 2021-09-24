import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { newsUrl } from '../../../../utils/urls';
import { GET_NEWS_REQUEST } from '../news-constants';
import { getNewsSuccess, getNewsFailure } from './news-action';

const { getRequest } = new HttpHelper();

export function* getNews({ data }) {
  try {
    const response = yield call(getRequest, {
      url: newsUrl(data)
    });

    if (response.error) {
      yield put(getNewsFailure());
    } else {
      yield put(getNewsSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetNews() {
  yield takeLatest(GET_NEWS_REQUEST, getNews);
}
