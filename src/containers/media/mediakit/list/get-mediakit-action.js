import {
  GET_MEDIAKIT_BY_ID_REQUEST,
  GET_MEDIAKIT_BY_ID_FAILURE,
  GET_MEDIAKIT_BY_ID_SUCCESS
} from '../mediakit-constants';

const getMediakitByIdRequest = (data) => ({
  data,
  type: GET_MEDIAKIT_BY_ID_REQUEST
});

export const getMediakitByIdSuccess = (data) => ({
  data,
  type: GET_MEDIAKIT_BY_ID_SUCCESS
});

export const getMediakitByIdFailure = () => ({
  type: GET_MEDIAKIT_BY_ID_FAILURE
});

export const getMediakitById = async (data, dispatch) => {
  dispatch(getMediakitByIdRequest(data));
};
