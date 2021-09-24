import {
  UPDATE_MEDIAKIT_REQUEST,
  UPDATE_MEDIAKIT_FAILURE,
  UPDATE_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const initialState = {
  isLoading: false
};

const updateMediakit = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEDIAKIT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_MEDIAKIT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_MEDIAKIT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateMediakit;
