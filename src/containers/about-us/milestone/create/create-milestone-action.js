import {
  ADD_MILESTONE_REQUEST,
  ADD_MILESTONE_FAILURE,
  ADD_MILESTONE_SUCCESS
} from '../milestone-constants';

const addMilestoneRequest = (data) => ({
  data,
  type: ADD_MILESTONE_REQUEST
});

export const addMilestoneSuccess = () => ({
  type: ADD_MILESTONE_SUCCESS
});

export const addMilestoneFailure = () => ({
  type: ADD_MILESTONE_FAILURE
});

export const addMilestone = async (data, dispatch) => {
  dispatch(addMilestoneRequest(data));
};
