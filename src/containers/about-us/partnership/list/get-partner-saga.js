import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { partnerUrlWithId } from '../../../../utils/urls';
import { GET_PARTNER_BY_ID_REQUEST } from '../partner-constants';
import {
  getPartnerByIdSuccess,
  getPartnerByIdFailure
} from './get-partner-action';

const { getRequest } = new HttpHelper();

export function* getPartnerById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: partnerUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getPartnerByIdFailure());
    } else {
      yield put(getPartnerByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetPartnerById() {
  yield takeLatest(GET_PARTNER_BY_ID_REQUEST, getPartnerById);
}
