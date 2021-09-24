import * as Toastr from 'toastr';

import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { newsUrl } from '../../../../utils/urls';
import { ADD_NEWS_REQUEST } from '../news-constants';
import { addNewsSuccess, addNewsFailure } from './create-news-action';

const { postRequest } = new HttpHelper();

export function* addNews({ data }) {
  try {
    const response = yield call(postRequest, {
      url: newsUrl(),
      data: data.formData
    });

    if (response.error) {
      yield put(addNewsFailure());
    } else if (response.data && response.data.status) {
      yield put(addNewsSuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.newsSuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchAddNews() {
  yield takeLatest(ADD_NEWS_REQUEST, addNews);
}
