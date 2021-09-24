import {
  UPDATE_IMAGE_GALLERY_REQUEST,
  UPDATE_IMAGE_GALLERY_FAILURE,
  UPDATE_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const updateImageGalleryRequest = (data) => ({
  data,
  type: UPDATE_IMAGE_GALLERY_REQUEST
});

export const updateImageGallerySuccess = () => ({
  type: UPDATE_IMAGE_GALLERY_SUCCESS
});

export const updateImageGalleryFailure = () => ({
  type: UPDATE_IMAGE_GALLERY_FAILURE
});

export const updateImageGallery = async (data, dispatch) => {
  dispatch(updateImageGalleryRequest(data));
};
