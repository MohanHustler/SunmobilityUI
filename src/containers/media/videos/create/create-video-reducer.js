import {
  ADD_VIDEO_REQUEST,
  ADD_VIDEO_FAILURE,
  ADD_VIDEO_SUCCESS
} from '../video-constants';

const initialState = {
  isLoading: false
};

const addVideo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_VIDEO_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addVideo;
