import {
  GET_VIDEO_BY_ID_REQUEST,
  GET_VIDEO_BY_ID_FAILURE,
  GET_VIDEO_BY_ID_SUCCESS
} from '../video-constants';

const initialState = {
  isEditVideosLoading: false,
  videoData: {}
};

const getVideoById = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_BY_ID_REQUEST:
      return {
        ...state,
        isEditVideosLoading: true,
        videoData: {}
      };
    case GET_VIDEO_BY_ID_FAILURE:
      return {
        ...state,
        isEditVideosLoading: false,
        videoData: {}
      };
    case GET_VIDEO_BY_ID_SUCCESS:
      return {
        ...state,
        isEditVideosLoading: false,
        videoData: action.data
      };
    default:
      return state;
  }
};

export default getVideoById;
