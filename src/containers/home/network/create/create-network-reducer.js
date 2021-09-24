import {
  ADD_NETWORK_REQUEST,
  ADD_NETWORK_FAILURE,
  ADD_NETWORK_SUCCESS
} from '../network-constants';

const initialState = {
  isLoading: false
};

const addNetwork = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NETWORK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_NETWORK_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_NETWORK_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addNetwork;
