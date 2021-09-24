import {
  ADD_IMAGE_GALLERY_REQUEST,
  ADD_IMAGE_GALLERY_FAILURE,
  ADD_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  isLoading: false
};

const imageGallery = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE_GALLERY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_IMAGE_GALLERY_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_IMAGE_GALLERY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default imageGallery;
