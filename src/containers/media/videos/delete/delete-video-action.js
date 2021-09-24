import {
  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_FAILURE,
  DELETE_VIDEO_SUCCESS
} from '../video-constants';

const deleteVideoRequest = (data) => ({
  data,
  type: DELETE_VIDEO_REQUEST
});

export const deleteVideoSuccess = () => ({
  type: DELETE_VIDEO_SUCCESS
});

export const deleteVideoFailure = () => ({
  type: DELETE_VIDEO_FAILURE
});

export const deleteVideo = async (data, dispatch) => {
  dispatch(deleteVideoRequest(data));
};
