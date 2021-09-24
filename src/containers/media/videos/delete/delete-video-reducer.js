import {
  DELETE_VIDEO_REQUEST,
  DELETE_VIDEO_FAILURE,
  DELETE_VIDEO_SUCCESS
} from '../video-constants';

const initialState = {
  isLoading: false
};

const deleteVideo = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_VIDEO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteVideo;
