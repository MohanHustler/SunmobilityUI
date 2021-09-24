import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerUrl } from '../../../../utils/urls';
import { GET_PARTNER_NEWS_REQUEST } from '../partner-constants';
import {
  getPartnerNewsSuccess,
  getPartnerNewsFailure
} from './partner-news-action';

const { getRequest } = new HttpHelper();

export function* getPartnerNews({ data }) {
  try {
    const response = yield call(getRequest, {
      url: partnerUrl(data)
    });

    if (response.error) {
      yield put(getPartnerNewsFailure());
    } else {
      yield put(getPartnerNewsSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetPartnerNews() {
  yield takeLatest(GET_PARTNER_NEWS_REQUEST, getPartnerNews);
}
