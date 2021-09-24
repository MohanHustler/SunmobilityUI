import {
  DELETE_MILESTONE_REQUEST,
  DELETE_MILESTONE_FAILURE,
  DELETE_MILESTONE_SUCCESS
} from '../milestone-constants';

const deleteMilestoneRequest = (data) => ({
  data,
  type: DELETE_MILESTONE_REQUEST
});

export const deleteMilestoneSuccess = () => ({
  type: DELETE_MILESTONE_SUCCESS
});

export const deleteMilestoneFailure = () => ({
  type: DELETE_MILESTONE_FAILURE
});

export const deleteMilestone = async (data, dispatch) => {
  dispatch(deleteMilestoneRequest(data));
};
