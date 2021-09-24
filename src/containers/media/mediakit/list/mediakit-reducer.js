import {
  GET_MEDIAKIT_REQUEST,
  GET_MEDIAKIT_FAILURE,
  GET_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const initialState = {
  isLoading: false,
  mediakitList: []
};

const getImageGallery = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIAKIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        mediakitList: []
      };
    case GET_MEDIAKIT_FAILURE:
      return {
        ...state,
        isLoading: false,
        mediakitList: []
      };
    case GET_MEDIAKIT_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        mediakitList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getImageGallery;
