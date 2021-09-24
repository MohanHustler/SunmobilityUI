import {
  GET_MILESTONE_REQUEST,
  GET_MILESTONE_FAILURE,
  GET_MILESTONE_SUCCESS
} from '../milestone-constants';

const initialState = {
  isLoading: false,
  milestoneList: []
};

const getMilestone = (state = initialState, action) => {
  switch (action.type) {
    case GET_MILESTONE_REQUEST:
      return {
        ...state,
        isLoading: true,
        milestoneList: []
      };
    case GET_MILESTONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        milestoneList: []
      };
    case GET_MILESTONE_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        milestoneList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getMilestone;
