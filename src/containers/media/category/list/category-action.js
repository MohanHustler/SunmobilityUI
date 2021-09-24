import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_SUCCESS
} from '../category-constants';

const getCategoryRequest = (data) => ({
  data,
  type: GET_CATEGORY_REQUEST
});

export const getCategorySuccess = (data) => ({
  data,
  type: GET_CATEGORY_SUCCESS
});

export const getCategoryFailure = () => ({
  type: GET_CATEGORY_FAILURE
});

export const getCategory = async (data, dispatch) => {
  dispatch(getCategoryRequest(data));
};
