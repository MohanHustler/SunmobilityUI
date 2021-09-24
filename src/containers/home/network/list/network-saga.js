import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { networkUrl } from '../../../../utils/urls';
import { GET_NETWORK_REQUEST } from '../network-constants';
import { getNetworkSuccess, getNetworkFailure } from './network-action';

const { getRequest } = new HttpHelper();

export function* getNetwork({ data }) {
  try {
    const response = yield call(getRequest, {
      url: networkUrl(data)
    });

    if (response.error) {
      yield put(getNetworkFailure());
    } else {
      yield put(getNetworkSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetNetwork() {
  yield takeLatest(GET_NETWORK_REQUEST, getNetwork);
}
