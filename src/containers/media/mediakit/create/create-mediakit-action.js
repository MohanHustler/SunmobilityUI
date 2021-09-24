import {
  ADD_MEDIAKIT_REQUEST,
  ADD_MEDIAKIT_FAILURE,
  ADD_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const addMediakitRequest = (data) => ({
  data,
  type: ADD_MEDIAKIT_REQUEST
});

export const addMediakitSuccess = () => ({
  type: ADD_MEDIAKIT_SUCCESS
});

export const addMediakitFailure = () => ({
  type: ADD_MEDIAKIT_FAILURE
});

export const addMediakit = async (data, dispatch) => {
  dispatch(addMediakitRequest(data));
};
