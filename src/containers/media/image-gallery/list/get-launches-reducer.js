import {
  GET_LAUNCHES_REQUEST,
  GET_LAUNCHES_FAILURE,
  GET_LAUNCHES_SUCCESS
} from '../image-gallery-constants';

const initialState = {
  launchData: []
};

const getLaunches = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAUNCHES_REQUEST:
      return {
        ...state,
        launchData: []
      };
    case GET_LAUNCHES_FAILURE:
      return {
        ...state,
        launchData: []
      };
    case GET_LAUNCHES_SUCCESS:
      return {
        ...state,
        launchData: action.data
      };
    default:
      return state;
  }
};

export default getLaunches;
