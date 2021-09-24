import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { milestoneUrl } from '../../../../utils/urls';
import { GET_MILESTONE_REQUEST } from '../milestone-constants';
import { getMilestoneSuccess, getMilestoneFailure } from './milestone-action';

const { getRequest } = new HttpHelper();

export function* getMilestone({ data }) {
  try {
    const response = yield call(getRequest, {
      url: milestoneUrl(data)
    });

    if (response.error) {
      yield put(getMilestoneFailure());
    } else {
      yield put(getMilestoneSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetMilestone() {
  yield takeLatest(GET_MILESTONE_REQUEST, getMilestone);
}
