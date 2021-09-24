import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { categoryUrlWithIndicator } from '../../../../utils/urls';
import { GET_CATEGORY_REQUEST } from '../category-constants';
import { getCategorySuccess, getCategoryFailure } from './category-action';

const { getRequest } = new HttpHelper();

export function* getCategory({ data }) {
  try {
    const response = yield call(getRequest, {
      url: categoryUrlWithIndicator(data.indicator)
    });

    if (response.error) {
      yield put(getCategoryFailure());
    } else {
      yield put(getCategorySuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY_REQUEST, getCategory);
}
