import {
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_SUCCESS
} from '../category-constants';

const updateCategoryRequest = (data) => ({
  data,
  type: UPDATE_CATEGORY_REQUEST
});

export const updateCategorySuccess = () => ({
  type: UPDATE_CATEGORY_SUCCESS
});

export const updateCategoryFailure = () => ({
  type: UPDATE_CATEGORY_FAILURE
});

export const updateCategory = async (data, dispatch) => {
  dispatch(updateCategoryRequest(data));
};
