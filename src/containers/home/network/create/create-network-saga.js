import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { NETWORK_URL } from '../../../../utils/urls';
import { ADD_NETWORK_REQUEST } from '../network-constants';
import { addNetworkSuccess, addNetworkFailure } from './create-network-action';

const { postRequest } = new HttpHelper();

export function* addNetwork({ data }) {
  try {
    const response = yield call(postRequest, {
      url: NETWORK_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addNetworkFailure());
    } else if (response.data && response.data.status) {
      Toastr.success(response.data.message, 'Success Response');
      yield put(addNetworkSuccess());
      data.networkSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateNetwork() {
  yield takeLatest(ADD_NETWORK_REQUEST, addNetwork);
}
