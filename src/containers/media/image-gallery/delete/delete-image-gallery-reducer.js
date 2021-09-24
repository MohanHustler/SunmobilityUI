import {
  DELETE_IMAGE_GALLERY_REQUEST,
  DELETE_IMAGE_GALLERY_FAILURE,
  DELETE_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  isLoading: false
};

const deleteImageGallery = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_IMAGE_GALLERY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_IMAGE_GALLERY_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_IMAGE_GALLERY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteImageGallery;
