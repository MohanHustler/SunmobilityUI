import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { imageGalleryUrlWithCategory } from '../../../../utils/urls';
import { GET_IMAGE_GALLERY_REQUEST } from '../image-gallery-constants';
import {
  getImageGallerySuccess,
  getImageGalleryFailure
} from './image-gallery-action';

const { getRequest } = new HttpHelper();

export function* getImageGallery({ data }) {
  try {
    const response = yield call(getRequest, {
      url: imageGalleryUrlWithCategory(data.category_id, {
        pageNumber: data.pageNumber,
        pageSize: data.pageSize
      })
    });

    if (response.error) {
      yield put(getImageGalleryFailure());
    } else {
      yield put(getImageGallerySuccess(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchGetImageGallery() {
  yield takeLatest(GET_IMAGE_GALLERY_REQUEST, getImageGallery);
}
