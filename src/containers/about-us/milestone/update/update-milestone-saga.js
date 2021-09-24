import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { milestoneUrlWithId } from '../../../../utils/urls';
import { UPDATE_MILESTONE_REQUEST } from '../milestone-constants';
import {
  updateMilestoneSuccess,
  updateMilestoneFailure
} from './update-milestone-action';

const { patchRequest } = new HttpHelper();

export function* updateMilestone({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: milestoneUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateMilestoneFailure());
    } else if (response.data && response.data.status) {
      yield put(updateMilestoneSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.milestoneSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateMilestone() {
  yield takeLatest(UPDATE_MILESTONE_REQUEST, updateMilestone);
}
