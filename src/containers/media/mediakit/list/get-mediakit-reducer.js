import {
  GET_MEDIAKIT_BY_ID_REQUEST,
  GET_MEDIAKIT_BY_ID_FAILURE,
  GET_MEDIAKIT_BY_ID_SUCCESS
} from '../mediakit-constants';

const initialState = {
  isEditMediakitLoading: false,
  mediakitData: {}
};

const getMediakitById = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDIAKIT_BY_ID_REQUEST:
      return {
        ...state,
        isEditMediakitLoading: true,
        mediakitData: {}
      };
    case GET_MEDIAKIT_BY_ID_FAILURE:
      return {
        ...state,
        isEditMediakitLoading: false,
        mediakitData: {}
      };
    case GET_MEDIAKIT_BY_ID_SUCCESS:
      return {
        ...state,
        isEditMediakitLoading: false,
        mediakitData: action.data
      };
    default:
      return state;
  }
};

export default getMediakitById;
