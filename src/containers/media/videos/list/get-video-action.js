import {
  GET_VIDEO_BY_ID_REQUEST,
  GET_VIDEO_BY_ID_FAILURE,
  GET_VIDEO_BY_ID_SUCCESS
} from '../video-constants';

const getVideoByIdRequest = (data) => ({
  data,
  type: GET_VIDEO_BY_ID_REQUEST
});

export const getVideoByIdSuccess = (data) => ({
  data,
  type: GET_VIDEO_BY_ID_SUCCESS
});

export const getVideoByIdFailure = () => ({
  type: GET_VIDEO_BY_ID_FAILURE
});

export const getVideoById = async (data, dispatch) => {
  dispatch(getVideoByIdRequest(data));
};
