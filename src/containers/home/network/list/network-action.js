import {
  GET_NETWORK_REQUEST,
  GET_NETWORK_FAILURE,
  GET_NETWORK_SUCCESS
} from '../network-constants';

const getNetworkRequest = (data) => ({
  data,
  type: GET_NETWORK_REQUEST
});

export const getNetworkSuccess = (data) => ({
  data,
  type: GET_NETWORK_SUCCESS
});

export const getNetworkFailure = () => ({
  type: GET_NETWORK_FAILURE
});

export const getNetwork = async (data, dispatch) => {
  dispatch(getNetworkRequest(data));
};
