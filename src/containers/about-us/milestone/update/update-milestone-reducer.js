import {
  UPDATE_MILESTONE_REQUEST,
  UPDATE_MILESTONE_FAILURE,
  UPDATE_MILESTONE_SUCCESS
} from '../milestone-constants';

const initialState = {
  isLoading: false
};

const updateMilestone = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MILESTONE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_MILESTONE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_MILESTONE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateMilestone;
