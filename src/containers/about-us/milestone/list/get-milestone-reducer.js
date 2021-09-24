import {
  GET_MILESTONE_BY_ID_REQUEST,
  GET_MILESTONE_BY_ID_FAILURE,
  GET_MILESTONE_BY_ID_SUCCESS
} from '../milestone-constants';

const initialState = {
  isEditMilestoneLoading: false,
  milestoneData: {}
};

const getMilestoneById = (state = initialState, action) => {
  switch (action.type) {
    case GET_MILESTONE_BY_ID_REQUEST:
      return {
        ...state,
        isEditMilestoneLoading: true,
        milestoneData: {}
      };
    case GET_MILESTONE_BY_ID_FAILURE:
      return {
        ...state,
        isEditMilestoneLoading: false,
        milestoneData: {}
      };
    case GET_MILESTONE_BY_ID_SUCCESS:
      return {
        ...state,
        isEditMilestoneLoading: false,
        milestoneData: action.data
      };
    default:
      return state;
  }
};

export default getMilestoneById;
