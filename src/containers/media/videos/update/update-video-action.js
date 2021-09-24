import {
  UPDATE_VIDEO_REQUEST,
  UPDATE_VIDEO_FAILURE,
  UPDATE_VIDEO_SUCCESS
} from '../video-constants';

const updateVideoRequest = (data) => ({
  data,
  type: UPDATE_VIDEO_REQUEST
});

export const updateVideoSuccess = () => ({
  type: UPDATE_VIDEO_SUCCESS
});

export const updateVideoFailure = () => ({
  type: UPDATE_VIDEO_FAILURE
});

export const updateVideo = async (data, dispatch) => {
  dispatch(updateVideoRequest(data));
};
