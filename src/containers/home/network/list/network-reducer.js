import {
  GET_NETWORK_REQUEST,
  GET_NETWORK_FAILURE,
  GET_NETWORK_SUCCESS
} from '../network-constants';

const initialState = {
  isLoading: false,
  networkList: []
};

const getNetwork = (state = initialState, action) => {
  switch (action.type) {
    case GET_NETWORK_REQUEST:
      return {
        ...state,
        isLoading: true,
        networkList: []
      };
    case GET_NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false,
        networkList: []
      };
    case GET_NETWORK_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        networkList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getNetwork;
