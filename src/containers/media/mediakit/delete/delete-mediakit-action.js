import {
  DELETE_MEDIAKIT_REQUEST,
  DELETE_MEDIAKIT_FAILURE,
  DELETE_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const deleteMediakitRequest = (data) => ({
  data,
  type: DELETE_MEDIAKIT_REQUEST
});

export const deleteMediakitSuccess = () => ({
  type: DELETE_MEDIAKIT_SUCCESS
});

export const deleteMediakitFailure = () => ({
  type: DELETE_MEDIAKIT_FAILURE
});

export const deleteMediakit = async (data, dispatch) => {
  dispatch(deleteMediakitRequest(data));
};
