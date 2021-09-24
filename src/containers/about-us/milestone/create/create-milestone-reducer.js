import {
  ADD_MILESTONE_REQUEST,
  ADD_MILESTONE_FAILURE,
  ADD_MILESTONE_SUCCESS
} from '../milestone-constants';

const initialState = {
  isLoading: false
};

const addMilestone = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MILESTONE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_MILESTONE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_MILESTONE_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addMilestone;
