import {
  UPDATE_NETWORK_REQUEST,
  UPDATE_NETWORK_FAILURE,
  UPDATE_NETWORK_SUCCESS
} from '../network-constants';

const initialState = {
  isLoading: false
};

const updateNetwork = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NETWORK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_NETWORK_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateNetwork;
