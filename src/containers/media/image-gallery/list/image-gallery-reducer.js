import {
  GET_IMAGE_GALLERY_REQUEST,
  GET_IMAGE_GALLERY_FAILURE,
  GET_IMAGE_GALLERY_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  isLoading: false,
  imageGalleryList: []
};

const getImageGallery = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_GALLERY_REQUEST:
      return {
        ...state,
        isLoading: true,
        imageGalleryList: []
      };
    case GET_IMAGE_GALLERY_FAILURE:
      return {
        ...state,
        isLoading: false,
        imageGalleryList: []
      };
    case GET_IMAGE_GALLERY_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        imageGalleryList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getImageGallery;
