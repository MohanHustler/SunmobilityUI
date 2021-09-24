import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { CATEGORY_URL } from '../../../../utils/urls';
import { ADD_CATEGORY_REQUEST } from '../category-constants';
import {
  addCategorySuccess,
  addCategoryFailure
} from './create-category-action';

const { postRequest } = new HttpHelper();

export function* addCategory({ data }) {
  try {
    const response = yield call(postRequest, {
      url: CATEGORY_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addCategoryFailure());
    } else if (response.data && response.data.status) {
      const { id, display_name } = response.data.data;
      Toastr.success(response.data.message, 'Success Response');
      data.addCategorySuccess(id, display_name);
      yield put(addCategorySuccess());
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateCategory() {
  yield takeLatest(ADD_CATEGORY_REQUEST, addCategory);
}
