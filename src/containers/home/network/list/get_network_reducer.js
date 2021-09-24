import {
  GET_NETWORK_BY_ID_REQUEST,
  GET_NETWORK_BY_ID_FAILURE,
  GET_NETWORK_BY_ID_SUCCESS
} from '../network-constants';

const initialState = {
  isEditNetworkLoading: false,
  networkData: {}
};

const getNetworkById = (state = initialState, action) => {
  switch (action.type) {
    case GET_NETWORK_BY_ID_REQUEST:
      return {
        ...state,
        isEditNetworkLoading: true,
        networkData: {}
      };
    case GET_NETWORK_BY_ID_FAILURE:
      return {
        ...state,
        isEditNetworkLoading: false,
        networkData: {}
      };
    case GET_NETWORK_BY_ID_SUCCESS:
      return {
        ...state,
        isEditNetworkLoading: false,
        networkData: action.data
      };
    default:
      return state;
  }
};

export default getNetworkById;
