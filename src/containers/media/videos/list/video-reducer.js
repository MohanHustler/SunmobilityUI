import {
  GET_VIDEO_REQUEST,
  GET_VIDEO_FAILURE,
  GET_VIDEO_SUCCESS
} from '../video-constants';

const initialState = {
  isLoading: false,
  videoList: []
};

const getVideo = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEO_REQUEST:
      return {
        ...state,
        isLoading: true,
        videoList: []
      };
    case GET_VIDEO_FAILURE:
      return {
        ...state,
        isLoading: false,
        videoList: []
      };
    case GET_VIDEO_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        videoList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getVideo;
