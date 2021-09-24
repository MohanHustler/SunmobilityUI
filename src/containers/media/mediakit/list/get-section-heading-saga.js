import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { MEDIAKIT_SECTION_HEADING_URL } from '../../../../utils/urls';
import { GET_SECTION_HEADING_REQUEST } from '../mediakit-constants';
import {
  getSectionHeadingSuccess,
  getSectionHeadingFailure
} from './get-section-heading-action';

const { getRequest } = new HttpHelper();

export function* getSectionHeading() {
  try {
    const response = yield call(getRequest, {
      url: MEDIAKIT_SECTION_HEADING_URL
    });

    if (response.error) {
      yield put(getSectionHeadingFailure());
    } else {
      yield put(getSectionHeadingSuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetSectionHeading() {
  yield takeLatest(GET_SECTION_HEADING_REQUEST, getSectionHeading);
}
