import {
  UPDATE_VIDEO_REQUEST,
  UPDATE_VIDEO_FAILURE,
  UPDATE_VIDEO_SUCCESS
} from '../video-constants';

const initialState = {
  isLoading: false
};

const updateVideo = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIDEO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateVideo;
