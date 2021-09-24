import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS
} from './dashboard-constants';

const initialState = {
  isLoading: false,
  dashboardList: []
};

const getDashboard = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        dashboardList: []
      };
    case GET_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        dashboardList: []
      };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboardList: action.data
      };
    default:
      return state;
  }
};

export default getDashboard;
