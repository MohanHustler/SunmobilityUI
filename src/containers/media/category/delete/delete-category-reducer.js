import {
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_SUCCESS
} from '../category-constants';

const initialState = {
  isLoading: false
};

const deleteCategory = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteCategory;
