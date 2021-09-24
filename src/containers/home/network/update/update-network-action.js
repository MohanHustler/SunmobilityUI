import {
  UPDATE_NETWORK_REQUEST,
  UPDATE_NETWORK_FAILURE,
  UPDATE_NETWORK_SUCCESS
} from '../network-constants';

const updateNetworkRequest = (data) => ({
  data,
  type: UPDATE_NETWORK_REQUEST
});

export const updateNetworkSuccess = () => ({
  type: UPDATE_NETWORK_SUCCESS
});

export const updateNetworkFailure = () => ({
  type: UPDATE_NETWORK_FAILURE
});

export const updateNetwork = async (data, dispatch) => {
  dispatch(updateNetworkRequest(data));
};
