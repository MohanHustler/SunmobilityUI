import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { PARTNER_NEWS_URL } from '../../../../utils/urls';
import { GET_PARTNER_NEWS_LIST_REQUEST } from '../partner-constants';
import {
  getPartnerNewsListSuccess,
  getPartnerNewsListFailure
} from './get-news-action';

const { getRequest } = new HttpHelper();

export function* getPartnerNewsList() {
  try {
    const response = yield call(getRequest, {
      url: PARTNER_NEWS_URL
    });

    if (response.error) {
      yield put(getPartnerNewsListFailure());
    } else {
      yield put(getPartnerNewsListSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetPartnerNewsList() {
  yield takeLatest(GET_PARTNER_NEWS_LIST_REQUEST, getPartnerNewsList);
}
