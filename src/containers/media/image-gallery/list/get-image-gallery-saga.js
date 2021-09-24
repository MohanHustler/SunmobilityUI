import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { imageGalleryUrlWithId } from '../../../../utils/urls';
import { GET_IMAGE_GALLERY_BY_ID_REQUEST } from '../image-gallery-constants';
import {
  getImageGalleryByIdSuccess,
  getImageGalleryByIdFailure
} from './get-image-gallery-action';

const { getRequest } = new HttpHelper();

export function* getImageGalleryById({ data }) {
  try {
    const response = yield call(getRequest, {
      url: imageGalleryUrlWithId(data.id)
    });

    if (response.error) {
      yield put(getImageGalleryByIdFailure());
    } else {
      yield put(getImageGalleryByIdSuccess(response.data.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetImageGalleryById() {
  yield takeLatest(GET_IMAGE_GALLERY_BY_ID_REQUEST, getImageGalleryById);
}
