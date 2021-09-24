import {
  GET_IMAGE_GALLERY_REQUEST,
  GET_IMAGE_GALLERY_FAILURE,
  GET_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const getImageGalleryRequest = (data) => ({
  data,
  type: GET_IMAGE_GALLERY_REQUEST
});

export const getImageGallerySuccess = (data) => ({
  data,
  type: GET_IMAGE_GALLERY_SUCCESS
});

export const getImageGalleryFailure = () => ({
  type: GET_IMAGE_GALLERY_FAILURE
});

export const getImageGallery = async (data, dispatch) => {
  dispatch(getImageGalleryRequest(data));
};
