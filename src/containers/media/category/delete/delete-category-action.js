import {
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_SUCCESS
} from '../category-constants';

const deleteCategoryRequest = (data) => ({
  data,
  type: DELETE_CATEGORY_REQUEST
});

export const deleteCategorySuccess = () => ({
  type: DELETE_CATEGORY_SUCCESS
});

export const deleteCategoryFailure = () => ({
  type: DELETE_CATEGORY_FAILURE
});

export const deleteCategory = async (data, dispatch) => {
  dispatch(deleteCategoryRequest(data));
};
