import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../utils/http-helper';
import { DASHBOARD_URL } from '../../utils/urls';
import { GET_DASHBOARD_REQUEST } from './dashboard-constants';
import { getDashboardSuccess, getDashboardFailure } from './dashboard-action';

const { getRequest } = new HttpHelper();

export function* getDashboard() {
  try {
    const response = yield call(getRequest, {
      url: DASHBOARD_URL
    });

    if (response.error) {
      yield put(getDashboardFailure());
    } else {
      yield put(getDashboardSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetDashboard() {
  yield takeLatest(GET_DASHBOARD_REQUEST, getDashboard);
}
