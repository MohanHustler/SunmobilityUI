import {
  DELETE_NETWORK_REQUEST,
  DELETE_NETWORK_FAILURE,
  DELETE_NETWORK_SUCCESS
} from '../network-constants';

const initialState = {
  isLoading: false
};

const deleteNetwork = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NETWORK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_NETWORK_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteNetwork;
