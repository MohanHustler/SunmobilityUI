import {
  ADD_VIDEO_REQUEST,
  ADD_VIDEO_FAILURE,
  ADD_VIDEO_SUCCESS
} from '../video-constants';

const addVideoRequest = (data) => ({
  data,
  type: ADD_VIDEO_REQUEST
});

export const addVideoSuccess = () => ({
  type: ADD_VIDEO_SUCCESS
});

export const addVideoFailure = () => ({
  type: ADD_VIDEO_FAILURE
});

export const addVideo = async (data, dispatch) => {
  dispatch(addVideoRequest(data));
};
