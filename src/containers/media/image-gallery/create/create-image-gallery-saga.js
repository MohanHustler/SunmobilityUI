import * as Toastr from 'toastr';
import { call, put, takeLatest } from 'redux-saga/effects';

import HttpHelper from '../../../../utils/http-helper';
import { IMAGE_GALLERY_URL } from '../../../../utils/urls';
import { ADD_IMAGE_GALLERY_REQUEST } from '../image-gallery-constants';
import {
  addImageGallerySuccess,
  addImageGalleryFailure
} from './create-image-gallery-action';

const { postRequest } = new HttpHelper();

export function* addImageGallery({ data }) {
  try {
    const response = yield call(postRequest, {
      url: IMAGE_GALLERY_URL,
      data: data.formData
    });

    if (response.error) {
      yield put(addImageGalleryFailure());
    } else if (response.data && response.data.status) {
      yield put(addImageGallerySuccess());
      Toastr.success(response.data.message, 'Success Response');
      data.imageGallerySuccessCallback();
    } else {
      Toastr.error(response.data.message, 'Failure Response');
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchCreateImageGallery() {
  yield takeLatest(ADD_IMAGE_GALLERY_REQUEST, addImageGallery);
}
