import {
  DELETE_IMAGE_GALLERY_REQUEST,
  DELETE_IMAGE_GALLERY_FAILURE,
  DELETE_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const deleteImageGalleryRequest = (data) => ({
  data,
  type: DELETE_IMAGE_GALLERY_REQUEST
});

export const deleteImageGallerySuccess = () => ({
  type: DELETE_IMAGE_GALLERY_SUCCESS
});

export const deleteImageGalleryFailure = () => ({
  type: DELETE_IMAGE_GALLERY_FAILURE
});

export const deleteImageGallery = async (data, dispatch) => {
  dispatch(deleteImageGalleryRequest(data));
};
