import {
  ADD_IMAGE_GALLERY_REQUEST,
  ADD_IMAGE_GALLERY_FAILURE,
  ADD_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const addImageGalleryRequest = (data) => ({
  data,
  type: ADD_IMAGE_GALLERY_REQUEST
});

export const addImageGallerySuccess = () => ({
  type: ADD_IMAGE_GALLERY_SUCCESS
});

export const addImageGalleryFailure = () => ({
  type: ADD_IMAGE_GALLERY_FAILURE
});

export const addImageGallery = async (data, dispatch) => {
  dispatch(addImageGalleryRequest(data));
};
