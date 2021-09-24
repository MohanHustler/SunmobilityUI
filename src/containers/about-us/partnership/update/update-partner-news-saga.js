import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerNewsUrlWithId } from '../../../../utils/urls';
import { UPDATE_PARTNER_NEWS_REQUEST } from '../partner-constants';
import {
  updatePartnerNewsSuccess,
  updatePartnerNewsFailure
} from './update-partner-news-action';

const { patchRequest } = new HttpHelper();

export function* updatePartnerNews({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: partnerNewsUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updatePartnerNewsFailure());
    } else if (response.data && response.data.status) {
      yield put(updatePartnerNewsSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.partnerNewsSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdatePartnerNews() {
  yield takeLatest(UPDATE_PARTNER_NEWS_REQUEST, updatePartnerNews);
}
