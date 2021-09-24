import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerNewsUrlWithId } from '../../../../utils/urls';
import { DELETE_PARTNER_NEWS_REQUEST } from '../partner-constants';
import {
  deletePartnerNewsSuccess,
  deletePartnerNewsFailure
} from './delete-partner-news-action';

const { deleteRequest } = new HttpHelper();

export function* deletePartnerNews({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: partnerNewsUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deletePartnerNewsFailure());
    } else {
      yield put(deletePartnerNewsSuccess());
      data.deletePartnerNewsSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeletePartnerNews() {
  yield takeLatest(DELETE_PARTNER_NEWS_REQUEST, deletePartnerNews);
}
