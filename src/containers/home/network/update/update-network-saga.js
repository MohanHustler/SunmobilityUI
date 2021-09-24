import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { networkUrlWithId } from '../../../../utils/urls';
import { UPDATE_NETWORK_REQUEST } from '../network-constants';
import {
  updateNetworkSuccess,
  updateNetworkFailure
} from './update-network-action';

const { patchRequest } = new HttpHelper();

export function* updateNetwork({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: networkUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateNetworkFailure());
    } else if (response.data && response.data.status) {
      yield put(updateNetworkSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.networkSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateNetwork() {
  yield takeLatest(UPDATE_NETWORK_REQUEST, updateNetwork);
}
