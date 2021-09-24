import {
  DELETE_MEDIAKIT_REQUEST,
  DELETE_MEDIAKIT_FAILURE,
  DELETE_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const initialState = {
  isLoading: false
};

const deleteMediakit = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MEDIAKIT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_MEDIAKIT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_MEDIAKIT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteMediakit;
