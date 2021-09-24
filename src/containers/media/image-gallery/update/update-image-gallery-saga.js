import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { imageGalleryUrlWithId } from '../../../../utils/urls';
import { UPDATE_IMAGE_GALLERY_REQUEST } from '../image-gallery-constants';
import {
  updateImageGallerySuccess,
  updateImageGalleryFailure
} from './update-image-gallery-action';

const { patchRequest } = new HttpHelper();

export function* updateImageGallery({ data }) {
  try {
    const response = yield call(patchRequest, {
      url: imageGalleryUrlWithId(data.id),
      data: data.formData
    });

    if (response.error) {
      yield put(updateImageGalleryFailure());
    } else if (response.data && response.data.status) {
      yield put(updateImageGallerySuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.imageGallerySuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchUpdateImageGallery() {
  yield takeLatest(UPDATE_IMAGE_GALLERY_REQUEST, updateImageGallery);
}
