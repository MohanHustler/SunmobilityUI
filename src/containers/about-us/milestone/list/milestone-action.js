import {
  GET_MILESTONE_REQUEST,
  GET_MILESTONE_FAILURE,
  GET_MILESTONE_SUCCESS
} from '../milestone-constants';

const getMilestoneRequest = (data) => ({
  data,
  type: GET_MILESTONE_REQUEST
});

export const getMilestoneSuccess = (data) => ({
  data,
  type: GET_MILESTONE_SUCCESS
});

export const getMilestoneFailure = () => ({
  type: GET_MILESTONE_FAILURE
});

export const getMilestone = async (data, dispatch) => {
  dispatch(getMilestoneRequest(data));
};
