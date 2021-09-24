import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { PARTNER_NEWS_URL } from '../../../../utils/urls';
import { ADD_PARTNER_REQUEST } from '../partner-constants';
import { addPartnerSuccess, addPartnerFailure } from './create-partner-action';

const { postRequest } = new HttpHelper();

export function* addPartner({ data }) {
  try {
    const response = yield call(postRequest, {
      url: PARTNER_NEWS_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addPartnerFailure());
    } else if (response.data && response.data.status) {
      yield put(addPartnerSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.createPartnerNewsCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchAddPartner() {
  yield takeLatest(ADD_PARTNER_REQUEST, addPartner);
}
