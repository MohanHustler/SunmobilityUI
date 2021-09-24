import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { networkUrlWithId } from '../../../../utils/urls';
import { DELETE_NETWORK_REQUEST } from '../network-constants';
import {
  deleteNetworkSuccess,
  deleteNetworkFailure
} from './delete-network-action';

const { deleteRequest } = new HttpHelper();

export function* deleteNetwork({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: networkUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteNetworkFailure());
    } else {
      yield put(deleteNetworkSuccess());
      data.deleteNetworkSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteNetwork() {
  yield takeLatest(DELETE_NETWORK_REQUEST, deleteNetwork);
}
