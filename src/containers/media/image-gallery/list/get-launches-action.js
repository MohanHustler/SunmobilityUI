import {
  GET_LAUNCHES_REQUEST,
  GET_LAUNCHES_FAILURE,
  GET_LAUNCHES_SUCCESS
} from '../image-gallery-constants';

const getLaunchesRequest = (data) => ({
  data,
  type: GET_LAUNCHES_REQUEST
});

export const getLaunchesSuccess = (data) => ({
  data,
  type: GET_LAUNCHES_SUCCESS
});

export const getLaunchesFailure = () => ({
  type: GET_LAUNCHES_FAILURE
});

export const getLaunches = async (data, dispatch) => {
  dispatch(getLaunchesRequest(data));
};
