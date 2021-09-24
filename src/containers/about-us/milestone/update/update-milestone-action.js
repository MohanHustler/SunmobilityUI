import {
  UPDATE_MILESTONE_REQUEST,
  UPDATE_MILESTONE_FAILURE,
  UPDATE_MILESTONE_SUCCESS
} from '../milestone-constants';

const updateMilestoneRequest = (data) => ({
  data,
  type: UPDATE_MILESTONE_REQUEST
});

export const updateMilestoneSuccess = () => ({
  type: UPDATE_MILESTONE_SUCCESS
});

export const updateMilestoneFailure = () => ({
  type: UPDATE_MILESTONE_FAILURE
});

export const updateMilestone = async (data, dispatch) => {
  dispatch(updateMilestoneRequest(data));
};
