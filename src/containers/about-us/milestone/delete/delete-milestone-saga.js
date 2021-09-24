import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { milestoneUrlWithId } from '../../../../utils/urls';
import { DELETE_MILESTONE_REQUEST } from '../milestone-constants';
import {
  deleteMilestoneSuccess,
  deleteMilestoneFailure
} from './delete-milestone-action';

const { deleteRequest } = new HttpHelper();

export function* deleteMilestone({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: milestoneUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteMilestoneFailure());
    } else {
      yield put(deleteMilestoneSuccess());
      data.deleteMilestoneSuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteMilestone() {
  yield takeLatest(DELETE_MILESTONE_REQUEST, deleteMilestone);
}
