import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { categoryUrlWithId } from '../../../../utils/urls';
import { UPDATE_CATEGORY_REQUEST } from '../category-constants';
import {
  updateCategorySuccess,
  updateCategoryFailure
} from './update-category-action';

const { patchRequest } = new HttpHelper();

export function* updateCategory({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: categoryUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateCategoryFailure());
    } else if (response.data && response.data.status) {
      yield put(updateCategorySuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.updateCategorySuccess();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateCategory() {
  yield takeLatest(UPDATE_CATEGORY_REQUEST, updateCategory);
}
