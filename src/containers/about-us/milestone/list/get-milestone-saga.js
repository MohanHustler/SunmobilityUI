import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { milestoneUrlWithId } from '../../../../utils/urls';
import { GET_MILESTONE_BY_ID_REQUEST } from '../milestone-constants';
import {
  getMilestoneByIdSuccess,
  getMilestoneByIdFailure
} from './get-milestone-action';

const { getRequest } = new HttpHelper();

export function* getMilestoneById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: milestoneUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getMilestoneByIdFailure());
    } else {
      yield put(getMilestoneByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetMilestoneById() {
  yield takeLatest(GET_MILESTONE_BY_ID_REQUEST, getMilestoneById);
}
