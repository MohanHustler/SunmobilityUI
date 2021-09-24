import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { newsUrlWithId } from '../../../../utils/urls';
import { GET_NEWS_BY_ID_REQUEST } from '../news-constants';
import { getNewsByIdSuccess, getNewsByIdFailure } from './get_news_action';

const { getRequest } = new HttpHelper();

export function* getNewsById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: newsUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getNewsByIdFailure());
    } else {
      yield put(getNewsByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetNewsById() {
  yield takeLatest(GET_NEWS_BY_ID_REQUEST, getNewsById);
}
