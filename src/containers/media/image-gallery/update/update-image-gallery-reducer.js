import {
  UPDATE_IMAGE_GALLERY_REQUEST,
  UPDATE_IMAGE_GALLERY_FAILURE,
  UPDATE_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  isLoading: false
};

const updateImageGallery = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IMAGE_GALLERY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_IMAGE_GALLERY_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_IMAGE_GALLERY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateImageGallery;
