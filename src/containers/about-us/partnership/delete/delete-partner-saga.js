import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerUrlWithId } from '../../../../utils/urls';
import { DELETE_PARTNER_REQUEST } from '../partner-constants';
import {
  deletePartnerSuccess,
  deletePartnerFailure
} from './delete-partner-action';

const { deleteRequest } = new HttpHelper();

export function* deletePartner({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: partnerUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deletePartnerFailure());
    } else {
      yield put(deletePartnerSuccess());
      data.deletePartnerSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeletePartner() {
  yield takeLatest(DELETE_PARTNER_REQUEST, deletePartner);
}
