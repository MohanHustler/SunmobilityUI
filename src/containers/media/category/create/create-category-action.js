import {
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_FAILURE,
  ADD_CATEGORY_SUCCESS
} from '../category-constants';

const addCategoryRequest = (data) => ({
  data,
  type: ADD_CATEGORY_REQUEST
});

export const addCategorySuccess = () => ({
  type: ADD_CATEGORY_SUCCESS
});

export const addCategoryFailure = () => ({
  type: ADD_CATEGORY_FAILURE
});

export const addCategory = async (data, dispatch) => {
  dispatch(addCategoryRequest(data));
};
