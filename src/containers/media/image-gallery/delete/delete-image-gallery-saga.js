import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { imageGalleryUrlWithId } from '../../../../utils/urls';
import { DELETE_IMAGE_GALLERY_REQUEST } from '../image-gallery-constants';
import {
  deleteImageGallerySuccess,
  deleteImageGalleryFailure
} from './delete-image-gallery-action';

const { deleteRequest } = new HttpHelper();

export function* deleteImageGallery({ data }) {
  try {
    const response = yield call(deleteRequest, {
      url: imageGalleryUrlWithId(data.id)
    });

    if (response.error) {
      yield put(deleteImageGalleryFailure());
    } else {
      yield put(deleteImageGallerySuccess());
      data.deleteImageGallerySuccess();
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchDeleteImageGallery() {
  yield takeLatest(DELETE_IMAGE_GALLERY_REQUEST, deleteImageGallery);
}
