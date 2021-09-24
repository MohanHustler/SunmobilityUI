import {
  DELETE_MILESTONE_REQUEST,
  DELETE_MILESTONE_FAILURE,
  DELETE_MILESTONE_SUCCESS
} from '../milestone-constants';

const initialState = {
  isLoading: false
};

const deleteMilestone = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MILESTONE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_MILESTONE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_MILESTONE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteMilestone;
