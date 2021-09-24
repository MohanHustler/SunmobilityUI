import {
  ADD_MEDIAKIT_REQUEST,
  ADD_MEDIAKIT_FAILURE,
  ADD_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const initialState = {
  isLoading: false
};

const addMediaKit = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDIAKIT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_MEDIAKIT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_MEDIAKIT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addMediaKit;
