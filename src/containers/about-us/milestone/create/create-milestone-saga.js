import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { milestoneUrl } from '../../../../utils/urls';
import { ADD_MILESTONE_REQUEST } from '../milestone-constants';
import {
  addMilestoneSuccess,
  addMilestoneFailure
} from './create-milestone-action';

const { postRequest } = new HttpHelper();

export function* addMilestone({ data }) {
  try {
    const response = yield call(postRequest, {
      url: milestoneUrl(),
      data: data.formData
    });

    if (response.error) {
      yield put(addMilestoneFailure());
    } else if (response.data && response.data.status) {
      yield put(addMilestoneSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.milestoneSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateMilestone() {
  yield takeLatest(ADD_MILESTONE_REQUEST, addMilestone);
}
