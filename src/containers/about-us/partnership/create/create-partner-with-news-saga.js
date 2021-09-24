import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { PARTNER_NEWS_URL } from '../../../../utils/urls';
import { ADD_PARTNER_WITH_NEWS_REQUEST } from '../partner-constants';
import {
  addPartnerWithNewsSuccess,
  addPartnerWithNewsFailure
} from './create-partner-with-news-action';

const { postRequest } = new HttpHelper();

export function* addPartnerWithNews({ data }) {
  try {
    const response = yield call(postRequest, {
      url: `${PARTNER_NEWS_URL}/bulkcreate`,
      data: data.formData
    });

    if (response.error) {
      yield put(addPartnerWithNewsFailure());
    } else if (response.data && response.data.status) {
      yield put(addPartnerWithNewsSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.partnerNewsSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchAddPartnerWithNews() {
  yield takeLatest(ADD_PARTNER_WITH_NEWS_REQUEST, addPartnerWithNews);
}
