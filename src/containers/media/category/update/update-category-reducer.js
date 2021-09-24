import {
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_SUCCESS
} from '../category-constants';

const initialState = {
  isLoading: false
};

const updateCategory = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateCategory;
