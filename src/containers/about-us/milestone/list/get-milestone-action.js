import {
  GET_MILESTONE_BY_ID_REQUEST,
  GET_MILESTONE_BY_ID_FAILURE,
  GET_MILESTONE_BY_ID_SUCCESS
} from '../milestone-constants';

const getMilestoneByIdRequest = (data) => ({
  data,
  type: GET_MILESTONE_BY_ID_REQUEST
});

export const getMilestoneByIdSuccess = (data) => ({
  data,
  type: GET_MILESTONE_BY_ID_SUCCESS
});

export const getMilestoneByIdFailure = () => ({
  type: GET_MILESTONE_BY_ID_FAILURE
});

export const getMilestoneById = async (data, dispatch) => {
  dispatch(getMilestoneByIdRequest(data));
};
