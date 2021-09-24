import {
  GET_IMAGE_GALLERY_BY_ID_REQUEST,
  GET_IMAGE_GALLERY_BY_ID_FAILURE,
  GET_IMAGE_GALLERY_BY_ID_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  isEditImageGalleryLoading: false,
  imageGalleryData: {}
};

const getImageGalleryById = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_GALLERY_BY_ID_REQUEST:
      return {
        ...state,
        isEditImageGalleryLoading: true,
        imageGalleryData: {}
      };
    case GET_IMAGE_GALLERY_BY_ID_FAILURE:
      return {
        ...state,
        isEditImageGalleryLoading: false,
        imageGalleryData: {}
      };
    case GET_IMAGE_GALLERY_BY_ID_SUCCESS:
      return {
        ...state,
        isEditImageGalleryLoading: false,
        imageGalleryData: action.data
      };
    default:
      return state;
  }
};

export default getImageGalleryById;
