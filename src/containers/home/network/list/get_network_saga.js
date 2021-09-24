import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { networkUrlWithId } from '../../../../utils/urls';
import { GET_NETWORK_BY_ID_REQUEST } from '../network-constants';
import {
  getNetworkByIdSuccess,
  getNetworkByIdFailure
} from './get_network_action';

const { getRequest } = new HttpHelper();

export function* getNetworkById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: networkUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getNetworkByIdFailure());
    } else {
      yield put(getNetworkByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetNetworkById() {
  yield takeLatest(GET_NETWORK_BY_ID_REQUEST, getNetworkById);
}
