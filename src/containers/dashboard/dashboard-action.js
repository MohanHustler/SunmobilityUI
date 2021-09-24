import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS
} from './dashboard-constants';

const getDashboardRequest = () => ({
  type: GET_DASHBOARD_REQUEST
});

export const getDashboardSuccess = (data) => ({
  data,
  type: GET_DASHBOARD_SUCCESS
});

export const getDashboardFailure = () => ({
  type: GET_DASHBOARD_FAILURE
});

export const getDashboard = async (dispatch) => {
  dispatch(getDashboardRequest());
};
