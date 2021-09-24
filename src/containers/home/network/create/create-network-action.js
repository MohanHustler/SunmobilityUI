import {
  ADD_NETWORK_REQUEST,
  ADD_NETWORK_FAILURE,
  ADD_NETWORK_SUCCESS
} from '../network-constants';

const addNetworkRequest = (data) => ({
  data,
  type: ADD_NETWORK_REQUEST
});

export const addNetworkSuccess = () => ({
  type: ADD_NETWORK_SUCCESS
});

export const addNetworkFailure = () => ({
  type: ADD_NETWORK_FAILURE
});

export const addNetwork = async (data, dispatch) => {
  dispatch(addNetworkRequest(data));
};
