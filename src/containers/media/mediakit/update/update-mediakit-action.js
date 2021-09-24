import {
  UPDATE_MEDIAKIT_REQUEST,
  UPDATE_MEDIAKIT_FAILURE,
  UPDATE_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const updateMediakitRequest = (data) => ({
  data,
  type: UPDATE_MEDIAKIT_REQUEST
});

export const updateMediakitSuccess = () => ({
  type: UPDATE_MEDIAKIT_SUCCESS
});

export const updateMediakitFailure = () => ({
  type: UPDATE_MEDIAKIT_FAILURE
});

export const updateMediakit = async (data, dispatch) => {
  dispatch(updateMediakitRequest(data));
};
