import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerUrlWithId } from '../../../../utils/urls';
import { UPDATE_PARTNER_REQUEST } from '../partner-constants';
import {
  updatePartnerSuccess,
  updatePartnerFailure
} from './update-partner-action';

const { patchRequest } = new HttpHelper();

export function* updatePartner({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: partnerUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updatePartnerFailure());
    } else if (response.data && response.data.status) {
      yield put(updatePartnerSuccess());
      Toastr.success(response.data.message, 'Success Response');
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdatePartner() {
  yield takeLatest(UPDATE_PARTNER_REQUEST, updatePartner);
}
