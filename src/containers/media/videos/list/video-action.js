import {
  GET_VIDEO_REQUEST,
  GET_VIDEO_FAILURE,
  GET_VIDEO_SUCCESS
} from '../video-constants';

const getVideoRequest = (data) => ({
  data,
  type: GET_VIDEO_REQUEST
});

export const getVideoSuccess = (data) => ({
  data,
  type: GET_VIDEO_SUCCESS
});

export const getVideoFailure = () => ({
  type: GET_VIDEO_FAILURE
});

export const getVideo = async (data, dispatch) => {
  dispatch(getVideoRequest(data));
};
