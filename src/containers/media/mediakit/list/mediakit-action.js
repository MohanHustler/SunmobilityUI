import {
  GET_MEDIAKIT_REQUEST,
  GET_MEDIAKIT_FAILURE,
  GET_MEDIAKIT_SUCCESS
} from '../mediakit-constants';

const getMediakitRequest = (data) => ({
  data,
  type: GET_MEDIAKIT_REQUEST
});

export const getMediakitSuccess = (data) => ({
  data,
  type: GET_MEDIAKIT_SUCCESS
});

export const getMediakitFailure = () => ({
  type: GET_MEDIAKIT_FAILURE
});

export const getMediakit = async (data, dispatch) => {
  dispatch(getMediakitRequest(data));
};
