import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS
} from '../category-constants';

const initialState = {
  isLoading: false,
  categoryList: []
};

const getCategory = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        categoryList: []
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        categoryList: []
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categoryList: action.data
      };
    default:
      return state;
  }
};

export default getCategory;
