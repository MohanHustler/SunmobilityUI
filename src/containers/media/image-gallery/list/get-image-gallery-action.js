import {
  GET_IMAGE_GALLERY_BY_ID_REQUEST,
  GET_IMAGE_GALLERY_BY_ID_FAILURE,
  GET_IMAGE_GALLERY_BY_ID_SUCCESS
} from '../image-gallery-constants';

const getImageGalleryByIdRequest = (data) => ({
  data,
  type: GET_IMAGE_GALLERY_BY_ID_REQUEST
});

export const getImageGalleryByIdSuccess = (data) => ({
  data,
  type: GET_IMAGE_GALLERY_BY_ID_SUCCESS
});

export const getImageGalleryByIdFailure = () => ({
  type: GET_IMAGE_GALLERY_BY_ID_FAILURE
});

export const getImageGalleryById = async (data, dispatch) => {
  dispatch(getImageGalleryByIdRequest(data));
};
