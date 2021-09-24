import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { PARTNER_NEWS_URL } from '../../../../utils/urls';
import { ADD_PARTNER_NEWS_REQUEST } from '../partner-constants';
import {
  addPartnerNewsSuccess,
  addPartnerNewsFailure
} from './create-partner-news-action';

const { postRequest } = new HttpHelper();

export function* addPartnerNews({ data }) {
  try {
    const response = yield call(postRequest, {
      url: `${PARTNER_NEWS_URL}`,
      data: data.formData
    });

    if (response.error) {
      yield put(addPartnerNewsFailure());
    } else if (response.data && response.data.status) {
      yield put(addPartnerNewsSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.partnerNewsSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchAddPartnerNews() {
  yield takeLatest(ADD_PARTNER_NEWS_REQUEST, addPartnerNews);
}
