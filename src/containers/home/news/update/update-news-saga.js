import * as Toastr from 'toastr';

import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { newsUrlWithId } from '../../../../utils/urls';
import { UPDATE_NEWS_REQUEST } from '../news-constants';
import { updateNewsSuccess, updateNewsFailure } from './update-news-action';

const { patchRequest } = new HttpHelper();

export function* updateNews({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: newsUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateNewsFailure());
    } else if (response.data && response.data.status) {
      yield put(updateNewsSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.newsSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateNews() {
  yield takeLatest(UPDATE_NEWS_REQUEST, updateNews);
}
