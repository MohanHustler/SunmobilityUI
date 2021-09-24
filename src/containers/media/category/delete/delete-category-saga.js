import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { categoryUrlWithId } from '../../../../utils/urls';
import { DELETE_CATEGORY_REQUEST } from '../category-constants';
import {
  deleteCategorySuccess,
  deleteCategoryFailure
} from './delete-category-action';

const { deleteRequest } = new HttpHelper();

export function* deleteCategory({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: categoryUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteCategoryFailure());
    } else {
      yield put(deleteCategorySuccess());
      data.deleteCategorySuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteCategory() {
  yield takeLatest(DELETE_CATEGORY_REQUEST, deleteCategory);
}
